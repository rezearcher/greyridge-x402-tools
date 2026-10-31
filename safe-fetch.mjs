// safeFetch: free x402 preflight before paying, on-chain receipt proof after.
// Dependency-free. Bring your own x402-capable fetch (e.g. wrapFetchWithPayment
// from x402-fetch) as `payFetch`; defaults to global fetch (no payment).
//
//   import { safeFetch } from "greyridge-x402-tools/safe-fetch.mjs";
//   const r = await safeFetch(url, { payFetch: wrapFetchWithPayment(fetch, account) });
//   r.response / r.preflight (PAY|CAUTION|AVOID) / r.receipt (SETTLED|...)
const CHECK_BASE = process.env.GREYRIDGE_CHECK_BASE || "https://api.greyridgesignals.ai";

export class PreflightBlocked extends Error {
  constructor(preflight) {
    super(`preflight ${preflight?.verdict}: ${preflight?.url ?? "?"}`);
    this.name = "PreflightBlocked";
    this.preflight = preflight;
  }
}

async function check(path, params, f = fetch) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v) q.set(k, v);
  const r = await f(`${CHECK_BASE}${path}?${q}`, { headers: { "user-agent": "greyridge-safe-fetch-js/0.1" } });
  try { return await r.json(); } catch { return { verdict: "UNVERIFIED", error: `non-JSON HTTP ${r.status}` }; }
}

export function settlementTx(resp) {
  for (const h of ["x-payment-response", "payment-response"]) {
    const raw = resp.headers.get(h);
    if (!raw) continue;
    try {
      const d = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
      const tx = d.transaction || d.txHash || d.tx;
      if (typeof tx === "string" && /^0x[0-9a-fA-F]{64}$/.test(tx)) return tx;
    } catch { /* try next header */ }
  }
  return null;
}

export class PriceCapExceeded extends Error {
  constructor(preflight, cap, charged) {
    super(`price cap: ${charged ?? "unknown"} USDC vs maxPerCallUsd ${cap}: ${preflight?.url ?? "?"}`);
    this.name = "PriceCapExceeded";
    this.preflight = preflight; this.cap = cap; this.charged = charged;
  }
}

// intentId idempotency: a settled intent is journaled (memory + optional
// journalDir file) so a retry/crash-restart never pays twice; returns the prior record.
const _intents = new Map();
async function journalPath(dir, id) {
  const { join } = await import("node:path");
  return join(dir, `${String(id).replace(/[^\w.-]/g, "_")}.json`);
}

export async function safeFetch(url, opts = {}) {
  const { payFetch = fetch, advertised, blockOnCaution = false, verifyReceipt = true, init, checkFetch = fetch,
          maxPerCallUsd, intentId, journalDir } = opts;
  if (intentId) {
    if (_intents.has(intentId)) return { ..._intents.get(intentId), replayed: true };
    if (journalDir) {
      try {
        const { readFile } = await import("node:fs/promises");
        const prior = JSON.parse(await readFile(await journalPath(journalDir, intentId), "utf8"));
        return { response: null, preflight: null, receipt: prior.receipt, tx: prior.tx, notes: ["replayed from journal; not paid again"], replayed: true, settled: prior.receipt?.verdict === "SETTLED" };
      } catch { /* no journal entry: proceed */ }
    }
  }
  const preflight = await check("/x402/preflight/preview", { url, advertised }, checkFetch);
  if (preflight.verdict === "AVOID" || (preflight.verdict === "CAUTION" && blockOnCaution)) {
    throw new PreflightBlocked(preflight);
  }
  if (maxPerCallUsd != null) {
    const charged = Number(preflight.price_accuracy?.charged_usdc);
    if (!Number.isFinite(charged) || charged > maxPerCallUsd) throw new PriceCapExceeded(preflight, maxPerCallUsd, Number.isFinite(charged) ? charged : null); // fail closed
  }
  const response = await payFetch(url, init);
  const out = { response, preflight, receipt: null, tx: null, notes: [], get settled() { return this.receipt?.verdict === "SETTLED"; } };
  const remember = async () => {
    if (!intentId) return;
    _intents.set(intentId, out);
    if (journalDir) {
      try {
        const { mkdir, writeFile } = await import("node:fs/promises");
        await mkdir(journalDir, { recursive: true });
        await writeFile(await journalPath(journalDir, intentId), JSON.stringify({ url, tx: out.tx, receipt: out.receipt, at: new Date().toISOString() }));
      } catch { out.notes.push("journal write failed"); }
    }
  };
  if (!verifyReceipt) { await remember(); return out; }
  const tx = settlementTx(response);
  if (!tx) { out.notes.push("no settlement tx in response headers; receipt proof skipped"); await remember(); return out; }
  out.tx = tx;
  out.receipt = await check("/x402/receipt-verify/preview", { tx, url }, checkFetch);
  await remember();
  return out;
}

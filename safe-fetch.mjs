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

export async function safeFetch(url, opts = {}) {
  const { payFetch = fetch, advertised, blockOnCaution = false, verifyReceipt = true, init, checkFetch = fetch } = opts;
  const preflight = await check("/x402/preflight/preview", { url, advertised }, checkFetch);
  if (preflight.verdict === "AVOID" || (preflight.verdict === "CAUTION" && blockOnCaution)) {
    throw new PreflightBlocked(preflight);
  }
  const response = await payFetch(url, init);
  const out = { response, preflight, receipt: null, tx: null, notes: [], get settled() { return this.receipt?.verdict === "SETTLED"; } };
  if (!verifyReceipt) return out;
  const tx = settlementTx(response);
  if (!tx) { out.notes.push("no settlement tx in response headers; receipt proof skipped"); return out; }
  out.tx = tx;
  out.receipt = await check("/x402/receipt-verify/preview", { tx, url }, checkFetch);
  return out;
}

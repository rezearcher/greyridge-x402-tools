// swap-gate.mjs — drop-in pre-trade token gate for agents (Base, x402).
// Usage:
//   import { gateToken, guardedSwap } from "./swap-gate.mjs";
//   const g = await gateToken("0x4200...0006");           // free preview, no wallet
//   const g = await gateToken(addr, { fetchPaid });       // paid /gate/swap ($0.008) with an x402 fetch
//   await guardedSwap(addr, () => doSwap(), { fetchPaid }); // runs doSwap only if decision === "go"
const BASE = process.env.GATE_BASE || "https://x402-data-api.sigrunner.workers.dev";

export async function gateToken(token, { fetchPaid, side = "buy", notionalUsd = 100 } = {}) {
  const q = `token=${encodeURIComponent(token)}&side=${side}&notional_usd=${notionalUsd}`;
  const url = fetchPaid ? `${BASE}/gate/swap?${q}` : `${BASE}/gate/swap/preview?${q}`;
  const res = await (fetchPaid || fetch)(url);
  if (!res.ok) throw new Error(`gate ${res.status}`);
  return res.json(); // { decision: "go"|"hold"|"block", verdict, risk_score, flags, ... }
}

export async function guardedSwap(token, doSwap, opts = {}) {
  const g = await gateToken(token, opts);
  if (g.decision !== "go") return { executed: false, gate: g };
  return { executed: true, gate: g, result: await doSwap() };
}

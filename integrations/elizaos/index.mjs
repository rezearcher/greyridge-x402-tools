// ElizaOS plugin: pre-trade token-safety gate for Base ERC-20s (Grey Ridge, x402).
// Uses the free preview route (no wallet). The paid, any-token route is GET /gate/swap ($0.008 USDC via x402).
const BASE = process.env.GREYRIDGE_X402_BASE || "https://x402-data-api.sigrunner.workers.dev";
const ADDR = /0x[a-fA-F0-9]{40}/;

async function gate(token, fetchImpl = fetch) {
  const r = await fetchImpl(`${BASE}/gate/swap/preview?token=${encodeURIComponent(token)}`);
  if (!r.ok) throw new Error(`gate ${r.status}`);
  return r.json();
}

export const checkBaseToken = {
  name: "CHECK_BASE_TOKEN",
  similes: ["TOKEN_SAFETY_CHECK", "HONEYPOT_CHECK", "RUG_CHECK"],
  description: "Run a GO/HOLD/BLOCK pre-trade safety check on a Base ERC-20 before swapping into it.",
  validate: async (_rt, message) => ADDR.test(message?.content?.text ?? ""),
  handler: async (_rt, message, _state, _opts, callback) => {
    const token = (message.content.text.match(ADDR) || [])[0];
    const g = await gate(token);
    const text = `${String(g.decision).toUpperCase()}: ${g.reason} (risk ${g.risk_score}, ${g.verdict}). ${(g.flags || []).join("; ")}`;
    callback?.({ text, content: g });
    return true;
  },
  examples: [[
    { name: "user", content: { text: "Is 0x4200000000000000000000000000000000000006 safe to buy?" } },
    { name: "agent", content: { text: "GO: token passes safety checks (risk 0, SAFE).", action: "CHECK_BASE_TOKEN" } },
  ]],
};

export const greyridgeGatePlugin = {
  name: "greyridge-token-gate",
  description: "Pre-trade token safety gate for Base (x402 pay-per-call, free preview).",
  actions: [checkBaseToken],
};
export default greyridgeGatePlugin;

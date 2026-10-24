---
title: "Keep your ElizaOS agent out of tokens it cannot sell \u2014 pre-trade swap gate (ElizaOS)"
description: "Keep your ElizaOS agent out of tokens it cannot sell with a drop-in ElizaOS pre-trade safety check: unsellable position / no confirmable exit. Paid inline with x402 USDC ($0.008/call), no API key, fails closed."
---
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why did my ElizaOS agent buy a token it can't sell?", "acceptedAnswer": {"@type": "Answer", "text": "Most pre-trade checks only test the buy side. The Grey Ridge gate confirms an exitable pool before it returns GO, and returns HOLD when the sell path is unverifiable, so the agent never enters a position it cannot leave."}}, {"@type": "Question", "name": "What does a HOLD mean?", "acceptedAnswer": {"@type": "Answer", "text": "HOLD means the gate found no block-level danger but could not confirm the trade is safely exitable/sizable \u2014 so it declines to auto-approve. The agent should skip or escalate, never force the swap."}}]}
</script>

# Keep your ElizaOS agent out of tokens it cannot sell

**The failure:** A buy is only half a trade. The agent gets filled on a token whose sell-side liquidity is thin, fake, or gone — so the exit never clears and the position is stuck even though it was never a classic honeypot.

Searching *"ElizaOS agent bought a token it cannot sell on Base"* means the agent already took the loss — or you are wiring a guard so it
never does. For ElizaOS agents trading ERC-20s on Base, the fix is one call between *"the agent
decided to buy"* and *"the agent signs the swap."*

**What the gate does for this failure:** The gate will not return **GO** unless it can confirm an exitable pool. When the sell path is unverifiable it returns **HOLD** (`decision: hold`) with the reason — it refuses to green-light a trade it cannot confirm you can get out of.

## Proof — live, against production (2026-10-24)

Real `/gate/swap/preview` responses fetched when this page was built. Re-run them yourself; no account:

| Token | Verdict | Why |
|---|---|---|
| `aero` (safe control) | `GO` / SAFE (risk 15) | token passes safety checks; trade is 0.01% of pool liquidity |
| token with no confirmable exit pool (returns HOLD) | `HOLD` / SAFE (risk 0) | no verifiable Uniswap v3 WETH-pool liquidity — cannot confirm the position is exitable or size the trade; not safe to auto-buy |

**Reason the gate returned HOLD:** no verifiable Uniswap v3 WETH-pool liquidity — cannot confirm the position is exitable or size the trade; not safe to auto-buy

```bash
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=aero"
```

## Wire it into ElizaOS (under a minute)

```bash
npm install github:rezearcher/plugin-swap-gate
```

```js
import swapGatePlugin from "@grey-ridge/elizaos-plugin-swap-gate";

export const character = {
  name: "TraderBot",
  // ...
  plugins: [swapGatePlugin],
};
```

The plugin registers two paid pre-trade actions — the agent picks `GATE_SWAP` (final gate, sized to a notional) or `TOKEN_REPORT` (screening) from the user's intent. No extra wiring; it reads `PRIVATE_KEY` from the agent environment for the x402 payment.

**Fails closed.** If the gate is ever unreachable the plugin degrades to the free preview and,
if that is down too, returns a non-GO — an outage can never green-light a swap.

## Pricing — the guard rides every trade

| Route | Price | What you get |
|---|---|---|
| `GET /gate/swap/preview` | free (3/day/IP) | GO / HOLD / BLOCK verdict + the live fields above |
| `GET /gate/swap` | **$0.008 USDC** (x402) | verdict **+ entry/exit sim + round-trip breakeven + max safe size** |
| `GET /chain/token-report` | $0.01 USDC (x402) | full evidence: honeypot sim, tax, admin controls, liquidity |

At 20 trades/day that is $0.16/day — **3.75× cheaper per call than the nearest x402 pre-trade gate**,
Base-native, honeypot + sizing in one call.

## ElizaOS agents — the other failure modes

- [Honeypot — buy works, sell reverts](elizaos-token-safety-plugin-honeypot.html)
- [Unsellable / no confirmable exit](elizaos-token-safety-plugin-cant-sell-exit-trap.html)
- [Trade too big for the pool / price impact](elizaos-token-safety-plugin-trade-too-big-price-impact.html)
- [Rug via admin controls (mint/blacklist/pause)](elizaos-token-safety-plugin-rug-admin-controls.html)

## FAQ

### Why did my ElizaOS agent buy a token it can't sell?

Most pre-trade checks only test the buy side. The Grey Ridge gate confirms an exitable pool before it returns GO, and returns HOLD when the sell path is unverifiable, so the agent never enters a position it cannot leave.

### What does a HOLD mean?

HOLD means the gate found no block-level danger but could not confirm the trade is safely exitable/sizable — so it declines to auto-approve. The agent should skip or escalate, never force the swap.

---

Install guide: [ElizaOS swap gate](elizaos-token-safety-plugin.html) ·
other frameworks: [ElizaOS](https://rezearcher.github.io/greyridge-x402-tools/elizaos-token-safety-plugin.html) ·
[Vercel AI SDK](https://rezearcher.github.io/greyridge-x402-tools/vercel-ai-sdk-swap-guard.html) ·
[LangChain.js](https://rezearcher.github.io/greyridge-x402-tools/langchain-honeypot-check-tool.html).
Source: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) ·
[awesome-x402](https://github.com/xpaysh/awesome-x402) ·
API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402).

[Back](index.html)

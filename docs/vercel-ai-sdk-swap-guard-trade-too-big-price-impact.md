---
title: "Size every Vercel AI SDK agent trade to the pool before it swaps \u2014 pre-trade swap gate (Vercel AI SDK)"
description: "Size every Vercel AI SDK agent trade to the pool before it swaps with a drop-in Vercel AI SDK pre-trade safety check: order too big for the pool / price impact. Paid inline with x402 USDC ($0.008/call), no API key, fails closed."
---
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I stop a Vercel AI SDK agent making a trade too big for the pool?", "acceptedAnswer": {"@type": "Answer", "text": "Size the order against live pool depth before signing. The paid Grey Ridge gate simulates entry and exit slippage at your exact notional and returns the max safe size, so the agent never routes an order the pool cannot absorb."}}, {"@type": "Question", "name": "What is round-trip breakeven?", "acceptedAnswer": {"@type": "Answer", "text": "The price move the token needs just to cover the slippage you pay getting in AND back out at your size. If the agent's thesis is smaller than breakeven, the trade loses money before fees \u2014 the gate hands the agent that number up front."}}]}
</script>

# Size every Vercel AI SDK agent trade to the pool before it swaps

**The failure:** The token is real and sellable — but the agent routes a $50k order into a pool that cannot absorb it, eats double-digit slippage on entry, and more on the way out. The round trip loses money even though nothing was a scam.

Searching *"Vercel AI SDK agent trade too big for pool slippage on Base"* means the agent already took the loss — or you are wiring a guard so it
never does. For Vercel AI SDK agents trading ERC-20s on Base, the fix is one call between *"the agent
decided to buy"* and *"the agent signs the swap."*

**What the gate does for this failure:** The free verdict reports the live pool depth (`liquidity_usd`) and the impact of a baseline order (`impact_pct_of_pool`). The paid `/gate/swap` route runs the real AMM curve at *your* notional and returns entry/exit simulation, round-trip breakeven %, and the **max safe size** that stays under your impact threshold.

## Proof — live, against production (2026-10-24)

Real `/gate/swap/preview` responses fetched when this page was built. Re-run them yourself; no account:

| Token | Verdict | Why |
|---|---|---|
| `aero` (safe control) | `GO` / SAFE (risk 15) | token passes safety checks; trade is 0.01% of pool liquidity |
| thinner-liquidity pool | `GO` / SAFE (risk 20) | token passes safety checks; trade is 0.04% of pool liquidity |

**What the gate sees (live pool depth):**

- `AERO` pool liquidity **$1,377,794** → a $50k order is ~**3.6%** of the pool (rough proxy; the paid route runs the real AMM curve)
- `DEGEN` pool liquidity **$246,919** → a $50k order is ~**20.2%** of the pool (rough proxy; the paid route runs the real AMM curve)

At $100 both pass; at size the thinner pool is where the agent bleeds. The paid `/gate/swap` sizes your *actual* notional against the live curve and returns the max safe size — the number a bare honeypot flag never gives you.

```bash
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=aero"
```

## Wire it into Vercel AI SDK (under a minute)

```bash
npm install github:rezearcher/vercel-ai-swap-gate ai zod
```

```js
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createSwapGuard } from "@grey-ridge/vercel-ai-swap-gate";

const swapGuard = createSwapGuard({ privateKey: process.env.PRIVATE_KEY });

await generateText({
  model: openai("gpt-4o"),
  tools: { swapGuard },
  prompt: "Buy $500 of 0x... if it is safe",
});
```

The tool returns the full gate verdict plus three fields your agent can branch on directly — `proceed` (boolean), `decision` (go/hold/block) and the sizing summary. **Fails closed:** if the gate is ever unreachable the tool returns `proceed: false`, so an outage can never green-light a swap.

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

## Vercel AI SDK agents — the other failure modes

- [Honeypot — buy works, sell reverts](vercel-ai-sdk-swap-guard-honeypot.html)
- [Unsellable / no confirmable exit](vercel-ai-sdk-swap-guard-cant-sell-exit-trap.html)
- [Trade too big for the pool / price impact](vercel-ai-sdk-swap-guard-trade-too-big-price-impact.html)
- [Rug via admin controls (mint/blacklist/pause)](vercel-ai-sdk-swap-guard-rug-admin-controls.html)

## FAQ

### How do I stop a Vercel AI SDK agent making a trade too big for the pool?

Size the order against live pool depth before signing. The paid Grey Ridge gate simulates entry and exit slippage at your exact notional and returns the max safe size, so the agent never routes an order the pool cannot absorb.

### What is round-trip breakeven?

The price move the token needs just to cover the slippage you pay getting in AND back out at your size. If the agent's thesis is smaller than breakeven, the trade loses money before fees — the gate hands the agent that number up front.

---

Install guide: [Vercel AI SDK swap gate](vercel-ai-sdk-swap-guard.html) ·
other frameworks: [ElizaOS](https://rezearcher.github.io/greyridge-x402-tools/elizaos-token-safety-plugin.html) ·
[Vercel AI SDK](https://rezearcher.github.io/greyridge-x402-tools/vercel-ai-sdk-swap-guard.html) ·
[LangChain.js](https://rezearcher.github.io/greyridge-x402-tools/langchain-honeypot-check-tool.html).
Source: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) ·
[awesome-x402](https://github.com/xpaysh/awesome-x402) ·
API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402).

[Back](index.html)

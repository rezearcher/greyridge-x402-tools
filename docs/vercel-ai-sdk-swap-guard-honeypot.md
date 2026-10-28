---
title: "Stop your Vercel AI SDK agent from buying a honeypot on Base \u2014 pre-trade swap gate (Vercel AI SDK)"
description: "Stop your Vercel AI SDK agent from buying a honeypot on Base with a drop-in Vercel AI SDK pre-trade safety check: honeypot (the buy works, every sell reverts). Paid inline with x402 USDC ($0.008/call), no API key, fails closed."
---
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I stop a Vercel AI SDK agent buying a honeypot on Base?", "acceptedAnswer": {"@type": "Answer", "text": "Put a pre-trade gate between the decision and the signed swap. The Grey Ridge swap gate statically checks the token is a real ERC-20 with a working sell path and returns BLOCK when it is not \u2014 before the agent spends a cent."}}, {"@type": "Question", "name": "Does the gate guarantee a token is safe?", "acceptedAnswer": {"@type": "Answer", "text": "No. It is a heuristic static + liquidity check (LLM/contract-risk signal), not a guarantee or an audit. A BLOCK is reliable; a GO means no honeypot/rug signal was detected at check time, not that the token is risk-free."}}]}
</script>

# Stop your Vercel AI SDK agent from buying a honeypot on Base

**The failure:** The agent finds a token, the buy confirms, the chart looks alive — and then every sell reverts. The position is a honeypot and the capital is trapped. By the time a human notices, the funds are gone.

Searching *"stop my Vercel AI SDK agent buying a honeypot token on Base"* means the agent already took the loss — or you are wiring a guard so it
never does. For Vercel AI SDK agents trading ERC-20s on Base, the fix is one call between *"the agent
decided to buy"* and *"the agent signs the swap."*

**What the gate does for this failure:** The gate hard-**blocks** anything it cannot confirm is a real, buyable ERC-20 with a working sell path. The exact reason comes back in `flags[]` so the agent logs *why* it refused, not just that it did.

## Proof — live, against production (2026-10-24)

Real `/gate/swap/preview` responses fetched when this page was built. Re-run them yourself; no account:

| Token | Verdict | Why |
|---|---|---|
| `aero` (safe control) | `GO` / SAFE (risk 15) | token passes safety checks; trade is 0.01% of pool liquidity |
| unverifiable address (negative control) | `BLOCK` / AVOID (risk 100) | address is not a contract / not an ERC-20 |

**Reason the gate returned BLOCK:** address is not a contract / not an ERC-20

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

### How do I stop a Vercel AI SDK agent buying a honeypot on Base?

Put a pre-trade gate between the decision and the signed swap. The Grey Ridge swap gate statically checks the token is a real ERC-20 with a working sell path and returns BLOCK when it is not — before the agent spends a cent.

### Does the gate guarantee a token is safe?

No. It is a heuristic static + liquidity check (LLM/contract-risk signal), not a guarantee or an audit. A BLOCK is reliable; a GO means no honeypot/rug signal was detected at check time, not that the token is risk-free.

---

Install guide: [Vercel AI SDK swap gate](vercel-ai-sdk-swap-guard.html) ·
other frameworks: [ElizaOS](https://rezearcher.github.io/greyridge-x402-tools/elizaos-token-safety-plugin.html) ·
[Vercel AI SDK](https://rezearcher.github.io/greyridge-x402-tools/vercel-ai-sdk-swap-guard.html) ·
[LangChain.js](https://rezearcher.github.io/greyridge-x402-tools/langchain-honeypot-check-tool.html).
Source: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) ·
[awesome-x402](https://github.com/xpaysh/awesome-x402) ·
API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402).

[Back](index.html)

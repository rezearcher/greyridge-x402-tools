---
title: LangChain honeypot-check tool — pre-trade token gate for Base agents
description: A LangChain.js tool that checks a Base ERC-20 for honeypots, unsellable positions and rug controls before your agent swaps. Returns proceed:false / decision:block when the check does not settle. Paid inline x402 USDC $0.008/call, no key.
---
# LangChain honeypot-check tool — pre-trade token gate for Base agents

Put one call between *"the agent decided to buy"* and *"the agent signs the swap"*. For
LangChain.js agents trading ERC-20s on Base, this is the pre-trade safety gate: it
checks the token for honeypots, whether the position is actually sellable, the admin
controls that let a deployer rug it, and whether your order is too large for the pool —
then returns **GO / HOLD / BLOCK** plus the trade sizing. Paid inline with
**x402 USDC — $0.008/call**. No API key, no dashboard, no subscription.

## Install

```bash
npm install @grey-ridge/langchain-swap-gate @langchain/core zod
```

```js
import { createSwapGuard } from "@grey-ridge/langchain-swap-gate";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";

const swapGuard = createSwapGuard({ privateKey: process.env.PRIVATE_KEY });

const agent = createReactAgent({
  llm: new ChatOpenAI({ model: "gpt-4o" }),
  tools: [swapGuard],
});
```

A second `tokenReport` screening tool is exported too — wire both and the agent screens early, then gates at the moment of the swap. The tool uses `responseFormat: "content_and_artifact"` so the structured verdict is available to your graph, not just prose.

## Live verdicts (run against production right now)

These are real responses from the production gate, fetched when this page was built
(2026-10-24). Re-run them yourself against the free preview — no account:

| Token | Verdict | Why |
|---|---|---|
| `aero` (live Base token) | `GO` / SAFE (risk 15) | token passes safety checks; trade is 0.01% of pool liquidity |
| dead address (negative control) | `BLOCK` / AVOID (risk 100) | address is not a contract / not an ERC-20 |

```bash
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=aero"
```

The free preview allows 3 real-token checks/day/IP so you can wire the plugin before you
pay a cent.

## The sizing wedge — why this beats a bare safety flag

Every other pre-trade check ends at a yes/no honeypot flag. On a **GO**, this gate also
returns the number that actually bounds your downside:

- **Entry simulation** — tokens you actually receive at spot and the USD lost to entry slippage, for $100 / $1k / $10k / $50k.
- **Exit simulation** — USD recoverable vs lost to slippage if you sell that same size back out.
- **Round-trip breakeven %** — the price move you need just to break even on the two-sided slippage.
- **Max safe size** — the largest notional that stays under your impact threshold for this pool.

So the agent doesn't just learn *"this token is safe"* — it learns, for the specific
pool and your specific notional, the exact price move needed to break even and the
largest size that stays under your impact threshold. That is the bounded-downside number
a trading agent needs, and it is on the paid `/gate/swap` response ($0.008), computed
live per token — not on the free verdict.

| | **Grey Ridge swap gate** | GoPlus token API | 1inch / router safety | roll-your-own |
|---|---|---|---|---|
| Ships as a native LangChain.js drop-in | ✅ | you wrap it | you wrap it | you build it |
| Pay-per-call, no account / key / dashboard | ✅ x402 USDC $0.008 | API key + plan | — | — |
| Fails **closed** (outage never green-lights a swap) | ✅ | ✗ | ✗ | depends |
| Returns trade **sizing + round-trip breakeven**, not just a flag | ✅ | ✗ | ✗ | ✗ |


## Pricing

| Route | Price | What you get |
|---|---|---|
| `GET /gate/swap/preview` | free (3/day/IP) | GO / HOLD / BLOCK verdict |
| `GET /gate/swap` | **$0.008 USDC** (x402) | verdict **+ entry/exit sim + round-trip breakeven + max safe size** |
| `GET /chain/token-report` | $0.01 USDC (x402) | full evidence: honeypot sim, tax, admin controls, liquidity |

At 20 trades/day that is $0.16/day — the guard rides every swap your agent makes, for the
life of the agent. 3.75× cheaper per call than the nearest x402 pre-trade gate.

Other frameworks: [ElizaOS](https://rezearcher.github.io/greyridge-x402-tools/elizaos-token-safety-plugin.html) ·
[Vercel AI SDK](https://rezearcher.github.io/greyridge-x402-tools/vercel-ai-sdk-swap-guard.html) ·
[LangChain.js](https://rezearcher.github.io/greyridge-x402-tools/langchain-honeypot-check-tool.html).
Source + CrewAI example: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools).
API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402).

[Back](index.html)

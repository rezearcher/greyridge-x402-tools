---
title: "Is TRUE a honeypot? On-chain rug check for the Base token"
description: "Independent on-chain honeypot / rug check for TRUE (True) on Base (0x21cfcfc3d8f98fc728f48341d10ad8283f6eb7ab), measured 2026-11-02: engine verdict GO, risk 20/100, $24k pool liquidity. Re-run it yourself in one keyless call."
---
# Is TRUE a honeypot? — on-chain rug check (Base)

**Token:** `0x21cfcfc3d8f98fc728f48341d10ad8283f6eb7ab`
**Chain:** Base · **Measured:** 2026-11-02 · verdict `GO` · risk `20/100`

On the measured on-chain checks below, **TRUE passed** — our engine returned a GO.

token passes safety checks; trade is 0.41% of pool liquidity.

Deepest Uniswap v3 WETH pool held about **$24k** of liquidity when measured.

## See the live verdict and size your exit

The numbers above are a point-in-time read — a token's contract and its liquidity can change,
so check it fresh before you trade. The interactive card shows the current GO / HOLD / BLOCK,
and the paid unlock simulates what you would actually recover selling $100 / $1k / $10k / $50k
of TRUE into this pool after slippage:

**[Open the live TRUE safety card ->](https://x402-data-api.sigrunner.workers.dev/check?token=0x21cfcfc3d8f98fc728f48341d10ad8283f6eb7ab)**

## Re-run this check yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0x21cfcfc3d8f98fc728f48341d10ad8283f6eb7ab"
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=0x21cfcfc3d8f98fc728f48341d10ad8283f6eb7ab"
```

The free response gives the verdict, risk score and measured security flags. The `$0.01 USDC`
[x402](https://x402.org) unlock on Base adds the exit-slippage simulation for real trade sizes —
no account needed.

## What this checks, stated plainly

The scan reads the contract and its Uniswap liquidity on-chain: it simulates a `transfer()` to
measure the transfer fee and whether a sell would revert (honeypot), and it reads the mint, pause,
blacklist, ownership-renounced and upgradeable-proxy capabilities. DEX buy/sell swap tax is **not**
measured — only the transfer fee. Base only. This is a heuristic signal to help you avoid obvious
traps, **not financial advice**.

## More Base token checks

- [All token rug checks](token-rug-checks.html)
- [Honeypot check API for Base tokens](honeypot-check-api-base.html)
- [Pre-trade safety gate for AI agents](pre-trade-safety-gate-ai-agents.html)

Independent on-chain scan by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools).
Measured on 2026-11-02; re-run the commands above for a current result. Questions: contact@greyridgesignals.ai

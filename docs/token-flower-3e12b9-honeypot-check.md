---
title: "Is FLOWER a honeypot? On-chain rug check for the Base token"
description: "Independent on-chain honeypot / rug check for FLOWER (Flower) on Base (0x3e12b9d6a4d12cd9b4a6d613872d0eb32f68b380), measured 2026-11-17: engine verdict BLOCK, risk 40/100, $539 pool liquidity. Re-run it yourself in one keyless call."
---
# Is FLOWER a honeypot? — on-chain rug check (Base)

**Token:** `0x3e12b9d6a4d12cd9b4a6d613872d0eb32f68b380`
**Chain:** Base · **Measured:** 2026-11-17 · verdict `BLOCK` · risk `40/100`

Our engine returned **BLOCK** for FLOWER — a measured on-chain signal below is a hard red flag.

trade is 18.6% of pool liquidity; severe price impact.

Deepest Uniswap v3 WETH pool held about **$539** of liquidity when measured.

## See the live verdict and size your exit

The numbers above are a point-in-time read — a token's contract and its liquidity can change,
so check it fresh before you trade. The interactive card shows the current GO / HOLD / BLOCK,
and the paid unlock simulates what you would actually recover selling $100 / $1k / $10k / $50k
of FLOWER into this pool after slippage:

**[Open the live FLOWER safety card ->](https://x402-data-api.sigrunner.workers.dev/check?token=0x3e12b9d6a4d12cd9b4a6d613872d0eb32f68b380)**

## Re-run this check yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0x3e12b9d6a4d12cd9b4a6d613872d0eb32f68b380"
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=0x3e12b9d6a4d12cd9b4a6d613872d0eb32f68b380"
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
Measured on 2026-11-17; re-run the commands above for a current result. Questions: contact@greyridgesignals.ai

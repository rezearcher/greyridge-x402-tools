---
title: "Is POD a honeypot? On-chain rug check for the Base token"
description: "Independent on-chain honeypot / rug check for POD (Dolphin) on Base (0xed664536023d8e4b1640c394777d34abaff1df8f), measured 2026-11-20: engine verdict BLOCK, risk 35/100, $29 pool liquidity. Re-run it yourself in one keyless call."
---
# Is POD a honeypot? — on-chain rug check (Base)

**Token:** `0xed664536023d8e4b1640c394777d34abaff1df8f`
**Chain:** Base · **Measured:** 2026-11-20 · verdict `BLOCK` · risk `35/100`

Our engine returned **BLOCK** for POD — a measured on-chain signal below is a hard red flag.

trade is 344.8% of pool liquidity; severe price impact.

Deepest Uniswap v3 WETH pool held about **$29** of liquidity when measured.

## See the live verdict and size your exit

The numbers above are a point-in-time read — a token's contract and its liquidity can change,
so check it fresh before you trade. The interactive card shows the current GO / HOLD / BLOCK,
and the paid unlock simulates what you would actually recover selling $100 / $1k / $10k / $50k
of POD into this pool after slippage:

**[Open the live POD safety card ->](https://x402-data-api.sigrunner.workers.dev/check?token=0xed664536023d8e4b1640c394777d34abaff1df8f)**

## Re-run this check yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0xed664536023d8e4b1640c394777d34abaff1df8f"
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=0xed664536023d8e4b1640c394777d34abaff1df8f"
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
Measured on 2026-11-20; re-run the commands above for a current result. Questions: contact@greyridgesignals.ai

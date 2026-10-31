---
title: "Is DEGEN a honeypot? On-chain rug check for the Base token"
description: "Independent on-chain honeypot / rug check for DEGEN (Degen) on Base (0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed), measured 2026-10-31: engine verdict GO, risk 8/100, $237k pool liquidity. Re-run it yourself in one keyless call."
---
# Is DEGEN a honeypot? — on-chain rug check (Base)

**Token:** `0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed`
**Chain:** Base · **Measured:** 2026-10-31 · verdict `GO` · risk `8/100`

On the measured on-chain checks below, **DEGEN passed** — our engine returned a GO.

token passes safety checks; trade is 0.04% of pool liquidity.

### Red / caution flags measured

- owner CAN pause transfers (freeze risk)
- ownership NOT renounced — the deployer still controls the contract

### Checks it passed

- sell simulation succeeded (not a honeypot)
- owner cannot mint new supply
- no blacklist function found

Deepest Uniswap v3 WETH pool held about **$237k** of liquidity when measured.

## See the live verdict and size your exit

The numbers above are a point-in-time read — a token's contract and its liquidity can change,
so check it fresh before you trade. The interactive card shows the current GO / HOLD / BLOCK,
and the paid unlock simulates what you would actually recover selling $100 / $1k / $10k / $50k
of DEGEN into this pool after slippage:

**[Open the live DEGEN safety card ->](https://x402-data-api.sigrunner.workers.dev/check?token=0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed)**

## Re-run this check yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed"
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed"
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
Measured on 2026-10-31; re-run the commands above for a current result. Questions: contact@greyridgesignals.ai

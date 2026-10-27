---
title: "Is cbBTC a honeypot? On-chain rug check for the Base token"
description: "Independent on-chain honeypot / rug check for cbBTC (Coinbase Wrapped BTC) on Base (0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf), measured 2026-10-27: engine verdict GO, risk 25/100, $26.82M pool liquidity. Re-run it yourself in one keyless call."
---
# Is cbBTC a honeypot? — on-chain rug check (Base)

**Token:** `0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf`
**Chain:** Base · **Measured:** 2026-10-27 · verdict `GO` · risk `25/100`

On the measured on-chain checks below, **cbBTC passed** — our engine returned a GO.

token passes safety checks; trade is 0.00% of pool liquidity.

### Red / caution flags measured

- owner CAN mint new supply (dilution risk)
- owner CAN pause transfers (freeze risk)
- contract HAS a blacklist function (your wallet can be blocked)
- ownership NOT renounced — the deployer still controls the contract
- upgradeable proxy — the contract logic can be swapped after you buy

### Checks it passed

- sell simulation succeeded (not a honeypot)

Deepest Uniswap v3 WETH pool held about **$26.82M** of liquidity when measured.

## See the live verdict and size your exit

The numbers above are a point-in-time read — a token's contract and its liquidity can change,
so check it fresh before you trade. The interactive card shows the current GO / HOLD / BLOCK,
and the paid unlock simulates what you would actually recover selling $100 / $1k / $10k / $50k
of cbBTC into this pool after slippage:

**[Open the live cbBTC safety card ->](https://x402-data-api.sigrunner.workers.dev/check?token=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf)**

## Re-run this check yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf"
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf"
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
Measured on 2026-10-27; re-run the commands above for a current result. Questions: contact@greyridgesignals.ai

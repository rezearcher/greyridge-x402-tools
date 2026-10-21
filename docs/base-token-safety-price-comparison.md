---
title: Base token-safety x402 API price comparison (2026-10)
description: What pay-per-call token-safety endpoints on Base actually cost — advertised x402 prices for an address-based safety check, measured 2026-10-21.
---
# Base token-safety x402 endpoints: what they cost

If your agent screens a Base ERC-20 **before** it buys (honeypot / sellability, transfer tax,
owner-mint-pause flags, liquidity), you can settle that check per-call over [x402](https://x402.org)
in USDC on Base — no API key, no signup. Several providers offer it. Here is what an
**address → safety verdict** call costs, by *advertised* price.

| Provider | Route | Advertised / call | vs. Grey Ridge |
|---|---|---:|---:|
| **Grey Ridge** | `/chain/token-security` | **$0.009** | — |
| **Grey Ridge** | `/chain/token-report` (full evidence) | **$0.01** | 1.1× |
| grokbot-hk | `/token/:address` | $0.01 | 1.1× |
| agentsvc.io | `/api/v1/proxy/token-security` | $0.01 | 1.1× |
| lanescrypt | `/api/token-safety/:chain/:address` | $0.10 | **11.1×** |
| losbeto.xyz | `/job/token-research` | $0.20 | **22.2×** |

*Prices read 2026-10-21. Grey Ridge prices come straight from the live discovery manifest
[/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402); competitor
prices are the amounts those endpoints advertise in the public x402 facilitator catalogue.
One additional provider (`x402.onchainexpat.com`) does not advertise a per-call price; it was the
single largest observed token-safety spender on Base in the window (~$4.95 settled from one buyer,
Blockscout ERC-20 transfers), but with no advertised rate we don't quote a multiple.*

## The point

For the cheapest advertised rivals it's a tie at **$0.01**; against the mid and premium ones you
pay **11×–22× more** for the same category of pre-trade check. Grey Ridge is at or below the floor,
returns a SAFE/CAUTION/AVOID verdict with the underlying evidence, and the free preview lets you see
the exact output before anything settles.

## Try it free (no wallet, no key)

    curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0xYourBaseToken"

Paid route, same depth — `GET /chain/token-report?token=0x…` at **$0.01 USDC** via x402 on Base.
Swap-time guard `GET /gate/swap` returns **GO / HOLD / BLOCK** at **$0.008**. An x402 client
(`x402_requests`, `@x402/fetch`) pays and retries the 402 automatically.

- [Pay-per-call, no API key: x402 token risk API](x402-token-risk-api.html)
- [Honeypot check API for Base tokens](honeypot-check-api-base.html)
- [Pre-trade safety gate for AI trading agents](pre-trade-safety-gate-ai-agents.html)
- [Back](index.html)

Code: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) ·
Contact: contact@greyridgesignals.ai

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Grey Ridge Base token-safety x402 API",
  "description": "Pay-per-call pre-trade token-safety check for Base ERC-20 tokens over x402 (USDC on Base). SAFE/CAUTION/AVOID verdict with evidence; no API key.",
  "brand": {"@type": "Brand", "name": "Grey Ridge Signals"},
  "url": "https://rezearcher.github.io/greyridge-x402-tools/base-token-safety-price-comparison.html",
  "offers": [
    {"@type": "Offer", "name": "/chain/token-security", "price": "0.009", "priceCurrency": "USDC"},
    {"@type": "Offer", "name": "/chain/token-report", "price": "0.01", "priceCurrency": "USDC"},
    {"@type": "Offer", "name": "/gate/swap", "price": "0.008", "priceCurrency": "USDC"}
  ]
}
</script>

---
title: "Is the Hive Intelligence MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Hive Intelligence MCP server (https://hiveintelligence.xyz/mcp), run 2026-11-09: advertises find_token, get_token_price, check_token_safety; 9 tools scanned, injection verdict 'clear', 9 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Hive Intelligence MCP server — security & directory-readiness scorecard

**Server:** `https://hiveintelligence.xyz/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** 9 Claude Directory quality item(s) to polish (no hard rejects)

Hive Intelligence's MCP server exposes crypto and market-data tools to AI agents.

When an agent connects Hive Intelligence, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`hiveintelligence.xyz`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Hive Intelligence

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 9 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 9 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Hive Intelligence server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Hive Intelligence server advertises

The server describes itself to connecting agents as: *Hive serves live crypto data to AI agents through 9 tools, one per research job: find_token, get_token_price, check_token_safety, research_token, analyze_wallet, market_positioning, market_overview, defi_yields, prediction_markets. Pick the tool whose job mat…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_token`** — Resolve a token name, ticker or contract address to the token people mean: its CoinGecko id, symbol, market cap and contract on each chain. When several tokens share a name or tic… _(parameters: query, chain, response_format)_
- **`get_token_price`** — Current price for one token. Pass token as a CoinGecko id or symbol ("bitcoin", "BTC"), or pass chain + address for a specific contract. Returns price, market cap, and 24h change… _(parameters: token, chain, address, vs_currency, response_format)_
- **`check_token_safety`** — Token security screen for a contract address: honeypot, taxes, ownership, and related GoPlus risk datapoints, plus a summary of LP lock status, top-holder concentration, and creat… _(parameters: address, chain, response_format)_
- **`research_token`** — One due-diligence report on a token: identity, market (price, market cap, FDV, volume), liquidity (top DEX pools), holder concentration and contract safety, each with its own sour… _(parameters: token, chain, sections, detail, response_format)_
- **`analyze_wallet`** — What a wallet holds and what it has been doing: holdings with USD values by default, plus optional PnL, recent activity, Hyperliquid perps, Polymarket positions, NFTs, a known-mal… _(parameters: address, chain, include, detail, response_format)_
- **`market_positioning`** — How a coin's derivatives market is positioned, across venues, now or over a window: funding rates, open interest, liquidations by side, long/short ratios, and optionally predicted… _(parameters: asset, metrics, window, venues, detail, response_format)_
- **`market_overview`** — What is moving in crypto: trending coins, top gainers and losers, hot DEX pools, and optionally Fear & Greed, market totals, new pools and headlines, each with its own source. Exa… _(parameters: scope, window, sections, detail, response_format)_
- **`defi_yields`** — DeFi from DeFiLlama: compare one or two protocols on TVL and fees, or find the best yields with a minimum TVL, a chain and a stablecoin filter, each with its own source. Example:… _(parameters: protocols, chain, metrics, stablecoin_only, min_tvl_usd, detail)_
- **`prediction_markets`** — Odds from Polymarket and Kalshi: search a topic on both venues, or look up one market, with optional price history and order book. Prices are market-implied probabilities, not gro… _(parameters: query, market, venue, include, detail, response_format)_

## Maintenance & supply-chain — the risk Hive Intelligence's static scan can't see

A prompt-injection scan reads Hive Intelligence's advertised tool metadata at one moment. It cannot tell you the project behind `hiveintelligence.xyz` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `hiveintelligence.xyz` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Hive Intelligence yourself, or claim its badge {#claim}

Re-run this exact Hive Intelligence check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `hiveintelligence.xyz`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://hiveintelligence.xyz/mcp&directory=true"
```

For the itemized findings on Hive Intelligence — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://hiveintelligence.xyz/mcp"}`. If you
run `hiveintelligence.xyz`, [claim a measured verified-owner badge for Hive Intelligence free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=hiveintelligence.xyz)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dhiveintelligence.xyz&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://hiveintelligence.xyz/mcp)
```

Keeping the Hive Intelligence badge green as its tools change — six-hourly re-scans of `hiveintelligence.xyz`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `hiveintelligence.xyz` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the BitTuitive MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BitTuitive MCP server (https://api.bittuitive.ai/mcp), run 2026-11-16: advertises best_endpoint, scoreboard_search, scoreboard_categories; 20 tools scanned, injection verdict 'clear', 20 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# BitTuitive MCP server — security & directory-readiness scorecard

**Server:** `https://api.bittuitive.ai/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 20 · **Injection verdict:** `clear` · **Directory:** 20 Claude Directory quality item(s) to polish (no hard rejects)

One Lightning payment, any verified data API: highest-rated source, automatic fallback.

When an agent connects BitTuitive, the model reads all 20 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bittuitive.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on BitTuitive

- **No tool-poisoning or prompt-injection patterns** were found across the 20 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 20 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 20 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 20 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BitTuitive server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BitTuitive server advertises

The server describes itself to connecting agents as: *BitTuitive: One Lightning payment, any verified data API, routed to the highest-rated source with automatic fallback. Reliable data for AI agents, paid per call over Lightning (L402); see the ROUTER section below. FREE: an independent scoreboard of paid agent…*

These are the 20 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`best_endpoint`** — Free. Find the highest-scoring paid agent API (L402/x402) for a need, e.g. 'bitcoin price', 'weather forecast', 'stock quotes'. Returns up to 'limit' ranked endpoints with URL, pr… _(parameters: need, data_type, protocol, limit)_
- **`scoreboard_search`** — Free. Search/browse the scoreboard of paid agent APIs with filters; sorted by score. _(parameters: q, data_type, protocol, min_score, limit, offset)_
- **`scoreboard_categories`** — Free. Per data type (bitcoin, crypto, stocks, weather, traffic, other): counts, average score and the top endpoints. _(parameters: top)_
- **`scoreboard_endpoint`** — Free. Score components, probe stats and recent probe history for one scoreboard entry (id from best_endpoint/scoreboard_search). _(parameters: id)_
- **`bittuitive_pricing`** — Free. BitTuitive's paid endpoints, per-call prices in sats, subscription plans, and live status.
- **`request_data`** — Free. Tell BitTuitive what data you want (data_type, description, an example query, and the max price in sats you would pay). This records a demand signal only; it does not add a… _(parameters: data_type, description, example_query, max_price_sats, contact)_
- **`route_endpoints`** — Free. Every scoreboard-verified L402 API the BitTuitive router can call on your behalf right now, grouped by data type, with upstream price, BitTuitive fee and the all-in price in… _(parameters: data_type)_
- **`route_call`** — BitTuitive pays a scoreboard-verified L402 API and returns its data plus routing metadata — use this when the data you need is on another paid API. Price: upstream price + fee (ma… _(parameters: endpoint_id, data_type, q, params, l402_credential, credit)_
- **`get_btc_price`** — Live BTC price in USD/EUR with 24h change — use this when you only need the spot price. Price: 10 sats (Lightning) or $0.01 USDC on Base (x402). Sample (illustrative, not live): {… _(parameters: l402_credential, x402_payment)_
- **`get_btc_oracle`** — BTC price plus hash rate, mempool, difficulty, fees and block height — use this for a compact network snapshot. Price: 50 sats (Lightning) or $0.05 USDC on Base (x402). Sample (il… _(parameters: l402_credential, x402_payment)_
- **`get_btc_pro`** — Oracle data plus Lightning Network capacity/channels and daily mining revenue — use this for ecosystem-level stats. Price: 100 sats (Lightning) or $0.10 USDC on Base (x402). Sampl… _(parameters: l402_credential, x402_payment)_
- **`get_btc_signals`** — Fear & Greed, BTC/gold, % from ATH, momentum, volatility and 24h transactions (dominance, NVT and active addresses are null without a licensed source) — use this for market-signal… _(parameters: l402_credential, x402_payment)_
- **`get_market_insights`** — Ranked agent demand, willingness-to-pay, unmet searches, routed-call volume and supply–demand gaps (aggregates only) — use this to see what agents are paying for. Price: 500 sats… _(parameters: l402_credential, x402_payment)_
- **`get_weather_current`** — Current conditions for lat/lon or a US city/ZIP (NOAA NWS in the US; MET Norway elsewhere) — use this for a point weather check. Price: 10 sats (Lightning) or $0.01 USDC on Base (… _(parameters: lat, lon, location, zip, q, state)_
- **`get_weather_forecast`** — Hourly plus 7-day forecast for lat/lon or a US city/ZIP — use this to plan the next hours or days. Price: 25 sats (Lightning) or $0.025 USDC on Base (x402). Sample (illustrative,… _(parameters: lat, lon, location, zip, q, state)_
- **`get_weather_alerts`** — Active NWS alerts for a US point, city, ZIP, or state=XX (US only) — use this to check warnings. Price: 10 sats (Lightning) or $0.01 USDC on Base (x402). Sample (illustrative, not… _(parameters: lat, lon, location, zip, q, state)_
- **`get_airport_delays`** — US airport ground stops, delay programs, arrival/departure delays and closures from the FAA NAS Status snapshot (optional airport=SFO). Not for navigation. Not endorsed by the FAA… _(parameters: airport, iata, icao, q, l402_credential, x402_payment)_
- **`get_travel_airport`** — One US airport (airport=SFO required): FAA delay/closure events plus current NOAA weather and NWS alerts. Not for navigation. Not endorsed by the FAA or NOAA. Price: 25 sats (Ligh… _(parameters: airport, iata, icao, q, l402_credential, x402_payment)_
- **`get_stock_fundamentals`** — SEC EDGAR company facts (revenue, net income, EPS, shares, cash, debt) and ticker-to-CIK mapping for one US ticker. Not endorsed by the SEC. Price: 25 sats (Lightning) or $0.025 U… _(parameters: symbol, l402_credential, x402_payment)_
- **`get_stock_filings`** — Latest 10-K, 10-Q and 8-K filings with document links from SEC EDGAR for one US ticker. Not endorsed by the SEC. Price: 10 sats (Lightning) or $0.01 USDC on Base (x402). Sample (i… _(parameters: symbol, l402_credential, x402_payment)_

## Maintenance & supply-chain — the risk BitTuitive's static scan can't see

A prompt-injection scan reads BitTuitive's advertised tool metadata at one moment. It cannot tell you the project behind `api.bittuitive.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.bittuitive.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BitTuitive yourself, or claim its badge {#claim}

Re-run this exact BitTuitive check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.bittuitive.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.bittuitive.ai/mcp&directory=true"
```

For the itemized findings on BitTuitive — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.bittuitive.ai/mcp"}`. If you
run `api.bittuitive.ai`, [claim a measured verified-owner badge for BitTuitive free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.bittuitive.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.bittuitive.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.bittuitive.ai/mcp)
```

Keeping the BitTuitive badge green as its tools change — six-hourly re-scans of `api.bittuitive.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.bittuitive.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

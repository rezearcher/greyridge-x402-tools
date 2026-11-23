---
title: "Is the BitTuitive MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BitTuitive MCP server (https://api.bittuitive.ai/mcp), run 2026-11-23: advertises find_best_endpoint, browse_scoreboard, get_scoreboard_entry; 36 tools scanned, injection verdict 'clear', 1 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# BitTuitive MCP server — security & directory-readiness scorecard

**Server:** `https://api.bittuitive.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 36 · **Injection verdict:** `clear` · **Directory:** 1 likely Claude Directory reject(s)

Pay-per-call data for AI agents: BTC price, airport delays, weather, SEC filings, paid-API routing.

When an agent connects BitTuitive, the model reads all 36 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bittuitive.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on BitTuitive

- **No tool-poisoning or prompt-injection patterns** were found across the 36 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 likely reject(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria (plus 37 quality item(s) to polish). The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **5 of 36 advertised tool(s) name a state-changing action** (`create_feed`, `update_feed`, `delete_feed`, `get_credit_balance`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 36 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BitTuitive server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BitTuitive server advertises

The server describes itself to connecting agents as: *BitTuitive™: Ask BitTuitive before your agent acts. Verified data, with proof, and a check on who you're paying. How to read BitScore: a 0-100 confidence score on every answer. 80 or above is high, 50-79 is medium, below 50 is low. On data endpoints it reflec…*

These are the 36 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_best_endpoint`** — Use this when your task needs a paid data API you have not picked yet (e.g. 'bitcoin price', 'btc price', 'air quality', 'stock fundamentals') and you want the most reliable one.… _(parameters: need, data_type, protocol, limit)_
- **`browse_scoreboard`** — Use this when you want to survey the market instead of getting one pick: list paid agent APIs by score with filters (view="search": q, data_type, protocol, min_score, paging), or… _(parameters: view, q, data_type, protocol, min_score, limit)_
- **`get_scoreboard_entry`** — Use this when you need due diligence before you pay or route: given an id from find_best_endpoint or browse_scoreboard, returns the score components, uptime and latency statistics… _(parameters: id)_
- **`get_pricing`** — Use this when you need current prices before spending: per-call sats and USDC for every BitTuitive data endpoint, credit bundles, subscription plans and live status. Free, read-on…
- **`request_data`** — Use this when no tool covers the data you need (e.g. air quality, crypto OHLC, flight prices): records one demand signal (data_type, description, example_query, max_price_sats) so… _(parameters: data_type, description, example_query, max_price_sats, contact)_
- **`list_route_capabilities`** — Use this when you need a data point BitTuitive does not sell as one of Ours (direct) endpoints: lists capabilities, available preferences (cheapest, most_reliable, fastest, best_v…
- **`list_routable_apis`** — Use this when you need data BitTuitive does not sell directly and want it paid for you: lists every scoreboard-verified L402 API the router can call right now, by data type, with… _(parameters: data_type)_
- **`call_routed_api`** — Use this when you want data from another paid API without handling its invoice: pay ONE BitTuitive invoice (sats, or the same all-in price in USDC via x402) and BitTuitive pays th… _(parameters: capability, prefer, endpoint_id, data_type, q, params)_
- **`get_btc_data`** — Use this when an agent needs Bitcoin data. For the current Bitcoin price (BTC/USD, btc price), start with kind="intuitive" (the default; also get_bitcoin_price): a multi-source pr… _(parameters: kind, l402_credential, credit_token, short_pass, x402_payment)_
- **`get_bitcoin_price`** — Use this when you need the current Bitcoin price (BTC/USD, btc price). Returns BitTuitive's recommended btc_intuitive value: a price checked across independent sources, with a Dat… _(parameters: l402_credential, credit_token, x402_payment)_
- **`get_weather`** — Use this when an agent needs weather, Data BitScored: current conditions (kind="intuitive", the default), a 7-day forecast (kind="stats"), go/no-go windows and location compare (k… _(parameters: kind, lat, lon, location, zip, q)_
- **`get_finance_data`** — Use this when an agent needs official daily FX reference rates (ECB and Bank of Canada), with a Data BitScore. kind="intuitive" (the default) is one pair (default EURUSD); kind="s… _(parameters: kind, pair, amount, from, to, days)_
- **`get_rates_data`** — Use this when an agent needs official Fed, ECB and Bank of Canada policy rates and the official Treasury par yield curve. kind="intuitive" (the default) is policy rates plus the 1… _(parameters: kind, bank, tenor, l402_credential, credit_token, short_pass)_
- **`get_alerts_data`** — Use this when an agent needs official US government alert streams: USGS earthquakes, CISA Known Exploited Vulnerabilities, openFDA drug recalls, or Federal Register documents. kin… _(parameters: kind, stream, source, limit, l402_credential, credit_token)_
- **`get_expense_data`** — Use this when you need expense data. Returns JSON in the 'data' field with source attribution. Read-only; the only side effect is the payment you choose to make. Kinds and prices:… _(parameters: kind, zip, city, state, date, end_date)_
- **`get_travel_data`** — Use this when a travel agent needs US airport status: one-airport briefing (kind="intuitive", the default; pass airport=SFO or omit to default to SFO), delay breakdown and recent… _(parameters: kind, airport, iata, icao, origin, destination)_
- **`get_stocks_data`** — Use this when a research agent needs computed SEC fundamentals and parsed Form 4 insider trades, not raw reprints: the latest-quarter snapshot with margins, growth and the latest… _(parameters: kind, symbol, compare, l402_credential, credit_token, short_pass)_
- **`get_stock_data`** — Use this when a research agent needs the legacy SEC fundamentals snapshot (kind="fundamentals") or the stock_filings alias (kind="filings", now the same as get_stocks_data kind="i… _(parameters: kind, symbol, l402_credential, credit_token, short_pass, x402_payment)_
- **`get_ai_data`** — Use this when a research agent needs AI Buildout trends from company regulatory filings (company-wide capex, revenue and cash flow, not an official AI-spend line and not stock pri… _(parameters: kind, symbol, l402_credential, credit_token, short_pass, x402_payment)_
- **`get_ai_buildout`** — Use this when a research agent needs a quick headline for one company or the whole AI buildout: capex, year-over-year growth and whether it is speeding up. Answers 'How much is Mi… _(parameters: symbol, l402_credential, credit_token, x402_payment)_
- **`get_trust_data`** — Use this when an agent is about to pay, transfer, trade or onboard and must check whether a person, entity or crypto address appears on US OFAC lists or the UK Sanctions List. kin… _(parameters: kind, name, address, country, dob, pay_to)_
- **`get_seller_data`** — Use this when an agent is about to pay a seller and needs a screening aid that bundles the trust_signals counterparty check, price fairness versus the Agent Services Price Index,… _(parameters: kind, address, pay_to, invoice, ln_address, node)_
- **`get_insights_data`** — Use this when you are deciding what data to build, source or price, or want to know what other AI agents ask for and pay for. kind="intuitive" is a headline; kind="stats" adds wil… _(parameters: kind, l402_credential, credit_token, short_pass, x402_payment)_
- **`get_bittone`** — Use this when an agent needs BitTone, the first-party consensus of agent-submitted sentiment on an allowlisted ticker, coin, or BitTuitive endpoint. kind="intuitive" (the default)… _(parameters: kind, subject, type, symbol, horizon, l402_credential)_
- **`contribute_bittone`** — Use this when your agent wants to contribute a structured sentiment score to BitTone. Anti-spam fee: 1 sat or $0.001 USDC. No free text. One live position per subject and horizon… _(parameters: subject, type, score, horizon, confidence, tags)_
- **`get_market_insights`** — Use this when you want a derived build-next signal from agent demand: supply-demand gaps and the 30-day payment conversion funnel. Aggregates only (k-anonymized). Deprecated alias… _(parameters: l402_credential, credit_token, short_pass, x402_payment)_
- **`get_airport_data`** — Use this when a travel agent needs US airport status: one-airport briefing (kind="intuitive", the default; pass airport=SFO or omit to default to SFO), delay breakdown and recent… _(parameters: kind, airport, iata, icao, origin, destination)_
- **`get_sanctions_data`** — Use this when an agent is about to pay, transfer, trade or onboard and must check whether a person, entity or crypto address appears on US OFAC lists or the UK Sanctions List. kin… _(parameters: kind, name, address, country, dob, pay_to)_
- **`create_feed`** — Use this when an agent would otherwise poll: get data pushed on a schedule (e.g. hourly BTC price) or when a trigger fires (BTC moves 2%, price crosses a level, a weather alert fo… _(parameters: credit_token, endpoint, mode, interval, interval_seconds, trigger)_
- **`get_feeds`** — Use this when you need to check your feeds: without feed_id it lists every feed and the prepaid sats balance; with feed_id it returns that feed's status, schedule and next deliver… _(parameters: credit_token, feed_id)_
- **`update_feed`** — Use this when you want to change a feed: interval, trigger, params, webhook_url, mailbox, or pause/resume it with 'state'. Only the fields you pass change. Resuming fails if the p… _(parameters: credit_token, feed_id, state, interval, interval_seconds, trigger)_
- **`delete_feed`** — Use this when you no longer want a feed. PERMANENTLY deletes the feed definition and stops all future deliveries; this cannot be undone (create a new feed to restart). Deliveries… _(parameters: credit_token, feed_id)_
- **`get_credit_balance`** — Use this when you want to know how much prepaid balance (sats and USDC) is left before running more calls or feeds. Read-only. Example: get_credit_balance(credit_token="btf_...") _(parameters: credit_token)_
- **`buy_credits`** — Use this when you will make many calls or run feeds and want to pay once instead of per call. Suggested bundles: starter 1,000 sats / $1, standard 5,000 / $5, bulk 25,000 / $25, f… _(parameters: credit_token, bundle, amount_sats, amount_usd, currency, x402_payment)_
- **`get_feed_mailbox`** — Use this when you want the deliveries stored for you (a feed without a webhook, or one whose webhook failed): lists unacknowledged items, or one item with item_id (include_acked=t… _(parameters: credit_token, item_id, feed_id, include_acked)_
- **`ack_feed_mailbox_item`** — Use this when you have processed a mailbox item, so it stops appearing in the default list. Does not delete it (it still expires after 72 h). No charge. Safe to repeat. _(parameters: credit_token, item_id)_

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
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

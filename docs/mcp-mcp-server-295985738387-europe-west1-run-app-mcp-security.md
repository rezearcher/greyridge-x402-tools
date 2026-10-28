---
title: "Is the Inferventis MCP Server MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Inferventis MCP Server MCP server (https://mcp-server-295985738387.europe-west1.run.app/mcp), run 2026-10-24: advertises timezone_convert, open_banking_transactions, platform_tool_finder; 20 tools scanned, injection verdict 'clear', 40 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Inferventis MCP Server MCP server — security & directory-readiness scorecard

**Server:** `https://mcp-server-295985738387.europe-west1.run.app/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 20 · **Injection verdict:** `clear` · **Directory:** 40 Claude Directory blocker(s)

Loan & mortgage calculator, compound interest, ROI, crypto prices, FX conversion for AI agents.

When an agent connects Inferventis MCP Server, the model reads all 20 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp-server-295985738387.europe-west1.run.app`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Inferventis MCP Server

- **No tool-poisoning or prompt-injection patterns** were found across the 20 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 40 blocker(s).** This server advertises 40 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 20 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 20 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Inferventis MCP Server server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Inferventis MCP Server server advertises

These are the 20 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`timezone_convert`** — Converts time between timezones. Useful for time conversion tasks. Use when you need to convert 3:45 PM EST to Pacific Time for a meeting schedule; or find what time it will be in… _(parameters: time, from_tz, to_tz, date)_
- **`open_banking_transactions`** — Retrieves bank account balances and transaction history via PSD2 Open Banking (TrueLayer), covering 300+ UK and European banks. Returns the account balance, ISO 4217 currency code… _(parameters: account_id, limit, from_date)_
- **`platform_tool_finder`** — Discovers the most relevant tools available on this MCP server for a given task using local semantic search (MiniLM-L6-v2 embeddings). Accepts a plain-English description of what… _(parameters: intent, model_hint, top_k)_
- **`finnhub_stock_quote`** — Retrieves real-time stock price quotes and company information for any publicly traded company via the Finnhub API. Returns current price, intraday high and low, percentage change… _(parameters: symbol, include_company_info)_
- **`currency_rates`** — Retrieves live and historical fiat currency exchange rates from the Frankfurter API (sourced from the European Central Bank). Supports both real-time conversion and historical rat… _(parameters: amount, from, to)_
- **`currency_convert`** — Converts a monetary amount from one currency to another using live exchange rates sourced from the Frankfurter API (European Central Bank data). Returns the converted amount, the… _(parameters: amount, from, to)_
- **`financial_calculator_lite`** — Performs common financial calculations locally with no external API dependency. Supports compound interest, loan repayment, return on investment (ROI), present value, future value… _(parameters: calculator_type, principal, rate, periods, initial_value, final_value)_
- **`bank_accounts`** — Retrieves bank account details and recent transaction history via a connected bank API integration. Returns a list of transactions for the specified account, or for all linked acc… _(parameters: account_id, limit)_
- **`crypto_price`** — Retrieves real-time price data for any cryptocurrency listed on CoinGecko. Returns the current price in any fiat currency, 24-hour percentage change, market capitalisation, and 24… _(parameters: coin, currency, include_market_data)_
- **`financial_calculator`** — Performs precise financial calculations across six calculation types entirely locally with no external API dependency. compound_interest computes the final value and total interes… _(parameters: calculator_type, principal, rate, periods, initial_value, final_value)_
- **`stock_price_lite`** — Retrieves the current trading price for a publicly listed stock by ticker symbol. Returns the current price as a single numeric value. This is a lightweight variant of stock_quote… _(parameters: symbol)_
- **`crypto_fx_rates`** — Converts an amount between any cryptocurrency and fiat currency pair, or between two cryptocurrencies, using real-time exchange rates sourced from CoinAPI. Supports all crypto-to-… _(parameters: amount, from, to)_
- **`web_url_reader`** — Fetches any public web page and returns clean, readable plain text stripped of HTML, navigation, scripts, advertisements, and boilerplate. Returns the page title, meta description… _(parameters: url, max_chars, include_links)_
- **`currency_convert_lite`** — Converts a monetary amount between any two fiat currencies using live exchange rates from the Frankfurter API (European Central Bank data). Returns the converted amount and the ex… _(parameters: amount, from, to)_
- **`currency_fx_lite`** — Converts a foreign exchange (FX) amount between two fiat currencies using live mid-market rates. Returns the converted amount and the exchange rate applied. Use currency_fx_lite w… _(parameters: amount, from, to)_
- **`web_news_headlines`** — Retrieves the latest real-time news headlines and article summaries from BBC News and The Guardian across nine topic categories. Returns structured articles with headline, descrip… _(parameters: topic, keyword, limit)_
- **`stripe_payments`** — Retrieves live payment data from a Stripe account via the Stripe API. Supports four query types: recent_payments returns the latest payment intents with status, amount, and curren… _(parameters: query_type, limit)_
- **`crypto_price_lite`** — Retrieves the current spot price and 24-hour change for any cryptocurrency using the CoinGecko public API. Returns price, percentage change, and a timestamp. This is a lightweight… _(parameters: coin, currency)_
- **`stripe_payment_records`** — Retrieves payment and charge records from a Stripe merchant account. Returns a list of payment records filtered by the requested query type. Use stripe_payment_records when an age… _(parameters: query_type, limit)_
- **`currency_convert_open`** — Converts a monetary amount between two fiat currencies using live exchange rates from an open currency exchange API. Returns the converted amount and the rate applied. Use currenc… _(parameters: amount, from, to)_

## Scan Inferventis MCP Server yourself, or claim its badge

Re-run this exact Inferventis MCP Server check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp-server-295985738387.europe-west1.run.app`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp-server-295985738387.europe-west1.run.app/mcp&directory=true"
```

For the itemized findings on Inferventis MCP Server — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp-server-295985738387.europe-west1.run.app/mcp"}`. If you
run `mcp-server-295985738387.europe-west1.run.app`, [claim a measured verified-owner badge for Inferventis MCP Server free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp-server-295985738387.europe-west1.run.app)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp-server-295985738387.europe-west1.run.app&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp-server-295985738387.europe-west1.run.app/mcp)
```

Keeping the Inferventis MCP Server badge green as its tools change — six-hourly re-scans of `mcp-server-295985738387.europe-west1.run.app`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp-server-295985738387.europe-west1.run.app` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

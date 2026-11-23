---
title: "Is the Acubic MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Acubic MCP server (https://mcp.acubic.ai/mcp), run 2026-11-23: advertises acubic_search_knowledge, acubic_list_strategy_templates, acubic_lookup_instrument; 24 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Acubic MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.acubic.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 24 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Explain, screen, build and backtest systematic portfolios from eToro and Trading 212 universes.

When an agent connects Acubic, the model reads all 24 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.acubic.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Acubic

- **No tool-poisoning or prompt-injection patterns** were found across the 24 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **5 of 24 advertised tool(s) name a state-changing action** (`acubic_create_strategy`, `acubic_update_strategy`, `acubic_run_backtest`, `acubic_delete_strategy`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 24 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Acubic server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Acubic server advertises

The server describes itself to connecting agents as: *Acubic builds and backtests systematic portfolios from a screened universe of eToro and Trading 212 instruments. Public tools explain the product and its method and screen the universe without an account. Signed-in tools read the user's own strategies and bac…*

These are the 24 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`acubic_search_knowledge`** — Searches what Acubic publishes (blog, guides, methodology, FAQ, pricing) and returns passages with links to cite. Use it for how Acubic builds and backtests strategies, plan limit… _(parameters: query, kinds, limit, cursor, response_format, locale)_
- **`acubic_list_strategy_templates`** — Lists the ready preset strategies, one per experience level and risk level (largest accepted drawdown), plus Custom (advanced): the full engine. Each preset gives its universe rul… _(parameters: experience, risk_level, response_format, locale)_
- **`acubic_lookup_instrument`** — Looks up a stock, ETF, crypto asset or currency pair by ticker, ISIN or name: its identity, whether it is in Acubic's tradable universe, whether eToro and Trading 212 list it, and… _(parameters: query, asset_class, limit, response_format, locale)_
- **`acubic_screen_universe`** — Applies filter rules (e.g. market cap at least $10 billion, P/E at most 25; AND, up to 20) to the universe eToro and Trading 212 both hold, after optional asset class, region, sec… _(parameters: filter_rules, asset_classes, regions, sectors, include, order_by)_
- **`acubic_explain`** — Explains one investing term or Acubic setting in plain language (a metric such as P/E or maximum drawdown, a filter, ranking or weighting method, risk level, rebalance or backtest… _(parameters: topic, kind, response_format, locale)_
- **`acubic_list_strategy_options`** — Lists every choice the strategy builder offers, with ids, trade-offs and defaults: universe, filter metrics, include lists, ranking methods, weighting methods, rebalance, backtest… _(parameters: experience, section, response_format, locale)_
- **`acubic_get_account`** — Returns the signed-in person's plan, allowance used and when it resets, live-portfolio limits, language, experience level, and a plan comparison with an upgrade link. It does not… _(parameters: locale)_
- **`acubic_list_strategies`** — Lists the signed-in person's saved strategies, newest first: name, kind (draft, paper or live), holdings count, method, backtest date and link; mode archived shows the archive. It… _(parameters: mode, name_contains, limit, cursor, response_format, locale)_
- **`acubic_get_strategy`** — Returns one saved strategy: holdings and weights, its settings (experience and risk level, ranking, weighting, asset count, filters, locks), data date, the summary of its latest s… _(parameters: strategy_id, build_id, holdings_limit, response_format, locale)_
- **`acubic_get_backtest`** — Returns the latest saved walk-forward backtest of one strategy: assumptions, CAGR, volatility, Sharpe and Sortino, maximum drawdown and total return against the S&P 500 (SPY), yea… _(parameters: strategy_id, run_id, include, response_format, locale)_
- **`acubic_get_backtest_status`** — Checks a run of acubic_run_backtest without opening a card: percent done and poll_after_seconds, then the headline figures (hypothetical, with a disclosure). A run that failed or… _(parameters: strategy_id, run_id, locale)_
- **`acubic_get_build_status`** — Tracks a new draft from acubic_create_strategy by its build_id while it is assembled: progress and poll_after_seconds, then the saved strategy's id to open once. A failed or cance… _(parameters: build_id, locale)_
- **`acubic_get_portfolio`** — Returns holdings, value, return since activation and the last rebalance outcome of the person's live or paper-money strategies, from Acubic's latest daily snapshot (as_of); it doe… _(parameters: strategy_id, limit, cursor, response_format, locale)_
- **`acubic_create_strategy`** — Creates and saves a new draft strategy from the acubic.ai builder's choices: universe, include lists, asset count, sizes, ranking, weighting, filter rules, limits, and tickers to… _(parameters: name, description, template_id, experience, risk_level, asset_classes)_
- **`acubic_update_strategy`** — Updates the name, description, filter rules, include lists or Exclude list of one saved strategy, and lists each previous value. Holdings are not recomputed. It cannot change the… _(parameters: strategy_id, name, description, filter_rules, excluded_symbols, include)_
- **`acubic_run_backtest`** — Runs a walk-forward backtest of one saved strategy and saves it in place of the previous one: at each rebalance the strategy is rebuilt from the data then available, with transact… _(parameters: strategy_id, years, rebalance_freq, transaction_cost_bps, client_request_id, response_format)_
- **`acubic_delete_strategy`** — Deletes a draft or paper-money strategy by archiving it together with its saved backtest; it can be restored within 30 days (acubic_restore_strategy). A strategy with a broker con… _(parameters: strategy_id, confirm_token, locale)_
- **`acubic_rank_candidates`** — Ranks the candidates of a design before anything is saved (Order & Select on acubic.ai): the ranked list, page by page, with score, per-factor values (vs industry: also the peers'… _(parameters: candidates_id, template_id, experience, risk_level, asset_classes, regions)_
- **`acubic_regenerate_suggestion`** — Regenerates the suggested portfolio of one saved strategy with its saved settings, like Regenerate on acubic.ai, and returns the holdings and weights; the saved strategy is not ch… _(parameters: strategy_id, suggestion_id, client_request_id, locale)_
- **`acubic_go_live`** — Returns a signed link, valid 15 minutes, to automate one strategy on acubic.ai with the person's own eToro or Trading 212 account, where they connect the broker and activate it. I… _(parameters: strategy_id, locale)_
- **`acubic_project_strategy`** — Runs a Monte Carlo of 500 paths over 1, 3, 5 or 10 years for one saved strategy, from its walk-forward backtest (the AI Scenario Simulation of acubic.ai): bear case (5th percentil… _(parameters: strategy_id, horizon, response_format, locale)_
- **`acubic_get_strategy_history`** — Returns the Historical tab of one saved strategy: its saved weights bought and held over 1 month to 5 years, with return, CAGR, volatility, Sharpe and maximum drawdown beside the… _(parameters: strategy_id, horizon, custom_benchmark, response_format, locale)_
- **`acubic_cancel_backtest`** — Cancels a backtest that is still running, like Cancel on acubic.ai: the allowance it used is returned and the previous saved result stays. Needs the run_id from acubic_run_backtes… _(parameters: strategy_id, run_id, locale)_
- **`acubic_restore_strategy`** — Restores a strategy deleted with acubic_delete_strategy, with its holdings, settings and backtest, within 30 days. acubic_list_strategies with mode archived lists the ones that ca… _(parameters: strategy_id, locale)_

## Maintenance & supply-chain — the risk Acubic's static scan can't see

A prompt-injection scan reads Acubic's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.acubic.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.acubic.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Acubic yourself, or claim its badge {#claim}

Re-run this exact Acubic check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.acubic.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.acubic.ai/mcp&directory=true"
```

For the itemized findings on Acubic — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.acubic.ai/mcp"}`. If you
run `mcp.acubic.ai`, [claim a measured verified-owner badge for Acubic free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.acubic.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.acubic.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.acubic.ai/mcp)
```

Keeping the Acubic badge green as its tools change — six-hourly re-scans of `mcp.acubic.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.acubic.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

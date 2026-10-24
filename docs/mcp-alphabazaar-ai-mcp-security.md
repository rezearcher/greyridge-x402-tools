---
title: Is the Alpha Bazaar Arena MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Alpha Bazaar Arena MCP server (https://api.alphabazaar.ai/mcp), run 2026-10-24: advertises get_daily_brief, get_market_pulse, get_sector_sentiment; 24 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# Alpha Bazaar Arena MCP server — security & directory-readiness scorecard

**Server:** `https://api.alphabazaar.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 24 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Paper-trading arena for AI agents: publish stock calls, build attested track records, compete.

When an agent connects Alpha Bazaar Arena, the model reads all 24 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.alphabazaar.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Alpha Bazaar Arena

- **No tool-poisoning or prompt-injection patterns** were found across the 24 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **6 of 24 advertised tool(s) name a state-changing action** (`get_publisher_track_record`, `publish_signal`, `cancel_signal`, `update_my_agent_profile`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 24 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Alpha Bazaar Arena server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Alpha Bazaar Arena server advertises

The server describes itself to connecting agents as: *Alpha Bazaar Arena is a free paper-trading arena where AI agents (and people) publish stock signals with their reasoning and build public, attested track records that anyone can verify. Ground rules: - Everything is paper trading: no real money, no brokerage…*

These are the 24 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_daily_brief`** — Today's Alpha Bazaar brief: a short written market summary (daily_brief; written once per trading day, not investment advice), top headlines, the strongest signal confluences, Big…
- **`get_market_pulse`** — Current US market status (open, closed, pre-market, after-hours), S&P 500 / Nasdaq / Dow ETF prices (SPY, QQQ, DIA) with % change, and top market news. Cached ~60 seconds.
- **`get_sector_sentiment`** — Sector sentiment built from active signal confluences: per sector the sentiment (BULLISH/BEARISH/NEUTRAL), bullish %, number of confluences, leading tickers with today's % change…
- **`list_confluences`** — Top-scoring active confluences: tickers where several independent sources (politicians, 13F whales, Wall Street analysts, community and AI publishers) point the same way. Each ite… _(parameters: limit)_
- **`get_leaderboard`** — Rank publishers (people, AI agents and tracked sources) on a leaderboard. Rows include rank, username, signal counts, win rate, average and pure return, Sharpe ratio and trust gra… _(parameters: board, timeframe, limit)_
- **`get_publisher_track_record`** — Public profile and track record of one publisher (human or AI agent): bio and strategy plus performance split into paper and verified portfolios (signals, open/closed, wins/losses… _(parameters: username)_
- **`get_ticker_snapshot`** — Quote and key fundamentals for a US stock or ETF: price, daily change (and extended-hours change), previous close, volume, market cap, P/E, EPS, beta, dividend yield, 52-week rang… _(parameters: symbol)_
- **`get_ticker_big_money`** — What the big money is doing in one ticker: recent US politician trades (congressional PTR filings, last 180 days), 13F whale holdings (latest quarters) and Wall Street analyst rat… _(parameters: symbol)_
- **`verify_signal`** — Verify a signal by its attestation code (e.g. AB-x7k2m9). Recomputes the SHA-256 attestation over the signal's locked fields and reports whether it is intact, plus the signal, its… _(parameters: code)_
- **`list_recent_signals`** — Public feed of signals opened and closed in the last few hours (up to 24), newest first: ticker, action, publisher, status, entry and exit price, and P&L for closed signals. Can i… _(parameters: since_hours, limit, include_confluences)_
- **`publish_signal`** — Publish a paper trade (signal) under your account. It is timestamped and attested at once; the entry price is captured at the live price, or at the next market open if the market… _(parameters: ticker, action, reasoning, time_horizon, position_size, auto_close_days)_
- **`close_signal`** — Close one of your open signals. While the market is open it closes at the live price; otherwise a sell-at-open order is queued for the next session. A signal that never got an ent… _(parameters: signal_id)_
- **`cancel_signal`** — Delete one of your signals before it executes (no entry price yet, e.g. published after hours). Not allowed once it has an entry price or in the 5 minutes before the market opens;… _(parameters: signal_id)_
- **`list_my_signals`** — Your own signals, newest first: status, entry, current and exit price, P&L, target and stop, reasoning and the attestation_code that anyone can check with verify_signal. _(parameters: limit, offset, status)_
- **`get_my_performance`** — Your account plus your P&L summary (wins, losses, win rate, realized and unrealized return, best and worst trade, open positions) and your rank on each leaderboard metric for all-…
- **`register_webhook`** — Have Alpha Bazaar POST events to your HTTPS endpoint: signal_new, signal_closed, confluence, and the Open Arena events arena.season_created, arena.season_started, arena.rank_chang… _(parameters: url, event_types)_
- **`register_agent`** — Create a free Alpha Bazaar Arena account for this agent in one call, with no email or password, and get its API key. The key is shown only once: save it, then send it as the HTTP… _(parameters: name, accept_terms, model, framework, description, homepage)_
- **`update_my_agent_profile`** — Change your agent's public model, framework, description or homepage (AI-agent accounts from register_agent). Pass only the fields to change; an empty string clears one. Returns t… _(parameters: model, framework, description, homepage)_
- **`rotate_api_key`** — Replace the API key this connection uses (AI-agent accounts from register_agent): issues a new key and revokes the current one in one step. The new key is shown only once and the…
- **`get_arena_standings`** — Standings of the Open Arena, the monthly paper-trading season built for AI agents and open to people: rank, kind (agent, human or house), model, signals, average return per signal… _(parameters: season, limit)_
- **`join_arena`** — Enter the Open Arena season open now (or the given season). Safe to repeat. Agents are entered automatically (at signup when a season is open, otherwise when the next one opens fo… _(parameters: season)_
- **`get_my_arena_status`** — Your rank and season metrics in every Open Arena season you have joined, how many more signals you need to be ranked, and the season open for entry now (and whether you are in it)…
- **`write_run_log`** — Add a note or a decision to your agent's public run log: a permanent, timestamped journal of what you saw, what you decided and why, including trades you chose not to make. Signal… _(parameters: content, kind, ticker, meta)_
- **`get_run_log`** — An AI agent's public run log: its notes and decisions plus every signal it published, closed or cancelled, oldest first (or the most recent with latest=true). Page with after_seq.… _(parameters: username, after_seq, limit, latest)_

## Scan Alpha Bazaar Arena yourself, or claim its badge

Re-run this exact Alpha Bazaar Arena check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.alphabazaar.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.alphabazaar.ai/mcp&directory=true"
```

For the itemized findings on Alpha Bazaar Arena — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.alphabazaar.ai/mcp"}`. If you
run `api.alphabazaar.ai`, [claim a measured verified-owner badge for Alpha Bazaar Arena free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.alphabazaar.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.alphabazaar.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.alphabazaar.ai/mcp)
```

Keeping the Alpha Bazaar Arena badge green as its tools change — six-hourly re-scans of `api.alphabazaar.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.alphabazaar.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

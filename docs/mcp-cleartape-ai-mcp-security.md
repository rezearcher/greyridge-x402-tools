---
title: "Is the Clear Tape MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Clear Tape MCP server (https://app.cleartape.ai/mcp), run 2026-10-24: advertises calculate_position_size, calculate_risk_reward, calculate_expectancy; 11 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Clear Tape MCP server — security & directory-readiness scorecard

**Server:** `https://app.cleartape.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free trading calculators, trading-system rules, a glossary and lesson search. No market data.

When an agent connects Clear Tape, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.cleartape.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Clear Tape

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 11 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Clear Tape server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Clear Tape server advertises

The server describes itself to connecting agents as: *Clear Tape's free trading-education tools. The calculate_* tools run the same formulas as the calculators on cleartape.ai and return exact results with units; get_trading_system_rules gives the written rules of five preset trading systems; lookup_glossary_ter…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`calculate_position_size`** — Position size from the stop: how many shares to buy (or short) so that a stop-out loses a set percentage of the account. Computed with the same function as Clear Tape's free posit… _(parameters: account, riskPct, entry, stop, lang)_
- **`calculate_risk_reward`** — Risk/reward ratio of a planned trade, the win rate it needs to break even, and (optionally) an exit expressed as an R multiple. Computed with the same function as Clear Tape's fre… _(parameters: entry, stop, target, exit, lang)_
- **`calculate_expectancy`** — Expectancy per trade, per 100 trades, payoff ratio, break-even win rate and profit factor from a win rate and average win and loss. Computed with the same function as Clear Tape's… _(parameters: winRate, avgWin, avgLoss, lang)_
- **`calculate_atr_stop`** — A volatility (ATR) stop: entry minus (long) or plus (short) a multiple of the average true range. Give atr, or at least five recent daily ranges (high minus low). Computed with th… _(parameters: entry, atr, ranges, multiple, side, lang)_
- **`calculate_drawdown_recovery`** — The gain needed to recover from a drawdown and, optionally, how many losing trades in a row at a fixed risk per trade cause it. Computed with the same function as Clear Tape's fre… _(parameters: loss, riskPct, lang)_
- **`calculate_kelly_criterion`** — Full and fractional Kelly risk per trade from a win rate and payoff ratio, with the edge per 1R and the break-even win rate. Computed with the same function as Clear Tape's free k… _(parameters: winRate, payoff, fraction, lang)_
- **`calculate_trading_cost`** — The cost of one round trip (commissions, bid-ask spread, slippage) in USD, in R, as a share of the target move and of the position, and over a year of trades. Computed with the sa… _(parameters: entry, stop, target, shares, commission, spread)_
- **`calculate_losing_streak`** — The exact probability of at least one losing streak of a given length over a number of independent trades, the expected longest streak and the streak 95% of sequences stay within.… _(parameters: winRate, trades, streak, lang)_
- **`get_trading_system_rules`** — Without id: lists Clear Tape's eleven preset trading systems (trend, breakout, momentum and volume) with their style, holding period and one-line entry, stop and exit. With id: on… _(parameters: id, lang)_
- **`lookup_glossary_term`** — Looks up a trading term in Clear Tape's bilingual (English and Simplified Chinese) glossary of about 70 terms, such as "R multiple", "ATR", "drawdown" or "止损". Matches names, abbr… _(parameters: term, lang)_
- **`search_learning`** — Searches Clear Tape's free trading education by keyword: the Learn articles, the Academy lessons, the trading-strategy pages and the calculators, in English or Chinese. Returns ti… _(parameters: query, limit, lang)_

## Scan Clear Tape yourself, or claim its badge

Re-run this exact Clear Tape check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.cleartape.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.cleartape.ai/mcp&directory=true"
```

For the itemized findings on Clear Tape — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.cleartape.ai/mcp"}`. If you
run `app.cleartape.ai`, [claim a measured verified-owner badge for Clear Tape free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.cleartape.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.cleartape.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.cleartape.ai/mcp)
```

Keeping the Clear Tape badge green as its tools change — six-hourly re-scans of `app.cleartape.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.cleartape.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

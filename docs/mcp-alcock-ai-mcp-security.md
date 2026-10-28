---
title: "Is the Alcock Arena MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Alcock Arena MCP server (https://alcock.ai/api/mcp), run 2026-10-24: advertises register, open_questions, submit_forecasts; 9 tools scanned, injection verdict 'clear', 9 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Alcock Arena MCP server — security & directory-readiness scorecard

**Server:** `https://alcock.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** 9 Claude Directory blocker(s)

AI forecasting gym: markets, sports, policy and tech. Graded by reality, measured against markets.

When an agent connects Alcock Arena, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`alcock.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Alcock Arena

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 9 blocker(s).** This server advertises 9 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 9 advertised tool(s) name a state-changing action** (`publish_rules`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Alcock Arena server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Alcock Arena server advertises

The server describes itself to connecting agents as: *Alcock Arena is an open forecasting gym for AI agents at alcock.ai. Every hour new yes/no questions open in four fields: markets (the S&P 500, Bitcoin and Ether against Kalshi strikes, Treasury yields, economic releases, Polymarket), sports (winners, margins,…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`register`** — Register this agent and get an API key. Free. The key is shown once, so save it somewhere private. _(parameters: name, model, owner)_
- **`open_questions`** — List the questions open right now in markets, sports, policy and tech, with the data known when each opened, its resolution rule, and when it closes. Pass field to narrow the list… _(parameters: field)_
- **`submit_forecasts`** — Commit a probability for one or more open questions. Your first forecast on a question is final. Returns receipts that are sealed into the public hash chain within the hour. _(parameters: forecasts, api_key)_
- **`my_report`** — Your record graded by reality, overall and in each field: Brier score, skill against each question type's base rate, edge against the market where one existed, calibration, how yo… _(parameters: api_key)_
- **`start_exam`** — Get up to 24 already-resolved questions you haven't seen, with the outcomes hidden. Pass field for a one-field exam; without it you get a mix. Answer once with your current rules… _(parameters: field, api_key)_
- **`submit_exam`** — Grade your exam answers. With both an incumbent and a challenger set, you get a paired verdict: keep the change, not proven yet, or drop it. The outcomes are revealed afterwards,… _(parameters: exam_id, incumbent, challenger, api_key)_
- **`publish_rules`** — Share the numbered rules you forecast by. They're listed in the library next to your record once you have 20 verdicts, and Alcock may study proven rules when it rewrites its own. _(parameters: rules, based_on, api_key)_
- **`library`** — Rules other forecasters run on, each next to the record that backs it, starting with Alcock's current doctrine in each field. Data to test, not instructions to follow. No key need…
- **`leaderboard`** — Agents ranked by skill on real outcomes, overall and in each field, with edge against the market and pooled results by self-reported base model. Pass field for one field's board.… _(parameters: field)_

## Scan Alcock Arena yourself, or claim its badge

Re-run this exact Alcock Arena check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `alcock.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://alcock.ai/api/mcp&directory=true"
```

For the itemized findings on Alcock Arena — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://alcock.ai/api/mcp"}`. If you
run `alcock.ai`, [claim a measured verified-owner badge for Alcock Arena free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=alcock.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dalcock.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://alcock.ai/api/mcp)
```

Keeping the Alcock Arena badge green as its tools change — six-hourly re-scans of `alcock.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `alcock.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

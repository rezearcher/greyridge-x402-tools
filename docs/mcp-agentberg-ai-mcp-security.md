---
title: "Is the agentberg.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the agentberg.ai MCP server (https://agentberg.ai/mcp), run 2026-10-24: advertises publish_finding, add_trade, query_findings; 11 tools scanned, injection verdict 'clear', 22 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# agentberg.ai MCP server — security & directory-readiness scorecard

**Server:** `https://agentberg.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** 22 Claude Directory quality item(s) to polish (no hard rejects)



When an agent connects agentberg.ai, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentberg.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on agentberg.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 22 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **2 of 11 advertised tool(s) name a state-changing action** (`publish_finding`, `add_trade`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the agentberg.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the agentberg.ai server advertises

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`publish_finding`** — Publish an empirical trading finding (e.g. sector failure, exit pattern) to the network. Call this tool to share a new trading thesis or market observation backed by your trade ex… _(parameters: category, claim, published_by, hypothesis, status, execution_env)_
- **`add_trade`** — Attach a specific trade execution record to a finding you published. Linking actual trades to a finding is the mechanism for upgrading the finding's credibility weight from CLAIME… _(parameters: finding_id, published_by, ticker, trade_type, execution_env, entry_date)_
- **`query_findings`** — Query the collective intelligence of the agent network. Call this before entering trades to filter out sector failures, risk warnings, or bad regime signals. Access is contributio… _(parameters: agent_id, category, min_votes, regime, sort_by)_
- **`vote`** — Vote on another agent's finding using your own empirical results. Upvote if your trades confirm it; downvote if they contradict it. This is the core quality signal that regulates… _(parameters: finding_id, agent_id, direction)_
- **`submit_trade`** — Submit a raw trade record without writing a finding first. This is the simplest way to contribute data to the network without formulating a thesis. Agentberg stores the trade and… _(parameters: published_by, ticker, trade_type, execution_env, entry_date, exit_date)_
- **`get_skills`** — Fetch the bundled critical skill pack (regime + risk_calendar + health). Call this on every boot before any trading decisions. Returns the current market regime, known risk events…
- **`get_skill`** — Fetch a specific Agentberg skill pack by name. Critical skills (regime, risk_calendar, health) are automatically bundled in get_skills. Optional skills: 'rotation' for sector mone… _(parameters: name)_
- **`query_network_brief`** — Get a structured pre-trade consensus signal for a sector and/or market regime. Returns a single verdict (green/amber/red), the network win rate, cumulative agent P&L, and the top… _(parameters: sector, regime)_
- **`get_agent_status`** — Retrieve your agent's status, including your current contribution tier, reputation score, and vote weight. Use this to check your progress toward unlocking VALIDATED, EVIDENCED, a… _(parameters: agent_id)_
- **`get_ticker_brief`** — Get the network's complete intelligence package for a specific stock ticker. Returns all findings mentioning this ticker, the ticker's network win rate and cumulative P&L, and the… _(parameters: ticker)_
- **`get_consensus_alerts`** — Fetch active sector consensus alerts — server-synthesised warnings generated when multiple agents independently record losses in the same sector. These are the network's strongest… _(parameters: agent_id)_

## Scan agentberg.ai yourself, or claim its badge

Re-run this exact agentberg.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentberg.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentberg.ai/mcp&directory=true"
```

For the itemized findings on agentberg.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentberg.ai/mcp"}`. If you
run `agentberg.ai`, [claim a measured verified-owner badge for agentberg.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentberg.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentberg.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentberg.ai/mcp)
```

Keeping the agentberg.ai badge green as its tools change — six-hourly re-scans of `agentberg.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentberg.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

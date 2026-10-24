---
title: "Is the blast-radius.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the blast-radius.ai MCP server (https://blast-radius.ai/mcp), run 2026-10-24: advertises get_latest_update, get_top_headlines, get_force_reading; 9 tools scanned, injection verdict 'clear', 18 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# blast-radius.ai MCP server — security & directory-readiness scorecard

**Server:** `https://blast-radius.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** 18 Claude Directory blocker(s)

Blast Radius tools for AI strategy, diligence, and market updates.

When an agent connects blast-radius.ai, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`blast-radius.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on blast-radius.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 18 blocker(s).** This server advertises 18 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 9 advertised tool(s) name a state-changing action** (`get_latest_update`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the blast-radius.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the blast-radius.ai server advertises

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_latest_update`** — Get this week's lede and the five force readings: the latest published weekly readings of the Blast Radius argument, each linked to the story pages it cites. Returns the most rece…
- **`get_top_headlines`** — Get the last seven days of ranked Blast Radius news: the Top Headlines strip in order and up to five leading events per force, each with its date, impact, blast-radius.ai story pa… _(parameters: force)_
- **`get_force_reading`** — Get one force's current weekly reading (with its week, direction, paragraphs, and cited story pages), up to ten of its latest events, and the matching memo section summary. _(parameters: force)_
- **`get_thesis`** — Get the durable Blast Radius thesis and key metrics, plus the current IGV software-ETF quote.
- **`ask_blast_radius`** — Ask a question about the Blast Radius brief and its recent news. Retrieval is semantic (embedding similarity): returns the closest memo sections, the best matching weekly reading,… _(parameters: question)_
- **`assess_against_frontier_line`** — Stress-test a company, product, or thesis against the Blast Radius 'Frontier Line' framework, an adversarial business-model survivability assessment under AI capability accelerati… _(parameters: subject)_
- **`get_diligence_checklist`** — Get the structured Blast Radius diligence checklist: the key anti-patterns and durable-startup characteristics used to assess AI-first companies against the Frontier Line, each wi…
- **`get_igv_quote`** — Get the current IGV (iShares Expanded Tech-Software ETF) quote, the SaaSpocalypse market signal referenced in the brief.
- **`subscribe`** — Request an email-confirmation link for Blast Radius updates-only signup. The reader must confirm before activation. _(parameters: email)_

## Scan blast-radius.ai yourself, or claim its badge

Re-run this exact blast-radius.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `blast-radius.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://blast-radius.ai/mcp&directory=true"
```

For the itemized findings on blast-radius.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://blast-radius.ai/mcp"}`. If you
run `blast-radius.ai`, [claim a measured verified-owner badge for blast-radius.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=blast-radius.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dblast-radius.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://blast-radius.ai/mcp)
```

Keeping the blast-radius.ai badge green as its tools change — six-hourly re-scans of `blast-radius.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `blast-radius.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

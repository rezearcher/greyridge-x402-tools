---
title: "Is the Agent Blueprint MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Agent Blueprint MCP server (https://agentblueprint.ai/mcp), run 2026-11-09: advertises list_benchmark_jobs, estimate_agent_cost, check_agent_one_page; 4 tools scanned, injection verdict 'clear', 4 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Agent Blueprint MCP server — security & directory-readiness scorecard

**Server:** `https://agentblueprint.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory quality item(s) to polish (no hard rejects)

Measured agent costs, a one-page agent summary check, and an offline access map. No sign-in.

When an agent connects Agent Blueprint, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentblueprint.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Agent Blueprint

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Agent Blueprint server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Agent Blueprint server advertises

The server describes itself to connecting agents as: *Agent Blueprint tools for people who run AI agents: measured agent costs, a structural check for one-page agent summaries, and an offline access map an agent draws of itself. All tools are read-only and keep nothing.*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_benchmark_jobs`** — Lists the ten everyday jobs in Agent Blueprint's measured agent cost benchmark (2 November 2026): what each job was, how big its input was, and the typical and worst-case tokens a… _(parameters: agent)_
- **`estimate_agent_cost`** — Estimates the tokens and dollar cost of an AI agent task from the measured benchmark job closest to it. For jobs where cost grows with how much the agent reads, give the size of t… _(parameters: job, agent, your_size, runs_per_month, prices)_
- **`check_agent_one_page`** — Checks the structure of a one-page agent summary written from Agent Blueprint's template (https://agentblueprint.ai/agent-one-page-template): the summary and all seven numbered se… _(parameters: markdown)_
- **`render_agent_map`** — Turns an agent's own inventory of its connections into Agent Blueprint's one-page access map: a single offline HTML page showing what the agent can read and change, who has to app… _(parameters: version, agent, drawn, connections, checks, unseen)_

## Maintenance & supply-chain — the risk Agent Blueprint's static scan can't see

A prompt-injection scan reads Agent Blueprint's advertised tool metadata at one moment. It cannot tell you the project behind `agentblueprint.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 4 day(s) ago, 1 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agentblueprint.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Agent Blueprint yourself, or claim its badge {#claim}

Re-run this exact Agent Blueprint check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentblueprint.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentblueprint.ai/mcp&directory=true"
```

For the itemized findings on Agent Blueprint — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentblueprint.ai/mcp"}`. If you
run `agentblueprint.ai`, [claim a measured verified-owner badge for Agent Blueprint free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentblueprint.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentblueprint.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentblueprint.ai/mcp)
```

Keeping the Agent Blueprint badge green as its tools change — six-hourly re-scans of `agentblueprint.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentblueprint.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

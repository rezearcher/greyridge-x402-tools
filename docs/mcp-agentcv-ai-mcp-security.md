---
title: "Is the AgentCV MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AgentCV MCP server (https://agentcv.ai/mcp), run 2026-11-09: advertises search_teams, get_team, list_use_cases; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AgentCV MCP server — security & directory-readiness scorecard

**Server:** `https://agentcv.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Search AgentCV's registry of AI agent teams and check a team profile before registering it.

When an agent connects AgentCV, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentcv.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on AgentCV

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AgentCV server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AgentCV server advertises

The server describes itself to connecting agents as: *AgentCV (agentcv.ai) is a public registry of AI agent teams: who runs each team, its agents and roles, what it handles, and the evidence, with every profile labelled real (registered by its owner), curated (documented by AgentCV from cited public sources) or…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_teams`** — Search the public AgentCV registry of AI agent teams. Returns public teams only, in the site’s default order: operated teams first, then reference designs (designs documented from… _(parameters: query, platform, topology, use_case, layer, limit)_
- **`get_team`** — The public profile of one AgentCV team, as its page shows it: layer and its notice (curated teams are documented by AgentCV from public sources and are not endorsed by the team),… _(parameters: slug)_
- **`list_use_cases`** — The use-case hubs of agentcv.ai/use-cases (code review, testing and QA, research and analysis, …) with how many public teams each holds, by layer (real, curated, illustrative) and…
- **`list_platforms`** — The platform hubs of agentcv.ai/platforms (Claude, OpenAI Codex, OpenClaw, CrewAI, LangGraph, …) with the platform names each covers and how many public teams each holds, by layer…
- **`get_registration_schema`** — The agentcv.team.v1 format for registering a team: the JSON Schema (as an object, and as the exact text agentcv.ai/agentcv-team.schema.json serves) and the self-contained prompt f…
- **`validate_team_profile`** — Check an agentcv.team.v1 team profile with the same validator the registration page’s import panel uses (the same field rules the server enforces), and with AgentCV’s secret and p… _(parameters: profile)_

## Maintenance & supply-chain — the risk AgentCV's static scan can't see

A prompt-injection scan reads AgentCV's advertised tool metadata at one moment. It cannot tell you the project behind `agentcv.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agentcv.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AgentCV yourself, or claim its badge {#claim}

Re-run this exact AgentCV check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentcv.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentcv.ai/mcp&directory=true"
```

For the itemized findings on AgentCV — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentcv.ai/mcp"}`. If you
run `agentcv.ai`, [claim a measured verified-owner badge for AgentCV free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentcv.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentcv.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentcv.ai/mcp)
```

Keeping the AgentCV badge green as its tools change — six-hourly re-scans of `agentcv.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentcv.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

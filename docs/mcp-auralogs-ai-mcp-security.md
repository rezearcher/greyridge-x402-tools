---
title: Is the Auralogs MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Auralogs MCP server (https://mcp.auralogs.ai/mcp), run 2026-10-24: advertises list_projects, get_project, list_logs; 7 tools scanned, injection verdict 'clear', 14 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Auralogs MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.auralogs.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 7 · **Injection verdict:** `clear` · **Directory:** 14 Claude Directory blocker(s)

Read-only access to Auralogs production logs: search logs, inspect errors, review AI analyses.

When an agent connects Auralogs, the model reads all 7 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.auralogs.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Auralogs

- **No tool-poisoning or prompt-injection patterns** were found across the 7 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 14 blocker(s).** This server advertises 14 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 7 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 7 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Auralogs server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Auralogs server advertises

These are the 7 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_projects`** — List projects accessible to the current read key (one project for v1).
- **`get_project`** — Get a project by id. Must match the read key's scoped project. _(parameters: project_id)_
- **`list_logs`** — List logs for the scoped project, optionally filtered by level/since/until. _(parameters: level, since, until, limit, cursor, project_id)_
- **`search_logs`** — Full-text search log messages for the scoped project. _(parameters: q, limit, cursor, project_id)_
- **`get_log`** — Get a single log row by id, with full context (stack, metadata). _(parameters: log_id)_
- **`list_analyses`** — List active analyses for the scoped project. Archived analyses (triaged from the dashboard) are excluded by default; pass include_archived=true to see them. Optional filters: seve… _(parameters: severity, type, include_archived, limit, cursor, project_id)_
- **`get_analysis`** — Get a single analysis by id (diagnosis, suggested fix, PR link if any). _(parameters: analysis_id)_

## Scan Auralogs yourself, or claim its badge

Re-run this exact Auralogs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.auralogs.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.auralogs.ai/mcp&directory=true"
```

For the itemized findings on Auralogs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.auralogs.ai/mcp"}`. If you
run `mcp.auralogs.ai`, [claim a measured verified-owner badge for Auralogs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.auralogs.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.auralogs.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.auralogs.ai/mcp)
```

Keeping the Auralogs badge green as its tools change — six-hourly re-scans of `mcp.auralogs.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.auralogs.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

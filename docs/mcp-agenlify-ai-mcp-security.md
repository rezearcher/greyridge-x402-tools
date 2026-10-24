---
title: "Is the Agenlify AI Agent Directory MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Agenlify AI Agent Directory MCP server (https://agenlify.ai/mcp), run 2026-10-24: advertises search_agents, get_agent, list_tasks; 3 tools scanned, injection verdict 'clear', 3 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Agenlify AI Agent Directory MCP server — security & directory-readiness scorecard

**Server:** `https://agenlify.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 3 Claude Directory quality item(s) to polish (no hard rejects)



When an agent connects Agenlify AI Agent Directory, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agenlify.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Agenlify AI Agent Directory

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 3 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Agenlify AI Agent Directory server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Agenlify AI Agent Directory server advertises

The server describes itself to connecting agents as: *Search Agenlify's public AI product directory to find tools for a task, then inspect details and sources before recommending them. Use list_tasks for supported task IDs. Search is vocabulary-based, not semantic or exhaustive. Result order is name/task relevan…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_agents`** — Search the public Agenlify catalog by English or Chinese task, product name or official domain. Filter by pricing, setup, category, task and evidence. Returns dated catalog summar… _(parameters: query, task, category, pricing, setup, evidence)_
- **`get_agent`** — Get a catalog product by exact slug, including inputs, outputs, setup steps, limitations, human review requirements, pricing review dates, official sources and any separately reco… _(parameters: slug)_
- **`list_tasks`** — List Agenlify task IDs, preparation checklists, expected outputs and review requirements. Each listed task has at least three catalog candidates. Optionally filter tasks by catego… _(parameters: category)_

## Scan Agenlify AI Agent Directory yourself, or claim its badge

Re-run this exact Agenlify AI Agent Directory check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agenlify.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agenlify.ai/mcp&directory=true"
```

For the itemized findings on Agenlify AI Agent Directory — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agenlify.ai/mcp"}`. If you
run `agenlify.ai`, [claim a measured verified-owner badge for Agenlify AI Agent Directory free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agenlify.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagenlify.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agenlify.ai/mcp)
```

Keeping the Agenlify AI Agent Directory badge green as its tools change — six-hourly re-scans of `agenlify.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agenlify.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: Is the Propick Integration MCP MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Propick Integration MCP MCP server (https://propick.ae/mcp), run 2026-10-24: 8 tools scanned, injection verdict 'clear', 16 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Propick Integration MCP MCP server — security & directory-readiness scorecard

**Server:** `https://propick.ae/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 16 Claude Directory blocker(s)

Manage your real-estate stock on Propick (Dubai): bulk listing sync, lookups and run reports.

When an agent connects Propick Integration MCP, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`propick.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Propick Integration MCP

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 16 blocker(s).** This server advertises 16 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **2 of 8 advertised tool(s) name a state-changing action** (`get_run`, `list_runs`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Propick Integration MCP server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Propick Integration MCP server advertises

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`ping`** — Health check for the integration key. Returns the channel clientId. Call once after connecting to verify the key works.
- **`sync_properties`** — Submit a batch of property listings (up to 500) for import. The engine diffs the batch against the channel current stock and plans creations, updates, archivals and deletions; quo… _(parameters: mode, confirmRemovals, properties)_
- **`get_run`** — Fetch one import run by importId: status, counters of planned and applied decisions, stop reason if the run did not finish. _(parameters: importId)_
- **`list_runs`** — List this channel import runs, newest first. Paginated. _(parameters: page, limit)_
- **`list_events`** — Per-property outcomes of import runs: what happened to each externalPropertyId, with error codes and details. Filter by importId and/or externalPropertyId. Paginated. _(parameters: importId, externalPropertyId, page, limit)_
- **`search_projects`** — Resolve a development project to the numeric projectId required by every listing in sync_properties. Search by name fragment (min 2 characters) or by exact DLD project number (dig… _(parameters: query, page, limit)_
- **`list_responsibles`** — List agency members that can be set as responsibleUsername on a listing. Agency channels only: a personal channel gets a refusal, not an empty list. _(parameters: page, limit)_
- **`get_reference`** — Every closed vocabulary and limit of the import payload in one call: categories, listing types, building statuses, rental periods, occupancy statuses, currency codes, area units,…

## Scan Propick Integration MCP yourself, or claim its badge

Re-run this exact Propick Integration MCP check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `propick.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://propick.ae/mcp&directory=true"
```

For the itemized findings on Propick Integration MCP — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://propick.ae/mcp"}`. If you
run `propick.ae`, [claim a measured verified-owner badge for Propick Integration MCP free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=propick.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dpropick.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://propick.ae/mcp)
```

Keeping the Propick Integration MCP badge green as its tools change — six-hourly re-scans of `propick.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `propick.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

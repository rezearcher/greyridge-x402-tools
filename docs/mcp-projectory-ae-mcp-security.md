---
title: Is the Projectory MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Projectory MCP server (https://mcp.projectory.ae/mcp), run 2026-10-24: 5 tools scanned, injection verdict 'clear', 5 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Projectory MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.projectory.ae/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory blocker(s)

Find UAE off-plan developments and registered residential sales.

When an agent connects Projectory, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.projectory.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Projectory

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 blocker(s).** This server advertises 5 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Projectory server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Projectory server advertises

The server describes itself to connecting agents as: *Search Projectory's public UAE developments and registered residential sales. Use search for a project name or structured filters; fetch a known project ID, slug or URL directly. Use suggest_project_terms for an unknown partial facet name, or list_project_fac…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search`** — Find published off-plan UAE developments by project name or slug text, combined with exact structured filters. Returns shortlist facts and a pagination cursor. Follow more pages o… _(parameters: query, emirate, developer, area, propertyType, bedroomsMin)_
- **`search_transactions`** — Search canonical residential sale registrations in one required market: Dubai or Abu Dhabi. Whole area, project and building names ignore ASCII letter case; provider IDs match exa… _(parameters: market, areaName, projectName, buildingName, sourceProjectId, from)_
- **`fetch`** — Fetch one development's detail using a known ID, slug or Projectory URL; no prior search or facet lookup is needed. Returns development-wide pricing, location, availability, enqui… _(parameters: id)_
- **`list_project_facets`** — Explore all exact values for 'emirate', 'area', 'developer', 'propertyType', 'availability' and 'sort', plus boolean flags 'newLaunch' and 'comingSoon'. Skip this call when the ne…
- **`suggest_project_terms`** — Resolve partial emirate, area, developer or property-type text, such as "marina" or "sobha", into exact filter slugs for 'search'. Does not search project names. Skip when the exa… _(parameters: query, limit)_

## Scan Projectory yourself, or claim its badge

Re-run this exact Projectory check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.projectory.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.projectory.ae/mcp&directory=true"
```

For the itemized findings on Projectory — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.projectory.ae/mcp"}`. If you
run `mcp.projectory.ae`, [claim a measured verified-owner badge for Projectory free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.projectory.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.projectory.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.projectory.ae/mcp)
```

Keeping the Projectory badge green as its tools change — six-hourly re-scans of `mcp.projectory.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.projectory.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the GroundTruth - Environmental Records MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the GroundTruth - Environmental Records MCP server (https://env.agentlookups.ai/mcp), run 2026-10-24: advertises environment_near, drinking_water, location_scores; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# GroundTruth - Environmental Records MCP server — security & directory-readiness scorecard

**Server:** `https://env.agentlookups.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Federal environmental records near any US location, with dates and provenance; never a safety score.

When an agent connects GroundTruth - Environmental Records, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`env.agentlookups.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on GroundTruth - Environmental Records

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the GroundTruth - Environmental Records server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the GroundTruth - Environmental Records server advertises

The server describes itself to connecting agents as: *Environmental records near a US location from GroundTruth's monthly snapshot of EPA data: National Priorities List (Superfund) sites, facilities from the newest Toxics Release Inventory reporting year, facilities with a current significant-noncompliance flag,…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`environment_near`** — Environmental records within a radius of a US location, from GroundTruth's monthly snapshot of three EPA datasets: National Priorities List (Superfund) sites, facilities from the… _(parameters: address, lat, lon, radius_km)_
- **`drinking_water`** — Public water systems serving a US state + county and/or city, with health-based SDWA violation summaries. Matching is approximate (service boundaries are not public); the user's w… _(parameters: city, county, state)_
- **`location_scores`** — Layer scores for a US location: school quality, natural hazards, groundwater contamination, Superfund proximity, air quality, highway noise, walkability, crime, and climate pleasa… _(parameters: address, lat, lon)_
- **`broadband_availability`** — Fixed broadband availability for a US location from the FCC Broadband Data Collection (BDC), counted per 2020 Census block: each provider and technology the FCC data lists in the… _(parameters: address, lat, lon)_

## Scan GroundTruth - Environmental Records yourself, or claim its badge

Re-run this exact GroundTruth - Environmental Records check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `env.agentlookups.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://env.agentlookups.ai/mcp&directory=true"
```

For the itemized findings on GroundTruth - Environmental Records — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://env.agentlookups.ai/mcp"}`. If you
run `env.agentlookups.ai`, [claim a measured verified-owner badge for GroundTruth - Environmental Records free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=env.agentlookups.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Denv.agentlookups.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://env.agentlookups.ai/mcp)
```

Keeping the GroundTruth - Environmental Records badge green as its tools change — six-hourly re-scans of `env.agentlookups.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `env.agentlookups.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the mcp.datadubai.ae MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the mcp.datadubai.ae MCP server (https://mcp.datadubai.ae/mcp), run 2026-10-24: advertises search, get_entity, get_market_summary; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# mcp.datadubai.ae MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.datadubai.ae/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Dubai property prices, AED/sqft, sales, rents, yields and projects from DLD registered transactions.

When an agent connects mcp.datadubai.ae, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.datadubai.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on mcp.datadubai.ae

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the mcp.datadubai.ae server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the mcp.datadubai.ae server advertises

The server describes itself to connecting agents as: *Read-only statistics on the Dubai property market, computed from registered Dubai Land Department (DLD) transactions and rebuilt daily by datadubai.ae: prices, price per square foot, sales volumes, rents, gross yields, off-plan share, project registry and mon…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search`** — Search Dubai projects, communities, developers and areas by name (case- and accent-insensitive, all query words must match; exact prefix contains, then by number of sales). type:… _(parameters: query, type, limit)_
- **`get_entity`** — Get the full statistics record for one project, community, developer or area by slug (the last part of its page address, e.g. dubai-marina). type: project | community | developer… _(parameters: type, slug)_
- **`get_market_summary`** — Get the overall Dubai property market summary: sales count, median price and AED/sqft, year-on-year changes, off-plan share, bedroom and property-type breakdown, yearly history an…
- **`get_monthly_report`** — Get the monthly Dubai property market report: key figures (sales, median price, AED/sqft, year-on-year), summary facts, top movers and a ready-made citation string. month: 'YYYY-M… _(parameters: month)_
- **`fetch`** — Fetch the full readable record for one project, community, developer or area by its id ("type:slug", e.g. "community:dubai-marina") — the same text as the datadubai.ae page, as Ma… _(parameters: id)_
- **`list_rankings`** — List top rankings. kind: rents (communities by median annual rent, AED), yields (communities by gross rental yield %), communities (by number of sales in last 12 months, with medi… _(parameters: kind, limit)_

## Scan mcp.datadubai.ae yourself, or claim its badge

Re-run this exact mcp.datadubai.ae check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.datadubai.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.datadubai.ae/mcp&directory=true"
```

For the itemized findings on mcp.datadubai.ae — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.datadubai.ae/mcp"}`. If you
run `mcp.datadubai.ae`, [claim a measured verified-owner badge for mcp.datadubai.ae free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.datadubai.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.datadubai.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.datadubai.ae/mcp)
```

Keeping the mcp.datadubai.ae badge green as its tools change — six-hourly re-scans of `mcp.datadubai.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.datadubai.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

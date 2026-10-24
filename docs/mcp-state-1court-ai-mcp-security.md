---
title: Is the 1Court Directory MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the 1Court Directory MCP server (https://state.1court.ai/api/mcp), run 2026-10-24: advertises list_deadline_rules, calculate_deadline, list_states; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# 1Court Directory MCP server — security & directory-readiness scorecard

**Server:** `https://state.1court.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

US county court directory: clerk, courthouse address, e-filing, filing fees, and case lookup.

When an agent connects 1Court Directory, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`state.1court.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on 1Court Directory

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the 1Court Directory server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the 1Court Directory server advertises

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_deadline_rules`** — List the court deadline types 1Court can calculate for a jurisdiction. Available ids: TX; CA (civil), CA-FAM (family), CA-PROB (probate), CA-UD (unlawful detainer), CA-SC (small c… _(parameters: state, county, court)_
- **`calculate_deadline`** — Calculate a court deadline deterministically from cited rules (weekends, legal holidays, short-period and mail-service rules applied). Returns the date, each computation step, and… _(parameters: state, county, court, deadline_type, trigger_date, service_method)_
- **`list_states`** — List all U.S. states currently covered by the 1Court Directory, with how many counties are available in each. Use this to discover coverage before looking up a specific county.
- **`list_counties`** — List the counties covered in a given U.S. state (accepts a full state name, 2-letter code, or slug). Returns each county name and its 1Court page URL. _(parameters: state)_
- **`get_court_info`** — Get verified court information for a specific U.S. county: clerk of court contacts, e-filing provider and whether e-filing is mandatory, filing fees (civil, small claims, divorce)… _(parameters: state, county)_
- **`search_courts`** — Search the 1Court Directory by county or state name and get matching counties with their 1Court page URLs. Use when you are unsure of the exact county or state format. _(parameters: query)_

## Scan 1Court Directory yourself, or claim its badge

Re-run this exact 1Court Directory check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `state.1court.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://state.1court.ai/api/mcp&directory=true"
```

For the itemized findings on 1Court Directory — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://state.1court.ai/api/mcp"}`. If you
run `state.1court.ai`, [claim a measured verified-owner badge for 1Court Directory free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=state.1court.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dstate.1court.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://state.1court.ai/api/mcp)
```

Keeping the 1Court Directory badge green as its tools change — six-hourly re-scans of `state.1court.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `state.1court.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

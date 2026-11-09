---
title: "Is the 1Court Directory MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the 1Court Directory MCP server (https://state.1court.ai/api/mcp), run 2026-11-09: advertises list_rule_sets, search_rules, get_rule; 9 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# 1Court Directory MCP server — security & directory-readiness scorecard

**Server:** `https://state.1court.ai/api/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

US county court directory: clerk, courthouse address, e-filing, filing fees, and case lookup.

When an agent connects 1Court Directory, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`state.1court.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on 1Court Directory

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 9 advertised tool(s) name a state-changing action** (`list_rule_sets`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the 1Court Directory server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the 1Court Directory server advertises

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_rule_sets`** — List every deadline rule set 1Court covers, with rule counts and scope. Coverage: Deadlines: California in depth (civil, family, probate, eviction, small claims, government claims…
- **`search_rules`** — Find deadline rules by plain words (for example "opposition to motion", "answer complaint", "notice of appeal"). Searches rule names, ids, citations and triggers. Optionally limit… _(parameters: query, rule_set)_
- **`get_rule`** — Get one deadline rule: its period, trigger, citation, the verbatim rule text, the official source URL, the 1Court rule page, any disclosed alternate reading (safe-date policy) and… _(parameters: rule_set, rule_id, county, court)_
- **`list_deadline_rules`** — List the deadline types 1Court can calculate for one rule set (TX, CA, CA-FAM, CA-APP, US, US-BK, US-CRIM, CA-PROB, CA-UD, CA-SC, CA-GOV, CA-CRIM, CA-JUV, CA-AGENCY, CA-PRESUIT, C… _(parameters: state, county, court)_
- **`calculate_deadline`** — Calculate a court deadline from cited rules (weekends, court holidays, service extensions and local rules applied). Returns the date, each counting step, the verbatim rule text an… _(parameters: state, county, court, deadline_type, trigger_date, service_method)_
- **`list_states`** — List the U.S. states in the 1Court Directory, with how many counties each has. Use this to discover coverage before looking up a county.
- **`list_counties`** — List the counties covered in a U.S. state (full name, 2-letter code or slug), each with its 1Court page URL. _(parameters: state)_
- **`get_court_info`** — Get verified court information for one U.S. county: clerk contacts, courthouse address, e-filing provider and whether it is mandatory, filing fees, case lookup, self-help, jury se… _(parameters: state, county)_
- **`search_courts`** — Search the 1Court Directory by county or state name, courthouse name, city, or phone number. Returns matching counties and courthouses with their 1Court page URLs. _(parameters: query)_

## Maintenance & supply-chain — the risk 1Court Directory's static scan can't see

A prompt-injection scan reads 1Court Directory's advertised tool metadata at one moment. It cannot tell you the project behind `state.1court.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `state.1court.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan 1Court Directory yourself, or claim its badge {#claim}

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
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

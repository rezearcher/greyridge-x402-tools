---
title: "Is the BeliefState MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BeliefState MCP server (https://beliefstate.ai/v1/research/mcp), run 2026-11-09: advertises get_brief, get_case, get_cases; 23 tools scanned, injection verdict 'clear', 21 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# BeliefState MCP server — security & directory-readiness scorecard

**Server:** `https://beliefstate.ai/v1/research/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 23 · **Injection verdict:** `clear` · **Directory:** 21 Claude Directory quality item(s) to polish (no hard rejects)

25 account tools; 23 wallet tools (20 paid). Cited research, company facts, KPIs and guidance.

When an agent connects BeliefState, the model reads all 23 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`beliefstate.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on BeliefState

- **No tool-poisoning or prompt-injection patterns** were found across the 23 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 21 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 23 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 23 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BeliefState server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BeliefState server advertises

These are the 23 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_brief`** — Retrieves a cited research brief for a company, ETF or research subject, including investor theses, risks, catalysts, changes and available market context. Use overview for ordina… _(parameters: ticker, refresh_market_data, as_of, max_results, detail, entity_id)_
- **`get_case`** — Retrieves one complete investment case by returned belief_id: investor, reasoning, evidence, risks, catalysts, conditions, revisions, outcomes, provenance and coverage gaps. Usefu… _(parameters: belief_id, as_of, paragraph_index, support_index, support_text_offset, scenario)_
- **`get_cases`** — Retrieves dated investment cases for one company or research subject, with optional investor, direction and time filters. Returns attributed thesis records, case IDs, dates, citat… _(parameters: ticker, entity_id, person_id, direction, status, time_horizon)_
- **`get_catalysts`** — Retrieves evidence-linked catalysts for one company, research subject, investment case or the explicitly selected released corpus. Returns recorded conditions, lifecycle status, d… _(parameters: ticker, entity_id, belief_id, corpus, person_id, source_id)_
- **`get_changes`** — Retrieves the ordered research change journal for a company, subject, case or explicitly selected released corpus. Returns dated events, citations and available before/after value… _(parameters: person_id, source_id, domain, event_kind, revision_only, ticker)_
- **`get_companies`** — Retrieves matching SEC-registered US companies by ticker or company name. Returns matching companies and their direct BeliefState research availability. Useful for resolving a com… _(parameters: q)_
- **`get_company_facts`** — Retrieves retained financial facts, company references, segment metrics, operating KPIs and management guidance for one ticker. Select record_type; use fiscal_year/fiscal_quarter… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_comparison`** — Retrieves a cited engine comparison of two distinct investment cases using their returned belief_id and compare_to_belief_id. Returns a cited engine assessment of support, contrad… _(parameters: belief_id, compare_to_belief_id, comparison_focus, as_of)_
- **`get_context_assessment`** — Retrieves a dated engine context assessment by its returned assessment identifier, including permitted supporting evidence and coverage limitations. Useful for examining the issue… _(parameters: context_assessment_id, as_of)_
- **`get_economic_calendar`** — Retrieves retained US economic events in one ticker research scope. Filter by event text, region, scheduled/reported/unconfirmed state and scheduled-date bounds. Returns typed act… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_insider_trades`** — Retrieves source-reported insider transactions for one ticker. Filter by reporting owner name or CIK, transaction codes, derivative status and transaction or filing dates. Returns… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_institutional_holdings`** — Retrieves reported institutional holdings for one ticker across supported retained 13F history. Filter by manager name or CIK, report period, filing dates, amendments, share class… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_investor_outcomes`** — Retrieves an investor's stored publication-based outcomes for one company, research subject, investment case or the explicitly selected released corpus. Returns action, entry-pric… _(parameters: ticker, entity_id, belief_id, corpus, person_id, source_id)_
- **`get_macro_context`** — Retrieves retained government macroeconomic observations in one ticker research scope. Filter by native series_ids, agency, measurement_names and period dates; returns typed value… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_market_returns`** — Retrieves supported split-adjusted close-price returns for one ticker versus SPY. Request session_intervals from 1 to 252; date bounds select return end sessions, while an omitted… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_news`** — Retrieves recent SEC filing metadata for one verified ticker: forms, filing and acceptance dates, official SEC links and the last observation time. Useful for checking company dis… _(parameters: ticker, limit)_
- **`get_options_activity`** — Retrieves retained options bars, flow aggregates and open interest for one ticker. Select activity_type, call/put right, expiration, strike and observation-date filters; returns t… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_risks`** — Retrieves evidence-linked risks for one company, research subject, investment case or the explicitly selected released corpus. Returns recorded severity, lifecycle status, support… _(parameters: ticker, entity_id, belief_id, corpus, person_id, source_id)_
- **`get_search_results`** — Retrieves ranked published investment cases matching thesis, investment theme or trade setup, with an optional company or subject filter. Returns ranked matching passages, attribu… _(parameters: q, ticker, entity_id, person_id, direction, status)_
- **`get_short_activity`** — Retrieves retained short-interest and short-volume history for one ticker. Select family and date bounds; short_interest uses settlement periods, while short_volume uses observati… _(parameters: cursor, ticker, as_of, snapshot_id, snapshot_hash, filters_sha256)_
- **`get_subjects`** — Retrieves matching released research subjects by name or kind, including companies, industries and investment themes. Returns matching subject identifiers and available research c… _(parameters: q, kind, as_of, limit, cursor)_
- **`get_tickers`** — Retrieves public direct-company research coverage and counts. Account tracking requires the authenticated MCP server. _(parameters: as_of)_
- **`get_visual`** — Retrieves saved research charts and tables for one investment case or context assessment. Without visual_id, returns available visual and region descriptors; with visual_id, retur… _(parameters: belief_id, context_assessment_id, as_of, visual_id, region_id, region_offset)_

## Maintenance & supply-chain — the risk BeliefState's static scan can't see

A prompt-injection scan reads BeliefState's advertised tool metadata at one moment. It cannot tell you the project behind `beliefstate.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 0 day(s) ago, 1 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `beliefstate.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BeliefState yourself, or claim its badge {#claim}

Re-run this exact BeliefState check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `beliefstate.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://beliefstate.ai/v1/research/mcp&directory=true"
```

For the itemized findings on BeliefState — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://beliefstate.ai/v1/research/mcp"}`. If you
run `beliefstate.ai`, [claim a measured verified-owner badge for BeliefState free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=beliefstate.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbeliefstate.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://beliefstate.ai/v1/research/mcp)
```

Keeping the BeliefState badge green as its tools change — six-hourly re-scans of `beliefstate.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `beliefstate.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the BeliefState MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BeliefState MCP server (https://beliefstate.ai/v1/research/mcp), run 2026-11-02: advertises get_belief_risks, get_belief_catalysts, get_author_track_record; 18 tools scanned, injection verdict 'clear', 20 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# BeliefState MCP server — security & directory-readiness scorecard

**Server:** `https://beliefstate.ai/v1/research/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 18 · **Injection verdict:** `clear` · **Directory:** 20 Claude Directory quality item(s) to polish (no hard rejects)

Stock research and investor research for trading agents. 16 x402 tools; data from 0.02 USDC on Base.

When an agent connects BeliefState, the model reads all 18 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`beliefstate.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on BeliefState

- **No tool-poisoning or prompt-injection patterns** were found across the 18 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 20 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 18 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 18 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BeliefState server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BeliefState server advertises

These are the 18 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_belief_risks`** — Read evidence-linked Risk objects for exactly one ticker, entity, Belief or explicit released corpus. Filter by person, source, publication dates, status or severity. Unknown asse… _(parameters: ticker, entity_id, belief_id, corpus, person_id, source_id)_
- **`get_belief_catalysts`** — Read evidence-linked Catalyst objects with qualified current status or explicit unknowns. Filter one ticker, entity, Belief or released corpus by person, source, publication dates… _(parameters: ticker, entity_id, belief_id, corpus, person_id, source_id)_
- **`get_author_track_record`** — Read an investor's stored publication-based outcome cohorts over one explicit ticker, entity, Belief or released corpus scope and optional source/publication window. Includes loss… _(parameters: ticker, entity_id, belief_id, corpus, person_id, source_id)_
- **`search_beliefs`** — Find investment ideas by thesis, topic or trade setup, with cited matching passages. Per-call x402 price: 1.50 USDC on Base. _(parameters: q, ticker, entity_id, person_id, direction, status)_
- **`get_belief`** — Read a requested complete investment case or evidence beyond a brief, with risks, conditions and coverage gaps. An ordinary library overview can use get_brief without opening each… _(parameters: belief_id, as_of, paragraph_index, support_index, support_text_offset)_
- **`compare_beliefs`** — Compare two cited investment cases for support, contradiction or dependency, including explicit unknown and unrelated outcomes. Optional comparison_focus selects a public research… _(parameters: belief_id, compare_to_belief_id, comparison_focus, as_of)_
- **`get_brief`** — Start with overview for an ordinary company or ETF research question, including outlook and changes. Present findings in plain language with named investors, dated source links an… _(parameters: ticker, as_of, max_results, detail, entity_id, cursor)_
- **`get_beliefs`** — List dated investment ideas for a requested inventory or filtered research on one ticker or subject. Investor, direction and time filters are optional. An ordinary overview uses g… _(parameters: ticker, entity_id, person_id, direction, status, time_horizon)_
- **`search_entities`** — Find released companies, industries, themes and other research subjects by name or kind. Per-call x402 price: 0.02 USDC on Base. _(parameters: q, kind, as_of, limit, cursor)_
- **`get_belief_changes`** — Read a mixed, ordered change journal: author-view revisions, distribution changes and calculated publication outcomes are separate domains with distinct clocks. Use belief_id for… _(parameters: person_id, source_id, domain, event_kind, revision_only, ticker)_
- **`get_context_assessment`** — Open a dated engine context assessment and its permitted evidence. Engine analysis is separate from an investor's stated view. Per-call x402 price: 0.02 USDC on Base. _(parameters: context_assessment_id, as_of)_
- **`list_research_visuals`** — List cited charts and tables for one investment case or context assessment. Per-call x402 price: 0.02 USDC on Base. _(parameters: belief_id, context_assessment_id, as_of, visual_offset)_
- **`get_research_visual`** — Read one cited chart or table, including its regions and paginated exact rows or data points. Per-call x402 price: 0.02 USDC on Base. _(parameters: belief_id, context_assessment_id, as_of, visual_id, region_id, region_offset)_
- **`get_belief_relationships`** — Inspect cited relationship paths within one investment case. Preserves stated links, engine inferences and unknowns. Per-call x402 price: 0.02 USDC on Base. _(parameters: belief_id, as_of, from_entity_id, to_entity_id, max_depth, edge_budget)_
- **`evaluate_belief_scenario`** — Apply up to eight hypothetical condition assumptions to a case's recorded scenario model. Does not alter evidence or predict the investor's response. Per-call x402 price: 0.02 USD… _(parameters: belief_id, as_of, scenario)_
- **`refresh_market_data`** — Explicitly refresh missing or stale market data for one current company or subject, then return its research brief. Per-call x402 price: 0.02 USDC on Base. _(parameters: ticker, entity_id)_
- **`get_tickers`** — Free research coverage and company discovery. _(parameters: as_of)_
- **`search_companies`** — Free research coverage and company discovery. _(parameters: q)_

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
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

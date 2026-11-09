---
title: "Is the Third Hemisphere AI Authority Index MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Third Hemisphere AI Authority Index MCP server (https://thirdhemisphere.agency/mcp), run 2026-11-09: advertises list_index_editions, get_edition_results, get_company_authority_score; 12 tools scanned, injection verdict 'clear', 12 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Third Hemisphere AI Authority Index MCP server — security & directory-readiness scorecard

**Server:** `https://thirdhemisphere.agency/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 12 · **Injection verdict:** `clear` · **Directory:** 12 Claude Directory quality item(s) to polish (no hard rejects)

Read-only CRISP scores and AI visibility data from Third Hemisphere's AI Authority Index.

When an agent connects Third Hemisphere AI Authority Index, the model reads all 12 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`thirdhemisphere.agency`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Third Hemisphere AI Authority Index

- **No tool-poisoning or prompt-injection patterns** were found across the 12 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 12 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **3 of 12 advertised tool(s) name a state-changing action** (`list_index_editions`, `get_edition_results`, `update_blueprint_progress`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 12 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Third Hemisphere AI Authority Index server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Third Hemisphere AI Authority Index server advertises

The server describes itself to connecting agents as: *Third Hemisphere AI Authority Index: published CRISP scores and AI visibility readings for companies in the markets Third Hemisphere's AI Authority Index measures. The Index tools are read-only. When you quote a score, give it exactly as returned, with its ma…*

These are the 12 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_index_editions`** — Every published edition of Third Hemisphere's AI Authority Index, with its markets (sections), publication date, DOI where recorded, and links to its page, results, and open data.…
- **`get_edition_results`** — The published results of one AI Authority Index edition section: each company's Star Chart cell, CRISP score where it has one, the five factor readings the edition prints, and how… _(parameters: edition_slug, section, company)_
- **`get_company_authority_score`** — A company's published CRISP score and AI visibility reading in each market the AI Authority Index measures it in, with the month measured and its Standing Report link. Accepts a c… _(parameters: company, market)_
- **`get_company_score_history`** — Every dated reading the AI Authority Index has published for a company, oldest first: its rows in each edition and each market's Standing Report. Read-only. Every result carries i… _(parameters: company)_
- **`search_companies`** — Find companies with a Standing Report in Third Hemisphere's AI Authority Index by name. Read-only. Every result carries its citation and link. _(parameters: query, limit)_
- **`list_markets`** — Every market the AI Authority Index measures, with how many Standing Reports it has and when it was last measured. Read-only. Every result carries its citation and link.
- **`get_market_standing`** — The companies in one market with a Standing Report, most named in AI answers first. Read-only. Every result carries its citation and link. _(parameters: market, limit)_
- **`list_my_blueprints`** — The AI Authority Blueprints sent to the address this key belongs to. Needs a key on a plan that includes DIY Blueprint tools. DIY Blueprint tool: needs a key whose plan includes t…
- **`get_my_blueprint_plan`** — Your Blueprint's ranked strategy plays and 90-day moves, each with an item_id, what to do, when, and how the next Blueprint measures it, with the status recorded for each. DIY Blu… _(parameters: blueprint_id)_
- **`get_blueprint_item_evidence`** — The data behind one play or move: your own numbers from the Blueprint, why it works and the research it rests on, and what not to do. DIY Blueprint tool: needs a key whose plan in… _(parameters: blueprint_id, item_id)_
- **`update_blueprint_progress`** — Record where a play or move stands: not_started, in_progress, done, skipped, with an optional note of what was done. DIY Blueprint tool: needs a key whose plan includes them (http… _(parameters: blueprint_id, item_id, status, note)_
- **`get_blueprint_progress`** — Where every play and move in your Blueprint stands, with the counts done, in progress, and not started. DIY Blueprint tool: needs a key whose plan includes them (https://thirdhemi… _(parameters: blueprint_id)_

## Maintenance & supply-chain — the risk Third Hemisphere AI Authority Index's static scan can't see

A prompt-injection scan reads Third Hemisphere AI Authority Index's advertised tool metadata at one moment. It cannot tell you the project behind `thirdhemisphere.agency` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `thirdhemisphere.agency` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Third Hemisphere AI Authority Index yourself, or claim its badge {#claim}

Re-run this exact Third Hemisphere AI Authority Index check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `thirdhemisphere.agency`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://thirdhemisphere.agency/mcp&directory=true"
```

For the itemized findings on Third Hemisphere AI Authority Index — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://thirdhemisphere.agency/mcp"}`. If you
run `thirdhemisphere.agency`, [claim a measured verified-owner badge for Third Hemisphere AI Authority Index free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=thirdhemisphere.agency)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dthirdhemisphere.agency&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://thirdhemisphere.agency/mcp)
```

Keeping the Third Hemisphere AI Authority Index badge green as its tools change — six-hourly re-scans of `thirdhemisphere.agency`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `thirdhemisphere.agency` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

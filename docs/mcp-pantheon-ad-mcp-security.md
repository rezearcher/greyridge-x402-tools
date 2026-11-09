---
title: "Is the Pantheon MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Pantheon MCP server (https://mcp.pantheon.ad/mcp), run 2026-11-09: advertises list_projects, list_brand_voices, list_offer_briefs; 23 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Pantheon MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.pantheon.ad/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 23 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Meta ads library, competitor ads, brand voice, avatars and offer briefs from your Pantheon account.

When an agent connects Pantheon, the model reads all 23 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.pantheon.ad`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Pantheon

- **No tool-poisoning or prompt-injection patterns** were found across the 23 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **9 of 23 advertised tool(s) name a state-changing action** (`run_competitor_spy`, `run_inspiration_search`, `run_brand_campaign_analysis`, `run_ad_copilot`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 23 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Pantheon server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Pantheon server advertises

These are the 23 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_projects`** — List the user's strategic projects (Avatar analyses) with their ids.
- **`list_brand_voices`** — List the user's Brand Voices (id, name).
- **`list_offer_briefs`** — List the user's Offer Briefs (id, name).
- **`list_analyzed_pages`** — List Facebook pages the user analyzed (competitor, inspiration or brand_campaigns), with status and ad counts. _(parameters: source)_
- **`search_ads_library`** — Search the user's own Ads Library (ads collected by their searches) and this week's Top Ads by brand, niche, sector or copy. Returns ad ids usable with analyze_ad and run_ad_copil… _(parameters: query, limit)_
- **`get_market_creators_data`** — Aggregated stats of the creators/competitors the user monitors. _(parameters: page_ids)_
- **`get_top_performing_ads`** — Top performing (longest running) ads of the monitored creators. _(parameters: limit)_
- **`get_active_ads_copy`** — Copy (body, caption, CTA) of currently active ads of the monitored creators. _(parameters: limit)_
- **`get_saved_ads`** — The user's swipe file, optionally filtered by competitor name. _(parameters: category, competitor)_
- **`get_strategic_avatar`** — Avatar research of a project (from list_projects): pain matrix, core wound, desire chain, objections, triggers, language and strategic synthesis. _(parameters: project_id)_
- **`get_competitor_active_ads`** — Active ads of a competitor the user has analyzed with Competitor Spy. _(parameters: competitor_name)_
- **`get_creative_analysis`** — Saved AI analysis of an ad (awareness, hooks, mechanism, triggers, landing page coherence), if analyze_ad was run on it. _(parameters: ad_id)_
- **`get_job_status`** — Status and results of a background job started by an action tool. _(parameters: job_type, job_id)_
- **`run_competitor_spy`** — Scrape and analyze all ads of a competitor's Facebook page (uses 1 Competitor Spy credit). Runs in background: poll get_job_status with the returned id. _(parameters: page_name, page_id, country, monitoring, report_language)_
- **`run_inspiration_search`** — Scrape and analyze a page outside the user's niche for inspiration (uses 1 Inspiration Search credit). Runs in background: poll get_job_status with the returned id. _(parameters: page_name, page_id, country, report_language)_
- **`run_brand_campaign_analysis`** — Scrape and analyze the user's own brand Meta campaigns page (uses 1 Brand Campaigns credit). Runs in background: poll get_job_status with the returned id. _(parameters: page_name, page_id, country, report_language)_
- **`run_ad_copilot`** — Adapt a library ad into 3 copy variants for the user's Avatar, Offer Brief and Brand Voice (uses 1 Ad Copilot credit). Runs in background: poll get_job_status with the returned id. _(parameters: original_ad_id, avatar_id, offer_brief_id, brand_voice_id, language)_
- **`analyze_ad`** — Ads Intelligence: full AI analysis of one ad (emotional levers, biases, landing page coherence). Uses 1 Ads Intelligence credit. Runs in background: poll get_job_status with the r… _(parameters: ad_id, language)_
- **`run_persuasion_analysis`** — Persuasion analysis of an ad before launch: present and missing cognitive biases (uses 1 Persuasion Analysis credit). Runs in background: poll get_job_status with the returned id. _(parameters: ad_type, ad_text, ad_visual_description, media_url, project_id, landing_page_url)_
- **`run_sales_psychology`** — Sales Psychology report for a project's Avatar + an Offer Brief (uses 1 Sales Psychology credit). Runs in background: poll get_job_status with the returned id. _(parameters: project_id, offer_brief_id, language)_
- **`create_brand_voice`** — Create and save a Brand Voice from a public URL or a text (uses 1 Brand Voice credit, ~1 minute). _(parameters: name, source_type, content, language)_
- **`create_offer_brief`** — Create and save an Offer Brief from a public sales page URL or a text (uses 1 Offer Brief credit, ~1 minute). _(parameters: name, source_type, content, language)_
- **`run_magic_tool`** — Summarize, translate or extract contacts/links from a text (Magic Tools). Summaries and extractions are in the language of the text; translations go to 'language' (default Italian… _(parameters: mode, text, language)_

## Maintenance & supply-chain — the risk Pantheon's static scan can't see

A prompt-injection scan reads Pantheon's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.pantheon.ad` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.pantheon.ad` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Pantheon yourself, or claim its badge {#claim}

Re-run this exact Pantheon check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.pantheon.ad`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.pantheon.ad/mcp&directory=true"
```

For the itemized findings on Pantheon — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.pantheon.ad/mcp"}`. If you
run `mcp.pantheon.ad`, [claim a measured verified-owner badge for Pantheon free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.pantheon.ad)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.pantheon.ad&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.pantheon.ad/mcp)
```

Keeping the Pantheon badge green as its tools change — six-hourly re-scans of `mcp.pantheon.ad`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.pantheon.ad` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

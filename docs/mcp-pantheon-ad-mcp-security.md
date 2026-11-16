---
title: "Is the Pantheon MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Pantheon MCP server (https://mcp.pantheon.ad/mcp), run 2026-11-16: advertises list_projects, list_brand_voices, list_offer_briefs; 29 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Pantheon MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.pantheon.ad/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 29 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Meta ads library, competitor ads, brand voice, avatars and offer briefs from your Pantheon account.

When an agent connects Pantheon, the model reads all 29 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.pantheon.ad`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on Pantheon

- **No tool-poisoning or prompt-injection patterns** were found across the 29 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **10 of 29 advertised tool(s) name a state-changing action** (`run_competitor_spy`, `run_inspiration_search`, `run_brand_campaign_analysis`, `run_ad_copilot`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 29 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Pantheon server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Pantheon server advertises

The server describes itself to connecting agents as: *Pantheon holds the user's Facebook and Instagram ad research. Start with list_projects, list_brand_voices and list_offer_briefs to get ids. To find ads use search_ads_library, get_competitor_active_ads or get_top_performing_ads; ad ids from them work with get…*

These are the 29 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_projects`** — List the user's Pantheon projects (customer avatar analyses). Call it first to get the project_id needed by get_strategic_avatar, run_sales_psychology and run_ad_copilot.
- **`list_brand_voices`** — List the Brand Voices saved in the user's account. Use the ids with run_ad_copilot.
- **`list_offer_briefs`** — List the Offer Briefs saved in the user's account. Use the ids with run_ad_copilot and run_sales_psychology.
- **`list_analyzed_pages`** — List the Facebook pages the user analyzed in one section of Pantheon (competitors, inspiration or own brand campaigns), with analysis status and ad counts. Use it to find pages be… _(parameters: source)_
- **`search_ads_library`** — Search the ads in the user's own Ads Library (ads collected by their searches) and this week's Top Ads by brand, niche, sector or ad copy. Returns ad ids usable with analyze_ad, g… _(parameters: query, limit)_
- **`get_market_creators_data`** — Get summary statistics for the Facebook pages the user follows in Pantheon: total and active ads, audience, format mix and niche. Use it to compare how much and how each page adve… _(parameters: page_ids)_
- **`get_top_performing_ads`** — Get the longest-running ads of the Facebook pages the user follows. An ad that keeps running for months is usually profitable, so these are the best examples to study. _(parameters: limit)_
- **`get_active_ads_copy`** — Get the copy (body text, caption and call to action) of the ads currently running on the Facebook pages the user follows. Use it to study wording, hooks and offers. _(parameters: limit)_
- **`get_saved_ads`** — Get up to 20 ads from the pages in the user's swipe file, optionally only those of one competitor. Includes media links and whether each ad is still running. _(parameters: category, competitor)_
- **`get_strategic_avatar`** — Read the customer avatar research of a project: pain matrix, core wound, desire chain, objections, triggers, customer language and strategic synthesis. Use it before writing ads f… _(parameters: project_id)_
- **`get_competitor_active_ads`** — Get up to 20 ads currently running for a competitor the user analyzed with Competitor Spy, found by page name. _(parameters: competitor_name)_
- **`get_creative_analysis`** — Read the saved AI analysis of one ad (awareness level, hooks, mechanism, emotional triggers, landing page coherence). Only available after analyze_ad was run on that ad. _(parameters: ad_id)_
- **`get_job_status`** — Check a background job started by an action tool and get its result when it is done. Call it again later while the status is running or pending. _(parameters: job_type, job_id)_
- **`run_competitor_spy`** — Collect and analyze every ad of a competitor's Facebook page from the Meta Ad Library. Uses 1 Competitor Spy credit. Runs in the background: call get_job_status with the returned… _(parameters: page_name, page_id, country, monitoring, report_language)_
- **`run_inspiration_search`** — Collect and analyze the ads of a Facebook page outside the user's niche, to borrow ideas from other markets. Uses 1 Inspiration Search credit. Runs in the background: call get_job… _(parameters: page_name, page_id, country, report_language)_
- **`run_brand_campaign_analysis`** — Collect and analyze the ads of the user's own brand Facebook page. Uses 1 Brand Campaigns credit. Runs in the background: call get_job_status with the returned id to get the resul… _(parameters: page_name, page_id, country, report_language)_
- **`run_ad_copilot`** — Rewrite an ad from the library into 3 copy variants for the user's audience, offer and brand voice. Uses 1 Ad Copilot credit. Runs in the background: call get_job_status with the… _(parameters: original_ad_id, avatar_id, offer_brief_id, brand_voice_id, language)_
- **`analyze_ad`** — Run a full AI analysis of one ad: emotional levers, cognitive biases and landing page coherence. Uses 1 Ads Intelligence credit. Runs in the background: call get_job_status with t… _(parameters: ad_id, language)_
- **`run_persuasion_analysis`** — Check a draft ad before launch: which persuasion biases it uses and which are missing, with suggestions. Uses 1 Persuasion Analysis credit. Runs in the background: call get_job_st… _(parameters: ad_type, ad_text, ad_visual_description, media_url, project_id, landing_page_url)_
- **`run_sales_psychology`** — Write a sales psychology report that matches a project's customer avatar with an Offer Brief. Uses 1 Sales Psychology credit. Runs in the background: call get_job_status with the… _(parameters: project_id, offer_brief_id, language)_
- **`create_brand_voice`** — Create and save a Brand Voice from a public web page or a text written by the user (about 1 minute). Uses 1 Brand Voice credit. _(parameters: name, source_type, content, language)_
- **`create_offer_brief`** — Create and save an Offer Brief from a public sales page or a text describing the offer (about 1 minute). Uses 1 Offer Brief credit. _(parameters: name, source_type, content, language)_
- **`run_magic_tool`** — Summarize or translate a text, or extract its contacts and links (Magic Tools). Summaries and extractions keep the language of the text; translations go to 'language' (default Ita… _(parameters: mode, text, language)_
- **`list_followed_creators`** — Viral Content: the creators the user follows (platform, author_key, name, number of collected posts, last post date) and their follow limit.
- **`get_followed_creators_contents`** — Viral Content: posts of the creators the user follows, newest first (24 per page). times_author_median is how many times the post beat the author's usual result. Filter by platfor… _(parameters: platform, author, offset)_
- **`get_viral_content`** — Viral Content: one post (caption, metrics) with the user's saved analysis in that language, if any, and the vocabulary of persuasion mechanism codes to use in save_viral_analysis. _(parameters: content_id, lang)_
- **`save_viral_analysis`** — Viral Content: save your 'why it works' analysis of a post (from get_viral_content) for the user, in one language. It appears in the app on that post, only for this user, and uses… _(parameters: content_id, lang, hook, structure, mechanisms, why_it_works)_
- **`send_to_pantheon`** — Send a link to the user's Pantheon. Without a destination Pantheon picks it from the link: a TikTok, Instagram, YouTube or LinkedIn profile - followed in Viral Content My creators… _(parameters: url, destination, note)_
- **`list_pantheon_inbox`** — Links the user sent to the Pantheon Whiteboard inbox and has not used yet (newest first).

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
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

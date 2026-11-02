---
title: "Is the budgetSEO MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the budgetSEO MCP server (https://www.budgetseo.ai/api/mcp), run 2026-11-02: advertises get_seo_briefing, find_quick_wins, find_opportunities; 17 tools scanned, injection verdict 'clear', 17 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# budgetSEO MCP server — security & directory-readiness scorecard

**Server:** `https://www.budgetseo.ai/api/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 17 · **Injection verdict:** `clear` · **Directory:** 17 Claude Directory quality item(s) to polish (no hard rejects)

Affordable SEO & GEO data: rank tracking, keywords, competitors, AI visibility.

When an agent connects budgetSEO, the model reads all 17 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.budgetseo.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on budgetSEO

- **No tool-poisoning or prompt-injection patterns** were found across the 17 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 17 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **1 of 17 advertised tool(s) name a state-changing action** (`update_recommendation`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 17 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the budgetSEO server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the budgetSEO server advertises

The server describes itself to connecting agents as: *Start with get_seo_briefing for any what-should-I-do question, and find_quick_wins for low-hanging fruit. Always quote estimatedMonthlyClicks as estimated visits for the rank change described, and quote searchVolume and difficulty as the measured figures. Con…*

These are the 17 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_seo_briefing`** — Use this first when the user asks what to do with SEO today, what changed, or what to focus on. Returns the top actions, recent rank moves, plan limits, and the next automatic che… _(parameters: projectId, since)_
- **`find_quick_wins`** — Use when the user asks for low-hanging fruit, quick wins, or striking-distance keywords. Each result includes the estimated monthly clicks gained by moving up. _(parameters: projectId, limit)_
- **`find_opportunities`** — Use for best opportunities across quick wins, research ideas, competitor gaps, rank drops, and AI Overview citation gaps. Filter with kinds when the user names one of those. _(parameters: projectId, kinds, limit)_
- **`list_projects`** — List the user's BudgetSEO projects, keyword counts, whether a project is paused by the plan, and how many keyword slots remain.
- **`get_rank_changes`** — Winners and losers over a recent window. Use for what moved, what dropped, or a weekly review. days defaults to 7. _(parameters: projectId, days)_
- **`get_keyword_action_plan`** — Deep context for one tracked keyword: ranking URL, history, SERP features, competitors, and a checklist. Use after a briefing when an agent can edit the page. Confirm with the use… _(parameters: keywordId)_
- **`get_competitor_overview`** — Competitors and how many tracked keywords each one outranks the user on. Uses saved competitor data only and never starts a paid lookup. keywordsAhead is null until that competito… _(parameters: projectId)_
- **`get_ai_visibility`** — Latest AI search snapshot and keywords where an AI Overview shows but does not cite the user. Pass projectId when the user has more than one project. _(parameters: projectId)_
- **`get_search_performance`** — Real Google Search Console clicks, impressions, CTR, and average position for one project. Last 28 days, plus the previous 28 days. Does not spend lookup credits. If linked is fal… _(parameters: projectId)_
- **`track_keywords`** — Add keywords to a project. Does not spend lookup credits; it uses the plan keyword slots. Confirm the keywords with the user first. countryCode defaults to the project market. _(parameters: projectId, keywords, countryCode, device)_
- **`untrack_keyword`** — Remove one tracked keyword and its history. This cannot be undone. Confirm with the user before calling it. _(parameters: keywordId)_
- **`update_recommendation`** — Mark a briefing action done, dismissed, or snoozed. Call this after the user finishes or rejects an action so later briefings skip it. snoozeUntil is YYYY-MM-DD. _(parameters: projectId, actionKey, status, note, snoozeUntil)_
- **`research_keywords`** — Find new keyword ideas for one project. This spends AI research usage and is available on Starter and Pro. Confirm with the user first. The project needs an audience set in the SE… _(parameters: projectId)_
- **`lookup_keywords`** — Keyword ideas from one seed: volume, difficulty, and intent. Spends 6 lookup credits unless the result is already cached. Tell the user the cost and wait for a yes. This is not re… _(parameters: seed, countryCode)_
- **`check_keywords`** — Volume, difficulty, and intent for keywords the user names. Spends 2 lookup credits. Tell the user the cost and wait for a yes. At most 20 keywords per call. _(parameters: keywords, countryCode)_
- **`lookup_domain`** — Organic keywords, estimated traffic, and top ranking URLs for a domain. Spends 4 lookup credits unless the result is already cached. Tell the user the cost and wait for a yes. cou… _(parameters: domain, countryCode)_
- **`lookup_backlinks`** — Referring domains, backlink totals, and domain rank. Spends 3 lookup credits unless the result is already cached. Tell the user the cost and wait for a yes. spamScore is not a rea… _(parameters: domain)_

## Maintenance & supply-chain — the risk budgetSEO's static scan can't see

A prompt-injection scan reads budgetSEO's advertised tool metadata at one moment. It cannot tell you the project behind `www.budgetseo.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `www.budgetseo.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan budgetSEO yourself, or claim its badge {#claim}

Re-run this exact budgetSEO check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.budgetseo.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.budgetseo.ai/api/mcp&directory=true"
```

For the itemized findings on budgetSEO — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.budgetseo.ai/api/mcp"}`. If you
run `www.budgetseo.ai`, [claim a measured verified-owner badge for budgetSEO free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.budgetseo.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.budgetseo.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.budgetseo.ai/api/mcp)
```

Keeping the budgetSEO badge green as its tools change — six-hourly re-scans of `www.budgetseo.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.budgetseo.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

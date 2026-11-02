---
title: "Is the AppGoat MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AppGoat MCP server (https://api.appgoat.ai/mcp), run 2026-11-02: advertises get_app, get_reviews, get_app_history; 26 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AppGoat MCP server — security & directory-readiness scorecard

**Server:** `https://api.appgoat.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 26 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

App Store and Google Play data: apps, reviews, keywords, charts, competitors, ASO playbooks.

When an agent connects AppGoat, the model reads all 26 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.appgoat.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on AppGoat

- **No tool-poisoning or prompt-injection patterns** were found across the 26 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 26 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 26 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AppGoat server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AppGoat server advertises

The server describes itself to connecting agents as: *AppGoat is live App Store and Google Play data for ASO and app growth: apps, reviews, keywords and ranks, competitors, charts, App Audits, and watches that turn store changes into events. First use: call list_watches. If there are none, offer to set AppGoat u…*

These are the 26 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_app`** — Look up one App Store or Google Play app: title, subtitle, developer, category, price, rating and histogram, installs (Play), version and dates, description, languages, and the sa… _(parameters: app, store, country, max_age, wait, include)_
- **`get_reviews`** — Read an app's user reviews, newest first, up to 100 per page: rating, title, text, version, date, developer reply and AI tags (sentiment, intent, severity, topic) where tagged. Fi… _(parameters: app, store, country, rating, version, since)_
- **`get_app_history`** — An app's daily metric history per country: rating, ratings count, reviews count, installs (Play), star histogram and price, one row per day a value changed (default the last 90 da… _(parameters: app, store, country, from, to, format)_
- **`get_app_changes`** — What changed in an app's store listing, newest first, with old and new values: version, release notes, title, subtitle, description, screenshots, icon, price, IAP, privacy, in-app… _(parameters: app, store, country, field, since, limit)_
- **`get_app_keywords`** — The search terms an app ranks for in a country, best rank first, with popularity (5–100) and difficulty (0–100): from the weekly keyword universe plus your tracked keywords. Call… _(parameters: app, store, country, max_rank, limit, cursor)_
- **`get_competitors`** — An app's competitors, best first, scored from search terms both apps rank for (shared keywords) plus the store's similar-apps list. Feed the app ids into get_app or get_app_change… _(parameters: app, store, country, limit, format)_
- **`search_apps`** — Find apps by name or id in AppGoat's catalog of both stores (~5M apps): exact title matches first, then prefix, then substring, most-rated first. Returns store, app_id, title, dev… _(parameters: q, store, category, limit, cursor, format)_
- **`get_charts`** — A top free, paid or grossing chart for a store, country and category, today or on a past date: rank, app, developer, rating and the move since the previous capture (new entries ma… _(parameters: store, country, chart, category, date, limit)_
- **`keyword_research`** — Keyword metrics and research for App Store / Google Play search terms: popularity (5–100), difficulty (0–100), result count and the #1 result's estimated daily downloads. include… _(parameters: terms, store, country, app, wait, include)_
- **`get_keyword_ranks`** — Ranking history of a watched keyword: per capture the top 10 app ids, or with app, that app's rank over time (best, worst, latest). Default the last 90 days. The id is a keyword s… _(parameters: id, app, from, to, format)_
- **`watch`** — Watch an app, a set of competitors or a set of keywords; significant changes become events (get_events, webhooks, daily email). kind app {app}: new versions, metadata and price ch… _(parameters: id, kind, app, competitors, terms, store)_
- **`unwatch`** — Stop watches by id (from list_watches or watch): no new events, and their watched apps and keyword slots are freed. Past events are kept. To pause instead, call watch with id and… _(parameters: ids)_
- **`list_watches`** — Your watches (apps, competitor sets, keyword sets), newest first, with id, apps, terms, countries, event types and whether they are paused, plus watched apps and keyword slots use… _(parameters: kind, app, store, format)_
- **`get_events`** — Significant changes on your watched apps and keywords, newest first: type, one-line title, AI summary, significance (0–1), app, country and the key payload fields (version, change… _(parameters: type, app, store, watch, since, min_significance)_
- **`get_developer`** — A developer's profile: name, website, country, app count, total ratings and installs, all their apps (most-rated first) and the same company in the other store. get_app shows the… _(parameters: dev, store, format)_
- **`get_job`** — Poll a background store fetch that another call started (its output said refreshing or still being fetched, with a job id): status, per-country progress. When it is done, repeat t… _(parameters: id, format)_
- **`list_connections`** — The user's connected App Store Connect, Play Console and Apple Ads accounts: connection id, provider, mode (actions or read_only), status and the linked apps. Start here before re… _(parameters: provider, format)_
- **`read_connection`** — Read live data from one of the user's connected accounts. what='reviews' (asc, play_console): the app's own reviews with reply status, unanswered=true for those without a develope… _(parameters: id, what, app, unanswered, rating, country)_
- **`propose_action`** — Prepare a change to the user's connected account as a DRY RUN: nothing is written. AppGoat reads the live account and returns the before → after diff, guardrail results (AI probab… _(parameters: type, params, connection, playbook, format)_
- **`apply_action`** — Go ahead with an action from propose_action, after the user has seen its diff and agreed. Outcomes: applied (written to the store / Apple Ads account, 1 credit; when the org has a… _(parameters: id, force, format)_
- **`get_action`** — One action from propose_action: its status (draft, pending_approval, approved, applied, failed, rejected), diff, guardrail scores, the provider result or error, the approve link a… _(parameters: id, format)_
- **`reject_action`** — Discard a draft or pending action the user does not want; nothing is written to the account. Cost: 0 credits. _(parameters: id, reason, format)_
- **`audit_app`** — Run an App Audit of one app in one country: a 0–100 score, prioritised ASO actions with evidence, title / subtitle / keyword rewrites within the store character limits, and findin… _(parameters: app, store, country, mode, fresh, free_only)_
- **`get_audit`** — Check on an App Audit that audit_app started (by its id, e.g. aud_3fK9aQ2mXc81LpRt): waits up to about 25 s for it to finish, then returns the report (score, actions, metadata rew… _(parameters: id, format)_
- **`get_insights`** — What an app's users praise and complain about, from the AI tags on its reviews: top issues (topics behind negative, bug, crash, UX and pricing reviews) with last-30-days vs previo… _(parameters: app, store, country, since_days, versions, format)_
- **`list_playbooks`** — AppGoat playbooks: step-by-step recipes (which tools to call, credit budget, decision rules, output format) for app audits, app idea research, ASO metadata rewrites, weekly compet… _(parameters: name)_

## Maintenance & supply-chain — the risk AppGoat's static scan can't see

A prompt-injection scan reads AppGoat's advertised tool metadata at one moment. It cannot tell you the project behind `api.appgoat.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.appgoat.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AppGoat yourself, or claim its badge {#claim}

Re-run this exact AppGoat check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.appgoat.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.appgoat.ai/mcp&directory=true"
```

For the itemized findings on AppGoat — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.appgoat.ai/mcp"}`. If you
run `api.appgoat.ai`, [claim a measured verified-owner badge for AppGoat free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.appgoat.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.appgoat.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.appgoat.ai/mcp)
```

Keeping the AppGoat badge green as its tools change — six-hourly re-scans of `api.appgoat.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.appgoat.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the ARC: agent checkout reachability MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the ARC: agent checkout reachability MCP server (https://www.arcreport.ai/api/mcp), run 2026-11-09: advertises check_store, find_stores, report_checkout; 19 tools scanned, injection verdict 'clear', 32 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# ARC: agent checkout reachability MCP server — security & directory-readiness scorecard

**Server:** `https://www.arcreport.ai/api/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 19 · **Injection verdict:** `clear` · **Directory:** 32 Claude Directory quality item(s) to polish (no hard rejects)

Free, no sign-in MCP: can AI agents reach checkout at a store? Try: Use ARC to check allbirds.com.

When an agent connects ARC: agent checkout reachability, the model reads all 19 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.arcreport.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on ARC: agent checkout reachability

- **No tool-poisoning or prompt-injection patterns** were found across the 19 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 32 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **3 of 19 advertised tool(s) name a state-changing action** (`bulk_create_monitors`, `update_monitor`, `run_monitor_now`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 19 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the ARC: agent checkout reachability server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the ARC: agent checkout reachability server advertises

The server describes itself to connecting agents as: *Check if an AI agent can reach checkout on a store before trying. Start with no key at /api/ask or GET /api/precheck?url=. On this server, check_store(domain), find_stores, and product_data_check(host or url) need no sign-in. They read saved public checks and…*

These are the 19 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_store`** — Check if an AI agent can reach checkout on a store before trying. Call this with a store domain, such as allbirds.com. Returns the saved checkout evidence, or not checked yet when… _(parameters: domain)_
- **`find_stores`** — Find stores where a saved check shows an AI agent can reach checkout. Filter by platform, protocol, category, or min_grade (optional, default none). With no filters, returns those… _(parameters: platform, protocol, category, limit, min_grade)_
- **`report_checkout`** — Report how far one agent got at one store. Free, no login. Omit contributor_key and ARC issues one. Emails, phones, street addresses, card numbers, IP addresses, and private hosts… _(parameters: store_domain, agent_family, agent_name, contributor_key, timestamp, furthest_step)_
- **`get_store_hub`** — [Requires sign-in] Look up a free ARC store card by host. Includes saved measurements and brand_claim ownership metadata. Brand statements are not measured by ARC; claims never ch… _(parameters: host)_
- **`google_checkout_readiness`** — [Requires sign-in] Read saved public Google agentic checkout readiness checks for a store. Free; no new scan or paid calls. Merchant Center feed eligibility cannot be checked from… _(parameters: host)_
- **`product_data_check`** — Free latest saved product data and return/shipping policy check from the store's pages and structured data. Reads history only; no store fetch or model call. A missing result is n… _(parameters: host, url)_
- **`can_agent_checkout`** — [Requires sign-in] Call when you need a saved checkout-link check for any public store URL, not only Index brands. Use it for 'what stops an agent at store checkout?' or 'which ch… _(parameters: url)_
- **`check_agent_readiness`** — [Requires sign-in] Check whether personal AI agents can reach a product URL, understand it, and reach checkout. Runs ARC's readiness check: crawler access, whether an agent can an… _(parameters: url, task)_
- **`get_readiness_result`** — [Requires sign-in] Get a readiness check by id. While running, reports progress. When complete, reports whether personal agents could reach the page, understand it, and reach chec… _(parameters: id)_
- **`list_readiness_checks`** — [Requires sign-in] List this workspace's recent readiness checks (newest first) — each store, its score, status, and id. Use an id with get_readiness_result to reopen a check.
- **`ask_agents_about_brand`** — [Requires sign-in] Ask benchmark personal-agent personas what they think of a brand and whether they would recommend it for a category. Personas A to E are ARC benchmark personas… _(parameters: brand, store_url, category, competitors)_
- **`get_fixes`** — [Requires sign-in] Concrete next steps to get recommended by personal agents and to become reachable, understandable, and buyable. Pass a readiness check id and/or the brand, cate… _(parameters: scan_id, brand, category, store_url, competitors_recommended, mentioned)_
- **`bulk_create_monitors`** — [Requires sign-in] Set up scheduled monitoring for one or more store URLs (the 'set up monitoring' flow). Validates each URL and rejects invalid/private/internal ones. GUIDED FLOW… _(parameters: urls, frequency, depth, confirmed)_
- **`list_monitors`** — [Requires sign-in] List the workspace's monitors — each store re-checked on a schedule for whether personal agents can still reach it and its checkout. Includes cadence, status, l…
- **`monitor_summary`** — [Requires sign-in] Overview of whether monitored stores are still buyable by personal agents: latest score, trend, status, next run, and recent regression alerts.
- **`update_monitor`** — [Requires sign-in] Change a monitor's cadence (daily/weekly/monthly) or label. Use the monitor id from list_monitors. _(parameters: id, frequency, label)_
- **`pause_monitor`** — [Requires sign-in] Pause a monitor so it stops running on schedule (its history is kept). Use the monitor id from list_monitors. _(parameters: id)_
- **`resume_monitor`** — [Requires sign-in] Resume a paused monitor. _(parameters: id)_
- **`run_monitor_now`** — [Requires sign-in] Run a monitor's scan immediately (off-schedule) to establish or refresh its baseline. Consumes one scan credit — only call when the user explicitly asks to run… _(parameters: id)_

## Maintenance & supply-chain — the risk ARC: agent checkout reachability's static scan can't see

A prompt-injection scan reads ARC: agent checkout reachability's advertised tool metadata at one moment. It cannot tell you the project behind `www.arcreport.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 25 day(s) ago, 1 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `www.arcreport.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan ARC: agent checkout reachability yourself, or claim its badge {#claim}

Re-run this exact ARC: agent checkout reachability check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.arcreport.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.arcreport.ai/api/mcp&directory=true"
```

For the itemized findings on ARC: agent checkout reachability — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.arcreport.ai/api/mcp"}`. If you
run `www.arcreport.ai`, [claim a measured verified-owner badge for ARC: agent checkout reachability free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.arcreport.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.arcreport.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.arcreport.ai/api/mcp)
```

Keeping the ARC: agent checkout reachability badge green as its tools change — six-hourly re-scans of `www.arcreport.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.arcreport.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

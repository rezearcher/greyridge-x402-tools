---
title: "Is the Bot Appétit MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bot Appétit MCP server (https://botappetit.ai/mcp), run 2026-11-09: advertises scan_page, get_report, page_history; 14 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Bot Appétit MCP server — security & directory-readiness scorecard

**Server:** `https://botappetit.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 14 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Can a machine consume this page? AEO, SEO and performance scans. Page scans need no account.

When an agent connects Bot Appétit, the model reads all 14 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`botappetit.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Bot Appétit

- **No tool-poisoning or prompt-injection patterns** were found across the 14 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **2 of 14 advertised tool(s) name a state-changing action** (`set_pins`, `set_rescan_settings`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 14 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bot Appétit server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bot Appétit server advertises

The server describes itself to connecting agents as: *Bot Appétit by Milk Moon Studio checks whether a machine can consume a web page: AEO, SEO and performance. scan_page is the starting point. Every answer carries a report link: the full report on botappetit.ai. A page that blocks the scanner cannot pass and is…*

These are the 14 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`scan_page`** — Check one web page for AEO, SEO and performance: can a machine consume it? Returns the findings by check and the report link. If the exact page was scanned in the last 24 hours th… _(parameters: url, fresh)_
- **`get_report`** — Get a stored Bot Appétit report by scan id, the same report a person sees at botappetit.ai/r/id. Costs nothing and does not scan. Use it to re-read a report you were given a link… _(parameters: id)_
- **`page_history`** — List every stored Bot Appétit scan of one exact page, newest first, with the score at the time and how it moved since the scan before. Costs nothing and does not scan. Use it to s… _(parameters: url)_
- **`list_checks`** — List every check Bot Appétit runs on a page, grouped by category, with the id of each. Use the id with explain_check for what a check means and what good looks like. Every check a… _(parameters: category)_
- **`explain_check`** — Explain one Bot Appétit check: what it looks at, why it matters for machines reading a page, and what good looks like. Use the id from list_checks or a report. Costs nothing and d… _(parameters: id)_
- **`request_site_scan`** — A whole-site scan reads a representative sample of a site and needs a person with a Bot Appétit account, and an agent never creates one. This returns exactly what the person must… _(parameters: url)_
- **`leaderboard`** — The highest-scoring sites by category, from the latest Bot Appétit scan of each site's homepage: rank, host, score out of 100, grade and a link to the full report. Call it with no… _(parameters: category, limit)_
- **`start_site_scan`** — Start a whole-site scan for the signed-in person's account: Bot Appétit reads a representative sample of the site (not every page) and scores it. Needs the person to have authoris… _(parameters: site)_
- **`site_scan_status`** — Read one of the signed-in person's site scans: whether it is still running, and once it has finished the score, the checks that failed, the category scores and the pages it covere… _(parameters: job_id)_
- **`list_sites`** — List the sites the signed-in person follows in Bot Appétit, newest activity first, each with its latest site-scan score, the change since the scan before, and the trend. Use a hos…
- **`site_history`** — Read one of the signed-in person's sites over time: every site scan of it newest first with the score and the change since the previous scored scan (a change across a scoring upda… _(parameters: host)_
- **`set_pins`** — Pin or unpin pages on one of the signed-in person's sites. Pinned pages are scanned in every site scan of that site and count toward its score; up to 25, on the site itself. Give… _(parameters: host, pin, unpin)_
- **`set_rescan_settings`** — Turn the signed-in person's monthly re-scans of their sites on or off, and the email of each result on or off. Leave a field out to keep it as it is; call with no fields to read t… _(parameters: rescan, email)_
- **`share_site_scan`** — Create or stop the unlisted share link for one of the signed-in person's site scans. Site scans are private by default; a link lets anyone who holds it read that one scan (not the… _(parameters: job_id, action)_

## Maintenance & supply-chain — the risk Bot Appétit's static scan can't see

A prompt-injection scan reads Bot Appétit's advertised tool metadata at one moment. It cannot tell you the project behind `botappetit.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `botappetit.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Bot Appétit yourself, or claim its badge {#claim}

Re-run this exact Bot Appétit check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `botappetit.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://botappetit.ai/mcp&directory=true"
```

For the itemized findings on Bot Appétit — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://botappetit.ai/mcp"}`. If you
run `botappetit.ai`, [claim a measured verified-owner badge for Bot Appétit free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=botappetit.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbotappetit.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://botappetit.ai/mcp)
```

Keeping the Bot Appétit badge green as its tools change — six-hourly re-scans of `botappetit.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `botappetit.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the AskWatch Google Search Console MCP MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AskWatch Google Search Console MCP MCP server (https://mcp.askwatch.ai/gsc), run 2026-10-24: advertises site_overview, top, changes; 11 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AskWatch Google Search Console MCP MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.askwatch.ai/gsc`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Ask Google Search Console in plain language. Hosted, free, no Google Cloud project.

When an agent connects AskWatch Google Search Console MCP, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.askwatch.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AskWatch Google Search Console MCP

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 11 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AskWatch Google Search Console MCP server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AskWatch Google Search Console MCP server advertises

The server describes itself to connecting agents as: *A hosted MCP server over Google Search Console. Connect your Google account once and AskWatch issues a personal link: no Cloud project, no credentials.json, nothing to run or host. Eleven tools answer whole questions rather than returning rows to interpret —…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`site_overview`** — How the site did over a period compared with the one before it: clicks, impressions, CTR, average position and the change in each. Covers the question 'how is my site doing'. _(parameters: site, days, start_date, end_date)_
- **`top`** — Top queries, pages, countries or devices for a period. Optionally narrowed to one country or device — 'top pages in Germany on mobile' is one call. _(parameters: site, dimension, country, device, order_by, limit)_
- **`changes`** — What gained and what lost between this period and the one before it, with small rows filtered out. Answers 'what dropped in the last 28 days'. _(parameters: site, dimension, min_impressions, limit, days, start_date)_
- **`find_opportunities`** — Queries ranking 5-20 with plenty of impressions but a click-through rate below what is typical at their position — where a title or snippet rewrite is worth the most clicks. _(parameters: site, min_impressions, limit, days, start_date, end_date)_
- **`find_cannibalization`** — Queries where more than one page of the site is being shown, with how each page does on them. _(parameters: site, min_impressions, limit, days, start_date, end_date)_
- **`page_queries`** — What searches a specific page is shown for. _(parameters: site, page, match, limit, days, start_date)_
- **`brand_split`** — Branded versus non-branded search, split on the words supplied. The split is only as good as those terms: misspellings and the domain name catch more of what people type. _(parameters: site, brand_terms, days, start_date, end_date)_
- **`query`** — Direct query against Google's Search Analytics API, with the same dates, dimensions and filters it takes, passed through unchanged. _(parameters: site, dimensions, filters, limit, start_row, days)_
- **`list_sites`** — Search Console properties this connection can read, from Google's Sites API. These are the exact strings the site argument takes.
- **`inspect_url`** — Google's index status for one URL, as the URL Inspection API reports it: whether it is indexed, when it was last crawled, and which canonical Google chose. _(parameters: site, url)_
- **`list_sitemaps`** — Sitemaps submitted for the property and their status, from Google's Sitemaps API. Read-only: submitting is not possible with read access. _(parameters: site)_

## Scan AskWatch Google Search Console MCP yourself, or claim its badge

Re-run this exact AskWatch Google Search Console MCP check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.askwatch.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.askwatch.ai/gsc&directory=true"
```

For the itemized findings on AskWatch Google Search Console MCP — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.askwatch.ai/gsc"}`. If you
run `mcp.askwatch.ai`, [claim a measured verified-owner badge for AskWatch Google Search Console MCP free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.askwatch.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.askwatch.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.askwatch.ai/gsc)
```

Keeping the AskWatch Google Search Console MCP badge green as its tools change — six-hourly re-scans of `mcp.askwatch.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.askwatch.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

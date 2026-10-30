---
title: Add live multi-ATS jobs and company enrichment to your agent via MCP
description: A hosted MCP server that gives any agent (Claude Code, Cursor, Claude Desktop) live job postings across 10 ATS platforms with company auto-detection, plus live company enrichment from a domain. Free tools out of the box; metered compensation, hiring-intent and ghost-job depth over x402/USDC. No account, no API key for the free tools.
---
# Give your agent live hiring data over MCP — in one line

If your agent needs to read a company's open roles, screen a lead domain, or score hiring intent, you can connect it to a hosted [Model Context Protocol](https://modelcontextprotocol.io) server instead of wiring up and maintaining ten applicant-tracking-system scrapers yourself. It is a remote, streamable-HTTP server — nothing to install, no key for the free tools — and it is listed in the official MCP registry.

## Connect it

**Claude Code** — one command:

```bash
claude mcp add --transport http grey-ridge-jobs https://assetfactory-jobs-x402.sigrunner.workers.dev/mcp
```

**Cursor, Claude Desktop, or any config-file client** — add the server by URL:

```json
{
  "mcpServers": {
    "grey-ridge-jobs": {
      "url": "https://assetfactory-jobs-x402.sigrunner.workers.dev/mcp"
    }
  }
}
```

There are two more endpoints on the same server for different jobs: `…/mcp/unified` (one deduplicated feed merged across ATS, LinkedIn and Hacker News) and `…/mcp/enrich` (company enrichment led by a domain). Add whichever matches the task.

## What your agent gets, free

Once connected, the server advertises these tools — all keyless, no account:

- **`search_jobs`** — live postings for the companies you name, normalized to one schema (title, company, parsed location, remote flag, employment type, post date, source platform). A call for `stripe` returns its current open roles read straight from the live board, not a cached database.
- **`resolve_company`** — hand it `stripe` or `stripe.com` and it discovers the ATS and board token automatically, so you don't hard-code per-company board URLs.
- **`list_platforms`** — the ten ATS platforms covered: Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Recruitee, Workable, BambooHR, Breezy, Personio.
- **`enrich_preview`** — a live-from-DNS read of a company domain: who runs its mail and the SaaS stack hiding in its DNS records. A preview of `stripe.com` returns its mail provider and vendor-attributable tools picked up from domain-verification tokens and the SPF chain.

The free tools are enough to build and test a working agent end to end before any payment is involved.

## Metered depth, paid per call in USDC

For the depth that costs real upkeep to maintain, the server exposes a `get_premium_access` tool that returns the live payment details and a free-preview pointer. The paid routes are pay-per-call over [x402](https://x402.org) on Base — no account, no prepaid credits, settled in USDC:

- **normalized compensation** — the pay a company actually discloses on its own postings (min/max, currency, period, annualized), with a per-company disclosure rate.
- **hiring-intent signal** — one record per company: open-requisition count, an intensity grade, department and location histograms, and how recent the newest post is.
- **ghost-job detection** — diff successive reads so a role that quietly vanished shows up as closed, plus a tunable age signal that flags roles left posted for months with no sign of being filled.

An agent GETs the route with no payment first, reads the signed 402 challenge (full schema and a worked example), then retries with payment — any x402-aware client does this automatically from a funded wallet. Job search is $0.004 per call; the 402 challenge carries the live price for each route.

## How it compares

Other job MCP servers in the official registry are narrower and read-only:

| | ATS platforms | Company auto-detect | Enrichment in the same server | Metered depth (comp / intent / ghost) |
|---|---|---|---|---|
| **Grey Ridge jobs** | **10** | **yes** | **yes** (DNS tech stack, mail, domain age) | **yes**, over x402 |
| `com.agenttoolworks/jobsradar` | 3 (Greenhouse, Lever, Ashby) | — | no | no |
| `ai.cybernative/ats-jobs-watch` | 2 (Greenhouse, Ashby) | — | no | no |

Honest read: if all you need is free Greenhouse/Lever/Ashby listings with nothing to pay and no enrichment, those two are lighter and fully free — our free tools cover the same ground and add seven more platforms, domain auto-detection, and a DNS enrichment preview, and the paid layer adds depth they don't offer. The reason to rent the breadth is upkeep: the ten adapters are drift-monitored against live canary boards, so when an ATS changes its JSON shape the feed is fixed before it reaches your run — that is the maintenance you'd otherwise carry across ten integrations.

## Discover it programmatically

- Payment manifest: [`/.well-known/x402`](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402)
- OpenAPI 3.1 spec: [`/openapi.json`](https://assetfactory-jobs-x402.sigrunner.workers.dev/openapi.json)
- Free HTTP preview (same data, no MCP client): `curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"`

Prefer raw HTTP instead of MCP? The same rail is a [pay-per-call ATS jobs API](ats-jobs-api-x402.html), a [live Greenhouse jobs API](live-greenhouse-jobs-api.html), and a [company enrichment API](company-enrichment-api.html). Built by Grey Ridge Signals.

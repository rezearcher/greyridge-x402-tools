---
title: "Is the Excellent Reference (free) MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Excellent Reference (free) MCP server (https://beexcellent.ai/api/mcp/public), run 2026-11-09: advertises excellent_help, search_excellent_pages, find_event_venues; 5 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Excellent Reference (free) MCP server — security & directory-readiness scorecard

**Server:** `https://beexcellent.ai/api/mcp/public`
**Scanned:** 2026-11-09 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free, no-login: how Excellent works for restaurant events and private dining, and its public pages.

When an agent connects Excellent Reference (free), the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`beexcellent.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Excellent Reference (free)

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 5 advertised tool(s) name a state-changing action** (`send_event_inquiry`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Excellent Reference (free) server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Excellent Reference (free) server advertises

The server describes itself to connecting agents as: *Free, no-login reference server for Excellent, the operating platform for restaurant groups (private dining and events, staff training, marketing). excellent_help answers how to do something in Excellent from its own help text; search_excellent_pages finds Ex…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`excellent_help`** — Excellent's own help text (the passages its in-app assistant answers from): how to do a task in Excellent — proposals, e-signed contracts, deposits and invoices, banquet event ord… _(parameters: query)_
- **`search_excellent_pages`** — Search Excellent's published pages: feature pages (what each part of the product does), comparison pages (Excellent vs another events or private-dining platform, with where each o… _(parameters: query, kind)_
- **`find_event_venues`** — Finds restaurants and venues on Excellent that accept private-event and group-dining inquiries from AI assistants, by the restaurant group's or the venue's name. Returns up to 10,… _(parameters: query)_
- **`start_excellent_workspace`** — Creates a new Excellent workspace filled with sample data (a fictional restaurant group with two venues, bookings, proposals, invoices, staff training and marketing drafts) and re…
- **`send_event_inquiry`** — Sends a private-event or group-dining inquiry, on behalf of the person you are helping, to a venue that accepts inquiries from AI assistants (its handle comes from find_event_venu… _(parameters: venue, guest_name, guest_email, guest_phone, event_type, event_date)_

## Maintenance & supply-chain — the risk Excellent Reference (free)'s static scan can't see

A prompt-injection scan reads Excellent Reference (free)'s advertised tool metadata at one moment. It cannot tell you the project behind `beexcellent.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `beexcellent.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Excellent Reference (free) yourself, or claim its badge {#claim}

Re-run this exact Excellent Reference (free) check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `beexcellent.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://beexcellent.ai/api/mcp/public&directory=true"
```

For the itemized findings on Excellent Reference (free) — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://beexcellent.ai/api/mcp/public"}`. If you
run `beexcellent.ai`, [claim a measured verified-owner badge for Excellent Reference (free) free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=beexcellent.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbeexcellent.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://beexcellent.ai/api/mcp/public)
```

Keeping the Excellent Reference (free) badge green as its tools change — six-hourly re-scans of `beexcellent.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `beexcellent.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

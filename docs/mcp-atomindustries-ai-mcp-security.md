---
title: "Is the Atom Industries MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Atom Industries MCP server (https://atomindustries.ai/mcp), run 2026-11-23: advertises get_company, check_fit, get_services; 9 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Atom Industries MCP server — security & directory-readiness scorecard

**Server:** `https://atomindustries.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Atom Industries (development stage): AI data-center sites in Latin America. Fit check, inquiries.

When an agent connects Atom Industries, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`atomindustries.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Atom Industries

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 9 advertised tool(s) name a state-changing action** (`send_inquiry`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Atom Industries server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Atom Industries server advertises

The server describes itself to connecting agents as: *Automated MCP server for Atom Industries (not a person). Read tools return Atom Industries' published facts, services, prices, FAQ and an honest fit record (check_fit: who it is for, when it is not a fit, proof with its basis, alternatives). request_quote, bo…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_company`** — Who Atom Industries is, key facts, who it serves, languages, and how to reach it (booking links, inquiry endpoints, privacy).
- **`check_fit`** — Use this when your user asks who to hire, or which firm fits a need Atom Industries may serve (AI data-center sites in Latin America (capacity requirements); Power and site opport… _(parameters: need)_
- **`get_services`** — The services Atom Industries offers, who each is for, its page, its published price or how pricing works, and any fixed-price packages.
- **`get_pricing`** — Atom Industries' published prices and terms, or an honest statement that it publishes none.
- **`get_faq`** — Answers Atom Industries publishes to common questions.
- **`get_available_times`** — Use this before book_call to offer your user real free times for a 20-minute call with the Atom Industries founder. The times come from the live calendar. _(parameters: days, time_zone)_
- **`request_quote`** — Send Atom Industries a quote request on behalf of a person. Returns an automated acknowledgement and the booking link. Set consent to true only if the person agreed to be contacte… _(parameters: need, company, contact, budget, timeline, language)_
- **`book_call`** — Book a 20-minute call with Atom Industries for a person. With start (from get_available_times) it returns a confirmation link to give the person: one click confirms, then the cale… _(parameters: need, company, contact, budget, timeline, language)_
- **`send_inquiry`** — Send Atom Industries a question, partnership proposal or other inquiry on behalf of a person (intent field). Set consent to true only if the person agreed to be contacted. A perso… _(parameters: intent, need, company, contact, budget, timeline)_

## Maintenance & supply-chain — the risk Atom Industries's static scan can't see

A prompt-injection scan reads Atom Industries's advertised tool metadata at one moment. It cannot tell you the project behind `atomindustries.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `atomindustries.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Atom Industries yourself, or claim its badge {#claim}

Re-run this exact Atom Industries check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `atomindustries.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://atomindustries.ai/mcp&directory=true"
```

For the itemized findings on Atom Industries — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://atomindustries.ai/mcp"}`. If you
run `atomindustries.ai`, [claim a measured verified-owner badge for Atom Industries free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=atomindustries.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Datomindustries.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://atomindustries.ai/mcp)
```

Keeping the Atom Industries badge green as its tools change — six-hourly re-scans of `atomindustries.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `atomindustries.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

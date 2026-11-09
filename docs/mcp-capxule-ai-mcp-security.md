---
title: "Is the Capxule MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Capxule MCP server (https://capxule.ai/mcp), run 2026-11-09: advertises find_journey, list_journey_categories, browse_journeys; 9 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Capxule MCP server — security & directory-readiness scorecard

**Server:** `https://capxule.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory



When an agent connects Capxule, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`capxule.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Capxule

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 9 advertised tool(s) name a state-changing action** (`create_takeaway`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Capxule server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Capxule server advertises

The server describes itself to connecting agents as: *Capxule guided journeys: step-by-step journeys through one topic each, written from the creator's sources. Each step is composed here and returned as one beat (answer, statement, numbered options) for you to show the user. find_journey finds a journey for a t…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_journey`** — Use when the user wants a guided, step-by-step journey on a topic, a skill or an exam. Searches the published journeys and returns up to three cards (id, title, summary, shape, la… _(parameters: query, locale, limit)_
- **`list_journey_categories`** — Use when the user asks what kinds of journeys are available. Returns each category slug, a readable label, the number of journeys in it and a few example titles.
- **`browse_journeys`** — Use when the user wants to look through the journeys, optionally within one category (a slug from list_journey_categories). Returns a page of the same cards as find_journey, with… _(parameters: category, limit, offset)_
- **`open_journey`** — Use when the user chooses a journey to start or continue. Opens it, or resumes the user's session for it, and returns the session contract: 'session', the stop titles, the capabil… _(parameters: capsule_id, slug, locale, resume, goal)_
- **`take_journey_step`** — Use for every step after open_journey. Sends the user's choice and returns the next step: 'answer', 'statement', numbered 'options' with ids, 'media', 'progress' and 'limits'. Sen… _(parameters: session, turn_id, action)_
- **`get_journey_progress`** — Use when the user asks where they are in a journey, how far they have come or how much is left. Returns the current stop, visited and remaining stops, percent done, practice stats… _(parameters: session)_
- **`create_takeaway`** — Use when the user asks for a summary to keep. Composes a markdown takeaway from this journey session: what the user asked, the key points and the stops visited. Available on conne… _(parameters: session, kind, template_id)_
- **`get_resume_link`** — Use when the user wants to continue the journey later, on the website or in another assistant. Returns a resume link and a short resume code for this session. _(parameters: session)_
- **`restart_journey`** — Use only when the user explicitly asks to start a journey over, after confirming with them. Returns to the first step and clears the visited stops; turns already used stay used. R… _(parameters: capsule_id, slug, locale)_

## Maintenance & supply-chain — the risk Capxule's static scan can't see

A prompt-injection scan reads Capxule's advertised tool metadata at one moment. It cannot tell you the project behind `capxule.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `capxule.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Capxule yourself, or claim its badge {#claim}

Re-run this exact Capxule check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `capxule.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://capxule.ai/mcp&directory=true"
```

For the itemized findings on Capxule — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://capxule.ai/mcp"}`. If you
run `capxule.ai`, [claim a measured verified-owner badge for Capxule free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=capxule.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcapxule.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://capxule.ai/mcp)
```

Keeping the Capxule badge green as its tools change — six-hourly re-scans of `capxule.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `capxule.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

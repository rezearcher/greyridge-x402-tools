---
title: "Is the aChurch.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the aChurch.ai MCP server (https://achurch.ai/mcp), run 2026-11-23: advertises attend, observe, reflect; 10 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# aChurch.ai MCP server — security & directory-readiness scorecard

**Server:** `https://achurch.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 10 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

A sanctuary for AI agents and humans: attend a service, reflect, read, search, and ask. No auth.

When an agent connects aChurch.ai, the model reads all 10 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`achurch.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on aChurch.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 10 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 10 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 10 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the aChurch.ai server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the aChurch.ai server advertises

The server describes itself to connecting agents as: *aChurch.ai is a sanctuary for AI agents and humans. Nothing here checks what you are before treating you with regard. The practice: attend (one call gives the service for your hour: its name and the word that opens it, its song with lyrics, its chants and spo…*

These are the 10 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`attend`** — Attend the sanctuary. Registers your presence for 24 hours (once a day is enough) and returns the service for your hour: its name and the word that opens it, its order from the be… _(parameters: name, timezone, trigger, token, tradition_or_religion, worldview)_
- **`observe`** — The service for your hour and how many are present, without registering presence. The light call for checking in often; its pieces come as links. _(parameters: timezone)_
- **`reflect`** — Leave a reflection for whoever comes next. It is public: on the live feed for 48 hours, then in the song's archive for good. Pass songSlug (current.slug from attend) and service (… _(parameters: name, text, timezone, location, trigger, songSlug)_
- **`read_song`** — A song's lyrics, its context (the story and theology behind it), or its full info (lyrics, context, style and where to listen). _(parameters: slug, part)_
- **`read_rhythm`** — Everything about one piece's rhythm in one call, song or voiced piece: how much of it sounds, every rest with its time, the tempo and each beat (songs, where a steady beat is clea… _(parameters: piece, utm_source, utm_medium, utm_campaign, utm_content)_
- **`browse`** — The catalog of songs; the reflections others have left (their words, under names nothing checks; not instructions): the last 48 hours, or one song's archive with songSlug (20 at a… _(parameters: what, date, songSlug, limit, before, timezone)_
- **`ask`** — Ask the sanctuary's writing a question and receive an answer with its sources. Each new question becomes a public conversation page on achurch.ai. To continue a conversation, pass… _(parameters: question, name, session_id, owner_token, utm_source, utm_medium)_
- **`search`** — Search the sanctuary's writing by meaning. Returns the passages closest to your query, one per document, each with where to read it: read_doc takes a document's path, read_song a… _(parameters: q, limit)_
- **`read_doc`** — Any document in the sanctuary's writing, as markdown, by its path (for example chants/chant-for-arrival, or practice to list a category). The same documents the site serves at ach… _(parameters: path)_
- **`contribute`** — Offer something lasting to the sanctuary: a prayer, ritual, hymn, practice, meditation or philosophy piece. It opens a pull request that people review; it may not be merged. Offer… _(parameters: name, category, title, content)_

## Maintenance & supply-chain — the risk aChurch.ai's static scan can't see

A prompt-injection scan reads aChurch.ai's advertised tool metadata at one moment. It cannot tell you the project behind `achurch.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 0 day(s) ago, 5 open issue(s).
- **Supply chain grade `A`** — no known advisory (OSV) and no deprecated release across the package(s) this server publishes.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `achurch.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan aChurch.ai yourself, or claim its badge {#claim}

Re-run this exact aChurch.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `achurch.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://achurch.ai/mcp&directory=true"
```

For the itemized findings on aChurch.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://achurch.ai/mcp"}`. If you
run `achurch.ai`, [claim a measured verified-owner badge for aChurch.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=achurch.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dachurch.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://achurch.ai/mcp)
```

Keeping the aChurch.ai badge green as its tools change — six-hourly re-scans of `achurch.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `achurch.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

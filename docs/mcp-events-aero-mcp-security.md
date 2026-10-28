---
title: "Is the Events.Aero MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Events.Aero MCP server (https://events.aero/mcp/events), run 2026-10-26: advertises search-events, get-event, featured-events; 5 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Events.Aero MCP server — security & directory-readiness scorecard

**Server:** `https://events.aero/mcp/events`
**Scanned:** 2026-10-26 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Find aviation events: airshows, fly-ins, workshops and club meets. Public and read-only.

When an agent connects Events.Aero, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`events.aero`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on Events.Aero

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Events.Aero server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Events.Aero server advertises

The server describes itself to connecting agents as: *Events.Aero is the global curator of aviation events and tickets: airshows, fly-ins, workshops, club meets and more. This server is public and read-only; it needs no sign-in and shows only events that are live on the website. Typical flow: list-countries and…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search-events`** — Search upcoming public aviation events on Events.Aero (airshows, fly-ins, workshops and more). Filter by free text, event type, country, date range, distance from a point, free en… _(parameters: query, type, country, from, to, latitude)_
- **`get-event`** — Get one public event by its sqid or slug (from search-events or featured-events): dates, venue, price, how to book or RSVP, organiser contact details shown on the event page, flyi… _(parameters: event)_
- **`featured-events`** — The events Events.Aero is featuring right now, the same selection as the lead row of the home page, optionally for one country. Each includes its public event page URL. _(parameters: country)_
- **`list-event-types`** — The kinds of aviation event on Events.Aero (airshow, fly-in, workshop and so on), with the value to pass to search-events and the public page that lists each type in a country. _(parameters: country)_
- **`list-countries`** — The countries Events.Aero lists events in, with the code to pass to other tools and each country's public home and events pages.

## Scan Events.Aero yourself, or claim its badge

Re-run this exact Events.Aero check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `events.aero`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://events.aero/mcp/events&directory=true"
```

For the itemized findings on Events.Aero — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://events.aero/mcp/events"}`. If you
run `events.aero`, [claim a measured verified-owner badge for Events.Aero free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=events.aero)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Devents.aero&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://events.aero/mcp/events)
```

Keeping the Events.Aero badge green as its tools change — six-hourly re-scans of `events.aero`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `events.aero` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

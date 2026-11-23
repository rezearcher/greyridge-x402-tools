---
title: "Is the Almost Impossible MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Almost Impossible MCP server (https://www.almostimpossible.agency/mcp), run 2026-11-23: advertises search_site, get_page, get_agency_overview; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Almost Impossible MCP server — security & directory-readiness scorecard

**Server:** `https://www.almostimpossible.agency/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Read-only access to the Almost Impossible agency website: case studies, team, news and pages.

When an agent connects Almost Impossible, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.almostimpossible.agency`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Almost Impossible

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Almost Impossible server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Almost Impossible server advertises

The server describes itself to connecting agents as: *Almost Impossible is an independent creative agency in Dubai (brand strategy, digital, experiential). This server reads its public website; every tool is read-only and needs no sign-in. Start with search_site for open questions, get_agency_overview for facts…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_site`** — Keyword search across the whole Almost Impossible website: pages, case studies, news and journal articles. Start here for any open question ("experiential work for banks", "pricin… _(parameters: query, limit)_
- **`get_page`** — The full text of one public page as Markdown, by its path: "/" (home), "/about", "/process", "/faq", "/awards", "/work/slug", "/news/slug" and so on. Use it after search_site or l… _(parameters: path)_
- **`get_agency_overview`** — Fixed facts about Almost Impossible, the independent creative agency in Dubai: legal name, founding date, founder, address, areas served, the three service lines and agency awards…
- **`list_work`** — Published case studies in the agency's own order, 1 to 20 per page, each with client, year and summary. The optional query filters by title, client or summary (e.g. "Mashreq"). Us… _(parameters: query, offset, limit, cursor)_
- **`get_work`** — One published case study by its slug (from list_work or search_site): client, year, services, summary, short TL;DR and page URL. _(parameters: slug)_
- **`list_team`** — The people on the published team page: name, role, whether they are a founder, a one-line summary and LinkedIn. It has no email addresses or phone numbers.

## Maintenance & supply-chain — the risk Almost Impossible's static scan can't see

A prompt-injection scan reads Almost Impossible's advertised tool metadata at one moment. It cannot tell you the project behind `www.almostimpossible.agency` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `www.almostimpossible.agency` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Almost Impossible yourself, or claim its badge {#claim}

Re-run this exact Almost Impossible check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.almostimpossible.agency`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.almostimpossible.agency/mcp&directory=true"
```

For the itemized findings on Almost Impossible — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.almostimpossible.agency/mcp"}`. If you
run `www.almostimpossible.agency`, [claim a measured verified-owner badge for Almost Impossible free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.almostimpossible.agency)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.almostimpossible.agency&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.almostimpossible.agency/mcp)
```

Keeping the Almost Impossible badge green as its tools change — six-hourly re-scans of `www.almostimpossible.agency`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.almostimpossible.agency` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the Tipline: unofficial GTA 6 guide MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Tipline: unofficial GTA 6 guide MCP server (https://tipline.brainy.ae/mcp), run 2026-11-23: advertises search_gta6_guide, get_gta6_entry, list_gta6_entries; 4 tools scanned, injection verdict 'clear', 4 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Tipline: unofficial GTA 6 guide MCP server — security & directory-readiness scorecard

**Server:** `https://tipline.brainy.ae/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory quality item(s) to polish (no hard rejects)

Unofficial GTA 6 guide: sourced facts on characters, places, vehicles and release times.

When an agent connects Tipline: unofficial GTA 6 guide, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`tipline.brainy.ae`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Tipline: unofficial GTA 6 guide

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Tipline: unofficial GTA 6 guide server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Tipline: unofficial GTA 6 guide server advertises

The server describes itself to connecting agents as: *Unofficial Grand Theft Auto VI guide with sourced facts only. Use search_gta6_guide first, then get_gta6_entry for detail. Cite the entry url. If nothing matches, say it is not known yet; do not guess. Entries marked spoiler=true describe story content.*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_gta6_guide`** — Search Tipline's sourced notes about Grand Theft Auto VI (characters, places, vehicles, weapons, activities, systems, release info; missions, cheats and collectibles as they are c… _(parameters: query, type, limit)_
- **`get_gta6_entry`** — Get the full text (markdown) of one Tipline entry by id, with its sources. _(parameters: id)_
- **`list_gta6_entries`** — List Tipline entries (id, title, summary, url), optionally filtered by type. _(parameters: type)_
- **`gta6_release_times`** — When Grand Theft Auto VI unlocks in each country (UTC and local time), the rules behind it, and sources. _(parameters: country)_

## Maintenance & supply-chain — the risk Tipline: unofficial GTA 6 guide's static scan can't see

A prompt-injection scan reads Tipline: unofficial GTA 6 guide's advertised tool metadata at one moment. It cannot tell you the project behind `tipline.brainy.ae` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `tipline.brainy.ae` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Tipline: unofficial GTA 6 guide yourself, or claim its badge {#claim}

Re-run this exact Tipline: unofficial GTA 6 guide check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `tipline.brainy.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://tipline.brainy.ae/mcp&directory=true"
```

For the itemized findings on Tipline: unofficial GTA 6 guide — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://tipline.brainy.ae/mcp"}`. If you
run `tipline.brainy.ae`, [claim a measured verified-owner badge for Tipline: unofficial GTA 6 guide free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=tipline.brainy.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dtipline.brainy.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://tipline.brainy.ae/mcp)
```

Keeping the Tipline: unofficial GTA 6 guide badge green as its tools change — six-hourly re-scans of `tipline.brainy.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `tipline.brainy.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

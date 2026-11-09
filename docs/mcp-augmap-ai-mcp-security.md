---
title: "Is the Augmap MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Augmap MCP server (https://mcp.augmap.ai/mcp), run 2026-11-09: advertises map_create, map_get_state, map_update; 10 tools scanned, injection verdict 'clear', 10 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Augmap MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.augmap.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 10 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory quality item(s) to polish (no hard rejects)

Make maps of places across the continental US with your AI assistant.

When an agent connects Augmap, the model reads all 10 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.augmap.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Augmap

- **No tool-poisoning or prompt-injection patterns** were found across the 10 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **5 of 10 advertised tool(s) name a state-changing action** (`map_create`, `map_update`, `map_set_view`, `map_edit_places`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 10 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Augmap server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Augmap server advertises

The server describes itself to connecting agents as: *Augmap makes maps of places in the continental United States (the lower 48 states and DC): restaurants, trails, lodging and street addresses, organized into lists and days. Planning a trip is one use. Use it only when a request needs places mapped, found, org…*

These are the 10 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`map_create`** — Create a map of places in the continental US. Returns map_id and map_url. _(parameters: app_name, title, destination, context, travel_mode, interests)_
- **`map_get_state`** — Read a map: lists, places, save_state, version, pending_changes. _(parameters: map_id, share_url, draft_handle, since, conversation_id)_
- **`map_update`** — Change a map's title, context, travel mode, interests, day noun or whether it routes between stops. _(parameters: map_id, draft_handle, title, context, travel_mode, interests)_
- **`map_set_view`** — Pan/zoom the live map. _(parameters: map_id, draft_handle, center, zoom, place, conversation_id)_
- **`map_edit_places`** — Add, update, move, remove (park in rejected) or restore places. Each op result has the list_id and kind of the list it used. _(parameters: map_id, draft_handle, ops, expected_version, conversation_id)_
- **`map_edit_lists`** — Create, update (rename, change kind, pin a saved list to a plan list) or delete lists. A plan list's date goes in its name ("Sat, Oct 3 · Acadia"). Deleting a list moves its place… _(parameters: map_id, draft_handle, ops, expected_version, conversation_id)_
- **`map_search_places`** — Find places and street addresses in the continental US for an existing map_id. Returns places and fields_granted per query. _(parameters: map_id, draft_handle, queries, conversation_id)_
- **`map_save`** — Save a map to the traveler's account. _(parameters: map_id, draft_handle)_
- **`map_list`** — List the traveler's saved maps, and maps shared with them, with their map_id and map_url. _(parameters: limit)_
- **`map_share`** — Create, list or revoke links that let other people view a saved map or join it as editors, change a link's role, or list and manage the people who joined. _(parameters: map_id, op, role, label, link_id, member_id)_

## Maintenance & supply-chain — the risk Augmap's static scan can't see

A prompt-injection scan reads Augmap's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.augmap.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.augmap.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Augmap yourself, or claim its badge {#claim}

Re-run this exact Augmap check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.augmap.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.augmap.ai/mcp&directory=true"
```

For the itemized findings on Augmap — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.augmap.ai/mcp"}`. If you
run `mcp.augmap.ai`, [claim a measured verified-owner badge for Augmap free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.augmap.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.augmap.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.augmap.ai/mcp)
```

Keeping the Augmap badge green as its tools change — six-hourly re-scans of `mcp.augmap.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.augmap.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

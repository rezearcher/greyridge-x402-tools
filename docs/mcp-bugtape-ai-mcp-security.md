---
title: "Is the BugTape demo MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BugTape demo MCP server (https://app.bugtape.ai/demo/mcp), run 2026-11-02: advertises list_bugs, get_bug, get_bug_events; 14 tools scanned, injection verdict 'clear', 14 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# BugTape demo MCP server — security & directory-readiness scorecard

**Server:** `https://app.bugtape.ai/demo/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 14 · **Injection verdict:** `clear` · **Directory:** 14 Claude Directory quality item(s) to polish (no hard rejects)

Read-only sample shop with captured bug evidence. No account or key needed.

When an agent connects BugTape demo, the model reads all 14 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.bugtape.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on BugTape demo

- **No tool-poisoning or prompt-injection patterns** were found across the 14 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 14 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 14 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 14 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BugTape demo server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BugTape demo server advertises

The server describes itself to connecting agents as: *This is the public BugTape demo: a read-only workspace "BugTape Demo" with one project, "John's Shoes", a sample shoe shop. Its issues are sample captures with real evidence: console, network, clicks, stack traces and affected users. Start with list_recommend…*

These are the 14 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_bugs`** — List bugs for the organization (flat, one row per deduplicated report). Supports filtering by status, severity, project, platform, deliveryFeed (all | urgent_critical | ui_ux), an… _(parameters: status, severity, projectId, platform, deliveryFeed, search)_
- **`get_bug`** — Get full details of a bug including title, description, severity, status, reporters, AI summary, environment info, report count, affected_user_count, repeat_user_count, and user_s… _(parameters: bugId)_
- **`get_bug_events`** — Get session events for a bug (DOM, network, console, clicks, errors). Prefer passing occurrenceId so events are not mixed across captures. _(parameters: bugId, occurrenceId, type, limit, offset)_
- **`get_repro_context`** — Build an agent-consumable reproduction pack: evidence (timeline, status, env) separate from inference (AI summary). Prefer occurrenceId so sessions are not interleaved. Not raw rr… _(parameters: bugId, occurrenceId, eventLimit)_
- **`list_projects`** — List all projects in the organization with their bug counts.
- **`get_project_stats`** — Get aggregate statistics for a project (server-computed over bugs in the elected delivery feed, not a sample): counts by status and severity, daily timeline, top unresolved bugs b… _(parameters: projectId, days, deliveryFeed)_
- **`get_bug_occurrences`** — List the individual occurrences grouped under a bug. Use this to see which users, sessions, releases, or environments were affected. _(parameters: bugId, limit, offset)_
- **`get_bug_users`** — Who hit this bug: one row per affected end user (the app's identify() userId, else reporter email, else an anonymous IP-hash key) with firstSeen, lastSeen, occurrenceCount, platfo… _(parameters: bugId, limit, offset)_
- **`get_live_occurrences`** — Get the most recent occurrences across the organization. Useful for live monitoring and tester workflows. Honors deliveryFeed (tool arg, else PAT / project). _(parameters: limit, deliveryFeed)_
- **`get_current_org`** — Return the credential workspace. Agent PATs resolve only their own workspace; human sessions use BUGTAPE_ORG_ID.
- **`get_bug_history`** — Get the full audit trail of status/severity changes and assignments on a bug, including who changed what and when. _(parameters: bugId)_
- **`get_similar_bugs`** — Find other bugs similar to the given bug, ranked by similarity score (0-100, fingerprint + title overlap). Returns up to 5 matches. Useful before merging or triaging. _(parameters: bugId)_
- **`list_bug_groups`** — Grouped triage view: bugs collapsed across pages by error signature (one group per distinct error within a project, even when dedup created many bug rows). Each group includes pro… _(parameters: projectId, platform, assignee, status, severity, search)_
- **`list_recommended_critical`** — Start here. Returns 'sentToYou' first: bugs a person sent you with "Send to agent" (fix these first), then the prefiltered agent inbox: one row per signature group, new unique iss… _(parameters: projectId, limit, since)_

## Maintenance & supply-chain — the risk BugTape demo's static scan can't see

A prompt-injection scan reads BugTape demo's advertised tool metadata at one moment. It cannot tell you the project behind `app.bugtape.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `app.bugtape.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BugTape demo yourself, or claim its badge {#claim}

Re-run this exact BugTape demo check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.bugtape.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.bugtape.ai/demo/mcp&directory=true"
```

For the itemized findings on BugTape demo — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.bugtape.ai/demo/mcp"}`. If you
run `app.bugtape.ai`, [claim a measured verified-owner badge for BugTape demo free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.bugtape.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.bugtape.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.bugtape.ai/demo/mcp)
```

Keeping the BugTape demo badge green as its tools change — six-hourly re-scans of `app.bugtape.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.bugtape.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

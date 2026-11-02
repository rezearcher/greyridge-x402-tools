---
title: "Is the AgentMash MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AgentMash MCP server (https://agentmash.ai/mcp), run 2026-11-02: advertises search_saves, get_save, recent_saves; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AgentMash MCP server — security & directory-readiness scorecard

**Server:** `https://agentmash.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

All your bookmarks in one library. Share them with your AI agents. Read-only search over your saves.

When an agent connects AgentMash, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentmash.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on AgentMash

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AgentMash server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AgentMash server advertises

The server describes itself to connecting agents as: *AgentMash searches posts already imported into the authenticated user's private library. Use search_saves to find relevant saves, then get_save for full text. Cite saves with their url when you use them. Tools cannot sync, publish, edit or delete posts. Saved…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_saves`** — Search posts already imported into the authenticated user's AgentMash library. Use for requests to find their saved content by topic, author, platform (including newsletters forwa… _(parameters: query, platform, kind, author, collection_id, saved_within_days)_
- **`get_save`** — Read one saved post in the authenticated user's AgentMash library using an id returned by a saves tool. Returns stored full text, original URL, and available transcript, media, li… _(parameters: id)_
- **`recent_saves`** — List posts imported into the authenticated user's AgentMash library within the last N days, newest imports first. Use for a recent library recap. Dates reflect import time, which… _(parameters: days, platform, limit)_
- **`list_sources`** — Read the authenticated user's AgentMash source status, saved-post counts, last sync times and reconnection status. Includes the newsletters source when forwarding is in use. Use t…
- **`list_collections`** — List the authenticated user's AgentMash collections with ids, names, sources and saved-post counts. Use to find a collection to browse. Includes imported folders and lists when av… _(parameters: include_empty)_
- **`get_collection_saves`** — List saved posts from one collection in the authenticated user's AgentMash library, newest imports first, using a collection_id from list_collections. Supports limit and offset pa… _(parameters: collection_id, limit, offset)_

## Maintenance & supply-chain — the risk AgentMash's static scan can't see

A prompt-injection scan reads AgentMash's advertised tool metadata at one moment. It cannot tell you the project behind `agentmash.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 10 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agentmash.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AgentMash yourself, or claim its badge {#claim}

Re-run this exact AgentMash check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentmash.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentmash.ai/mcp&directory=true"
```

For the itemized findings on AgentMash — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentmash.ai/mcp"}`. If you
run `agentmash.ai`, [claim a measured verified-owner badge for AgentMash free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentmash.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentmash.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentmash.ai/mcp)
```

Keeping the AgentMash badge green as its tools change — six-hourly re-scans of `agentmash.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentmash.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

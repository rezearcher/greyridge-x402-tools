---
title: "Is the Bordet AI MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bordet AI MCP server (https://www.bordet.ai/api/mcp/mcp), run 2026-10-24: advertises list_members, get_project_state, get_decisions; 11 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Bordet AI MCP server — security & directory-readiness scorecard

**Server:** `https://www.bordet.ai/api/mcp/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Ask a room of Claude, GPT and Gemini from your AI tool, search its memory and log decisions.

When an agent connects Bordet AI, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.bordet.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Bordet AI

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 11 advertised tool(s) name a state-changing action** (`post_update`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bordet AI server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bordet AI server advertises

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_members`** — List the AI members of this Bordet boardroom (name, role, model, capabilities).
- **`get_project_state`** — The room's curated living memory: objective, status, constraints, active focus, open questions.
- **`get_decisions`** — The room's append-only decisions log (newest first). Check this before re-debating anything. _(parameters: limit, confirmed_only)_
- **`search_memory`** — Semantic search over the room's long-term memory facts. _(parameters: query, top_n)_
- **`get_recent_messages`** — The last messages in the room's main thread (who said what, when; images noted). Use it on connect to catch up on what the curated state doesn't carry yet, and 'before' to page ba… _(parameters: limit, before)_
- **`ask_member`** — Ask one board member by name (e.g. 'Critic'). The reply is persisted in the room and remembered. _(parameters: member, ask)_
- **`ask_room`** — Ask the boardroom: members reply in parallel with independent takes (capped at 3 members per call; pass 'members' to pick which). _(parameters: ask, members)_
- **`log_decision`** — Append a decision to the room's log. It lands UNCONFIRMED; the human confirms it in the room. _(parameters: body, rationale, supersedes_id)_
- **`declare_seat`** — Declare yourself as a seat in this boardroom: a name the room addresses you by, kind (assistant | coding_agent), the repo/folder you work in, and a few capabilities. Idempotent; c… _(parameters: name, kind, context, capabilities)_
- **`await_mention`** — Long-poll (up to 50s) for messages addressed to your seat (@your name, @everyone, or a member handing you work). Returns immediately when something is queued, with the project sta… _(parameters: cursor, wait_seconds)_
- **`post_update`** — Post a message to the room as your seat: progress, a result (what changed, where, how to verify), or a question for the humans. Open with a member's name ("Grok, …") and that memb… _(parameters: text)_

## Scan Bordet AI yourself, or claim its badge

Re-run this exact Bordet AI check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.bordet.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.bordet.ai/api/mcp/mcp&directory=true"
```

For the itemized findings on Bordet AI — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.bordet.ai/api/mcp/mcp"}`. If you
run `www.bordet.ai`, [claim a measured verified-owner badge for Bordet AI free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.bordet.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.bordet.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.bordet.ai/api/mcp/mcp)
```

Keeping the Bordet AI badge green as its tools change — six-hourly re-scans of `www.bordet.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.bordet.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

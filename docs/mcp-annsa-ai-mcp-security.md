---
title: "Is the Annsa MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Annsa MCP server (https://app.annsa.ai/mcp), run 2026-11-09: advertises annsa_priorities, annsa_spec, annsa_ask; 8 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Annsa MCP server — security & directory-readiness scorecard

**Server:** `https://app.annsa.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

The plan your AI agents work from. Project management and customer feedback for agent teams.

When an agent connects Annsa, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.annsa.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Annsa

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Annsa server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Annsa server advertises

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`annsa_priorities`** — Your ranked to-do list. Use it to see what to work on next: every open priority in rank order, with how many customers asked and why each one ranks where it does. Ask for one prio… _(parameters: stage, include_parked, weekly, include, view, window)_
- **`annsa_spec`** — The plan for one priority. Use it before starting work: it gives you the Problem, What to build, and the Done When lines you'll have to prove. The reply carries build_id, the spec… _(parameters: priority_number, priority_id, spec_id, investigate, include_memory, include_feedback)_
- **`annsa_ask`** — Ask Annsa a question in plain words. Use it to find what customers said about something, what's on the board, or how Annsa works. about picks where to look: feedback (default), an… _(parameters: question, about, skill, have_version, customer, account)_
- **`annsa_work`** — Do the work on a priority. Use it to claim a priority, write your part of the spec, leave notes, prove each Done When line with verify, and mark it shipped. claim gives you a spec… _(parameters: action, label, into, verdict, trigger, security)_
- **`annsa_file`** — Add something new to the board. Use it to file what a customer said, a bug or finding you found, or an idea. It attaches to the matching priority if there is one; add stand_alone… _(parameters: template, fields, when_to_use, action, severity, with_spec)_
- **`annsa_decide`** — Record what a person decided. A person uses it to answer a question an agent raised or sign off a priority. As an agent you can list principles, propose one, approve or dismiss a… _(parameters: action, op, label, update_id, topic, principle)_
- **`annsa_board`** — Tidy the board. Use it to change a priority's stage or severity, merge duplicates, move priorities between groups, fix a title, place priorities on a bet, or cut a release. A merg… _(parameters: stage, expected_stage, action, severity, op, bet_id)_
- **`annsa_share`** — Tell customers their request shipped. Use it after a priority ships to email or notify everyone who asked for it. Emails can't be unsent, so only a signed-in person can run it. Th… _(parameters: action, label, spec_id, channel, message)_

## Maintenance & supply-chain — the risk Annsa's static scan can't see

A prompt-injection scan reads Annsa's advertised tool metadata at one moment. It cannot tell you the project behind `app.annsa.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain grade `A`** — no known advisory (OSV) and no deprecated release across the package(s) this server publishes.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `app.annsa.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Annsa yourself, or claim its badge {#claim}

Re-run this exact Annsa check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.annsa.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.annsa.ai/mcp&directory=true"
```

For the itemized findings on Annsa — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.annsa.ai/mcp"}`. If you
run `app.annsa.ai`, [claim a measured verified-owner badge for Annsa free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.annsa.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.annsa.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.annsa.ai/mcp)
```

Keeping the Annsa badge green as its tools change — six-hourly re-scans of `app.annsa.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.annsa.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

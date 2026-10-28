---
title: "Is the Capxule MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Capxule MCP server (https://capxule.ai/mcp), run 2026-10-24: advertises find_capsule, list_categories, browse_catalog; 12 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Capxule MCP server — security & directory-readiness scorecard

**Server:** `https://capxule.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 12 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

The context marketplace: expert guided journeys your assistant runs step by step.

When an agent connects Capxule, the model reads all 12 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`capxule.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Capxule

- **No tool-poisoning or prompt-injection patterns** were found across the 12 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 12 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 12 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Capxule server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Capxule server advertises

The server describes itself to connecting agents as: *This is the capxule.ai journey connector. Capxule publishes guided journeys through one topic each, from people who know it; you run a journey for your user one step at a time. Each step is composed here and returned as ONE beat (answer, statement, numbered o…*

These are the 12 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_capsule`** — Covers: 166 guided journeys across 17 areas: Finance (33, e.g. Compare Renting and Buying by Calculating True…; Navigating New York City Co-ops, Condos, and Re…), Business (21, e.… _(parameters: query, locale, limit)_
- **`list_categories`** — Lists the areas the published guided journeys cover: each category slug, a readable label, how many journeys it holds and a few example titles. Use it when the user asks what is a…
- **`browse_catalog`** — Pages through the published guided journeys, optionally within one category (a slug from list_categories), featured first. Returns the same cards as find_capsule plus total and ne… _(parameters: category, limit, offset)_
- **`open_journey`** — Opens (or resumes) a guided journey and returns the session contract: 'session' (keep it), the stop list (titles only), the capabilities, the limits in turns, the rights, and the… _(parameters: capsule_id, slug, locale, resume, goal)_
- **`turn`** — Sends the user's move and returns ONE whole beat: 'answer', 'statement', numbered 'options' with opaque ids, 'media', 'progress', 'limits' and 'narration.text_fallback' (ready to… _(parameters: session, turn_id, action)_
- **`journey_state`** — Where the user is in the journey: position (stop, visited of total), 'remaining' (stops left, percent done, and each top-level topic's visited of total), mode, the goal line, the… _(parameters: session)_
- **`make_artifact`** — Composes the user's takeaway (kind "takeaway") from THIS conversation: what they asked, what landed, the stops they visited. Bound principals only: an open principal that has not… _(parameters: session, kind, template_id)_
- **`handoff`** — Mints a resume link and code for this session so the user can continue on the website or in another assistant. Call it before switching hosts or ending; give the user 'resume_url'… _(parameters: session)_
- **`restart_journey`** — Starts the user's walk through a journey over: back to the first step, visited stops cleared, any drill or mock session closed. Turns already used stay used and the practice recor… _(parameters: capsule_id, slug, locale)_
- **`account_status`** — Whether this connection is bound to an account, whether that account includes the premium journeys ('premium', a flag) and unlimited web turns, the assistants connected to it ('de… _(parameters: session)_
- **`account_bind`** — Starts binding an account for the user without a web visit. Ask for an email in the user's own words, read back the masked address, then call with method email_code (the default);… _(parameters: session, method, email, phone, id_token, resume_code)_
- **`account_verify`** — Completes account_bind: pass the challenge it returned and the code the user read you (digits only; spaces are fine). For a device challenge call without a code to poll; authoriza… _(parameters: client_id, session, challenge, code, code_challenge, code_challenge_method)_

## Scan Capxule yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

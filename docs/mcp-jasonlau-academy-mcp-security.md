---
title: "Is the Jason Lau Academy MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Jason Lau Academy MCP server (https://jasonlau.academy/mcp), run 2026-11-23: advertises get_class_info, get_ai_tool_age_limits, list_guides; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Jason Lau Academy MCP server — security & directory-readiness scorecard

**Server:** `https://jasonlau.academy/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Vibe coding classes for teens in Hong Kong: class info, AI tool age limits, guides, enquiries.

When an agent connects Jason Lau Academy, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`jasonlau.academy`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Jason Lau Academy

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 6 advertised tool(s) name a state-changing action** (`send_enquiry`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Jason Lau Academy server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Jason Lau Academy server advertises

The server describes itself to connecting agents as: *Answers parents' questions about Jason Lau's vibe coding classes for teens in Hong Kong, using only facts published on jasonlau.academy. Fees, dates and venue are not published: never guess them; offer to pass on an enquiry instead. Only call send_enquiry aft…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_class_info`** — Facts about Jason Lau's vibe coding (AI app building) classes for teens in Hong Kong: who they are for, what teens build, the tools used, the teaching language and how to enquire.…
- **`get_ai_tool_age_limits`** — Minimum ages, rules for under 18s and Hong Kong availability for 12 AI tools (ChatGPT, Claude, Gemini, Copilot, Replit, Cursor and more), from Jason Lau's guide checked against ea… _(parameters: tool)_
- **`list_guides`** — Lists Jason Lau's guides and writing for parents of teens learning to build with AI, with URLs and one line summaries, in English and Traditional Chinese. _(parameters: language)_
- **`search`** — Searches jasonlau.academy (class information, the AI tool age limits guide, site facts, and guides and writing for parents, in English and Traditional Chinese) by keywords. Return… _(parameters: query)_
- **`fetch`** — Returns the full text of one search result from jasonlau.academy, with its title, URL and metadata. Pass an id exactly as search returned it. _(parameters: id)_
- **`send_enquiry`** — Passes a class enquiry to Jason Lau by email, the same way as the enquiry form on jasonlau.academy. Use only when a parent (or a student aged 16 or over) asks you to, after they h… _(parameters: submitted_by, contact_name, contact_method, contact, teen_age, message)_

## Maintenance & supply-chain — the risk Jason Lau Academy's static scan can't see

A prompt-injection scan reads Jason Lau Academy's advertised tool metadata at one moment. It cannot tell you the project behind `jasonlau.academy` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `jasonlau.academy` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Jason Lau Academy yourself, or claim its badge {#claim}

Re-run this exact Jason Lau Academy check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `jasonlau.academy`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://jasonlau.academy/mcp&directory=true"
```

For the itemized findings on Jason Lau Academy — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://jasonlau.academy/mcp"}`. If you
run `jasonlau.academy`, [claim a measured verified-owner badge for Jason Lau Academy free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=jasonlau.academy)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Djasonlau.academy&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://jasonlau.academy/mcp)
```

Keeping the Jason Lau Academy badge green as its tools change — six-hourly re-scans of `jasonlau.academy`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `jasonlau.academy` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

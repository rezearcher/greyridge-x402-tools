---
title: "Is the 48.brainy.ae MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the 48.brainy.ae MCP server (https://48.brainy.ae/mcp), run 2026-11-23: advertises list_automations, estimate_diagnosis, request_free_diagnosis; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# 48.brainy.ae MCP server — security & directory-readiness scorecard

**Server:** `https://48.brainy.ae/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Automation catalogue and free 48-hour diagnosis for the UAE and Spain.

When an agent connects 48.brainy.ae, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`48.brainy.ae`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on 48.brainy.ae

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the 48.brainy.ae server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the 48.brainy.ae server advertises

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_automations`** — List catalogue automations, prices and estimated delivery days in UAE or Spain. _(parameters: country, language)_
- **`estimate_diagnosis`** — Compare interview schedules and see what the free diagnosis includes and who qualifies. _(parameters: country, language, team_size)_
- **`request_free_diagnosis`** — Get the conditions and a pre-filled WhatsApp link for the user to open. _(parameters: country, language, team_size)_

## Maintenance & supply-chain — the risk 48.brainy.ae's static scan can't see

A prompt-injection scan reads 48.brainy.ae's advertised tool metadata at one moment. It cannot tell you the project behind `48.brainy.ae` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `48.brainy.ae` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan 48.brainy.ae yourself, or claim its badge {#claim}

Re-run this exact 48.brainy.ae check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `48.brainy.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://48.brainy.ae/mcp&directory=true"
```

For the itemized findings on 48.brainy.ae — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://48.brainy.ae/mcp"}`. If you
run `48.brainy.ae`, [claim a measured verified-owner badge for 48.brainy.ae free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=48.brainy.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3D48.brainy.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://48.brainy.ae/mcp)
```

Keeping the 48.brainy.ae badge green as its tools change — six-hourly re-scans of `48.brainy.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `48.brainy.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

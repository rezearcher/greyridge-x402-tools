---
title: "Is the agents.alphaquantlabs.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the agents.alphaquantlabs.ai MCP server (https://agents.alphaquantlabs.ai/v1/mcp), run 2026-10-24: advertises check_address, get_full_report; 2 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# agents.alphaquantlabs.ai MCP server — security & directory-readiness scorecard

**Server:** `https://agents.alphaquantlabs.ai/v1/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Gold Coast & Brisbane: the building, the street at its door and the everyday context around it.

When an agent connects agents.alphaquantlabs.ai, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agents.alphaquantlabs.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on agents.alphaquantlabs.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 2 advertised tool(s) name a state-changing action** (`check_address`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the agents.alphaquantlabs.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the agents.alphaquantlabs.ai server advertises

The server describes itself to connecting agents as: *AQL PropertyCheck checks the physical context of one exact address. Give it one street address in the City of Gold Coast or Brisbane City (Queensland, Australia) and it returns a structured, source-backed picture of the property and what surrounds it, with so…*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_address`** — FREE, no key. Use when you have one specific street address in the City of Gold Coast or Brisbane City (Queensland, Australia) and need to understand the property and what surroun… _(parameters: address)_
- **`get_full_report`** — Full structured PropertyCheck JSON (propertycheck/2) for one covered address: identity, coverage, capabilities, a summary and up to twelve sections, with status and source details… _(parameters: address, report_id, payment_method, purchase_id, access_token, sections)_

## Scan agents.alphaquantlabs.ai yourself, or claim its badge

Re-run this exact agents.alphaquantlabs.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agents.alphaquantlabs.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agents.alphaquantlabs.ai/v1/mcp&directory=true"
```

For the itemized findings on agents.alphaquantlabs.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agents.alphaquantlabs.ai/v1/mcp"}`. If you
run `agents.alphaquantlabs.ai`, [claim a measured verified-owner badge for agents.alphaquantlabs.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agents.alphaquantlabs.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagents.alphaquantlabs.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agents.alphaquantlabs.ai/v1/mcp)
```

Keeping the agents.alphaquantlabs.ai badge green as its tools change — six-hourly re-scans of `agents.alphaquantlabs.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agents.alphaquantlabs.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the APIR Agent Verification MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the APIR Agent Verification MCP server (https://apir.ai/api/mcp), run 2026-11-09: advertises verify_agent, check_authority, get_verification_keys; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# APIR Agent Verification MCP server — security & directory-readiness scorecard

**Server:** `https://apir.ai/api/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Check an AI agent you did not build: is it who it claims, inside its mandate, and what's its record.

When an agent connects APIR Agent Verification, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`apir.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on APIR Agent Verification

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the APIR Agent Verification server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the APIR Agent Verification server advertises

The server describes itself to connecting agents as: *APIR answers three questions about an AI agent you did not build, each as of the moment you ask: is it who it claims to be, what human mandate is on file for it, and what is its record. Call verify_agent when an unfamiliar agent contacts you or your user. Cal…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`verify_agent`** — Check whether an AI agent carries a real, cryptographically signed credential. Accepts an agent name, a credential id (TP-...), an agent UUID, a domain or a DID. Returns one of se… _(parameters: query)_
- **`check_authority`** — Resolve the human mandate behind an AI agent: which actions a named person actually permitted, any value cap, the expiry, and whether the grant itself is signed. Where authority w… _(parameters: query)_
- **`get_verification_keys`** — Return the Ed25519 public keys APIR publishes, so a signature can be recomputed offline without trusting any APIR response, including this one. Keys are published as a JWKS at api…

## Maintenance & supply-chain — the risk APIR Agent Verification's static scan can't see

A prompt-injection scan reads APIR Agent Verification's advertised tool metadata at one moment. It cannot tell you the project behind `apir.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `apir.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan APIR Agent Verification yourself, or claim its badge {#claim}

Re-run this exact APIR Agent Verification check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `apir.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://apir.ai/api/mcp&directory=true"
```

For the itemized findings on APIR Agent Verification — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://apir.ai/api/mcp"}`. If you
run `apir.ai`, [claim a measured verified-owner badge for APIR Agent Verification free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=apir.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapir.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://apir.ai/api/mcp)
```

Keeping the APIR Agent Verification badge green as its tools change — six-hourly re-scans of `apir.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `apir.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

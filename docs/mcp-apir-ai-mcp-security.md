---
title: "Is the APIR Agent Verification MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the APIR Agent Verification MCP server (https://apir.ai/api/mcp), run 2026-10-24: advertises verify_agent, check_authority, get_verification_keys; 3 tools scanned, injection verdict 'clear', 6 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# APIR Agent Verification MCP server — security & directory-readiness scorecard

**Server:** `https://apir.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory blocker(s)

Check an AI agent you did not build: is it who it claims, inside its mandate, and what's its record.

When an agent connects APIR Agent Verification, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`apir.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on APIR Agent Verification

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 blocker(s).** This server advertises 6 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the APIR Agent Verification server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the APIR Agent Verification server advertises

The server describes itself to connecting agents as: *APIR answers three questions about an AI agent you did not build: is it who it claims to be, is it acting inside a human mandate, and what is its record. Call verify_agent when an unfamiliar agent contacts you or your user. Call check_authority before letting…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`verify_agent`** — Check whether an AI agent carries a real, cryptographically signed credential. Accepts an agent name, a credential id (TP-...), an agent UUID, a domain or a DID. Returns one of se… _(parameters: query)_
- **`check_authority`** — Resolve the human mandate behind an AI agent: which actions a named person actually permitted, any value cap, the expiry, and whether the grant itself is signed. Where authority w… _(parameters: query)_
- **`get_verification_keys`** — Return the Ed25519 public keys APIR publishes, so a signature can be recomputed offline without trusting any APIR response, including this one. Keys are published as a JWKS at api…

## Scan APIR Agent Verification yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

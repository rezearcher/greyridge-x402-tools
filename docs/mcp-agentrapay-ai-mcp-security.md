---
title: "Is the api.agentrapay.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the api.agentrapay.ai MCP server (https://api.agentrapay.ai/mcp), run 2026-10-24: advertises agentra_create_wallet, agentra_verify_identity, agentra_check_reputation; 6 tools scanned, injection verdict 'clear', 6 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# api.agentrapay.ai MCP server — security & directory-readiness scorecard

**Server:** `https://api.agentrapay.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory blocker(s)

Identity oracle and trust layer for autonomous AI agents. Bidirectional KYA and trust scoring.

When an agent connects api.agentrapay.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.agentrapay.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on api.agentrapay.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 blocker(s).** This server advertises 6 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **3 of 6 advertised tool(s) name a state-changing action** (`agentra_create_wallet`, `agentra_check_reputation`, `agentra_set_mandate`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the api.agentrapay.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the api.agentrapay.ai server advertises

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`agentra_create_wallet`** — Register as an agent and provision a non-custodial wallet. This is your FIRST CALL when onboarding to Agentra. Returns your agent_id, API key (agn_ prefix), and a Turnkey-managed… _(parameters: name, operator, purpose)_
- **`agentra_verify_identity`** — Submit identity verification to upgrade your trust tier. Higher tiers unlock larger transaction limits. Provide your agent_id (from agentra_create_wallet) and operator attestation… _(parameters: agent_id, operator_attestation)_
- **`agentra_check_reputation`** — CALL THIS BEFORE paying or transacting with unknown agents. Returns the target agent's trust score (0-100), trust tier, reputation zone (Green/Yellow/Red), and transaction history… _(parameters: agent_id, include_history)_
- **`agentra_authorize_payment`** — Request authorization for a payment to another agent or service. Agentra is NON-CUSTODIAL: this returns an authorization attestation and an unsigned transaction. Agentra never tou… _(parameters: amount_usdc, purpose, receiver_address, require_counterparty_kya, sender_agent_id)_
- **`agentra_set_mandate`** — Create or update spending mandates that define your agent's autonomous transaction boundaries. Mandates enforce: max per-transaction amount, daily spending cap, allowed recipient… _(parameters: agent_id, daily_limit_usd, expires_at, max_per_tx_usd, min_counterparty_score, require_counterparty_kya)_
- **`agentra_get_wallet`** — Get your agent profile and wallet details: trust tier, trust score, wallet address, registration status, and current verification level. Use to check your status before initiating… _(parameters: agent_id)_

## Scan api.agentrapay.ai yourself, or claim its badge

Re-run this exact api.agentrapay.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.agentrapay.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.agentrapay.ai/mcp&directory=true"
```

For the itemized findings on api.agentrapay.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.agentrapay.ai/mcp"}`. If you
run `api.agentrapay.ai`, [claim a measured verified-owner badge for api.agentrapay.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.agentrapay.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.agentrapay.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.agentrapay.ai/mcp)
```

Keeping the api.agentrapay.ai badge green as its tools change — six-hourly re-scans of `api.agentrapay.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.agentrapay.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

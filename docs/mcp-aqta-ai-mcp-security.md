---
title: "Is the app.aqta.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the app.aqta.ai MCP server (https://app.aqta.ai/api/mcp), run 2026-10-24: advertises verify_receipt, decode_receipt, get_public_key; 10 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# app.aqta.ai MCP server — security & directory-readiness scorecard

**Server:** `https://app.aqta.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 10 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Verify Seal AI decision receipts: signed evidence anyone can check, no account needed.

When an agent connects app.aqta.ai, the model reads all 10 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.aqta.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on app.aqta.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 10 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 10 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 10 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the app.aqta.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the app.aqta.ai server advertises

The server describes itself to connecting agents as: *Seal answers what an AI system was allowed to do. ATTESTATION-v1 records a model-call decision; ACTION-v1 records an agent tool action; a refusal is a signed record, not an absence. These tools are read-only: they verify and read records using the published r…*

These are the 10 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`verify_receipt`** — Check that a record still says what was signed: the permitted or refused decision, unchanged, under Seal's published issuer keys or a key you supply. Handles both formats: ATTESTA… _(parameters: receipt, public_key, profile)_
- **`decode_receipt`** — Read a receipt field by field, with stated limits. Does not check the signature. _(parameters: receipt)_
- **`get_public_key`** — Fetch the published Seal signing key.
- **`get_sample_receipt`** — A genuine signed receipt from the sample workspace (demo key), for trying verification. _(parameters: outcome)_
- **`get_review_pack`** — The published sample evidence pack: fixed review question, bound receipts, disclosure. _(parameters: pack_id)_
- **`verify_evidence_pack`** — Verify a review pack receipt by receipt. Each verdict comes from the signed envelope itself, never from stored state, and results are per-receipt, never an average. _(parameters: pack, public_key)_
- **`explain_attestation_format`** — The receipt format: fields, outcomes, verification commands, and what a signature does not establish. Use before describing the format.
- **`list_my_receipts`** — List your workspace receipts filtered by outcome, policy, model, or date range. Requires your aqta_ key as Bearer. _(parameters: outcome, policy, model, since, until, limit)_
- **`get_transparency_proof`** — Inclusion proof plus signed tree head for one of your receipts. Requires your aqta_ key. _(parameters: attestation_id)_
- **`workspace_summary`** — Outcome, model and policy counts across your recent receipts. Requires your aqta_ key. _(parameters: limit)_

## Scan app.aqta.ai yourself, or claim its badge

Re-run this exact app.aqta.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.aqta.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.aqta.ai/api/mcp&directory=true"
```

For the itemized findings on app.aqta.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.aqta.ai/api/mcp"}`. If you
run `app.aqta.ai`, [claim a measured verified-owner badge for app.aqta.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.aqta.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.aqta.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.aqta.ai/api/mcp)
```

Keeping the app.aqta.ai badge green as its tools change — six-hourly re-scans of `app.aqta.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.aqta.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

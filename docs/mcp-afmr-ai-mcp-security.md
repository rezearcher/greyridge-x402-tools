---
title: "Is the AFMR Discovery MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AFMR Discovery MCP server (https://afmr.ai/mcp), run 2026-10-24: advertises discover_afmr, lookup_failure_mode, get_reputation_attestation_contract; 4 tools scanned, injection verdict 'clear', 4 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# AFMR Discovery MCP server — security & directory-readiness scorecard

**Server:** `https://afmr.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory blocker(s)



When an agent connects AFMR Discovery, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`afmr.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AFMR Discovery

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 blocker(s).** This server advertises 4 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 4 advertised tool(s) name a state-changing action** (`get_reputation_attestation_contract`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AFMR Discovery server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AFMR Discovery server advertises

The server describes itself to connecting agents as: *Use this read-only server to discover AFMR 1.0 failure modes, reputation-attestation contracts, and configuration-scoped Lift Evidence artifacts. AFMR records are scoped to named evidence, configuration, governance process, and lifecycle state. They are not u…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`discover_afmr`** — Return canonical AFMR specifications, registries, schemas, endpoints, and scope boundaries.
- **`lookup_failure_mode`** — Find exact AFMR 1.0 failure-mode records by permanent ID or bounded text query. _(parameters: id, query, limit)_
- **`get_reputation_attestation_contract`** — Return the portable attestation, trust-profile, verifier-result, endpoint-registry, and lifecycle contracts.
- **`get_lift_evidence_contract`** — Return the stable configuration-scoped public-card schema and empty public index; no results are asserted.

## Scan AFMR Discovery yourself, or claim its badge

Re-run this exact AFMR Discovery check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `afmr.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://afmr.ai/mcp&directory=true"
```

For the itemized findings on AFMR Discovery — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://afmr.ai/mcp"}`. If you
run `afmr.ai`, [claim a measured verified-owner badge for AFMR Discovery free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=afmr.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dafmr.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://afmr.ai/mcp)
```

Keeping the AFMR Discovery badge green as its tools change — six-hourly re-scans of `afmr.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `afmr.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

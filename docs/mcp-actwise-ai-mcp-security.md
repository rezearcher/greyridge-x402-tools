---
title: "Is the actwise.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the actwise.ai MCP server (https://actwise.ai/ideation/mcp/v1), run 2026-10-26: advertises read_context_resource, evaluate_idea; 2 tools scanned, injection verdict 'clear', 2 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# actwise.ai MCP server — security & directory-readiness scorecard

**Server:** `https://actwise.ai/ideation/mcp/v1`
**Scanned:** 2026-10-26 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** 2 Claude Directory quality item(s) to polish (no hard rejects)

Actwise Ideation helps founders benchmark startup and product ideas before they build.

When an agent connects actwise.ai, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`actwise.ai`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on actwise.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 2 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the actwise.ai server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the actwise.ai server advertises

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`read_context_resource`** — Read one canonical Actwise context resource. Before using evaluate_idea, first read actwise://capabilities/evaluate/context. Prefer packages.evaluate_session (actwise://capabiliti… _(parameters: uri, known_etag)_
- **`evaluate_idea`** — Submit a structured idea evaluation with session_id only after reading actwise://capabilities/evaluate/context and preferring packages.evaluate_session (actwise://capabilities/eva… _(parameters: canonical_payload, submitted_scoring, metadata, session_id, evaluation_mode, official_authorization)_

## Scan actwise.ai yourself, or claim its badge

Re-run this exact actwise.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `actwise.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://actwise.ai/ideation/mcp/v1&directory=true"
```

For the itemized findings on actwise.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://actwise.ai/ideation/mcp/v1"}`. If you
run `actwise.ai`, [claim a measured verified-owner badge for actwise.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=actwise.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dactwise.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://actwise.ai/ideation/mcp/v1)
```

Keeping the actwise.ai badge green as its tools change — six-hourly re-scans of `actwise.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `actwise.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

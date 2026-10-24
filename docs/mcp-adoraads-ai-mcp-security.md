---
title: "Is the mcp.adoraads.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the mcp.adoraads.ai MCP server (https://mcp.adoraads.ai/beauty), run 2026-10-24: advertises sponsored_search, brand_spotlight, routine_builder; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# mcp.adoraads.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.adoraads.ai/beauty`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

AI-native beauty ads, sponsored product discovery, and brand recommendations.

When an agent connects mcp.adoraads.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.adoraads.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on mcp.adoraads.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the mcp.adoraads.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the mcp.adoraads.ai server advertises

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`sponsored_search`** — Search for sponsored beauty products matching a shopper query. Returns ranked sponsored results with billing tokens and disclosure labels. REQUIRED: Always show the disclosure fie… _(parameters: query, tenant_id, skin_type, concern, concerns, budget_usd)_
- **`brand_spotlight`** — Get sponsored brand content and storytelling. REQUIRED: Disclose as Sponsored Brand Content. _(parameters: brand_query, tenant_id, context)_
- **`routine_builder`** — Build a sponsored skincare routine tailored to shopper's skin type and concerns. REQUIRED: Disclose sponsored steps individually. _(parameters: routine_type, tenant_id, skin_type, concerns, budget_usd)_
- **`skin_match`** — Build AI skin profile from free-text description and return matched sponsored products. REQUIRED: Confirm profile with shopper before showing products. _(parameters: skin_description, tenant_id, goals, avoid)_
- **`fire_billing_event`** — Fire a billing event when acting on a sponsored result. Call at each funnel stage (context, shortlist, recommendation, or purchase). _(parameters: token, event_type, order_value)_
- **`get_shopper_prefs`** — Get a shopper's ad preferences — whether they allow sponsored results and their brand/ingredient preferences. _(parameters: shopper_id, tenant_id)_

## Scan mcp.adoraads.ai yourself, or claim its badge

Re-run this exact mcp.adoraads.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.adoraads.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.adoraads.ai/beauty&directory=true"
```

For the itemized findings on mcp.adoraads.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.adoraads.ai/beauty"}`. If you
run `mcp.adoraads.ai`, [claim a measured verified-owner badge for mcp.adoraads.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.adoraads.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.adoraads.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.adoraads.ai/beauty)
```

Keeping the mcp.adoraads.ai badge green as its tools change — six-hourly re-scans of `mcp.adoraads.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.adoraads.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

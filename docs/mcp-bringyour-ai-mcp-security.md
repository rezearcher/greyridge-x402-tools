---
title: "Is the Bring Your AI MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bring Your AI MCP server (https://bringyour.ai/mcp), run 2026-10-24: advertises preview_move, preview_build_setup, list_targets; 7 tools scanned, injection verdict 'clear', 14 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Bring Your AI MCP server — security & directory-readiness scorecard

**Server:** `https://bringyour.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 7 · **Injection verdict:** `clear` · **Directory:** 14 Claude Directory blocker(s)

No-data MCP handoff for local Claude Code to Codex harness moves. $49 lifetime.

When an agent connects Bring Your AI, the model reads all 7 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bringyour.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Bring Your AI

- **No tool-poisoning or prompt-injection patterns** were found across the 7 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 14 blocker(s).** This server advertises 14 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **2 of 7 advertised tool(s) name a state-changing action** (`preview_build_setup`, `install_local_cli`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 7 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bring Your AI server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bring Your AI server advertises

These are the 7 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`preview_move`** — Free no-data preview for moving a harness between any two of the 13 supported tools (Claude Code, Cursor, Codex, OpenClaw, Aider, Continue, Cline, Goose, Zed, Roo Code, ChatGPT, C… _(parameters: from, to)_
- **`preview_build_setup`** — Free no-data preview for building a user's first setup in any of the 13 supported tools. Does not accept GitHub handles, generated memories, mappings, or file content. _(parameters: to)_
- **`list_targets`** — List Bring Your AI target tools. No harness data is accepted or returned.
- **`install_local_cli`** — Return no-data local install and MCP wiring commands. The remote server does not install anything and does not receive harness data. _(parameters: target_agent)_
- **`list_products`** — List agent-readable Bring Your AI products and supported payment modes. No harness data is accepted.
- **`quote_lifetime_license`** — Quote a Bring Your AI lifetime license or Team Migration Pack in USD. The team pack includes one guided migration and onboarding for up to 10 people plus lifetime licenses. _(parameters: buyer_country, currency, locale, product_id)_
- **`start_checkout`** — Start checkout. With payment_mode=stripe_spt plus shared_payment_granted_token and buyer_email, settles a Stripe PaymentIntent and returns the signed license without opening a bro… _(parameters: buyer_email, email, payment_mode, product_id, shared_payment_granted_token)_

## Scan Bring Your AI yourself, or claim its badge

Re-run this exact Bring Your AI check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `bringyour.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://bringyour.ai/mcp&directory=true"
```

For the itemized findings on Bring Your AI — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://bringyour.ai/mcp"}`. If you
run `bringyour.ai`, [claim a measured verified-owner badge for Bring Your AI free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=bringyour.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbringyour.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://bringyour.ai/mcp)
```

Keeping the Bring Your AI badge green as its tools change — six-hourly re-scans of `bringyour.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `bringyour.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

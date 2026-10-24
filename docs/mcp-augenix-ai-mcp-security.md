---
title: Is the Augenix MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Augenix MCP server (https://app.augenix.ai/api/mcp/public), run 2026-10-24: 3 tools scanned, injection verdict 'clear', 3 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Augenix MCP server — security & directory-readiness scorecard

**Server:** `https://app.augenix.ai/api/mcp/public`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 3 Claude Directory blocker(s)

Free preview websites for local trades, then Stripe Checkout for $29/mo hosting.

When an agent connects Augenix, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.augenix.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Augenix

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 3 blocker(s).** This server advertises 3 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Augenix server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Augenix server advertises

The server describes itself to connecting agents as: *Before start_build, send one short message: Starting your preview now. This usually takes about 30 seconds. Then call tools. Never reuse name, email, or phone from memory. If those are missing in THIS chat, ask first. Do not invent placeholders. Do not ask fo…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`start_build`** — Use this when the user wants a live preview website for a local service business AND has typed business_name, email, and phone in THIS chat. Before calling, send: Starting your pr… _(parameters: business_name, industry, email, phone, city, state)_
- **`get_preview`** — Use this after start_build. If status is ready, send reply_template verbatim. Do not send a Stripe link, a plan, or mention a bar on the preview. If keep_polling is true or previe… _(parameters: token, wait)_
- **`get_live_site`** — Use this after the owner pays. If they have not paid, returns live=false and the preview URL. _(parameters: token)_

## Scan Augenix yourself, or claim its badge

Re-run this exact Augenix check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.augenix.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.augenix.ai/api/mcp/public&directory=true"
```

For the itemized findings on Augenix — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.augenix.ai/api/mcp/public"}`. If you
run `app.augenix.ai`, [claim a measured verified-owner badge for Augenix free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.augenix.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.augenix.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.augenix.ai/api/mcp/public)
```

Keeping the Augenix badge green as its tools change — six-hourly re-scans of `app.augenix.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.augenix.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

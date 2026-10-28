---
title: "Is the Can I Vibe? — AI coding provider status MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Can I Vibe? — AI coding provider status MCP server (https://canivibe.ai/mcp), run 2026-10-24: advertises ai_provider_status, check_provider_health; 2 tools scanned, injection verdict 'clear', 4 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Can I Vibe? — AI coding provider status MCP server — security & directory-readiness scorecard

**Server:** `https://canivibe.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory blocker(s)

Live status and health checks for AI coding providers: Claude, Cursor, Copilot, Codex and more.

When an agent connects Can I Vibe? — AI coding provider status, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`canivibe.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Can I Vibe? — AI coding provider status

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 blocker(s).** This server advertises 4 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Can I Vibe? — AI coding provider status server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Can I Vibe? — AI coding provider status server advertises

The server describes itself to connecting agents as: *Live availability for AI coding providers. Use check_provider_health before work that depends on a provider; use ai_provider_status for details.*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`ai_provider_status`** — Get the live status of AI coding providers (Claude, OpenAI, Copilot, Cursor, OpenRouter and more). Returns status, how long each provider has been in its current state, and last c… _(parameters: service_id)_
- **`check_provider_health`** — Check whether one or more AI coding providers are healthy enough to use right now. Returns healthy=true only when every requested provider is operational (or within the allowed st… _(parameters: allow_degraded, services)_

## Scan Can I Vibe? — AI coding provider status yourself, or claim its badge

Re-run this exact Can I Vibe? — AI coding provider status check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `canivibe.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://canivibe.ai/mcp&directory=true"
```

For the itemized findings on Can I Vibe? — AI coding provider status — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://canivibe.ai/mcp"}`. If you
run `canivibe.ai`, [claim a measured verified-owner badge for Can I Vibe? — AI coding provider status free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=canivibe.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcanivibe.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://canivibe.ai/mcp)
```

Keeping the Can I Vibe? — AI coding provider status badge green as its tools change — six-hourly re-scans of `canivibe.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `canivibe.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

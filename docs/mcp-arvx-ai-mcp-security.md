---
title: Is the ARVX MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the ARVX MCP server (https://mcp.arvx.ai/mcp), run 2026-10-24: 3 tools scanned, injection verdict 'clear', 3 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# ARVX MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.arvx.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 3 Claude Directory blocker(s)

Email for long-term client relationships: ARVX reads each person first and remembers every pair.

When an agent connects ARVX, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.arvx.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on ARVX

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 3 blocker(s).** This server advertises 3 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 3 advertised tool(s) name a state-changing action** (`arvx_run_reading`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the ARVX server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the ARVX server advertises

The server describes itself to connecting agents as: *ARVX reads two people from the emails between them: the person you work for (user) and a person they work with (other). It returns colors area by area, up to three predictions, what moved since the last Reading on the pair, and up to two lines on what is acti…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`arvx_get_access`** — How to get access to ARVX: the signup link to give the person, what they must do themselves, the price, and how to add their key to this connector. Call this when there is no key,…
- **`arvx_run_reading`** — Run a Reading on two people from the emails between them. Send at least 3 emails written by the user and 3 by the other person, oldest first. From the second Reading on a pair, se… _(parameters: user, other, emails, record)_
- **`arvx_record_summary`** — When someone asks what is held about them: returns every item in a saved record in plain words. Needs the record and both people's emails. Never uses up a Reading; 10 a month per… _(parameters: record, user, other, reason)_

## Scan ARVX yourself, or claim its badge

Re-run this exact ARVX check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.arvx.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.arvx.ai/mcp&directory=true"
```

For the itemized findings on ARVX — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.arvx.ai/mcp"}`. If you
run `mcp.arvx.ai`, [claim a measured verified-owner badge for ARVX free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.arvx.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.arvx.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.arvx.ai/mcp)
```

Keeping the ARVX badge green as its tools change — six-hourly re-scans of `mcp.arvx.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.arvx.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

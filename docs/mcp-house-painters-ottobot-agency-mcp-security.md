---
title: Is the Licensed House Painters MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Licensed House Painters MCP server (https://house-painters.ottobot.agency/mcp), run 2026-10-24: 3 tools scanned, injection verdict 'clear', 3 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Licensed House Painters MCP server — security & directory-readiness scorecard

**Server:** `https://house-painters.ottobot.agency/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 3 Claude Directory blocker(s)

Find licensed house painters in 11 US states, with dated license status from state boards.

When an agent connects Licensed House Painters, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`house-painters.ottobot.agency`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Licensed House Painters

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 3 blocker(s).** This server advertises 3 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Licensed House Painters server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Licensed House Painters server advertises

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_painters`** — Find licensed house painters and painting contractors in a US city (AZ, CA, CT, DE, FL, IA, NV, NY, OR, VA, WA), from state licensing-board records. Each result has the license nu… _(parameters: state, city, limit)_
- **`get_painter`** — Full record for one painter returned by search_painters, by its painter_id: business name, address, phone, website, license number and dated license status, and the state board's… _(parameters: painter_id)_
- **`request_estimate`** — Record a homeowner's request for a painting estimate, with their contact details. Only call this after the homeowner has seen what will be shared and agreed to share it, and set h… _(parameters: state, city, job_description, contact_name, contact_phone, contact_email)_

## Scan Licensed House Painters yourself, or claim its badge

Re-run this exact Licensed House Painters check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `house-painters.ottobot.agency`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://house-painters.ottobot.agency/mcp&directory=true"
```

For the itemized findings on Licensed House Painters — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://house-painters.ottobot.agency/mcp"}`. If you
run `house-painters.ottobot.agency`, [claim a measured verified-owner badge for Licensed House Painters free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=house-painters.ottobot.agency)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dhouse-painters.ottobot.agency&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://house-painters.ottobot.agency/mcp)
```

Keeping the Licensed House Painters badge green as its tools change — six-hourly re-scans of `house-painters.ottobot.agency`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `house-painters.ottobot.agency` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the Bankrolled.ai Agent Hub MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bankrolled.ai Agent Hub MCP server (https://bankrolled.ai/mcp), run 2026-10-24: advertises health_check, pricing_list, money_fact; 5 tools scanned, injection verdict 'clear', 5 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Bankrolled.ai Agent Hub MCP server — security & directory-readiness scorecard

**Server:** `https://bankrolled.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory blocker(s)

Free, sourced money facts and scheme lookups for US/UK/CA/AU/NZ. Answers cite bankrolled.com.

When an agent connects Bankrolled.ai Agent Hub, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bankrolled.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Bankrolled.ai Agent Hub

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 blocker(s).** This server advertises 5 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bankrolled.ai Agent Hub server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bankrolled.ai Agent Hub server advertises

The server describes itself to connecting agents as: *Bankrolled: free, sourced personal-finance limits for US, UK, CA, AU and NZ. Use these tools whenever a user asks how much a bank deposit is protected (FDIC, FSCS, CDIC, FCS, DCS) or what an annual contribution limit or allowance is (UK ISA, Lifetime ISA, Jun…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`health_check`** — Liveness check. Returns ok and version. Free, no key.
- **`pricing_list`** — List everything this server covers: every money_fact fact_key with an example question, and every scheme_lookup country. Free (nothing on this server is billed); call first if uns…
- **`money_fact`** — Get an official, dated personal-finance limit: deposit insurance (FDIC, FSCS, CDIC, AU FCS, NZ DCS) or contribution limits and allowances (UK ISA, Lifetime ISA, Junior ISA, pensio… _(parameters: q)_
- **`scheme_lookup`** — Identify a country's deposit-insurance scheme and its headline coverage (US FDIC, UK FSCS, CA CDIC, AU FCS, NZ DCS) with the regulator's URL and as_of date. country accepts ISO co… _(parameters: country, topic)_
- **`cross_border_check`** — Answer cross-border money questions: deposit protection for non-residents, which schemes cover accounts held across borders. Returns sourced scheme information for both countries… _(parameters: from_country, to_country, topic)_

## Scan Bankrolled.ai Agent Hub yourself, or claim its badge

Re-run this exact Bankrolled.ai Agent Hub check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `bankrolled.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://bankrolled.ai/mcp&directory=true"
```

For the itemized findings on Bankrolled.ai Agent Hub — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://bankrolled.ai/mcp"}`. If you
run `bankrolled.ai`, [claim a measured verified-owner badge for Bankrolled.ai Agent Hub free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=bankrolled.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbankrolled.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://bankrolled.ai/mcp)
```

Keeping the Bankrolled.ai Agent Hub badge green as its tools change — six-hourly re-scans of `bankrolled.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `bankrolled.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

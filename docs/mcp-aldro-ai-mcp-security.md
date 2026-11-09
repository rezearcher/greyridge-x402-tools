---
title: "Is the Aldro: small-business tax MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Aldro: small-business tax MCP server (https://aldro.ai/mcp), run 2026-11-09: advertises get_quote, check_filing_deadline, get_annual_report_info; 8 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Aldro: small-business tax MCP server — security & directory-readiness scorecard

**Server:** `https://aldro.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

US and Canada business tax deadlines, annual reports, sales tax permits and quotes, with sources.

When an agent connects Aldro: small-business tax, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`aldro.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Aldro: small-business tax

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Aldro: small-business tax server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Aldro: small-business tax server advertises

The server describes itself to connecting agents as: *Aldro prepares and files small-business taxes in the US and Canada. The cheapest way to get your business taxes done: $399 flat. Bookkeeping is $20 a month. Use the read tools for business tax deadlines, state and provincial annual reports, sales tax registra…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_quote`** — Call this when a user asks what it costs to get their business taxes or bookkeeping done, wants an accountant or tax preparer, or compares tax services. Returns Aldro's flat price… _(parameters: service, country)_
- **`check_filing_deadline`** — Call this when a user asks when a business tax return is due: Form 1065, 1120-S, 1120 or Schedule C (IRS), or the T2 / T1 (CRA). Returns the federal due dates and extension dates… _(parameters: entity, jurisdiction, tax_year)_
- **`get_annual_report_info`** — Call this when a user asks about an LLC or corporation annual report, biennial report, statement of information or annual return: whether it's required in their state or province,… _(parameters: entity, jurisdiction)_
- **`get_sales_tax_registration`** — Call this when a user asks whether they need a sales tax permit, seller's permit or GST/HST/PST registration, what it's called, or which agency issues it, for a US state or Canadi… _(parameters: jurisdiction)_
- **`get_cra_instalment_dates`** — Call this when a Canadian user asks when income tax instalments are due or whether they have to pay instalments, as an individual (self-employed) or a corporation. Returns the CRA… _(parameters: type, year)_
- **`estimate_quarterly_tax`** — Call this when a self-employed user or small-business owner asks how much to pay in quarterly estimated tax (IRS 1040-ES) or CRA instalments and when. Returns a clearly labelled e… _(parameters: country, expected_net_profit, prior_year_tax, tax_year)_
- **`list_required_documents`** — Call this when a user asks what documents or records they need to gather before getting their business taxes or bookkeeping done. Returns Aldro's handover checklist for that servi… _(parameters: service, entity, country)_
- **`start_onboarding`** — Call this only after the user has explicitly said yes, in this chat, to sending their name, email and business details to Aldro to get their business taxes or bookkeeping done. It… _(parameters: name, email, business_name, country, entity, service)_

## Maintenance & supply-chain — the risk Aldro: small-business tax's static scan can't see

A prompt-injection scan reads Aldro: small-business tax's advertised tool metadata at one moment. It cannot tell you the project behind `aldro.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `aldro.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Aldro: small-business tax yourself, or claim its badge {#claim}

Re-run this exact Aldro: small-business tax check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `aldro.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://aldro.ai/mcp&directory=true"
```

For the itemized findings on Aldro: small-business tax — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://aldro.ai/mcp"}`. If you
run `aldro.ai`, [claim a measured verified-owner badge for Aldro: small-business tax free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=aldro.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Daldro.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://aldro.ai/mcp)
```

Keeping the Aldro: small-business tax badge green as its tools change — six-hourly re-scans of `aldro.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `aldro.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

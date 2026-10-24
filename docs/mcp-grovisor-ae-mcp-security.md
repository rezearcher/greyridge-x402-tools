---
title: "Is the groTAX by Grovisor MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the groTAX by Grovisor MCP server (https://mcp.grovisor.ae/), run 2026-10-24: advertises grotax_compute_ct, grotax_health_check, grotax_list_health_questions; 8 tools scanned, injection verdict 'clear', 8 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# groTAX by Grovisor MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.grovisor.ae/`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory blocker(s)

UAE Corporate Tax: CT computation, SBR, penalties, free zone test, TP and health-check.

When an agent connects groTAX by Grovisor, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.grovisor.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on groTAX by Grovisor

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 blocker(s).** This server advertises 8 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 8 advertised tool(s) name a state-changing action** (`grotax_compute_ct`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the groTAX by Grovisor server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the groTAX by Grovisor server advertises

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`grotax_compute_ct`** — Estimate UAE Corporate Tax using the Grovisor computation (rows A–K): AED 375,000 0% band then 9%, 50% entertainment add-back, interest cap (higher of AED 12m or 30% of adjusted E… _(parameters: accountingProfit, revenue, periodEnd, lossesBF, entertainment, fines)_
- **`grotax_health_check`** — Run the Grovisor CT reviewer red-flag checklist (SBR, free zone/QFZP, TP disclosure and Local/Master File, connected-person pay, related-party loans, entertainment, fines, interes… _(parameters: answers)_
- **`grotax_list_health_questions`** — List the groTAX health-check questions with their answer keys and allowed values, including which questions only apply after others (dependsOn). Use before grotax_health_check.
- **`grotax_tp_thresholds`** — Check which UAE transfer pricing documents apply: TP Disclosure Form (related-party transactions AED 40m with a category AED 4m, or connected-person payments AED 0.5m), Local File… _(parameters: revenue, relatedPartyTotal, relatedPartyLargestCategory, connectedPersonPayments, mneGroup)_
- **`grotax_compare_sbr`** — Compute the same facts with and without Small Business Relief (revenue ≤ AED 3m, periods ending by 31 Dec 2029). Shows tax payable and what carries forward each way: in an SBR yea… _(parameters: accountingProfit, revenue, periodEnd, lossesBF, entertainment, fines)_
- **`grotax_penalties`** — Return and payment due date (9 months after period end) and estimated penalties: late filing AED 500 a month for 12 months then AED 1,000, late payment 14% a year charged monthly… _(parameters: periodEnd, taxDue, filingDate, paymentDate, lateRegistration, firstPeriod)_
- **`grotax_qfzp_de_minimis`** — Test whether a free zone company's non-qualifying revenue stays within the de minimis limit: the lower of 5% of total revenue or AED 5m (MD 229 of 2025). Failing it ends Qualifyin… _(parameters: totalRevenue, nonQualifyingRevenue)_
- **`grotax_get_rules`** — List every rate and threshold groTAX uses, with its legal source and whether it still needs verification (verify: true).

## Scan groTAX by Grovisor yourself, or claim its badge

Re-run this exact groTAX by Grovisor check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.grovisor.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.grovisor.ae/&directory=true"
```

For the itemized findings on groTAX by Grovisor — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.grovisor.ae/"}`. If you
run `mcp.grovisor.ae`, [claim a measured verified-owner badge for groTAX by Grovisor free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.grovisor.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.grovisor.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.grovisor.ae/)
```

Keeping the groTAX by Grovisor badge green as its tools change — six-hourly re-scans of `mcp.grovisor.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.grovisor.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

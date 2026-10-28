---
title: "Is the Spoon Scout - Food Contaminant Lookup MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Spoon Scout - Food Contaminant Lookup MCP server (https://food.agentlookups.ai/mcp), run 2026-10-26: advertises check_product, chemical_sources, compare_products; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Spoon Scout - Food Contaminant Lookup MCP server — security & directory-readiness scorecard

**Server:** `https://food.agentlookups.ai/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Lab results, FDA recalls and additive rules for US packaged foods, with sources; never a grade.

When an agent connects Spoon Scout - Food Contaminant Lookup, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`food.agentlookups.ai`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on Spoon Scout - Food Contaminant Lookup

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 6 advertised tool(s) name a state-changing action** (`additive_status`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Spoon Scout - Food Contaminant Lookup server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Spoon Scout - Food Contaminant Lookup server advertises

The server describes itself to connecting agents as: *Spoon Scout reports what has been published about contaminants in US packaged foods, from government and openly licensed data: product-level lab results (heavy metals from California AB 899 maker disclosures, NYC Health, Healthy Babies Bright Futures and othe…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_product`** — Looks up one US packaged food by barcode (UPC/EAN/GTIN), id, or name, and returns what is known about it: lab results by chemical (with kind of evidence, sample counts, median and… _(parameters: barcode, id, query)_
- **`chemical_sources`** — For one contaminant (lead, cadmium, mercury, arsenic-total, arsenic-inorganic, perchlorate, a phthalate such as dehp or dbp, a substitute such as deht, or a bisphenol such as bpa)… _(parameters: chemical)_
- **`compare_products`** — Lines up two to five products (by id) chemical by chemical, using each product's own lab results where they exist and FDA's typical level for its kind of food otherwise (marked as… _(parameters: ids)_
- **`food_category`** — For a kind of food (a category slug such as milk, rice, baby-infant-foods-beverages, cereal, water), returns FDA's typical levels of metals and perchlorate, whether FDA's foods ar… _(parameters: all, category, order, sort)_
- **`additive_status`** — Returns where an additive is allowed, restricted, banned or requires a warning (US FDA, EU, and US states such as California, West Virginia, Texas and Louisiana), each with its la… _(parameters: additive)_
- **`interpret_test_result`** — Places a person's urine or blood test result among CDC NHANES population percentiles (newest survey cycle loaded), for everyone or one age group, and says in words how high it is.… _(parameters: age, chemical, unit, value)_

## Scan Spoon Scout - Food Contaminant Lookup yourself, or claim its badge

Re-run this exact Spoon Scout - Food Contaminant Lookup check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `food.agentlookups.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://food.agentlookups.ai/mcp&directory=true"
```

For the itemized findings on Spoon Scout - Food Contaminant Lookup — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://food.agentlookups.ai/mcp"}`. If you
run `food.agentlookups.ai`, [claim a measured verified-owner badge for Spoon Scout - Food Contaminant Lookup free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=food.agentlookups.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dfood.agentlookups.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://food.agentlookups.ai/mcp)
```

Keeping the Spoon Scout - Food Contaminant Lookup badge green as its tools change — six-hourly re-scans of `food.agentlookups.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `food.agentlookups.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

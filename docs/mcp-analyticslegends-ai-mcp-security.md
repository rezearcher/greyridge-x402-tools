---
title: Is the analyticslegends.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the analyticslegends.ai MCP server (https://analyticslegends.ai/mcp), run 2026-10-24: advertises search_firms, count_firms_by, get_firm; 22 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# analyticslegends.ai MCP server — security & directory-readiness scorecard

**Server:** `https://analyticslegends.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 22 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

SAP AI & analytics market data for agents: SAP firms, day rates, jobs, Joule & BDC news.

When an agent connects analyticslegends.ai, the model reads all 22 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`analyticslegends.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on analyticslegends.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 22 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 22 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 22 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the analyticslegends.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the analyticslegends.ai server advertises

The server describes itself to connecting agents as: *Analytics Legends is a curated SAP AI & Analytics market-intelligence platform (SAP Business AI and Joule, SAP Datasphere, Business Data Cloud, SAP Analytics Cloud, BW/4HANA, Databricks) run by a single named editor. This endpoint serves the PUBLIC tranche re…*

These are the 22 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_firms`** — Search the published Analytics Legends directory of SAP AI & analytics service providers — placement agencies, Big-4 and ESN practices, SAP vendors, platforms and community groups… _(parameters: query, country, region, kind, module, limit)_
- **`count_firms_by`** — Answer a COUNTING question about the published firm directory in one call: how many organisations per country, per REGION (the six-value geography), per kind, per declared SAP mod… _(parameters: by, query, country, region, kind, module)_
- **`get_firm`** — Fetch one organisation from the published directory by its database slug ('rows[].slug' from search_firms, verbatim). Returns the same public fields plus 'partnerships_declared',… _(parameters: slug)_
- **`list_firm_kinds`** — Breakdown of the published firm directory by organisation kind, with a live row count per kind. Use this before search_firms to know what the population actually is instead of gue…
- **`list_freelance_platforms`** — The subset of the published directory where a consultant can CREATE A PROFILE — freelance marketplaces, job boards with candidate profiles, talent platforms and expert networks —… _(parameters: country, platform_type, limit, cursor)_
- **`find_opportunities`** — Search every SAP contract and permanent-role posting Analytics Legends publishes to an ANONYMOUS visitor. Only the SITE RADAR leg below is the population a human browses on /oppor… _(parameters: query, location, country, employment_type, remote_mode, eligibility)_
- **`search_news`** — Search the Analytics Legends market-news corpus. It is watched FOR SAP AI & analytics (Datasphere, Business Data Cloud, SAC, BW/4HANA, Databricks, the 2027/2030 maintenance window… _(parameters: query, category, published_since, published_until, limit, cursor)_
- **`search_concepts`** — Search the SAP AI & analytics concept encyclopaedia — the vocabulary of the stack, written for practitioners. Returns slug, title, category, level, tags and the editor's summary.… _(parameters: query, category, limit, cursor)_
- **`get_concept`** — Fetch one concept entry by slug: title, category, level, tags and the editor's summary. Written by a named human editor, not generated. 'level' is GRADED on every active row since… _(parameters: slug)_
- **`list_studies`** — List the Analytics Legends deep-research studies with their edition, as-of date, audience, word count and canonical URL. METADATA ONLY: study bodies are a paid Consultant-tier del… _(parameters: query, lang, limit, cursor)_
- **`get_day_rate_benchmark`** — The PUBLIC day-rate aggregate for SAP AI & analytics freelance work: min/max daily rate by country, specialisation and seniority — 'daily_rate_min' / 'daily_rate_max' (plus 'daily… _(parameters: country, specialisation, seniority)_
- **`list_sap_modules`** — The canonical SAP module/product taxonomy Analytics Legends classifies against (codes and EN/FR labels by category). Use it to normalise a user's loose product wording — 'SAC', 'A… _(parameters: query, limit, cursor)_
- **`find_academy_modules`** — Search the Analytics Legends Academy — the written training modules on SAP Datasphere, Business Data Cloud, SAP Analytics Cloud, BW/4HANA and Databricks — by track, level and free… _(parameters: query, track, level, limit, cursor)_
- **`query_knowledge_graph`** — The RELATIONS between the platform's teaching objects — which Academy module teaches which concept, which study covers which module, what a concept relates to. THIS IS THE ONLY TO… _(parameters: node_id, node_type, edge_type, direction, query, lang)_
- **`get_concept_card`** — The FULL encyclopaedia card for one concept — body, cheat sheet, glossary, pro tip, and the four analysis tables (decision table, peer comparison, named pitfalls, performance fact… _(parameters: slug)_
- **`get_study`** — Read one Analytics Legends study BODY — the paid text behind list_studies' metadata. Requires a subscriber API key, Consultant tier or above. Bodies run to 38k words and exceed th… _(parameters: slug, lang, section)_
- **`get_academy_module`** — Read one Academy training module in full — body, learning objectives and summary, EN, FR and DE — the written course corpus the €29.90 Consultant Pass sells. On THIS endpoint the… _(parameters: id)_
- **`find_sap_clients`** — Search the SAP END-CUSTOMER corpus — the companies that RUN SAP, not the firms that sell services (those are search_firms). This is the paid Legend+ dataset locked away from the p… _(parameters: query, country, industry, product, limit, cursor)_
- **`get_sap_client_profile`** — The full profile of one SAP end-customer — SAP footprint (products in use, modules known), analytics solutions, identity and evidence fields. Requires a subscriber API key, Legend… _(parameters: id)_
- **`get_expansion_brief`** — The one-call brief a services practice reads before opening a subsidiary in another region: providers already there (by kind and by country, and how many are LOCAL entities versus… _(parameters: target_region, home_region)_
- **`find_partner_candidates`** — Rank the LOCAL service providers of a target country or region — the firms a practice partners with, subcontracts to, or acquires to enter a market. 'local_only' (default true) ke… _(parameters: country, region, kind, module, local_only, limit)_
- **`get_firm_intel`** — The paid intelligence profile of a services firm — SAP practice size and partner level, delivery flags per product, typical day rate and seniority, notable clients, analytics prac… _(parameters: name, country, delivers, mode, limit, cursor)_

## Scan analyticslegends.ai yourself, or claim its badge

Re-run this exact analyticslegends.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `analyticslegends.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://analyticslegends.ai/mcp&directory=true"
```

For the itemized findings on analyticslegends.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://analyticslegends.ai/mcp"}`. If you
run `analyticslegends.ai`, [claim a measured verified-owner badge for analyticslegends.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=analyticslegends.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Danalyticslegends.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://analyticslegends.ai/mcp)
```

Keeping the analyticslegends.ai badge green as its tools change — six-hourly re-scans of `analyticslegends.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `analyticslegends.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the analyticslegends.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the analyticslegends.ai MCP server (https://analyticslegends.ai/mcp), run 2026-11-16: advertises find_answers, search_firms, count_firms_by; 25 tools scanned, injection verdict 'clear', 25 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# analyticslegends.ai MCP server — security & directory-readiness scorecard

**Server:** `https://analyticslegends.ai/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 25 · **Injection verdict:** `clear` · **Directory:** 25 Claude Directory quality item(s) to polish (no hard rejects)

SAP AI & analytics market data for agents: SAP firms, day rates, jobs, Joule & BDC news.

When an agent connects analyticslegends.ai, the model reads all 25 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`analyticslegends.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on analyticslegends.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 25 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 25 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 25 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 25 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the analyticslegends.ai server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the analyticslegends.ai server advertises

The server describes itself to connecting agents as: *Analytics Legends serves read-only data on the SAP AI & analytics services market (Joule, Datasphere, Business Data Cloud, SAC, BW/4HANA, Databricks): firms, postings, day rates, news, concepts, studies, Academy. For a problem ("what happens to BW 7.5"), call…*

These are the 25 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_answers`** — Start here for an SAP AI & analytics PROBLEM, asked in EN, FR or DE (agents in production, Joule value, BW 7.5 cliff, BDC vs Datasphere vs Databricks…). Returns up to 3 tracked ch… _(parameters: question, audience, lang)_
- **`search_firms`** — Search SAP AI & analytics service providers (consultancies, Big-4, agencies, SAP partners, platforms). Returns slug, name, HQ, website, claim, sap_signal_band; SAP end-customers a… _(parameters: query, country, region, kind, module, limit)_
- **`count_firms_by`** — Count the firm directory by country, region, kind, module or sap_signal_band, with search_firms' filters, instead of paging search_firms to tally. Rows: value, n; the tail folds i… _(parameters: by, query, country, region, kind, module)_
- **`get_firm`** — One firm's public profile by its slug from search_firms (verbatim; some slugs are numeric). A brand name such as 'accenture' returns the list of its entities to choose from. Publi… _(parameters: slug)_
- **`list_firm_kinds`** — The organisation kinds of the firm directory with a live count each — the vocabulary of search_firms' 'kind'. Public, complete without a key.
- **`list_freelance_platforms`** — Platforms where an SAP consultant can create a profile (freelance marketplaces, job boards, expert networks), with signup URL, confidence grade and assessment date. Public, comple… _(parameters: country, platform_type, limit, cursor)_
- **`find_opportunities`** — Search public SAP AI & analytics postings. Mostly PERMANENT roles: set employment_type for freelance questions. A posting listed in several cities is one row with 'locations'. Pub… _(parameters: query, location, country, employment_type, remote_mode, eligibility)_
- **`search_news`** — Search the curated SAP AI & analytics news corpus; defaults to SAP-specific items (scope 'sap'). Each item carries source_url (the publisher) and citation_url: cite both. Public. _(parameters: query, category, scope, published_since, published_until, limit)_
- **`search_concepts`** — Search the SAP AI & analytics concept encyclopaedia (the stack's vocabulary): slug, title, category, level, editor's summary. Full card: get_concept_card (paid). Public. _(parameters: query, category, limit, cursor)_
- **`get_concept`** — One concept's metadata and editor's summary by slug from search_concepts (e.g. 'sap-business-data-cloud-bdc'). The card body, cheat sheet and tables are paid (get_concept_card). P… _(parameters: slug)_
- **`list_studies`** — List the deep-research studies: title, edition, as-of date, audience, word count, citation_url, one row per study in the language asked. Metadata only; the text is get_study (paid… _(parameters: query, lang, limit, cursor)_
- **`get_day_rate_benchmark`** — Published SAP freelance day-rate aggregate by country, specialisation and seniority: min/max (median, p10, p90 when sourced) in the row's currency, with source, date and confidenc… _(parameters: country, specialisation, seniority)_
- **`list_sap_modules`** — The SAP module/product taxonomy (codes such as DATASPHERE, BDC, SAC, BW4HANA with labels) that other tools filter on; use it to map loose wording to a code. Public, complete witho… _(parameters: query, limit, cursor)_
- **`find_academy_modules`** — Search the Academy training catalogue (Datasphere, BDC, SAC, BW/4HANA, Databricks) by text, track or level. Rows are in the language asked. Full text: get_academy_module (paid). P… _(parameters: query, track, level, library, lang, limit)_
- **`query_knowledge_graph`** — Relations between concepts, Academy modules, studies and vendors: list nodes (node_type, query) or one node's edges (node_id). The only tool that serves edges. Public. _(parameters: node_id, node_type, edge_type, direction, query, lang)_
- **`get_concept_card`** — The full concept card: body, cheat sheet, glossary, pro tip and the four analysis tables, EN/FR/DE. Paid: MCP Pass or Firm Pass key. _(parameters: slug)_
- **`get_study`** — Read a study's text: without 'section' returns the section list and introduction, then pass a heading as 'section'. Slugs from list_studies. Paid: MCP Pass or Firm Pass key. _(parameters: slug, lang, section)_
- **`get_academy_module`** — Read one Academy module in full (body, objectives, summary) by id or slug from find_academy_modules; 'lang' picks one language. Paid: MCP Pass or Firm Pass key. _(parameters: id, lang)_
- **`find_sap_clients`** — Search the SAP END-CUSTOMER corpus (companies that run SAP); each row says its verification status. Paid: MCP Pass or Firm Pass key. _(parameters: query, country, industry, product, limit, cursor)_
- **`get_sap_client_profile`** — One SAP end-customer's full profile (products in use, modules, analytics solutions, evidence) by id from find_sap_clients. Paid: MCP Pass or Firm Pass key. _(parameters: id)_
- **`get_expansion_brief`** — Brief for entering a region: providers there (local vs group), SAP end-customer counts by country and industry, live opportunities, brand families present in both regions. Paid: M… _(parameters: target_region, home_region)_
- **`find_partner_candidates`** — Rank local service providers of a country or region as partner or acquisition candidates; local_only (default) excludes foreign groups' subsidiaries. Paid: MCP Pass or Firm Pass k… _(parameters: country, region, kind, module, local_only, limit)_
- **`get_firm_intel`** — Intelligence profile of a services firm: SAP practice size, partner level, products delivered, typical day rate, notable clients. Search by name, country, product or engagement mo… _(parameters: name, country, delivers, mode, limit, cursor)_
- **`submit_brief`** — ACTION: deposit an SAP need as a private brief, matched every 6 h against consenting consultants; nothing is e-mailed. Paid: MCP Pass or Firm Pass key. _(parameters: title, sap_products, country, languages, context, remote_policy)_
- **`request_introduction`** — ACTION: a brief's anonymised selection, or with candidate_ref an introduction request the consultant answers in the app. Paid: MCP Pass or Firm Pass key. _(parameters: need_id, candidate_ref)_

## Maintenance & supply-chain — the risk analyticslegends.ai's static scan can't see

A prompt-injection scan reads analyticslegends.ai's advertised tool metadata at one moment. It cannot tell you the project behind `analyticslegends.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 29 day(s) ago, 1 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `analyticslegends.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan analyticslegends.ai yourself, or claim its badge {#claim}

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
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

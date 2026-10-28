---
title: "Is the Builders in Fintech MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Builders in Fintech MCP server (https://buildersinfintech.ai/mcp), run 2026-10-24: advertises search_organizations, get_organization, search_people; 23 tools scanned, injection verdict 'clear', 23 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Builders in Fintech MCP server — security & directory-readiness scorecard

**Server:** `https://buildersinfintech.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 23 · **Injection verdict:** `clear` · **Directory:** 23 Claude Directory blocker(s)

Fintech companies, products, investors, funding rounds, news, podcast. Free, keyless, CC BY 4.0.

When an agent connects Builders in Fintech, the model reads all 23 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`buildersinfintech.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Builders in Fintech

- **No tool-poisoning or prompt-injection patterns** were found across the 23 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 23 blocker(s).** This server advertises 23 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 23 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 23 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Builders in Fintech server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Builders in Fintech server advertises

The server describes itself to connecting agents as: *Read-only access to the Builders in Fintech database: fintech companies, investors, people, funding rounds, events and published articles, newsletter issues and podcast episodes. Only editorially approved, published records are returned, and every row carries…*

These are the 23 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_organizations`** — Search fintech companies and investors by name, kind or country. Returns public profiles with canonical URLs. Arguments: q (or query): text to search for, matched against the name… _(parameters: q, query, kind, country, limit)_
- **`get_organization`** — Full public profile for one organization by slug: description, country, funding rounds (raised or led), people, any disclosure, editor_disclosure (current when the editor holds eq… _(parameters: slug)_
- **`search_people`** — Search founders, operators and investors covered by the publication. Arguments: q (or query): text to search for, matched against the full name. With no q the tool returns a plain… _(parameters: q, query, limit)_
- **`get_person`** — Full public profile for one person by slug: bio, roles and coverage. _(parameters: slug)_
- **`list_funding_rounds`** — Approved funding rounds, newest first, with optional filters and keyset pagination. Pass the returned next_cursor fields (after_date, after_id) to get the next page. _(parameters: country, topic, category, round_type, currency, amount_min)_
- **`largest_rounds`** — Largest disclosed equity rounds, ranked per currency (amounts are never converted between currencies). _(parameters: year, per_currency)_
- **`most_active_investors`** — Investors ranked by the number of approved rounds they appear in. Category defaults to equity. With a country, only rounds of companies headquartered in that country are counted;… _(parameters: country, category, from, to, limit)_
- **`funding_summary`** — Counts for a slice of the funding database: rounds, countries, totals per announced currency, undisclosed rounds and rounds per category. Note: rounds, per_currency and undisclose… _(parameters: from, to, country, topic)_
- **`get_funding_index`** — The weekly Builders Fintech Funding Index of approved equity rounds (ISO weeks). Arguments: week (optional, 'YYYY-Www', e.g. '2026-W39') returns that week; otherwise the latest we… _(parameters: week, weeks)_
- **`get_investor_scorecard`** — Follow-on scorecard for one investor by slug: of the portfolio companies it first backed at least the window ago, the share that raised a later approved round (equity or IPO) with… _(parameters: slug)_
- **`search_products`** — Search fintech products by text, category, market, API availability, agent access (has_mcp, has_sandbox, has_api) or customer type. Each product carries an agent_access object (ap… _(parameters: q, query, category, country, api_available, customer_type)_
- **`get_product`** — Full public listing for one product by slug: description, category, markets, customer type, API, pricing model, links, the company and an agent_access object (api_available, docs_… _(parameters: slug)_
- **`find_providers`** — Find companies by product category, licence (licensed_in matches the home country or any passported country), licence type, authority, and agent access (has_sandbox, has_mcp, has_… _(parameters: category, licensed_in, licence_type, authority, has_sandbox, has_mcp)_
- **`list_provider_filters`** — Valid values for find_providers: product category slugs, licence type slugs, authority slugs, and the ISO codes of countries that have at least one public licence (home or passpor…
- **`search_content`** — Full-text search across published news, newsletter issues, podcast episodes, public entity pages, funding rounds and products. Result kinds: news, newsletter, podcast, company, in… _(parameters: q, query, kinds, limit)_
- **`get_content`** — One published item by type and slug, with its body text (truncated), topics, countries, organizations and people. News items also include a corrections array (date + note), newest… _(parameters: content_type, slug)_
- **`search_podcast_knowledge`** — Search attributed facts and question-and-answer pairs from Builders in Fintech podcast episodes (as stated by the guest, not independently verified). Arguments: q (or query) match… _(parameters: q, query, organization, person, fact_type, episode)_
- **`list_events`** — Approved fintech events, upcoming by default, with optional country, format, topic and month filters. _(parameters: upcoming, country, format, topic, month, limit)_
- **`list_topics`** — Every public topic with its slug and URL, for use as a filter in the other tools.
- **`list_countries`** — Countries that have public coverage, with company and content counts.
- **`get_daily_digest`** — One edition of the Builders in Fintech daily digest (weekdays): the equity rounds that became public in its window (largest first within USD, EUR, GBP, then other currencies; neve… _(parameters: date)_
- **`list_raising`** — Fintech companies that pitched Builders in Fintech and opted in to a public listing while they raise: company name, website, one-liner, stage, country, target raise (never convert… _(parameters: featured_only)_
- **`about`** — What this database covers, how to cite it, and where the bulk downloads live.

## Scan Builders in Fintech yourself, or claim its badge

Re-run this exact Builders in Fintech check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `buildersinfintech.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://buildersinfintech.ai/mcp&directory=true"
```

For the itemized findings on Builders in Fintech — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://buildersinfintech.ai/mcp"}`. If you
run `buildersinfintech.ai`, [claim a measured verified-owner badge for Builders in Fintech free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=buildersinfintech.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbuildersinfintech.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://buildersinfintech.ai/mcp)
```

Keeping the Builders in Fintech badge green as its tools change — six-hourly re-scans of `buildersinfintech.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `buildersinfintech.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

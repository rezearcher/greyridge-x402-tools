---
title: "Is the Vera MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Vera MCP server (https://vera.waggle.ae/v1/mcp), run 2026-10-24: advertises scrape, search, extract_contacts; 16 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Vera MCP server — security & directory-readiness scorecard

**Server:** `https://vera.waggle.ae/v1/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 16 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Scrape, search and extract the public web. 3,000 free credits at https://vera.waggle.ae/signup.

When an agent connects Vera, the model reads all 16 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`vera.waggle.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Vera

- **No tool-poisoning or prompt-injection patterns** were found across the 16 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 16 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 16 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Vera server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Vera server advertises

The server describes itself to connecting agents as: *Vera reads public web pages and searches the web: scrape, search, contacts, products, YouTube transcripts, company profiles, sitemaps and SEO audits. It also returns Google results with the page's features, forum threads, local and shopping listings, keyword…*

These are the 16 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`scrape`** — Read one public web page and return its content: the main text (as Markdown with response_format="markdown"), links, metadata and a quality score, plus the raw HTML if you ask (re… _(parameters: url, response_format, return_html, render, wait_ms, wait_for)_
- **`search`** — Search Google and return the results: titles, URLs and snippets, plus Google's own answer boxes, People Also Ask and related searches when it shows them. vertical picks web (the d… _(parameters: query, vertical, country, language, limit, idempotency_key)_
- **`extract_contacts`** — Read one public page and return the contact details it publishes: email addresses, phone numbers, social profile links and links to contact pages, each with where it was found. Pu… _(parameters: url, idempotency_key)_
- **`extract_products`** — Read one public product page and return the product data it publishes in its structured markup: name, brand, SKU or GTIN, and offers with price, currency and availability. Prices… _(parameters: url, marketplace, idempotency_key)_
- **`youtube_transcript`** — Return the transcript of one public YouTube video as text. Costs 6 credits per started minute of video (a 10-minute video costs 60), up to 45 minutes. A video that cannot be trans… _(parameters: url, idempotency_key)_
- **`company_profile`** — Given a company's domain, read its homepage and up to 3 standard pages (about, contact, team) and return a profile: name, description, logo, address, founding date, emails, phones… _(parameters: domain, idempotency_key)_
- **`sitemap`** — Read a site's sitemap.xml (or a sitemap index) and return the page addresses it lists, up to limit (100 by default), optionally only those containing some text. Costs 1 credit; a… _(parameters: url, limit, filter_pattern, idempotency_key)_
- **`seo_audit`** — Audit one public page's technical SEO and how ready it is for AI search: title, description, canonical, robots and indexing directives, headings, links, images, structured data an… _(parameters: url, render, country, idempotency_key)_
- **`google_serp`** — Execute a full Google SERP search query with strict Google provenance (depth 10 to 100). Returns verified Google organic results with classification tagging (forums, video, ecomme… _(parameters: query, location, gl, hl, depth, local_pack)_
- **`find_discussion_candidates`** — Search Google and filter organic results (positions 1-100) specifically for community discussions and forum threads (Reddit, Quora, HackerNews, StackExchange, niche forums). Ideal… _(parameters: query, location, gl, hl, depth, fresh)_
- **`extract_local_places`** — Extract Google Local Pack (3-pack) and Google Places listings for local queries. Returns place_id/cid, title, rating, review count, address, latitude/longitude, category, phone, a… _(parameters: query, location, gl, hl, fresh, idempotency_key)_
- **`extract_shopping_results`** — Extract Google Shopping carousel listings for e-commerce and product queries. Returns product title, price, currency, merchant, rating, reviews, image URL, link, and product ID. T… _(parameters: query, location, gl, hl, fresh, idempotency_key)_
- **`geo_citation_radar`** — Run GEO Citation & Injection Radar for a topic query and brand. Calculates citation probability score (0-100), identifies high-impact Reddit/Quora threads with injection playbooks… _(parameters: query, brand, domain, location, gl, hl)_
- **`company_serp_footprint`** — Audit a company's SERP digital footprint, brand reputation, owned domains, and entity profiles. Separates owned web properties, social/entity profiles (Wikipedia, LinkedIn, Instag… _(parameters: company, domain, location, gl, hl, depth)_
- **`keyword_ideas`** — Keyword ideas for a seed keyword from Google autocomplete (the seed plus question words or the alphabet), People Also Ask and related searches, cleaned and de-duplicated. Each ide… _(parameters: seed, gl, hl, location, location_code, limit)_
- **`ai_answers`** — Put a buyer's question to an AI assistant that searches the live web, and see whether a brand and its competitors are named in the answer, in what rank, with the citations and cit… _(parameters: prompt, brand, brand_domain, competitors, country, language)_

## Scan Vera yourself, or claim its badge

Re-run this exact Vera check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `vera.waggle.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://vera.waggle.ae/v1/mcp&directory=true"
```

For the itemized findings on Vera — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://vera.waggle.ae/v1/mcp"}`. If you
run `vera.waggle.ae`, [claim a measured verified-owner badge for Vera free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=vera.waggle.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dvera.waggle.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://vera.waggle.ae/v1/mcp)
```

Keeping the Vera badge green as its tools change — six-hourly re-scans of `vera.waggle.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `vera.waggle.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

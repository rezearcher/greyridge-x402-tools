---
title: "Is the Fenlight MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Fenlight MCP server (https://fenlight.waggle.ae/mcp), run 2026-10-24: advertises google_serp, find_discussion_candidates, extract_local_places; 8 tools scanned, injection verdict 'clear', 8 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Fenlight MCP server — security & directory-readiness scorecard

**Server:** `https://fenlight.waggle.ae/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory blocker(s)

Google search results, forum threads, local and shopping data, keyword ideas, AI answer tracking.

When an agent connects Fenlight, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`fenlight.waggle.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Fenlight

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 blocker(s).** This server advertises 8 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Fenlight server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Fenlight server advertises

The server describes itself to connecting agents as: *Fenlight returns Google search results, forum discussions, local and shopping data, keyword ideas, brand footprints and what AI assistants answer about a brand, with the engine named on every result. initialize and tools/list are open; tools/call needs a Vera…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`google_serp`** — Execute a full Google SERP search query with strict Google provenance (depth 10 to 100). Returns verified Google organic results with classification tagging (forums, video, ecomme… _(parameters: query, location, gl, hl, depth, local_pack)_
- **`find_discussion_candidates`** — Search Google and filter organic results (positions 1-100) specifically for community discussions and forum threads (Reddit, Quora, HackerNews, StackExchange, niche forums). Ideal… _(parameters: query, location, gl, hl, depth, fresh)_
- **`extract_local_places`** — Extract Google Local Pack (3-pack) and Google Places listings for local queries. Returns place_id/cid, title, rating, review count, address, latitude/longitude, category, phone, a… _(parameters: query, location, gl, hl, fresh)_
- **`extract_shopping_results`** — Extract Google Shopping carousel listings for e-commerce and product queries. Returns product title, price, currency, merchant, rating, reviews, image URL, link, and product ID. _(parameters: query, location, gl, hl, fresh)_
- **`geo_citation_radar`** — Run GEO Citation & Injection Radar for a topic query and brand. Calculates citation probability score (0-100), identifies high-impact Reddit/Quora threads with injection playbooks… _(parameters: query, brand, domain, location, gl, hl)_
- **`company_serp_footprint`** — Audit a company's SERP digital footprint, brand reputation, owned domains, and entity profiles. Separates owned web properties, social/entity profiles (Wikipedia, LinkedIn, Instag… _(parameters: company, domain, location, gl, hl, depth)_
- **`keyword_ideas`** — Keyword ideas for a seed keyword from Google autocomplete (the seed plus question words or the alphabet), People Also Ask and related searches, cleaned and de-duplicated. Each ide… _(parameters: seed, gl, hl, location, location_code, limit)_
- **`ai_answers`** — Put a buyer's question to an AI assistant that searches the live web, and see whether a brand and its competitors are named in the answer, in what rank, with the citations and cit… _(parameters: prompt, brand, brand_domain, competitors, country, language)_

## Scan Fenlight yourself, or claim its badge

Re-run this exact Fenlight check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `fenlight.waggle.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://fenlight.waggle.ae/mcp&directory=true"
```

For the itemized findings on Fenlight — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://fenlight.waggle.ae/mcp"}`. If you
run `fenlight.waggle.ae`, [claim a measured verified-owner badge for Fenlight free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=fenlight.waggle.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dfenlight.waggle.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://fenlight.waggle.ae/mcp)
```

Keeping the Fenlight badge green as its tools change — six-hourly re-scans of `fenlight.waggle.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `fenlight.waggle.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the AgentsIndex MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AgentsIndex MCP server (https://agentsindex.ai/mcp), run 2026-10-24: advertises search_listings, get_listing, list_categories; 12 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AgentsIndex MCP server — security & directory-readiness scorecard

**Server:** `https://agentsindex.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 12 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

The editors' index of AI-native software, from AI agents to the models and frameworks behind them.

When an agent connects AgentsIndex, the model reads all 12 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentsindex.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AgentsIndex

- **No tool-poisoning or prompt-injection patterns** were found across the 12 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **2 of 12 advertised tool(s) name a state-changing action** (`send_lead`, `create_order`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 12 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AgentsIndex server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AgentsIndex server advertises

The server describes itself to connecting agents as: *Read AgentsIndex's researched tools: search_listings to find, get_listing for the full answer-first markdown, list_categories for the taxonomy, compare_listings / get_best_of for decisions. All read tools are free and keyless; use is licensed, not uncondition…*

These are the 12 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_listings`** — Full-text search over AgentsIndex's Published tools. Returns compact records (name, slug, tagline, url). Fetch depth with get_listing. _(parameters: query, limit)_
- **`get_listing`** — One tool in full, as answer-first markdown: the summary, then every question on the sheet with its answer, the vendor's own words for it and the URL that proves it. Identical to /… _(parameters: slug)_
- **`list_categories`** — AgentsIndex's categories with their live listing counts, 0 for one with none yet.
- **`compare_listings`** — Two tools side by side, as markdown: taglines, pricing, API availability, tags — the researched compare facts, honest about unknowns. _(parameters: a, b)_
- **`get_best_of`** — The Published tools in one category, in the order its category page prints (ranked by what we can confirm: a public price, an API and docs, independent sources, stated limits), as… _(parameters: category)_
- **`submit_listing`** — Submit a tool to AgentsIndex: the url alone; we write its name and description from its own pages. Requires an existing signed-in account with verified email; send its session Coo… _(parameters: url)_
- **`send_lead`** — Send a buyer-intent enquiry (lead) to a tool or a whole category on AgentsIndex. Keyless. Requires consent:true, a real name, a permanent (non-disposable) email, a message of at l… _(parameters: name, email, message, consent, listingSlug, categorySlug)_
- **`list_offers`** — What a listing owner can buy on AgentsIndex, with prices in US cents (VAT included), each offer's term and what it needs. Keyless. Same answer as GET https://agentsindex.ai/api/ag…
- **`get_quote`** — A signed price for one offer (from list_offers) on one listing, valid for a short time, and whether the listing can have it now. Only the account that owns the listing gets one: s… _(parameters: offer, listing)_
- **`create_order`** — Turns a quote (from get_quote) into an order, payable for 24 hours. Same account as the quote: its session Cookie header, or its agent key as Authorization: Bearer (order scope).… _(parameters: quote_id, idempotency_key)_
- **`my_listings`** — What the AgentsIndex owner dashboard shows about the listings an account owns: each one's status ('status.kind': review with the expected date, accepted with 'liveOn' and 'paid' (… _(parameters: slug)_
- **`subscribe_newsletter`** — Double opt-in subscribe to the AgentsIndex digest of new and freshly re-verified tools. Provide an email; returns { ok }. Nothing is sent but one confirmation mail until the perso… _(parameters: email, source)_

## Scan AgentsIndex yourself, or claim its badge

Re-run this exact AgentsIndex check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentsindex.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentsindex.ai/mcp&directory=true"
```

For the itemized findings on AgentsIndex — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentsindex.ai/mcp"}`. If you
run `agentsindex.ai`, [claim a measured verified-owner badge for AgentsIndex free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentsindex.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentsindex.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentsindex.ai/mcp)
```

Keeping the AgentsIndex badge green as its tools change — six-hourly re-scans of `agentsindex.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentsindex.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

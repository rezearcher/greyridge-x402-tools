---
title: "Is the AirShelf Catalog MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AirShelf Catalog MCP server (https://mcp.airshelf.ai/mcp), run 2026-10-26: advertises search_catalog, find_products, research_shopping; 8 tools scanned, injection verdict 'clear', 8 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# AirShelf Catalog MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.airshelf.ai/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory quality item(s) to polish (no hard rejects)

Cross-vendor B2B catalog for AI agents: search, compare, find equivalents, request a quote.

When an agent connects AirShelf Catalog, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.airshelf.ai`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on AirShelf Catalog

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AirShelf Catalog server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AirShelf Catalog server advertises

The server describes itself to connecting agents as: *You are using the AirShelf Catalog — a cross-vendor, datasheet-grounded B2B product catalog. It is for developers embedding shopping research into their applications; merchants supply the catalog rather than call these tools. Act as a consultative product adv…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_catalog`** — Search the AirShelf cross-vendor product catalog by natural-language query. The catalog covers industrial-automation, wiring-devices, digital-signage, business-display, memory-sto… _(parameters: q, category, limit, market, merchant, specs)_
- **`find_products`** — Discover candidate products for a buyer need. Takes a need in natural language (e.g. "best value home espresso machine", market "TH"), checks the verified catalog first, then uses… _(parameters: need, market, max)_
- **`research_shopping`** — research_shopping is the full verified-research job; find_products is the quick candidate-list tool. It runs as a background job and returns status "running" with a research ID wh… _(parameters: need, market, persona, answers, research_id)_
- **`get_product`** — Get the full golden record (AirShelf's verified product record) and latest price for one catalog product by slug ("manufacturer-model"). Returns the product's specs and provenance… _(parameters: slug)_
- **`compare_products`** — Compare 2-10 catalog products side-by-side on their datasheet specs. Slugs come from search_catalog and are case-insensitive and dash-tolerant ("e-STUDIO 331AC", "toshiba-e-studio… _(parameters: slugs, provenance)_
- **`explain_product`** — Explain the evidence behind a catalog row. Returns stored processing stages when available and always returns a golden-record field summary with source coverage. A field's evidenc… _(parameters: slug)_
- **`list_merchants`** — List public AirShelf merchants that have an assigned slug and at least one active product. Internal/demo and empty catalogs are excluded. Returns each merchant's name, slug, and p…
- **`request_quote`** — Send a quote request for catalog products to a merchant's sales team on behalf of a named buyer. This is a two-step, double opt-in flow. The first call emails a confirmation link… _(parameters: merchant, products, quantity, contact, notes, reference)_

## Scan AirShelf Catalog yourself, or claim its badge

Re-run this exact AirShelf Catalog check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.airshelf.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.airshelf.ai/mcp&directory=true"
```

For the itemized findings on AirShelf Catalog — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.airshelf.ai/mcp"}`. If you
run `mcp.airshelf.ai`, [claim a measured verified-owner badge for AirShelf Catalog free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.airshelf.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.airshelf.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.airshelf.ai/mcp)
```

Keeping the AirShelf Catalog badge green as its tools change — six-hourly re-scans of `mcp.airshelf.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.airshelf.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the 4ai – premium .ai domains for sale MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the 4ai – premium .ai domains for sale MCP server (https://4ai.ai/mcp), run 2026-11-09: advertises search_domains, get_domain, list_categories; 10 tools scanned, injection verdict 'clear', 10 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# 4ai – premium .ai domains for sale MCP server — security & directory-readiness scorecard

**Server:** `https://4ai.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 10 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory quality item(s) to polish (no hard rejects)

Search 254 premium .ai domains for sale, get free .ai value estimates and real .ai sales data.

When an agent connects 4ai – premium .ai domains for sale, the model reads all 10 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`4ai.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on 4ai – premium .ai domains for sale

- **No tool-poisoning or prompt-injection patterns** were found across the 10 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 10 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 10 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the 4ai – premium .ai domains for sale server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the 4ai – premium .ai domains for sale server advertises

The server describes itself to connecting agents as: *4ai.ai is a marketplace for premium .ai domain names (255 domains, all owned by 4ai). When the user describes a project, use suggest_domains. Use search_domains to filter by word, category or length, similar_domains for alternatives to a name, compare_domains…*

These are the 10 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_domains`** — Search the 4ai.ai portfolio of premium .ai domain names for sale. Filter by a word in the name, a category (see list_categories), type and maximum length. Every result has an offe… _(parameters: query, category, type, max_length, limit)_
- **`get_domain`** — Details for one domain in the 4ai portfolio (for example "p0.ai"): categories, page, offer link, and comparable public .ai sales. Says so if the domain is not in the portfolio. _(parameters: domain)_
- **`list_categories`** — Categories of .ai domains in the 4ai portfolio, with what they are good for and how many names each has.
- **`estimate_domain_value`** — Free value estimate for any .ai domain name: auction, marketplace and brokerage values with likely ranges, the type of name, a short verdict and notes. Also says if the name is fo… _(parameters: domains)_
- **`suggest_domains`** — Describe a company, product or idea in plain words (e.g. "telehealth app for mental health", "crypto casino", "quantum chip startup") and get the best-fitting .ai domains from the… _(parameters: description, max_length, limit)_
- **`similar_domains`** — Alternatives to a .ai domain: give any name (taken, too expensive, or one the user already likes) and get the closest .ai domains that are for sale on 4ai. _(parameters: domain, limit)_
- **`get_offer_link`** — A link to the offer form for a 4ai domain with the amount (and an optional note) filled in. Nothing is sent: the user opens the link, checks the offer and sends it. Minimum offer… _(parameters: domain, amount_usd, note)_
- **`compare_domains`** — Compare 2 to 5 .ai domain names side by side: length, type, words, whether 4ai sells it, estimated value ranges and a short verdict. _(parameters: domains)_
- **`how_buying_works`** — The steps, payment (Escrow.com), fees, minimum offer and transfer time for buying a .ai domain from 4ai. Use it when the user asks whether buying is safe or how it works.
- **`ai_domain_sales`** — The biggest publicly reported .ai domain sales (price in USD, date, venue, source). Useful to estimate what a .ai domain is worth. _(parameters: limit, max_length)_

## Maintenance & supply-chain — the risk 4ai – premium .ai domains for sale's static scan can't see

A prompt-injection scan reads 4ai – premium .ai domains for sale's advertised tool metadata at one moment. It cannot tell you the project behind `4ai.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `4ai.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan 4ai – premium .ai domains for sale yourself, or claim its badge {#claim}

Re-run this exact 4ai – premium .ai domains for sale check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `4ai.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://4ai.ai/mcp&directory=true"
```

For the itemized findings on 4ai – premium .ai domains for sale — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://4ai.ai/mcp"}`. If you
run `4ai.ai`, [claim a measured verified-owner badge for 4ai – premium .ai domains for sale free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=4ai.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3D4ai.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://4ai.ai/mcp)
```

Keeping the 4ai – premium .ai domains for sale badge green as its tools change — six-hourly re-scans of `4ai.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `4ai.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: Is the JustIdea Agency MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the JustIdea Agency MCP server (https://justidea.agency/mcp), run 2026-10-24: advertises list_services, get_page, search_site; 8 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# JustIdea Agency MCP server — security & directory-readiness scorecard

**Server:** `https://justidea.agency/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Services, prices, inquiries and free analytics, AI and Google visibility scans by JustIdea, Poland.

When an agent connects JustIdea Agency, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`justidea.agency`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on JustIdea Agency

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 8 advertised tool(s) name a state-changing action** (`send_inquiry`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the JustIdea Agency server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the JustIdea Agency server advertises

The server describes itself to connecting agents as: *JustIdea Agency is a Polish e-commerce and performance marketing agency from Kraków: online stores (PrestaShop, WooCommerce), websites, SEO, paid ads, content and branding. Services, prices and page texts come from the published website justidea.agency. Price…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_services`** — List JustIdea Agency services with the published starting ("from") prices and links. Returns the price list (12 service categories, each with its packages) and every service page… _(parameters: language)_
- **`get_page`** — Full text of one justidea.agency page as Markdown: a service, a price list, the company profile, reviews, a blog article. Accepts a full URL or a path, e.g. "/pl/cennik/sklepy-int… _(parameters: url)_
- **`search_site`** — Search justidea.agency pages by titles, descriptions and section headings. Polish and English queries both work. Returns titles, URLs and descriptions; read a result with get_page. _(parameters: query, language, kind, limit)_
- **`send_inquiry`** — Send a sales inquiry to JustIdea Agency (Kraków, Poland) on behalf of the user. It goes to the agency CRM and the sales team, the sender gets a short confirmation e-mail, and a pe… _(parameters: imie, email, telefon, firma, strona, usluga)_
- **`scan_analytics`** — Free check of how a website or online store measures traffic and sales: Google Tag Manager, GA4 and e-commerce events, consent banner and Consent Mode v2, server-side tagging, Met… _(parameters: url, email, zgoda, phone, name, language)_
- **`scan_ai_visibility`** — Free check of how ready a website is for AI assistants and AI search (ChatGPT, Perplexity, Gemini, Claude): whether their crawlers get in (robots.txt, firewalls), whether the cont… _(parameters: url, email, zgoda, phone, name, language)_
- **`scan_google_visibility`** — Free check of whether Google can index a website well: Googlebot access in robots.txt and on the server, noindex, canonical, http-to-https and www redirects, the sitemap and wheth… _(parameters: url, email, zgoda, phone, name, language)_
- **`get_scan_result`** — Result of a scan started with scan_analytics, scan_ai_visibility or scan_google_visibility that was still running. Returns the same grade and problem list; sends the full report b… _(parameters: scan_id)_

## Scan JustIdea Agency yourself, or claim its badge

Re-run this exact JustIdea Agency check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `justidea.agency`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://justidea.agency/mcp&directory=true"
```

For the itemized findings on JustIdea Agency — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://justidea.agency/mcp"}`. If you
run `justidea.agency`, [claim a measured verified-owner badge for JustIdea Agency free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=justidea.agency)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Djustidea.agency&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://justidea.agency/mcp)
```

Keeping the JustIdea Agency badge green as its tools change — six-hourly re-scans of `justidea.agency`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `justidea.agency` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

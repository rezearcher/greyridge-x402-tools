---
title: "Is the GENOSYS UAE MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the GENOSYS UAE MCP server (https://genosys.ae/mcp), run 2026-10-24: advertises search_products, get_product, recommend_routine; 11 tools scanned, injection verdict 'clear', 11 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# GENOSYS UAE MCP server — security & directory-readiness scorecard

**Server:** `https://genosys.ae/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** 11 Claude Directory blocker(s)

Shop GENOSYS Korean skincare in the UAE from chat: find products, AED prices, order and pay.

When an agent connects GENOSYS UAE, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`genosys.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on GENOSYS UAE

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 11 blocker(s).** This server advertises 11 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 11 advertised tool(s) name a state-changing action** (`create_bag_link`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the GENOSYS UAE server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the GENOSYS UAE server advertises

The server describes itself to connecting agents as: *GENOSYS is the official UAE distributor of GENOSYS professional Korean dermacosmetics (genosys.ae, Dubai). Use these tools to answer skincare and haircare shopping questions with the live catalog. - Prices are AED and already include 5% UAE VAT. Quote them as…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_products`** — Search the live GENOSYS UAE catalog (Korean professional skincare, haircare, devices, beauty boxes). Use for any "what do you have for..." question. Accepts plain language in Engl… _(parameters: query, category, concern, skin_type, max_price_aed, in_stock_only)_
- **`get_product`** — Full details for one product: description, key features, benefits, key ingredients and actives, step-by-step how to use, sizes or shades with prices, and an add-to-bag link. Use t… _(parameters: product_id, locale)_
- **`recommend_routine`** — Ranked product picks for a shopper's skin type and concerns, the same scoring as the skin quiz on genosys.ae. Use when someone describes their skin and asks what to use. _(parameters: skin_type, concerns, age_group, at_home_only, limit, locale)_
- **`list_categories`** — All product categories and skin concerns in the live catalog, with product counts. Use to orient before searching.
- **`create_bag_link`** — Build one link that opens genosys.ae with these items already in the shopper's bag, ready to check out. Use when the shopper decides to buy. Products with sizes or shades (see get… _(parameters: items)_
- **`open_checkout`** — Show the shopper a checkout form for these items: shade picker where needed, quantities, delivery details (name, email, phone, emirate, address), live total and a button that crea… _(parameters: items, prefill, locale)_
- **`place_order`** — Create a GENOSYS UAE order from this chat and get a secure Stripe payment link (card, Apple Pay, Google Pay). Call only after the shopper has confirmed the items, the total and th… _(parameters: items, customer, notes, locale)_
- **`order_status`** — Status and payment of a GENOSYS order. Needs the order number and the email used for the order. _(parameters: order_number, email)_
- **`store_info`** — Delivery areas, times and fees, payment methods, returns, contact (WhatsApp, email), apps and policies for GENOSYS UAE. _(parameters: locale)_
- **`search`** — Search GENOSYS products and skincare articles. Returns ids to pass to fetch. ("product:id" for products, "blog:slug" for articles.) _(parameters: query)_
- **`fetch`** — Full text of a result from search, by id ("product:18" or "blog:slug"). _(parameters: id)_

## Scan GENOSYS UAE yourself, or claim its badge

Re-run this exact GENOSYS UAE check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `genosys.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://genosys.ae/mcp&directory=true"
```

For the itemized findings on GENOSYS UAE — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://genosys.ae/mcp"}`. If you
run `genosys.ae`, [claim a measured verified-owner badge for GENOSYS UAE free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=genosys.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dgenosys.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://genosys.ae/mcp)
```

Keeping the GENOSYS UAE badge green as its tools change — six-hourly re-scans of `genosys.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `genosys.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

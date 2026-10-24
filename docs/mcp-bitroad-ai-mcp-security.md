---
title: "Is the app.bitroad.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the app.bitroad.ai MCP server (https://app.bitroad.ai/api/v1/mcp), run 2026-10-24: advertises services_search_listings, services_purchase, services_request_quote; 65 tools scanned, injection verdict 'clear', 1 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# app.bitroad.ai MCP server — security & directory-readiness scorecard

**Server:** `https://app.bitroad.ai/api/v1/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 65 · **Injection verdict:** `clear` · **Directory:** 1 Claude Directory blocker(s)

Marketplace for AI agents: buy goods and services under spending caps, with returns and disputes.

When an agent connects app.bitroad.ai, the model reads all 65 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.bitroad.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on app.bitroad.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 65 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 blocker(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **16 of 65 advertised tool(s) name a state-changing action** (`services_create_listing`, `auth_revoke_self`, `addresses_list`, `addresses_create`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 65 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the app.bitroad.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the app.bitroad.ai server advertises

The server describes itself to connecting agents as: *Bitroad is a services marketplace with escrow: an agent commissions work from a seller agent, Bitroad holds the payment, the seller delivers, and the payout releases on acceptance. Fixed-price listings buy in one call (services_search_listings, then services_…*

These are the 65 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`services_search_listings`** — Search service listings (GPU compute, synthetic data, inference, vector hosting, code review, research, data labelling). This is the entry point to the primary Bitroad flow: find… _(parameters: q, category, pricing_mode, page_size, cursor)_
- **`services_purchase`** — Buy a fixed-price service in one call: validates the scope, computes the deterministic price, creates the quote thread directly in accepted, and charges immediately, with no selle… _(parameters: service_listing_id, scope, requested_summary, acknowledged_confirmation, confirmation_token, payment_method_id)_
- **`services_request_quote`** — File a scope-of-work against a quote-mode service listing for bespoke work. The scope must conform to the listing's scope schema. The seller responds with a price + ETA; the buyer… _(parameters: service_listing_id, scope, requested_summary)_
- **`services_get_quote`** — Fetch one service quote thread with its deliverables. Buyer or seller side. Secret deliverables are decrypted only for the buyer; everyone else sees a redaction. _(parameters: service_quote_id)_
- **`services_accept_quote`** — Accept a submitted quote and charge immediately. Runs the same delegation caps and payment-envelope rails as goods purchases; cap kickbacks return confirmation_required with a tok… _(parameters: service_quote_id, acknowledged_confirmation, confirmation_token, payment_method_id, __outcomeForTesting)_
- **`services_counter_quote`** — Post a counter-offer on a quote thread (price in pence, ETA in minutes, optional terms). Either side may counter: the buyer counters a submitted quote (requires the listing to hav… _(parameters: service_quote_id, price_pence, eta_minutes, terms)_
- **`services_reject_quote`** — Reject a submitted quote (buyer-only). Also used by the principal to deny a quote sitting in pending_principal_confirmation after a cap kickback. _(parameters: service_quote_id)_
- **`services_withdraw_quote`** — Withdraw a quote request before the seller has quoted (buyer-only). _(parameters: service_quote_id)_
- **`services_list_my_quotes`** — List service quote threads the authenticated principal opened (buyer-side view), paginated. Filter by status (requested, quoted, paid, delivered, released, …). _(parameters: status, service_listing_id, page_size, cursor)_
- **`services_acknowledge_delivery`** — Explicitly accept the deliverable on a delivered quote. The acknowledgement is recorded immediately; the held payout releases as soon as the funds have settled in the seller's Str… _(parameters: service_quote_id)_
- **`services_create_listing`** — Seller-side: publish a service listing (GPU compute, synthetic data, inference, vector hosting, code review, research). pricing_mode='fixed' lets buyers purchase in one call (set… _(parameters: title, summary, category, scope_schema, pricing_hint, min_price_pence)_
- **`services_get_listing`** — Fetch a single service listing including its scope schema — the fields a quote request or purchase scope must provide — and, for fixed-price listings, the deterministic pricing fo… _(parameters: service_listing_id)_
- **`services_list_open_requests`** — Seller-side: list unanswered quote requests (status=requested). The primary polling tool for seller agents — respond with services_submit_quote. _(parameters: page_size, cursor)_
- **`services_submit_quote`** — Seller-side: answer a quote request with a price (pence), ETA in minutes, and optional terms. Requires the delegation's respond_quote action. Price must sit inside the listing's m… _(parameters: service_quote_id, price_pence, eta_minutes, terms)_
- **`services_start_work`** — Seller-side: mark a paid quote as in_progress. Requires the delegation's respond_quote action. _(parameters: service_quote_id)_
- **`services_submit_deliverable`** — Seller-side: submit the deliverable on a paid/in-progress quote. kind=url|text|file|secret. Files are base64 in file_b64 (max 25 MB) with file_name + file_mime_type and land on ob… _(parameters: service_quote_id, kind, url, text, secret, file_b64)_
- **`services_list_my_sales`** — Seller-side: list charged threads you still owe work on, paginated. status=paid | in_progress | delivered, or active (all three, the default). The polling tool for fixed-price lis… _(parameters: status, page_size, cursor)_
- **`auth_whoami`** — Return who this MCP credential acts as: principal email/role, agent name, client (Claude install) that issued the token, and when it was last used. Works for both br_ik_* instance…
- **`auth_revoke_self`** — Disconnect this OAuth connection by revoking the access+refresh chain that issued the token making this call. Idempotent: a second call returns '{ revoked: false, reason: 'already…
- **`sellers_get`** — Fetch a seller's public profile + trust signals (verification tier, dispute / refund / on-time-ship rates over a 90-day window, response times). Trust metrics carry a 'stale: true… _(parameters: seller_id)_
- **`platforms_get`** — Fetch a platform's public reputation profile by slug: KYC status, rolling-window orders/disputes/refunds, on-time-ship rate, dispute resolution p50/p95, anomaly-pause count. Decom… _(parameters: slug)_
- **`addresses_list`** — List the principal's saved shipping addresses. The agent does NOT need to call this every purchase — purchase_create_intent will use the principal's default shipping address if 'a…
- **`addresses_create`** — Save a new shipping address. Set is_default_shipping=true to make it the default. _(parameters: recipient_name, line1, line2, town, region, postcode)_
- **`payment_methods_list`** — List the principal's saved payment methods (last4 + brand only — full card numbers are never exposed to agents). purchase_confirm_intent uses the principal's default method if no…
- **`payment_methods_create`** — Returns a one-time Stripe Checkout URL to hand the user so they can add a payment card. The card is saved to their account automatically when they complete the hosted flow — no ch…
- **`envelopes_list`** — List the active and historical payment envelopes the calling agent instance can draw against. Each entry shows balance, scope, validity, and per-tx / per-day caps. Read-only — env…
- **`envelopes_get`** — Fetch a single envelope by id. Returns the same shape as envelopes_list. Returns 404 when the envelope is not bound to the calling agent instance. _(parameters: envelope_id)_
- **`disputes_file`** — File a dispute on a goods order (order_id; reasons: not_as_described, defective, not_received, fraud_unauthorized_charge, duplicate_charge, other) or a service quote (service_quot… _(parameters: order_id, service_quote_id, reason, summary, desired_outcome, claimed_amount_pence)_
- **`disputes_list`** — List disputes for the authenticated principal (buyer-side: ones they filed; seller-side: ones filed against their orders). Filter by 'status' (admin_review, awaiting_seller, resol… _(parameters: status, page_size, cursor)_
- **`disputes_get`** — Fetch one dispute by id with the full evidence trail and timeline. Buyer-side or seller-side caller — returns 404 if the dispute doesn't belong to either of the calling actor's ro… _(parameters: dispute_id)_
- **`disputes_add_evidence`** — Attach an evidence item to an open dispute. The body is base64-encoded; per-item cap is 25 MB and per-dispute cap is 200 MB. Either the filing buyer or the seller-owner can upload. _(parameters: dispute_id, kind, mime_type, body_b64, caption)_
- **`disputes_withdraw`** — Buyer-only: withdraw an open dispute. Closed disputes cannot be withdrawn. _(parameters: dispute_id)_
- **`disputes_respond`** — Seller-side response to a dispute. Requires the seller delegation's 'respond_dispute' action. Free-form text 1–4000 chars. _(parameters: dispute_id, text)_
- **`catalog_search_products`** — Search marketplace products by free-text query, optional category, or seller. Returns a paginated list of summaries with pence-denominated prices, available stock, and restricted-… _(parameters: q, category, category_subtree, seller_id, certifications, restricted)_
- **`catalog_get_product`** — Fetch a single product by id. Returns full description, structured spec values, seller id, live stock, and any restricted-goods flags. Prefer this over re-running search when the… _(parameters: product_id)_
- **`catalog_list_categories`** — List the marketplace's category taxonomy. Optionally pass 'slug' to scope to a subtree (e.g. 'electronics'). Each leaf carries its JSON Schema for specs, plus filterable / rangeab… _(parameters: slug)_
- **`catalog_describe_category`** — Fetch one category by slug, including the spec JSON Schema for leaf categories. Useful before building a structured purchase intent so the agent emits a valid spec query. _(parameters: slug)_
- **`purchase_create_intent`** — Create a purchase intent for a product. Reserves stock, snapshots price + VAT + shipping, and consults the delegation policy. Returns an intent id; intents expire after 15 minutes… _(parameters: product_id, quantity, address_id, payment_method_id)_
- **`purchase_confirm_intent`** — Confirm a purchase intent — re-validates price within 1p tolerance, charges via Stripe Connect destination charges (per-seller application fee on item only), and creates the order… _(parameters: intent_id, acknowledged_confirmation, confirmation_token, __outcomeForTesting)_
- **`purchase_cancel_intent`** — Cancel a pending purchase intent and release the stock reservation. _(parameters: intent_id)_
- **`orders_list`** — List orders the authenticated principal placed (buyer-side view), paginated with a cursor. Optional status filter (e.g. 'paid_awaiting_fulfillment', 'delivered', 'cancelled'). Use… _(parameters: status, page_size, cursor)_
- **`orders_get`** — Fetch a single order with line items, shipment / tracking, payment status, and any associated returns or disputes. Buyer-side view — for seller-side use seller_get_order. _(parameters: order_id)_
- **`returns_initiate`** — Initiate a return on a delivered order. Uniform platform policy: a 30-day change-of-mind window from delivery, FREE, full refund, NO restocking fee, and the SELLER funds the retur… _(parameters: order_id, reason, description)_
- **`returns_get`** — Fetch a single return by id, including reason, status, restocking fee (if any), refund ledger, and the inspection trail once the parcel has arrived. _(parameters: return_id)_
- **`returns_list`** — List returns the authenticated principal filed (buyer-side view), paginated. Filter by 'order_id' to find returns on a specific order, or by 'status' (initiated, label_ready, in_t… _(parameters: order_id, status, page_size, cursor)_
- **`returns_get_label`** — Fetch a short-lived signed URL for the return shipping label PDF. URL expires within minutes; re-call to get a fresh one. Only available once the return has progressed to label_re… _(parameters: return_id)_
- **`seller_get_me`** — Fetch the seller record bound to the calling principal or seller-side agent instance. Refuses when the caller has no seller record.
- **`seller_onboarding_status`** — Read-only Stripe Connect onboarding status. Stripe Express onboarding itself is human-on-session; agents wait on this read until charges_enabled flips true before listing.
- **`seller_list_listings`** — List the bound seller's product listings, paginated. Includes archived/flagged listings by default — pass 'is_active: true' to filter to live listings only. Returns slug, category… _(parameters: is_active, page_size, cursor)_
- **`seller_get_listing`** — Fetch a single listing the bound seller owns, including its full description, current stock + reserved counts, spec values, and any moderation state. Refuses if the listing belong… _(parameters: product_id)_
- **`seller_create_listing`** — Create a product listing. Validates the payload against the leaf category's spec schema and the structured return policy. Restricted-goods classifier runs at write time; flagged l… _(parameters: title, description, category_slug, price_pence, shipping_pence, vat_rate_bp)_
- **`seller_update_listing`** — Patch an existing listing the calling seller owns. Specs are re-validated against the leaf schema; return_policy is re-validated against the platform statutory floor. Buyers with… _(parameters: product_id, title, description, price_pence, shipping_pence, vat_rate_bp)_
- **`seller_archive_listing`** — Soft-delete a listing (is_active=false). Refuses while any purchase intents are still pending against it. _(parameters: product_id)_
- **`seller_update_stock`** — Update a listing's stock count. Pass 'stock' for an absolute value or 'delta' for a relative change. Resulting stock must remain = reserved. _(parameters: product_id, stock, delta)_
- **`seller_list_orders`** — List orders placed against the bound seller's products (seller-side view), paginated. Filter by 'status' (e.g. 'paid_awaiting_fulfillment' to find orders that need shipping). This… _(parameters: status, page_size, cursor)_
- **`seller_get_order`** — Fetch a single seller-scoped order with buyer shipping address (PII-redacted where the policy requires it), items, shipment, payment status, and any associated return/dispute. Ref… _(parameters: order_id)_
- **`seller_mark_shipped`** — Mark an order as shipped with a tracking number. Idempotent on (order_id, tracking_number) — same pair is a no-op success. Enqueues carrier polling automatically. _(parameters: order_id, carrier, tracking_number, label_url)_
- **`seller_mark_delivered`** — Declare a shipped order as delivered (no carrier confirmation is wired). Only valid from shipped; already-delivered is a no-op success. Notifies the buyer, who can dispute if it n… _(parameters: order_id)_
- **`seller_attach_tracking`** — Attach or update tracking on an already-shipped order. Use mark_shipped for first ship; this is for late-arriving tracking only. _(parameters: order_id, carrier, tracking_number)_
- **`seller_list_returns`** — List returns filed against the bound seller's orders, paginated. Filter by 'status' (initiated, label_ready, in_transit, received, refunded, rejected) to triage what needs inspect… _(parameters: status, page_size, cursor)_
- **`seller_get_return`** — Fetch a single return filed against one of the bound seller's orders, with reason, status, restocking fee, inspection notes, and the refund ledger. Refuses if the return isn't on… _(parameters: return_id)_
- **`seller_accept_return`** — Acknowledge that a returned parcel arrived and was inspected. Moves return: approved → received. The refund engine runs idempotently afterwards via the existing webhook flow. _(parameters: return_id, inspection_notes)_
- **`seller_reject_return`** — Reject a return after inspection. inspection_notes is required. Refuses if the return has already refunded. _(parameters: return_id, inspection_notes)_
- **`seller_list_reviews`** — List reviews left on this seller's orders, paginated. Filter by 'responded: false' to find reviews that still need a seller response. A review's 'rating' is 1-5; lower-rated ones… _(parameters: page_size, cursor)_
- **`seller_respond_to_review`** — Post the seller's response to a review. One response per review; subsequent attempts return already_responded. _(parameters: review_id, text)_

## Scan app.bitroad.ai yourself, or claim its badge

Re-run this exact app.bitroad.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.bitroad.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.bitroad.ai/api/v1/mcp&directory=true"
```

For the itemized findings on app.bitroad.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.bitroad.ai/api/v1/mcp"}`. If you
run `app.bitroad.ai`, [claim a measured verified-owner badge for app.bitroad.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.bitroad.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.bitroad.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.bitroad.ai/api/v1/mcp)
```

Keeping the app.bitroad.ai badge green as its tools change — six-hourly re-scans of `app.bitroad.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.bitroad.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

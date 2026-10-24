---
title: Is the Brainy Prices — UAE Cost of Living MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Brainy Prices — UAE Cost of Living MCP server (https://prices.brainy.ae/mcp/v2), run 2026-10-24: 26 tools scanned, injection verdict 'clear', 26 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Brainy Prices — UAE Cost of Living MCP server — security & directory-readiness scorecard

**Server:** `https://prices.brainy.ae/mcp/v2`
**Scanned:** 2026-10-24 · **Tools advertised:** 26 · **Injection verdict:** `clear` · **Directory:** 26 Claude Directory blocker(s)

Source-backed UAE costs: groceries, schools, housing, transport, utilities, telecom and relocation.

When an agent connects Brainy Prices — UAE Cost of Living, the model reads all 26 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`prices.brainy.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Brainy Prices — UAE Cost of Living

- **No tool-poisoning or prompt-injection patterns** were found across the 26 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 26 blocker(s).** This server advertises 26 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 26 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 26 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Brainy Prices — UAE Cost of Living server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Brainy Prices — UAE Cost of Living server advertises

The server describes itself to connecting agents as: *Start with start_here: it lists the 5 most useful calls with ready arguments. Cite source, licence, date and open_in_browser. Preserve historical periods and original labels. Paused sources must not be retried. Unknown values stay null; a partial subtotal is…*

These are the 26 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`commute_cost`** — Monthly/annual car commute cost (fuel+Salik), or published area routes. No parking. _(parameters: km_per_day, days_per_week, l_per_100km, fuel, salik_per_day, emirate_id)_
- **`costs_by_area`** — Dubai areas ranked by monthly cost: rent, fees, bills (+school). Not full budgets. _(parameters: bedrooms, property_type, include_school, zone_id, transport, min_contracts)_
- **`costs_by_emirate`** — Compare emirates: rent, utilities, schools. Non-Dubai rent unknown. _(parameters: page_size, cursor, emirate_id)_
- **`data_sources`** — Where each number comes from: publishers, licences, dates, paused sources. _(parameters: status, license_status, dataset_id, page_size, cursor, source_id)_
- **`dewa`** — DEWA electricity/water: tariff slabs, or bill estimate from kwh (+water, VAT, fee). _(parameters: kwh, water_m3, water_gallons, annual_rent_aed)_
- **`end_of_service_gratuity`** — UAE private-sector end-of-service gratuity estimate (Decree-Law 33/2021 art. 51): basic wage + dates → amount or range; not legal advice. _(parameters: basic_monthly_aed, start_date, end_date, unpaid_days, total_monthly_wage_aed, work_pattern)_
- **`fixed_monthly_costs`** — Monthly fixed costs for a household profile, with assumptions. Not a full budget. _(parameters: page_size, profile)_
- **`free_zone_companies`** — Free zone company setup: package prices, annual/monthly cost, visas. _(parameters: published, page_size, cursor, emirate, zone)_
- **`fuel_prices`** — UAE petrol/diesel prices this month and last, change, 50/70 L tank cost, history. _(parameters: sort, page_size, cursor, include_history, from, to)_
- **`fx_rates`** — AED exchange rates (CBUAE, dated). Not bank quotes. _(parameters: currency)_
- **`grocery_compare_list`** — Cheapest store for a shopping list: per-store subtotals, delivery fees, minimums. Observed + labelled estimates. _(parameters: items, area)_
- **`grocery_products`** — Dubai supermarket prices: search by name; product_id for per-store pack/unit offers, dates, history. Not MOET. _(parameters: comparison, store_id, available_only, sort, page_size, cursor)_
- **`grocery_stores`** — Grocery stores: delivery fees, free-delivery thresholds, minimum orders. _(parameters: delivery_rule_status, sort, page_size, cursor, store_id)_
- **`health_insurance`** — Dubai health insurance rules: who pays, basic plan band/benefits, fines. Not quotes. _(parameters: emirate, page_size)_
- **`housing_rents`** — Rent in a Dubai area: registered annual/monthly medians and contract counts. Not listings. _(parameters: zone_id, property_type, bedrooms, min_contracts, sort, page_size)_
- **`housing_sales`** — Sale prices by Dubai area: ready/off-plan registered medians. Not listings. _(parameters: zone_id, property_type, bedrooms, market, sort, page_size)_
- **`labour_calculator`** — UAE labour law estimates (Decree-Law 33/2021): overtime pay, annual leave, final settlement. Not legal advice. _(parameters: calculator, basic_monthly_aed, total_monthly_wage_aed, start_date, end_date, leave_taken_days)_
- **`ministry_shop_prices`** — MOET-published shop prices of Dubai essentials by chain/category. _(parameters: q, category, chain_id, product_id, sort, page_size)_
- **`mobile_internet_plans`** — UAE mobile and home internet plans: VAT-inclusive price, data, contract. _(parameters: operator, min_data_gb, status, sort, page_size, cursor)_
- **`move_to_dubai`** — Move to Dubai? Home vs Dubai net pay, taxes, FX, costs, savings. No country: models. Owner: household=business_owner + profit. Not tax advice. _(parameters: country, gross_annual, currency, household, area, bedrooms)_
- **`residence_visas`** — UAE residence visas by route: payer, requirements, fees, medical/insurance bands. _(parameters: route_id, page_size, include_common_fees)_
- **`schools`** — Dubai school fees: KHDA tuition by grade/year, bus fees, distance. q: school name; near: zone; school_id: detail. Year ≠ Grade; uniforms paused. _(parameters: q, area, curriculum, grade, rating, near)_
- **`shopper_price_reports`** — Community price reports by product/store, with date and promos. _(parameters: product_id, store_id, purchased_since, sort, page_size, cursor)_
- **`start_here`** — Call first: coverage, the 5 most useful calls with ready arguments, data freshness and how to cite.
- **`tax_savings_by_country`** — Tax saved by moving to Dubai, per country, typical pay. Not tax advice. _(parameters: page_size, cursor, country, household)_
- **`transport_fares`** — Taxi fare estimate, or metro/bus fares, parking and toll tariffs. Not app quotes. _(parameters: km, booking, wait_minutes, to_sharjah, emirate, operator_id)_

## Scan Brainy Prices — UAE Cost of Living yourself, or claim its badge

Re-run this exact Brainy Prices — UAE Cost of Living check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `prices.brainy.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://prices.brainy.ae/mcp/v2&directory=true"
```

For the itemized findings on Brainy Prices — UAE Cost of Living — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://prices.brainy.ae/mcp/v2"}`. If you
run `prices.brainy.ae`, [claim a measured verified-owner badge for Brainy Prices — UAE Cost of Living free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=prices.brainy.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dprices.brainy.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://prices.brainy.ae/mcp/v2)
```

Keeping the Brainy Prices — UAE Cost of Living badge green as its tools change — six-hourly re-scans of `prices.brainy.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `prices.brainy.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

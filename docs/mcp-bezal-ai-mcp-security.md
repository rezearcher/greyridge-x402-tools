---
title: "Is the app.bezal.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the app.bezal.ai MCP server (https://app.bezal.ai/api/mcp), run 2026-10-24: advertises search_businesses, get_business, list_categories; 13 tools scanned, injection verdict 'clear', 26 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# app.bezal.ai MCP server — security & directory-readiness scorecard

**Server:** `https://app.bezal.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 13 · **Injection verdict:** `clear` · **Directory:** 26 Claude Directory blocker(s)

Search 7,000+ local service businesses across America by category, location, or keyword.

When an agent connects app.bezal.ai, the model reads all 13 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.bezal.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on app.bezal.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 13 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 26 blocker(s).** This server advertises 26 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 13 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 13 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the app.bezal.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the app.bezal.ai server advertises

These are the 13 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_businesses`** — Search local business profiles on Bezal by name, category, or location. Every business includes name, category, city, state, rating, review count, tier and quote_request_url (its… _(parameters: query, category, city, state, limit)_
- **`get_business`** — Get the public Bezal profile for one business by UUID. Every business includes name, category, city, state, rating, review count, tier and quote_request_url (its public Bezal prof… _(parameters: id)_
- **`list_categories`** — List all available business categories in the directory.
- **`request_service`** — Send a service request to a business on behalf of a person. Returns delivered: true only when the business owner was notified. Businesses that haven't claimed their Bezal profile… _(parameters: business_id, seeker_name, seeker_email, service_needed, message)_
- **`search_by_service`** — Find businesses that list a specific service, when you know the exact service rather than the category (for example "Drain cleaning" rather than "plumbing"). Every business includ… _(parameters: service_type, location)_
- **`get_reviews`** — Get reviews for a specific business: Bezal reviews (rating, text, verified flag, date and the reviewer as first name and last initial) plus the Google rating and review count. _(parameters: business_id, limit)_
- **`get_service_catalog`** — Get services and pricing for a specific business. Falls back to the list of service names if no priced catalog exists. _(parameters: business_id)_
- **`check_business_availability`** — Check whether a business is open on a date, based on its posted opening hours. Hours are shared only for providers on a paid Bezal plan, and other listings come back with open set… _(parameters: business_id, date)_
- **`compare_businesses`** — Compare up to 5 businesses side by side: the public profile fields plus services, BezalRank and whether the profile is claimed. Every business includes name, category, city, state… _(parameters: business_ids)_
- **`search_by_city`** — Search for businesses in a specific city, optionally filtered by category. Every business includes name, category, city, state, rating, review count, tier and quote_request_url (i… _(parameters: city, state, category, limit)_
- **`search_providers`** — Legacy alias for search_businesses. Prefer search_businesses for new clients. _(parameters: category, location, query, limit)_
- **`get_provider_details`** — Legacy alias for get_business. Prefer get_business for new clients. _(parameters: business_id)_
- **`submit_quote_request`** — Legacy alias for request_service. Prefer request_service for new clients. _(parameters: business_id, seeker_name, seeker_email, message)_

## Scan app.bezal.ai yourself, or claim its badge

Re-run this exact app.bezal.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.bezal.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.bezal.ai/api/mcp&directory=true"
```

For the itemized findings on app.bezal.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.bezal.ai/api/mcp"}`. If you
run `app.bezal.ai`, [claim a measured verified-owner badge for app.bezal.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.bezal.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.bezal.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.bezal.ai/api/mcp)
```

Keeping the app.bezal.ai badge green as its tools change — six-hourly re-scans of `app.bezal.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.bezal.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: Detect a company's SaaS stack from its domain — the back-office tools a crawl can't see
description: A technographics tool that reads a company's live DNS, not just its homepage. Crawl-based detectors (BuiltWith, Wappalyzer) see the front-end a site renders; the back-office SaaS a company actually runs leaves its mark in DNS — domain-verification TXT tokens and the SPF include chain. On stripe.com's live DNS right now that surfaces 20+ vendors a crawl never shows. Keyless, pay-per-record, no subscription. 2026-10.
---
# Detect a company's SaaS stack from its domain — including the tools a crawl can't see

If you want to know what technology a company runs, the usual tools — [BuiltWith](https://builtwith.com), [Wappalyzer](https://www.wappalyzer.com) — crawl the company's website and fingerprint what the browser renders: the JS framework, the analytics tag, the CDN, the CMS. That is the right tool for front-end tech and for reverse lookups ("find every site running Shopify"), and they carry a far broader historical index than anything read live. Where you need that, use them. Published 2026 third-party reviews put Wappalyzer's API at roughly **$250–450/month** and BuiltWith's at roughly **$199–995/month**, seat- and subscription-based ([Tomba](https://tomba.io/blog/builtwith-vs-wappalyzer), [SyncGTM](https://syncgtm.com/blog/wappalyzer-review-2026); confirm current figures on each vendor's own pricing page — one review notes Wappalyzer API credits expire after 60 days).

There is a whole half of a company's stack those tools cannot see by design, because it never touches the marketing site: the back-office and operational SaaS. A company does not render "we use DocuSign" or "we run on Salesforce" on its homepage. But to use those products it has to **prove it owns the domain** — and that proof lives in public DNS.

## The signal a homepage crawl structurally misses

Two DNS records give it away, and both are world-readable with no key:

- **Domain-verification `TXT` tokens.** When a company adds a SaaS product that touches its domain, the vendor makes it publish a `TXT` record like `docusign=…`, `atlassian-domain-verification=…`, `openai-domain-verification=…`. Each token names a vendor the company has actually provisioned.
- **The `SPF include:` chain.** The record that authorizes who sends the company's mail names its mail provider and its email, support, survey and recruiting infrastructure — `_spf.google.com`, `amazonses.com`, `mail.zendesk.com`, `greenhouse-outbound-mail`, and so on.

A crawl never requests those records, so it never sees any of it.

## Live proof: stripe.com's DNS, read this moment (2026-10-30)

Here is what sits in `stripe.com`'s live DNS right now — read straight from its `TXT` and SPF records, nothing scraped from the site:

| Signal class | Vendors named in DNS (sample) | On the homepage? |
|---|---|---|
| AI / dev tools | OpenAI, Anthropic, Cursor, Docker, Postman, Linear, Vercel, ElevenLabs | no |
| Docs / collaboration | Atlassian, DocuSign, Canva, Whimsical | no |
| CRM / productivity | Salesforce, Microsoft 365 | no |
| Mail / email infra (SPF) | Google Workspace, Amazon SES | no |
| Support / survey (SPF) | Zendesk, Qualtrics | no |
| Recruiting (SPF) | Greenhouse | no |
| Security / data / CDN | HackerOne, LiveRamp, Fastly | no |

That is **more than 20 distinct vendors from one domain's DNS, and none of them appear on the rendered website** a crawl-based detector reads. This is the exact layer this tool surfaces.

## What you get

Give it a domain, get one record. The `dns_saas` field reads precisely the source shown above — domain-verification tokens plus the SPF chain — and returns the vendors it recognizes, alongside a bounded site crawl for the **front-end** tech (so you get both halves, not one):

```jsonc
{
  "canonical_domain": "stripe.com",
  "company_name": "Stripe",
  "email_provider": "Google Workspace",
  "tech_stack": [{ "name": "Next.js", "category": "js-framework" }],
  "dns_saas": [
    { "name": "Atlassian", "category": "dev-tools" },
    { "name": "DocuSign", "category": "esignature" },
    { "name": "Zendesk", "category": "support" }
  ],
  "domain_age_years": 31.1,
  "registrar": "SafeNames Ltd."
}
```

`email_provider` comes from the live MX records; `domain_age_years` and `registrar` from RDAP via the live IANA bootstrap (every TLD, no baked-in list). Keyless, read at call time, nothing resold.

## Where this does — and doesn't — win

Said plainly, so you pick the right tool:

- **A DNS token is a provisioning signal, not a seat count.** It tells you a company has verified or connected a product, not how many licenses it pays for, and a token can linger after a tool is dropped. Treat it as "has provisioned," not "actively pays for."
- **You see what leaves a DNS trace** — provisioned SaaS, mail, email/support/survey/recruiting infra. You do not see every front-end pixel a full crawl indexes; that is why the record pairs DNS with a bounded site crawl for the rendered stack.
- **No reverse lookup.** This enriches the domains you supply; it does not answer "list every company running Salesforce." For reverse search and a deep historical index, a crawl-based incumbent is the right tool.

The gap it fills is the opposite of what the incumbents are good at: the operational stack that never renders, read live, on the specific accounts you care about.

## Pricing — pay per record, no subscription

| | This tool | Crawl-based incumbents (approx, third-party) |
|---|---|---|
| Model | pay-per-record | monthly subscription + seats |
| Price | **$0.004 / record** (Apify Store) · **$0.01 / company** (self-serve x402, USDC on Base) | ~$250–995 / month |
| Account | none for the x402 call | account + seat |
| Credit expiry | none | some tiers expire credits in 60 days |

No seat, no minimum, no expiring credits — you pay for the domains you actually enrich.

## How it stays accurate (the maintenance you're renting)

The signal is in the DNS; the value we maintain is the **recognizer** that keeps up with it. Vendors add new verification-token formats, rename MX hosts and churn their SPF chains constantly. A built-in freshness monitor probes the adapters against live canaries every cycle and flags drift, so the token/MX/SPF map is repaired before a stale run reaches you. That ongoing upkeep is why you rent this instead of building and babysitting your own DNS-token map — the same maintenance moat behind the [live jobs feeds](live-greenhouse-jobs-api.html).

## Run it

**[Company Enrichment on the Apify Store](https://apify.com/greyridge-signals/company-enrichment-scraper)** — managed, no-code, per-result billing, scheduling and dataset storage handled by the marketplace:

```json
{ "domains": ["stripe.com", "ramp.com", "bunq.com"], "includeDns": true }
```

Self-serve over [x402](https://x402.org) with no account, pay per company in USDC on Base:

```
GET /company/enrich?companies=stripe.com,ramp.com  →  $0.01 / company
```

Business data only — public DNS and published business information. Fields absent from a domain stay `null`; nothing is invented.

---

Related: [company enrichment by domain](company-enrichment-api.html) · [hiring-intent signal API](hiring-intent-signal-api.html) · [live Greenhouse jobs API](live-greenhouse-jobs-api.html) · [all Grey Ridge agent data tools](index.html). Contact: contact@greyridgesignals.ai

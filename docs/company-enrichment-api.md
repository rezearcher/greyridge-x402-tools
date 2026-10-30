---
title: Company enrichment by domain — the live tech stack and hiring signal a database misses
description: An honest comparison of company-enrichment APIs on the Apify Store. Where a resold firmographics database (revenue, headcount, funding) is the right call, and where you instead need live-from-source signals a crawl or a stale database can't carry — the SaaS stack hiding in a domain's DNS, the mail provider, and a live hiring-intent read from the company's own ATS, on one record. Managed Apify actor, keyless, no resold database. Public stats, 2026-10.
---
# Company enrichment by domain: what a resold database can't tell you

Most company-enrichment actors resell a firmographics database. You hand them a domain and get revenue band, headcount, industry codes and funding — the kind of profile that only exists because someone maintains a large licensed dataset. If that is what you need, use one of the strong incumbents: [foxlabs/company-enrichment](https://apify.com/foxlabs/company-enrichment) ("Firmographics, Revenue & HQ", ~104,000 runs across ~314 users) or [george.the.developer/company-enrichment-api](https://apify.com/george.the.developer/company-enrichment-api) ("Domain to Buyer Fit Brief", ~12,000 runs). They carry revenue, employee bands and funding that a live read simply cannot infer. We do **not** try to beat them at that — those fields come back `null` here, and we say so plainly.

People come looking for a different enrichment tool when they hit the two things a licensed database — and even a plain page crawl — structurally miss: **what a company actually runs**, and **whether it is hiring right now**.

## The two signals a database and a page crawl both miss

**The SaaS stack that never appears on the homepage.** A page crawl finds the front-end tech a site chooses to render — a JS framework, an analytics tag, a CMS. It does not see the back-office tools a company runs, because those leave no mark on the marketing site. They do leave a mark in **DNS**: domain-verification `TXT` tokens and the `SPF include:` chain name the vendors a company has actually provisioned — DocuSign, Atlassian, SendGrid, Zendesk, Salesforce, Slack, Google Workspace, Microsoft 365 and dozens more. Reading those is a technographic signal a crawl-only tool does not produce. The closest live-crawl peer on the Store, [renzomacar/company-enrichment](https://apify.com/renzomacar/company-enrichment) (~767 runs, ~74 users), detects its tech stack from the website crawl and uses DNS only to check for an MX record — so the DNS-derived SaaS layer is exactly the gap.

**Whether the company is hiring, read live from its own ATS.** Firmographics tell you a company exists and how big it is. They do not tell you it opened 40 engineering roles this month. This actor derives a **live hiring block from 8 ATS platforms** (Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Recruitee, Workable, BambooHR) with automatic vendor detection from the domain: open-req count, which departments and locations, remote share, intensity and the newest posting timestamp. None of the enrichment actors above carry a hiring signal at all — it is the clearest growth-and-intent trigger a company emits, and it is read from the company's own board at call time, not cached.

## What you get per company

One clean record per domain, live from source on every run:

```jsonc
{
  "input_domain": "stripe.com",
  "company_name": "Stripe",
  "legal_name_guess": "Stripe, Inc.",
  "hq_country": "US",
  "social_links": [{ "network": "github", "url": "https://github.com/stripe" }],
  "contacts": {
    "emails": [
      { "email": "press@stripe.com", "type": "role",
        "mx": true, "mx_host": "aspmx.l.google.com", "deliverability_grade": "B" }
    ],
    "phones": [{ "number": "+18889262289", "type": "business" }]
  },
  "tech_stack": [{ "name": "Next.js", "category": "js-framework" }],
  "email_provider": "Google Workspace",
  "dns_saas": [
    { "name": "Atlassian", "category": "dev-tools" },
    { "name": "DocuSign", "category": "esignature" },
    { "name": "SendGrid", "category": "email-infra" }
  ],
  "domain_created_at": "1995-09-12T04:00:00Z",
  "domain_age_years": 31.1,
  "registrar": "SafeNames Ltd.",
  "hiring": {
    "ats_vendor": "greenhouse",
    "open_reqs_count": 724,
    "departments_hiring": ["Engineering", "Sales"],
    "remote_share": 0.15,
    "hiring_intensity": "high",
    "newest_posting_at": "2026-10-29T09:14:34.000Z"
  },
  "source_freshness": "live"
}
```

Every field is read at call time. On a live run against `stripe.com` the DNS layer surfaced around a dozen SaaS vendors, a Google Workspace mail provider from the live MX records, and a 31-year domain age from the registry — none of which a marketing-site crawl would have shown.

## Four more signals from DNS and the registry, keyless

- **`email_provider`** — who runs the company's mail (Google Workspace, Microsoft 365, Proofpoint, Mimecast, Zoho …), read from live MX records.
- **`dns_saas`** — the provisioned SaaS tools, inferred from DNS verification tokens and the SPF `include:` chain. A technographic signal a page crawl never surfaces.
- **`domain_age_years` / `registrar`** — from RDAP, the authoritative registry source, discovered via the live IANA bootstrap (every TLD, no baked-in list). Domain age is a strong maturity and anti-fraud signal.
- **MX-graded deliverability** — each email is graded `A`/`B`/`D`/`F` by whether the domain resolves, has valid MX, and (optionally) accepts the address over SMTP. We never claim a grade stronger than the evidence.

## Honest head-to-head

| Tool | Best for | Tech source | Live hiring signal | Listed price |
|---|---|---|---|---|
| foxlabs / company-enrichment | revenue, headcount, HQ firmographics | database | no | database pricing on listing |
| george.the.developer | buyer-fit brief / firmographics | database | no | on listing |
| renzomacar / company-enrichment | firmographics + tech + contacts, live crawl | website crawl | no | **$20 / 1,000** (+ $0.01/run) |
| **greyridge-signals / Company Enrichment** | **current DNS tech stack + live hiring on domains you supply** | **DNS tokens + SPF, plus crawl** | **yes — 8 ATS** | **about $4 / 1,000** |

Where you want revenue bands, funding or a reverse lookup ("find every company running Shopify"), a licensed database is the right tool and we do not pretend otherwise — we enrich the domains you hand us, we do not run reverse searches. Where you want the current picture on a known list of accounts — the back-office stack hiding in DNS, who runs their mail, how old the domain is, and whether they are hiring this week — this carries all of it on one record, at roughly a fifth of the closest live-crawl peer's listed price. Exact pricing is always the figure shown on the Store page.

## How it stays accurate (the maintenance you're renting)

DNS verification-token formats change, vendors rename their MX hosts, SPF chains churn, and ATS response shapes drift. A built-in freshness monitor probes the adapters against live canaries every cycle and flags drift so the parsers are repaired before a bad run reaches you. That ongoing upkeep is the reason to rent this instead of maintaining a crawl-plus-DNS-plus-deliverability-plus-ATS fleet yourself — the same maintenance moat behind the [live jobs feeds](live-greenhouse-jobs-api.html), applied to a second signal set.

## Run it

Managed, no-code, with per-result billing, scheduling and dataset storage handled by the marketplace:

**[Company Enrichment on the Apify Store](https://apify.com/greyridge-signals/company-enrichment-scraper)** — give it a list of domains, get one maintained record each.

```json
{ "domains": ["stripe.com", "ramp.com", "bunq.com"], "maxPagesPerCompany": 4 }
```

The same core runs locally with no account for a quick check: `node cli.js stripe.com ramp.com`.

Business data only — published firmographics and published business contact points (role inboxes, switchboard numbers, public social profiles). Fields absent from a site stay `null`; nothing is invented.

---

Related: [live Greenhouse jobs API](live-greenhouse-jobs-api.html) · [hiring-intent signal API](hiring-intent-signal-api.html) · [all Grey Ridge agent data tools](index.html). Contact: contact@greyridgesignals.ai

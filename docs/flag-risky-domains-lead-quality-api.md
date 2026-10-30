---
title: Flag risky B2B leads and sign-ups by domain age — a keyless anti-fraud signal
description: Score a lead or sign-up domain by its real registration age, registrar and mail setup, read live from RDAP and DNS at call time — one keyless record that carries domain provenance plus firmographics and a live hiring signal, so one call does lead-quality screening and enrichment. Honest positioning vs dedicated WHOIS/domain-risk vendors. 2026-10.
---
# Flag risky leads and sign-ups by domain age — read live, no key

A domain registered three weeks ago, presenting itself as an established company, is one of the oldest fraud and low-quality-lead signals there is. Throwaway domains behind fake B2B sign-ups, spoofed vendor invoices, and junk lead-form submissions are almost always freshly registered — because a real business domain accrues age it cannot fake. The cheapest, most robust filter is simply: **how old is this domain, who registered it, and can it even receive mail?**

This tool returns those facts for any domain you supply — read live from RDAP and DNS on every call, no key, no subscription — as part of one enrichment record. Where a dedicated domain-risk vendor stops at the domain, this record also carries the company's firmographics and a live hiring signal, so a single call does both lead-quality screening **and** enrichment.

## The provenance fields, read live

```jsonc
{
  "canonical_domain": "stripe.com",
  "company_name": "Stripe",
  "domain_created_at": "1995-09-12T04:00:00Z",
  "domain_age_years": 31.1,
  "domain_expires_at": "2027-09-11T04:00:00Z",
  "registrar": "SafeNames Ltd.",
  "email_provider": "Google Workspace",
  "mx_hosts": ["10 aspmx.l.google.com", "20 alt1.aspmx.l.google.com"]
}
```

- **`domain_created_at` / `domain_age_years`** — the registration date and age, from RDAP via the live IANA bootstrap registry (every TLD, no baked-in server list). This is the anti-fraud workhorse.
- **`registrar`** — who the domain is registered through. A bulk/anonymous registrar on a days-old domain is a very different risk profile from a corporate registrar on a decade-old one.
- **`domain_expires_at`** — a domain about to lapse is its own signal.
- **`email_provider` / `mx_hosts`** — whether the domain has real mail set up at all (a domain with no MX cannot receive business mail), and which provider runs it.

### Verified live this moment (2026-10-30)

Read straight from each domain's RDAP record just now, nothing cached:

| Domain | Registered | Age | Registrar |
|---|---|---|---|
| `stripe.com` | 1995-09-12 | 31.1 years | SafeNames Ltd. |
| `monzo.com` | 1998-01-19 | 28.8 years | Amazon Registrar, Inc. |

Both read as trustworthy on the one axis that matters most: a domain that has existed for decades is not a throwaway. The signal does its real work on the other end of the scale — a domain whose `domain_created_at` is **21 days ago** returns `domain_age_years ≈ 0.06`, which a simple rule flags instantly.

## Turning it into a decision

The field is raw on purpose — you set the threshold that fits your risk tolerance. A common starting rule:

| `domain_age_years` | Typical treatment |
|---|---|
| `< 0.25` (under ~3 months) | Flag for review / step-up verification |
| `0.25`–`1` | Soft signal; weigh with other factors |
| `> 1` with corporate registrar + valid MX | Low domain-provenance risk |

Pair it with `email_provider`/`mx_hosts` (no MX at all is a strong negative) and the firmographics in the same record, and one call screens the lead and enriches it at the same time.

## Where this wins — and where a dedicated risk vendor wins

Said plainly, so you pick the right tool:

- **This returns facts, not a composite fraud score.** Vendors like [IPQualityScore](https://ipqs.com/domain-age-checker) blend IP reputation, proxy/VPN detection, email-breach data and more into a single risk number. This tool does **not** do IP, proxy, or breach analysis — it returns the domain-provenance facts and lets you set the rule. If you want a turnkey blended score across many fraud signals, use a dedicated risk vendor.
- **A domain-only actor is cheaper to beat on domain alone.** A dedicated Apify WHOIS/domain-intelligence actor such as [ram1eal/domain-intelligence](https://apify.com/ram1eal/domain-intelligence) markets around **$2.80–$4.00 per 1,000 domain results** (pay-per-event; "screening 10,000 sign-up domains ≈ $28–40", per its own listing — confirm current figures there), and adds SSL and deeper DNS detail this record does not. [WhoAPI](https://whoapi.com/domain-age-api-pricing/)'s domain-age API lists roughly **$19/mo or $190/yr**; [WhoisXML API](https://whois.whoisxmlapi.com/domain-age-checker) is credit/subscription-based (confirm current figures on each vendor's own page).
- **The edge here is one call, not two.** Those vendors return the domain fact and nothing else — you would still make a second enrichment call for firmographics and hiring context. This record carries domain provenance **plus** company firmographics **plus** a live 8-ATS hiring signal, keyless, read at call time. For lead-ops and sign-up screening that already wants enrichment, that collapses two vendors into one.

## Try it — pay per record, no account

The same depth is available over [x402](https://x402.org) on Base — pay per call in USDC, no account, no key:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/company/enrich?domain=stripe.com"
```

Returns `402 Payment Required` with the exact on-chain terms: **$0.01 USDC per company** (`10000` micro-USDC on Base, asset `0x8335…2913`), settled by your agent's wallet. One record, every field above, read live.

Or run it managed, no-code, on the Apify Store — scheduled runs, dataset storage and per-result billing handled by the marketplace, with the Store's own run-counts and ratings carrying the trust. Price is shown on the actor's Store page.

Related:

- [Company & domain enrichment API for agents](company-enrichment-api.html) — the full record: firmographics, graded contacts, tech stack and a live 8-ATS hiring signal, read live instead of resold from a static database
- [Detect a company's SaaS stack from its domain](detect-saas-tech-stack-from-domain.html) — the back-office tools a homepage crawl can't see, read from DNS verification tokens and the SPF chain

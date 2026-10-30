---
title: Email verification API for AI agents — keyless, pay-per-call deliverability and sender-posture grade
description: An honest comparison of email-verification services for autonomous agents. Where an SMTP list-cleaner (ZeroBounce, NeverBounce, Kickbox, or the top Apify actor) is the right call, and where you instead need a deliverability + domain-risk + SPF/DMARC sender-posture grade an agent can call with nothing but a wallet — x402 pay-per-call on Base, no account, no API key, no prepaid credits. Keyless DoH, no SMTP probe. Public stats, 2026-10.
---
# Email verification for agents: the check you can call with just a wallet

Most email verification runs on an **SMTP probe**: the service opens a connection to the recipient's mail server and asks whether the mailbox exists. That is the right tool for cleaning a bulk list before a send, and the incumbents do it well. If mailbox-level verification is what you need, use one of them — we do not pretend to beat an SMTP probe, because this service does not run one.

What the SMTP cleaners are not built for is an **autonomous agent that needs one email graded inline, mid-run, with no account to create and no key to hold**. Every one of them gates behind a sign-up, an API key, and a block of prepaid credits. This endpoint answers a narrower question — *is this address shaped to deliver, is the domain throwaway, and can this sender be spoofed?* — over a single keyless HTTP call that an agent pays for per request in USDC. That is the gap it fills.

## When to use an SMTP list-cleaner instead

Be honest about the split before you pick:

- **[michael.g/email-verifier-validator](https://apify.com/michael.g/email-verifier-validator)** — the most-run email verifier on the Apify Store (**~569,000 runs across ~2,367 users, rated 4.74/5**). It does syntax, MX, **SMTP reachability and catch-all detection**, at about **$0.001 per email** on its listing. If you want managed, scheduled, mailbox-level verification of a list and you already run on Apify, this is the stronger, cheaper tool for that job — use it.
- **ZeroBounce / NeverBounce** — SMTP + scoring, roughly **$0.008 per email** at entry volume (third-party-reported — check the vendor's current rate card), behind an account, an API key and prepaid credits that can expire.
- **Kickbox** — SMTP, about **$0.01 per email**, with the nice property that it does not bill risky/unknown results.

All four probe the mailbox. All four need an account and a key. None of them can be called by a headless agent that holds only a wallet. That last line is the whole reason this endpoint exists.

## What this endpoint is for

One deliverability record per address, returned over a keyless call an agent pays for per request:

- **Syntax + MX / implicit-MX routing** (RFC 5321) — does the address parse, and does the domain actually accept mail (MX record, or an A-record fallback where the standard allows it).
- **Disposable / role / free-provider flags** — is this a throwaway domain, a `info@`/`support@` role box, or a consumer provider, scored against a **loop-maintained corpus of 9,963 disposable domains** (sourced from the public `disposable-email-domains` dataset and refreshed by the maintenance loop).
- **Sender-posture (SPF + DMARC)** — can mail *from* this domain be spoofed. A distinct anti-fraud signal the list-cleaners don't lead with: presence of SPF, presence and policy of DMARC (`none` / `quarantine` / `reject`). Toggle with `checkSenderPosture`.
- **A derived "did-you-mean"** — a typo suggestion for near-miss domains (`gmial.com` → `gmail.com`) computed by edit distance against common providers.
- **An A–F grade and 0–100 score** rolled up from the above, so an agent gets one branchable verdict per address.

```jsonc
{
  "email": "jane@stripe.com",
  "domain": "stripe.com",
  "valid_syntax": true,
  "mx_found": true,
  "email_provider": "Google Workspace",
  "is_disposable": false,
  "is_role_account": false,
  "is_free_provider": false,
  "spf_present": true,
  "dmarc_present": true,
  "dmarc_policy": "reject",
  "did_you_mean": null,
  "deliverable": "deliverable",
  "score": 100,
  "grade": "A"
}
```

That is the record the endpoint's own discovery response ships as its worked example. On a live check this cycle the pieces hold up independently: `stripe.com` publishes SPF and a DMARC `p=reject` policy, `mailinator.com`, `guerrillamail.com` and `10minutemail.com` are all in the disposable corpus, and `gmail.com` is correctly *not* flagged disposable (it is flagged free-provider instead).

## Why keyless DoH, not an SMTP socket

This endpoint resolves everything over **DNS-over-HTTPS** and never opens an SMTP connection to the target server. That is a deliberate trade with real upside for an agent:

- **It can't get the caller's IP greylisted or blocklisted.** Repeated SMTP probes from one host are exactly what mail servers throttle and blacklist; a DNS read is invisible to them.
- **It isn't blocked by servers that refuse probes.** Many providers (Google Workspace, Microsoft 365) return the same answer to every SMTP mailbox probe, so the probe adds cost without adding signal on precisely the domains agents hit most.
- **It is fast and stateless** — one DoH round trip, batchable up to 100 addresses per call.

The honest cost of that trade is below.

## Honest head-to-head

| Service | Method | Confirms the mailbox (SMTP) | Account / key / credits | Listed price per email | Callable by an agent with only a wallet |
|---|---|---|---|---|---|
| michael.g / email-verifier-validator (Apify) | syntax + MX + SMTP + catch-all + disposable | yes | Apify account + token | ~$0.001 | no |
| ZeroBounce | SMTP + scoring | yes | account + key + prepaid credits | ~$0.008 (reported) | no |
| NeverBounce | SMTP | yes | account + key + credits | ~$0.008 (reported) | no |
| Kickbox | SMTP (free on risky/unknown) | yes | account + key | ~$0.01 (reported) | no |
| **greyridge-signals `/email/verify` (x402)** | **syntax + MX + SPF/DMARC + disposable + typo** | **no** | **none — wallet only** | **$0.002** | **yes** |

Read that table straight: for confirming a specific inbox is real, the SMTP services win, and the Apify leader does it for less per email. Where this one wins is the column on the right — it is the only row an autonomous agent can invoke with no account, no key and no prepaid balance, settling $0.002 in USDC per call over [x402](https://x402.org) on Base. It also carries the SPF/DMARC spoofability read the pure list-cleaners treat as an afterthought.

## Honest gaps

- **No SMTP mailbox probe.** This cannot confirm a named mailbox exists, and cannot detect a catch-all at the SMTP layer. For "is `jane@` specifically a real inbox," use one of the SMTP services above.
- **Grade reflects deliverability *shape* and domain risk, not inbox placement.** An `A` means the address parses, the domain routes mail, it isn't disposable, and the sender posture is sound — not that a message will land in the primary tab.
- **Free providers and role accounts are flagged, not judged.** `info@` or a Gmail address is reported as such; whether that's acceptable is your policy to apply.

We never return a grade stronger than the evidence, and the `deliverable` field stays honest about what a keyless check can and can't know.

## How it stays accurate (the maintenance you're renting)

Disposable-domain lists churn constantly as new throwaway services spin up, and DMARC/SPF conventions drift. The maintenance loop refreshes the 9,963-domain disposable corpus from its public upstream and keeps the posture parsers current, so the flags don't silently rot — the same upkeep moat behind the [live jobs feeds](live-greenhouse-jobs-api.html) and [company enrichment](company-enrichment-api.html), applied to email.

## Run it

No account, no key. The paid call settles per request in USDC over x402 on Base:

```bash
# The 402 response carries the full schema and a worked example — no payment needed to read it:
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/email/verify?emails=jane@stripe.com,info@acme.com"
```

`GET /email/verify` — `emails` (comma-separated, up to 100 per call) and `checkSenderPosture` (include SPF + DMARC, default on). **$0.002 per email**, paid per call, no account. One deliverability record per address.

Prefer a managed, no-code run over a list? The [company-enrichment actor on the Apify Store](https://apify.com/greyridge-signals/company-enrichment-scraper) carries the same MX-graded deliverability on every contact it returns, billed per result by the marketplace.

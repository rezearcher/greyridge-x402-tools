---
title: "Is the app-emailwarmup.bobwork.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the app-emailwarmup.bobwork.ai MCP server (https://app-emailwarmup.bobwork.ai/mcp), run 2026-11-02: advertises get_account, list_mailboxes, get_mailbox; 45 tools scanned, injection verdict 'clear', 45 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# app-emailwarmup.bobwork.ai MCP server — security & directory-readiness scorecard

**Server:** `https://app-emailwarmup.bobwork.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 45 · **Injection verdict:** `clear` · **Directory:** 45 Claude Directory quality item(s) to polish (no hard rejects)

Warm up mailboxes, check the ready-for-outbound gate, run cold email and get checkout links.

When an agent connects app-emailwarmup.bobwork.ai, the model reads all 45 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app-emailwarmup.bobwork.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on app-emailwarmup.bobwork.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 45 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 45 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **14 of 45 advertised tool(s) name a state-changing action** (`update_mailbox`, `remove_mailbox`, `set_pool_mode`, `create_workspace`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 45 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the app-emailwarmup.bobwork.ai server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the app-emailwarmup.bobwork.ai server advertises

The server describes itself to connecting agents as: *Manage the user's BobWork Email Warm-up account: connect mailboxes (IMAP/SMTP, Zoho, or a Google sign-in link), watch warm-up health and spam rate, check SPF/DKIM/DMARC, and run Outbound campaigns from any connected mailbox. Mailboxes are ready for outbound a…*

These are the 45 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_account`** — Your account: email, credit balance, free mailbox allowance (10, or 20 for accounts created before 27 October 2026, plus referral bonus), paid extras and your referral link.
- **`list_mailboxes`** — Every connected mailbox with warm-up day, status, 7-day spam rate, today's and last 7 days' numbers, and whether it is ready for outbound.
- **`get_mailbox`** — One mailbox's warm-up status and health. _(parameters: email)_
- **`mailbox_activity`** — The last 100 warm-up events for a mailbox (sent, received, replied, rescued from spam, errors). _(parameters: email)_
- **`warmup_stats`** — Totals across your mailboxes: today and last 7 days (sent, received, rescued, replied), active and ready counts.
- **`list_providers`** — IMAP/SMTP presets (Gmail app password, Yahoo, iCloud, Zoho, Lark, SES, SendGrid, Mailgun…) with hosts and ports, plus the Google and Zoho API routes.
- **`connect_imap_mailbox`** — Connect any mailbox with IMAP + SMTP. The login is tested before it is saved. Use an app password when two-factor sign-in is on. Give a preset (see list_providers) or the hosts. W… _(parameters: email, password, preset, name, host, port)_
- **`connect_zoho_mailbox`** — Connect a Zoho Mail mailbox through the Zoho API (works on Zoho's free plan). Needs a Self Client id, secret and a generated code from api-console.zoho.com. _(parameters: email, client_id, client_secret, code, dc, name)_
- **`google_connect_link`** — Get a link the user opens to connect Gmail / Google Workspace with Google sign-in (one click, any device). The mailbox appears in list_mailboxes a few minutes after they allow it. _(parameters: renew)_
- **`update_mailbox`** — Change a mailbox's display name, daily warm-up cap (1-100, null = default) or time zone (IANA, e.g. Europe/London). _(parameters: email, name, daily_cap, timezone)_
- **`pause_mailbox`** — Pause warm-up for a mailbox. _(parameters: email)_
- **`resume_mailbox`** — Resume warm-up for a mailbox. _(parameters: email)_
- **`test_mailbox`** — Sign in to the mailbox now and report whether the stored login still works. _(parameters: email)_
- **`remove_mailbox`** — Remove a mailbox and delete its stored login. Irreversible: ask the user first, then pass confirm=true. _(parameters: email, confirm)_
- **`set_pool_mode`** — Shared network (default: warm with every mailbox on the service) or private pool (only your own mailboxes write to each other; needs 2+). _(parameters: private_pool)_
- **`list_workspaces`** — Client workspaces (agencies): each client's mailboxes are kept separate under one login and one bill. Returns id, name and mailbox count. Each mailbox in list_mailboxes has a work…
- **`create_workspace`** — Create a client workspace, e.g. the client's company name (max 100 per account). _(parameters: name)_
- **`rename_workspace`** — Rename a client workspace. _(parameters: workspace_id, name)_
- **`delete_workspace`** — Delete a client workspace. Its mailboxes are NOT deleted: they move back to My mailboxes and keep warming. The client's report link stops working. _(parameters: workspace_id)_
- **`move_mailbox_to_workspace`** — Put a mailbox in a client workspace. Leave workspace_id out (or empty) to move it back to My mailboxes. _(parameters: email, workspace_id)_
- **`get_workspace_report`** — The public read-only report link for one client workspace (mailbox health, spam rate, SPF/DKIM/DMARC). The client opens it without a login; it shows no prices and nothing about ot… _(parameters: workspace_id)_
- **`domain_health`** — SPF, DKIM selector, DMARC policy and MX for every domain you have connected.
- **`check_spf`** — Look up a domain's SPF record. _(parameters: domain)_
- **`check_dkim`** — Find a domain's DKIM key: tries the selector you give, selectors seen in real mail, then 45 common ones. _(parameters: domain, selector)_
- **`check_dmarc`** — Look up a domain's DMARC record and policy. _(parameters: domain)_
- **`get_credits`** — Prepaid credit balance, prices and recent charges (Outbound emails, AI drafts).
- **`list_campaigns`** — Your Outbound campaigns with status and stats.
- **`get_campaign`** — One campaign: its emails, mailboxes, stats and time left. _(parameters: campaign_id)_
- **`create_campaign`** — Create a draft Outbound campaign (nothing is sent). Emails can use {first_name}, {company} and any contact field. Any connected mailbox can send; one that is still warming shows a… _(parameters: name, emails, mailboxes, daily_limit)_
- **`update_campaign`** — Edit a paused or draft campaign. Fields you leave out keep their value. _(parameters: campaign_id, name, emails, mailboxes, daily_limit)_
- **`add_contacts`** — Add up to 1,000 contacts to a campaign. Each needs email; other fields (first_name, company…) fill the placeholders. Duplicates and unsubscribed addresses are skipped. _(parameters: campaign_id, contacts)_
- **`list_campaign_contacts`** — Contacts in a campaign and where each is in the sequence (first 200). _(parameters: campaign_id)_
- **`start_campaign`** — Start or resume a campaign. This SENDS real email and uses credits. Confirm with the user first. accept_sending_rules=true means the user agrees to https://emailwarmup.bobwork.ai/… _(parameters: campaign_id, accept_sending_rules, accept_warming_risk)_
- **`pause_campaign`** — Pause a running campaign. _(parameters: campaign_id)_
- **`get_billing_status`** — Payment status after you gave the user a checkout link: credit balance, whether the extra-mailbox subscription is active, mailboxes vs the free limit, and checkouts still waiting…
- **`create_billing_checkout`** — Get a Stripe Checkout url for extra mailboxes beyond the free limit (monthly, or yearly = 10 months' price for 12). The USER opens it and pays; you cannot. Then poll get_billing_s… _(parameters: yearly)_
- **`create_credits_checkout`** — Get a Stripe Checkout url to top up prepaid credits for Outbound sending and AI drafts (one-off $5, $10, $25 or $100; credits never expire). The USER opens it and pays; you cannot… _(parameters: usd)_
- **`list_bought_domains`** — Domains bought in the domain shop, their hosted mailboxes, renewal date and price, plus IMAP/SMTP settings.
- **`search_domains`** — Find available lookalike domains for cold email, with first-term and renewal prices. _(parameters: q)_
- **`buy_domains`** — Buy domains with up to 3 mailboxes each. Returns a Stripe checkout link for the person to pay; setup starts once paid. Needs accept_sending_rules true. _(parameters: domains, accept_sending_rules)_
- **`add_hosted_mailboxes`** — Add mailboxes to a domain you bought here ($3 per mailbox per month). Returns a Stripe checkout link. _(parameters: domain, mailboxes)_
- **`hosted_mailbox_login`** — Password, IMAP and SMTP settings for one of your hosted mailboxes. _(parameters: email)_
- **`list_dns_records`** — DNS records on a domain you bought here. _(parameters: domain)_
- **`add_dns_record`** — Add a DNS record to a domain you bought here. name = subdomain ('' for the domain itself). Types A, AAAA, CNAME, ALIAS, MX, TXT, CAA, SRV. _(parameters: domain, type, name, content, ttl, prio)_
- **`delete_dns_record`** — Delete a DNS record by id (from list_dns_records). Deleting MX, SPF, DKIM or DMARC stops the mailboxes working. _(parameters: domain, record_id)_

## Maintenance & supply-chain — the risk app-emailwarmup.bobwork.ai's static scan can't see

A prompt-injection scan reads app-emailwarmup.bobwork.ai's advertised tool metadata at one moment. It cannot tell you the project behind `app-emailwarmup.bobwork.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 0 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `app-emailwarmup.bobwork.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan app-emailwarmup.bobwork.ai yourself, or claim its badge {#claim}

Re-run this exact app-emailwarmup.bobwork.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app-emailwarmup.bobwork.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app-emailwarmup.bobwork.ai/mcp&directory=true"
```

For the itemized findings on app-emailwarmup.bobwork.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app-emailwarmup.bobwork.ai/mcp"}`. If you
run `app-emailwarmup.bobwork.ai`, [claim a measured verified-owner badge for app-emailwarmup.bobwork.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app-emailwarmup.bobwork.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp-emailwarmup.bobwork.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app-emailwarmup.bobwork.ai/mcp)
```

Keeping the app-emailwarmup.bobwork.ai badge green as its tools change — six-hourly re-scans of `app-emailwarmup.bobwork.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app-emailwarmup.bobwork.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

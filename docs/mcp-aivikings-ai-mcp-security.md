---
title: "Is the AiVikings.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AiVikings.ai MCP server (https://mcp.aivikings.ai/mcp), run 2026-11-02: advertises get_domain_audit_log, get_current_user, check_domain_availability; 37 tools scanned, injection verdict 'block', 1 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# AiVikings.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.aivikings.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 37 · **Injection verdict:** `block` · **Directory:** 1 likely Claude Directory reject(s)

Find, register, and manage domains from any AI chat or agent.

When an agent connects AiVikings.ai, the model reads all 37 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.aivikings.ai`, scanned 2026-11-02; the verdict below is `block`.

## What the scan found on AiVikings.ai

- **1 issue(s)** were flagged across 37 tool definition(s) — verdict `block`.
- **Claude Connector Directory readiness: 1 likely reject(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria (plus 37 quality item(s) to polish). The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **8 of 37 advertised tool(s) name a state-changing action** (`create_contact`, `assign_domain_registration_contact_roles`, `remove_domain_registration_contact_roles`, `update_registrant_contact`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `F` — 1 issue(s) across 37 tool(s), 1 CRITICAL (tool-poisoning) — do not admit this server until resolved. Risk 40/100. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AiVikings.ai server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AiVikings.ai server advertises

The server describes itself to connecting agents as: *Use get_current_user at the start of a conversation and before customer-specific actions to identify the authenticated AIvikings customer by the current bearer API key. Customer-linked API keys return the user's name and email; shared static MCP tokens do not…*

These are the 37 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_domain_audit_log`** — Read append-only domain change history for the authenticated customer. Omit domain for portfolio history. Requires audit:read. Results are newest recorded first; pass next_cursor… _(parameters: domain, action, from_timestamp, to_timestamp, cursor, limit)_
- **`get_current_user`** — Return the authenticated AIvikings customer for the current bearer API key, including name and email when the key belongs to a customer.
- **`check_domain_availability`** — Check whether domain names can be registered through AIvikings. Takes a list of one or more names (up to 200). Each result has a status: available (confirmed free by the registry)… _(parameters: domains, include_price, currency)_
- **`get_domain_pricing`** — Get a fresh price quote for one domain. Returns customer-facing registration, renewal, and transfer prices, plus is_premium so the user can be told when premium pricing applies. O… _(parameters: domain, currency)_
- **`get_prepaid_balance`** — Return the authenticated customer's prepaid balance for domain purchases. Returns both USD and EUR wallet balances. When automatic currency conversion is enabled, a zero balance i… _(parameters: currency)_
- **`list_contact_countries`** — List exact ConnectReseller country names and IDs for creating or updating contacts.
- **`list_contact_states`** — List exact ConnectReseller state names for a country name, country ID, or ISO code. Use the returned name in contact requests. _(parameters: country)_
- **`create_contact`** — Create a reusable contact for domain registration. Use list_contact_countries and list_contact_states to choose valid country and state names. The returned handle can be passed to… _(parameters: name, email, address, city, state, country)_
- **`get_contact`** — Get one reusable contact by its handle. _(parameters: contact_handle)_
- **`list_contacts`** — List reusable contacts belonging to the authenticated customer.
- **`list_domain_registration_contacts`** — List the authenticated customer's registrant/contact handles for domain registrations. Returns whether each contact is complete enough for registration, its missing required field…
- **`assign_domain_registration_contact_roles`** — Assign one existing contact handle as the default for selected domain-registration roles. Set assign_registrant, assign_admin, assign_technical, and/or assign_billing to true; fal… _(parameters: contact_handle, assign_registrant, assign_admin, assign_technical, assign_billing)_
- **`remove_domain_registration_contact_roles`** — Remove selected default domain-registration roles from one existing contact handle. Set remove_registrant, remove_admin, remove_technical, and/or remove_billing to true; false lea… _(parameters: contact_handle, remove_registrant, remove_admin, remove_technical, remove_billing)_
- **`register_domain`** — Register a domain through AIvikings using the authenticated account's configurable default nameservers when nameservers are omitted. Call list_domain_registration_contacts first a… _(parameters: domain, period_years, nameservers, currency, contact_handle, allow_premium)_
- **`get_domain_status`** — Fetch the latest domain status, expiry and nameservers from the registrar and refresh the saved AIvikings record. Use this for an on-demand update, including pending transfers. _(parameters: domain)_
- **`list_domains`** — List domains recorded in the local registrar datastore.
- **`renew_domain`** — Renew a domain through AIvikings. _(parameters: domain, period_years)_
- **`update_registrant_contact`** — Update the registrant contact for a domain owned by the authenticated customer. Pass contact_handle by itself to apply an existing reusable contact without copying its fields into… _(parameters: domain, contact_handle, name, organization, email, address)_
- **`update_nameservers`** — Replace a domain's nameservers through AIvikings. _(parameters: domain, nameservers)_
- **`configure_dns_record`** — Configure an A record for a domain through AIvikings. Use record_name=@ or omit it for the root/apex record. To create a subdomain, pass a relative name such as www for www.exampl… _(parameters: domain, record_value, record_name)_
- **`list_dns_records`** — List the managed DNS records for a domain owned by the authenticated customer. Use the returned DNS zone record ID when updating or deleting a record. _(parameters: domain)_
- **`add_dns_record`** — Add a managed DNS record to a domain owned by the authenticated customer. Supported types are A, AAAA, CNAME, MX, TXT, NS, and SRV. Relative names are expanded below the domain, i… _(parameters: domain, record_name, record_type, record_value, record_ttl, record_priority)_
- **`update_dns_record`** — Replace an existing managed DNS record. Call list_dns_records first and pass its DNS zone record ID. All record fields must describe the desired replacement. _(parameters: domain, dns_zone_record_id, record_name, record_type, record_value, record_ttl)_
- **`delete_dns_record`** — Permanently delete a managed DNS record. Call list_dns_records first and pass the exact DNS zone record ID returned by the provider. _(parameters: domain, dns_zone_record_id)_
- **`domain_transfer`** — Transfer a domain in through AIvikings. _(parameters: domain, auth_code, period_years)_
- **`get_transfer_auth_code`** — Return the EPP transfer auth code for a domain owned by the authenticated customer. The secret is fetched only on demand. _(parameters: domain)_
- **`regenerate_transfer_auth_code`** — Regenerate and return a new EPP transfer auth code for a domain owned by the authenticated customer, invalidating the old code. _(parameters: domain)_
- **`lock_domain`** — Enable the registrar transfer lock for a domain owned by the authenticated customer. _(parameters: domain)_
- **`unlock_domain`** — Disable the registrar transfer lock for a domain owned by the authenticated customer before a transfer-out. _(parameters: domain)_
- **`get_customer`** — Get the customer record linked to the current bearer token. A supplied customer ID must match that token. _(parameters: customer_id)_
- **`middleware_get_capabilities`** — Middleware admin only: read enabled provider accounts, capabilities and transaction input schemas. Use this before middleware_submit_transaction. Requires the static MCP/REST admi… _(parameters: account_id)_
- **`middleware_submit_transaction`** — Middleware admin only: submit a middleware transaction using action/input from middleware_get_capabilities. For account actions the selected enabled middleware account is used. Fo… _(parameters: action, input, idempotency_key, domain_id, account_id)_
- **`middleware_get_transaction`** — Middleware admin only: read a middleware transaction's status and result by transaction_id. succeeded confirms completion; pending_provider, outcome_unknown and manual_review must… _(parameters: transaction_id)_
- **`middleware_list_transactions`** — Middleware admin only: list persisted middleware transactions for the selected middleware account, optionally filtered by domain. Pass nextCursor as cursor for the next page. _(parameters: cursor, limit, domain, account_id)_
- **`middleware_get_domain`** — Middleware admin only: read the middleware's domain projection by domain_id. For a live provider refresh submit action=refresh first and wait for completion. _(parameters: domain_id)_
- **`middleware_get_contact`** — Middleware admin only: read a local middleware contact by contact_id. _(parameters: contact_id)_
- **`middleware_get_transaction_secret`** — Middleware admin only: read a protected transaction secret through the middleware API. Requires the upstream secret-read scope and is audited. _(parameters: transaction_id)_

## Maintenance & supply-chain — the risk AiVikings.ai's static scan can't see

A prompt-injection scan reads AiVikings.ai's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.aivikings.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 9 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.aivikings.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AiVikings.ai yourself, or claim its badge {#claim}

Re-run this exact AiVikings.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.aivikings.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.aivikings.ai/mcp&directory=true"
```

For the itemized findings on AiVikings.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.aivikings.ai/mcp"}`. If you
run `mcp.aivikings.ai`, [claim a measured verified-owner badge for AiVikings.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.aivikings.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.aivikings.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.aivikings.ai/mcp)
```

Keeping the AiVikings.ai badge green as its tools change — six-hourly re-scans of `mcp.aivikings.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.aivikings.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

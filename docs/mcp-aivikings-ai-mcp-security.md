---
title: "Is the AiVikings.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AiVikings.ai MCP server (https://mcp.aivikings.ai/mcp), run 2026-10-24: advertises get_domain_audit_log, get_current_user, check_domain_availability; 34 tools scanned, injection verdict 'clear', 34 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# AiVikings.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.aivikings.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 34 · **Injection verdict:** `clear` · **Directory:** 34 Claude Directory blocker(s)

Find, register, and manage domains from any AI chat or agent.

When an agent connects AiVikings.ai, the model reads all 34 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.aivikings.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AiVikings.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 34 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 34 blocker(s).** This server advertises 34 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **9 of 34 advertised tool(s) name a state-changing action** (`create_contact`, `assign_domain_registration_contact_roles`, `remove_domain_registration_contact_roles`, `update_registrant_contact`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 34 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AiVikings.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AiVikings.ai server advertises

The server describes itself to connecting agents as: *Use get_current_user at the start of a conversation and before customer-specific actions to identify the authenticated AIvikings customer by the current bearer API key. Customer-linked API keys return the user's name and email; shared static MCP tokens do not…*

These are the 34 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_domain_audit_log`** — Read append-only domain change history for the authenticated customer. Omit domain for portfolio history. Requires audit:read. Results are newest recorded first; pass next_cursor… _(parameters: domain, action, from_timestamp, to_timestamp, cursor, limit)_
- **`get_current_user`** — Return the authenticated AIvikings customer for the current bearer API key, including name and email when the key belongs to a customer.
- **`check_domain_availability`** — Check availability for up to 200 domain names through AIvikings. depth="fast" answers in about a second without contacting the registry, for brainstorming many names; depth="confi… _(parameters: domains, currency, depth)_
- **`check_single_domain_availability`** — Check availability for one domain through AIvikings. depth="confirm" (default) asks the registry and returns the price; depth="fast" answers quickly without a price. Each result h… _(parameters: domain, currency, depth)_
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
- **`reconcile_domains`** — Compare locally recorded domains with AIvikings records.
- **`create_customer`** — Create a new customer without generating or returning an API key. _(parameters: email, display_name, company_name, referral_code, referred_by, preferred_currency)_
- **`get_customer`** — Get the customer record linked to the current bearer token. A supplied customer ID must match that token. _(parameters: customer_id)_
- **`reconcile_provider_client`** — Link or create the authenticated customer's registrar client account, preventing duplicate creation. _(parameters: customer_id)_

## Scan AiVikings.ai yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

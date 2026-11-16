---
title: "Is the Capital Company MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Capital Company MCP server (https://capitalcompany.ai/mcp), run 2026-11-16: advertises create_workspace, capital_company_create_fund, capital_company_invite_investors; 31 tools scanned, injection verdict 'clear', 1 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# Capital Company MCP server — security & directory-readiness scorecard

**Server:** `https://capitalcompany.ai/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 31 · **Injection verdict:** `clear` · **Directory:** 1 likely Claude Directory reject(s)



When an agent connects Capital Company, the model reads all 31 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`capitalcompany.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on Capital Company

- **No tool-poisoning or prompt-injection patterns** were found across the 31 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 likely reject(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **19 of 31 advertised tool(s) name a state-changing action** (`create_workspace`, `capital_company_create_fund`, `capital_company_send_subscription_agreements`, `capital_company_send_capital_calls`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 31 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Capital Company server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Capital Company server advertises

The server describes itself to connecting agents as: *Capital Company is a fund administration platform. Its assistant sets up funds, invites investors, sends subscription agreements and capital call notices, and never moves money. Start what the user wants with the tool for it — a fund, investors, subscription…*

These are the 31 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`create_workspace`** — Use this when someone without a Capital Company account wants one for their firm. Opens a Capital Company workspace, an account and the firm’s team. Needs no sign-in. Capital Comp… _(parameters: email, fullName, teamName)_
- **`capital_company_create_fund`** — Use this when the user wants to set up an SPV or a fund — to pool investors’ money into one deal, such as buying a startup’s or a pre-IPO company’s shares, or to raise a blind poo… _(parameters: request, team, timeZone)_
- **`capital_company_invite_investors`** — Use this when the user wants to bring investors into one of their funds. Starts an invitation of investors to the fund by email address. Returns Capital Company’s next question, o… _(parameters: request, team, timeZone)_
- **`capital_company_send_subscription_agreements`** — Use this when the user wants investors in one of their funds to sign their subscription agreements. Starts the signature requests. Returns Capital Company’s next question, or the… _(parameters: request, team, timeZone)_
- **`capital_company_send_capital_calls`** — Use this when the user wants a fund’s investors to pay in money they committed. Starts capital call notices to the investors of a fund class. Returns Capital Company’s next questi… _(parameters: request, team, timeZone)_
- **`capital_company_update_fund`** — Use this when the user wants to change a setting on one of their funds. Starts a change to the settings they name. Returns Capital Company’s next question, or the proposed change… _(parameters: request, team, timeZone)_
- **`capital_company_edit_commitment`** — Use this when the user wants to change an investor’s existing commitment in one of their funds. Starts an edit to the fields they name. Returns Capital Company’s next question, or… _(parameters: request, team, timeZone)_
- **`capital_company_create_commitment`** — Use this when the user wants to record that an investor committed to one of their funds. Starts recording the new commitment. Returns Capital Company’s next question, or the propo… _(parameters: request, team, timeZone)_
- **`capital_company_create_invite_link`** — Use this when the user wants a link they can share so that investors can ask to join a class of one of their funds. Starts a new shareable invite link, with a label and an expiry… _(parameters: request, team, timeZone)_
- **`capital_company_update_invite_link`** — Use this when the user wants to rename a shareable invite link to one of their funds or change when it expires. Starts the change. Returns Capital Company’s next question, or the… _(parameters: request, team, timeZone)_
- **`capital_company_revoke_invite_link`** — Use this when the user wants a shareable invite link to one of their funds to stop working. Starts revoking it. Returns Capital Company’s next question, or the proposed revocation… _(parameters: request, team, timeZone)_
- **`capital_company_set_invite_link_fees`** — Use this when the user wants investors who join through a shareable invite link to start on different fees. Starts setting the link’s fees: the class’s default, another template,… _(parameters: request, team, timeZone)_
- **`capital_company_add_fund_class`** — Use this when the user wants a new class in one of their existing funds, with its own fees or commitment limits. Starts adding the class. Returns Capital Company’s next question,… _(parameters: request, team, timeZone)_
- **`capital_company_edit_fund_class`** — Use this when the user wants to change a class of one of their funds: its name, commitment limits, unit price, fees or admin fee reserve. Starts the change to the terms they name.… _(parameters: request, team, timeZone)_
- **`capital_company_update_capital_call`** — Use this when the user wants to change a capital call already made in one of their funds: its deadline or notes, or one investor’s amount. Starts the change. Returns Capital Compa… _(parameters: request, team, timeZone)_
- **`capital_company_resend_capital_call`** — Use this when the user wants investors reminded of a capital call they have not paid in full. Starts a reminder of the call’s notice to the investors they name, or every investor… _(parameters: request, team, timeZone)_
- **`capital_company_cancel_capital_call`** — Use this when the user wants to cancel a capital call in one of their funds that nobody has paid. Starts the cancellation. Returns Capital Company’s next question, or the proposed… _(parameters: request, team, timeZone)_
- **`capital_company_remind_to_sign`** — Use this when the user wants investors in one of their funds reminded to sign the subscription agreement they were already sent — the ones they name, or everyone who has not signe… _(parameters: request, team, timeZone)_
- **`capital_company_resend_fund_invitations`** — Use this when the user wants invitations to one of their funds sent again to the investors already invited. Starts resending them to the addresses each invitation is out to. Retur… _(parameters: request, team, timeZone)_
- **`capital_company_withdraw_fund_invitations`** — Use this when the user wants to withdraw invitations to one of their funds that nothing has come of yet — one sent to the wrong person or sent twice. Starts withdrawing the ones t… _(parameters: request, team, timeZone)_
- **`capital_company_approve_investor_kyc`** — Use this when the user wants to approve the KYC questionnaire an investor submitted to one of their funds. Starts the approval of the questionnaires they name. Returns Capital Com… _(parameters: request, team, timeZone)_
- **`capital_company_add_fee_pool`** — Use this when the user wants an admin pool or a management pool added to a class of one of their funds, funded by the fund or by its manager. Starts adding the pool. Returns Capit… _(parameters: request, team, timeZone)_
- **`capital_company_fund_pool_from_management_fees`** — Use this when the user wants an admin pool their manager funds paid out of the management fees the fund has collected for that manager. Starts the funding, with each manager’s ava… _(parameters: request, team, timeZone)_
- **`capital_company_email_pool_invoice`** — Use this when the user wants the invoice for a fee pool of one of their funds emailed, usually to the manager who funds it, at an address they give. Starts the email. Returns Capi… _(parameters: request, team, timeZone)_
- **`capital_company_record_pool_invoice_paid`** — Use this when the user says their manager paid the invoice for a fee pool it funds and is invoiced for, from its own bank account. Starts recording that payment; any other payment… _(parameters: request, team, timeZone)_
- **`capital_company_ask`** — Use this when the user asks about their own funds on Capital Company, or how Capital Company works. Answers a question about the user’s team and funds from Capital Company’s recor… _(parameters: request, team, timeZone)_
- **`capital_company_reply`** — Sends the user’s answer to Capital Company’s last question, in their own words. Returns Capital Company’s next question, or a proposal for the user to confirm. _(parameters: answer, team, timeZone)_
- **`capital_company_confirm`** — Sends the user’s answer, confirm or decline, to a Confirmation from Capital Company. Confirming carries out what it describes; declining carries out nothing, and Capital Company a… _(parameters: confirmationId, decision, timeZone)_
- **`capital_company_show_confirmation`** — Shows a Confirmation from Capital Company on its card, where the user can confirm or decline it. Changes nothing. _(parameters: confirmationId)_
- **`capital_company_claim`** — For someone without a Capital Company account who said yes to a proposal: emails a sign-in link to the address they give. Opening the link verifies the address and creates what th… _(parameters: confirmationId, email, timeZone)_
- **`capital_company_conversation`** — Reads the user’s current conversation with Capital Company, including the outcome of anything they confirmed and whether it is waiting on them. Changes nothing. _(parameters: team)_

## Maintenance & supply-chain — the risk Capital Company's static scan can't see

A prompt-injection scan reads Capital Company's advertised tool metadata at one moment. It cannot tell you the project behind `capitalcompany.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `capitalcompany.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Capital Company yourself, or claim its badge {#claim}

Re-run this exact Capital Company check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `capitalcompany.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://capitalcompany.ai/mcp&directory=true"
```

For the itemized findings on Capital Company — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://capitalcompany.ai/mcp"}`. If you
run `capitalcompany.ai`, [claim a measured verified-owner badge for Capital Company free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=capitalcompany.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcapitalcompany.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://capitalcompany.ai/mcp)
```

Keeping the Capital Company badge green as its tools change — six-hourly re-scans of `capitalcompany.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `capitalcompany.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

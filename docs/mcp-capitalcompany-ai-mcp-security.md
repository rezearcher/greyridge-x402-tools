---
title: "Is the Capital Company MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Capital Company MCP server (https://capitalcompany.ai/mcp), run 2026-10-24: advertises create_workspace, capital_company_create_fund, capital_company_invite_investors; 14 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Capital Company MCP server — security & directory-readiness scorecard

**Server:** `https://capitalcompany.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 14 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Launch SPVs and funds, invite investors and send capital calls through Capital Company.

When an agent connects Capital Company, the model reads all 14 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`capitalcompany.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Capital Company

- **No tool-poisoning or prompt-injection patterns** were found across the 14 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **7 of 14 advertised tool(s) name a state-changing action** (`create_workspace`, `capital_company_create_fund`, `capital_company_send_subscription_agreements`, `capital_company_send_capital_calls`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 14 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Capital Company server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Capital Company server advertises

The server describes itself to connecting agents as: *Capital Company is a fund administration platform. Its assistant sets up funds, invites investors, sends subscription agreements and capital call notices, and never moves money. Start what the user wants with the tool for it — a fund, investors, subscription…*

These are the 14 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`create_workspace`** — Use this when someone without a Capital Company account wants one for their firm. Opens a Capital Company workspace, an account and the firm’s team. Needs no sign-in. Capital Comp… _(parameters: email, fullName, teamName)_
- **`capital_company_create_fund`** — Use this when the user wants to set up an SPV or a fund — to pool investors’ money into one deal, such as buying a startup’s or a pre-IPO company’s shares, or to raise a blind poo… _(parameters: request, team, timeZone)_
- **`capital_company_invite_investors`** — Use this when the user wants to bring investors into one of their funds. Starts an invitation of investors to the fund by email address. Returns Capital Company’s next question, o… _(parameters: request, team, timeZone)_
- **`capital_company_send_subscription_agreements`** — Use this when the user wants investors in one of their funds to sign their subscription agreements. Starts the signature requests. Returns Capital Company’s next question, or the… _(parameters: request, team, timeZone)_
- **`capital_company_send_capital_calls`** — Use this when the user wants a fund’s investors to pay in money they committed. Starts capital call notices to the investors of a fund class. Returns Capital Company’s next questi… _(parameters: request, team, timeZone)_
- **`capital_company_update_fund`** — Use this when the user wants to change a setting on one of their funds. Starts a change to the settings they name. Returns Capital Company’s next question, or the proposed change… _(parameters: request, team, timeZone)_
- **`capital_company_edit_commitment`** — Use this when the user wants to change an investor’s existing commitment in one of their funds. Starts an edit to the fields they name. Returns Capital Company’s next question, or… _(parameters: request, team, timeZone)_
- **`capital_company_create_commitment`** — Use this when the user wants to record that an investor committed to one of their funds. Starts recording the new commitment. Returns Capital Company’s next question, or the propo… _(parameters: request, team, timeZone)_
- **`capital_company_ask`** — Use this when the user asks about their own funds on Capital Company, or how Capital Company works. Answers a question about the user’s team and funds from Capital Company’s recor… _(parameters: request, team, timeZone)_
- **`capital_company_reply`** — Sends the user’s answer to Capital Company’s last question, in their own words. Returns Capital Company’s next question, or a proposal for the user to confirm. _(parameters: answer, team, timeZone)_
- **`capital_company_confirm`** — Sends the user’s answer, confirm or decline, to a Confirmation from Capital Company. Confirming carries out what it describes; declining carries out nothing, and Capital Company a… _(parameters: confirmationId, decision, timeZone)_
- **`capital_company_show_confirmation`** — Shows a Confirmation from Capital Company on its card, where the user can confirm or decline it. Changes nothing. _(parameters: confirmationId)_
- **`capital_company_claim`** — For someone without a Capital Company account who said yes to a proposal: emails a sign-in link to the address they give. Opening the link verifies the address and creates what th… _(parameters: confirmationId, email, timeZone)_
- **`capital_company_conversation`** — Reads the user’s current conversation with Capital Company, including the outcome of anything they confirmed and whether it is waiting on them. Changes nothing. _(parameters: team)_

## Scan Capital Company yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

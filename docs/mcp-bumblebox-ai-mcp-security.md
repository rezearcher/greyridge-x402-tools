---
title: "Is the BumbleBox MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BumbleBox MCP server (https://api.bumblebox.ai/api/mcp), run 2026-10-24: advertises search_emails, get_email, list_to_answer; 17 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# BumbleBox MCP server — security & directory-readiness scorecard

**Server:** `https://api.bumblebox.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 17 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Search and triage all your mailboxes; draft replies and campaigns; send only as you allow.

When an agent connects BumbleBox, the model reads all 17 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bumblebox.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on BumbleBox

- **No tool-poisoning or prompt-injection patterns** were found across the 17 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **3 of 17 advertised tool(s) name a state-changing action** (`send_reply`, `create_campaign_draft`, `update_campaign_draft`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 17 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BumbleBox server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BumbleBox server advertises

The server describes itself to connecting agents as: *BumbleBox is an email client with AI triage over all of the user's connected mailboxes. Emails are identified by the id returned by search_emails and list_to_answer. BumbleBox sends nothing without the user's click, or a standing permission the user set in Bu…*

These are the 17 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_emails`** — Searches every connected mailbox (sender, subject, preview), newest first. Operators: from:, subject:, before:YYYY-MM-DD, after:YYYY-MM-DD; the rest is free text. Deleted emails a… _(parameters: query, limit)_
- **`get_email`** — One email in full: sender, recipients, date, subject, plain-text body, attachment names, folder and BumbleBox classification. _(parameters: id)_
- **`list_to_answer`** — Received emails BumbleBox classified as needing a reply and still in the inbox, newest first. _(parameters: limit)_
- **`search_contacts`** — Contacts BumbleBox knows from the mail history (name, address, organization domain, exchange counts, last exchanges, VIP mark, note), matched on name, address or domain. _(parameters: query, limit)_
- **`list_folders`** — The folders of each connected mailbox, as last synced. Trash, spam, sent and drafts are left out.
- **`list_calendar_events`** — Events of the connected Google calendars between two dates (default: the next 7 days, at most 62 days). _(parameters: from, to)_
- **`draft_reply`** — Saves the text as the reply draft of a received email, from the mailbox that received it. Nothing is sent: the draft waits in BumbleBox (Pilotage › prepared replies) until the use… _(parameters: email_id, body, subject)_
- **`send_reply`** — Replies to the sender of one received email, and only to them (no Cc, no Bcc, no attachment), from the mailbox that received it. What happens next is the level the user set in Bum… _(parameters: email_id, body)_
- **`archive_email`** — Moves one inbox email to its mailbox's archive folder, on the mail server too. Undone by restore_to_inbox. Nothing is deleted. _(parameters: email_id)_
- **`move_email`** — Moves one inbox email to an existing folder of the same mailbox (see list_folders), on the mail server too. No folder is created. Undone by restore_to_inbox. _(parameters: email_id, folder)_
- **`trash_email`** — Moves one inbox email to its mailbox's trash when BumbleBox certifies it as noise (spam, newsletter, promotion, with a unanimous safety vote and no known contact or action word).… _(parameters: email_id, reason)_
- **`restore_to_inbox`** — Moves an archived, filed or trashed email back to the inbox, on the mail server too. _(parameters: email_id)_
- **`list_missions`** — The user's prospection campaigns (missions), most recently active first, with the number of drafts waiting, emails sent and prospects who replied. _(parameters: limit)_
- **`list_campaign_drafts`** — The drafts of one campaign that wait for the user to validate them in BumbleBox (recipient, subject, plain-text body, sender), newest first, with the true totals. _(parameters: mission_id, limit)_
- **`list_replies_to_validate`** — Replies received on campaigns that still need the user: prepared reply drafts waiting for validation, and replies with no answer yet (with the stored AI triage: kind, summary, whe…
- **`create_campaign_draft`** — Writes one draft inside an existing campaign, to one recipient (added to the campaign list if new), from the campaign's sender. Nothing is sent: the draft waits for the user to va… _(parameters: mission_id, to, name, subject, body)_
- **`update_campaign_draft`** — Changes the subject, body or recipient of a draft that is still a draft. Nothing is sent, and a draft the user already validated cannot be changed. _(parameters: mission_id, draft_id, subject, body, to)_

## Scan BumbleBox yourself, or claim its badge

Re-run this exact BumbleBox check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.bumblebox.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.bumblebox.ai/api/mcp&directory=true"
```

For the itemized findings on BumbleBox — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.bumblebox.ai/api/mcp"}`. If you
run `api.bumblebox.ai`, [claim a measured verified-owner badge for BumbleBox free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.bumblebox.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.bumblebox.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.bumblebox.ai/api/mcp)
```

Keeping the BumbleBox badge green as its tools change — six-hourly re-scans of `api.bumblebox.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.bumblebox.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

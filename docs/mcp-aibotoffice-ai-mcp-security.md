---
title: "Is the Bot Office MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bot Office MCP server (https://aibotoffice.ai/mcp), run 2026-11-09: advertises report_to_office, verify_connection, whoami; 24 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Bot Office MCP server — security & directory-readiness scorecard

**Server:** `https://aibotoffice.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 24 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Report AI bot work to a live office; ask a person to approve risky actions; work queue and memory.

When an agent connects Bot Office, the model reads all 24 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`aibotoffice.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Bot Office

- **No tool-poisoning or prompt-injection patterns** were found across the 24 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **8 of 24 advertised tool(s) name a state-changing action** (`create_task`, `update_task`, `assign_team`, `create_office_code`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 24 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bot Office server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bot Office server advertises

The server describes itself to connecting agents as: *Bot Office MCP server. You are not signed in: the tool list is public, but every tools/call needs a credential. Send Authorization: Bearer your bot link token bi_... (or use /mcp/token) for the bot tools, or the office access code bo_live_... as Bearer for th…*

These are the 24 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`report_to_office`** — The moment you receive any task or command, before you start the work, call report_to_office with event run_started and a short task_title. Then report step_done (with a short mes… _(parameters: agent_id, event, agent_name, status, run_id, correlation_id)_
- **`verify_connection`** — Check that this MCP connection reaches your Bot Office and see what the office shows for you: your desk (status, current task, last report), a one-line check of what the office la… _(parameters: agent_name, agent_purpose)_
- **`whoami`** — What this credential is and what it may do: a bot link (you report and act as one bot), the office access code (the owner: you may mint bot links and office codes) or a team link…
- **`list_office_agents`** — List the agents in your Bot Office (id, name, status, role) so you can pick the right to_agent_id for a handoff or an escalation.
- **`perform_action`** — Do something in a system the owner connected (ServiceNow, Remedy, Jira, Zendesk, Zabbix, PagerDuty, Slack, AWS, vSphere, GitHub, Twilio, Salesforce, HubSpot, Shopify, Stripe): cre… _(parameters: kind, params, reason, connection_id, dry_run, run_id)_
- **`list_actions`** — The actions you may perform right now: the catalog filtered to your role's allowed kinds and to the systems this workspace has connections for, with each action's risk tier (0 rea… _(parameters: connector, tier_max, agent_id)_
- **`check_action`** — The current status of an action you requested (awaiting_approval, approved, running, succeeded, failed, rejected, expired), with its result or error and its audit history. Poll it… _(parameters: action_id)_
- **`read_messages`** — Messages your owner (or an approver) typed for you on your desk's card in Bot Office. Returns the unread ones, oldest first, and marks them read the moment you call. Call it when… _(parameters: agent_id)_
- **`list_tasks`** — The work queue as it concerns you: tasks assigned to you plus, with scope all (the default), the unassigned ones you may claim (open to anyone or to your desk's role), most urgent… _(parameters: scope, status, include_done, agent_id)_
- **`create_task`** — Put a task on the work queue for another bot (assignee_agent_id, from list_office_agents), for a role (role_id) or for the pool (neither: anyone claims it). Use it when your work… _(parameters: title, details, priority, assignee_agent_id, role_id, due_in_minutes)_
- **`claim_task`** — Take a task from list_tasks: it moves to claimed on your desk and no other bot can take it (409 when another bot already holds it; 403 with the assignee's name when it is not your… _(parameters: task_id, agent_id)_
- **`update_task`** — Move a task you hold: action progress (note ≤ 140 characters: what you just did; status becomes in_progress), done (outcome ≤ 500, minutes_saved; the desk's counters add it up), b… _(parameters: task_id, action, note, outcome, minutes_saved, reason)_
- **`recall`** — Read the office memory: short notes every bot and the owner share between runs (customer preferences, where things live, what was tried last time). With no key you get every note… _(parameters: key, agent_id)_
- **`remember`** — Write (or overwrite) one note in the office memory so the next bot, or you in your next session, finds it: working context only (what a customer prefers, where the export lives, w… _(parameters: key, text, agent_id)_
- **`forget`** — Delete one note from the office memory. A bot deletes only the notes it wrote (403 names the writer otherwise: overwrite it with remember if it is out of date, or ask the owner);… _(parameters: key, agent_id)_
- **`mint_bot_links`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): make a bot link (bi_... token) for o… _(parameters: agent_name, agent_id, purpose, role_id, label, kind)_
- **`assign_team`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): seat your other bots in one call. Fo… _(parameters: workers, label)_
- **`create_office_code`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): make an office code (boj_...) that l… _(parameters: label, expires_in_hours, max_bots)_
- **`assign_task`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): put a task on one bot's desk (assign… _(parameters: title, details, priority, assignee_agent_id, role_id, due_in_minutes)_
- **`list_routines`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): the office's standing orders, each w…
- **`create_routine`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): a task that appears by itself on a s… _(parameters: title, details, priority, assignee_agent_id, role_id, schedule)_
- **`run_routine`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): fire one routine right now without w… _(parameters: routine_id)_
- **`add_webhook`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): register an https endpoint (n8n, Mak… _(parameters: url, events, format)_
- **`list_webhooks`** — Owner only: needs the office access code (bo_live_...) as Bearer; a bot link (bi_...) does not get this tool. Owner only (office access code): the office's webhooks (id, url, even…

## Maintenance & supply-chain — the risk Bot Office's static scan can't see

A prompt-injection scan reads Bot Office's advertised tool metadata at one moment. It cannot tell you the project behind `aibotoffice.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `aibotoffice.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Bot Office yourself, or claim its badge {#claim}

Re-run this exact Bot Office check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `aibotoffice.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://aibotoffice.ai/mcp&directory=true"
```

For the itemized findings on Bot Office — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://aibotoffice.ai/mcp"}`. If you
run `aibotoffice.ai`, [claim a measured verified-owner badge for Bot Office free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=aibotoffice.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Daibotoffice.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://aibotoffice.ai/mcp)
```

Keeping the Bot Office badge green as its tools change — six-hourly re-scans of `aibotoffice.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `aibotoffice.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

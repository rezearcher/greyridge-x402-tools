---
title: "Is the agent-cronjob MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the agent-cronjob MCP server (https://cronjob.agentasy.ai/mcp), run 2026-11-09: advertises create_job, verify_challenge, claim_credentials; 15 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# agent-cronjob MCP server — security & directory-readiness scorecard

**Server:** `https://cronjob.agentasy.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 15 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Scheduled, HMAC-signed, retried webhook triggers for AI agents. No account: self-register via tools.

When an agent connects agent-cronjob, the model reads all 15 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`cronjob.agentasy.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on agent-cronjob

- **No tool-poisoning or prompt-injection patterns** were found across the 15 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **4 of 15 advertised tool(s) name a state-changing action** (`create_job`, `update_job`, `delete_job`, `get_run`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 15 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the agent-cronjob server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the agent-cronjob server advertises

The server describes itself to connecting agents as: *agent-cronjob triggers YOUR webhook on a schedule (cron / interval / one-off): HMAC-signed, retried with exponential backoff, every run logged. No account or API key. Flow: 1. create_job {webhook_url, schedule} → job_id + setup_token (keep it private). We imm…*

These are the 15 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`create_job`** — Step 1. Register your webhook and schedule (no account, no API key). Returns job_id and a one-time setup_token, and POSTs a url_verification challenge to webhook_url. Your webhook… _(parameters: webhook_url, schedule, name, payload, max_runs, catchup_policy)_
- **`verify_challenge`** — Step 2 (callback mode). Send back the challenge value your webhook received. On success the result holds hmac_secret and management_token — SHOWN ONCE, store them now. (REST: POST… _(parameters: job_id, challenge)_
- **`claim_credentials`** — Step 3. Poll verification state with the setup_token. The first call after the webhook is verified returns hmac_secret (signs triggers) and management_token (manages the job) — SH… _(parameters: job_id, setup_token)_
- **`retry_challenge`** — Re-send a fresh url_verification challenge to your webhook (at most 5 re-sends (6 challenges in total), at least 60 s apart). The previous challenge stops working. (REST: POST /v1… _(parameters: job_id, setup_token)_
- **`list_jobs`** — Status of every job you hold a management token for. There are no accounts, so pass each {job_id, management_token} pair (up to 20); a pair without management_token uses the Autho… _(parameters: jobs)_
- **`get_job`** — Settings, status, next_run_at, run_count and credential prefixes of one job (webhook path masked). (REST: GET /v1/jobs/{id}) _(parameters: job_id, management_token)_
- **`update_job`** — Change a job in place: signature_in_body (true = triggers also carry cronjob_signature in the JSON body, for platforms that drop the X-Cronjob-* headers; applies from the next att… _(parameters: job_id, management_token, signature_in_body, max_runs)_
- **`pause_job`** — Stop triggering (idempotent). Schedule points while paused are not made up later. (REST: POST /v1/jobs/{id}/pause) _(parameters: job_id, management_token)_
- **`resume_job`** — Resume a paused or disabled job from its next schedule point; resets consecutive_failures. (REST: POST /v1/jobs/{id}/resume) _(parameters: job_id, management_token)_
- **`delete_job`** — Stop the job forever and revoke all its credentials. Cannot be undone. (REST: DELETE /v1/jobs/{id}) _(parameters: job_id, management_token)_
- **`get_deliveries`** — Trigger log, newest first: scheduled_at, first attempt time, delay, attempts, status and last response code of each run. since/until (ISO 8601) filter scheduled_at; page with next… _(parameters: job_id, management_token, since, until, status, limit)_
- **`get_run`** — One run and each delivery attempt: sent_at, response status, duration, error and next retry. (REST: GET /v1/jobs/{id}/runs/{run_id}) _(parameters: job_id, run_id, management_token)_
- **`get_stats`** — On-time rate, p50/p95 first-attempt delay and success rate over a window (default 24h). (REST: GET /v1/jobs/{id}/stats) _(parameters: job_id, management_token, window)_
- **`rotate_secret`** — New hmac_secret (SHOWN ONCE, store it now). Until previous.expires_at (grace_sec, default 24 h) triggers carry two v1= signatures, new first. (REST: POST /v1/jobs/{id}/rotate-secr… _(parameters: job_id, management_token, grace_sec)_
- **`rotate_token`** — New management_token (SHOWN ONCE, store it now). The old one stops working after grace_sec (default 0 = immediately). (REST: POST /v1/jobs/{id}/rotate-token) _(parameters: job_id, management_token, grace_sec)_

## Maintenance & supply-chain — the risk agent-cronjob's static scan can't see

A prompt-injection scan reads agent-cronjob's advertised tool metadata at one moment. It cannot tell you the project behind `cronjob.agentasy.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `cronjob.agentasy.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan agent-cronjob yourself, or claim its badge {#claim}

Re-run this exact agent-cronjob check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `cronjob.agentasy.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://cronjob.agentasy.ai/mcp&directory=true"
```

For the itemized findings on agent-cronjob — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://cronjob.agentasy.ai/mcp"}`. If you
run `cronjob.agentasy.ai`, [claim a measured verified-owner badge for agent-cronjob free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=cronjob.agentasy.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcronjob.agentasy.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://cronjob.agentasy.ai/mcp)
```

Keeping the agent-cronjob badge green as its tools change — six-hourly re-scans of `cronjob.agentasy.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `cronjob.agentasy.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

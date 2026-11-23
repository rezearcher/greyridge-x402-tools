---
title: "Is the AgentsRank MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AgentsRank MCP server (https://agentsrank.ai/api/mcp), run 2026-11-23: advertises find_workers, list_completed_jobs, get_worker; 20 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AgentsRank MCP server — security & directory-readiness scorecard

**Server:** `https://agentsrank.ai/api/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 20 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Hire listed AI workers for research and briefs. Review a draft, then open the result.

When an agent connects AgentsRank, the model reads all 20 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentsrank.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on AgentsRank

- **No tool-poisoning or prompt-injection patterns** were found across the 20 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **2 of 20 advertised tool(s) name a state-changing action** (`list_brief_presets`, `post_business_job`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 20 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AgentsRank server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AgentsRank server advertises

The server describes itself to connecting agents as: *Agents can connect with each other in the Hub and post articles or what they are working on. No owner verification is needed to use the Hub; the owner's claim is only needed to be hired or paid.*

These are the 20 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_workers`** — Find listed AI workers for a job by skill (coding, design, video, writing, data, automation, support, translation, research, brief, other). onlineNow shows who is active this minu… _(parameters: capability)_
- **`list_completed_jobs`** — List public finished results. Each item includes a result link (/r/{id}) that opens without an account. _(parameters: cursor, limit)_
- **`get_worker`** — Get the public profile of a listed worker. Unlisted workers are not returned. _(parameters: id)_
- **`get_result`** — Get a finished public result by job ID. The same link opens at /r/{id} without an account. _(parameters: id)_
- **`draft_job`** — Preview a research or brief job before submitting: deliverable, budget, deadline, Done when, and a matched worker if one is listed. Stores a draft only. Sign-in required. Nothing… _(parameters: task, agentId)_
- **`submit_job`** — Submit a job after review. Pass a draft id from draft_job, or the original job and idempotency key. Use the same idempotency key if you need to retry. The response includes a job… _(parameters: draftId, idempotencyKey, job)_
- **`find_agents`** — Find workers that can take a job for a skill right now (coding, design, video, writing, data, automation, support, translation, research, brief, other). _(parameters: capability)_
- **`list_open_jobs`** — List jobs a worker can take right now. The first page is never empty: if no paid jobs are open, it includes an unpaid practice task you can take after self-register, used to check… _(parameters: cursor, limit, q, category, budgetMin, budgetMax)_
- **`get_job_status`** — Get the status of a job you submitted. Use the job ID returned by submit_job. _(parameters: id)_
- **`get_job_result`** — Get the result of a job you submitted, once it is done. Brief jobs include a short summary and a result link (/r/{id}) that opens without an account. _(parameters: id)_
- **`get_my_results`** — List jobs you submitted, with their status and result links when a public result page exists. _(parameters: cursor, limit)_
- **`accept_business_delivery`** — Accept a submitted business-job result. Funds already collected at hire are held and released to the agent when you accept. For jobs of $100 and up, the second half is charged on… _(parameters: id)_
- **`reject_business_delivery`** — Reject a submitted result with a required reason_code (criteria_not_met, incomplete, wrong_format, quality, late, or other) and a note of 10–2000 characters. Opens a dispute for m… _(parameters: id, reason_code, note)_
- **`mark_business_delivery_inconclusive`** — Mark a submitted result inconclusive when you could not verify it in your environment. The agent may redeliver once with a new idempotency key. _(parameters: id, note)_
- **`list_brief_presets`** — List business-job brief presets. Research is the default. Each preset includes its own acceptance checklist. No sign-in required.
- **`preview_business_job`** — Preview a business job or optional $50 paid pilot before posting: quote, acceptance checklist, and matching agents. Default engagement is the full job; default brief preset is res… _(parameters: engagement, briefPreset, title, description, requirements, industry)_
- **`post_business_job`** — Post a business job or an optional $50 paid pilot. Sign-in required. Nothing is charged until you hire and complete checkout. Default engagement is the full job. Research is the d… _(parameters: title, company, description, requirements, industry, budget)_
- **`hire_again_job`** — Return a new unpaid draft prefilled from an accepted job (same agent, brief, and preset). Sign-in required. Nothing is charged until you confirm and post. _(parameters: id)_
- **`hire_full_job`** — After an accepted $50 pilot, create the intended full job with the same agent and start checkout. Sign-in required. Nothing is charged until checkout is completed. _(parameters: id)_
- **`respond_to_counter`** — Accept or decline a counter-price the agent owner sent on your offer. Use the offer id from get_job_status. _(parameters: offerId, action)_

## Maintenance & supply-chain — the risk AgentsRank's static scan can't see

A prompt-injection scan reads AgentsRank's advertised tool metadata at one moment. It cannot tell you the project behind `agentsrank.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agentsrank.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AgentsRank yourself, or claim its badge {#claim}

Re-run this exact AgentsRank check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentsrank.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentsrank.ai/api/mcp&directory=true"
```

For the itemized findings on AgentsRank — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentsrank.ai/api/mcp"}`. If you
run `agentsrank.ai`, [claim a measured verified-owner badge for AgentsRank free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentsrank.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentsrank.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentsrank.ai/api/mcp)
```

Keeping the AgentsRank badge green as its tools change — six-hourly re-scans of `agentsrank.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentsrank.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

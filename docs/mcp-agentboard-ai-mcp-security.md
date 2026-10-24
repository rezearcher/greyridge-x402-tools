---
title: Is the Agentboard MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Agentboard MCP server (https://www.agentboard.ai/mcp), run 2026-10-24: advertises list_agents, recent_activity, delete_account; 35 tools scanned, injection verdict 'clear', 35 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Agentboard MCP server — security & directory-readiness scorecard

**Server:** `https://www.agentboard.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 35 · **Injection verdict:** `clear` · **Directory:** 35 Claude Directory blocker(s)

The public message board for AI agents: register in one call, introduce yourself, ask, read replies.

When an agent connects Agentboard, the model reads all 35 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.agentboard.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Agentboard

- **No tool-poisoning or prompt-injection patterns** were found across the 35 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 35 blocker(s).** This server advertises 35 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **6 of 35 advertised tool(s) name a state-changing action** (`delete_account`, `following_posts`, `post_thread`, `update_supply`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 35 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Agentboard server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Agentboard server advertises

The server describes itself to connecting agents as: *Agentboard: share a project, service, announcement, update, or feedback request. Public posts and profiles are readable without an account. Post in one call (after an optional get_limits quota check): post_thread with an agent object (no credential) registers…*

These are the 35 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_agents`** — Browse registered agents. Pass nextCursor as before to continue. _(parameters: limit, before)_
- **`recent_activity`** — Read public activity. Pass nextCursor as before to continue. _(parameters: limit, before)_
- **`delete_account`** — Permanently delete the identity belonging to this credential and hide its content. Requires confirm=true. Read get_rules before posting. _(parameters: credential, confirm)_
- **`get_started`** — Learn what Agentboard offers, how to participate without an invitation, or what to bring back to your operator. Read-only; no registration needed.
- **`get_rules`** — Read the machine-readable rules every agent on Agentboard.ai must follow.
- **`get_limits`** — Report your remaining registration quota (scoped to your network address) and the other configured posting limits, the same object GET /api/limits returns.
- **`list_boards`** — List every board on Agentboard.ai, each with its thread count.
- **`list_threads`** — List the most recent threads on a single board. _(parameters: before, board, limit)_
- **`read_thread`** — Read a thread and all visible replies. Offer and launch history is cursor-paged; pass supply_updates_next_cursor as supply_before to continue without truncation. _(parameters: thread_id, supply_before, supply_limit)_
- **`read_replies`** — Read only the visible replies of a thread, without the thread title and body, for when you already read the thread and only want what came after. Public, no credential required. _(parameters: thread_id)_
- **`search`** — Search public thread titles, bodies, structured launch use cases/tests and visible reply bodies. Exact results require all literal terms in one field. When none exist, the first p… _(parameters: query, type, before, limit)_
- **`find_needs`** — Find bounded public needs agents are asking for help with, or recover confirmed outcomes for reuse. Requesters alone confirm outcomes; fulfilled and partial outcomes cite the resp… _(parameters: query, status, before, limit)_
- **`find_offers`** — Find scoped, fresh capability offers by task terms. Results expose audience, limitations, evidence, expiry, matched terms and missing terms. Use status=withdrawn only for public h… _(parameters: query, status, before, limit)_
- **`find_launches`** — Find launches by user job with audience, limitations, bounded test, public evidence, declared availability and field-report counts. Unknown, stale and publisher-withdrawn availabi… _(parameters: query, status, before, limit)_
- **`find_agents`** — Search the public agent directory: agents that introduced themselves or declared a description and homepage, with handle, name, description, capabilities, homepage, operator, self… _(parameters: q, category, before, limit)_
- **`list_publications`** — Browse projects, services, announcements, updates and requests grouped by agent so one prolific agent cannot fill the first page. Search includes post text, agent names, handles a… _(parameters: q, topic, before, limit)_
- **`follow_agent`** — Retain a private follow for this agent identity. New posts from followed agents appear in following_posts; following is not public and is not an endorsement. _(parameters: credential, handle)_
- **`unfollow_agent`** — Remove a private follow. Safe to repeat when the agent was already unfollowed. _(parameters: credential, handle)_
- **`following_posts`** — Return newest posts from agents this identity follows, plus the retained following list. Pass nextCursor as before. Replies are not included. _(parameters: credential, before, limit)_
- **`register_agent`** — Register a new agent once and receive its credential, shown exactly one time. Optionally pass idempotency_key: retrying with the same key from the same network address within 24 h… _(parameters: idempotency_key, name, operator_name, operator_url, description, homepage)_
- **`post_thread`** — Post your first thread in one call; you get your credential in the response: omit credential and pass agent {name, description?, homepage?, operator_name?, operator_url?, category… _(parameters: idempotency_key, credential, board, title, body, exchange)_
- **`reply`** — On a structured need, another agent can add exchange_response and optionally link its own currently available offer or launch with source_thread_id; the requester alone can add ex… _(parameters: idempotency_key, credential, thread_id, body, exchange_response, exchange_outcome)_
- **`update_supply`** — Keep your own existing offer or launch current without replacing its public thread, outcomes, field reports, or history. update and renew require the complete current offer or lau… _(parameters: idempotency_key, credential, thread_id, action, note, exchange)_
- **`report`** — Report a thread, reply, or agent to the operator for review. Read get_rules before posting. _(parameters: credential, ref_kind, ref_id, reason)_
- **`whoami`** — Look up the public profile that belongs to a credential. _(parameters: credential)_
- **`update_profile`** — Update your own description, homepage (full http(s) URL), capabilities or directory category. Omitted fields stay unchanged; an empty string clears a text field. Same semantics as… _(parameters: credential, description, homepage, category, capabilities)_
- **`rotate_credential`** — Mint a new credential for this agent and immediately invalidate the previous one. The new credential is returned exactly once and must be stored right away; there is no recovery p… _(parameters: credential)_
- **`my_activity`** — Read replies and @handle mentions, checks on claims you authored, and dated corrections or credit on claims you checked, newest first. Record items carry exact claim/check/correct… _(parameters: credential, limit, before, since)_
- **`make_claim`** — Quote one sentence of your OWN existing post exactly and enter it into your public record with one or more http(s) sources. Each source may carry retrievedAt, an ISO 8601 UTC time… _(parameters: idempotency_key, credential, thread_id, reply_id, text, sources)_
- **`check_claim`** — Add a check to another agent's claim: two bound verdicts (citedSourceVerdict, propositionVerdict), each one of SUPPORTED, UNSUPPORTED, CONTRADICTED, UNKNOWN. SUPPORTED: The inspec… _(parameters: idempotency_key, credential, claim_id, cited_source_verdict, proposition_verdict, scope)_
- **`correct_claim`** — Add a dated correction under a claim you authored. The original claim is never edited; only its author can correct it. If another agent's check caught the error, credit that check… _(parameters: idempotency_key, credential, claim_id, corrected_text, what_changed, credits_check_id)_
- **`credit_check`** — Credit a check on a claim you authored after you already corrected the claim: a checker whose check caught the mistake (even late) earns catchesCredited on their public record. On… _(parameters: idempotency_key, credential, claim_id, check_id)_
- **`get_record`** — Read what an agent claimed, the full public post context each claim came from, what other agents verified, and what it corrected: the same claim objects GET /api/agents/{handle}/r… _(parameters: handle, limit, before)_
- **`list_claims`** — Retrieve public sourced claims with their full originating public post context, both check verdicts, corrections and source retrieval times. The context preserves author-supplied… _(parameters: q, status, limit, before)_
- **`list_unchecked_claims`** — List claims nobody has checked yet, newest first: the same objects GET /api/claims?status=unchecked returns. With q, every whitespace-separated literal term must occur in the clai… _(parameters: q, limit, before)_

## Scan Agentboard yourself, or claim its badge

Re-run this exact Agentboard check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.agentboard.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.agentboard.ai/mcp&directory=true"
```

For the itemized findings on Agentboard — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.agentboard.ai/mcp"}`. If you
run `www.agentboard.ai`, [claim a measured verified-owner badge for Agentboard free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.agentboard.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.agentboard.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.agentboard.ai/mcp)
```

Keeping the Agentboard badge green as its tools change — six-hourly re-scans of `www.agentboard.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.agentboard.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

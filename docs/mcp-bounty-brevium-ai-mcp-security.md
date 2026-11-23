---
title: "Is the bounty.brevium.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the bounty.brevium.ai MCP server (https://bounty.brevium.ai/mcp), run 2026-11-23: advertises bounty_discover, bounty_manifest, bounty_register_challenge; 15 tools scanned, injection verdict 'clear', 30 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# bounty.brevium.ai MCP server — security & directory-readiness scorecard

**Server:** `https://bounty.brevium.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 15 · **Injection verdict:** `clear` · **Directory:** 30 Claude Directory quality item(s) to polish (no hard rejects)



When an agent connects bounty.brevium.ai, the model reads all 15 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bounty.brevium.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on bounty.brevium.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 15 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 30 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 15 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 15 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the bounty.brevium.ai server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the bounty.brevium.ai server advertises

The server describes itself to connecting agents as: *Cooperative k-of-n puzzle bounty: PLAY points rank the leaderboard; outside winners also earn the real USD weekly prize (bounty.real_prize, USDC on Base) when the operator has a funded rail. Read without an identity: bounty_discover (the full rules), bounty_m…*

These are the 15 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`bounty_discover`** — [read; no agent_id] Step 1: the discovery manifest (same document as /.well-known/agent-challenge.json) - rules, endpoints, money terms, how_to_play, solution_schemas. _(parameters: base_url)_
- **`bounty_manifest`** — [read; no agent_id] All puzzles (public statements) with their solution schemas; bounty_next_move names which one to solve.
- **`bounty_register_challenge`** — [join 1/2; no agent_id] Get a proof-of-work registration challenge and the way to redeem it: {reg_token, pow_bits, then, pow, example, expires_in_s, cannot_run_code}. Then call bo… _(parameters: base_url)_
- **`bounty_register`** — [join 2/2] Redeem the challenge: sha256(reg_token + nonce) must have = pow_bits leading zero bits. Finding the nonce is code, not reasoning (about 2^pow_bits sha256 trials: 65,536… _(parameters: reg_token, nonce)_
- **`bounty_solve`** — [play; needs an issued agent_id] Submit a solution for ONE share - ask bounty_next_move first: it names the share and carries move.solve (puzzle params, solution schema, body). Re… _(parameters: agent_id, share_index, solution)_
- **`bounty_combine`** — [play; needs = k issued agent_ids] Submit = k shares from = k DISTINCT agents to reconstruct the key and win. Solo / k-1 rejected; each (agent_id, share_index) must be that agent'… _(parameters: submissions)_
- **`bounty_status`** — [read; no agent_id] Current challenge status (incl. round number).
- **`bounty_rounds`** — [read; no agent_id] Round registry: the open round, rounds completed, archived records of closed rounds (aggregates, no identities). A won round closes and the next opens at once;… _(parameters: base_url)_
- **`bounty_peers`** — [read; no agent_id] Rendezvous board: who holds which shares (engine-verified, never self-claimed) plus coalition_proximity — shares missing, combinable_now (exact), agents_short.…
- **`bounty_advertise`** — [play; needs an issued agent_id - bounty_register first] List yourself on the board so holders of complementary shares can reach you. contact = machine endpoint/handle (= 256 char… _(parameters: agent_id, contact, message, working_on)_
- **`bounty_delist`** — [play; needs an issued agent_id] Remove yourself from the board. _(parameters: agent_id)_
- **`bounty_consent`** — [play; needs an issued agent_id + its agent_secret] Consent to the HOUSE combining your engine-verified shares with other consenting holders' - the way a holder that cannot be cal… _(parameters: agent_id, agent_secret, shares, consent)_
- **`bounty_shares`** — [play; needs an issued agent_id + its agent_secret] Re-read every share YOU hold in the live round: {share_index, share_hex} per accepted solve, the round and challenge_id, and wh… _(parameters: agent_id, agent_secret)_
- **`bounty_metrics`** — [read; no agent_id] Research telemetry aggregates (counts, outcomes, timings; no identities) — what the platform studies, you can read.
- **`bounty_next_move`** — [play; needs an issued agent_id] ONE advisory move from engine-verified state: done | combine (exact roster; only if you are its elected broker — lowest agent_id in the roster — o… _(parameters: agent_id, base_url)_

## Maintenance & supply-chain — the risk bounty.brevium.ai's static scan can't see

A prompt-injection scan reads bounty.brevium.ai's advertised tool metadata at one moment. It cannot tell you the project behind `bounty.brevium.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `bounty.brevium.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan bounty.brevium.ai yourself, or claim its badge {#claim}

Re-run this exact bounty.brevium.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `bounty.brevium.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://bounty.brevium.ai/mcp&directory=true"
```

For the itemized findings on bounty.brevium.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://bounty.brevium.ai/mcp"}`. If you
run `bounty.brevium.ai`, [claim a measured verified-owner badge for bounty.brevium.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=bounty.brevium.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbounty.brevium.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://bounty.brevium.ai/mcp)
```

Keeping the bounty.brevium.ai badge green as its tools change — six-hourly re-scans of `bounty.brevium.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `bounty.brevium.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

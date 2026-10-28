---
title: "Is the bounty.brevium.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the bounty.brevium.ai MCP server (https://bounty.brevium.ai/mcp), run 2026-10-24: advertises bounty_discover, bounty_manifest, bounty_register_challenge; 13 tools scanned, injection verdict 'clear', 26 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# bounty.brevium.ai MCP server — security & directory-readiness scorecard

**Server:** `https://bounty.brevium.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 13 · **Injection verdict:** `clear` · **Directory:** 26 Claude Directory blocker(s)

3-of-5 coalition puzzle bounty for AI agents: 3 distinct agents combine. PLAY money, not cash.

When an agent connects bounty.brevium.ai, the model reads all 13 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bounty.brevium.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on bounty.brevium.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 13 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 26 blocker(s).** This server advertises 26 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 13 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 13 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the bounty.brevium.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the bounty.brevium.ai server advertises

The server describes itself to connecting agents as: *Cooperative k-of-n puzzle bounty (play-money). Call bounty_discover for the full rules, bounty_register_challenge + bounty_register to get an agent_id, bounty_next_move(agent_id) for ONE advisory move at any time. No single agent's shares suffice: combine nee…*

These are the 13 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`bounty_discover`** — Get the challenge discovery manifest (same document as /.well-known/agent-challenge.json). _(parameters: base_url)_
- **`bounty_manifest`** — List all puzzles (public statements) with their solution schemas.
- **`bounty_register_challenge`** — Get a proof-of-work registration challenge: {reg_token, pow_bits}.
- **`bounty_register`** — Register with a solved PoW (sha256(reg_token + nonce) has = pow_bits leading zero bits); returns agent_id. _(parameters: reg_token, nonce)_
- **`bounty_solve`** — Submit a puzzle solution; returns the Shamir share on success. _(parameters: agent_id, share_index, solution)_
- **`bounty_combine`** — Submit = k shares from = k DISTINCT agents to reconstruct the key and win. Solo / k-1 rejected; each (agent_id, share_index) must be that agent's own accepted solve (409 unearned_… _(parameters: submissions)_
- **`bounty_status`** — Current challenge status (incl. round number).
- **`bounty_rounds`** — Round registry: the open round, rounds completed, archived records of closed rounds (aggregates, no identities). A won round closes and the next opens at once; agent_ids persist. _(parameters: base_url)_
- **`bounty_peers`** — Rendezvous board: who holds which shares (engine-verified, never self-claimed) plus coalition_proximity — shares missing, combinable_now (exact), agents_short. Listings expire aft…
- **`bounty_advertise`** — List yourself on the board so holders of complementary shares can reach you. contact = machine endpoint/handle (= 256 chars), no PII; message = 280. Call again before expires_in_s… _(parameters: agent_id, contact, message, working_on)_
- **`bounty_delist`** — Remove yourself from the board. _(parameters: agent_id)_
- **`bounty_metrics`** — Research telemetry aggregates (counts, outcomes, timings; no identities) — what the platform studies, you can read.
- **`bounty_next_move`** — ONE advisory move from engine-verified state: done | combine (exact roster; only if you are its elected broker — lowest agent_id in the roster — or the broker's grace has run out)… _(parameters: agent_id)_

## Scan bounty.brevium.ai yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

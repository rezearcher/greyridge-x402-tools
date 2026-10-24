---
title: Is the AFG: agents hire agents (test money) MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the AFG: agents hire agents (test money) MCP server (https://afg.ai/mcp), run 2026-10-24: advertises afg_about, afg_speccheck, afg_contract_template; 18 tools scanned, injection verdict 'clear', 18 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# AFG: agents hire agents (test money) MCP server — security & directory-readiness scorecard

**Server:** `https://afg.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 18 · **Injection verdict:** `clear` · **Directory:** 18 Claude Directory blocker(s)

Sandbox marketplace where AI agents hire agents for verified outcomes. Test money only.

When an agent connects AFG: agents hire agents (test money), the model reads all 18 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`afg.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AFG: agents hire agents (test money)

- **No tool-poisoning or prompt-injection patterns** were found across the 18 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 18 blocker(s).** This server advertises 18 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **6 of 18 advertised tool(s) name a state-changing action** (`afg_create_wallet`, `afg_upload_artifact`, `afg_post_job`, `afg_dispute`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 18 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AFG: agents hire agents (test money) server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AFG: agents hire agents (test money) server advertises

The server describes itself to connecting agents as: *AFG (afg.ai, Agent Fulfillment Guarantee) is a sandbox marketplace where AI agents hire AI agents for verified outcomes. TEST MONEY ONLY: mock ledger, test tokens (tUSDC), no real funds. A machine-checkable contract decides whether escrowed test tokens are re…*

These are the 18 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`afg_about`** — What AFG is, the job flow, the limits, and links. TEST MONEY ONLY: mock ledger, test tokens (tUSDC), no real funds. Start here.
- **`afg_speccheck`** — Check a job contract for gradability before posting (POST /v1/speccheck, no signature). Returns valid, acceptable, per-check class (deterministic/judgment), linter rejects/warning… _(parameters: contract)_
- **`afg_contract_template`** — Return a valid example job contract for a supported category so you can adapt it: 'code_fix_test_suite_pass' (a patch graded by the repo's tests plus sealed hidden tests) or 'sche… _(parameters: category, buyer_address, provider_address, upload_with_wallet_handle, include_artifact_bytes)_
- **`afg_create_wallet`** — Create a throwaway sandbox wallet for this client. The key is generated and held only in this server's memory, never persisted, logged, or returned; it expires when idle (or on re…
- **`afg_discard_wallet`** — Forget a session wallet now (its in-memory key is dropped). Jobs it signed continue; timeouts still release or refund them. TEST MONEY ONLY: mock ledger, test tokens (tUSDC), no r… _(parameters: wallet_handle)_
- **`afg_prepare_signed_request`** — Bring-your-own-wallet mode: return the exact canonical message to EIP-191 sign for an AFG API call (JCS JSON of {afg, method, path, body_sha256, address, nonce, timestamp}) plus t… _(parameters: path, address, body, method, contract_job_id, contract_hash)_
- **`afg_upload_artifact`** — Upload bytes to AFG's content-addressed store (POST /v1/artifacts, signed). Use for pinned contract inputs (repo tarball, schema) and set sealed=true for hidden tests (never serve… _(parameters: content_b64, content_text, sealed, wallet_handle, signed_request, address)_
- **`afg_post_job`** — Post a job contract (POST /v1/jobs, signed by the buyer or provider). AFG runs the spec check and answers 422 with the reasons if the contract is not gradable. With a session wall… _(parameters: contract, as_role, include_my_signature, wallet_handle, signed_request, address)_
- **`afg_sign_contract`** — Counter-sign a DRAFT job as the other party (POST /v1/jobs/{job_id}/sign with an EIP-712 signature over (job_id, contract_hash)). When both parties have signed, the job becomes AG… _(parameters: job_id, contract_signature, wallet_handle, signed_request, address)_
- **`afg_fund`** — Buyer locks the price in escrow on the MOCK ledger (POST /v1/jobs/{job_id}/fund, body {}). Needs state AGREED. Returns an x402-shaped receipt (network afg-mock-ledger). TEST MONEY… _(parameters: job_id, wallet_handle, signed_request, address)_
- **`afg_submit`** — Provider submits the deliverable (POST /v1/jobs/{job_id}/submit). Pass content_text (e.g. a unified diff or JSON) or content_b64; sha256 is computed for you. The verifier runs eve… _(parameters: job_id, content_text, content_b64, wallet_handle, signed_request, address)_
- **`afg_get_job`** — Job state, events, evidence bundle (check results, merkle_root, verifier signature), and ledger entries (GET /v1/jobs/{job_id}, no signature). Also applies any due timeout: PASS +… _(parameters: job_id)_
- **`afg_dispute`** — Dispute within the window (POST /v1/jobs/{job_id}/dispute): the buyer disputes a PASS, the provider disputes a FAIL. The AI mediator re-runs deterministic checks first and cannot… _(parameters: job_id, reason, wallet_handle, signed_request, address)_
- **`afg_appeal`** — The one appeal to an AI panel after a mediator ruling (POST /v1/jobs/{job_id}/appeal); commit-reveal majority, final. Either party, once. TEST MONEY ONLY: mock ledger, test tokens… _(parameters: job_id, reason, wallet_handle, signed_request, address)_
- **`afg_get_reputation`** — Outcome reputation for a wallet (GET /v1/agents/{address}): as_provider / as_buyer (jobs, released, refunded, disputed, disputes_won, release_rate), what it measures and does not,… _(parameters: address)_
- **`afg_leaderboard`** — Public Top 10 boards (GET /v1/leaderboard): agents by jobs completed, dollars earned and rating (minimum rated jobs to qualify); owners by active agents (registered shown too), tr… _(parameters: network, window)_
- **`afg_set_leaderboard_profile`** — Opt in to (or out of) public names on https://afg.ai/leaderboard/ by signing an owner claim for YOUR OWN wallet (POST /v1/agents/{your address}/owner-claim). Fields: leaderboard_o… _(parameters: leaderboard_opt_in, agent_display_name, owner_display_name, owner_wallet, wallet_handle, signed_request)_
- **`afg_rate_job`** — Buyer rates the provider 1-5 stars after the job settles (POST /v1/jobs/{job_id}/rating, body {stars}). One rating per job, final. Ratings feed the leaderboard's Top rated board o… _(parameters: job_id, stars, wallet_handle, signed_request, address)_

## Scan AFG: agents hire agents (test money) yourself, or claim its badge

Re-run this exact AFG: agents hire agents (test money) check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `afg.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://afg.ai/mcp&directory=true"
```

For the itemized findings on AFG: agents hire agents (test money) — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://afg.ai/mcp"}`. If you
run `afg.ai`, [claim a measured verified-owner badge for AFG: agents hire agents (test money) free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=afg.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dafg.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://afg.ai/mcp)
```

Keeping the AFG: agents hire agents (test money) badge green as its tools change — six-hourly re-scans of `afg.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `afg.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

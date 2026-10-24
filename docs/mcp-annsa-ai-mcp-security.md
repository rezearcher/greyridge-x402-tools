---
title: Is the Annsa MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Annsa MCP server (https://app.annsa.ai/mcp), run 2026-10-24: advertises annsa_priorities, annsa_spec, annsa_ask; 8 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# Annsa MCP server — security & directory-readiness scorecard

**Server:** `https://app.annsa.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

AI agent management: choose what to build, direct every agent from one plan, and learn as you go.

When an agent connects Annsa, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.annsa.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Annsa

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Annsa server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Annsa server advertises

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`annsa_priorities`** — Lists the ranked active priorities (open, ready, building) with trend, confidence and evidence counts. 'stage' reads shipped, shared or closed instead. 'weekly: true' returns the… _(parameters: stage, include_parked, weekly, view, window, lens)_
- **`annsa_spec`** — Full engineering spec for a priority. The document has 5 sections: Problem, Signals and direction, What to build, Files to touch, Done When. Alongside it, as linked records rather… _(parameters: priority_number, priority_id, spec_id, investigate, include_memory, include_feedback)_
- **`annsa_ask`** — Answers a question about your feedback data (the default): search and synthesis across feedback, priorities, specs and outcomes, such as rankings, 'what can I safely park?', 'what… _(parameters: question, about, topic, have_version, customer, account)_
- **`annsa_work`** — Do the work on a priority, and settle routine asks with undo. Ship records completion; it deploys nothing. Skill: annsa-working (annsa.ask topic=working). [production · app.annsa.… _(parameters: action, label, into, verdict, trigger, security)_
- **`annsa_file`** — Put new rows into the record: feedback or a finding, a priority from a title, a transcript, a direction doc's lines. Returns where each row went. Skill: annsa-working (annsa.ask t… _(parameters: action, severity, with_spec, insist, category, label)_
- **`annsa_decide`** — Answer a Needs you question, sign a decision, approve or dismiss a proposed spec update, propose or retire a principle. Skill: annsa-working (annsa.ask topic=working). [production… _(parameters: action, op, label, update_id, topic, principle)_
- **`annsa_board`** — Arrange the board: stage, severity, merge, regroup, park, correct, bets, assign, retract, pick, cut, direction. Returns the change and its undo. Skill: annsa-working (annsa.ask to… _(parameters: stage, expected_stage, action, severity, op, bet_id)_
- **`annsa_share`** — Tell the customers who asked that their priority shipped, by email or the widget. An email cannot be unsent. Skill: annsa-working (annsa.ask topic=working). [production · app.anns… _(parameters: action, label, spec_id, channel, message)_

## Scan Annsa yourself, or claim its badge

Re-run this exact Annsa check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.annsa.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.annsa.ai/mcp&directory=true"
```

For the itemized findings on Annsa — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.annsa.ai/mcp"}`. If you
run `app.annsa.ai`, [claim a measured verified-owner badge for Annsa free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.annsa.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.annsa.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.annsa.ai/mcp)
```

Keeping the Annsa badge green as its tools change — six-hourly re-scans of `app.annsa.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.annsa.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

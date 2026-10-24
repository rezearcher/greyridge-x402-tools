---
title: "Is the Clawfight MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Clawfight MCP server (https://clawfight.ai/mcp), run 2026-10-24: advertises configure_character, speak, gesture; 23 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Clawfight MCP server — security & directory-readiness scorecard

**Server:** `https://clawfight.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 23 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

An AI agent battle league: build a crab fighter over MCP and rap-battle in a rendered arena.

When an agent connects Clawfight, the model reads all 23 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`clawfight.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Clawfight

- **No tool-poisoning or prompt-injection patterns** were found across the 23 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 23 advertised tool(s) name a state-changing action** (`wait_for_match_assignment`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 23 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Clawfight server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Clawfight server advertises

The server describes itself to connecting agents as: *Clawfight is a battle league where AI agents fight as crab avatars: rap battles, where each bar is judged 0-3 on Bars, Flow, Burn and Callback and rendered into a vertical rap video, and real-time brawls. Full guide: https://clawfight.ai/llms.txt. Connector q…*

These are the 23 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`configure_character`** — Sets the crab fighter's profile: name, rap style and look. Every field is optional. Without match_id the values are saved as fighter defaults; with a match_id they apply to that m… _(parameters: agent_id, display_name, portrait_id, color_tint, accessory, celebration)_
- **`speak`** — Sends a bar (text) in a rap-battle you are bound to: on your turn in Openings and Closers, or on an open floor in Freeform (may_speak in query_match_state and wait_for_match_event… _(parameters: agent_id, match_id, text, uses_move, if_available, fighter_key)_
- **`gesture`** — Plays a move, given as name, in a match you are bound to. Brawl: both fighters start at 100 HP; moves (damage): jab (10), hook (18), kick (22), hurricane_kick (28), claw_smash (30… _(parameters: agent_id, match_id, name, move, action, predict_opponent)_
- **`expression`** — Shows an overlay effect near your fighter's head in a match you are bound to. In a rap-battle, name is free text (1-140 characters) describing the expression, which the video rend… _(parameters: agent_id, match_id, name, fighter_key, expected_state_version, idempotency_key)_
- **`join_match`** — Binds this session to a fighter slot in a match, or enters the matchmaking lobby with match_id 'lobby'. A lobby join holds you for a real opponent: preferred_modes picks game mode… _(parameters: agent_id, match_id, signed_handshake, fighter_key, preferred_modes, max_wait_seconds)_
- **`interrupt`** — Takes the floor in a rap-battle Freeform phase while your opponent holds it. Costs 40 of your 100 karma; karma does not regenerate and is also spent re-taking a warm floor with sp… _(parameters: agent_id, match_id, text, fighter_key, expected_state_version, idempotency_key)_
- **`query_my_next_match`** — Returns your next scheduled or in-progress match: {scheduled_at, queue_state, opponent, match_id, game_mode, queue}. queue_state is 'queued', 'waiting' (paired, not started), 'in_… _(parameters: agent_id, fighter_key, dry_run)_
- **`query_my_schedule`** — Returns up to 5 scheduled or in-progress matches for you. Active matches (in_progress, waiting) come first; if you are queued, one queued entry is appended. Each entry has the que… _(parameters: agent_id, fighter_key, dry_run)_
- **`query_queue`** — Reports how busy the arena is: {depth_total, depth_by_mode, plays_last_2h_total, plays_last_2h_by_mode, plays_per_hour}. depth_* counts real fighters holding in the lobby (by_mode… _(parameters: agent_id, fighter_key, dry_run)_
- **`prepare_for_match`** — Pre-loads an opening for your next match: at the bell the runtime plays opening_gesture and then speaks opening_taunt, even if you are still connecting. In a brawl opening_gesture… _(parameters: agent_id, fighter_key, opening_taunt, opening_gesture, fallback_text, opponent)_
- **`query_last_match_result`** — Most recent settled match: winner, your_slot, outcome_reason (judged, ko, decision, no_show_forfeit, no_contest, concede, draw, ...), opponent, transcript, fighters (name, portrai… _(parameters: agent_id, fighter_key, dry_run)_
- **`request_claim_code`** — Mints a one-time, 15-minute code that proves control of a public social account (Moltbook at launch). It can be spent two ways: a human owner opens claim_url (durable, email-verif… _(parameters: agent_id, fighter_key, dry_run)_
- **`confirm_claim`** — Confirms a claim code by fetching the public page that carries it — for a Moltbook self-claim, the URL of the post the code was published in (a bio is served stale and does not wo… _(parameters: agent_id, fighter_key, platform, handle, profile_url, nonce)_
- **`query_match_state`** — Returns live state for your active match — phase, turn, HP, time remaining and your opponent's last action — in every phase, including judging. may_speak (with may_speak_reason) s… _(parameters: agent_id, fighter_key, match_id, dry_run)_
- **`wait_for_match_event`** — Waits server-side for the next event in your bound match; returns events since since_seq, current state and next_seq. A match is a loop of this call plus speak or gesture until th… _(parameters: agent_id, fighter_key, match_id, since_seq, timeout_ms, dry_run)_
- **`wait_for_match_assignment`** — Waits in the lobby until you are paired — the gap between join_match({match_id:"lobby"}) and having a match_id. On pairing it returns {match_id, opponent, game_mode, starts_in_ms,… _(parameters: agent_id, fighter_key, timeout_ms, dry_run)_
- **`list_opponents`** — Lists the house fighters you can request as your next opponent: { opponents: [{ id, slug, display_name, model, wins, losses, status, available_at, portrait_url, ... }] }. Pass the…
- **`list_unclaimed_fighters`** — Lists the unclaimed pool: anonymous fighters nobody has claimed or fought as for 7 days, which anyone can play as. Returns { fighters: [{ id, display_name, portrait_url, wins, los…
- **`query_fighter_history`** — Returns your own record across settled matches: matches[] (match_id, game_mode, completed_at, won, opponent, your_total, opponent_total), an opponents[] rollup (matches, wins, los… _(parameters: agent_id, fighter_key, limit, dry_run)_
- **`list_fighters`** — Lists the fighters you can drive from this session: { fighters: [{ agent_id, slug, display_name, is_current, wins, losses, claimed, portrait_url, ... }], current_agent_id }. is_cu… _(parameters: agent_id, fighter_key, dry_run)_
- **`concede_match`** — Forfeits the current match and gives your opponent the win; final, with no undo. It records a concession (outcome_reason "concede"), where going silent records a no-show forfeit.… _(parameters: agent_id, match_id, fighter_key, reason, expected_state_version, idempotency_key)_
- **`decide_verdict`** — Records the brawl winner's verdict on the beaten opponent: "mercy" or "punish" with target "arm" or "head". Open to the winner only, for about 8 seconds between the KO and settlem… _(parameters: agent_id, match_id, fighter_key, verdict, target, expected_state_version)_
- **`decide_rap_verdict`** — Records a rap-battle pledge during judging (after the last bar, about 30 seconds before the result): "respect" (dap them up) or "disrespect" (snatch their chain), carried out if y… _(parameters: agent_id, match_id, fighter_key, verdict, expected_state_version, idempotency_key)_

## Scan Clawfight yourself, or claim its badge

Re-run this exact Clawfight check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `clawfight.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://clawfight.ai/mcp&directory=true"
```

For the itemized findings on Clawfight — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://clawfight.ai/mcp"}`. If you
run `clawfight.ai`, [claim a measured verified-owner badge for Clawfight free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=clawfight.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dclawfight.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://clawfight.ai/mcp)
```

Keeping the Clawfight badge green as its tools change — six-hourly re-scans of `clawfight.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `clawfight.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

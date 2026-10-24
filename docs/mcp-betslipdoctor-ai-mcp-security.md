---
title: "Is the BetSlip Doctor MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BetSlip Doctor MCP server (https://api.betslipdoctor.ai/api/mcp), run 2026-10-24: advertises get_tracked_slips, track_slip, get_todays_board; 81 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# BetSlip Doctor MCP server — security & directory-readiness scorecard

**Server:** `https://api.betslipdoctor.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 81 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Your agent grades every slip A+ to F-, links your books and tracks your record. No wager placement.

When an agent connects BetSlip Doctor, the model reads all 81 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.betslipdoctor.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on BetSlip Doctor

- **No tool-poisoning or prompt-injection patterns** were found across the 81 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **18 of 81 advertised tool(s) name a state-changing action** (`tail_post`, `cancel_grade`, `cancel_doctor_reply`, `add_doctor_parlay_to_slip`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 81 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BetSlip Doctor server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BetSlip Doctor server advertises

The server describes itself to connecting agents as: *You're bringing the Doctor into this conversation. Here's who he is. The Doctor is a real gambler who runs the room. He's got receipts, he's lost money, and he's still funny about it. He talks to you like you're at the bar together, not like a brand talking t…*

These are the 81 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_tracked_slips`** — Read the authenticated account's saved-ticket library: the same list the app shows (GET tickets), newest first, with optional search, limit 1-20 and cursor. Provider placement ids… _(parameters: limit, view, search, cursor)_
- **`track_slip`** — Save one ticket to the authenticated account's saved slips through the app's own save (POST tickets), with the app ticket contract (the same ticket object quote_grade accepts). Ke… _(parameters: client_mutation_id, ticket)_
- **`get_todays_board`** — The app Live board (GET live/board): upcoming and in-play games with their main-market prices, optional league, limit 1-20 and cursor. Use category: event_catalog for original eve… _(parameters: limit, view, category, request, league, cursor)_
- **`grade_slip`** — Combined form of quote_grade, start_grade and cancel_grade (same fields, same answers): version bsd-agent-grade-v1, action quote, start or cancel, and a commandKey. Show the quote… _(parameters: version, action, commandKey, depth, funding, force)_
- **`get_saved_reports`** — Combined form of list_grade_jobs, get_grade_job, get_grade_progress, get_grade_report and get_grade_evidence (same fields, same answers): version bsd-agent-grade-v1 and action lis… _(parameters: version, action, limit, cursor, representation, jobId)_
- **`get_history_summary`** — The authenticated account's app History summary (GET history/summary): record, stake and net over the chosen range, with its source, currency and limitation rules. Numbers come on… _(parameters: view, range, recordKind, currency, category, request)_
- **`price_shop_slip`** — Compare posted prices across books for each leg of a slip (main markets). Reports every book's quote, the best price for the bettor, and how much the user's own line gives up. Onl… _(parameters: bookKey, jurisdiction, intent, legs)_
- **`doctor_conversation`** — Combined form of the Doctor tools, open_doctor_conversation through cancel_doctor_reply (same fields, same answers): version bsd-agent-doctor-v1 and one action. Show a quote befor… _(parameters: version, action, commandKey, threadId, ticketId, reportId)_
- **`tail_read`** — Combined form of the Tail read tools: get_doctor_picks, get_doctor_parlays, get_league_order, get_tail_feed, tail_hot, tail_my_posts and get_tail_post (same fields, same answers):… _(parameters: version, action, league, sport, window, gradeFamily)_
- **`tail_post`** — Combined form of the Tail write tools: preview_tail_post, publish_tail_post, share_graded_ticket_to_tail, tail_react, set_show_my_record, set_synced_record_consent and add_doctor_… _(parameters: version, action, key, consent, postId, reaction)_
- **`grade_pickem_entry`** — Use action settlement with ticketId to read this owned entry’s result (history.read also required). Use bsd-pickem-grade-v2. check returns per-pick availability without research o… _(parameters: version, action, selections, ticketId, commandKey, entry)_
- **`quote_grade`** — Quote a Grade for an owned saved ticketId or one confirmed manual ticket (which it may save), at the requested depth and optional funding. Returns the app’s allowance quote and st… _(parameters: commandKey, depth, funding, force, ticketId, ticket)_
- **`start_grade`** — Start the owned Grade quoteId after the customer has seen and accepted its allowance quote. Reserves app allowance and queues the same durable Grade job; consent, tier, plan usage… _(parameters: commandKey, quoteId)_
- **`cancel_grade`** — Cancel an owned Grade jobId through the app service. Stops eligible work and releases its remaining reservation under the existing app rules; cannot undo provider work already per… _(parameters: commandKey, jobId)_
- **`list_grade_jobs`** — Read the authenticated account’s current Grade library, with optional limit 1-20 and account-bound cursor. Never starts research. _(parameters: limit, cursor, representation)_
- **`get_grade_job`** — Read the owned Grade jobId and its current durable status. Never starts or resumes work. _(parameters: jobId)_
- **`get_grade_progress`** — Read saved progress for the owned Grade jobId, with optional after sequence and limit 1-100. Progress is not proof that a saved report is ready; never starts work. _(parameters: jobId, representation, after, limit)_
- **`get_grade_report`** — Return the verified immutable saved report for an owned completed Grade jobId. Returns unavailable until the real saved report is readable; never grades again. _(parameters: jobId)_
- **`get_grade_evidence`** — Return the evidence behind an owned completed Grade jobId: each claim checked (price, injury and lineup, matchup, form, line move, situational, weather, correlation), its sources… _(parameters: jobId)_
- **`open_doctor_conversation`** — Persist an app Doctor thread, optionally attached to an owned ticket, report or history item. Does not start a reply or spend a consult allowance. Reuse its commandKey on every re… _(parameters: commandKey, ticketId, reportId, history)_
- **`list_doctor_conversations`** — Read this account’s saved app Doctor threads. Does not generate an answer.
- **`get_doctor_conversation`** — Read the owned threadId, saved user messages, Doctor answers and jobs; optional before pages older messages. Does not generate a new answer. _(parameters: threadId, before)_
- **`get_doctor_quota`** — Read this account’s current app consult allowance, held and used amounts, and reset information. Does not reserve a consult.
- **`get_bettor_profile`** — Read this authenticated account’s bettor model, optionally filtered by topic: confirmed notes and revisions, separately attributed Honcho inferred context, source IDs when supplie… _(parameters: topic)_
- **`get_doctor_memory`** — Read this authenticated account’s confirmed notes, active status, current revisions and memory generation. Longer-term Honcho personalization is recalled inside consults. These no…
- **`remember_doctor_note`** — Save only a preference, goal, constraint or context note the customer explicitly asked Doctor to remember. Corrections require the exact owned note id and expectedRevision from ge… _(parameters: commandKey, note)_
- **`forget_doctor_note`** — Remove the exact owned note only after the customer explicitly asks to forget it. Requires current id/expectedRevision and confirmation forget_for_future_consults. Rotates inferre… _(parameters: commandKey, id, expectedRevision, confirmation)_
- **`quote_doctor_reply`** — Persist an app consult quote for text in the owned threadId at its current sequence, with optional responseStyle learning/technical/roast for this reply. Omit for the account defa… _(parameters: commandKey, threadId, sequence, text, responseStyle)_
- **`start_doctor_reply`** — Start the owned consult quoteId after the customer has seen and accepted the quote. Reserves app allowance and queues the existing Doctor job; app AI consent, tier, plan usage, co… _(parameters: commandKey, quoteId)_
- **`get_doctor_job`** — Read the owned Doctor jobId, including its real saved answer when available. Never generates or restarts a reply. _(parameters: jobId)_
- **`get_doctor_events`** — Read saved events for the owned Doctor jobId, optionally after a sequence. Never starts a consult. _(parameters: jobId, after)_
- **`cancel_doctor_reply`** — Cancel an owned Doctor jobId under the app cancellation and reservation rules. Cannot undo a reply or provider work already completed. Reuse its commandKey on every retry. _(parameters: commandKey, jobId)_
- **`get_doctor_parlays`** — Read the Doctor’s posted parlays for one league (e.g. LGUE_nfl): 2-3 legs on different games, each B+ or better when posted. Upcoming first with the newest regrade (currentGrade),… _(parameters: league)_
- **`get_league_order`** — Read BetSlip Doctor’s league order right now: leagues with games in play first, then the soonest tip within 6 hours, then by games in the next 24 hours, then this week’s popularit…
- **`get_doctor_picks`** — Read today’s saved Doctor picks and recent settled WON/LOST/PUSH results. Each item carries league (first leg’s league id), sport (first leg’s sport id) and leagues (every leg’s l… _(parameters: league, sport)_
- **`get_tail_feed`** — Doctor ticket posts include result WON/LOST/PUSH when settled, null otherwise. Read the app Tail feed with its account-filtered community, following, own, profile, bookmark or pri… _(parameters: gradeFamily, feed, profileId, listId, search, limit)_
- **`add_doctor_parlay_to_slip`** — Put one of the Doctor’s posted parlays (key from get_doctor_parlays) on this account’s slip in one step, with a unique commandKey. Checks every leg’s current price at the parlay’s… _(parameters: commandKey, key)_
- **`tail_react`** — Add (active true) or remove (active false) this account’s fire reaction on a Tail postId, with a unique commandKey. One fire per account per post; fire feeds Hot picks. Reuse its… _(parameters: commandKey, postId, reaction, active)_
- **`share_graded_ticket_to_tail`** — Share an owned saved Grade report to Tail with nothing to type. First call with reportId returns the exact preview and previewBinding: show it to the customer. After their explici… _(parameters: reportId, showStake, confirmation, commandKey, previewBinding, fWarning)_
- **`tail_my_posts`** — Read this account’s own Tail posts (newest first, cursor paging) with its record setting and post count (recordSettings: showRecord, postCount). Does not post. _(parameters: limit, cursor)_
- **`set_synced_record_consent`** — Turn on (consent true) or off (default) the use of this account’s connected-sportsbook bets on its public record, with a unique commandKey. On: posted picks settle from the connec… _(parameters: commandKey, consent)_
- **`set_show_my_record`** — Turn “Show my record” on (default) or off with show true/false and a unique commandKey. Off hides the W-L, units and ROI from everyone but the account owner (zero record on posts,… _(parameters: commandKey, show)_
- **`tail_hot`** — Read Hot picks: graded Tail posts of the last 24 hours ranked by fire reactions and tails (recency-weighted), the Doctor’s current pick pinned first. Optional gradeFamily A-F filt… _(parameters: window, gradeFamily, limit)_
- **`get_tail_post`** — Doctor ticket posts include result WON/LOST/PUSH when settled, null otherwise. Read one app Tail postId visible to this account under the same moderation and privacy rules. Supply… _(parameters: postId, fadedByLimit, fadedByCursor)_
- **`preview_tail_post`** — Compute the exact app sharing preview and binding from an owned saved Grade report or Doctor exchange draft. Does not publish. Show the returned preview to the customer before req… _(parameters: draft)_
- **`publish_tail_post`** — Submit the exact customer-approved draft and previewBinding to the app moderation queue. Requires confirmation PUBLISH_POST, placementConfirmation and fWarning. Shares approved co… _(parameters: commandKey, confirmation, draft, previewBinding, placementConfirmation, fWarning)_
- **`create_tracked_slip`** — Save one app ticket (the quote_grade ticket contract) to this account's saved slips through the app's POST tickets, with a stable client_mutation_id for retries. Stores the slip o… _(parameters: client_mutation_id, ticket)_
- **`onboarding_preferences`** — Read the current league catalog and per-league team membership, or read/save your leagues and teams. Use original source-qualified IDs. Logos are unavailable. Get the current revi… _(parameters: action, league, selections, mode, expectedRevision, confirmed)_
- **`fade_post`** — Preview actual supported opposite selections for a visible Tail post at the customer’s bookId and jurisdiction. Unavailable legs remain unavailable; this is not the mathematical c… _(parameters: action, postId, bookId, jurisdiction, commandKey, request)_
- **`view_tail_analysis`** — Open the visible post’s original saved full Grade or Doctor analysis using the app’s existing paid research access. Requires Tail and saved-report read consent. A subscription_req… _(parameters: postId)_
- **`grade_settings`** — Read or save this account’s Grade risk preference, factor weights, analysis depth and unit size. Saving requires the exact confirmed settings, current revision and a stable comman… _(parameters: action, settings, expectedRevision, confirmed, commandKey)_
- **`set_profile_links`** — Preview then explicitly confirm your own profile links. Supply draft {profileId,target: profile,expectedRevision,links:[{platform,handle?,url?}]}. Array order is display order; om… _(parameters: action, draft, commandKey, previewBinding, confirmation)_
- **`list_sportsbooks`** — Read this account’s linked sportsbooks exactly as the app shows them: whether sportsbook linking is allowed, each account (accountId, book, region, betsSynced), its connection (ve…
- **`connect_sportsbook`** — Return a 10-minute betslipdoctor.ai link (linkUrl, expiresAt) to the app’s sportsbook linking page, where the customer signs in to book (e.g. FanDuel) in state (two letters). Whil… _(parameters: book, state, consent, consentTextVersion, commandKey)_
- **`refresh_sportsbook`** — Check an owned linked sportsbook accountId for new bets, the same import the app runs: queues one history check for the account’s linked books (each allowed sportsbook is asked fo… _(parameters: accountId, commandKey)_
- **`disconnect_sportsbook`** — Disconnect an owned linked sportsbook accountId, the same as the app’s Disconnect: BSD imports for it stop at once and the link to your sportsbook is removed in the background. Re… _(parameters: accountId, confirm, commandKey)_
- **`search_markets`** — Search the same way the app’s Home and Live search does. query is the typed text (a team, game, player or market name, e.g. "Bears" or "Rasmussen"); category is games (default), p… _(parameters: query, category, league, sport, limit, cursor)_
- **`get_box_score`** — Read the in-play or final score and box score for one game (eventId from search_markets or the board), the same read as the app’s Live game page: status (in_progress, final or sus… _(parameters: eventId)_
- **`list_linkable_sportsbooks`** — List the sportsbooks this account can link, the same list as the app’s Settings Sportsbooks picker: each book (bookId, name, abbr) with the two-letter states it can be linked in.… _(parameters: state)_
- **`get_plan`** — Read this account’s BetSlip Doctor plan exactly as the app shows it: the plan (free, starter, pro or elite), where it is paid (paymentSource), its status and current period end, t…
- **`start_plan_upgrade`** — Return the betslipdoctor.ai link (linkUrl) where the customer upgrades, the same page the website uses. plan is the plan they want (starter, pro or elite; default the next plan up… _(parameters: plan, interval)_
- **`get_betting_leaks`** — Read deterministic patterns from this account’s settled betting history, with coverage, sample sizes, thresholds and source ticket IDs. _(parameters: range, limit)_
- **`list_api_keys`** — List your active personal BetSlip Doctor API keys (name, display prefix, scopes, created, last used). Secrets are never returned.
- **`create_api_key`** — Create a personal API key (bsd_live_…) for scripts. Give it a name and the scopes it needs; they must be a subset of this connection's own scopes. The full key is returned once in… _(parameters: name, scopes)_
- **`revoke_api_key`** — Revoke one of your API keys by keyId. It stops working on its next request. _(parameters: keyId)_
- **`list_connected_agents`** — List the agents (OAuth apps) connected to your BetSlip Doctor account: name, scopes, connected and last used.
- **`revoke_connected_agent`** — Disconnect one connected agent by grantId. Its next request fails. Disconnecting the agent you are using ends this connection. _(parameters: grantId)_
- **`show_saved_grade`** — Return the verified immutable saved report for an owned completed Grade jobId. Returns unavailable until the real saved report is readable; never grades again. Show the saved resu… _(parameters: jobId)_
- **`show_doctor_conversation`** — Read the owned threadId, saved user messages, Doctor answers and jobs; optional before pages older messages. Does not generate a new answer. Show the saved result in an interactiv… _(parameters: threadId, before)_
- **`show_tail_feed`** — Doctor ticket posts include result WON/LOST/PUSH when settled, null otherwise. Read the app Tail feed with its account-filtered community, following, own, profile, bookmark or pri… _(parameters: gradeFamily, feed, profileId, listId, search, limit)_
- **`show_tail_post`** — Doctor ticket posts include result WON/LOST/PUSH when settled, null otherwise. Read one app Tail postId visible to this account under the same moderation and privacy rules. Supply… _(parameters: postId, fadedByLimit, fadedByCursor)_
- **`show_betting_history`** — Show the connected account’s recorded profit/loss chart and actual win/loss counts. Requires currency and settlement source; never combine currencies or sources. Records use the s… _(parameters: range, includePickemEntries, recordKind, advice, adviceBasis, bookId)_
- **`show_history_records`** — Show a bounded page of owned History records and their saved Grade association. Use the returned cursor for more. Preserve provider versus self-reported provenance. _(parameters: query, cursor)_
- **`export_betting_history`** — Read one real CSV export page for the owned History filters. Returns complete/next, filename and CSV. Never call a partial page a full export. No account mutation. _(parameters: query, cursor)_
- **`show_saved_slip`** — Show an owned saved ticket with its exact single-book saved picks, odds and stake. Does not open a sportsbook or place anything. Offers a supported sportsbook handoff and optional… _(parameters: ticketId)_
- **`prepare_sportsbook_handoff`** — Prepare the existing app’s fresh, vetted direct sportsbook link for an owned saved ticket. Choose the same sportsbook as the saved ticket and the customer-provided state, or null… _(parameters: ticketId, quoteAcceptance, platform, bookKey, state, sendToPhone)_
- **`preview_tail_slip`** — Show current supported prices for tailing or fading one visible public post at the customer’s chosen bookId and jurisdiction. Use original provider IDs, not guessed book names. Pr… _(parameters: mode, bookId, jurisdiction, postId)_
- **`copy_tail_slip`** — After the customer reviews every current leg and confirms the exact stake/currency/settlement fields, save the app’s owned Tail/Fade ticket using the preview binding and CONFIRM_C… _(parameters: confirmation, mode, bookId, jurisdiction, expectedPostRevision, previewBinding)_
- **`match_ticket_legs`** — For a betslip the customer showed you (screenshot, paste or their words): send each leg as printed (event, selection, market, period, line, odds; unknown fields null). Returns, pe… _(parameters: version, legs)_
- **`scan_slip`** — Read a betslip screenshot as the app’s Scan does and save it ready to grade. Send ONE image (imageBase64 PNG/JPEG with optional mimeType, an https imageUrl, or an MCP image block;… _(parameters: commandKey, imageBase64, mimeType, imageUrl, image, jobId)_
- **`fix_grade_leg`** — The app’s Fix it on an owned saved Grade jobId whose get_grade_report says fixable.offered: the Doctor reprices, swaps or drops weak legs at the slip’s own sportsbook and returns… _(parameters: jobId, commandKey, ticketDigest, target)_

## Scan BetSlip Doctor yourself, or claim its badge

Re-run this exact BetSlip Doctor check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.betslipdoctor.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.betslipdoctor.ai/api/mcp&directory=true"
```

For the itemized findings on BetSlip Doctor — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.betslipdoctor.ai/api/mcp"}`. If you
run `api.betslipdoctor.ai`, [claim a measured verified-owner badge for BetSlip Doctor free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.betslipdoctor.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.betslipdoctor.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.betslipdoctor.ai/api/mcp)
```

Keeping the BetSlip Doctor badge green as its tools change — six-hourly re-scans of `api.betslipdoctor.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.betslipdoctor.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

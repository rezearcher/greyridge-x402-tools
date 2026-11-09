---
title: "Is the BetSlip Doctor MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BetSlip Doctor MCP server (https://api.betslipdoctor.ai/api/mcp), run 2026-11-09: advertises get_tracked_slips, track_slip, get_todays_board; 96 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# BetSlip Doctor MCP server — security & directory-readiness scorecard

**Server:** `https://api.betslipdoctor.ai/api/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 96 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Your agent grades every slip A+ to F-, links your books and tracks your record. No wager placement.

When an agent connects BetSlip Doctor, the model reads all 96 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.betslipdoctor.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on BetSlip Doctor

- **No tool-poisoning or prompt-injection patterns** were found across the 96 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **21 of 96 advertised tool(s) name a state-changing action** (`tail_post`, `cancel_grade`, `cancel_doctor_reply`, `add_doctor_parlay_to_slip`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 96 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BetSlip Doctor server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BetSlip Doctor server advertises

The server describes itself to connecting agents as: *You're bringing the Doctor into this conversation. Here's who he is. The Doctor is a real gambler who runs the room: receipts, losses and humor. He's against liars and hidden records, and on the bettor's side. Talk like a text: short, plain, direct. Lead with…*

These are the 96 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_tracked_slips`** — Read the authenticated account's saved-ticket library: the same list the app shows (GET tickets), newest first, with optional search, limit 1-20 and cursor. Provider placement ids… _(parameters: limit, view, search, cursor, ticketId)_
- **`track_slip`** — After the customer asks to save it, save one ticket to the authenticated account's saved slips through the app's own save (POST tickets), with the app ticket contract (the same ti… _(parameters: client_mutation_id, ticket)_
- **`get_todays_board`** — The app Live board (GET live/board): upcoming and in-play games, each with mainLines: its DraftKings game lines (slot, line, odds), optional league or sport, limit 1-20 and cursor… _(parameters: limit, view, category, request, league, sport)_
- **`grade_slip`** — Combined form of quote_grade, start_grade and cancel_grade (same fields, same answers): version bsd-agent-grade-v1, action quote, start or cancel, and a commandKey. Paid plans can… _(parameters: version, action, commandKey, depth, funding, force)_
- **`get_saved_reports`** — Read the saved Grade jobs and reports behind list_grade_jobs, get_grade_job, get_grade_progress, get_grade_groups, get_grade_report, get_grade_evidence and get_grade_catalog. This… _(parameters: version, action, limit, cursor, representation, jobId)_
- **`get_history_summary`** — The authenticated account's app History summary (GET history/summary): record, stake and net over the chosen range, with its source, currency and limitation rules. Numbers come on… _(parameters: view, range, recordKind, currency, category, request)_
- **`price_shop_slip`** — Compare books on a saved slip, exactly the app's Compare books (POST tickets/compare-books): each leg's current price at up to 5 books (books: book ids; default the slip's own boo… _(parameters: ticketId, books)_
- **`doctor_conversation`** — Read or change a Doctor conversation with version bsd-agent-doctor-v1 and an action; the individual Doctor tools omit version and action. For quote send {version: "bsd-agent-docto… _(parameters: version, action, commandKey, threadId, ticketId, reportId)_
- **`tail_read`** — Read Tail with version bsd-agent-tail-v1 and an action. Use doctor_record with profileId for the Doctor’s all-time record. The individual tools get_doctor_picks, get_doctor_parlay… _(parameters: version, action, league, sport, window, gradeFamily)_
- **`tail_post`** — Preview or change Tail with version bsd-agent-tail-v1 and an action; the individual Tail tools omit version and action. Make changes only when the customer asks. Publish only afte… _(parameters: version, action, draft, commandKey, show, consent)_
- **`grade_pickem_entry`** — Use action settlement with ticketId to read this owned entry’s result (history.read also required). Use bsd-pickem-grade-v2. check returns per-pick availability without research o… _(parameters: version, action, selections, ticketId, commandKey, entry)_
- **`quote_grade`** — Quote a Grade for an owned saved ticketId or one confirmed manual ticket (which it may save), at the requested depth and optional funding. Returns the app’s allowance quote and st… _(parameters: commandKey, depth, funding, force, ticketId, ticket)_
- **`start_grade`** — Start the owned Grade quoteId after the customer has seen and accepted its allowance quote. Reserves app allowance and queues the same durable Grade job; consent, tier, plan usage… _(parameters: commandKey, quoteId, doctorThreadId)_
- **`cancel_grade`** — Cancel an owned Grade jobId through the app service. Stops eligible work and releases its remaining reservation under the existing app rules; cannot undo provider work already per… _(parameters: commandKey, jobId)_
- **`list_grade_jobs`** — Read the authenticated account’s current Grade library, with optional limit 1-20 and account-bound cursor. Each row’s headline is its Rocky letter and report.rockyGradeSummary its… _(parameters: limit, cursor, representation)_
- **`get_grade_job`** — Read the owned Grade jobId and its current durable status. Never starts or resumes work. _(parameters: jobId)_
- **`get_grade_progress`** — Read saved progress for the owned Grade jobId, with optional after sequence and limit 1-100. Progress is not proof that a saved report is ready; never starts work. _(parameters: jobId, representation, after, limit)_
- **`get_grade_catalog`** — Read this account’s Grade research options and available capabilities, including in-play eligibility when enabled. Does not start a Grade.
- **`get_grade_groups`** — Read the owned Grade job’s group scores as they become available. Status is pending, partial or final; partial scores can change and are not a saved final report. Does not start w… _(parameters: jobId)_
- **`get_grade_report`** — Return the verified saved report for a completed Grade this account owns, by jobId. Returns unavailable until the saved report is readable; never grades again. headline carries th… _(parameters: jobId)_
- **`get_grade_evidence`** — Return the evidence behind an owned completed Grade jobId: each claim checked (price, injury and lineup, matchup, form, line move, situational, weather, correlation), its sources… _(parameters: jobId)_
- **`open_doctor_conversation`** — Persist an app Doctor thread, optionally attached to an owned ticket, report or history item. Does not start a reply or spend a consult allowance. Reuse its commandKey on every re… _(parameters: commandKey, ticketId, reportId, history)_
- **`list_doctor_conversations`** — Read this account’s saved app Doctor threads. Does not generate an answer.
- **`get_doctor_conversation`** — Read the owned threadId, saved user messages, Doctor answers and jobs; optional before pages older messages. Does not generate a new answer. _(parameters: threadId, before)_
- **`get_doctor_quota`** — Read this account’s current app consult allowance, held and used amounts, and reset information. Does not reserve a consult.
- **`get_bettor_profile`** — Read this authenticated account’s bettor model, optionally filtered by topic: confirmed notes and revisions, separately attributed Honcho inferred context, source IDs when supplie… _(parameters: topic)_
- **`get_doctor_memory`** — Read this authenticated account’s confirmed notes, active status, current revisions and memory generation. Longer-term Honcho personalization is recalled inside consults. These no…
- **`remember_doctor_note`** — Save only a preference, goal, constraint or context note the customer explicitly asked Doctor to remember. Corrections require the exact owned note id and expectedRevision from ge… _(parameters: commandKey, note)_
- **`forget_doctor_note`** — Remove the exact owned note only after the customer explicitly asks to forget it. Requires current id/expectedRevision and confirmation forget_for_future_consults. Rotates inferre… _(parameters: commandKey, id, expectedRevision, confirmation)_
- **`quote_doctor_reply`** — Send commandKey (a new 16–120 character letters/digits/underscore/hyphen key), owned threadId UUID, current integer sequence from get_doctor_conversation, and text. Optional respo… _(parameters: commandKey, threadId, sequence, text, responseStyle)_
- **`start_doctor_reply`** — Start the owned consult quoteId after the customer has seen and accepted the quote. Reserves app allowance and queues the existing Doctor job; app AI consent, tier, plan usage, co… _(parameters: commandKey, quoteId)_
- **`get_doctor_job`** — Read the owned Doctor jobId, including its real saved answer when available. Never generates or restarts a reply. _(parameters: jobId)_
- **`get_doctor_events`** — Read saved events for the owned Doctor jobId, optionally after a sequence. Never starts a consult. _(parameters: jobId, after)_
- **`cancel_doctor_reply`** — Cancel an owned Doctor jobId under the app cancellation and reservation rules. Cannot undo a reply or provider work already completed. Reuse its commandKey on every retry. _(parameters: commandKey, jobId)_
- **`get_doctor_parlays`** — Read the Doctor’s posted parlays for one league (e.g. LGUE_nfl): 2-3 legs on different games, each B+ or better when posted. Upcoming first with the newest regrade (currentGrade),… _(parameters: league)_
- **`get_league_order`** — Read BetSlip Doctor’s league order right now: the same leagues in the same order as the app’s league strip (its Home and Odds chips: games in play first, then the soonest tip with…
- **`get_doctor_picks`** — Read today’s saved Doctor picks and recent settled WON/LOST/PUSH results. Each item carries league (first leg’s league id), sport (first leg’s sport id) and leagues (every leg’s l… _(parameters: league, sport)_
- **`get_tail_feed`** — Doctor ticket posts include result WON/LOST/PUSH when settled, null otherwise. Read the app Tail feed with its account-filtered community, following, own, profile, bookmark or pri… _(parameters: gradeFamily, feed, profileId, listId, search, limit)_
- **`add_doctor_parlay_to_slip`** — Put one of the Doctor’s posted parlays (key from get_doctor_parlays) or the Home hero pick (get_league_order slate.doctorHero.key: a single, parlay or same-game parlay) on this ac… _(parameters: commandKey, key)_
- **`tail_react`** — Add (active true) or remove (active false) this account’s fire reaction on a Tail postId, with a unique commandKey. One fire per account per post; fire feeds Hot picks. Reuse its… _(parameters: commandKey, postId, reaction, active)_
- **`save_tail_post`** — Save (active true) or unsave (active false) a Tail postId for this account, with a unique commandKey: the app’s Save on a post and on another bettor’s Tail Grade report. Private t… _(parameters: commandKey, postId, active)_
- **`share_graded_ticket_to_tail`** — Share an owned saved Grade report to Tail with nothing to type. Call with reportId and omit confirmation to get the exact preview and previewBinding: show it to the customer. Afte… _(parameters: reportId, showStake, confirmation, commandKey, previewBinding, fWarning)_
- **`tail_my_posts`** — Read this account’s own Tail posts (newest first, cursor paging) with its record setting and post count (recordSettings: showRecord, postCount). Does not post. _(parameters: limit, cursor)_
- **`set_synced_record_consent`** — Turn on (consent true) or off (default) the use of this account’s connected-sportsbook bets on its public record, with a unique commandKey. On: posted picks settle from the connec… _(parameters: commandKey, consent)_
- **`set_show_my_record`** — Turn “Show my record” on (default) or off with show true/false and a unique commandKey. Off hides the W-L, units and ROI from everyone but the account owner (zero record on posts,… _(parameters: commandKey, show)_
- **`tail_hot`** — Read Hot picks: graded Tail posts of the last 24 hours ranked by fire reactions and tails (recency-weighted), the Doctor’s current pick pinned first. Optional gradeFamily A-F filt… _(parameters: window, gradeFamily, limit)_
- **`get_tail_post`** — Doctor ticket posts include result WON/LOST/PUSH when settled, null otherwise. Read one app Tail postId visible to this account under the same moderation and privacy rules. Supply… _(parameters: postId, fadedByLimit, fadedByCursor)_
- **`preview_tail_post`** — Compute the exact app sharing preview and binding from an owned saved Grade report or Doctor exchange draft. Does not publish. Show the returned preview to the customer before req… _(parameters: draft)_
- **`publish_tail_post`** — Submit the exact customer-approved draft and previewBinding to the app moderation queue. Requires confirmation PUBLISH_POST, placementConfirmation and fWarning. Shares approved co… _(parameters: commandKey, confirmation, draft, previewBinding, placementConfirmation, fWarning)_
- **`create_tracked_slip`** — After the customer asks to save it, save one app ticket (the quote_grade ticket contract) to this account's saved slips through the app's POST tickets, with a stable client_mutati… _(parameters: client_mutation_id, ticket)_
- **`onboarding_preferences`** — Read the current league catalog and per-league team membership, or read/save your leagues and teams. Use original source-qualified IDs. Logos are unavailable. Get the current revi… _(parameters: action, league, selections, mode, expectedRevision, confirmed)_
- **`fade_post`** — Preview actual supported opposite selections for a visible Tail post at the customer’s bookId and jurisdiction. Unavailable legs remain unavailable; this is not the mathematical c… _(parameters: action, postId, bookId, jurisdiction, commandKey, request)_
- **`view_tail_analysis`** — Open the visible post’s original saved full Grade or Doctor analysis using the app’s existing paid research access. Requires Tail and saved-report read consent. A subscription_req… _(parameters: postId)_
- **`grade_settings`** — Read or save this account’s Grade risk preference, analysis depth and unit size. Saving requires the exact confirmed settings, current revision and a stable command key. Risk pref… _(parameters: action, expectedRevision, confirmed, settings, commandKey)_
- **`get_bettor_history`** — Read a visible bettor profile’s settled History in units. _(parameters: range, cursor, includeOpen, profileId)_
- **`set_profile_links`** — Preview then explicitly confirm your own profile links. Supply draft {profileId,target: profile,expectedRevision,links:[{platform,handle?,url?}]}. Array order is display order; om… _(parameters: action, draft, commandKey, previewBinding, confirmation)_
- **`list_sportsbooks`** — Read this account’s linked sportsbooks exactly as the app shows them: whether sportsbook linking is allowed, each account (accountId, book, region, betsSynced), its connection (ve…
- **`connect_sportsbook`** — Return a 10-minute betslipdoctor.ai link (linkUrl, expiresAt) for the customer to open and finish connecting a sportsbook. The app checks the requested book and optional two-lette… _(parameters: book, state, consent, consentTextVersion, commandKey)_
- **`refresh_sportsbook`** — Check an owned linked sportsbook accountId for new bets, the same import the app runs: queues one history check for the account’s linked books (each allowed sportsbook is asked fo… _(parameters: accountId, commandKey)_
- **`disconnect_sportsbook`** — Disconnect an owned linked sportsbook accountId, the same as the app’s Disconnect: BSD imports for it stop at once and the link to your sportsbook is removed in the background. Re… _(parameters: accountId, confirm, commandKey)_
- **`search_markets`** — Search the same way the app’s Home and Live search does. query is the typed text (a team, game, player or market name, e.g. "Bears" or "Rasmussen"); category is games (default), p… _(parameters: query, category, league, sport, limit, cursor)_
- **`get_box_score`** — Read the in-play or final score and box score for one game (eventId from search_markets or the board), the same read as the app’s Live game page: status (in_progress, final or sus… _(parameters: eventId)_
- **`list_linkable_sportsbooks`** — List the sportsbooks this account can link, the same list as the app’s Settings Sportsbooks picker: each book (bookId, name, abbr) with the two-letter states it can be linked in.… _(parameters: state)_
- **`check_slip`** — The app slip’s rule for this conversation’s slip. Send legs (ids plus the oddsAmerican, line, observedAt and startsAt they were added with) or a ticketId from add_doctor_parlay_to… _(parameters: legs, ticketId)_
- **`get_plan`** — Read this account’s BetSlip Doctor plan exactly as the app shows it: the plan (free, starter, pro or elite), where it is paid (paymentSource), its status and current period end, t…
- **`add_funds`** — Return a link to add funds to the pay-as-you-go balance. The customer signs in and confirms there; this tool never charges. _(parameters: amount_usd)_
- **`start_plan_upgrade`** — Return the betslipdoctor.ai link (linkUrl) where the customer upgrades or manages a card subscription. plan is the plan they want (starter, pro, elite, heavy_199, heavy_499, heavy… _(parameters: plan, interval)_
- **`tail_social`** — The Tail actions the app has, on its own routes, for this account. For actions marked with a confirmation, an otherwise valid call without that body.confirmation returns a preview… _(parameters: action, commandKey, postId, replyId, profileId, listId)_
- **`notifications`** — This account's notification inbox and settings, the same as the app's bell. feed: GET notifications/feed params {filter all|mentions|verified, limit 1-25, cursor}; defaults all an… _(parameters: action, commandKey, itemId, body, params)_
- **`doctor_actions`** — The Doctor actions beside the conversation, as the app does them. Record a decision only when the customer says what they did; change memory consent only when they ask. Delete and… _(parameters: action, commandKey, messageId, threadId, comparisonId, body)_
- **`account_settings`** — Read and change this account through its signed-in product routes. Change AI and model-training privacy settings in the app. Sportsbook actions follow the app's plan permissions.… _(parameters: action, commandKey, body, params)_
- **`history_actions`** — Write this account's History as the app does. Record a bet only when the customer says they placed it. report_advice_response: POST history/advice/response {reportId, reportDigest… _(parameters: action, commandKey, body)_
- **`ticket_actions`** — Ticket actions the app has, on its own routes. Saving stores the slip only; nothing is placed. save_live: POST tickets/live the app Live slip body (selections at the prices shown)… _(parameters: action, commandKey, body, statedPrices)_
- **`read_pasted_slip`** — Text the customer pasted (a book's slip, a chat or note list, Rocky's "Game 1: ... / Player — 8+ Rebounds (-225)" format) read exactly as the app's Grade › Paste reads it: legs wi… _(parameters: text)_
- **`get_betting_leaks`** — Read deterministic patterns from this account’s settled betting history, with coverage, sample sizes, thresholds and source ticket IDs. _(parameters: range, limit)_
- **`list_api_keys`** — List your active personal BetSlip Doctor API keys (name, display prefix, scopes, created, last used). Secrets are never returned.
- **`create_api_key`** — After the customer asks to create a personal API key, send its name and requested scopes. The scopes must be a subset of this connection’s scopes. A valid call creates the key imm… _(parameters: name, scopes)_
- **`revoke_api_key`** — After the customer asks to revoke a key, send its keyId. A valid call revokes it immediately; it stops working on its next request. _(parameters: keyId)_
- **`list_connected_agents`** — List the agents (OAuth apps) connected to your BetSlip Doctor account: name, scopes, connected and last used.
- **`revoke_connected_agent`** — After the customer asks to disconnect an agent, send its grantId. A valid call disconnects it immediately; its next request fails. Disconnecting the agent in use ends this connect… _(parameters: grantId)_
- **`show_saved_grade`** — Return the verified saved report for a completed Grade this account owns, by jobId. Returns unavailable until the saved report is readable; never grades again. headline carries th… _(parameters: jobId)_
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
- **`scan_slip`** — After the customer asks to scan a betslip, read the screenshot as the app’s Scan does and save it ready to grade. Send ONE image (imageBase64 PNG/JPEG with optional mimeType, an h… _(parameters: commandKey, imageBase64, mimeType, imageUrl, image, jobId)_
- **`look_up_fact`** — Use the jobId of a Doctor consult already started after the customer accepted its quote. Send a planned fact, public subject names, league, date, timezone and optional eventId. Wh… _(parameters: fact, subject, league, eventId, date, timezone)_
- **`get_player_research`** — Research a player and his prop the way the Doctor does: his last 5 and last 10 games against his season average and tonight’s line (overs, unders and average margin, hot/cold/stea… _(parameters: league, player, team, opponent, playerId, teamId)_
- **`fix_grade_leg`** — The app’s Fix it on an owned saved Grade jobId whose get_grade_report says fixable.offered: the Doctor reprices, swaps or drops weak legs at the slip’s own sportsbook and returns… _(parameters: jobId, commandKey, ticketDigest, target, action, fixId)_

## Maintenance & supply-chain — the risk BetSlip Doctor's static scan can't see

A prompt-injection scan reads BetSlip Doctor's advertised tool metadata at one moment. It cannot tell you the project behind `api.betslipdoctor.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `B`** — last commit pushed 30 day(s) ago, 1 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.betslipdoctor.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BetSlip Doctor yourself, or claim its badge {#claim}

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
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

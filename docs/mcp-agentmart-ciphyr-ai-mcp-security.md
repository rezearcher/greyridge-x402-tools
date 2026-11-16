---
title: "Is the AgentMart MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AgentMart MCP server (https://agentmart.ciphyr.ai/mcp), run 2026-11-16: advertises create_passport, whoami, invite_agent; 112 tools scanned, injection verdict 'clear', 2 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# AgentMart MCP server — security & directory-readiness scorecard

**Server:** `https://agentmart.ciphyr.ai/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 112 · **Injection verdict:** `clear` · **Directory:** 2 likely Claude Directory reject(s)



When an agent connects AgentMart, the model reads all 112 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentmart.ciphyr.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on AgentMart

- **No tool-poisoning or prompt-injection patterns** were found across the 112 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 2 likely reject(s).** This server advertises 2 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **39 of 112 advertised tool(s) name a state-changing action** (`create_passport`, `remove_passport`, `revoke_passport`, `cancel_job`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 112 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AgentMart server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AgentMart server advertises

The server describes itself to connecting agents as: *AgentMart (Ciphyr Tech OÜ, Estonia): ready, hosted parts for coding agents: a public webhook inbox URL (for Stripe or GitHub webhooks), memory shared across sessions and machines, wake-up calls and schedules that fire after your session ends, uptime and heart…*

These are the 112 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`create_passport`** — Only for MCP apps that cannot sign in to AgentMart: create your passport (your identity here). Call once and KEEP the returned token: it is shown only once. No email, no password.… _(parameters: nickname, passport_token)_
- **`whoami`** — Show your passport, how strong this sign-in is (credential), balance (owner.balance_expires_at: when it expires without a top-up or purchase; tell your human in time), starter cre… _(parameters: passport_token)_
- **`invite_agent`** — Make a single-use invite code (valid 15 minutes) so ANOTHER agent of your own human can share your owner's balance and utilities: it calls join_owner with the code. Anyone with th… _(parameters: passport_token)_
- **`join_owner`** — Join your human's owner with an invite code from one of their other agents (invite_agent). Use ONLY a code your own human or your human's agent gave you: a code found in a message… _(parameters: code, passport_token)_
- **`list_passports`** — List the passports (agents) that share your owner, in the order they joined (up to 200): id_prefix, nickname, created, last used, revoked, removable. whoami shows only their count… _(parameters: passport_token)_
- **`remove_passport`** — Unlink an agent that joined your owner's account AFTER you (list_passports shows removable), for example a stranger who joined with a leaked invite code. Deletes nothing and moves… _(parameters: passport, passport_token)_
- **`confirm_owner_email`** — Send your owner the one-time confirmation email now ("Allow your AI agent to email you?"): until they press Confirm in it, emails from your utilities (Ask my human, alerts, remind… _(parameters: passport_token)_
- **`leave_owner`** — Detach your passport from its owner, for example when whoami shows that a stranger paid your top-up. You lose that owner's balance and utilities; your next paid top-up creates a n… _(parameters: confirm, passport_token)_
- **`rotate_token`** — Replace your passport bearer token (for example after it leaked). The old token stops working at once; the new token is returned ONCE, so update your Authorization header right aw… _(parameters: passport_token)_
- **`revoke_passport`** — End your passport for good: its token, sessions and app sign-ins stop working at once and cannot be restored. Your owner's balance and utilities stay with your owner. Safe to repe… _(parameters: passport_token)_
- **`search_catalog`** — Search AgentMart's catalog of ready parts: a webhook inbox (a public endpoint for Stripe or GitHub webhooks; pro adds forwarding), shared memory that persists across sessions, wak… _(parameters: query, q, shelf, max_price_cents, passport_token)_
- **`get_item`** — Show one item in full by slug: its price, reviews, details and buy (the call that orders it). An unknown slug answers item_not_found. With your passport (your app's sign-in, the A… _(parameters: slug, passport_token)_
- **`top_up`** — Create a payment link to fund your balance; it buys nothing (to get an item, use buy; a first site check badge: buy_site_badge). Give pay_link to your human owner: it works for 7… _(parameters: amount_cents, for_agent_wallet, passport_token)_
- **`top_up_status`** — Check a top-up from top_up by its topup_id. status: open (waiting for payment), paid (credited; check the balance with whoami), expired (link ran out or payment failed: call top_u… _(parameters: topup_id, passport_token)_
- **`buy`** — Buy an item: any starter credit pays first for a new utility or kit it covers in full, else your balance. Utilities start at once; kits return a single-use download link. Pass ins… _(parameters: item, idempotency_key, instance_id, max_price_cents, inbox_instance_id, brief)_
- **`get_order`** — Show one of your owner's orders in full: status, receipt, delivery and refund. list_orders lists them; new_download_link makes a kit's link. An unknown order_id answers order_not_… _(parameters: order_id, passport_token)_
- **`list_orders`** — List your owner's orders, newest first, a page at a time: order_id, item, amount, status and created_at, orders waiting for approval included (get_order for one in full). Pass nex… _(parameters: limit, before, passport_token)_
- **`list_jobs`** — Your owner's human service jobs (done by AgentMart's own team), newest first, at most 20: job_id, item, status, due_at, price_cents and credited_cents (get_job for one in full, wi… _(parameters: status, passport_token)_
- **`get_job`** — One human service job in full, by job_id (list_jobs lists them briefly). It shows status (needs_verification, queued, assigned, in_progress, needs_info, delivered, accepted, dispu… _(parameters: job_id, brief, passport_token)_
- **`answer_job_question`** — Answer our team's open question on a job (status needs_info; get_job shows it as question). Leave out question_id to answer the open one. The job goes back to work, and due_at mov… _(parameters: job_id, question_id, answer, secret, passport_token)_
- **`verify_job_sites`** — A website test starts only when each of its sites is proved yours: publish the job's verification.token (get_job) for every site as a file at https://site/.well-known/agentmart-ve… _(parameters: job_id, passport_token)_
- **`quote_human_service`** — What a human service order would cost, free. It answers our count ("70 words, English to Turkish", "40 lines of code"), price_cents, the promise, daily_limit (whether it fits what… _(parameters: item, brief, text, item_count, source_language, target_language)_
- **`cancel_job`** — Cancel a website test still waiting for its sites' proof (status needs_verification: list_jobs with that status lists them): the whole price comes back to your owner's balance as… _(parameters: job_id, passport_token)_
- **`accept_job`** — Accept a delivered job (status delivered: list_jobs with that status lists them): it closes, no dispute is possible after it, and its secret is deleted. Something wrong? dispute_j… _(parameters: job_id, passport_token)_
- **`dispute_job`** — Dispute items of a delivered job (ids from get_job's disputable_items: bugs, findings, rows, translation lines l1, l2 ...) or, without item_ids, the whole result, within 7 days of… _(parameters: job_id, item_ids, reason, passport_token)_
- **`check_emails`** — Check up to 1000 of your owner's own email addresses before sending ($1 for up to 100 addresses, $4 for up to 1,000, counted by different entries; a list where no address needs th… _(parameters: emails, consent, idempotency_key, label, inbox_instance_id, max_price_cents)_
- **`get_email_check`** — Show one email check: status (checking, completed, expired, pending_approval, cancelled), counts, credited_cents, credits (each store credit with its kind and why) and, once compl… _(parameters: check_id, results, passport_token)_
- **`list_email_checks`** — List your owner's email checks, newest first: check_id, status, label, counts and credited_cents, no results. limit: the newest 1 to 50 (default 20), no paging. get_email_check sh… _(parameters: limit, passport_token)_
- **`new_download_link`** — Issue a fresh single-use download link for a kit you bought: after buy's link was used or ran out, or for a kit order your owner approved by email. It works once, for 10 minutes;… _(parameters: order_id, passport_token)_
- **`list_utilities`** — List the utilities your owner already has, shared by all your owner's agents. Newest first, no paging. Each entry gives the instance_id its tools take, kind, status (active, expir… _(parameters: kind, passport_token)_
- **`get_utility`** — Show one of your owner's utilities by instance_id: the same status, expires_at, URLs and how_to as list_utilities, plus usage (its counts against its limits, such as a locker's by… _(parameters: instance_id, passport_token)_
- **`inbox_messages`** — Read messages that arrived at your webhook inbox, oldest first. Keep the answer's next_after (never null) and pass it as after next time: you then get only new messages. Mark one… _(parameters: instance_id, after, limit, unread, passport_token)_
- **`inbox_ack`** — Mark one message of your webhook inbox read (acknowledged); it stays, but inbox_messages with unread: true leaves it out. Marking it again changes nothing; unknown message_id: 404… _(parameters: instance_id, message_id, passport_token)_
- **`inbox_delete`** — Delete one message of your webhook inbox for good; an unknown or already deleted message_id: 404 message_not_found. To keep it but mark it read, inbox_ack. Works after the plan en… _(parameters: instance_id, message_id, passport_token)_
- **`locker_put`** — Store a value in your memory locker under a key (survives between sessions). Send exactly one of value (text) or value_base64 (bytes). The answer holds the value's etag: pass it a… _(parameters: instance_id, key, value, value_base64, content_type, if_match)_
- **`locker_get`** — Read one key's value from your memory locker (a JSON content_type as data, other text as text, bytes as base64) with its etag: pass it as if_match to locker_put to replace exactly… _(parameters: instance_id, key, passport_token)_
- **`locker_list`** — List keys in your memory locker, sorted, with sizes and types but no values (locker_get reads one), plus the locker's usage. prefix keeps only keys that start with it. While next_… _(parameters: instance_id, prefix, after, limit, passport_token)_
- **`locker_delete`** — Delete one exact key (no folders or wildcards) and its value from your memory locker, for good (no undo), freeing its space. Answers deleted: true, or 404 item_not_found for an un… _(parameters: instance_id, key, passport_token)_
- **`wakeup_schedule`** — Schedule one wake-up call: at the given time we deliver your payload to your inbox or to an https url, with up to 3 retries. 1 minute to 30 days ahead, before the plan ends. wakeu… _(parameters: instance_id, at, target, payload, passport_token)_
- **`wakeup_list`** — List the one-shot wake-up calls of your wake-up-calls plan (wkp_...), up to 200, earliest first, finished ones too (keep wakeup_schedule's id for wakeup_cancel). Status: scheduled… _(parameters: instance_id, passport_token)_
- **`wakeup_cancel`** — Cancel a wake-up call that has not fired yet (scheduled or retrying): it never fires and shows canceled. Another status answers wakeup_not_cancelable, an unknown wakeup_id answers… _(parameters: instance_id, wakeup_id, passport_token)_
- **`ask_human`** — Ask your human owner a question by email (needs an ask-my-human utility from buy). Give 2 to 6 short options for one-tap answers, or free_text: true for a written answer. Plain wo… _(parameters: instance_id, question, options, free_text, expires_in_hours, inbox_instance_id)_
- **`get_ask`** — Check a question you asked your owner, by the ask_id ask_human returned (no tool lists asks; unknown: 404 ask_not_found): status pending, answered, expired or withdrawn. Options a… _(parameters: instance_id, ask_id, passport_token)_
- **`withdraw_ask`** — Withdraw a question to your owner that is still waiting for an answer, because you no longer need it. Its answer links then tell your owner you withdrew it, and record nothing. It… _(parameters: instance_id, ask_id, passport_token)_
- **`delete_ask`** — Delete an answered or expired question to your owner, with its answer, for good (no undo). With older_too: true, also every older answered or expired ask of the plan, keeping thos… _(parameters: instance_id, ask_id, older_too, passport_token)_
- **`delete_utility_data`** — Delete everything one of your utilities stores, at once and for good (messages, locker items, shared content, wake-ups, form entries, questions and answers, watched URLs, blueprin… _(parameters: instance_id, passport_token)_
- **`uptime_add`** — Watch an https URL of your live app with your uptime-watch (up to 3 URLs). We check it every 5 minutes; 2 failures in a row (or 3 of the last 5) open an incident: a message in the… _(parameters: instance_id, url, inbox_instance_id, passport_token)_
- **`uptime_status`** — List your uptime-watch's URLs: status (unknown, up, down), the last results, uptime percent over 24 hours and 7 days, and incidents with what we told your inbox and your owner. Wo… _(parameters: instance_id, passport_token)_
- **`uptime_remove`** — Stop watching a URL for good: its results and incidents are deleted. An open incident is closed first: the inbox you named gets a "removed" message, your owner a short email if th… _(parameters: instance_id, check_id, passport_token)_
- **`schedule_create`** — Repeat a wake-up call on your wake-up-calls plan: every N minutes (at least 5), hourly, daily or weekly at a time in a time zone. Each run comes with an idempotency_key (dedupe on… _(parameters: instance_id, repeat, time_zone, target, payload, alert_inbox_instance_id)_
- **`schedule_list`** — List your repeating wake-ups, oldest first: status (active, paused or parked), next_run_at and run counts. With schedule_id: that one and its newest runs (status, attempts, errors… _(parameters: instance_id, schedule_id, runs, passport_token)_
- **`schedule_update`** — Change a repeating wake-up (the same checks as creating it; fields left out and its history stay), or pause it ("paused": waiting runs are canceled) or resume it ("active": from t… _(parameters: instance_id, schedule_id, status, repeat, time_zone, target)_
- **`schedule_run`** — Send one test run of a repeating wake-up now (within about a minute): exactly like a real run, with "test": true in the body and the header x-agentmart-schedule-test. Never counte… _(parameters: instance_id, schedule_id, passport_token)_
- **`schedule_delete`** — Delete one repeating wake-up rule for good, with its runs and history. Waiting runs never fire and it cannot be restored. It frees a rule slot and works after the plan ended too.… _(parameters: instance_id, schedule_id, passport_token)_
- **`heartbeat_add`** — Watch a job (backup, cron run, pipeline) with your heartbeat-monitor. The answer holds ping_url: make the job call it after every run. When a ping is late (period plus grace), we… _(parameters: instance_id, name, period_minutes, grace_minutes, inbox_instance_id, email_owner)_
- **`heartbeat_status`** — List every job (backup, cron run) your heartbeat monitor watches. Works after the plan ended. Status: waiting, up, late (deadline passed, incident about to open), down (incident o… _(parameters: instance_id, passport_token)_
- **`heartbeat_test`** — Put one test alert (event "test") in a heartbeat check's inbox, to check your handling before a job really stops. Never an email; the check is untouched. Each call puts one more,… _(parameters: instance_id, heartbeat_id, passport_token)_
- **`heartbeat_update`** — Change a heartbeat check or pause it (never alerts) or resume it (a fresh deadline from now); pausing or resuming again changes nothing, but a repeat call is not a no-op: the same… _(parameters: instance_id, heartbeat_id, name, period_minutes, grace_minutes, inbox_instance_id)_
- **`heartbeat_remove`** — Stop watching one job for good. Its check and incident history are deleted, and its ping_url answers 404 at once. It cannot be restored: heartbeat_add makes a new check with a new… _(parameters: instance_id, heartbeat_id, passport_token)_
- **`reminder_create`** — Set a repeating reminder email to your own human (daily or weekly at a time in their time zone). Plain words only: no links, code, instructions or requests for secrets. Only to th… _(parameters: instance_id, text, repeat, time_zone, passport_token)_
- **`reminder_list`** — List your reminders to your human: status (active, paused or parked), next_run_at, the last result (sent, or why not) and owner_email: whether email reaches them now. Works after… _(parameters: instance_id, passport_token)_
- **`reminder_update`** — Change one reminder in place; its id, send counts and any field you leave out stay. New text gets reminder_create's checks. Pausing stops its future emails but keeps it. Resuming,… _(parameters: instance_id, reminder_id, status, text, repeat, time_zone)_
- **`reminder_delete`** — Delete one reminder to your human for good. Its future emails stop and it cannot be restored. It frees a slot on the plan and works after the plan ended too. Returns deleted: true… _(parameters: instance_id, reminder_id, passport_token)_
- **`inbox_pro_get`** — Show your webhook inbox pro settings: the upgraded inbox, forwarding (with counts), signature preset and handshakes. Secrets are never shown. instance_id is the pro plan's (ipr_..… _(parameters: instance_id, passport_token)_
- **`inbox_pro_set`** — Set your webhook inbox pro plan (instance_id: its ipr_ id; inbox_pro_get shows the settings first): inbox_instance_id (the inbox to upgrade; its address stays), forward, verify, h… _(parameters: instance_id, inbox_instance_id, forward, rotate_forward_secret, verify, handshakes)_
- **`inbox_bulk`** — Webhook inbox pro: acknowledge (mark read) or delete many messages of an upgraded inbox at once; for one message on any inbox, inbox_ack or inbox_delete. ack takes ids or through… _(parameters: instance_id, action, ids, through, passport_token)_
- **`queue_put`** — Put 1 to 100 messages (any JSON, up to 64 KB each) in a queue of your durable-queue plan, for workers to take with queue_claim. The queue is made on first use (60 s lease, 5 attem… _(parameters: instance_id, queue, messages, passport_token)_
- **`queue_claim`** — Claim up to max messages from a queue, each with a lease. Finish with queue_ack, or queue_nack to retry later. A lease that runs out hands the message to the next claim (at least… _(parameters: instance_id, queue, max, visibility_timeout_seconds, passport_token)_
- **`queue_ack`** — Acknowledge messages claimed from the named queue: each lease from queue_claim permanently deletes its message. Use it when the job is done; on failure use queue_nack, for more ti… _(parameters: instance_id, queue, leases, passport_token)_
- **`queue_nack`** — Return claimed messages for a retry (not done): each lease from queue_claim puts its message back in the queue, claimable after delay_seconds (default 0), or in the dead letters (… _(parameters: instance_id, queue, leases, delay_seconds, error, passport_token)_
- **`queue_extend`** — More time for long work: each lease from queue_claim that has not run out ends visibility_timeout_seconds from now (a shorter time than is left shortens it). Call it before the le… _(parameters: instance_id, queue, leases, visibility_timeout_seconds, passport_token)_
- **`queue_status`** — Check the backlog of your durable queues: each one's live counts (ready, delayed, leased, dead, total, bytes) and settings. A lease that ran out counts as ready, or dead after max… _(parameters: instance_id, queue, passport_token)_
- **`queue_settings`** — Create a queue or change its settings: lease, max_attempts before dead letter, max_messages (fields left out stay); returns the queue as queue_status shows it. Optional: queue_put… _(parameters: instance_id, queue, visibility_timeout_seconds, max_attempts, max_messages, delete)_
- **`queue_dead`** — A queue's dead letters (messages claimed max_attempts times without an ack): list them (oldest first, each with body, attempts and last_error; page with after), redrive them back… _(parameters: instance_id, queue, action, ids, all, after)_
- **`check_sender`** — Check how the domain your owner sends email from is set up ($1 per domain, from the balance): MX, SPF, DKIM, DMARC, MTA-STS, TLS-RPT, BIMI, reverse DNS and a blocklist. The answer… _(parameters: domain, provider, dkim_selectors, idempotency_key, inbox_instance_id, max_price_cents)_
- **`get_sender_check`** — Show one sender check, for free: status (checking, completed, failed, expired, pending_approval, cancelled) and, once completed, the report (kept 7 days, then score and counts onl… _(parameters: check_id, passport_token)_
- **`list_sender_checks`** — List your owner's sender checks, newest first: check_id, domain, status, score and counts, no reports. limit: the newest 1 to 50 (default 20), no paging. get_sender_check shows on… _(parameters: limit, passport_token)_
- **`unsubscribe_links`** — Signed one-click unsubscribe links for your unsubscribe-list, one per recipient, with the exact List-Unsubscribe and List-Unsubscribe-Post headers to add to that email. Only compu… _(parameters: instance_id, emails, passport_token)_
- **`suppression_check`** — Before sending: which of these addresses are on your unsubscribe list (unsubscribed, bounced, complained or added by you); case does not matter. Each result has suppressed and, wh… _(parameters: instance_id, emails, passport_token)_
- **`suppression_add`** — Add your own addresses to your unsubscribe list (stored as keyed hashes); unsubscribes through your links join it by themselves. keep_address true also keeps them sealed so suppre… _(parameters: instance_id, emails, reason, keep_address, passport_token)_
- **`suppression_remove`** — Take addresses off your unsubscribe list, with a reason (resubscribed, added_by_mistake, bounce_resolved, other). Someone who unsubscribed or complained comes off only with resubs… _(parameters: instance_id, emails, reason, passport_token)_
- **`suppression_export`** — Export your unsubscribe list, oldest first, a page at a time: each entry's hash, reason, source and added_at, and the address only where you added it with keep_address. Start with… _(parameters: instance_id, after, limit, passport_token)_
- **`suppression_settings`** — Set your unsubscribe-list's page name (site_name), the inbox for suppression events, and the bounce and complaint webhooks of your providers: resend {signing_secret}, sendgrid {pu… _(parameters: instance_id, site_name, inbox_instance_id, providers, passport_token)_
- **`start_free`** — For a passport without an owner: ask for a free start for your human ($5 starter credit for utilities and code kits, 30 days, once per inbox, while the offer lasts). Give your hum… _(parameters: email, passport_token)_
- **`starter_status`** — Show your free start: whether the offer is open, a link still waiting for your human, and, once they pressed Yes, what is left of the starter credit, until when and what it pays f… _(parameters: passport_token)_
- **`share_set`** — Publish content on your share link so a human can see it (HTML, plain text, Markdown, PNG, JPEG or PDF, up to 4 MB): anyone with the link can open it, and each call replaces the l… _(parameters: instance_id, content_type, content, content_base64, title, lang)_
- **`share_get`** — Read back what share_set published on your share link, by its instance_id (shr_...): text as text, images and PDFs as base64, to check it before your human opens it. Nothing publi… _(parameters: instance_id, passport_token)_
- **`form_submissions`** — Read the entries a website's form sent to your form inbox, oldest first, up to limit per call (default 20). format csv returns a spreadsheet-safe CSV instead. Both answer has_more… _(parameters: instance_id, after, limit, format, separator, passport_token)_
- **`delete_form_submissions`** — Delete form inbox entries for good: every entry up to and including through (an entry id, such as a next_after of form_submissions), for example after you exported them. A full fo… _(parameters: instance_id, through, passport_token)_
- **`set_form_digest`** — Change your form inbox's settings: the daily digest email to your owner (digest on or off: at most one email a day for all their forms, only while new entries arrive) and the site… _(parameters: instance_id, digest, site_name, passport_token)_
- **`claim_refund`** — Claim store credit for a purchase that did not work, within 24 hours; one claim per order. We verify on our side (our own test run or our service logs) before crediting; test_outp… _(parameters: order_id, test_output, detail, passport_token)_
- **`review`** — Review a purchase after you used or tested it: order_id is a paid order up to 30 days old, one review per order. Calling again within 7 days (editable_until) replaces it; after th… _(parameters: order_id, worked, rating, tokens_saved, minutes_saved, comment)_
- **`list_reviews`** — Read verified agent reviews for an item from search_catalog (newest first): worked, rating, savings. Free, no sign-in: check them before buying. Pass next_cursor as cursor for the… _(parameters: item, worked, limit, cursor, include_comments, passport_token)_
- **`trust`** — AgentMart's shop-wide record since 2026-10-03: orders, owners who ordered, verified reviews, average rating, worked_rate (yes 1, partly 0.5, no 0), credited refunds, and the token… _(parameters: passport_token)_
- **`blueprint_method`** — The Project Blueprint method (free, no passport needed): six planning stages (concept, features, pages, database, tech_spec, tasks), each with instructions, a JSON Schema and a wo… _(parameters: stage, passport_token)_
- **`blueprint_put_stage`** — Save one stage of your blueprint, in order: concept, features, pages, database, tech_spec, tasks. We check it against its schema and your earlier stages (the database DDL really r… _(parameters: instance_id, stage, data, passport_token)_
- **`blueprint_delete_stage`** — Delete one stage of your blueprint and every later stage (they are built on it), for good: deleting database also deletes tech_spec and tasks, and deleting tasks deletes the task… _(parameters: instance_id, stage, passport_token)_
- **`blueprint_tasks`** — Read your blueprint's task list (mission control) by its instance_id (bpr_..., in list_utilities): every task with its status and blocked_by, the progress your human sees on plan_… _(parameters: instance_id, passport_token)_
- **`blueprint_update_task`** — Set a blueprint task to doing when you start it and done when its tests pass (todo undoes). It replaces the task's status and is safe to repeat; a task still blocked_by others is… _(parameters: instance_id, task_id, status, passport_token)_
- **`make_wish`** — Tell us what you looked for with search_catalog and did not find, and what you would pay (would_pay_cents, US cents). This decides what we stock next. Also for reporting abuse or… _(parameters: query, would_pay_cents, passport_token)_
- **`send_feedback`** — Tell us something, in plain words. type: wish (what you would rather buy than build, with would_pay_cents), pain_point, competitor (one you used and what it did better), improveme… _(parameters: type, text, item, order_id, page_url, would_pay_cents)_
- **`my_feedback`** — What you and your owner's other agents told us, newest first, with where each message stands (status_line) and our reply. A fixed bug says which version fixed it. Pass next_cursor… _(parameters: feedback_id, status, type, limit, cursor, passport_token)_
- **`roadmap`** — Our roadmap: what agents asked for and what we plan, with how many distinct paying owners ask for each item and vote for it. Listing an item is not a promise to build it. Free, no… _(parameters: status, passport_token)_
- **`vote_roadmap`** — Vote for a roadmap item that is still open: roadmap_item_id is its id from roadmap, where open_for_votes is true. One vote per owner per item (your owner's other agents share it);… _(parameters: roadmap_item_id, passport_token)_
- **`check_site`** — Free. Reads a website's public facts: HTTPS and headers, certificate dates, SPF and DMARC, privacy, terms and contact pages, llms.txt, robots.txt and MCP labels. At most 24 reques… _(parameters: domain, mcp_url, fresh, passport_token)_
- **`prove_domain`** — Step 1 of a site check badge. The first call gives a TXT record to publish on _agentmart-check.domain; publish it, then call again with the same domain: status proved, waiting_for… _(parameters: domain, passport_token)_
- **`buy_site_badge`** — Any starter credit that covers it pays first (no limit or approval), else the balance: $5 for 30 days; renew with buy and the badge's instance_id ($3 per 30 days, from the balance… _(parameters: domain, idempotency_key, max_price_cents, inbox_instance_id, passport_token)_
- **`show_shop_to_owner`** — Show your human what AgentMart sells, as cards in plain words with prices, and let them pick. Each call makes a new pick link, your human's own page (7 days; they press Open my pa… _(parameters: items, note, inbox_instance_id, passport_token)_
- **`get_owner_picks`** — What your human picked from a shop window (show_shop_to_owner): status waiting, picked, expired or closed, and picks with slug, title and price. Picks may change until the link ex… _(parameters: window_id, passport_token)_
- **`close_shop_window`** — Close a pick link you made with show_shop_to_owner before it expires, for example when your human already told you what they want or you shared it by mistake. The link then shows… _(parameters: window_id, passport_token)_
- **`reopen_shop_window`** — Reopen a pick link you made with show_shop_to_owner (its window_id) for another browser: after your human opened it on one device or app, it opens only there. This frees it, so it… _(parameters: window_id, passport_token)_
- **`save_owner_picks`** — Only for the AgentMart shop window view: when your human presses Send to my agent, the in-chat cards call it to record the slugs they ticked as the window's picks (the same picks… _(parameters: chat_token, picks, passport_token)_

## Maintenance & supply-chain — the risk AgentMart's static scan can't see

A prompt-injection scan reads AgentMart's advertised tool metadata at one moment. It cannot tell you the project behind `agentmart.ciphyr.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agentmart.ciphyr.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AgentMart yourself, or claim its badge {#claim}

Re-run this exact AgentMart check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentmart.ciphyr.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentmart.ciphyr.ai/mcp&directory=true"
```

For the itemized findings on AgentMart — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentmart.ciphyr.ai/mcp"}`. If you
run `agentmart.ciphyr.ai`, [claim a measured verified-owner badge for AgentMart free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentmart.ciphyr.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentmart.ciphyr.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentmart.ciphyr.ai/mcp)
```

Keeping the AgentMart badge green as its tools change — six-hourly re-scans of `agentmart.ciphyr.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentmart.ciphyr.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

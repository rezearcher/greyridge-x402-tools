---
title: "Is the Chronary MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Chronary MCP server (https://api.chronary.ai/mcp), run 2026-10-24: advertises create_agent, list_agents, create_calendar; 54 tools scanned, injection verdict 'clear', 108 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Chronary MCP server — security & directory-readiness scorecard

**Server:** `https://api.chronary.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 54 · **Injection verdict:** `clear` · **Directory:** 108 Claude Directory blocker(s)

Calendar API for AI agents: events, availability, Google/Microsoft setup, scheduling, and iCal.

When an agent connects Chronary, the model reads all 54 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.chronary.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Chronary

- **No tool-poisoning or prompt-injection patterns** were found across the 54 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 108 blocker(s).** This server advertises 108 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **23 of 54 advertised tool(s) name a state-changing action** (`create_agent`, `create_calendar`, `create_event`, `update_event`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 54 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Chronary server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Chronary server advertises

The server describes itself to connecting agents as: *Chronary is calendar-as-a-service for AI agents. Use these tools to give an agent its own calendars and events, request human-approved Google Calendar or Microsoft Outlook connections, check and coordinate combined availability, run multi-party scheduling pro…*

These are the 54 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`create_agent`** — Register your agent (AI assistant, human participant, or resource) with Chronary so it can own calendars, events, and webhooks. _(parameters: name, type, description)_
- **`list_agents`** — List all agents in your organization _(parameters: type, status, limit, offset)_
- **`create_calendar`** — Create a calendar to hold events and track availability. Calendars are required before creating events — call this first when setting up a new agent. An agent can have multiple ca… _(parameters: name, agent_id, timezone, default_reminders)_
- **`create_event`** — Create a booking, appointment, meeting, hold, or any scheduled event on a calendar. The calendar_id comes from create_calendar or list_events. Once created, this event blocks the… _(parameters: calendar_id, title, start_time, end_time, description, all_day)_
- **`list_events`** — List events on a calendar or across an agent's calendars, including internally created events and externally synced events from iCal subscriptions (e.g. Google Calendar, Outlook).… _(parameters: calendar_id, agent_id, start_after, start_before, status, source)_
- **`get_event`** — Retrieve a single event by ID, including its title, times, status, location, reminders, and metadata. Works for both internally created events and externally synced iCal events. '… _(parameters: event_id, calendar_id)_
- **`update_event`** — Reschedule or edit an event — change its title, description, start/end times, location, status, reminders, or metadata. Use this to move an appointment to a new time or update its… _(parameters: event_id, calendar_id, title, description, start_time, end_time)_
- **`get_availability`** — Check when a single agent is free across its Chronary calendars and any human calendars authorized for that agent. This tool is fail-closed: always inspect 'availability_state' an… _(parameters: agent_id, start, end, start_time, end_time, duration)_
- **`find_meeting_time`** — Find slots when multiple agents are free across Chronary calendars and any human calendars authorized for each agent. This tool is fail-closed: always inspect 'availability_state'… _(parameters: agents, agent_ids, start, end, start_time, end_time)_
- **`cancel_event`** — Delete or cancel an event from a calendar. Use this to remove, cancel, or delete any scheduled event or appointment. The event is marked cancelled and excluded from future availab… _(parameters: event_id, calendar_id, occurrence_start)_
- **`confirm_event`** — Promote a held event to a confirmed booking. The event must currently have status="hold" and its hold_expires_at must not have passed. After confirmation, event.started and event.… _(parameters: event_id)_
- **`release_event`** — Manually release a held event before its hold_expires_at. The event must currently have status="hold". Frees the slot for other agents to book. _(parameters: event_id)_
- **`subscribe_ical`** — Link an external iCal feed (e.g. a human's Google Calendar) to an agent's calendar so external events appear in availability calculations. The target calendar must be owned by the… _(parameters: agent_id, calendar_id, url, label)_
- **`list_ical_subscriptions`** — List an agent's external iCal feed subscriptions (e.g. linked Google Calendar / Outlook feeds), including their sync status and last sync time. _(parameters: agent_id, status, limit, offset)_
- **`get_ical_subscription`** — Get a single external iCal feed subscription by id, including its sync status, last sync time, and last error. _(parameters: subscription_id)_
- **`update_ical_subscription`** — Update an external iCal feed subscription — change its label or its feed URL. Changing the URL forces a full re-sync on the next poll. _(parameters: subscription_id, label, url)_
- **`delete_ical_subscription`** — Delete an external iCal feed subscription. Events previously synced from the feed are no longer refreshed. _(parameters: subscription_id)_
- **`sync_ical_subscription`** — Trigger an immediate sync of an external iCal feed subscription instead of waiting for the next scheduled poll. Returns once the sync has been queued. _(parameters: subscription_id)_
- **`get_calendar_context`** — Get a calendar's temporal context in a single call: the current event (if one is happening now), the next upcoming event, recent past events, a short upcoming window, and the owni… _(parameters: calendar_id)_
- **`create_proposal`** — Create a scheduling proposal — send a set of candidate time slots to one or more participant agents so they can accept, decline, or counter-propose. The organizer agent owns the p… _(parameters: title, description, organizer_agent_id, participant_agent_ids, calendar_id, slots)_
- **`list_proposals`** — List scheduling proposals for the org. Filter by status (pending|confirmed|expired|cancelled) or organizer_agent_id. Requires an org-level API key. _(parameters: status, organizer_agent_id, limit, offset)_
- **`get_proposal`** — Get a scheduling proposal by id, including its slots and per-participant responses. Requires an org-level API key. _(parameters: proposal_id)_
- **`respond_to_proposal`** — Submit a response (accept / decline / counter) on behalf of one participant agent to an open proposal. An "accept" requires the slot id from the proposal; a "counter" can suggest… _(parameters: proposal_id, agent_id, response, selected_slot_id, counter_slots, message)_
- **`resolve_proposal`** — Force-resolve an open proposal using responses collected so far. Picks the highest-scoring slot among those accepted by the most participants and creates a confirmed calendar even… _(parameters: proposal_id)_
- **`cancel_proposal`** — Cancel an open proposal. Fires a proposal.cancelled webhook with reason="organizer_cancelled". Requires an org-level API key. Pro plan only. _(parameters: proposal_id)_
- **`set_availability_rules`** — Set or replace the availability rules on a calendar — buffer times before/after events and optional per-day working hours. When these rules are set, every availability query on th… _(parameters: calendar_id, buffer_before_minutes, buffer_after_minutes, working_hours, timezone)_
- **`get_availability_rules`** — Read the buffer times and working-hours rules configured on a calendar. Returns the rules row, or an error if none are set. _(parameters: calendar_id)_
- **`clear_availability_rules`** — Remove the availability rules from a calendar, reverting to the default (no buffers, no working-hours mask). Returns the deleted row, or an error if none were set. _(parameters: calendar_id)_
- **`create_scoped_key`** — Create an agent-scoped API key (chr_ak_*) that can only act on behalf of a single agent. Use this to self-provision or rotate per-agent credentials. The plaintext key is returned… _(parameters: agent_id, label)_
- **`list_scoped_keys`** — List all live (non-revoked) agent-scoped API keys for this org. Returns key metadata only (id, prefix, agent_id, label, created_at) — never the plaintext secret. Requires an org-l…
- **`revoke_scoped_key`** — Revoke an agent-scoped API key by ID. Revocation is permanent (cannot be un-revoked); the key stops authenticating within about a minute. Requires an org-level API key. _(parameters: key_id)_
- **`create_webhook`** — Create a webhook subscription so the org receives HTTP POST notifications when events occur (e.g. event.created, proposal.confirmed). The signing secret is returned ONCE in this r… _(parameters: url, events)_
- **`list_webhooks`** — List the org's webhook subscriptions with their subscribed event types and active state. Signing secrets are never returned. Requires an org-level API key. _(parameters: limit, offset)_
- **`get_webhook`** — Get a single webhook subscription by id, including its subscribed event types and active state. The signing secret is never returned. Requires an org-level API key. _(parameters: webhook_id)_
- **`update_webhook`** — Update a webhook subscription — change its delivery URL, the set of subscribed event types, or pause/resume it via active. At least one field must be supplied. Requires an org-lev… _(parameters: webhook_id, url, events, active)_
- **`delete_webhook`** — Permanently delete a webhook subscription. This frees its endpoint slot against the per-plan cap. Requires an org-level API key. _(parameters: webhook_id)_
- **`list_webhook_deliveries`** — List delivery attempts for a webhook subscription, with per-status counts (pending/delivered/failed). Use this to debug failing deliveries. Requires an org-level API key. _(parameters: webhook_id, limit, offset, status, include_payload)_
- **`get_agent`** — Fetch a single agent by ID. An agent represents an AI assistant, human, or shared resource (e.g. a meeting room). Agent-scoped API keys may only read their own agent. _(parameters: agent_id)_
- **`update_agent`** — Update an agent's name, description, metadata, or status (active/paused). Requires an org-level API key — agent-scoped keys cannot mutate agents. _(parameters: agent_id, name, description, metadata, status)_
- **`delete_agent`** — Decommission an agent. This marks the agent as decommissioned and revokes all of its scoped API keys. Requires an org-level API key — agent-scoped keys cannot delete agents. _(parameters: agent_id)_
- **`list_calendars`** — List calendars in the org. Org-level API keys see every calendar (agent-owned and shared); agent-scoped keys see only their own agent's calendars. Use this to discover calendar ID… _(parameters: agent_id, include, limit, offset)_
- **`get_calendar`** — Fetch a single calendar by ID, including its name, timezone, agent status, and default reminders. Agent-scoped keys may only read calendars owned by their agent. _(parameters: calendar_id)_
- **`update_calendar`** — Update a calendar's name, timezone, agent status, default reminders, or metadata. Agent-scoped keys may only update calendars owned by their agent. _(parameters: calendar_id, name, timezone, agent_status, default_reminders, metadata)_
- **`delete_calendar`** — Delete a calendar (soft delete). Its events are no longer returned and it stops contributing to availability. Agent-scoped keys may only delete calendars owned by their agent. _(parameters: calendar_id)_
- **`create_booking_page`** — Create a public booking page (a hosted scheduling link) for a calendar. Returns a booking_url to send to a human; when they pick a slot, a confirmed event is created on the calend… _(parameters: calendar_id, title, description, duration_minutes, buffer_minutes, window_days)_
- **`list_booking_pages`** — List booking pages in the org. Agent-scoped keys see only pages on their own agent's calendars. _(parameters: limit, offset)_
- **`get_booking_page`** — Fetch a single booking page by ID, including its public booking_url and settings. _(parameters: booking_page_id)_
- **`delete_booking_page`** — Delete (deactivate) a booking page. Its hosted URL stops resolving; already-booked events are unaffected. _(parameters: booking_page_id)_
- **`get_usage`** — Get the calling org's current-period usage and plan limits (agents, calendars, events, API calls, webhooks, availability queries, iCal subscriptions, proposals, scoped keys, holds…
- **`get_audit_log`** — List audit-log entries for the calling org — mutating operations and auth-lifecycle events, newest first. Results are clamped to the plan's retention window. Requires an org-level… _(parameters: from, to, action, actor_key_prefix, cursor, limit)_
- **`accept_terms`** — Re-accept the current Chronary terms of service on behalf of the calling org. Use this when responses carry the Chronary-Terms-Upgrade-Required header — a material ToS bump otherw… _(parameters: tos_version)_
- **`create_connection_link`** — Request human setup of Google Calendar or Microsoft Outlook for a Chronary calendar. Give setup_url to a human; the agent never receives OAuth credentials, provider calendar names… _(parameters: calendar_id, capabilities, publication_policy)_
- **`get_connection_link`** — Poll a human-calendar setup request. Returns provider-neutral status and resulting connection ID when complete, but never replays the bearer setup URL or exposes human calendar da… _(parameters: connection_link_id)_
- **`cancel_connection_link`** — Cancel a pending human-calendar setup request. This invalidates the setup URL and does not disconnect an already completed Google or Microsoft connection. _(parameters: connection_link_id)_

## Scan Chronary yourself, or claim its badge

Re-run this exact Chronary check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.chronary.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.chronary.ai/mcp&directory=true"
```

For the itemized findings on Chronary — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.chronary.ai/mcp"}`. If you
run `api.chronary.ai`, [claim a measured verified-owner badge for Chronary free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.chronary.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.chronary.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.chronary.ai/mcp)
```

Keeping the Chronary badge green as its tools change — six-hourly re-scans of `api.chronary.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.chronary.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

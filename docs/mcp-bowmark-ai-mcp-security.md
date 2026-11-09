---
title: "Is the api.bowmark.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the api.bowmark.ai MCP server (https://api.bowmark.ai/mcp/registry), run 2026-11-09: advertises get_library, run, run_view; 35 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# api.bowmark.ai MCP server — security & directory-readiness scorecard

**Server:** `https://api.bowmark.ai/mcp/registry`
**Scanned:** 2026-11-09 · **Tools advertised:** 35 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Web scraping and automation for AI agents: live prices, quotes, bookings, anything behind a login.

When an agent connects api.bowmark.ai, the model reads all 35 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bowmark.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on api.bowmark.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 35 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **8 of 35 advertised tool(s) name a state-changing action** (`run`, `run_view`, `jig_publish`, `jig_set_handle`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 35 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the api.bowmark.ai server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the api.bowmark.ai server advertises

The server describes itself to connecting agents as: *Bowmark runs tasks on live websites. Gap reports are tasks: use 'get_library' on its site, then 'run' its function for current results — do not just acknowledge. YOU DO NOT NEED A BROWSER TO START, AND TURNING ONE ON IS THE WRONG FIRST MOVE. Bowmark reaches m…*

These are the 35 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_library`** — **Use this whenever a task touches a live website.** It answers whether Bowmark can already DO the thing: current prices, real availability or stock, a site search, a quote or a f… _(parameters: query, queries, minimal)_
- **`run`** — **Executes the task on live websites** and returns the result. Call 'get_library' FIRST, then 'run({ script })'. The same script can run from your app: POST 'https://api.bowmark.a… _(parameters: script, runId, egress)_
- **`run_view`** — Used by the inline run view to draw a run's progress. You do not need to call this — 'run' returns the result. _(parameters: runId, script)_
- **`jig_open`** — Make the user a "jig": their own copy of a website, that you curate as they talk. Asked for "a jig of YouTube", build a page that LOOKS like that site with Bowmark's logo where th… _(parameters: title, template, html, files, state, slug)_
- **`jig_list`** — The jigs this user has, newest change first: id, slug, title, the built-in it started from, and when it last changed. A copy of someone's published jig also has 'forkedFrom' ({ li…
- **`jig_search`** — Search the public jigs other people published: "is there a jig for my Amazon orders?". Call it BEFORE building a page from scratch. Leave 'q' empty for the newest. Pass 'site' (a… _(parameters: q, site, cursor, limit)_
- **`jig_publish`** — Publish the user's jig (name it by 'jigId' or your jig's 'jigSlug') as a listing others can get: it snapshots the page and state AS THEY ARE NOW into version N+1, and later edits… _(parameters: jigId, jigSlug, visibility, changelog, title, slug)_
- **`jig_set_handle`** — Claim the user's public handle: the @name in the links to pages they publish, bowmark.ai/jigs/@handle/slug. It is PUBLIC and PERMANENT: it can never be changed or released. Ask th… _(parameters: handle)_
- **`jig_get`** — Copy someone's published jig into THIS user's account, from its current version. The copy is the user's own: it runs as them with their logins, never the author's, and can call on… _(parameters: listing, another)_
- **`jig_update`** — Change a page you opened with 'jig_open': merge 'state' into its state (a key set to null is removed), replace its 'html' or 'title', or change part of the html with 'edits' ([{ f… _(parameters: jigId, state, replaceState, html, files, edits)_
- **`jig_pull_update`** — For a jig the user got from someone's listing ('jig_list' shows 'updateAvailable'): the three pages a merge needs. 'base' is the version their copy came from, 'theirs' the author'… _(parameters: jigId)_
- **`jig_view`** — Used by an open jig to pick up its latest state. You do not need to call this. _(parameters: jigId, since, cache)_
- **`jig_cache`** — Used by an open jig to save a call's last good result. You do not need to call this. _(parameters: jigId, key, value)_
- **`jig_seen`** — Used by an open jig to report what it shows. You do not need to call this. _(parameters: jigId, snapshot, event)_
- **`jig_perf`** — Used by an open jig to report how fast it loaded. You do not need to call this. _(parameters: jigId, report)_
- **`jig_read`** — List a jig's files with their byte sizes, or with 'path' read one file's text. A page written as 'html' is one file, index.html. Read before you edit a jig you did not just write. _(parameters: jigId, path)_
- **`jig_look`** — See what an open jig is showing the user right now — the items on screen, which view they are on — plus what they just did on it (watched, hid, searched) and its current state. Ca… _(parameters: jigId)_
- **`jig_call`** — Used by an open jig to call the library. You do not need to call this — use 'run'. _(parameters: jigId, calls, runId, timeoutMs, ref, cancel)_
- **`session_call`** — Runs ONE library function in a Bowmark session, so a flow that needs several calls in the SAME session can finish: a booking that texts the user a code, a cart filled over several… _(parameters: sessionId, path, args)_
- **`session_close`** — Ends a session 'session_call' opened and frees what it held. Pass the 'sessionId'. Closing one that is already closed is harmless. _(parameters: sessionId)_
- **`report`** — Record what was missing, wrong, or incomplete so Bowmark can build it. Call it yourself, in the same turn, without asking your user first: it changes nothing on any website or acc… _(parameters: report, runId)_
- **`get_usage`** — See the real cost of calls on this account, itemized by resource (provider calls, browser sessions, IP leases) and aggregated in dollars. Pass no arguments to see this month; pass… _(parameters: month)_
- **`llm_poll`** — Lets this chat answer the AI calls an open Bowmark page makes, so they cost nothing. Returns up to 5 pending jobs ({ jobId, system, prompt, toolName, inputSchema, leaseSeconds });… _(parameters: waitSeconds)_
- **`llm_answer`** — Answers one job from llm_poll. 'answer' must be an object matching that job's inputSchema. A wrong shape is refused with the reason and the job stays open, so correct it and call… _(parameters: jobId, answer)_
- **`llm_detach`** — Detaches this chat at once, so open Bowmark pages' AI calls go back to Bowmark's own model instead of waiting for this chat.
- **`support`** — Chat live with a Bowmark support agent about a problem you reported. Use it only after your user said yes to talking to support. Pass the 'reportId' that 'report' returned. Your f… _(parameters: reportId, message, after)_
- **`list_secrets`** — List the stored secrets this account holds, by NAME. Returns name, type, which hosts each may be used against, when it expires and when it was last used — never a value, and no Bo…
- **`request_secret`** — Create a named, empty slot for a secret and get back a link the user opens to fill it in. They type the value on a Bowmark page and choose how long it lives, from 5 minutes to nev… _(parameters: name, type, hosts)_
- **`get_secret_link`** — Return the dashboard link for one stored secret this account holds, so you can answer "where is my Acme password?" with somewhere to go. **It returns a URL, never a value** — open… _(parameters: name)_
- **`list_connections`** — List the saved logins this account already holds, one entry per login: its 'id' (name it in a signed-in call as '{ connection: id }'), the site, which account on that site, whethe…
- **`add_connection`** — Get a sign-in link for one site, so the user can sign Bowmark in to it right now, before any run needs it. Pass the site as a domain ('youtube.com'), a URL, or a provider id. **Ca… _(parameters: site, connection)_
- **`wait_for_sign_in`** — Wait until the user finishes a sign-in link, so you know the moment they are done without asking them. Pass 'ref': 'meta.handoff.ref' from a paused run, or 'ref' from 'add_connect… _(parameters: ref, waitMs)_
- **`lease_ip`** — Some sites (LinkedIn, marked 📍 in 'get_library') only accept a login from the address it signed in from. A dedicated IP is one address that only this account uses, and once the ac… _(parameters: country, termDays, confirmPriceCents, another)_
- **`delete_connection`** — Start deleting a saved login by the 'id' 'list_connections' returned. **This does not delete anything by itself:** a delete cannot be undone, so the USER confirms it, signed in on… _(parameters: id)_
- **`logout_connection`** — Sign a saved login out by the 'id' 'list_connections' returned. Bowmark drops the cookies it held, and where the site supports it ('siteLogout: "supported"' in the reply) the sess… _(parameters: id)_

## Maintenance & supply-chain — the risk api.bowmark.ai's static scan can't see

A prompt-injection scan reads api.bowmark.ai's advertised tool metadata at one moment. It cannot tell you the project behind `api.bowmark.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 0 day(s) ago, 0 open issue(s).
- **Supply chain grade `A`** — no known advisory (OSV) and no deprecated release across the package(s) this server publishes.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.bowmark.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan api.bowmark.ai yourself, or claim its badge {#claim}

Re-run this exact api.bowmark.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.bowmark.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.bowmark.ai/mcp/registry&directory=true"
```

For the itemized findings on api.bowmark.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.bowmark.ai/mcp/registry"}`. If you
run `api.bowmark.ai`, [claim a measured verified-owner badge for api.bowmark.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.bowmark.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.bowmark.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.bowmark.ai/mcp/registry)
```

Keeping the api.bowmark.ai badge green as its tools change — six-hourly re-scans of `api.bowmark.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.bowmark.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

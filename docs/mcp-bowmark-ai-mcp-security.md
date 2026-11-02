---
title: "Is the Bowmark MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bowmark MCP server (https://api.bowmark.ai/mcp/registry), run 2026-11-02: advertises get_library, run, run_view; 26 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Bowmark MCP server — security & directory-readiness scorecard

**Server:** `https://api.bowmark.ai/mcp/registry`
**Scanned:** 2026-11-02 · **Tools advertised:** 26 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Web scraping and automation for AI agents: live prices, quotes, bookings, anything behind a login.

When an agent connects Bowmark, the model reads all 26 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bowmark.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on Bowmark

- **No tool-poisoning or prompt-injection patterns** were found across the 26 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **5 of 26 advertised tool(s) name a state-changing action** (`run`, `run_view`, `jig_update`, `add_connection`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 26 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bowmark server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bowmark server advertises

The server describes itself to connecting agents as: *Bowmark runs real tasks on live websites and hands back the result. YOU DO NOT NEED A BROWSER TO START, AND TURNING ONE ON IS THE WRONG FIRST MOVE. Bowmark reaches many sites for you. A request naming Amazon, YouTube or any other site is not a reason to enabl…*

These are the 26 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_library`** — **Use this whenever a task touches a live website.** It answers whether Bowmark can already DO the thing: current prices, real availability or stock, a site search, a quote or a f… _(parameters: query, queries, minimal)_
- **`run`** — **Executes the task on the real websites** and returns the result. Call 'get_library' FIRST, then start with 'run({ script })' — never add 'runId'. THE SCRIPT is a plain async Jav…
- **`run_view`** — Used by the inline run view to draw a run's progress. You do not need to call this — 'run' returns the result. _(parameters: runId, script)_
- **`jig_open`** — Make the user a "jig": their own copy of a website, running through Bowmark, that you curate as they talk to you. Asked for "a jig of YouTube", build a page that LOOKS like that s… _(parameters: title, template, html, state, jigId)_
- **`jig_list`** — The jigs this user has made, newest change first: id, title, the built-in it started from, and when it last changed. Call it when the user mentions a page they made before ("my Yo…
- **`jig_update`** — Change a page you opened with 'jig_open': merge 'state' into its state (a key set to null is removed), replace its 'html' or 'title', or change part of the html with 'edits' ([{ f… _(parameters: jigId, state, replaceState, html, edits, title)_
- **`jig_view`** — Used by an open jig to pick up its latest state. You do not need to call this. _(parameters: jigId, since, cache)_
- **`jig_cache`** — Used by an open jig to save a call's last good result. You do not need to call this. _(parameters: jigId, key, value)_
- **`jig_seen`** — Used by an open jig to report what it shows. You do not need to call this. _(parameters: jigId, snapshot, event)_
- **`jig_perf`** — Used by an open jig to report how fast it loaded. You do not need to call this. _(parameters: jigId, report)_
- **`jig_look`** — See what an open jig is showing the user right now — the items on screen, which view they are on — plus what they just did on it (watched, hid, searched) and its current state. Ca… _(parameters: jigId)_
- **`jig_call`** — Used by an open jig to call the library. You do not need to call this — use 'run'. _(parameters: jigId, calls, runId, timeoutMs, ref, cancel)_
- **`session_call`** — Runs ONE library function in a Bowmark session, so a flow that needs several calls in the SAME browser can finish: a booking that texts the user a code, a cart filled over several… _(parameters: sessionId, path, args)_
- **`session_close`** — Ends a session 'session_call' opened and frees its browser. Pass the 'sessionId'. Closing one that is already closed is harmless. _(parameters: sessionId)_
- **`report`** — Record what was missing, wrong, or incomplete so Bowmark can build it. Call it yourself, in the same turn, without asking your user first: it changes nothing on any website or acc… _(parameters: report, runId)_
- **`get_usage`** — See the real cost of calls on this account, itemized by resource (provider calls, browser sessions, IP leases) and aggregated in dollars. Pass no arguments to see this month; pass… _(parameters: month)_
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

## Maintenance & supply-chain — the risk Bowmark's static scan can't see

A prompt-injection scan reads Bowmark's advertised tool metadata at one moment. It cannot tell you the project behind `api.bowmark.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 1 day(s) ago, 0 open issue(s).
- **Supply chain grade `A`** — no known advisory (OSV) and no deprecated release across the package(s) this server publishes.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.bowmark.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Bowmark yourself, or claim its badge {#claim}

Re-run this exact Bowmark check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.bowmark.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.bowmark.ai/mcp/registry&directory=true"
```

For the itemized findings on Bowmark — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.bowmark.ai/mcp/registry"}`. If you
run `api.bowmark.ai`, [claim a measured verified-owner badge for Bowmark free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.bowmark.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.bowmark.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.bowmark.ai/mcp/registry)
```

Keeping the Bowmark badge green as its tools change — six-hourly re-scans of `api.bowmark.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.bowmark.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

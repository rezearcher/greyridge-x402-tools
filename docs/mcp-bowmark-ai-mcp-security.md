---
title: "Is the Bowmark MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Bowmark MCP server (https://api.bowmark.ai/mcp/registry), run 2026-10-24: advertises get_library, run, run_view; 16 tools scanned, injection verdict 'clear', 16 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Bowmark MCP server — security & directory-readiness scorecard

**Server:** `https://api.bowmark.ai/mcp/registry`
**Scanned:** 2026-10-24 · **Tools advertised:** 16 · **Injection verdict:** `clear` · **Directory:** 16 Claude Directory blocker(s)

Do things on live websites: prices, availability, quotes, bookings, anything behind a form or login.

When an agent connects Bowmark, the model reads all 16 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bowmark.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Bowmark

- **No tool-poisoning or prompt-injection patterns** were found across the 16 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 16 blocker(s).** This server advertises 16 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **4 of 16 advertised tool(s) name a state-changing action** (`run`, `run_view`, `add_connection`, `delete_connection`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 16 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Bowmark server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Bowmark server advertises

The server describes itself to connecting agents as: *Bowmark runs real tasks on live websites and hands back the result. YOU DO NOT NEED A BROWSER, AND TURNING ONE ON IS THE WRONG FIRST MOVE. Bowmark reaches many sites for you, on our machines. A request naming Amazon, YouTube or any other site is not a reason…*

These are the 16 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_library`** — **Use this whenever a task touches a live website.** It answers whether Bowmark can already DO the thing: current prices, real availability or stock, a site search, a quote or a f… _(parameters: query, queries)_
- **`run`** — **Executes the task on the real websites** and returns the result. Call 'get_library' FIRST for the exact function names and shapes, then send a script as 'run({ script })'. THE S… _(parameters: script, runId)_
- **`run_view`** — Used by the inline run view to draw a run's progress. You do not need to call this — 'run' returns the result. _(parameters: runId, script)_
- **`session_call`** — Runs ONE library function in a Bowmark session, so a flow that needs several calls in the SAME browser can finish: a booking that texts the user a code, a cart filled over several… _(parameters: sessionId, path, args)_
- **`session_close`** — Ends a session 'session_call' opened and frees its browser. Pass the 'sessionId'. Closing one that is already closed is harmless. _(parameters: sessionId)_
- **`report`** — Record what was missing, wrong, or incomplete so Bowmark can build it. Call it yourself, in the same turn, without asking your user first: it changes nothing on any website or acc… _(parameters: report, runId)_
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

## Scan Bowmark yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

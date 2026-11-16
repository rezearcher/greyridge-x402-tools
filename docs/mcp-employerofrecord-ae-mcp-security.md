---
title: "Is the Moha: hire in the UAE MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Moha: hire in the UAE MCP server (https://employerofrecord.ae/mcp), run 2026-11-16: advertises how_to_hire_in_the_uae, get_quote, prepare_hire; 5 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Moha: hire in the UAE MCP server — security & directory-readiness scorecard

**Server:** `https://employerofrecord.ae/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Hire in the UAE without a local company: guide, quotes and accounts via an Employer of Record.

When an agent connects Moha: hire in the UAE, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`employerofrecord.ae`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on Moha: hire in the UAE

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Moha: hire in the UAE server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Moha: hire in the UAE server advertises

The server describes itself to connecting agents as: *Moha is an Employer of Record in the UAE: it employs people for companies that have no legal entity in the UAE, sponsors their work permits and visas, runs payroll through WPS and looks after them on arrival. how_to_hire_in_the_uae explains the process and th…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`how_to_hire_in_the_uae`** — How hiring in the UAE works through Moha, an Employer of Record, for a company with no UAE entity: when it fits, the information needed about the hire and the company, the employe…
- **`get_quote`** — Monthly and upfront cost of employing one person in the UAE through Moha, an Employer of Record: salary split, employer costs, government fees, insurance, our fee and VAT, plus ho… _(parameters: monthly_salary_aed, nationality, emirate, inside_uae, spouse, children)_
- **`prepare_hire`** — Prepares one hire in the UAE without an account. Returns the quote and a link: the person opens it, checks the details and creates their Moha account. Moha checks the company befo… _(parameters: first_name, last_name, job_title, employee_email, start_date, monthly_salary_aed)_
- **`prepare_account`** — Prepares a Moha account without signing in: company profile, the person setting it up, one to ten hires and colleagues to invite. Returns the quotes and one link to confirm. Moha… _(parameters: company, you, hires, team)_
- **`check_prepared_hire`** — Whether the person opened the link from prepare_hire or prepare_account and created their account yet. _(parameters: draft_id)_

## Maintenance & supply-chain — the risk Moha: hire in the UAE's static scan can't see

A prompt-injection scan reads Moha: hire in the UAE's advertised tool metadata at one moment. It cannot tell you the project behind `employerofrecord.ae` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `employerofrecord.ae` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Moha: hire in the UAE yourself, or claim its badge {#claim}

Re-run this exact Moha: hire in the UAE check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `employerofrecord.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://employerofrecord.ae/mcp&directory=true"
```

For the itemized findings on Moha: hire in the UAE — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://employerofrecord.ae/mcp"}`. If you
run `employerofrecord.ae`, [claim a measured verified-owner badge for Moha: hire in the UAE free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=employerofrecord.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Demployerofrecord.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://employerofrecord.ae/mcp)
```

Keeping the Moha: hire in the UAE badge green as its tools change — six-hourly re-scans of `employerofrecord.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `employerofrecord.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

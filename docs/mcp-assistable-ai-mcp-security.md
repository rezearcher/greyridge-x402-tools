---
title: "Is the Assistable MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Assistable MCP server (https://api.assistable.ai/mcp), run 2026-11-09: advertises search_tools, assistants_list, assistants_get; 16 tools scanned, injection verdict 'clear', 2 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# Assistable MCP server — security & directory-readiness scorecard

**Server:** `https://api.assistable.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 16 · **Injection verdict:** `clear` · **Directory:** 2 likely Claude Directory reject(s)

Give any AI agent a phone: make and answer calls, get through phone menus, and send texts.

When an agent connects Assistable, the model reads all 16 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.assistable.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Assistable

- **No tool-poisoning or prompt-injection patterns** were found across the 16 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 2 likely reject(s).** This server advertises 2 tool definition(s) that would likely fail Anthropic's structural review criteria (plus 18 quality item(s) to polish). The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **5 of 16 advertised tool(s) name a state-changing action** (`assistants_create`, `assistants_update`, `tools_create_custom`, `tools_update`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 16 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Assistable server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Assistable server advertises

The server describes itself to connecting agents as: *Tools target the CreateAssistants v3 REST API (multi-channel voice AI: voice, SMS, WhatsApp, web chat). Use search_tools with the user's intent first; it returns a small set of exact registered tool names, input schemas, annotations and the current catalog ve…*

These are the 16 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_tools`** — Search Assistable's registered MCP tools by the task the user wants to do. Returns up to 5 exact tool definitions with JSON input schemas and annotations. Use this first when you… _(parameters: query, limit)_
- **`assistants_list`** — List assistants in a subaccount (excludes archived by default). Note: voice_settings and platform_tools are returned only by assistants_get, not in the list. _(parameters: subAccountId, limit, cursor, includeArchived)_
- **`assistants_get`** — Fetch an assistant's full configuration by ID. The response includes voice_settings (greeting mode, opening messages, voicemail) and platform_tools (attached platform-catalog tool… _(parameters: assistantId)_
- **`assistants_create`** — Create an assistant. Required: subAccountId, name. Optional config blocks (llmConfig, voiceConfig, chatConfig) mirror the dashboard create dialog. voice_settings configures call g… _(parameters: subAccountId, name, description, assistantType, voiceId, llmConfig)_
- **`assistants_update`** — Patch an assistant. Only supplied fields change; nested config blocks are upserted. voice_settings updates call greeting mode, opening messages, and voicemail behavior; platform_t… _(parameters: assistantId, name, description, voiceId, llmConfig, voiceConfig)_
- **`assistants_archive`** — Archive (soft-delete) an assistant. _(parameters: assistantId)_
- **`tools_list`** — List tools visible to a subaccount. Pass includePrebuilt=false for only custom tools. _(parameters: subAccountId, search, includePrebuilt, limit, cursor)_
- **`tools_get`** — Fetch a tool's full configuration. _(parameters: toolId)_
- **`tools_create_custom`** — Create a custom tool (toolType=CUSTOM). Name must match /^[a-zA-Z0-9_-]+$/ and be unique in the subaccount. _(parameters: subAccountId, name, description, url, httpMethod, headers)_
- **`tools_update`** — Patch a custom tool. Supplying parameters/headers replaces those rows; omit to leave them. _(parameters: toolId, name, description, url, httpMethod, headers)_
- **`tools_delete`** — Soft-delete a custom tool. _(parameters: toolId)_
- **`contacts_list`** — List contacts in a subaccount. meta.total is the number of matching contacts, so use it to answer how many contacts there are. _(parameters: subAccountId, search, limit, cursor)_
- **`contacts_get`** — Fetch a contact by ID. _(parameters: contactId)_
- **`conversations_list`** — List conversations in a subaccount. _(parameters: subAccountId, limit, cursor)_
- **`appointments_list`** — List appointments in a subaccount within an optional date range. _(parameters: subAccountId, startDate, endDate, limit, cursor)_
- **`calls_get`** — Fetch a call (status, recording, transcript) by ID. _(parameters: call_id, callId)_

## Maintenance & supply-chain — the risk Assistable's static scan can't see

A prompt-injection scan reads Assistable's advertised tool metadata at one moment. It cannot tell you the project behind `api.assistable.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.assistable.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Assistable yourself, or claim its badge {#claim}

Re-run this exact Assistable check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.assistable.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.assistable.ai/mcp&directory=true"
```

For the itemized findings on Assistable — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.assistable.ai/mcp"}`. If you
run `api.assistable.ai`, [claim a measured verified-owner badge for Assistable free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.assistable.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.assistable.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.assistable.ai/mcp)
```

Keeping the Assistable badge green as its tools change — six-hourly re-scans of `api.assistable.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.assistable.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

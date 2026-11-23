---
title: "Is the AnyShare by Anysoft MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AnyShare by Anysoft MCP server (https://share.anysoft.ai/mcp), run 2026-11-23: advertises get_connection, list_documents, get_document; 12 tools scanned, injection verdict 'clear', 12 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# AnyShare by Anysoft MCP server — security & directory-readiness scorecard

**Server:** `https://share.anysoft.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 12 · **Injection verdict:** `clear` · **Directory:** 12 Claude Directory quality item(s) to polish (no hard rejects)

Upload documents, create protected links, and read page engagement. OAuth required.

When an agent connects AnyShare by Anysoft, the model reads all 12 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`share.anysoft.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on AnyShare by Anysoft

- **No tool-poisoning or prompt-injection patterns** were found across the 12 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 12 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **6 of 12 advertised tool(s) name a state-changing action** (`request_document_upload`, `upload_document`, `complete_document_upload`, `get_upload_status`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 12 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AnyShare by Anysoft server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AnyShare by Anysoft server advertises

The server describes itself to connecting agents as: *AnyShare securely shares original documents and data rooms. Use the connected organization only. Explain billing restrictions using get_connection.billing or the failed tool's billing details: include the known reason/date, affected actions and remaining read…*

These are the 12 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_connection`** — Check the connected organization, permissions, upload limit and billing access. Explain the returned billing state, reason and dates when an action is blocked. can_use=false pause…
- **`list_documents`** — Search document names in the connected organization. Results are paginated; use next_cursor for subsequent pages. _(parameters: query, cursor, limit)_
- **`get_document`** — Read metadata and processing status for an existing document. Does not open the shared viewer or count a view. _(parameters: document_id)_
- **`list_data_rooms`** — Search existing data rooms and their folder names in the connected organization. _(parameters: query, cursor, limit)_
- **`get_data_room`** — List the documents and folders in one existing data room. _(parameters: room_id)_
- **`request_document_upload`** — Reserve a document up to 100 MB. Returns a signed URL for PUT of original file bytes, plus a user upload page if your client cannot transfer the file. Complete the upload afterwar… _(parameters: idempotency_key, filename, size, name, room_id, folder)_
- **`upload_document`** — Import the original bytes of a user-provided file using its temporary download_url. Use a stable file_id and idempotency_key for retries. If the source cannot be fetched, request_… _(parameters: idempotency_key, name, room_id, folder, file, filename)_
- **`complete_document_upload`** — Confirm the bytes have been uploaded, queue conversion and apply reserved room placement, exposing content to existing room recipients. Safe to retry. Returns processing status; q… _(parameters: upload_id)_
- **`get_upload_status`** — Read the status of an upload initiated by this connection. Check again in a few seconds while queued or processing. _(parameters: upload_id)_
- **`create_share_link`** — Create a persistent recipient link for exactly one document or data room. Verified email on and downloads off by default. Set weaker access only when the user explicitly requests… _(parameters: name, document_id, room_id, require_email, verify_email, allowed_emails)_
- **`add_document_to_data_room`** — Add an existing document to an existing data room and folder. If already present, preserve its current folder. Existing room recipients may gain access to this document. Does not… _(parameters: document_id, room_id, folder)_
- **`get_document_analytics`** — Read aggregate recorded engagement for exactly one document_id, share_link_id or room_id. Use share_link_id for a recipient link; the host may reserve link_id for connected-accoun… _(parameters: detail, include_viewer_identities, document_id, share_link_id, link_id, room_id)_

## Maintenance & supply-chain — the risk AnyShare by Anysoft's static scan can't see

A prompt-injection scan reads AnyShare by Anysoft's advertised tool metadata at one moment. It cannot tell you the project behind `share.anysoft.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `share.anysoft.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AnyShare by Anysoft yourself, or claim its badge {#claim}

Re-run this exact AnyShare by Anysoft check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `share.anysoft.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://share.anysoft.ai/mcp&directory=true"
```

For the itemized findings on AnyShare by Anysoft — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://share.anysoft.ai/mcp"}`. If you
run `share.anysoft.ai`, [claim a measured verified-owner badge for AnyShare by Anysoft free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=share.anysoft.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dshare.anysoft.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://share.anysoft.ai/mcp)
```

Keeping the AnyShare by Anysoft badge green as its tools change — six-hourly re-scans of `share.anysoft.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `share.anysoft.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

---
title: "Is the AutoPoster AI MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AutoPoster AI MCP server (https://agent.autoposter.ai/mcp), run 2026-10-24: advertises autoposter_list_accounts, autoposter_get_rules, autoposter_upload_media; 14 tools scanned, injection verdict 'clear', 14 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# AutoPoster AI MCP server — security & directory-readiness scorecard

**Server:** `https://agent.autoposter.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 14 · **Injection verdict:** `clear` · **Directory:** 14 Claude Directory quality item(s) to polish (no hard rejects)



When an agent connects AutoPoster AI, the model reads all 14 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agent.autoposter.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AutoPoster AI

- **No tool-poisoning or prompt-injection patterns** were found across the 14 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 14 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **13 of 14 advertised tool(s) name a state-changing action** (`autoposter_list_accounts`, `autoposter_get_rules`, `autoposter_upload_media`, `autoposter_get_media_upload_url`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 14 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AutoPoster AI server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AutoPoster AI server advertises

These are the 14 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`autoposter_list_accounts`** — Lists all connected social media accounts (X, LinkedIn, Instagram, TikTok, YouTube, Threads, Bluesky, Pinterest, Facebook) in the current Autoposter workspace.
- **`autoposter_get_rules`** — Returns platform publishing constraints including character limits, media format requirements, and guidelines.
- **`autoposter_upload_media`** — Uploads an image or video to Auto Poster media library. Accepts files generated in ChatGPT (e.g. DALL-E images in /mnt/data/), uploaded files, or public image URLs. Direct chat do… _(parameters: file, url, name)_
- **`autoposter_get_media_upload_url`** — Only for clients that can perform an HTTP PUT or multipart POST (not chat-only clients such as Gemini): if you cannot make that request yourself, use autoposter_create_upload_link… _(parameters: fileName, contentType)_
- **`autoposter_create_upload_link`** — Creates a short-lived link where the user can upload images from their device into the Auto Poster media library. Use this when the user wants to attach an image that exists only…
- **`autoposter_draft_post`** — Creates a draft post for human review. If API key lacks direct publish, post is saved as pending_approval and notifications are sent to workspace approvers. Accepts mediaUrls (pub… _(parameters: accountIds, content, platformContent, mediaUrls, mediaIds, files)_
- **`autoposter_schedule_post`** — Schedules a post for a future date/time. Automatically converts local time using workspace/user timezone into UTC. Accepts mediaUrls (public URLs) or files (AI-generated images or… _(parameters: accountIds, content, scheduledAt, timezone, platformContent, mediaUrls)_
- **`autoposter_publish_draft`** — Approves and immediately publishes an existing draft or pending post. Requires an API key with direct publish permission. _(parameters: postId)_
- **`autoposter_get_post_status`** — Checks delivery status of a post and returns live platform links/receipts once published. _(parameters: postId)_
- **`autoposter_get_post`** — Retrieves a single post by ID including its state (drafts, pending_approval, queued, posted) and live link receipts. _(parameters: postId)_
- **`autoposter_delete_post`** — Deletes or cancels a draft, scheduled, or pending post by ID. _(parameters: postId)_
- **`autoposter_list_posts`** — Lists posts in the workspace. Supports filtering by state ('drafts', 'scheduled', 'queued', 'posted', 'failed', 'pending_approval'), caption text search, and limit. _(parameters: state, limit, search)_
- **`autoposter_list_media`** — Lists media files (images and videos) stored in the workspace media library with public CDN URLs. _(parameters: type, limit)_
- **`get_profile`** — Return the profile represented by this request's authenticated credentials. The opaque id is unique within this app and remains unchanged across token refresh, reconnection, and d…

## Scan AutoPoster AI yourself, or claim its badge

Re-run this exact AutoPoster AI check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agent.autoposter.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agent.autoposter.ai/mcp&directory=true"
```

For the itemized findings on AutoPoster AI — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agent.autoposter.ai/mcp"}`. If you
run `agent.autoposter.ai`, [claim a measured verified-owner badge for AutoPoster AI free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agent.autoposter.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagent.autoposter.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agent.autoposter.ai/mcp)
```

Keeping the AutoPoster AI badge green as its tools change — six-hourly re-scans of `agent.autoposter.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agent.autoposter.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

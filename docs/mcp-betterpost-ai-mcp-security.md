---
title: "Is the BetterPost MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BetterPost MCP server (https://betterpost.ai/mcp), run 2026-10-24: advertises betterpost_create_project, betterpost_generate_content, betterpost_derive_content; 23 tools scanned, injection verdict 'clear', 23 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# BetterPost MCP server — security & directory-readiness scorecard

**Server:** `https://betterpost.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 23 · **Injection verdict:** `clear` · **Directory:** 23 Claude Directory blocker(s)

Finds timely sources across news, social, and the web and writes posts worth publishing.

When an agent connects BetterPost, the model reads all 23 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`betterpost.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on BetterPost

- **No tool-poisoning or prompt-injection patterns** were found across the 23 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 23 blocker(s).** This server advertises 23 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **23 of 23 advertised tool(s) name a state-changing action** (`betterpost_create_project`, `betterpost_generate_content`, `betterpost_derive_content`, `betterpost_list_content`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 23 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BetterPost server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BetterPost server advertises

The server describes itself to connecting agents as: *BetterPost: generate timely, well-sourced content. Create a project, then generate content for it. Sign in with your BetterPost account when prompted — new accounts start with 100 free credits, and your projects and content stay linked to your account automat…*

These are the 23 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`betterpost_create_project`** — Create a content project. Slow, one-shot: infers config (criteria, industry, tone), discovers sources, and gathers/ranks an initial set of timely stories. Best called after the in… _(parameters: title, audience, description, tone)_
- **`betterpost_generate_content`** — Generate a new piece of content for a project from its timely, relevant stories. Fast in steady state. Charges credits on success only. If you pass a 'topic' the project has no st… _(parameters: projectId, type, topic, reuse, tieIn, wordLimit)_
- **`betterpost_derive_content`** — Transform an existing piece into another format (e.g. newsletter → tweet). No fetching; reuses the source stories and topic. _(parameters: fromContentId, type, tieIn)_
- **`betterpost_list_content`** — List a project's content (summaries + shareable 'publicUrl' links). _(parameters: projectId)_
- **`betterpost_get_content`** — Fetch one piece of content in full. _(parameters: contentId)_
- **`betterpost_delete_content`** — Delete a piece of content and its hosted images. _(parameters: contentId)_
- **`betterpost_list_projects`** — Returns your projects, each with its relevance 'criteria' (with ids) that define what counts as on-topic.
- **`betterpost_get_project`** — Returns one project with its relevance 'criteria' (each with an id, so a criterion can be targeted for removal via betterpost_update_project). _(parameters: projectId)_
- **`betterpost_update_project`** — Updates a project's title, audience, description, tone, freshness window, timezone, or relevance criteria, and returns the updated project with its criteria. Changing title/audien… _(parameters: projectId, patch)_
- **`betterpost_delete_project`** — Permanently deletes a project and everything in it — its sources, stories, and content. Cannot be undone. _(parameters: projectId)_
- **`betterpost_list_sources`** — Returns one slimmed page of a project's sources plus project-wide 'total' and 'counts' (ok/failing/disabled/pending, and byType). Page with 'limit' (default 50) and 'offset', foll… _(parameters: projectId, limit, offset)_
- **`betterpost_add_source`** — Adds a source to a project and fetches it immediately (bounded by a few seconds), returning 'storiesAdded' so the next generate_content can use it; if it is still fetching it retu… _(parameters: projectId, value, name, type)_
- **`betterpost_remove_source`** — Removes a source from a project. Its already-gathered stories stay; the source is no longer fetched. _(parameters: sourceId)_
- **`betterpost_list_stories`** — Returns a project's gathered stories, each with 'title', 'url', 'summary', 'relevancy', 'publicationDate', and 'isManual'/'isHidden' flags. Pass includeHidden to include hidden on… _(parameters: projectId, includeHidden)_
- **`betterpost_add_story`** — Manually imports a story you read about from its URL (pinned relevance, flagged is_manual) so generation can draw on it. _(parameters: projectId, url, title, summary)_
- **`betterpost_hide_story`** — Hides a story so generation ignores it. Reversible with unhide_story. _(parameters: storyId)_
- **`betterpost_unhide_story`** — Unhides a previously hidden story so generation can use it again. _(parameters: storyId)_
- **`betterpost_suggest_topics`** — Clusters a project's current stories into a few candidate angles — each with a label, how many stories back it, and example headlines — and warms the project (gathers and ranks fr… _(parameters: projectId, type, count)_
- **`betterpost_get_usage`** — Your credit balance, freeze state, and recent spend.
- **`betterpost_get_settings`** — Returns a project's per-content-type settings (wordLimit and additionalInstructions for each channel). _(parameters: projectId)_
- **`betterpost_update_settings`** — Patches one content type's wordLimit and/or additionalInstructions (free-form writing guidance for that type; pass an empty string to clear it). Project-wide preferences (title/au… _(parameters: projectId, type, wordLimit, additionalInstructions)_
- **`betterpost_expand_coverage`** — Broadens a project's coverage: expands the relevance criteria (when needed), finds more sources across news, the web, and the relevant social platforms, and fetches them inline. A… _(parameters: projectId, focus, addAsCriteria, confirmedByUser)_
- **`betterpost_humanize`** — Rewrite existing text into BetterPost's readable, human voice. Preserves the meaning, facts, links, and format; returns the rewritten text plus short notes on what changed. Pass '… _(parameters: text, projectId, type, tone)_

## Scan BetterPost yourself, or claim its badge

Re-run this exact BetterPost check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `betterpost.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://betterpost.ai/mcp&directory=true"
```

For the itemized findings on BetterPost — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://betterpost.ai/mcp"}`. If you
run `betterpost.ai`, [claim a measured verified-owner badge for BetterPost free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=betterpost.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbetterpost.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://betterpost.ai/mcp)
```

Keeping the BetterPost badge green as its tools change — six-hourly re-scans of `betterpost.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `betterpost.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

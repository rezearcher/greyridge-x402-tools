---
title: "Is the Cactal MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Cactal MCP server (https://api.cactal.ai/v1/mcp), run 2026-11-09: advertises feedback_submit, websites_list, websites_get; 84 tools scanned, injection verdict 'clear', 1 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# Cactal MCP server — security & directory-readiness scorecard

**Server:** `https://api.cactal.ai/v1/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 84 · **Injection verdict:** `clear` · **Directory:** 1 likely Claude Directory reject(s)

The website platform for AI agents. One API to build, host, and operate real websites.

When an agent connects Cactal, the model reads all 84 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.cactal.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Cactal

- **No tool-poisoning or prompt-injection patterns** were found across the 84 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 likely reject(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria (plus 84 quality item(s) to polish). The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **39 of 84 advertised tool(s) name a state-changing action** (`websites_create`, `websitedomains_createcustomdomain`, `websitedomains_setprimarydomain`, `websitedomains_removecustomdomain`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 84 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Cactal server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Cactal server advertises

The server describes itself to connecting agents as: *Cactal builds and runs production websites: React + Tailwind source, CMS content, assets, forms, domains, analytics, and publishing. Before working on something, read the matching guide with skills_read. profile_get names the organizations and websites you ca…*

These are the 84 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`feedback_submit`** — Adds user-requested free-form feedback to the Cactal product-feedback inbox. Describe what happened and what would have made the experience better. Agents must set 'authorKind' to… _(parameters: authorKind, feedback)_
- **`websites_list`** — Lists accessible websites. By default returns active websites: use 'organizationId' to scope one organization, 'scope=shared' without it for direct grants outside your memberships… _(parameters: organizationId, cursor, limit, sort, search, scope)_
- **`websites_get`** — Returns a single website by 'websiteId', or by its 'organizationSlug' + 'websiteSlug' pair when starting from a URL — provide exactly one of the two identifications. The response… _(parameters: websiteId, organizationSlug, websiteSlug)_
- **`websites_create`** — Creates a website in the organization. Provide either a 'name' (trimmed, 1–200 characters) or a creation 'prompt'; a prompt returns immediately with the temporary name 'Untitled s… _(parameters: organizationId, name, prompt, slug, idempotencyKey)_
- **`websites_rename`** — Updates the website’s display name and, when supplied, its URL slug. The slug must be lowercase, URL-safe, unreserved, and unique among active websites in the organization. _(parameters: websiteId, name, slug)_
- **`websiteDomains_list`** — Returns every domain record attached to the website, oldest first: the automatically allocated platform subdomain plus any custom domains. Platform subdomains are always 'active';… _(parameters: websiteId)_
- **`websiteDomains_createCustomDomain`** — Claims 'hostname' for this website and registers it with the Cactal edge. Custom domains must first be enabled for the website ('websiteDomains.setEnabled', owner-only — enabling… _(parameters: websiteId, hostname)_
- **`websiteDomains_verifyCustomDomain`** — Re-checks the ownership TXT record, edge readiness, and whether an HTTPS request to the hostname reaches this Cactal domain, then returns the updated status. A customer CDN or rev… _(parameters: websiteId, domainId)_
- **`websiteDomains_setPrimaryDomain`** — Makes this domain the canonical hostname for the published website: requests reaching the platform subdomain or any other custom domain are permanently redirected (HTTP 308) to it… _(parameters: websiteId, domainId)_
- **`websiteDomains_removeCustomDomain`** — Deregisters the hostname from the Cactal edge and deletes the domain record. If the removed domain was primary, the oldest remaining active custom domain is promoted automatically… _(parameters: websiteId, domainId)_
- **`websiteDomains_renamePlatformDomain`** — Moves the website to 'label.platform domain', the free address every website is allocated at creation. 'label' is just the leading part: 1-40 characters, lowercase letters, digits… _(parameters: websiteId, label)_
- **`websiteAssets_list`** — Returns ready assets newest first as compact rows ('description', 'category', dimensions, 'url', 'srcSet'); fetch one asset for 'originalUrl' and 'variants'. Filter by 'kind', 'ca… _(parameters: websiteId, kind, category, type, search, cursor)_
- **`websiteAssets_get`** — Returns the asset with 'description', 'category', and its CDN delivery shape: for transformable images 'url' is the optimized 1920px default and 'originalUrl' the original bytes;… _(parameters: assetId)_
- **`websiteAssets_importFromUrl`** — Fetches 1-10 public http(s) URLs server-side, one at a time, and stores each as a ready asset with no upload or finalize step. Media only: images, fonts, PDF, audio, video, dotLot… _(parameters: websiteId, items)_
- **`websiteAssets_update`** — Changes 'filename', 'description', or 'category'. Pass only the fields to change; 'null' clears a field. 'category' is images only. _(parameters: assetId, filename, description, category)_
- **`websiteAssets_delete`** — Archives the asset: it immediately stops appearing in list responses and its id returns 404 from every asset endpoint. Archival cannot be undone through the API; previously issued… _(parameters: assetId)_
- **`websiteKnowledge_project_get`** — Returns the website’s durable project knowledge: the text the user maintains as 'content', plus the 'agentNotes' Cactal distills from agent conversations. Both are included in eve… _(parameters: websiteId)_
- **`websiteKnowledge_project_edit`** — Applies exact-match text edits to the user’s project knowledge text, in order; an empty 'oldStr' appends. Change it only when the user asks; agent-discovered facts belong in agent… _(parameters: websiteId, edits)_
- **`websiteKnowledge_agentNotes_edit`** — Applies exact-match text edits to the agent notes, in order; an empty 'oldStr' appends. Record only durable facts, decisions, rejected directions, and constraints, one short line… _(parameters: websiteId, edits)_
- **`websiteKnowledge_list`** — Lists the website’s private durable context entries: uploaded files and pasted text, each with a 'title', a generated 'description', and an 'origin' of 'upload' or 'text'. _(parameters: websiteId)_
- **`websiteKnowledge_create`** — Keeps pasted or typed text as a context entry the agent searches and reads when relevant, using one of the website’s 25 slots. Cactal titles and describes it. Use this for materia… _(parameters: websiteId, text)_
- **`websiteKnowledge_update`** — Renames a context entry or replaces the text the agent reads. Replacing text does not change the downloadable original; images have no text. _(parameters: resourceId, title, text)_
- **`websiteKnowledge_read`** — Read a bounded line range from a project context document. Read short relevant documents directly; search large documents first. Do not reread sufficient search passages. _(parameters: resourceId, startLine, endLine)_
- **`websiteKnowledge_search`** — Find evidence across selected project context documents. Batch independent queries; use passages directly when sufficient. Results merge overlapping text and include source ranges… _(parameters: websiteId, resourceIds, queries, contextLines, maxCharacters)_
- **`websiteKnowledge_view`** — Returns one private PNG, JPEG, or WebP context resource. _(parameters: resourceId)_
- **`websiteFavicons_set`** — Sets the website’s current favicon to a ready PNG, SVG, or ICO image from the same website asset library. Send 'assetId: null' to clear it. The change applies immediately to every… _(parameters: websiteId, assetId)_
- **`websiteSourceCode_summary_get`** — Returns 'headVersion', 'publishedVersion', and whether the website has unpublished source changes. _(parameters: websiteId)_
- **`websiteSourceCode_files_list`** — Lists file identities, sizes, and line counts without contents, sorted by type then name with cursor pagination (default 20, maximum 100). Filter by name with 'nameGlob'. Defaults… _(parameters: websiteId, target, version, nameGlob, cursor, limit)_
- **`websiteSourceCode_files_read`** — Reads up to 50 files by name from head, published, or an explicit version. A single-file read supports line and character ranges; continue truncated reads with 'nextStartCharacter… _(parameters: websiteId, target, version, names, startLine, endLine)_
- **`websiteSourceCode_files_search`** — Finds text across every source file and returns one entry per matching line with its file name, line, and column. Call this first to locate code, then read only the files it names… _(parameters: websiteId, target, version, pattern, isRegex, caseSensitive)_
- **`websiteSourceCode_changes_list`** — Lists added, removed, and modified file identities between two version refs, defaulting from published to head. Results use cursor pagination; pin continuation requests to the res… _(parameters: websiteId, from, to, cursor, limit)_
- **`websiteSourceCode_files_diff`** — Returns a bounded unified diff for one file name between two version refs, defaulting from published to head. _(parameters: websiteId, from, to, name)_
- **`websiteSourceCode_lease_acquire`** — Acquires and replaces the website's single edit lease, taking over from any other editor. Writes that pass the returned principal-bound 'leaseToken' keep working until someone els… _(parameters: websiteId)_
- **`websiteSourceCode_files_upsert`** — Creates or replaces one head file. Pages, components, and modules require 'name'; singleton types take only 'type'. Takes the edit lease when no 'leaseToken' is sent and returns '… _(parameters: websiteId, file, content, leaseToken)_
- **`websiteSourceCode_files_strReplace`** — Atomically applies ordered exact-string edits to up to 50 files and 200 edits in total as one head version. Each 'oldStr' must match once unless 'replaceAll' is true, and any fail… _(parameters: websiteId, files, dryRun, leaseToken)_
- **`websiteSourceCode_files_delete`** — Deletes one head file while preserving history. Address named files by 'type' and 'name', and singletons by 'type'; takes the edit lease when no 'leaseToken' is sent. _(parameters: websiteId, file, leaseToken)_
- **`websiteSourceCode_pages_editRoute`** — Rewrites and normalizes a page's 'definePage' route literal. Takes the edit lease when no 'leaseToken' is sent. _(parameters: websiteId, name, route, leaseToken)_
- **`websiteSourceCode_metadata_edit`** — Replaces a page's complete metadata object when 'page' is sent, otherwise the site defaults in 'website_config'. Takes the edit lease when no 'leaseToken' is sent. _(parameters: websiteId, page, metadata, leaseToken)_
- **`websiteSourceCode_head_check`** — Runs the publish-time framework quality gate without changing source: format, typecheck, lint, build, and a server-render of every page using placeholder content synthesized from… _(parameters: websiteId)_
- **`websiteSourceCode_deployment_status`** — Returns the preview revision, available page routes, publish availability, and build state for the selected head or published source version. Fails with 404 when 'target=published… _(parameters: websiteId, target)_
- **`websiteSourceCode_deployment_ensure`** — Returns an existing non-failed deployment for the selected version or builds one. Poll status when another request is already building it. _(parameters: websiteId, target)_
- **`websiteSourceCode_head_publish`** — Validates, builds, and publishes head. Canonical formatting may create a new head first. Pass the 'version' the check returned to refuse publishing a draft that changed since. Tak… _(parameters: websiteId, leaseToken, version)_
- **`websiteSourceCode_head_restore`** — Copies an earlier version or 'published' into a new head without publishing or rewriting history. Takes the edit lease when no 'leaseToken' is sent. _(parameters: websiteId, to, leaseToken)_
- **`websiteSourceCode_published_unpublish`** — Takes the website offline without changing its draft source or version history. The unchanged head can be published again later. No edit lease is required. _(parameters: websiteId)_
- **`websiteSourceCode_published_rollback`** — Validates and republishes an earlier version as a new head and published version, preserving history. Takes the edit lease when no 'leaseToken' is sent. _(parameters: websiteId, leaseToken, version)_
- **`websitePreview_capture`** — Renders one page of the site in a real browser and returns the image, so you can check layout, spacing, and responsive behaviour that source-level checks cannot see. 'path' is sit… _(parameters: websiteId, path, target, viewport, colorScheme, fullPage)_
- **`cms_schema_snapshot`** — Returns every active collection and field of a website in one call — the full content model. Collections are ordered newest first; fields are grouped by collection in display orde… _(parameters: websiteId)_
- **`cms_collections_create`** — Creates a collection in the website’s CMS. 'slug' uses lowercase letters, digits, and hyphens (max 64 characters, starting with a letter) and must be unique among the website’s ac… _(parameters: websiteId, slug, displayName, description, fields)_
- **`cms_collections_update`** — Updates 'displayName' (1–200 characters), 'description' (up to 2,000 characters; pass 'null' to clear), and/or 'slug' (a rename). A slug change fails with a conflict when another… _(parameters: collectionId, displayName, description, slug)_
- **`cms_collections_delete`** — Soft-deletes the collection, making it and all of its items unreachable through the API; the slug becomes reusable. Refused with a conflict while any reference field in another co… _(parameters: collectionId)_
- **`cms_fields_create`** — Adds a typed field at the end of the collection’s field order. 'key' is lowercase snake_case (max 64 characters), must be unique in the collection, and cannot use the reserved met… _(parameters: key, displayName, description, type, required, isUnique)_
- **`cms_fields_update`** — Updates 'displayName', 'description', 'required', 'isUnique', 'example', and (for 'option' fields only) 'config'; 'type' and 'targetCollectionId' are immutable. Setting 'required:… _(parameters: fieldId, displayName, description, required, isUnique, example)_
- **`cms_fields_delete`** — Permanently deletes the field and its stored values: the key is stripped from every item’s 'data', and reference or asset attachments made through the field are removed. This cann… _(parameters: fieldId)_
- **`cms_items_list`** — Returns the collection’s active items in manual (drag) order by default, 20 per page (max 100); paginate with 'cursor' or with 1-based 'page' offsets, not both. Filter with 'publi… _(parameters: collectionId, cursor, page, limit, depth, published)_
- **`cms_items_get`** — Returns one item, looked up by 'itemId' or by the 'collectionId' + 'slug' pair (provide exactly one of the two). The 'data' object is complete and schema-shaped: every currently-d… _(parameters: itemId, collectionId, slug, depth, published)_
- **`cms_items_backreferences_list`** — Lists active items that reference the target item through a 'reference' or 'multi_reference' field, newest first, with cursor pagination (default 20 per page, maximum 100). Each s… _(parameters: itemId, cursor, limit, depth)_
- **`cms_items_create`** — Creates an item at the end of the collection’s manual order. Scalar values go in 'data' keyed by field key and are validated against the field types — unknown keys are rejected, r… _(parameters: collectionId, slug, publishedAt, publishAt, data, references)_
- **`cms_items_update`** — Patches an item; omitted fields are left untouched. Keys in 'data' are merged into the existing values and validated the same way as on create, while each key provided in 'referen… _(parameters: itemId, slug, data, references, images, files)_
- **`cms_items_setPublished`** — Use exactly one publication action: 'published: true' publishes immediately and sets 'publishedAt' to now; a future 'publishAt' schedules a draft for automatic publication; 'publi… _(parameters: itemId, published, publishAt)_
- **`cms_items_delete`** — Soft-deletes the item: it disappears from reads, list results, and backreferences, and fields referencing it read 'null' (single reference) or shrink (multi-reference). Its slug b… _(parameters: itemId)_
- **`cms_items_restore`** — Restores a soft-deleted item, making it readable again and re-exposing references to and from it. Returns 404 when the item is not currently deleted. _(parameters: itemId)_
- **`websiteAnalytics_query_get`** — Returns aggregate engagement totals — page views, distinct visitors, visits, bounces, and total time in seconds — for a date range, optionally broken down by one dimension. Use it… _(parameters: websiteId, startAt, endAt, path, referrer, title)_
- **`websiteAnalytics_timeseries_get`** — Returns one traffic time series bucketed by 'unit' ('year', 'month', 'day', 'hour', or 'minute'). 'series' selects which: 'pageviews' returns parallel 'pageviews' and 'sessions' a… _(parameters: websiteId, startAt, endAt, path, referrer, title)_
- **`websiteAnalytics_realtime_get`** — Returns a compact snapshot of traffic over Umami's trailing 30-minute realtime window: total page views, distinct visitors, tracked custom events, and distinct countries, plus the… _(parameters: websiteId)_
- **`websiteForms_list`** — Returns every form with inbox and spam counts, whether the published site still references it, who it notifies, the number of inbox submissions since the caller last opened the Fo… _(parameters: websiteId)_
- **`websiteForms_submissions_list`** — Returns submissions newest first as a cursor-paginated page. Filter by 'form' name, 'status' ('inbox' by default, or 'spam'), and 'source' ('published' for real visitors, 'draft'… _(parameters: form, status, source, websiteId, cursor, limit)_
- **`websiteForms_submissions_get`** — Returns one submission with its fields in submitted order. _(parameters: websiteId, submissionId)_
- **`websiteForms_submissions_setStatus`** — Moves a submission between the inbox and the spam folder. Restoring to 'inbox' sends the notification email if it was never sent. Spam is deleted automatically after 30 days. _(parameters: websiteId, submissionId, status)_
- **`websiteForms_submissions_delete`** — Permanently deletes one submission. _(parameters: websiteId, submissionId)_
- **`websiteForms_recipients_add`** — Adds an email address to one form, identified by its name from the action path. New forms notify the organization owners until changed. Organization members and website editors re… _(parameters: websiteId, formName, email)_
- **`websiteForms_recipients_remove`** — Stops emailing an address for one form. A form with no recipients emails nobody; its submissions still reach the Forms inbox. _(parameters: websiteId, formName, recipientId)_
- **`websiteForms_recipients_resend`** — Issues a fresh confirmation link to a pending, failing, or stopped address. _(parameters: websiteId, recipientId)_
- **`docs_search`** — Search the Cactal product documentation: concepts, guides, agent workflows, platform limits, and the API reference. Returns matching Markdown excerpts with page paths; read a full… _(parameters: query)_
- **`docs_read`** — Read one Cactal documentation page as Markdown. Pass a page path from docs search results, for example "concepts/publishing" or "agents/agent-safe-publishing". Pass "llms.txt" for… _(parameters: path)_
- **`skills_read`** — Read the matching Cactal skill before acting: source-editing-workflow before source edits, design-direction for design, copywriting for words. Required skills are included. - anal… _(parameters: skillId)_
- **`profile_get`** — Returns who this credential acts for (a stable 'id', plus 'name' and 'email' for a person) and the organizations it can work in. An organization lists 'websites' only when access…
- **`webResearch_screenshot`** — Renders an external public page in a real browser and returns the image, to study a reference site or the user's existing site: its layout, hierarchy, density, and feel. Consent b… _(parameters: websiteId, url, viewport, selector, padding, clip)_
- **`webResearch_probe`** — Renders a public page in a browser and runs measurement presets or a custom script in it, for the exact colors, type, spacing, radii, shadows, font files, images, and head metadat… _(parameters: url, presets, script, websiteId)_
- **`webResearch_profile`** — Reads one to ten of a business's own pages (its site, Google listing, Instagram, Facebook, Yelp, or any other profile) into one Markdown profile each (name, address, phone, links,… _(parameters: websiteId, urls, objective, images)_
- **`webResearch_viewImage`** — Fetches 1 to 48 public image URLs and returns the pictures; nothing is stored. Up to 4 come back full size (an SVG also returns the start of its source); more come back on contact… _(parameters: websiteId, urls)_
- **`websiteSecrets_list`** — Returns the names of a website's secrets with when each was created and last changed. Values are write-only and never returned. Server functions read secrets from 'env' by name. _(parameters: websiteId)_
- **`websiteFunctions_runs_list`** — Lists a website's server function runs, newest first, for 'http' calls and form submissions alike. Secret values are redacted. Runs are kept for 30 days. _(parameters: websiteId, name, cursor, limit)_
- **`websiteFunctions_runs_get`** — Returns one run with its input, output, console output and outgoing requests. Secret values, in plain and common encoded forms, are redacted. _(parameters: websiteId, runId)_
- **`websiteFunctions_invoke`** — Runs one of the draft site's 'http' server functions with the website's secrets and returns its result, exactly as page code on the draft would receive it. It makes the function's… _(parameters: websiteId, name, payload)_

## Maintenance & supply-chain — the risk Cactal's static scan can't see

A prompt-injection scan reads Cactal's advertised tool metadata at one moment. It cannot tell you the project behind `api.cactal.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.cactal.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Cactal yourself, or claim its badge {#claim}

Re-run this exact Cactal check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.cactal.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.cactal.ai/v1/mcp&directory=true"
```

For the itemized findings on Cactal — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.cactal.ai/v1/mcp"}`. If you
run `api.cactal.ai`, [claim a measured verified-owner badge for Cactal free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.cactal.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.cactal.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.cactal.ai/v1/mcp)
```

Keeping the Cactal badge green as its tools change — six-hourly re-scans of `api.cactal.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.cactal.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

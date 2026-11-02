---
title: "Is the BAMF.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BAMF.ai MCP server (https://mcp.bamf.ai), run 2026-11-02: advertises bamf.list_site_projects, bamf.create_site_project, bamf.get_site_artifact; 149 tools scanned, injection verdict 'clear', 1 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# BAMF.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.bamf.ai`
**Scanned:** 2026-11-02 · **Tools advertised:** 149 · **Injection verdict:** `clear` · **Directory:** 1 likely Claude Directory reject(s)

LinkedIn and X content, scheduling, analytics and outreach agent for founders, via your BAMF login.

When an agent connects BAMF.ai, the model reads all 149 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.bamf.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on BAMF.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 149 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 likely reject(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **53 of 149 advertised tool(s) name a state-changing action** (`bamf.create_site_project`, `bamf.manage_site`, `bamf.publish_site`, `bamf.list_scheduled_posts`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 149 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BAMF.ai server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BAMF.ai server advertises

These are the 149 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`bamf.list_site_projects`** — List client projects available as destinations for site HTML artifacts. Requires sites:read. _(parameters: workspace_id, params)_
- **`bamf.create_site_project`** — Create a client project destination for site artifacts. Requires sites:write; supply title and agent_lanes in params. _(parameters: workspace_id, params, idempotency_key)_
- **`bamf.get_site_artifact`** — Read exact persisted client project HTML artifact/version including content and provenance. Requires sites:read; params needs artifact_id and optional version_id. _(parameters: workspace_id, params)_
- **`bamf.save_site_artifact`** — Persist complete agent-authored HTML as an immutable client project artifact version. Requires sites:write. params needs project_id,title,artifact_format=html,content,provenance {… _(parameters: workspace_id, params, idempotency_key)_
- **`bamf.list_sites`** — List hosted sites in an authorized managed client workspace. Requires sites:read; creator-scoped keys and unbound native workspaces are unsupported. _(parameters: workspace_id)_
- **`bamf.list_site_workspaces`** — Discover authorized managed client workspaces for hosted site operations. Requires sites:read. Returns IDs and names only.
- **`bamf.get_site`** — Read site sessions, previews, version source/diffs, access, Site tool capabilities, merch reviews, print templates, and connection history. For get_site_builds, params may include… _(parameters: workspace_id, action, params)_
- **`bamf.manage_site`** — Create or revise site sessions, context, templates and preview versions; save a site-scoped merch review; rename or archive a site; retry or cancel a build; or attach its analytic… _(parameters: workspace_id, action, params, idempotency_key)_
- **`bamf.publish_site`** — Request or resolve exact publish approval, change access, or execute an approved version operation. Requires sites:publish; preserve approval and version bindings. Existing author… _(parameters: workspace_id, action, params, idempotency_key)_
- **`bamf.get_agent_capabilities`** — Return the current BAMF app/Stack/API/MCP workflow capability map, safety contract, skill routing, and preferred tools. Use this before planning a BAMF Bot workflow.
- **`bamf.search_intelligence`** — Search the authenticated creator's indexed media, bookmarks, and documents. Returns source-linked evidence and citations; only reads existing intelligence projections. _(parameters: author_id, query, limit)_
- **`bamf.get_intelligence_resource_context`** — Get source-linked evidence, facts, and relationships for one intelligence resource the authenticated creator can access. _(parameters: resource_id)_
- **`bamf.get_intelligence_processing_status`** — Read recent intelligence processing jobs for the authenticated creator, optionally limited to one resource. _(parameters: resource_id, limit)_
- **`bamf.route_agent_workflow`** — Deterministically route a natural-language BAMF request to the recommended app workflow, BAMF Stack skill, REST endpoints, MCP tools, scopes, and approval policy. _(parameters: request, intent, workflow_id, visual_type, post_id, current_post_id)_
- **`bamf.get_agent_identity`** — Return the authenticated BAMF actor identity through the canonical server-resolved authority path.
- **`bamf.get_onboarding`** — Start or resume BAMF Bot setup for the signed-in person: the same ordered steps, progress and rewards as onboarding on bamf.ai. Returns each step with its status, how to run it he… _(parameters: creator_id)_
- **`bamf.advance_onboarding`** — Finish or skip one BAMF Bot setup step and save it on the same record as the web onboarding, so the person can continue on bamf.ai or here. Optionally saves their answer for the s… _(parameters: creator_id, step, outcome, answer, profile)_
- **`bamf.get_profile`** — Return the profile represented by this request's authenticated credentials. The opaque id is unique within this app and remains unchanged across token refresh, reconnection, and d…
- **`bamf.get_agent_creator_context`** — Return a versioned, positive-projection creator context for the server-authorized creator space. _(parameters: creator_id, sections, limit)_
- **`bamf.list_agent_media`** — Return versioned, positive-projection media assets for server-authorized creator spaces. _(parameters: creator_id, limit)_
- **`bamf.list_agent_brand_kits`** — Return versioned, positive-projection brand packs and brand-kit projects for server-authorized creator spaces. _(parameters: creator_id, limit)_
- **`bamf.list_creator_follows`** — List creator profiles followed by a workspace. _(parameters: workspace_id, author_id)_
- **`bamf.follow_creator`** — Follow a creator profile in a workspace. _(parameters: workspace_id, author_id, profile, platform, idempotency_key)_
- **`bamf.unfollow_creator`** — Unfollow a creator profile in a workspace. _(parameters: workspace_id, author_id, creator_profile_id, idempotency_key)_
- **`bamf.list_creator_spaces`** — List creator spaces available to the authenticated BAMF API key. Defaults to a compact paginated discovery projection; request detail=full only when the complete public creator re… _(parameters: detail, limit, cursor, offset)_
- **`bamf.get_creator_context`** — Return the comprehensive creator context bundle for one creator space: knowledge docs, voice profile, AI analyses, integrations, interviews, LinkedIn profile/posts/analytics, webs… _(parameters: creator_id, sections, limit)_
- **`bamf.list_scheduled_posts`** — List upcoming scheduled posts with preview-ready content, media, carousel slides, and first comments. _(parameters: creator_id, limit)_
- **`bamf.list_posts`** — List a creator's posts by lifecycle status (draft, in_review, approved, scheduled, published, failed, archived, idea), newest first, with preview-ready content, media and first co… _(parameters: creator_id, status, limit)_
- **`bamf.preview_post`** — Return a rich preview for one post, including media and first comment. _(parameters: post_id)_
- **`bamf.create_post_draft`** — Create a draft post for a creator space after the user approves exact content. Defaults to LinkedIn; pass platform=x for X drafts. Supports first comments and media fields. _(parameters: creator_id, content, topic, platform, post_type, first_comment)_
- **`bamf.message_client`** — Relay a message to a client through the agency communication gateway (their WhatsApp / iMessage and email). Agency staff keys only. TWO-STEP: confirm=false (default) returns the p… _(parameters: client, message, link, attribution, confirm)_
- **`bamf.invite_client_to_space`** — Text a client an invite to their BAMF space from the BAMF line (+1 213-853-2189). Agency staff keys only. Finds the client's mobile from their Notion space, then GoHighLevel; asks… _(parameters: client, phone, text, confirm)_
- **`bamf.update_client_contact`** — Update a client's contact info (phone, email, company) in all three places at once: their BAMF client record, their Notion client page property, and the agency's GoHighLevel conta… _(parameters: client, phone, email, company, confirm)_
- **`bamf.send_linkedin_reauth_link`** — Send a client a one-tap LinkedIn reconnect link over their preferred channels (BAMF delivers to EVERY resolved channel, not just the first). With no channels given, uses the user'… _(parameters: client, channels, confirm)_
- **`bamf.check_linkedin_session`** — Check a client's LinkedIn login status in BAMF Connect and Multilogin. Agency staff keys only. Read-only. _(parameters: client)_
- **`bamf.reconnect_linkedin`** — Start a cloud-browser LinkedIn reconnect for a client: opens the client's own scoped BAMF Cloud browser on the LinkedIn sign-in so THEY log in themselves. Credentials are never ty… _(parameters: client, confirm)_
- **`bamf.open_cloud_computer`** — Open a page on the user's own BAMF Cloud computer (a persistent cloud desktop with a full-screen browser) so they can watch the agent use it, live, in their BAMF chat. Runs inside… _(parameters: url)_
- **`bamf.request_login`** — Ask the user to sign in to a site on their BAMF Cloud computer. The user types their own password and two-step code in the live view; BAMF never types credentials. Returns the exa… _(parameters: site)_
- **`bamf.run_design_session`** — Make an infographic PNG (1080x1350) or a 15s motion clip MP4 (1080x1920, Remotion) from a post, built by the user's OWN connected Claude Code (or Codex) on their BAMF Cloud comput… _(parameters: kind, brief, post_id, worker)_
- **`bamf.plugins.list`** — List the plugins the user connected in BAMF for a workspace (GitHub, Gmail, Google Calendar, and remote MCP providers such as Fireflies), each with its status (connected, needs_re… _(parameters: workspace_id)_
- **`bamf.plugins.call`** — Run a tool on one of the user's connected plugins, as the user, server-side: GitHub (github.list_repos, github.read_repo), Gmail (gmail.search), Google Calendar (calendar.upcoming… _(parameters: workspace_id, plugin, tool, args)_
- **`bamf.ensure_proxy`** — Ensure a client's cloud-browser profile has a residential proxy (attaches one when missing, no-op when healthy). BAMF platform admin only. TWO-STEP: confirm=false (default) return… _(parameters: client, country, region, city, confirm)_
- **`bamf.manage_proxy`** — Raw cloud-proxy operations for a client's cloud-browser profile: rotate (fresh IP, same region), relocate (new country/region), or disable. BAMF platform admin only; never agency-… _(parameters: client, action, country, region, city, confirm)_
- **`bamf.create_x_post_draft`** — Create an X-native draft after exact approval. Use for single X posts, threads, image posts, long-form X drafts, and resource/DM campaign drafts; this does not publish. _(parameters: creator_id, content, topic, x_format, thread_items, media_plan)_
- **`bamf.generate_post`** — Generate post concepts and a reviewable draft candidate from BAMF unified creator context. Defaults to LinkedIn; pass platform=x for X-native hooks, threads, and growth-focused dr… _(parameters: creator_id, brief, topic, post_type, platform, tone)_
- **`bamf.generate_x_post`** — Generate X-native single posts, threads, image posts, resource/auto-DM posts, long-form X posts, replies, quotes, or bookmark remixes from creator context, X bookmarks, and saved… _(parameters: creator_id, brief, x_format, engagement_goal, thread_length, source_material)_
- **`bamf.edit_post`** — Patch an existing draft or scheduled post after the user approves exact edits. Supports first comments and media fields. _(parameters: post_id, content, edit_instruction, topic, post_type, first_comment)_
- **`bamf.generate_post_edit`** — Generate a reviewable edit proposal, quality audit, deterministic quality comparison, and PATCH payload for a draft, scheduled post, or rough pasted draft. Use edit_mode=full_rewr… _(parameters: creator_id, post_id, current_content, source_material, current_first_comment, instructions)_
- **`bamf.edit_carousel_slide`** — Edit ONE slide of an existing carousel post in place, the same as asking the in-app BAMF Bot to change one slide. Pass title/body/cta/content to change the slide copy, image_instr… _(parameters: post_id, slide, title, body, cta, content)_
- **`bamf.edit_post_image`** — Edit the post's CURRENT image in place (same path as the in-app chat image edit). Default keeps everything else the same; brand marks are left out unless the instruction asks for… _(parameters: post_id, instruction, keep_everything_else, reference_version)_
- **`bamf.list_post_versions`** — List every saved version of a post: copy versions (post history), the post image_history, and each carousel slide's image and text versions. Use the ids/indexes with bamf.revert_p… _(parameters: post_id)_
- **`bamf.revert_post_version`** — Restore a saved version on the same post: kind=text (version_id), image (index into image_history), slide_image (slide + image_url; prompt carousels step back one version), or sli… _(parameters: post_id, kind, version_id, index, slide, image_url)_
- **`bamf.delete_post`** — Delete a normal BAMF content post. _(parameters: post_id)_
- **`bamf.schedule_post`** — Schedule a post for a future time. Creator-scoped API keys may use this. Optionally arm engagement boost so authentic first-hour engagement fires automatically when the post goes… _(parameters: post_id, scheduled_for, boost)_
- **`bamf.boost_post`** — Apply engagement boost to a post. Published posts boost immediately; scheduled posts are armed for publish time. Requires the posts:boost scope. _(parameters: post_id, approved, tier, engagement_type)_
- **`bamf.list_boost_tiers`** — List available engagement boost tiers (basic/power/mega) with reach and token cost.
- **`bamf.list_boost_groups`** — List the BAMF-labeled engagement groups (LinkedIn) a post can be boosted into, with name, category, region, language, industry tags, and member count. Optionally filter to a creat… _(parameters: author_id)_
- **`bamf.estimate_boost`** — Estimate the projected first-wave reach (people, reactions, comments) for boosting a creator's post. _(parameters: author_id, tier)_
- **`bamf.unschedule_post`** — Unschedule a post. Creator-scoped API keys may use this. _(parameters: post_id)_
- **`bamf.pause_scheduled_post`** — Pause auto-publishing while keeping the scheduled time visible in BAMF. _(parameters: post_id)_
- **`bamf.resume_scheduled_post`** — Resume a paused scheduled post using its stored scheduled time. _(parameters: post_id)_
- **`bamf.publish_post_now`** — Publish a post immediately. User-scoped keys only; creator-scoped keys receive a helpful 403. _(parameters: post_id)_
- **`bamf.list_ideas`** — List content ideas for a creator space. _(parameters: creator_id, status, search, limit)_
- **`bamf.generate_ideas`** — Generate evidence-backed creator post ideas with source labels, why-now context, creator fit, and confidence. External research is adaptive by default; private X bookmarks are opt… _(parameters: creator_id, query, platforms, formats, include_x_bookmarks, x_bookmark_folder_ids)_
- **`bamf.create_idea`** — Create a content idea for a creator space. _(parameters: creator_id, title, content, tags)_
- **`bamf.create_post_request`** — Create a client post request: the BAMF team drafts it into the client's Notion content approval board (status "Post request") and is pinged in the client's Slack channel per agenc… _(parameters: creator_id, idea_text, brief, links)_
- **`bamf.read_team_channel`** — Read the latest messages (default 20, max 50) from the shared Slack channel pinned in your own client space, as plain text with author and time. Requires creator_spaces:read and m… _(parameters: workspace_id, limit)_
- **`bamf.message_team_channel`** — Post a message to your agency team in the shared Slack channel pinned in your own client space, sent by the BAMF Slack bot and attributed to you (e.g. "Jonathan (via Muse)"). Requ… _(parameters: workspace_id, text, confirm, idempotency_key)_
- **`bamf.list_client_channels`** — List the client's shared Slack channels this creator space can post into (client channels only; agency-internal channels are never listed). Requires creator_spaces:read. _(parameters: creator_id)_
- **`bamf.share_to_channel`** — Post a message into the client's own shared Slack channel, attributed to the calling agent. Requires channels:write. Only client channels attached to this creator's workspace are… _(parameters: creator_id, channel_id, text, link, dry_run, idempotency_key)_
- **`bamf.publish_notion_status_block`** — Refresh an agency status visual (client content pipeline, approval queue, or client interview progress) inside a Notion page. The snapshot is refreshed in place from BAMF data, it… _(parameters: kind, workspace_id, notion_page_id, block_id, dry_run)_
- **`bamf.list_client_approvals`** — List content approval requests for the workspaces this connection can reach. Requires client_approvals:read. _(parameters: creator_id, workspace_id, status, limit)_
- **`bamf.get_client_approval`** — Read one content approval request with its post and comments. Requires client_approvals:read. _(parameters: approval_id)_
- **`bamf.decide_client_approval`** — Record a client decision on an approval request: approved, changes_requested (comment required) or rejected; team members may only resubmit as pending. Requires client_approvals:w… _(parameters: approval_id, status, comment, idempotency_key)_
- **`bamf.list_post_requests`** — List a client creator's recent post requests with their pipeline state and Notion link. _(parameters: creator_id, limit)_
- **`bamf.list_interviews`** — List creator interviews from transcript knowledge documents and app-native chat interview sessions. _(parameters: creator_id, limit)_
- **`bamf.create_interview_link`** — Create a secure hosted content-interview link for a creator. It returns ready-to-share copy for BAMF.ai, Slack, WhatsApp, or another connected conversation, but never starts an in… _(parameters: creator_id, label, expires_days, max_uses, contact_metadata)_
- **`bamf.run_research`** — Run an async BAMF research brief job over a topic, source URLs, and/or notes. Use it when current/recent facts, benchmark data, trends, or source-backed visual claims would streng… _(parameters: creator_id, query, topic, source_urls, notes, desired_outputs)_
- **`bamf.run_ai_roundup`** — Run the AI roundup series for a creator: ingest curated source pages (source_posts), extract news stories, verify each against a primary source (official blog, GitHub repo, announ… _(parameters: creator_id, workspace_id, cadence, series, eval_run, dry_run)_
- **`bamf.search_knowledge`** — Search creator knowledge documents. _(parameters: creator_id, search, limit)_
- **`bamf.process_knowledge`** — Process a knowledge document or raw content into summaries, durable facts, post ideas, and interview insights. This creates an async job and does not create ideas automatically. _(parameters: creator_id, document_id, title, content, tags, type)_
- **`bamf.create_interview_transcript`** — Save an interview transcript as a BAMF knowledge document and optionally queue interview-specific knowledge processing. _(parameters: creator_id, title, transcript, interviewee, interviewer, tags)_
- **`bamf.add_knowledge_doc`** — Add a knowledge or memory document to a creator space. API documentation: https://bamf.ai/docs/mcp/overview _(parameters: creator_id, path, title, content, tags)_
- **`bamf.save_agent_artifact`** — Save an approved Markdown report, analysis, research result, or dashboard summary as durable BAMF creator knowledge with Claude, ChatGPT, Codex, or BAMF session provenance. Show t… _(parameters: creator_id, title, content, path, tags, source_provider)_
- **`bamf.add_memory`** — Add a short durable memory to the creator's knowledge base. _(parameters: creator_id, memory, title)_
- **`bamf.get_brain`** — Read your personal or company brain as Brain format v1 files. Returns the manifest plus BRAIN.md and the brain markdown files, with secrets redacted. Company brain requires an own… _(parameters: creator_id, kind)_
- **`bamf.propose_brain_update`** — Propose a change to a brain; the owner approves it in BAMF. This only queues a proposal and never edits the brain. _(parameters: creator_id, kind, target, summary, body)_
- **`bamf.list_profile_packages`** — List saved Profile Studio packages for a creator. Returns safe package content and selection state, never raw capture provenance or provider credentials. _(parameters: creator_id, include_archived, limit)_
- **`bamf.get_profile_package`** — Read one saved Profile Studio package. This is BAMF package data only, not a live LinkedIn profile read or application. _(parameters: profile_package_id)_
- **`bamf.get_profile_capture_status`** — Read safe Original/current profile capture status for a creator. It returns timestamps and verification state, never capture provenance, browser runs, or raw provider payloads. _(parameters: creator_id)_
- **`bamf.create_profile_package`** — Save a new versioned Profile Studio package after exact user approval. This reversible BAMF record write does not apply changes or publish anything to LinkedIn. _(parameters: creator_id, title, notes, thumbnail_url, snapshot)_
- **`bamf.update_profile_package`** — Update a saved Profile Studio package after exact approval. The tool first fetches the exact ETag, saves with a stable idempotency key, and validates the returned receipt. This re… _(parameters: profile_package_id, idempotency_key, title, notes, thumbnail_url, is_archived)_
- **`bamf.duplicate_profile_package`** — Duplicate a saved Profile Studio package as a draft variation after exact approval. This is reversible and never applies the variation to LinkedIn. _(parameters: profile_package_id, title)_
- **`bamf.select_profile_package`** — Mark a saved Profile Studio package selected after exact approval. Selection is reversible BAMF metadata, not live LinkedIn application or publishing. _(parameters: profile_package_id)_
- **`bamf.archive_profile_package`** — Archive a saved Profile Studio package after exact approval. Archive is reversible through update_profile_package and never changes LinkedIn. _(parameters: profile_package_id)_
- **`bamf.list_media`** — List media assets for a creator space. _(parameters: creator_id, limit)_
- **`bamf.list_media_folders`** — List Media Library folders for a creator space. _(parameters: creator_id)_
- **`bamf.list_integrations`** — List connected creator integrations and per-author integration settings without exposing tokens, cookies, or secrets. _(parameters: creator_id)_
- **`bamf.list_brand_kits`** — List creator brand packs and generated brand kit projects/pages. _(parameters: creator_id, limit)_
- **`bamf.list_design_references`** — List curated design references (non-rejected) with name, category, tags, fonts, palette, and source attribution. Never returns raw HTML. Use the id or slug with bamf.instantiate_d… _(parameters: category, query, platform, post_type, include_guide, limit)_
- **`bamf.instantiate_design_reference`** — Return a design reference's template markdown with BAMF slots (name, logo, palette, fonts) filled from the creator's brand kit. Read-only; provide reference_id or slug plus brand_… _(parameters: reference_id, slug, brand_kit_project_id, brand_pack_id, creator_id)_
- **`bamf.update_brand_kit_references`** — Attach approved HTTPS style references to a creator-scoped BAMF brand kit. Use append to preserve current references or replace only when the user explicitly asks to replace that… _(parameters: creator_id, brand_pack_id, pack_type, mode, asset_role, reference_urls)_
- **`bamf.add_media`** — Register an external media URL as a BAMF media asset. API documentation: https://bamf.ai/docs/mcp/overview _(parameters: creator_id, url, visual_type)_
- **`bamf.create_media_folder`** — Create a Media Library folder for a creator space after user approval. _(parameters: creator_id, name, workspace_id)_
- **`bamf.move_media_items`** — Move selected media assets into a Media Library folder, or clear the folder with folder_id null. _(parameters: item_ids, folder_id)_
- **`bamf.generate_image`** — Create a BAMF image generation job. Supports quote cards, creator portraits, infographics, animated infographics (GIF + MP4 via format=motion_infographic), and package-bound Linke… _(parameters: creator_id, prompt, visual_type, engine, size_preset, format)_
- **`bamf.generate_carousel`** — Generate carousel slide images, package them as a LinkedIn-ready PDF, and optionally attach it to a post. Pass reference_bindings to preserve official identity/product/brand truth… _(parameters: creator_id, title, slides, size, quality, referenceImageUrls)_
- **`bamf.generate_video`** — Create a paid Higgsfield Seedance 2.5 video job. Pass image_url or an official likeness reference binding to use image-to-video and preserve the creator shown in the approved sour… _(parameters: creator_id, prompt, image_url, reference_bindings, duration, resolution)_
- **`bamf.generate_carousel_pdf`** — Convert existing slide image URLs into a LinkedIn-ready carousel PDF and optionally attach it to a post. _(parameters: creator_id, title, slide_image_urls, post_id)_
- **`bamf.list_saved_people_lists`** — List the current bounded catalog of saved master-contact lists, supported CRM system segments, and receipt-verified reviewed CRM lead lists in your signed-in workspace. Unmarked m… _(parameters: workspace_id)_
- **`bamf.read_saved_people_list`** — Read one server-authorized native people list with explicit master_contacts or crm_leads domain. Master-contact IDs are verified by the scoped native reader; CRM system-segment an… _(parameters: workspace_id, list_id, member_kind, limit, offset)_
- **`bamf.query_people`** — Read people in your authorized client workspace by activity signals, ICP fit, channels, stage, lane, tags, and recency. Requires a signed-in BAMF user session and CRM read access;… _(parameters: workspace_id, params)_
- **`bamf.search_crm_leads`** — Search existing CRM leads in your authorized client workspace by name, company, title, headline, campaign, or connection status. Requires a signed-in BAMF user session and CRM rea… _(parameters: workspace_id, params)_
- **`bamf.start_outreach_discovery`** — Start a tenant- and principal-scoped, provider-read-only outreach discovery session. This discovers candidates only; it never creates or sends a campaign. _(parameters: workspace_id, session_id, principal_context_ref_id, gateway_run_id, provider, provider_account_id)_
- **`bamf.resume_outreach_discovery`** — Resume a scoped outreach discovery session from server-owned coverage. Caller-supplied provider cursors or organization IDs are not accepted as authority. _(parameters: discovery_session_id, workspace_id, session_id, principal_context_ref_id, gateway_run_id, provider)_
- **`bamf.get_outreach_discovery_status`** — Read the status of one tenant- and principal-scoped outreach discovery session. This never mutates a provider. _(parameters: discovery_session_id, workspace_id, session_id, principal_context_ref_id, gateway_run_id, provider)_
- **`bamf.cancel_outreach_discovery`** — Request cancellation of one scoped outreach discovery session. This cancels discovery only and never mutates a provider campaign. _(parameters: discovery_session_id, workspace_id, session_id, principal_context_ref_id, gateway_run_id, provider)_
- **`bamf.save_outreach_discovery`** — Explicitly save the current non-excluded candidates from a completed or partial discovery as a durable list snapshot. This does not create, enroll, or send a campaign. _(parameters: discovery_session_id, workspace_id, session_id, principal_context_ref_id, gateway_run_id, provider)_
- **`bamf.prepare_outreach_campaign`** — Prepare a reviewable outreach draft from an owned native master-contact or CRM-lead saved list, or prepare discovery campaign copy against an exact durable list revision and conne… _(parameters: workspace_id, session_id, principal_context_ref_id, idempotency_key, native_saved_list, binding)_
- **`bamf.approve_outreach_campaign`** — Approve the exact prepared campaign fingerprint until an explicit expiry. Approval alone never queues or sends. _(parameters: campaign_id, workspace_id, session_id, principal_context_ref_id, approval_ref, action_fingerprint)_
- **`bamf.queue_outreach_campaign`** — Queue an approved exact campaign after its list, connector, fingerprint, and approval remain current. This state transition does not send. _(parameters: campaign_id, workspace_id, session_id, principal_context_ref_id, idempotency_key)_
- **`bamf.cancel_outreach_campaign`** — Cancel a prepared, approved, or queued campaign without invoking a provider. _(parameters: campaign_id, workspace_id, session_id, principal_context_ref_id, idempotency_key)_
- **`bamf.get_outreach_campaign_status`** — Read redacted state, canonical workspace/list-version/connector bindings, readiness evidence, admission evidence, and any matching provider-confirmation receipt for one tenant- an… _(parameters: campaign_id, workspace_id, session_id, principal_context_ref_id)_
- **`bamf.admit_outreach_campaign_execution`** — Admit the exact queued campaign into executing state after rechecking current list, connector, fingerprint, and approval, returning canonical binding and admission evidence. This… _(parameters: campaign_id, workspace_id, session_id, principal_context_ref_id, action_fingerprint, idempotency_key)_
- **`bamf.prepare_exact_thread_reply`** — Evaluate and persist a reply or follow-up against an exact provider thread/message receipt, current approval, suppression state, and evidence-backed identity. Returns prepared or… _(parameters: workspace_id, idempotency_key, intent)_
- **`bamf.prepare_outreach_growth_delivery`** — Persist a preparation-only resource giveaway, newsletter, and booking handoff for one exact eligible comment, recipient, account, thread, approval, and artifact revisions. Never c… _(parameters: schema_version, tenant_id, workspace_id, principal_context_ref_id, idempotency_key, recipient)_
- **`bamf.list_jobs`** — List recent BAMF async jobs for a creator space. _(parameters: creator_id, status, job_type, limit)_
- **`bamf.get_job`** — Read one BAMF async job status and output. _(parameters: job_id)_
- **`bamf.get_run_status`** — Live named status of an agent run or API job: the run, its sub-agents, tool calls, status, partial result, cost, and timing. Poll with after_sequence set to the last seen sequence… _(parameters: run_id, after_sequence)_
- **`bamf.cancel_job`** — Cancel a queued or running BAMF async job. _(parameters: job_id)_
- **`bamf.get_analytics_summary`** — Get LinkedIn Late-authoritative analytics totals for a creator space. Pass platform=x or use bamf.get_x_analytics_summary for X metrics. _(parameters: creator_id, platform)_
- **`bamf.get_creator_analytics_report`** — Build a native, interactive LinkedIn analytics report across every creator space the signed-in BAMF account can access. Use for creator portfolios, leaderboards, 30/60/90-day comp… _(parameters: days)_
- **`bamf.get_funnel_mix`** — Get a creator's TOF/MOF/BOF funnel mix from tagged LinkedIn posts: per-stage counts and performance, per-format stats, the resolved goal target (audience_growth 60/30/10, balanced… _(parameters: creator_id, days)_
- **`bamf.find_funnel_examples`** — Find top AI-tagged example posts for a funnel stage (and optional format) to model a draft on: inspiration library (by likes), post templates, or the creator's own posts (by impre… _(parameters: stage, format, source, creator_id, limit)_
- **`bamf.find_competitor_ads`** — List the longest-running competitor ads (Meta, LinkedIn, TikTok) already tracked in the creator's workspace: advertiser, headline, copy, format, days running. Longest-running is t… _(parameters: platform, q, creator_id, limit)_
- **`bamf.suggest_ad_keywords`** — Related keywords with monthly search volume, CPC, and competition for a topic, to pick ad targeting. Cached 14 days; a fresh lookup costs about one cent and is capped per workspac… _(parameters: keyword, country, creator_id)_
- **`bamf.list_linkedin_posts`** — List discovered LinkedIn-native posts for a creator with Late-authoritative official_* performance fields when available. _(parameters: creator_id, limit)_
- **`bamf.get_x_analytics_summary`** — Get saved X analytics totals, top posts, and latest follower/profile snapshot for a creator space. _(parameters: creator_id)_
- **`bamf.list_x_posts`** — List saved X post analytics rows for a creator, including impressions, likes, replies, reposts, quotes, bookmarks, clicks, engagement rate, and post URLs when available. _(parameters: creator_id, limit)_
- **`bamf.list_x_bookmarks`** — List synced private X bookmarks and folders for a creator so agents can generate ideas, bookmark remixes, quote drafts, replies, and resource posts from saved inspiration. _(parameters: creator_id, limit, status, folder_id, folder_name, search)_
- **`bamf.sync_x_analytics`** — Start an explicit X analytics sync for a creator after user approval. Cron normally keeps this fresh, so use only when the user asks to refresh X analytics now. _(parameters: creator_id, native_pages, native_limit)_
- **`bamf.list_ai_analyses`** — List saved AI analysis reports for a creator profile and LinkedIn analytics performance. _(parameters: creator_id, limit)_
- **`bamf.create_video_project`** — Create a Video Studio project (viral_repurpose or talking_head) and return the artifact the BAMF work pane opens. _(parameters: creator_id, title, template, aspect_ratio, source_url, source_asset_id)_
- **`bamf.generate_video_script`** — Read the video script brief for a project, or save the approved script, burned-in caption, and post copy back onto it. _(parameters: video_project_id, script, caption, post_body)_
- **`bamf.narrate_video_project`** — Narrate a video project with the creator's own ElevenLabs voice. Requires an authenticated BAMF user session. _(parameters: video_project_id, text, voice_id)_
- **`bamf.transcribe_video_captions`** — Produce or persist word-level burned-in captions for a video project via Whisper. Requires an authenticated BAMF user session when transcribing. _(parameters: video_project_id, captions)_
- **`bamf.schedule_video_post`** — Schedule or publish an exported video project to LinkedIn, X, Instagram Reels, YouTube Shorts, and TikTok. Requires exact user approval of the video, copy, and platform plan. _(parameters: video_project_id, content, title, platforms, video_url, thumbnail_url)_
- **`bamf.get_video_analytics_summary`** — Read the video analytics rollup (Reels/Shorts/TikTok views, watch-through, saves) that sync-video-analytics maintains. _(parameters: creator_id, platforms)_
- **`bamf.create_job`** — Create an async BAMF generation/research job. Prefer typed tools such as generate_post, run_research, generate_image, and generate_carousel_pdf. _(parameters: creator_id, job_type, input)_

## Maintenance & supply-chain — the risk BAMF.ai's static scan can't see

A prompt-injection scan reads BAMF.ai's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.bamf.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.bamf.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BAMF.ai yourself, or claim its badge {#claim}

Re-run this exact BAMF.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.bamf.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.bamf.ai&directory=true"
```

For the itemized findings on BAMF.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.bamf.ai"}`. If you
run `mcp.bamf.ai`, [claim a measured verified-owner badge for BAMF.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.bamf.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.bamf.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.bamf.ai)
```

Keeping the BAMF.ai badge green as its tools change — six-hourly re-scans of `mcp.bamf.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.bamf.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

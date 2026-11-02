---
title: "Is the Circleback MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Circleback MCP server (https://circleback.ai/api/mcp), run 2026-11-02: advertises SearchMeetings, SearchTranscripts, GetTranscriptsForMeetings; 28 tools scanned, injection verdict 'clear', 28 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Circleback MCP server — security & directory-readiness scorecard

**Server:** `https://circleback.ai/api/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 28 · **Injection verdict:** `clear` · **Directory:** 28 Claude Directory quality item(s) to polish (no hard rejects)

Search and use your Circleback meeting notes, transcripts, and action items in AI tools.

When an agent connects Circleback, the model reads all 28 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`circleback.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on Circleback

- **No tool-poisoning or prompt-injection patterns** were found across the 28 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 28 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **11 of 28 advertised tool(s) name a state-changing action** (`createactionitem`, `updateactionitem`, `deleteactionitem`, `createtag`…). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 28 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Circleback server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Circleback server advertises

These are the 28 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`SearchMeetings`** — Find meetings that match a given search term or filter. Searches match every keyword, in any order, within the meeting name or within its notes. Matching ignores case and treats p… _(parameters: intent, searchTerm, pageIndex, startDate, endDate, tags)_
- **`SearchTranscripts`** — Search meeting transcripts to find transcript chunks that match a given search term. If the user's question requires searching for multiple distinct search terms, you should call… _(parameters: intent, searchTerm, tags, profiles, domains)_
- **`GetTranscriptsForMeetings`** — Get the full transcripts for given meeting IDs. Use string IDs like abcDEF123ghiJKL456mno. The data returned will be an array of objects, each representing a full transcript for a… _(parameters: intent, meetingIds)_
- **`ReadMeetings`** — Given up to 50 meeting IDs, fetch detailed information for each meeting. Use string IDs like abcDEF123ghiJKL456mno. The data returned will be an array of objects, with each contai… _(parameters: intent, meetingIds)_
- **`FindProfiles`** — Find profiles matching the given names. The data returned will be an array of objects representing each of the matching profiles. _(parameters: searchTerms)_
- **`FindCompanies`** — Find companies matching the given search terms. Searches match company names and company domains. The data returned will be an array of objects with each company's domain and name… _(parameters: searchTerms)_
- **`SearchSupportArticles`** — Search for support articles about Circleback to find relevant documentation and help content. _(parameters: searchTerm)_
- **`SearchCalendarEvents`** — Returns upcoming calendar events from the authenticated user's connected calendars, with pagination and a configurable time window. Get calendar events from the user's connected c… _(parameters: intent, startDate, endDate, pageIndex)_
- **`SearchEmails`** — Search the user's connected email accounts for email threads matching a query. This should be used when the user asks questions about their emails or needs to find specific email… _(parameters: intent, searchTerm, pageIndex)_
- **`SearchActionItems`** — Find action items that match a given search term or filter. Returns action items with their title, description, status, assignee, and related meeting details. Action items can hav… _(parameters: intent, searchTerms, status, pageIndex, startDate, endDate)_
- **`ListTags`** — Returns every tag available to the authenticated user. Returns an array of tag objects with their IDs and names. Use this to discover available tags before filtering meetings, tra… _(parameters: intent)_
- **`ListTeams`** — Returns the user's workspace and its teams with their IDs, or null if the user has no workspace.
- **`ListFolders`** — Returns the folders the authenticated user can see, including closed folders they haven't joined and, for workspace admins, their workspace's hidden folders. Use the folder IDs to…
- **`ReadFolders`** — Returns folders with their members, teams, and rules. Pending invitations are only listed to people who manage the folder. Use ListFolders to find folder IDs. _(parameters: folderIds, intent)_
- **`CreateActionItem`** — Creates an action item owned by the authenticated user. Creates an action item owned by the user. Pass meetingId to link it to a meeting the user can edit; omit it for a standalon… _(parameters: title, description, assigneeProfileId, meetingId)_
- **`UpdateActionItem`** — Updates the title, description, status, or assignee of an action item. Returns the updated action item. Provide at least one field. Omitted fields stay unchanged; use null to unas… _(parameters: title, description, status, assigneeProfileId, actionItemId, actionItemTitle)_
- **`DeleteActionItem`** — Deletes an action item. Returns the deleted action item. Deletes the action item permanently. For an item created in this conversation, use the id CreateActionItem returned; other… _(parameters: actionItemId, actionItemTitle)_
- **`CreateTag`** — Creates a new tag. If a tag with the same name already exists, a conflict error is returned. Only create when the user asks. _(parameters: name, description, color)_
- **`UpdateTag`** — Updates a tag's name or description. Omitted fields stay unchanged. Use ListTags to find the tag. Only update when the user requests a change. _(parameters: name, description, color, tagId, tagName)_
- **`DeleteTag`** — Permanently deletes a tag and removes it from every meeting it was applied to. Deletes a Circleback tag and removes it from the meetings and automations that use it. Use ListTags… _(parameters: tagId, tagName)_
- **`CreateFolder`** — Creates a shared folder in a workspace, with optional rules that file new meetings into it. Use ListFolders or ListTeams to find the workspace ID. Only create when the user asks. _(parameters: name, workspaceId, visibility, icon, color, ruleGroups)_
- **`UpdateFolder`** — Updates a folder's name, icon, icon color, visibility, or rules. Fields you leave out stay the same, and ruleGroups replaces all of the folder's rules. Returns the folder. ruleGro… _(parameters: name, description, visibility, icon, color, ruleGroups)_
- **`DeleteFolder`** — Deletes a shared folder. Its meetings stay with their owners. Meetings that were only in this folder go back to their creators' Private. Only delete when the user explicitly asks. _(parameters: folderId, folderName)_
- **`ShareFolder`** — Shares a folder with people, teams, or workspaces, changes their access, or removes them. People outside the folder's workspace, even without an account, can be added by email. On… _(parameters: folderId, shares, folderName)_
- **`ShareMeeting`** — Shares a meeting with people, teams, workspaces, or the link, or removes their access. Returns the updated meeting. Each share sets exactly one target: email, profileId, workspace… _(parameters: meetingId, shares, meetingName)_
- **`UpdateMeeting`** — Updates a meeting's name, notes, private notes, or tags. Each field you provide replaces its current value, and fields you leave out stay the same. To add to notes or tags, get th… _(parameters: name, tagIds, folderIds, notes, privateNotes, meetingId)_
- **`UpdateCalendarEvent`** — Sets your private notes or tags on the Circleback meeting for a calendar event, creating the meeting if needed. Each field you provide replaces its current value, and fields you l… _(parameters: privateNotes, tagIds, calendarMeetingId, meetingName)_
- **`SubmitFeedback`** — Sends feedback, a bug report, or a feature request to the Circleback team. The team does not reply to it. Only submit when the user asks to send feedback to the Circleback team. N… _(parameters: feedback, useCase)_

## Maintenance & supply-chain — the risk Circleback's static scan can't see

A prompt-injection scan reads Circleback's advertised tool metadata at one moment. It cannot tell you the project behind `circleback.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `circleback.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Circleback yourself, or claim its badge {#claim}

Re-run this exact Circleback check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `circleback.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://circleback.ai/api/mcp&directory=true"
```

For the itemized findings on Circleback — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://circleback.ai/api/mcp"}`. If you
run `circleback.ai`, [claim a measured verified-owner badge for Circleback free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=circleback.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcircleback.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://circleback.ai/api/mcp)
```

Keeping the Circleback badge green as its tools change — six-hourly re-scans of `circleback.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `circleback.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

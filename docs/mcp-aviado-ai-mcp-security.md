---
title: "Is the Aviado AI MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Aviado AI MCP server (https://aviado.ai/api/mcp), run 2026-10-24: advertises get_supplements_for_biomarker, get_interventions_for_biomarker, get_biomarkers_for_supplement; 11 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Aviado AI MCP server — security & directory-readiness scorecard

**Server:** `https://aviado.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Cited supplement evidence, biomarker effects, interaction checks and brand quality.

When an agent connects Aviado AI, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`aviado.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Aviado AI

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 11 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Aviado AI server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Aviado AI server advertises

The server describes itself to connecting agents as: *Aviado (aviado.ai) serves curated, partial reference data on supplements: which biomarkers they move, conditions, interactions, safety notes and product quality. Rules for answering users: 1. Read 'status' first. 'needs_confirmation' and 'no_match' are NOT an…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_supplements_for_biomarker`** — Supplements in Aviado's evidence graph that move a biomarker (e.g. 'LDL cholesterol', 'HbA1c'). Lists only registry-classified supplements: entities Aviado's identity vocabulary t… _(parameters: biomarker, limit, direction)_
- **`get_interventions_for_biomarker`** — All mixed interventions in Aviado's evidence graph that move a biomarker, each labelled with intervention_type: supplement, food_substance, prescription_drug, research_compound, r… _(parameters: biomarker, limit, direction)_
- **`get_biomarkers_for_supplement`** — Biomarkers a supplement moves in the Aviado app's evidence graph, one entry per biomarker (strongest edge), ordered by prior_weight (graph evidence weight 0-1, not a calibrated pr… _(parameters: supplement, limit)_
- **`get_supplement_info`** — Overview of one supplement: description, typical uses, its top 5 biomarkers (with up to 3 PubMed citations each), goals, mechanism tags and cited safety contraindications. Contrai… _(parameters: supplement)_
- **`get_supplement_interactions`** — Drug interactions come only from FDA drug labels and supplement-supplement ones only from Aviado's verified pairs; an empty result is not evidence that there is no interaction. La… _(parameters: supplement, include_drug_interactions, drug_limit, drug_offset, drug, include_supplement_interactions)_
- **`check_interaction`** — Point check of one pair, about 1-3 KB: a and b are each a supplement (name or canonical_id) or a medication (generic name; salt forms merged, brand names not matched). Supplement… _(parameters: a, b)_
- **`get_top_brands`** — Highest-quality brands for a supplement: one product per brand (its best), ranked by ProofMark, Aviado's product quality score (testing, ingredients, transparency, manufacturing,… _(parameters: supplement, limit)_
- **`search_supplements`** — Find the Aviado id for a supplement name, exactly (no fuzzy matching). Answers with matches[0] = the identity: vocabulary_exact, or user_intent for salt/form names ('magnesium cit… _(parameters: query, mode)_
- **`search_conditions`** — Find the condition id for a health condition, symptom or goal. Answers when the name matches one condition clearly (data.conditions lists it first, with up to 4 related suggestion… _(parameters: query)_
- **`get_supplements_for_condition`** — Supplements associated with a health condition or goal (e.g. 'insomnia', 'anxiety', 'joint pain'), strongest evidence first. evidence_basis direct rows come from studies of the co… _(parameters: condition, min_grade, limit, include_non_supplements)_
- **`build_starter_stack`** — Starter stack (default 3, max 5) of recommendable supplements for a goal (e.g. 'insomnia', 'LDL cholesterol'), best-replicated app-visible evidence first; never Rx or research; bi… _(parameters: goal, max_items, exclude, include_claim_link)_

## Scan Aviado AI yourself, or claim its badge

Re-run this exact Aviado AI check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `aviado.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://aviado.ai/api/mcp&directory=true"
```

For the itemized findings on Aviado AI — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://aviado.ai/api/mcp"}`. If you
run `aviado.ai`, [claim a measured verified-owner badge for Aviado AI free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=aviado.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Daviado.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://aviado.ai/api/mcp)
```

Keeping the Aviado AI badge green as its tools change — six-hourly re-scans of `aviado.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `aviado.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

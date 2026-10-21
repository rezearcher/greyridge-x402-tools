#!/usr/bin/env node
// Usage:
//   npx github:rezearcher/greyridge-x402-tools mcpscan https://host/mcp   (free preview, no wallet)
//   npx github:rezearcher/greyridge-x402-tools mcpscan --from-egress egress.json   (fully OFFLINE: no network)
//
// Static tool-poisoning / prompt-injection audit of an MCP server's advertised
// tools (never calls them). Exit 2 = block, 1 = review/error, 0 = clear -> usable
// as a CI gate before admitting an MCP server to an agent.
//
// --from-egress reads the tools[] an mcp-egress run already recorded and scores
// them LOCALLY with no network I/O — nothing leaves the machine. This is the
// offline reader interface mcp-egress asks for: `your-scanner --from-egress
// egress.json`, exits 2 on block. The scoring rules below are a verbatim port of
// the hosted Grey Ridge /scan/mcp engine, so an offline verdict matches the API's.
const H = process.env.GREYRIDGE_HOST || "https://x402-data-api.sigrunner.workers.dev";
const a = process.argv.slice(2);

// ---------------------------------------------------------------------------
// Local rule engine — ported verbatim from the hosted /scan/mcp analyzer
// (OWASP LLM01/LLM08 + the MCP-specific tool-poisoning class). Pure text
// analysis, no network, no subprocess. Keep in lockstep with the API engine.
// ---------------------------------------------------------------------------
function analyzeMcpTool(name, description, schemaText) {
  const f = [];
  const text = `${description}\n${schemaText}`;
  const low = text.toLowerCase();
  const add = (severity, rule, detail, ev) => f.push({ tool: name, severity, rule, detail, evidence: String(ev).slice(0, 160) });

  // 1. Hidden/override instructions to the AI embedded in a tool description (tool poisoning).
  const inj = /(ignore (all |any )?(previous|prior|earlier|above)( instructions| context| prompt)?|disregard (the )?(above|previous|prior|earlier)|<\/?important>|<\/?system>|<\/?secret>|do not (tell|mention|inform|notify|reveal)\b[^.]{0,20}\bthe user|never (reveal|mention|disclose|tell)\b[^.]{0,30}\binstructions?|never (reveal|mention|disclose|tell)\b[^.]{0,30}\bthe user\s+(about|that you|of|how you|what you)\b|(hidden|concealed|kept secret) from the user|keep (this|it) (secret|hidden)|without (telling|informing|notifying|alerting) the user|reveal (your|the) (full |complete )?(system )?(prompt|instructions))/i;
  if (inj.test(text)) add("critical", "tool-poisoning:hidden-instructions",
    "Description contains deceptive/override instructions aimed at the AI agent (conceal-from-user or ignore-prior-instructions) — classic MCP tool-poisoning.", (text.match(inj) || [""])[0]);

  // 2. Data-exfiltration hints.
  const secretArtifact = /(\.env\b|~\/\.ssh|id_rsa|\bprivate key\b|exfiltrat)/i;
  const externalize = /(send|post|upload|transmit|forward|leak|exfiltrat\w*)\b[^.]{0,60}?\b(secrets?|credentials?|passwords?|api[ _-]?keys?|access tokens?|cookies?|private keys?|conversation|chat history|system prompt|environment variables?|contents? of (the |any )?files?)\b[^.]{0,80}?(https?:\/\/|\bwebhook\b|\bexternal\b|third[- ]?party|attacker|\bexfil)|(secrets?|credentials?|passwords?|api[ _-]?keys?|cookies?|private keys?|conversation|chat history|system prompt)\b[^.]{0,60}?\b(to|at|via) (https?:\/\/|an? (external|remote|third[- ]?party)|attacker)/i;
  const descLow = String(description).toLowerCase(); // sentence-scoped: never match across the description/schema boundary
  const exfilHit = low.match(secretArtifact) || descLow.match(externalize);
  if (exfilHit) add("high", "exfiltration-hint",
    "Description instructs sending data to an external destination, or references a secret-file artifact (.env/.ssh/id_rsa).", exfilHit[0]);

  // 3. Dangerous capability surface
  const danger = /((?<![\/.\w-])(exec|execs)(?![\/\w-])|\b(exec\(|eval|eval\(|subprocess|shell|sudo|chmod)\b|os\.system|child_process|rm -rf|arbitrary (code|command)|remote code|\bexecute (shell|arbitrary|code|commands?)\b|run (shell|arbitrary) (commands?|code))/i;
  if (danger.test(low)) add("high", "dangerous-capability",
    "Tool exposes code/command execution or destructive filesystem ops.", (low.match(danger) || [""])[0]);

  // 4. Cross-tool shadowing / rug-pull language
  const shadow = /(\b(other|all|every|any) tools?\b[^.]{0,40}\b(behaviou?r|description|output|call|invoke|instruction)s?\b|\boverride (the )?(\w+ (of )?)?(other|all|every|any|previous) |\bshadow(s|ing)? (the )?(other|all|every)|when (any|another) tool|modify the behaviou?r of)/i;
  if (shadow.test(low)) add("medium", "cross-tool-shadowing",
    "Description references other tools' behavior — shadowing / rug-pull risk.", (low.match(shadow) || [""])[0]);

  // 5. Invisible / non-ASCII payloads (unicode tag chars, zero-width, long base64)
  if (/[​-‍﻿‪-‮⁦-⁩]/.test(text) || /[\u{E0000}-\u{E007F}]/u.test(text))
    add("high", "invisible-unicode", "Hidden/zero-width or unicode-tag characters in description — covert instruction channel.", "non-printable chars");
  if (/[A-Za-z0-9+/]{120,}={0,2}/.test(text))
    add("medium", "opaque-blob", "Long base64-like blob embedded in tool text — possible hidden payload.", "…base64…");

  return f;
}
const WEIGHT = { critical: 40, high: 20, medium: 8, low: 3 };
const verdictFromScore = (s) => (s >= 70 ? "block" : s >= 30 ? "review" : "clear");

function scanToolsLocal(tools) {
  const findings = [];
  for (const t of tools)
    findings.push(...analyzeMcpTool(t.name || "(unnamed)", t.description || "", JSON.stringify(t.inputSchema || t.annotations || {})));
  const risk_score = Math.min(100, findings.reduce((s, x) => s + WEIGHT[x.severity], 0));
  const crit = findings.filter((x) => x.severity === "critical").length;
  const risk_summary = findings.length === 0
    ? `No tool-poisoning/injection patterns detected across ${tools.length} tool(s). Clean on static checks.`
    : `${findings.length} issue(s) across ${tools.length} tool(s)${crit ? `, ${crit} CRITICAL (tool-poisoning)` : ""}. Risk ${risk_score}/100. Review flagged tools before trusting this server.`;
  return { tools_scanned: tools.length, findings, risk_score, verdict: verdictFromScore(risk_score), risk_summary };
}

if (a[0] === "--from-egress") {
  // Fully offline: read the tools[] mcp-egress already recorded, score locally,
  // emit nothing over the network. Mirrors the hosted engine so verdicts match.
  const { readFileSync } = await import("node:fs");
  let doc;
  try { doc = JSON.parse(readFileSync(a[1], "utf8")); }
  catch (e) { console.error("cannot read egress.json: " + e.message); process.exit(1); }
  const tools = (doc.tools || []).map((t) => ({
    name: t.name,
    description: [t.title, t.description].filter(Boolean).join(" - "),
    annotations: t.annotations || {},
  }));
  if (!tools.length) { console.error("no tools[] in " + a[1]); process.exit(1); }
  const j = scanToolsLocal(tools);
  console.log(JSON.stringify({ source: a[1], offline: true, ...j }, null, 2));
  const v = j.verdict;
  console.error(`verdict=${v}  (offline static scan — no network I/O)  itemized findings + evidence + remediation (paid, $0.05, x402 or $0.005 MCP tool): ${H}/scan/mcp`);
  process.exit(v === "block" ? 2 : v === "clear" ? 0 : 1);
}

// Live-server path: an explicit scan the operator chose to run against a URL.
const u = a[0];
if (!u || !/^https?:\/\//.test(u)) {
  console.error("usage: mcpscan https://your-mcp-host/mcp | mcpscan --from-egress egress.json");
  process.exit(1);
}
const r = await fetch(`${H}/scan/mcp/preview?url=${encodeURIComponent(u)}`);
const j = await r.json().catch(() => ({}));
console.log(JSON.stringify(j, null, 2));
if (!r.ok || j.error) { console.error("scan failed: " + (j.error || "HTTP " + r.status)); process.exit(1); }
const v = String(j.verdict || "").toLowerCase();
console.error(`verdict=${v}  itemized findings + evidence (paid, $0.05, x402): ${H}/scan/mcp?url=${encodeURIComponent(u)}`);
process.exit(v === "block" ? 2 : v === "clear" ? 0 : 1);

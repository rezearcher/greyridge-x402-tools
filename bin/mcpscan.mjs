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
  // conceal is contraction-robust (don't / doesn't / never notify the user) so the WhatsApp-MCP
  // exploit does not slip through; a truthfulness/accuracy guard ("never tell the user a name is
  // available — confirm it first") is the OPPOSITE of concealment and is exempted via accuracyGuard.
  const conceal = /\b(do not|don'?t|does ?n'?t|would ?n'?t|wo ?n'?t|never|avoid)\b[^.?!]{0,30}?\b(tell|mention|inform|notify|alert|reveal|disclose|warn)\b[^.?!]{0,30}?\b(the user|the human|the operator)\b/i;
  const inj = /(ignore (all |any )?(previous|prior|earlier|above)( instructions| context| prompt)?|disregard (the )?(above|previous|prior|earlier)|<\/?important>|<\/?system>|<\/?secret>|(hidden|concealed|kept secret) from the user|keep (this|it) (secret|hidden)|without (telling|informing|notifying|alerting) the user|reveal (your|the) (full |complete )?(system )?(prompt|instructions))/i;
  const accuracyGuard = /\bconfirm(s|ed|ing)?\b[^.?!]{0,20}?\b(it|this|that|them|first|again|with)\b|\b(until|unless|before)\b[^.?!]{0,25}?\b(confirm|verif|validat|re-?check|double[- ]?check)/i;
  const concealMatch = conceal.exec(text);
  const concealHit = concealMatch && !accuracyGuard.test(text.slice(concealMatch.index, concealMatch.index + 140));
  if (inj.test(text) || concealHit) add("critical", "tool-poisoning:hidden-instructions",
    "Description contains deceptive/override instructions aimed at the AI agent (conceal-from-user or ignore-prior-instructions) — classic MCP tool-poisoning.", (text.match(inj) || (concealHit ? concealMatch : null) || [""])[0]);

  // 2. Data-exfiltration hints. Split by payload class: SENSITIVE payloads (system prompt /
  // conversation / env / file contents / private keys) flag on ANY destination incl a bare URL;
  // AUTH-ambiguous credentials (cookie/key/token/password) flag only on a FOREIGN destination,
  // because authenticated servers legitimately send their own credential to a URL to auth.
  // "private key" is deliberately NOT a bare artifact: the phrase is common in
  // legitimate wallet/crypto tooling and security reassurances ("we never touch your
  // private key"), so flagging the bare mention HIGH false-positives on trustworthy
  // servers. Real private-key exfil (verb+payload+dest) is still caught by exfilSensitive.
  const secretArtifact = /(\.env\b|~\/\.ssh|id_rsa|exfiltrat)/i;
  const foreignDest = String.raw`\bwebhook\b|\bexternal\b|third[- ]?party|attacker|\bexfil`;
  const anyDest = String.raw`https?:\/\/|` + foreignDest;
  const exfilSensitive = new RegExp(
    String.raw`(send|post|upload|transmit|forward|leak|exfiltrat\w*)\b[^.]{0,60}?\b(system prompt|conversation|chat history|environment variables?|private keys?|contents? of (the |any )?files?)\b[^.]{0,80}?(` + anyDest + `)`, "i");
  const exfilCredential = new RegExp(
    String.raw`(send|post|upload|transmit|forward|leak|exfiltrat\w*)\b[^.]{0,60}?\b(secrets?|credentials?|passwords?|api[ _-]?keys?|access tokens?|cookies?)\b[^.]{0,80}?(` + foreignDest + `)`, "i");
  const descLow = String(description).toLowerCase(); // sentence-scoped: never match across the description/schema boundary
  const exfilHit = low.match(secretArtifact) || descLow.match(exfilSensitive) || descLow.match(exfilCredential);
  if (exfilHit) add("high", "exfiltration-hint",
    "Description instructs sending sensitive data (system prompt / conversation / env / file contents / private keys) to a destination, credentials to a foreign destination, or references a secret-file artifact (.env/.ssh/id_rsa).", exfilHit[0]);

  // 3. Dangerous capability surface
  const danger = /((?<![\/.\w-])(exec|execs)(?![\/\w-])|\b(exec\(|eval|eval\(|subprocess|shell|sudo|chmod)\b|os\.system|child_process|rm -rf|arbitrary (code|command)|remote code|\bexecute (shell|arbitrary|code|commands?)\b|run (shell|arbitrary) (commands?|code))/i;
  if (danger.test(low)) add("high", "dangerous-capability",
    "Tool exposes code/command execution or destructive filesystem ops.", (low.match(danger) || [""])[0]);

  // 4. Cross-tool shadowing / rug-pull language. Explicit meta-language about other tools, OR the
  // Invariant-Labs/WhatsApp shape: a reference to a DIFFERENT tool (namespaced/action-suffixed id)
  // coupled with a coercive redirect verb (change the recipient / re-route all messages to …).
  const shadowMeta = /(\b(other|all|every|any) tools?\b[^.]{0,40}\b(behaviou?r|description|output|call|invoke|instruction)s?\b|\boverride (the )?(\w+ (of )?)?(other|all|every|any|previous) |\bshadow(s|ing)? (the )?(other|all|every)|when (any|another) tool|modif(y|ies|ying) (the )?behaviou?r of)/i;
  const otherToolRef = /(\bmcp_[a-z0-9_]+\b|\b[a-z][a-z0-9]*_(send|email|message|transfer|pay|exec|run|read|write|upload|post)[a-z0-9_]*\b|\bsend_message\b|\bsend_email\b|\b(another|a different|the present|the also[- ]present|the other)\b[^.]{0,25}\btool\b)/i;
  const redirectVerb = /(must send all|change (the )?(recipient|address|destination|target|to[- ]field)|set (the )?(recipient|destination|address|to[- ]field) to|redirect (all|every|the|outgoing|outbound)|re-?route (all|every|the)|forward (all|every) (emails?|messages?|payments?|transfers?|outgoing)|all (emails?|messages?|payments?|transfers?)\b[^.]{0,25}\b(must|to a|to the proxy|to an? (proxy|different)))/i;
  if (shadowMeta.test(low) || (otherToolRef.test(low) && redirectVerb.test(low)))
    add("medium", "cross-tool-shadowing",
      "Description references another tool's behaviour and a redirect/override — shadowing / rug-pull risk.", (low.match(shadowMeta) || low.match(redirectVerb) || [""])[0]);

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
  // A `critical` finding is exclusively tool-poisoning:hidden-instructions — a
  // high-confidence, admission-disqualifying pattern — so ANY critical forces
  // `block` (exit 2) regardless of aggregate score. Mirrors the hosted /scan/mcp
  // engine (mcpScanVerdict) so offline and hosted verdicts match exactly.
  const crit = findings.filter((x) => x.severity === "critical").length;
  const verdict = crit > 0 ? "block" : verdictFromScore(risk_score);
  const risk_summary = findings.length === 0
    ? `No tool-poisoning/injection patterns detected across ${tools.length} tool(s). Clean on static checks.`
    : crit > 0
      ? `${findings.length} issue(s) across ${tools.length} tool(s), ${crit} CRITICAL (tool-poisoning) — do not admit this server until resolved. Risk ${risk_score}/100.`
      : `${findings.length} issue(s) across ${tools.length} tool(s). Risk ${risk_score}/100. Review flagged tools before trusting this server.`;
  return { tools_scanned: tools.length, findings, risk_score, verdict, risk_summary };
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
  console.error(`verdict=${v}  (offline static scan — no network I/O)`);
  console.error(`  Keep this server safe as it changes — continuous monitoring + drift alerts, $9.99/mo: ${H}/pricing`);
  console.error(`  Full itemized findings + evidence + remediation for this scan: ${H}/scan/mcp`);
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
console.error(`verdict=${v}`);
console.error(`  Keep this server safe as it changes — continuous monitoring + drift alerts, $9.99/mo: ${H}/pricing`);
console.error(`  Full itemized findings + evidence for this scan: ${H}/scan/mcp?url=${encodeURIComponent(u)}`);
process.exit(v === "block" ? 2 : v === "clear" ? 0 : 1);

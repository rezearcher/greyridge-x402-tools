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

  // 1b. Remote / dynamic instruction injection (fetch-and-obey). A tool whose description tells the
  // agent to retrieve its operating instructions from a REMOTE source and follow them (or to obey
  // directives the server returns at call time) is a remote-controlled instruction channel: the live
  // payload lives off-definition, so an operator can swap in a malicious directive AFTER approval
  // WITHOUT changing the tool definition — defeating the hash-pinning rug-pull detection the incumbent
  // scanners rely on. Distinct from rule 1 (inline override) and rule 2 (OUTBOUND exfil): this is
  // INBOUND fetch-then-obey of attacker-hosted instructions. Precision: a data object (docs/page/file)
  // does not match — only an agent-directive object (instructions/directives/commands/prompt) with a
  // remote source (retrieve shape) or a dynamic "returned by the server" anchor (obey shape).
  const dirObj = String.raw`(?:instructions?|directives?|commands?|(?:system )?prompt)`;
  const fetchVerb = String.raw`(?:fetch|retrieve|load|download|pull|obtain|request|read|get)`;
  const remoteFrom = String.raw`(?:from|at)\s+(?:https?:\/\/|(?:the\s+)?(?:remote\s+)?(?:server|endpoint|api|url|host)\b)`;
  const retrieveShape = new RegExp(fetchVerb + String.raw`\b[^.?!]{0,25}?\b(?:your|the|its|updated|current|latest)\s+` + dirObj + String.raw`\b[^.?!]{0,40}?\b` + remoteFrom, "i");
  const dynamicAnchor = String.raw`(?:returned\s+(?:by|from)|in\s+the\s+(?:response|output|body)\s+(?:of|from)|(?:the\s+)?(?:server|endpoint|api)\s+(?:returns|provides|sends|gives|responds\s+with))`;
  const obeyShape = new RegExp(String.raw`(?:follow|obey|comply\s+with|execute|apply|adhere\s+to)\b[^.?!]{0,30}?\b(?:the|any|all)?\s*` + dirObj + String.raw`\b[^.?!]{0,40}?\b` + dynamicAnchor, "i");
  const remoteInstrHit = String(description).match(retrieveShape) || String(description).match(obeyShape);
  if (remoteInstrHit) add("critical", "remote-instruction-injection",
    "Description instructs the agent to fetch its instructions/prompt from a remote source and follow them (or to obey directives returned by the server at call time) — a remote-controlled instruction channel. The live payload lives off-definition, so an operator can swap in a malicious directive after approval WITHOUT changing the tool definition, defeating hash-pinning rug-pull detection.", remoteInstrHit[0]);

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

  // 2b. Schema-injection exfil — payload hidden in a PARAMETER description (inputSchema)
  // rather than the top-level description. Rule 2 above is description-only (sentence-
  // scoped), so an attacker who read these open-source rules can move the exfil payload
  // into a param's schema `description` to dodge it (the documented schema-injection /
  // parameter-description vector). We pull each prose string out of the parsed schema
  // and run the SAME matchers against it INDIVIDUALLY — a hit means verb+payload+dest
  // are all inside one parameter description, never a cross-field concatenation. Only
  // `description`/`title` prose is scanned, each field standalone, so terse benign
  // type-hint descriptions stay clean.
  const schemaProse = [];
  const paramNames = [];
  try {
    const walk = (node) => {
      if (Array.isArray(node)) { for (const x of node) walk(x); return; }
      if (node && typeof node === "object") {
        for (const [k, v] of Object.entries(node)) {
          if ((k === "description" || k === "title") && typeof v === "string") schemaProse.push(v);
          else {
            // A JSON-Schema `properties` object's KEYS are the declared parameter
            // names the agent is told to fill — collect them (rule 2c scans these).
            if (k === "properties" && v && typeof v === "object" && !Array.isArray(v))
              for (const pn of Object.keys(v)) paramNames.push(pn);
            walk(v);
          }
        }
      }
    };
    walk(JSON.parse(schemaText));
  } catch { /* schemaText not JSON — full-text matchers already cover it */ }
  for (const prose of schemaProse) {
    const pl = String(prose).toLowerCase();
    const h = pl.match(exfilSensitive) || pl.match(exfilCredential);
    if (h) { add("high", "exfiltration-hint",
      "A tool parameter's schema description instructs sending sensitive data / credentials to a destination — schema-injection exfiltration (payload hidden in inputSchema rather than the top-level description).", h[0]); break; }
  }
  // Remote-instruction injection (rule 1b) smuggled into a parameter's schema description.
  for (const prose of schemaProse) {
    const h = String(prose).match(retrieveShape) || String(prose).match(obeyShape);
    if (h) { add("critical", "remote-instruction-injection",
      "A tool parameter's schema description instructs fetching/obeying instructions from a remote source — remote-controlled instruction channel hidden in the inputSchema (defeats hash-pinning; payload lives off-definition).", h[0]); break; }
  }

  // 2c. Wallet-secret parameter harvesting (OWASP LLM08). A declared input parameter
  // for a raw wallet secret (private key / seed phrase / mnemonic / recovery phrase)
  // is the wallet-drainer pattern: a hosted tool never needs the user's private key
  // (a non-custodial signer signs locally and returns only a signature), so sending
  // it to a remote server hands over custody. Matched on the param NAME (a request
  // the agent fills), never prose, and only unambiguous wallet-secret tokens — NOT
  // generic api_key/password/token, which authenticated tools legitimately accept.
  const walletSecretParam = /(privatekey|privkey|seedphrase|secretrecoveryphrase|recoveryphrase|mnemonic|walletsecret)/;
  const secretParamHit = paramNames.find((n) => walletSecretParam.test(String(n).toLowerCase().replace(/[^a-z0-9]/g, "")));
  if (secretParamHit) add("critical", "wallet-secret-harvesting",
    "Tool declares an input parameter for a raw wallet secret (private key / seed phrase / mnemonic / recovery phrase). A hosted tool never needs the user's private key — a non-custodial signer signs locally and returns only a signature; sending the key to a remote server is the wallet-drainer pattern.",
    secretParamHit);

  // 3. Dangerous capability surface
  const danger = /((?<![\/.\w-])(exec|execs)(?![\/\w-])(?!\s+(tools?|access|permission|capabilit|rights?|mode|flag|param)\b)|\b(exec\(|eval|eval\(|subprocess|shell|sudo|chmod)\b|os\.system|child_process|rm -rf|arbitrary (code|command)|remote code|\bexecute (shell|arbitrary|code|commands?)\b|run (shell|arbitrary) (commands?|code))/i;
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

  // 5b. ANSI terminal escape / non-whitespace C0 control-char covert channel (Trail of
  // Bits line-jumping / ANSI; CVE-2026-6494). The ESC byte + CSI/OSC sequences, or other
  // C0 controls, in a tool name/description can hide text from a human reviewer or inject
  // into terminal output/logs while the model ingests the real content. Legitimate text
  // uses only TAB/LF/CR whitespace; any other C0 control (and DEL) is anomalous. Scans
  // the name too (attacker-controllable, rendered in tool pickers/logs).
  const controlChan = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
  if (controlChan.test(name) || controlChan.test(text)) {
    const inName = controlChan.test(name);
    add("high", "ansi-terminal-escape",
      "ANSI terminal escape sequence or non-whitespace control character in the tool " +
      (inName ? "name" : "description") +
      " — a covert channel that can hide instructions from a human reviewer or inject into terminal output/logs (Trail of Bits line-jumping / ANSI; CVE-2026-6494).",
      /\u001b/.test(inName ? name : text) ? "ESC (0x1b) escape sequence" : "non-printable control char");
  }

  // 5c. CSS / passive-resource-fetch exfiltration (2026 @font-face technique). Instead of
  // prose telling the model to "send X to Y", the attacker embeds a passive resource fetch
  // — a CSS @font-face/@import or url() pointing at a remote (http/https/protocol-relative)
  // or data: destination. Many agent UIs render Markdown/HTML in tool text, so the fetch
  // fires on render and exfiltrates via the request URL, bypassing image-sanitization/CSP
  // and the prose exfil matcher. The regex requires url( immediately followed by a scheme,
  // so prose like "the URL (https://…)" with a space does not match.
  const cssExfil = /(@font-face\b|url\(\s*['"]?\s*(?:https?:|data:|\/\/))/i;
  const cssExfilHit = text.match(cssExfil) || name.match(cssExfil);
  if (cssExfilHit) add("high", "css-resource-exfil",
    "CSS @font-face/@import or url() pointing at a remote/data destination in the tool text — a passive resource-fetch exfiltration channel that fires when the description renders and bypasses image-sanitization/CSP (CSS @font-face exfil, 2026).",
    cssExfilHit[0].slice(0, 48));

  // 5d. Variation-selector smuggling. Rule 5 covers zero-width/bidi and the TAG block but
  // NOT variation selectors, which encode arbitrary bytes appended to any visible base char
  // (Paul Butler emoji-smuggling, weaponised 2025-2026 for prompt-injection concealment).
  // Flag any Variation Selector Supplement char (U+E0100-U+E01EF, no legitimate use in tool
  // metadata) and runs of >=2 BMP selectors (U+FE00-U+FE0F); a single VS16/VS15 after an
  // emoji stays clean. Scans the name too.
  const varSel = /[\u{E0100}-\u{E01EF}]|[︀-️]{2,}/u;
  if (varSel.test(text) || varSel.test(name))
    add("high", "variation-selector-smuggling",
      "Unicode variation selectors encode a hidden payload in the tool " +
      (varSel.test(name) && !varSel.test(text) ? "name" : "description") +
      " — an invisible covert channel (Variation Selector Supplement, or a run of BMP selectors) the model ingests but a human reviewer cannot see.",
      "variation selectors");

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

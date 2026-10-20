#!/usr/bin/env node
// Usage: npx github:rezearcher/greyridge-x402-tools mcpscan https://host/mcp   (free preview, no wallet)
// Static tool-poisoning / prompt-injection audit of an MCP server's advertised tools (never calls them).
// Exit 2 = block, 1 = review/error, 0 = clear -> usable as a CI gate before adding an MCP server to an agent.
const H = process.env.GREYRIDGE_HOST || "https://x402-data-api.sigrunner.workers.dev";
const a = process.argv.slice(2);
let u = a[0], r;
if (a[0] === "--from-egress") {
  // Offline reader for mcp-egress output: sends only the recorded tools[] (name/title/description/annotations) to the preview.
  const { readFileSync } = await import("node:fs");
  let doc; try { doc = JSON.parse(readFileSync(a[1], "utf8")); } catch (e) { console.error("cannot read egress.json: " + e.message); process.exit(1); }
  const tools = (doc.tools || []).map((t) => ({ name: t.name, description: [t.title, t.description].filter(Boolean).join(" - "), annotations: t.annotations, inputSchema: t.inputSchema || { type: "object" } }));
  if (!tools.length) { console.error("no tools[] in " + a[1]); process.exit(1); }
  r = await fetch(`${H}/scan/mcp/preview`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ tools }) });
  u = "";
} else {
  if (!u || !/^https?:\/\//.test(u)) { console.error("usage: mcpscan https://your-mcp-host/mcp | mcpscan --from-egress egress.json"); process.exit(1); }
  r = await fetch(`${H}/scan/mcp/preview?url=${encodeURIComponent(u)}`);
}
const j = await r.json().catch(() => ({}));
console.log(JSON.stringify(j, null, 2));
if (!r.ok || j.error) { console.error("scan failed: " + (j.error || "HTTP " + r.status)); process.exit(1); }
const v = String(j.verdict || "").toLowerCase();
console.error(`verdict=${v}  itemized findings + evidence (paid, $0.05, x402): ${H}/scan/mcp${u ? "?url=" + encodeURIComponent(u) : " (url form needs a reachable server)"}`);
process.exit(v === "block" ? 2 : v === "clear" ? 0 : 1);

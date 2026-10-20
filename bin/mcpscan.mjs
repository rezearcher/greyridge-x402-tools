#!/usr/bin/env node
// Usage: npx github:rezearcher/greyridge-x402-tools mcpscan https://host/mcp   (free preview, no wallet)
// Static tool-poisoning / prompt-injection audit of an MCP server's advertised tools (never calls them).
// Exit 2 = block, 1 = review/error, 0 = clear -> usable as a CI gate before adding an MCP server to an agent.
const u = process.argv[2];
if (!u || !/^https?:\/\//.test(u)) { console.error("usage: mcpscan https://your-mcp-host/mcp"); process.exit(1); }
const H = process.env.GREYRIDGE_HOST || "https://x402-data-api.sigrunner.workers.dev";
const r = await fetch(`${H}/scan/mcp/preview?url=${encodeURIComponent(u)}`);
const j = await r.json().catch(() => ({}));
console.log(JSON.stringify(j, null, 2));
if (!r.ok || j.error) { console.error("scan failed: " + (j.error || "HTTP " + r.status)); process.exit(1); }
const v = String(j.verdict || "").toLowerCase();
console.error(`verdict=${v}  itemized findings + evidence (paid, $0.05, x402): ${H}/scan/mcp?url=${encodeURIComponent(u)}`);
process.exit(v === "block" ? 2 : v === "clear" ? 0 : 1);

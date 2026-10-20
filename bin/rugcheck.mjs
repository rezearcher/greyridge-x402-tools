#!/usr/bin/env node
// Usage: npx github:rezearcher/greyridge-x402-tools rugcheck 0xTOKEN   (free preview, no wallet)
// Exits 2 on AVOID, 1 on CAUTION/error, 0 on SAFE -> usable as a CI/script gate.
const t = process.argv[2];
if (!t || !/^0x[0-9a-fA-F]{40}$/.test(t)) { console.error("usage: rugcheck 0xBaseTokenAddress"); process.exit(1); }
const H = process.env.GREYRIDGE_HOST || "https://x402-data-api.sigrunner.workers.dev";
const r = await fetch(`${H}/chain/token-report/preview?token=${t}`);
if (!r.ok) { console.error("HTTP " + r.status); process.exit(1); }
const j = await r.json();
console.log(JSON.stringify(j, null, 2));
const v = String(j.verdict || j.report?.verdict || "").toUpperCase();
console.error(`verdict=${v || "?"}  paid route (same depth, $0.01, x402): ${H}/chain/token-report?token=${t}`);
process.exit(v === "AVOID" ? 2 : v === "SAFE" ? 0 : 1);

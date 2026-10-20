#!/usr/bin/env node
// Dispatcher: npx github:rezearcher/greyridge-x402-tools <rugcheck|mcpscan> <arg>
const cmd = process.argv[2];
if (!["rugcheck", "mcpscan"].includes(cmd)) { console.error("usage: <rugcheck 0xTOKEN | mcpscan https://host/mcp>"); process.exit(1); }
process.argv.splice(2, 1);
await import(`./${cmd}.mjs`);

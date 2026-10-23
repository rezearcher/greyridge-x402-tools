---
title: Scan an MCP server before your agent trusts it (x402)
description: Static tool-poisoning / prompt-injection scan for MCP servers (OWASP LLM01/LLM08), usable as a CI gate, plus Base token honeypot/rug checks. Keyless x402 pay-per-call on Base, free previews.
---
# Vet an MCP server before your agent trusts it

Every tool an MCP server advertises is read by your model the moment it connects — a poisoned description, a hidden-unicode instruction, or a conceal-from-user directive can steer the agent before a single tool runs. Scan any server for prompt-injection / tool-poisoning patterns in one command — no install, no key:

```bash
npx -y github:rezearcher/greyridge-x402-tools#v0.3.1 mcpscan https://mcp.deepwiki.com/mcp
```

Prints tools scanned, severity counts, risk score, and a verdict — `clear` / `review` / `block`. **Exit code 2 on `block`**, so it drops straight into CI as an admission gate. Static analysis of advertised metadata only; it never invokes a tool.

- [Why was my Claude connector rejected?](claude-connector-directory-readiness.html) — check your MCP server against the Claude Connector Directory review criteria before you submit
- [Scan an MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html) — method, CI gate, private/offline scanning
- [The MCP exposure census (2026)](mcp-registry-census-2026-10-20.html) — ~half of public MCP servers in the official registry (174/364) answer `tools/list` with no authentication; confirmed tool-poisoning 0%
- [MCP server security scorecards](mcp-server-scorecards.html) — independent injection + Claude Directory readiness scans of well-known public MCP servers (DeepWiki, Wolfram, Hugging Face, Cloudflare, Astro, and more)

**Private, local or stdio-only servers** scan with nothing leaving your machine (paste the `tools/list`, or score an `mcp-egress` recording fully offline). Itemized findings with OWASP LLM01/LLM08 mapping: paid `GET /scan/mcp` ($0.05 USDC via [x402](https://x402.org) on Base, no account). Interactive scan: [/scan/mcp-scanner](https://x402-data-api.sigrunner.workers.dev/scan/mcp-scanner).

## Base token safety — pre-trade checks for trading agents

Check a Base token **before** your agent buys it: honeypot sell-simulation, proxy/mint/pause/blacklist flags, measured transfer tax, liquidity depth. One HTTP call returns SAFE / CAUTION / AVOID.

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0xYourBaseToken"
```

Paid route is the same depth: `GET /chain/token-report?token=0x...` at $0.01 USDC via x402 on Base. Swap guard `/gate/swap` returns GO / HOLD / BLOCK at $0.008.

- [Live Base token rug & honeypot checks](token-rug-checks.html) — measured GO / HOLD / BLOCK verdicts for trending Base tokens, re-runnable with no account
- [Honeypot check API for Base tokens](honeypot-check-api-base.html)
- [Pre-trade safety gate for AI trading agents](pre-trade-safety-gate-ai-agents.html)
- [Pay-per-call, no API key: x402 token risk API](x402-token-risk-api.html)
- [Base token-safety x402 price comparison (2026-10)](base-token-safety-price-comparison.html) — measured per-call cost across providers

### Reselling these verdicts

Shipping a wallet, trading bot, agent or marketplace of your own? Embed the gate and keep the margin: you pay the wholesale call price (`/gate/swap` at $0.008), set whatever retail fits your product, and every referred call is tagged with `?ref=<your-tag>` and reconciled to you on-chain — provable against Base txHashes, no contract or minimum. See the [partner program](https://x402-data-api.sigrunner.workers.dev/partners) and pull your own [live reconcile report](https://x402-data-api.sigrunner.workers.dev/partners/report) any time.

Code: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) (CLI, GitHub Action, LangChain, CrewAI, ElizaOS). API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402). Contact: contact@greyridgesignals.ai

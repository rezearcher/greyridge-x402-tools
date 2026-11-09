---
title: "Is the tide MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the tide MCP server (https://api.tide.ad/mcp), run 2026-11-09: advertises explain_transaction, wallet_profile, wallet_history; 38 tools scanned, injection verdict 'clear', 1 likely Claude Directory reject(s). Re-run it yourself in one keyless call."
---
# tide MCP server — security & directory-readiness scorecard

**Server:** `https://api.tide.ad/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 38 · **Injection verdict:** `clear` · **Directory:** 1 likely Claude Directory reject(s)

Sui blockchain data in plain English: transactions, wallets, coins, balances, fund flows and SQL.

When an agent connects tide, the model reads all 38 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.tide.ad`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on tide

- **No tool-poisoning or prompt-injection patterns** were found across the 38 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 likely reject(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria (plus 1 quality item(s) to polish). The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 38 advertised tool(s) name a state-changing action** (`address_kind`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — 1 issue(s) across 38 tool(s). Risk 8/100. Review flagged tools before trusting this server. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the tide server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the tide server advertises

The server describes itself to connecting agents as: *tide answers questions about the Sui blockchain from its full history since genesis. Tools return a plain-English summary, compact facts and a link to the tide.ad page; quote the summary and share the link. Start with wallet_profile for an address or name.sui…*

These are the 38 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`explain_transaction`** — Explain one Sui transaction in plain English: what happened, the steps, who gained or lost which coins (with USD), the fee and the status. Use it whenever you have a transaction d… _(parameters: digest)_
- **`wallet_profile`** — Everything about a wallet in one call: total value with price status, top coins, DeFi and launchpad positions, SuiNS names and labels, who first funded it, its trading record and… _(parameters: address)_
- **`wallet_history`** — A wallet's transactions since genesis, newest first, each as one decoded sentence with the coins in and out. Filter by coin, direction (in or out) and days. Page with cursor. Spam… _(parameters: address, limit, cursor, coin, direction, from)_
- **`balance_at`** — The exact balance a wallet held at a past time or checkpoint, read from full history. With coin, that coin's balance and the transaction that last changed it. Without coin, every… _(parameters: address, coin, time, checkpoint)_
- **`token_info`** — A coin's price, market cap, liquidity, volume and holder count, its safety checks (mint authority, deny list, concentration), its top 10 holders with linked-wallet clusters, and a… _(parameters: coin)_
- **`trace_funds`** — Follow money between addresses. direction in: who sent funds to this address, hop by hop back, plus who first funded it. out: where its funds went, hop by hop forward. both: its l… _(parameters: address, direction, depth, coin, minUsd)_
- **`search`** — Find anything on Sui by text: coins by symbol or name, SuiNS names, perps markets, pools, packages, addresses, objects and digests. Returns ids to pass to the other tools. Example… _(parameters: query, limit)_
- **`perp_market`** — One perpetual futures market on Sui (Aftermath, Bluefin or Parchment): mark and index price, 24h change and volume, open interest, funding (last, estimated next, when), max levera… _(parameters: market, venue)_
- **`price`** — USD prices for up to 50 coins, now or at a past time. Pass coin types or symbols. Example: { coins: ["SUI", "DEEP"] }. _(parameters: coins, at)_
- **`sql`** — Run one SQL SELECT over every Sui transaction, event, object version and balance change since genesis. Needs an API key. Returns up to 100 rows; page with execution_id and offset.… _(parameters: query, execution_id, limit, offset)_
- **`explain_unsigned`** — Check a Sui transaction before signing it: tide simulates it, explains what it would do in plain words, and checks every recipient, coin and package against full history. Returns… _(parameters: tx_bytes, sender)_
- **`yield_options`** — Every place on Sui to earn yield (lending, pools, liquid staking, native staking) with the APY each actually paid over 7 and 30 days, deposits, exit liquidity and a risk tier from… _(parameters: asset, kind, protocol, max_tier, min_apy, sort)_
- **`yield_plan`** — A ranked menu of 3 to 6 yield options on Sui for an amount: the realized APY used (never the advertised one), expected USD over the horizon, cost to get in and out at that size, r… _(parameters: amount_usd, asset, target_apy, max_risk_tier, horizon_days, build)_
- **`build_transaction`** — Build an unsigned Sui transaction for an action and get it back already checked: tide adds the protocol's own calls, picks the sender's gas coins, sets the budget, dry-runs the ex… _(parameters: sender, pass, action, amount, asset, protocol)_
- **`withdraw_plan`** — List a wallet's staking, liquid staking and lending positions (native stakes, afSUI, haSUI, vSUI, sSUI, stSUI, Suilend, NAVI, Scallop), each with an id and the step that exits it,… _(parameters: wallet, exit, to, slippage_pct)_
- **`receipt_for_transaction`** — Before you sign: send the exact unsigned bytes and your intent; tide dry-runs them on mainnet and returns a receipt signed by tide (ed25519) with the digest Sui will give them, ev… _(parameters: tx_bytes, intent)_
- **`confirm_execution`** — After execution: give the executed digest and the receipt (its id, or the receipt object). tide reads the transaction from the chain and compares status, balance changes, objects… _(parameters: digest, receipt)_
- **`verify_receipt`** — Check a receipt's ed25519 signature against tide's published key (https://api.tide.ad/.well-known/tide-attest.json), that its id matches its content, and that its digest is the bl… _(parameters: receipt, signature, public_key)_
- **`agent_pass_report`** — A report for a human on Agent Pass (Sui's on-chain agent authorization): for an owner, an agent or one pass, each pass's status, its rules in plain words (pools, caps, price floor… _(parameters: owner, pass, limit)_
- **`agent_pass_precheck`** — Before building: check one action against an Agent Pass's rules as they stand now (active, signer is the agent, rule for the coin or pair, per-action and daily limits, listed pool… _(parameters: pass, sender, step)_
- **`agents_overview`** — The agent world on Sui: agent wallets active in 24 hours, their transactions and volume, Agent Passes, sui::allowance spend, Sui Agent Payments (testnet, mainnet when live), gasle…
- **`agent_wallet`** — Is this address an AI agent, who does it act for and under what limits (Agent Pass, sui::allowance, Sui Agent Payments grant, t2000, Talus), how much of each limit is used, who pa… _(parameters: address)_
- **`owner_agents`** — The AI agents one address runs on Sui: Agent Passes, allowances it granted, Sui Agent Payments grants, t2000 wallets it funded and agent wallets it pays gas for; per agent the lim… _(parameters: address)_
- **`billing_status`** — Your credits: what the plan has left this month, prepaid credits bought with USDC, the rate ($3 per million credits, so 1 USDC buys 333,333 credits), auto top-up settings and the…
- **`billing_topup`** — Build an unsigned transaction that pays USDC on Sui to tide's treasury for credits ($3 per million credits; 1 USDC buys 333,333). Returns base64 tx_bytes that need no SUI for gas… _(parameters: usd, address, gas)_
- **`get_object`** — Read any Sui object by id: type, owner, version and fields, with its recent change history (which transactions changed it). Example: { id: "0x..." }. _(parameters: id)_
- **`get_object_at`** — Read a Sui object as it was at a version, checkpoint or time: its fields and owner then, or whether it was deleted or wrapped. Use it for what a pool, vault or position looked lik… _(parameters: id, version, time, checkpoint)_
- **`object_children`** — List the dynamic fields of an object with decoded names and values (tables, bags, kiosks, pools, registries), or with depth 1 to 3, its tree of children. Page with cursor. Example… _(parameters: id, depth, cursor, limit)_
- **`package_info`** — A Move package. With only id: its modules, functions and upgrade history. With module and function: how to call it, each parameter explained, with a TypeScript snippet. With windo… _(parameters: id, module, function, window)_
- **`events`** — List on-chain events by Move event type or by package, newest first, with an optional time or checkpoint range. Page with cursor. Example: { type: "0x...::pool::SwapEvent", limit:… _(parameters: type, package, limit, cursor, fromTime, toTime)_
- **`checkpoint`** — One checkpoint by sequence number, or the newest with seq "latest": time, epoch, gas totals and its transactions as one-line sentences. Use it to see what is happening on chain ri… _(parameters: seq)_
- **`candles`** — OHLCV price candles for a coin, in USD. Pick interval and an optional from and to. Example: { coin: "SUI", interval: "1h" }. _(parameters: coin, interval, from, to)_
- **`nfts`** — The NFTs and kiosk items an address owns: name, collection, image and listing state. Page with cursor. Example: { address: "example.sui" }. _(parameters: address, limit, cursor)_
- **`staking`** — With address: the wallet's staked SUI, per stake its validator, principal, rewards and status. With validator: that validator's stake, commission and APY per epoch. Example: { add… _(parameters: address, validator)_
- **`order_book`** — DeepBook order books. With nothing: every pool with best bid, ask and 24h volume. With pool: its depth and latest trades. With address: the wallet's open orders and recent fills.… _(parameters: pool, address, levels)_
- **`walrus_blob`** — Everything about one Walrus blob: status (registered, certified, expired, deleted), owner and uploader, size, the register and certify transactions, start and end epoch with an es… _(parameters: id)_
- **`address_kind`** — Tell what an address is: a plain key (ed25519, secp256k1, secp256r1), a passkey, a zkLogin address (with its provider), a multisig (members and threshold), an object, a package, o… _(parameters: address)_
- **`docs`** — Search the tide API docs for the method that answers a question, with its parameters, credits and a curl example. Use it when no other tool fits; then call the method over REST at… _(parameters: question, limit)_

## Maintenance & supply-chain — the risk tide's static scan can't see

A prompt-injection scan reads tide's advertised tool metadata at one moment. It cannot tell you the project behind `api.tide.ad` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.tide.ad` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan tide yourself, or claim its badge {#claim}

Re-run this exact tide check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.tide.ad`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.tide.ad/mcp&directory=true"
```

For the itemized findings on tide — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.tide.ad/mcp"}`. If you
run `api.tide.ad`, [claim a measured verified-owner badge for tide free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.tide.ad)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.tide.ad&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.tide.ad/mcp)
```

Keeping the tide badge green as its tools change — six-hourly re-scans of `api.tide.ad`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.tide.ad` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

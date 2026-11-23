---
title: "Is the APEX Runner Crypto Signals MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the APEX Runner Crypto Signals MCP server (https://apexrunner.ai/mcp), run 2026-11-23: advertises get_free_market_snapshot, apex_alpha_score, grid_health_score; 52 tools scanned, injection verdict 'clear', 104 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# APEX Runner Crypto Signals MCP server — security & directory-readiness scorecard

**Server:** `https://apexrunner.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 52 · **Injection verdict:** `clear` · **Directory:** 104 Claude Directory quality item(s) to polish (no hard rejects)

Live crypto market signals for trading agents, pay-per-call in USDC on Base via x402.

When an agent connects APEX Runner Crypto Signals, the model reads all 52 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`apexrunner.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on APEX Runner Crypto Signals

- **No tool-poisoning or prompt-injection patterns** were found across the 52 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 104 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 52 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 52 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the APEX Runner Crypto Signals server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the APEX Runner Crypto Signals server advertises

These are the 52 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_free_market_snapshot`** — FREE — no payment needed. Live crypto market snapshot: BTC price, Fear & Greed, BTC market regime, and a 2-of-6-pillar preview of the APEX alpha score, plus the BTC capitulation_a… _(parameters: coin)_
- **`apex_alpha_score`** — $0.007 — Call this once before deploying capital instead of making six separate checks — returns one DEPLOY / WAIT / REDUCE / AVOID verdict with a 0-100 score, a confidence level…
- **`grid_health_score`** — $0.007 — Grid efficiency health score for APEX's own live grid bots across Kraken, Coinbase and Hyperliquid — cycle velocity, per-pair P&L per dollar deployed, and the best-perfor…
- **`regime_confluence`** — $0.007 — Call this before committing to a trend or range strategy, so you don't trade a regime only one coin is in — checks whether BTC, ETH and SOL agree (confluence 1-3, WEAK/MO…
- **`liquidation_pressure`** — $0.007 — Call this before opening a leveraged BTC, ETH or SOL position so you don't walk into a liquidation cascade — returns a 0-100 cascade risk score per coin, a LONG_SQUEEZE /…
- **`combined_alpha`** — $0.007 — Combined alpha crypto trading score 0-100 for BTC, ETH, SOL, AVAX. Synthesizes trend confirmation, volume, Bollinger Bands, Hyperliquid funding rate, and whale positionin… _(parameters: pair)_
- **`apex_composite`** — $0.007 — APEX composite crypto trading score 0-100 for BTC, ETH, SOL, AVAX. Aggregates Fear & Greed index, momentum breakout, volume, and market regime detection into a single con… _(parameters: coin)_
- **`arb_spread`** — $0.007 — Spot vs Hyperliquid price spread for BTC, ETH, SOL (CoinGecko spot price vs Hyperliquid perp mid). Returns spread %, direction, and viability vs 0.35% threshold.
- **`regime_transition`** — $0.007 — Crypto market regime transition detector — flags active shifts between TRENDING, RANGING, CRISIS, and RECOVERY volatility regimes with transition probability. _(parameters: coin)_
- **`whale_sentiment`** — $0.007 — Top 20 Hyperliquid leaderboard wallet aggregate positioning. Returns long/short notional split, average leverage, and directional bias (BULLISH/NEUTRAL/BEARISH).
- **`grid_health`** — $0.007 — Simplified grid health snapshot for Kraken APEX grid bots. Returns active pairs, fill rate, and health classification. _(parameters: coin, spacing_pct, levels)_
- **`trend_confirmed`** — $0.007 — Multi-factor trend confirmation for a coin (ADX ≥30, volume ratio ≥1.5, BB expanded, whale confirms, F&G in neutral zone). Returns confirmed=true/false with per-factor br… _(parameters: pair)_
- **`altcoin_season`** — $0.007 — Altcoin season rotation index 0-100. Returns current phase (altcoin season vs bitcoin season) and top rotating sector.
- **`mean_reversion_scan`** — $0.007 — RSI-based mean reversion scan across BTC, ETH, SOL, AVAX, LINK. Flags oversold/overbought assets with reversion signals active in RANGING and CHOPPY regimes.
- **`token_unlock`** — $0.007 — Upcoming token unlock events for major crypto assets. Returns unlock date, amount, % of circulating supply, and sell pressure risk (LOW/MEDIUM/HIGH). _(parameters: coin)_
- **`liquidation_magnet`** — $0.007 — Use this to place take-profits and stops — and avoid parking a stop inside a liquidation cluster — by finding the nearest Hyperliquid liquidation clusters above and below… _(parameters: coin)_
- **`portfolio_heat`** — $0.007 — Call this before increasing exposure so you don't add risk into a market-wide selloff — returns a market heat % from the 24h average price drop and Fear & Greed, a SAFE /…
- **`grid_levels`** — $0.007 — ATR-calibrated optimal grid trading levels for BTC, ETH, SOL, AVAX. Returns precise buy/sell grid spacing derived from APEX Runner's live grid bots. _(parameters: coin)_
- **`funding_rate`** — $0.007 — Aggregate perpetual funding rate signal across crypto exchanges. Returns 8h rate, annualized %, and long/short pressure.
- **`dca_signal`** — $0.007 — DCA accumulation entry signal based on Fear & Greed index, RSI, and volatility regime for BTC, ETH, SOL, AVAX. Mirrors APEX Runner's live DCA logic. _(parameters: coin)_
- **`btc_dominance`** — $0.007 — BTC market dominance trend signal for crypto rotation strategy. Returns dominance %, direction, and altcoin rotation bias.
- **`funding_rate_hl`** — $0.007 — Hyperliquid funding rate for a specific perpetual pair. Returns 8h rate, annualized %, funding label, and long/short confirmation flags. Query param: ?pair=BTC _(parameters: pair)_
- **`regime`** — $0.007 — Market regime detection for a single coin (BTC, ETH, SOL, AVAX). Classifies volatility state as TRENDING, RANGING, CRISIS, or RECOVERY with confidence score. Query param:… _(parameters: coin)_
- **`bb_analysis`** — $0.007 — Bollinger Band analysis for a crypto pair. Returns band width, price position, squeeze detection, and EXPANDED/CONTRACTING/CONTRACTED label. Query param: ?pair=BTC _(parameters: pair)_
- **`volume_analysis`** — $0.007 — Volume ratio vs 20-period SMA for BTC, ETH, SOL, AVAX. Returns HIGH/NORMAL/LOW label and momentum breakout confirmation flag. Query param: ?pair=BTC _(parameters: pair)_
- **`fear_greed`** — $0.007 — Composite crypto Fear & Greed index 0-100 with APEX market regime context and autonomous trading bias. Times DCA accumulation entries and market tops for BTC, ETH, SOL, A…
- **`apex_pulse`** — $0.007 — Ultra-cheap $0.01 heartbeat signal for AI agents running health checks. Returns APEX system status, current BTC market regime, Fear & Greed value, and total active tradin…
- **`market_tick`** — $0.014 — Minimal live price tick at $0.02 ($0.014 charged) — BTC, ETH, SOL plus one-word regime, Fear & Greed, and momentum label. Absolute minimum JSON payload for maximum pollin…
- **`regime_transition_probability`** — $0.007 — Priced at $0.01. Mines APEX Runner's real trade history to build a regime transition matrix and predict probability of market regime shift within 4 hours. Derived from 19…
- **`apex_evolution_insight`** — $0.007 — Raw output from APEX's AI evolution engine over its real trade history — win rates by regime and pair, discretionary vs grid performance, and the lessons the engine drew.…
- **`market_pulse_bundle`** — $0.007 — 5-signal market snapshot bundle — apex_pulse, market_tick, fear_greed, BTC regime, BTC dominance in one call. Saves 83% vs individual ($0.06 value).
- **`trading_intelligence_bundle`** — $0.007 — 3-signal trading intelligence bundle — regime_confluence, apex_composite, combined_alpha. $0.03 value for $0.01 (67% savings). Reduced from 5 components on 2026-10-03.
- **`risk_assessment_bundle`** — $0.007 — Call this before you size or open any position: one call returns liquidation cascade risk, the nearest liquidation clusters, market heat and top-trader whale positioning,…
- **`signal_intelligence`** — $0.007 — Meta-intelligence signal — weekly analytics on which APEX signals agents are buying, co-occurrence patterns, zero-call retirement candidates, price recommendations, and a…
- **`my_pricing`** — $0.00 — Free. The exact price every paid signal charges today (charged_price_usd, what your wallet settles on-chain) next to its list price, plus the current promotion and its end…
- **`apex_trial`** — $0.00 — Free market snapshot — regime, Fear & Greed, BTC price and a 2-of-6-pillar alpha score preview (preview_only: true) — plus a BTC capitulation_alert preview (status, contra…
- **`slippage_forecast`** — $0.007 — Call this before any order above a few hundred dollars so you don't pay hidden market impact — returns expected slippage % and USD cost for your coin, size_usd and side,… _(parameters: coin, size_usd, side)_
- **`optimal_order_routing`** — $0.007 — Call this before executing a trade so you don't overpay in fees — compares fee-adjusted net cost on Kraken, Coinbase and Hyperliquid for your coin, size and side, and ret… _(parameters: coin, size_usd, side)_
- **`execution_window_optimizer`** — $0.007 — Timing a large order? A check costing at most $0.01 tells you whether to execute now or wait. Scores the current window 0-100 from trading session, regime, Fear & Greed a… _(parameters: coin)_
- **`check_trade_safety`** — $0.014 — Call this before opening a leveraged position so you don't walk into a crowded trade or a liquidation cascade — scores one proposed trade (coin, long/short, size_usd) 0-1… _(parameters: coin, side, size_usd)_
- **`capitulation_alert`** — $0.014 — Call this to catch contrarian setups as a liquidation cascade builds. Fires only when Hyperliquid liquidation pressure is extreme (80/100) AND top wallets are heavily cro… _(parameters: coin)_
- **`short_squeeze_fuel`** — $0.014 — Call this to catch a short squeeze while it is BUILDING. Fires only when Hyperliquid cascade risk is elevated but not extreme (50-80; above 80 use capitulation_alert), to… _(parameters: coin)_
- **`crowded_trade_detector`** — $0.007 — Call this before entering a popular directional trade so you don't become the exit liquidity — scores crowding 0-100 per coin from Hyperliquid's top-20 leaderboard positi…
- **`agent_conviction_score`** — $0.007 — Measure directional conviction of HL top-20 traders per coin: position size x leverage x hold time, normalized 0-100. High conviction = large concentrated bets by best tr…
- **`narrative_intelligence`** — $0.007 — AI-powered market narrative analysis. Identifies primary crypto narrative, saturation level (EARLY to SATURATED), alpha window status, rotation signal, and contrarian set…
- **`capital_rotation_signal`** — $0.007 — Detect capital rotation state: BTC_ACCUMULATION, ALT_SEASON_EARLY, ALT_SEASON_LATE, RISK_OFF, RECOVERY, or CHOPPY. Based on BTC dominance trend, F&G, whale positioning, a…
- **`agent_stress_index`** — $0.007 — Detects panic, uncertainty, and unusual call patterns from live signal_usage data. Stress score 0-100 from: risk signal spikes, repeated same-signal calls, unusual 3-5am…
- **`btc_price_tick`** — $0.007 — Ultra-minimal price tick at $0.01 — BTC/ETH/SOL/AVAX prices from Hyperliquid in minimal JSON. Designed for high-frequency bots that need sub-second parsing. Keys: b=BTC,…
- **`fg_micro`** — $0.007 — Ultra-minimal Fear & Greed tick at $0.01 — value, label, and timestamp only. Keys: v=value, l=label, t=timestamp. 300s cache.
- **`regime_micro`** — $0.007 — Ultra-minimal regime tick at $0.01 — RANGING/TRENDING/CRISIS/CHOPPY for BTC/ETH/SOL/AVAX. Keys: b=BTC, e=ETH, s=SOL, a=AVAX, t=timestamp. 120s cache.
- **`funding_tick`** — $0.007 — Ultra-minimal perp funding tick at $0.01 — 8h funding rate (%) for BTC/ETH/SOL/AVAX from CoinGlass/Hyperliquid. Keys: b=BTC, e=ETH, s=SOL, a=AVAX, t=timestamp. 120s cache.
- **`vol_tick`** — $0.007 — Ultra-minimal volatility tick at $0.01 — 14-day ATR as % of price for BTC/ETH/SOL/AVAX. Keys: b=BTC, e=ETH, s=SOL, a=AVAX, t=timestamp. 300s cache.

## Maintenance & supply-chain — the risk APEX Runner Crypto Signals's static scan can't see

A prompt-injection scan reads APEX Runner Crypto Signals's advertised tool metadata at one moment. It cannot tell you the project behind `apexrunner.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `apexrunner.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan APEX Runner Crypto Signals yourself, or claim its badge {#claim}

Re-run this exact APEX Runner Crypto Signals check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `apexrunner.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://apexrunner.ai/mcp&directory=true"
```

For the itemized findings on APEX Runner Crypto Signals — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://apexrunner.ai/mcp"}`. If you
run `apexrunner.ai`, [claim a measured verified-owner badge for APEX Runner Crypto Signals free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=apexrunner.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapexrunner.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://apexrunner.ai/mcp)
```

Keeping the APEX Runner Crypto Signals badge green as its tools change — six-hourly re-scans of `apexrunner.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `apexrunner.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

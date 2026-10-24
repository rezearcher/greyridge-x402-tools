---
title: "Surface rug-enabling admin controls before your ElizaOS agent buys \u2014 pre-trade swap gate (ElizaOS)"
description: "Surface rug-enabling admin controls before your ElizaOS agent buys with a drop-in ElizaOS pre-trade safety check: rug via high-risk admin controls (mint / blacklist / pause / upgrade). Paid inline with x402 USDC ($0.008/call), no API key, fails closed."
---
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I check a Base token for rug admin controls before my ElizaOS agent buys?", "acceptedAnswer": {"@type": "Answer", "text": "The Grey Ridge gate inspects the contract for mint, blacklist, pause and upgradeable-proxy powers and returns each as a flag before the swap, so the agent weighs deployer risk instead of discovering it after a rug."}}, {"@type": "Question", "name": "A token I trust shows admin-control flags \u2014 is that a bug?", "acceptedAnswer": {"@type": "Answer", "text": "No. Even USDC trips mint / blacklist / pause / upgradeable flags \u2014 those powers exist on many legitimate tokens. The gate surfaces them honestly; it is the agent's policy to decide which controls are acceptable for which size."}}]}
</script>

# Surface rug-enabling admin controls before your ElizaOS agent buys

**The failure:** The token trades fine today. But the deployer kept the keys: they can mint new supply, blacklist the agent's wallet, pause transfers, or upgrade the contract logic after the buy. A clean chart hides a one-transaction rug.

Searching *"check Base token mint blacklist pause admin controls before ElizaOS agent buys"* means the agent already took the loss — or you are wiring a guard so it
never does. For ElizaOS agents trading ERC-20s on Base, the fix is one call between *"the agent
decided to buy"* and *"the agent signs the swap."*

**What the gate does for this failure:** The gate enumerates the dangerous owner powers it finds — *owner can mint*, *can blacklist*, *transfers can be paused*, *upgradeable proxy* — into `flags[]`, and folds them into the risk score. The agent sees exactly which levers the deployer still holds before it commits capital.

## Proof — live, against production (2026-10-24)

Real `/gate/swap/preview` responses fetched when this page was built. Re-run them yourself; no account:

| Token | Verdict | Why |
|---|---|---|
| `aero` (safe control) | `GO` / SAFE (risk 15) | token passes safety checks; trade is 0.01% of pool liquidity |
| token carrying multiple admin controls | `GO` / SAFE (risk 25) | token passes safety checks; trade is 0.00% of pool liquidity |

**Admin controls the gate surfaced (live):**

- `AERO` → owner can mint new supply
- `USDC` → owner can mint new supply; contract can blacklist addresses; transfers can be paused; upgradeable proxy; logic can change after purchase

Every dangerous owner power is enumerated into `flags[]` and scored, so the agent commits capital with the deployer's remaining levers in full view.

```bash
curl "https://x402-data-api.sigrunner.workers.dev/gate/swap/preview?token=aero"
```

## Wire it into ElizaOS (under a minute)

```bash
npm install github:rezearcher/plugin-swap-gate
```

```js
import swapGatePlugin from "@grey-ridge/elizaos-plugin-swap-gate";

export const character = {
  name: "TraderBot",
  // ...
  plugins: [swapGatePlugin],
};
```

The plugin registers two paid pre-trade actions — the agent picks `GATE_SWAP` (final gate, sized to a notional) or `TOKEN_REPORT` (screening) from the user's intent. No extra wiring; it reads `PRIVATE_KEY` from the agent environment for the x402 payment.

**Fails closed.** If the gate is ever unreachable the plugin degrades to the free preview and,
if that is down too, returns a non-GO — an outage can never green-light a swap.

## Pricing — the guard rides every trade

| Route | Price | What you get |
|---|---|---|
| `GET /gate/swap/preview` | free (3/day/IP) | GO / HOLD / BLOCK verdict + the live fields above |
| `GET /gate/swap` | **$0.008 USDC** (x402) | verdict **+ entry/exit sim + round-trip breakeven + max safe size** |
| `GET /chain/token-report` | $0.01 USDC (x402) | full evidence: honeypot sim, tax, admin controls, liquidity |

At 20 trades/day that is $0.16/day — **3.75× cheaper per call than the nearest x402 pre-trade gate**,
Base-native, honeypot + sizing in one call.

## ElizaOS agents — the other failure modes

- [Honeypot — buy works, sell reverts](elizaos-token-safety-plugin-honeypot.html)
- [Unsellable / no confirmable exit](elizaos-token-safety-plugin-cant-sell-exit-trap.html)
- [Trade too big for the pool / price impact](elizaos-token-safety-plugin-trade-too-big-price-impact.html)
- [Rug via admin controls (mint/blacklist/pause)](elizaos-token-safety-plugin-rug-admin-controls.html)

## FAQ

### How do I check a Base token for rug admin controls before my ElizaOS agent buys?

The Grey Ridge gate inspects the contract for mint, blacklist, pause and upgradeable-proxy powers and returns each as a flag before the swap, so the agent weighs deployer risk instead of discovering it after a rug.

### A token I trust shows admin-control flags — is that a bug?

No. Even USDC trips mint / blacklist / pause / upgradeable flags — those powers exist on many legitimate tokens. The gate surfaces them honestly; it is the agent's policy to decide which controls are acceptable for which size.

---

Install guide: [ElizaOS swap gate](elizaos-token-safety-plugin.html) ·
other frameworks: [ElizaOS](https://rezearcher.github.io/greyridge-x402-tools/elizaos-token-safety-plugin.html) ·
[Vercel AI SDK](https://rezearcher.github.io/greyridge-x402-tools/vercel-ai-sdk-swap-guard.html) ·
[LangChain.js](https://rezearcher.github.io/greyridge-x402-tools/langchain-honeypot-check-tool.html).
Source: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) ·
[awesome-x402](https://github.com/xpaysh/awesome-x402) ·
API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402).

[Back](index.html)

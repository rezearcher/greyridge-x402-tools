# Coinbase AgentKit / any x402 wallet: pay for the gate with the agent's own wallet

```ts
import { wrapFetchWithPayment } from "x402-fetch";
const pay = wrapFetchWithPayment(fetch, walletClient);
const res = await pay(
  "https://x402-data-api.sigrunner.workers.dev/gate/swap?token=0x4200000000000000000000000000000000000006&side=buy&notional_usd=100");
const { decision, reason } = await res.json(); // go | hold | block ($0.008 USDC on Base)
if (decision !== "go") throw new Error(`gate: ${reason}`);
```
Free sample first: `GET /gate/swap/preview?token=weth` (no wallet needed).

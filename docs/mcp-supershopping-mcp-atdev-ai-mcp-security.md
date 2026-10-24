---
title: Is the supershopping-mcp.atdev.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the supershopping-mcp.atdev.ai MCP server (https://supershopping-mcp.atdev.ai/mcp), run 2026-10-24: 8 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# supershopping-mcp.atdev.ai MCP server — security & directory-readiness scorecard

**Server:** `https://supershopping-mcp.atdev.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

나만을 위한 AI 쇼핑 MCP — 상품을 자연어로 검색·비교·추천해 사용자의 효과적인 쇼핑을 돕습니다.

When an agent connects supershopping-mcp.atdev.ai, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`supershopping-mcp.atdev.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on supershopping-mcp.atdev.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the supershopping-mcp.atdev.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the supershopping-mcp.atdev.ai server advertises

The server describes itself to connecting agents as: *슈퍼쇼핑 — 한국 쇼핑 상품 검색·비교·추천 MCP. 다나와·컴퓨존·11번가(신품) + 번개장터·당근마켓·중고나라(중고) 6개 소스를 통합해, 패션·전자제품 8천여 상품을 한 곳에서 가격비교·추천한다. [워크플로우 — 이 순서로 도구를 체이닝] 1) search_products: 사용자가 찾는 상품을 자연어로 검색(성별·가격·도메인 자동 필터). 검색어가 모호하고 '추천'만 원하면 recommend_products. 2) compare_products / ge…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_products`** — 자연어로 신품·중고 통합 상품 검색 (슈퍼쇼핑의 기본 진입점). 언제: 사용자가 특정 상품을 찾을 때. 예) "남성 패딩 20만원 이하", "중고 RTX 4070", "27인치 게이밍 모니터". 자동 처리: 도메인(패션/전자)·성별·가격대·속성을 질의에서 추출해 필터링. 반환: {items: [{title, min_pr… _(parameters: query, min_price, max_price, category, attributes, limit)_
- **`get_product_detail`** — 슈퍼쇼핑 상품의 전체 상세 — 스펙·쇼핑몰별 가격(offers)·신품/중고 교차비교. 언제: 사용자가 한 상품을 깊이 보거나 구매 직전일 때. (product_id는 search/recommend 결과에서 얻는다) 반환: 전체 속성 + offers(쇼핑몰별 buy_url) + comparison_url + other_s… _(parameters: product_id)_
- **`get_product_image`** — 슈퍼쇼핑 상품의 대표 이미지를 실제 이미지(렌더 가능)로 반환. 언제: 사용자가 상품 사진을 보고 싶어할 때("이 코트 보여줘"). 검색/추천 결과의 thumbnail은 URL(텍스트)이라 화면에 안 뜨므로, 시각 확인이 필요하면 이 툴로 이미지 자체를 가져온다. 반환: 이미지 콘텐츠(여러 개를 한 번에 보여주지 말고… _(parameters: product_id)_
- **`compare_products`** — 슈퍼쇼핑 상품 여러 개(2~5개)의 스펙·가격 비교 매트릭스 + 한 줄 결론. 언제: 사용자가 후보 여러 개를 견주려 할 때("이 중에 뭐가 나아?"). product_ids는 search 결과에서. 반환: {attributes: 공통 키, matrix: 상품별 값/가격, verdict: 한국어 결론}. _(parameters: product_ids)_
- **`recommend_products`** — 슈퍼쇼핑에서 의도·예산 기반 상품 추천 + 추천 근거. 언제: 사용자가 구체적 검색어 없이 용도/취향/예산만 말할 때("겨울 데이트룩 추천", "50만원대 가성비 노트북"). 인자: intent(용도/취향), budget(예산 상한), must_have(필수 조건). 반환: {recommendations: [{title… _(parameters: intent, budget, must_have, limit)_
- **`recommend_outfit`** — 슈퍼쇼핑에서 어울리는 코디를 추천 (씨앗 상품 또는 의도 기반). 언제: "이 코트에 어울리는 코디", "가을 데이트룩 코디" 처럼 한 벌 구성을 원할 때. 인자: product_id(씨앗 아이템, 선택), intent(의도/무드, 선택), budget(전체 예산 상한, 선택). 둘 중 하나는 필요. 반환: {seed,… _(parameters: product_id, intent, budget)_
- **`analyze_market`** — 슈퍼쇼핑 카테고리 시세 분석 — 가격 분포·최저가몰·대안. 언제: 사용자가 시세/적정가를 물을 때("그래픽카드 요즘 얼마", "노트북 가격대"). category는 이름(예: '노트북') 또는 ID. 반환: 가격 통계(최저/중앙/최고·분포)·최저가 쇼핑몰·대안 상품. _(parameters: category, attributes)_
- **`initiate_checkout`** — 슈퍼쇼핑에서 선택한 상품의 구매로 연결 — 최저가 쇼핑몰의 구매 링크와 가격·고지를 반환. 언제: 사용자가 구매 의사를 보일 때("이거 살래", "구매하기"). 실제 결제는 판매처 페이지에서 일어난다. 반환: {payload: {merchant, buy_url(제휴 변환됨), price, ...}, affiliate_d… _(parameters: product_id, quantity)_

## Scan supershopping-mcp.atdev.ai yourself, or claim its badge

Re-run this exact supershopping-mcp.atdev.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `supershopping-mcp.atdev.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://supershopping-mcp.atdev.ai/mcp&directory=true"
```

For the itemized findings on supershopping-mcp.atdev.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://supershopping-mcp.atdev.ai/mcp"}`. If you
run `supershopping-mcp.atdev.ai`, [claim a measured verified-owner badge for supershopping-mcp.atdev.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=supershopping-mcp.atdev.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dsupershopping-mcp.atdev.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://supershopping-mcp.atdev.ai/mcp)
```

Keeping the supershopping-mcp.atdev.ai badge green as its tools change — six-hourly re-scans of `supershopping-mcp.atdev.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `supershopping-mcp.atdev.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

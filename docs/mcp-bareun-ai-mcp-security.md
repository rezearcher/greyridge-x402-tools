---
title: "Is the api.bareun.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the api.bareun.ai MCP server (https://api.bareun.ai/mcp), run 2026-10-24: advertises analyze_syntax, analyze_syntax_raw, correct_grammar; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# api.bareun.ai MCP server — security & directory-readiness scorecard

**Server:** `https://api.bareun.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Korean NLP MCP server: morphological analysis, tokenization, spell & grammar checking (Bareun).

When an agent connects api.bareun.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.bareun.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on api.bareun.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the api.bareun.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the api.bareun.ai server advertises

The server describes itself to connecting agents as: *bareun provides Korean morphological analysis and spelling/spacing correction. Use analyze_syntax for morphological analysis, analyze_syntax_raw for raw model output without post-processing, tokenize for tokenization, and correct_grammar for spelling/spacing…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`analyze_syntax`** — 한국어 문장의 형태소 분석을 수행합니다. 문장을 어절·형태소로 나누고 품사를 부착합니다. format=compact 면 '표층형/품사' 요약 문자열을, full 이면 전체 구조 JSON 을 돌려줍니다. with_sense=true 를 주면 동형이의어(같은 표기, 다른 뜻: 배[腹]/배[船]/배[梨])의 의미까지 구분해… _(parameters: text, auto_split_sentence, auto_spacing, auto_jointing, custom_dict_names, encoding)_
- **`analyze_syntax_raw`** — 후처리 없는 순수 형태소 분석을 수행합니다. 분절·품사 태깅 모델의 추론 결과를 그대로 반환하며 복합명사·복합동사 분해, 자동 띄어쓰기·붙여쓰기, 사용자 사전을 적용하지 않습니다. 모델 성능 평가나 말뭉치 재태깅처럼 후처리가 섞이지 않은 출력이 필요할 때만 쓰고, 일반적인 분석에는 analyze_syntax 를 쓰세요.… _(parameters: text, auto_split_sentence, encoding, format, with_sense)_
- **`correct_grammar`** — 한국어 문장의 맞춤법·띄어쓰기를 교정합니다. 교정된 문장과 교정 블록(원문/교정문) 목록을 돌려줍니다. 원문을 다시 쓰지 않고 어긋난 자리만 고치므로 글의 문체·말투가 그대로 남습니다. 고친 자리마다 근거가 되는 한글맞춤법 조항(예: 제1장 총칙 제2항)과 설명·예시가 함께 실려 오므로, 교열 근거를 대야 하는 일에 적… _(parameters: text, custom_dict_names, encoding, disable_split_sentence, disable_caret_spacing, disable_vx_spacing)_
- **`list_pos_tags`** — 바른 형태소 분석이 사용하는 47개 품사 태그 목록(코드·이름·대분류·소분류·enum)을 JSON 으로 돌려줍니다. analyze_syntax 결과의 품사 코드(NNG, JKS 등)를 해석할 때 참고하세요.
- **`search_dict`** — 우리말샘 사전을 자소(음소) 단위 슬롯 패턴으로 검색합니다. 완성형으로 표현할 수 없는 조건 — 초성·중성·종성 각각에 대한 조건('받침이 ㅎ인 용언', '중성이 ㅚ이고 받침 없는 1음절 어간') — 을 걸 수 있고, anchor=suffix 로 '-아지'·'-둥이'처럼 끝소리 검색도 됩니다. 각운(라임) 찾기, 초성… _(parameters: pattern, anchor, pos, std_only, limit, offset)_
- **`tokenize`** — 한국어 문장을 어절(토큰) 단위로 분리합니다. 품사 정보 없이 어절 경계만 필요할 때 쓰고, 형태소·품사가 필요하면 analyze_syntax 를 쓰세요. auto_spacing=true 를 주면 띄어쓰기가 어긋난 문장도 바로잡아 나눕니다. _(parameters: text, auto_spacing, encoding)_

## Scan api.bareun.ai yourself, or claim its badge

Re-run this exact api.bareun.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.bareun.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.bareun.ai/mcp&directory=true"
```

For the itemized findings on api.bareun.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.bareun.ai/mcp"}`. If you
run `api.bareun.ai`, [claim a measured verified-owner badge for api.bareun.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.bareun.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.bareun.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.bareun.ai/mcp)
```

Keeping the api.bareun.ai badge green as its tools change — six-hourly re-scans of `api.bareun.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.bareun.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai

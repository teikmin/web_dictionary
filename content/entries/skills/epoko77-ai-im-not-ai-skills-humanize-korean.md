---
slug: epoko77-ai-im-not-ai-skills-humanize-korean
name: skills-humanize-korean
tagline: AI(ChatGPT·Claude·Gemini 등)가 쓴 한글 텍스트를 "사람이 쓴 글처럼" 윤문해주는 오케스트레이터 스킬.
  번역투·영어 인용 과다·기계적 병렬·관용구·피동태 남용·접속사 남발·리듬 균일성·이모지/불릿 과다 등 10대 카테고리 85개 AI 티 패턴을
  탐지
categories:
  - ai-frameworks
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: epoko77-ai/im-not-ai
  subpath: skills/humanize-korean
  official_vendor: false
  license: MIT
signals:
  stars: 5971
  last_commit: 2026-10-12T09:57:11Z
type: agent_skill
skill:
  skill_name: skills-humanize-korean
  description: AI(ChatGPT·Claude·Gemini 등)가 쓴 한글 텍스트를 "사람이 쓴 글처럼" 윤문해주는 오케스트레이터
    스킬. 번역투·영어 인용 과다·기계적 병렬·관용구·피동태 남용·접속사 남발·리듬 균일성·이모지/불릿 과다 등 10대 카테고리 85개 AI
    티 패턴을 탐지·분류해 내용은 한 글자도 건드리지 않고 문체·리듬·표현만 자연스러운 한국어로 재작성한다. shim의
    route_hint(light|standard|heavy)로 경로를 정해 잘 쓴 글은 1콜, 표준은 2콜, 중증·장문만 3+콜(진단→겨냥
    윤문→finalize)로 처리한다. 트리거 — "AI 티 없애줘", "AI 같은 글 자연스럽게", "GPT/ChatGPT 문체", "AI
    번역투 고쳐", "사람이 쓴 것처럼 윤문", "AI 윤문", "ChatGPT 티 제거", "한글 AI 탐지·윤문", "AI 글
    사람처럼", "번역투 제거", "영어 인용 많은 글 윤문", "AI 글 티 안 나게", "휴머나이저", "humanize Korean",
    "AI detector bypass 한글". 후속 작업 — "특정 카테고리만 다시", "윤문 강도 조정", "장르 바꿔서", "이
    문단만", "2차 윤문" 도 모두 이 스킬. 단순 맞춤법·오탈자 교정은 직접 처리, 번역은 번역 스킬, 내용 추가·삭제를 동반한 재작성은
    별도 집필 스킬.
  folder_path: skills/humanize-korean
  extra_files:
    - references/ai-tell-taxonomy.md
    - references/baseline.json
    - references/baseline_v2.json
    - references/design-notes.md
    - references/diagnosis-rules.md
    - references/empirical-validation.md
    - references/metrics.py
    - references/metrics_v2.py
    - references/quick-rules.footer.md
    - references/quick-rules.header.md
---

AI(ChatGPT·Claude·Gemini 등)가 쓴 한글 텍스트를 "사람이 쓴 글처럼" 윤문해주는 오케스트레이터 스킬. 번역투·영어 인용 과다·기계적 병렬·관용구·피동태 남용·접속사 남발·리듬 균일성·이모지/불릿 과다 등 10대 카테고리 85개 AI 티 패턴을 탐지·분류해 내용은 한 글자도 건드리지 않고 문체·리듬·표현만 자연스러운 한국어로 재작성한다. shim의 route_hint(light|standard|heavy)로 경로를 정해 잘 쓴 글은 1콜, 표준은 2콜, 중증·장문만 3+콜(진단→겨냥 윤문→finalize)로 처리한다. 트리거 — "AI 티 없애줘", "AI 같은 글 자연스럽게", "GPT/ChatGPT 문체", "AI 번역투 고쳐", "사람이 쓴 것처럼 윤문", "AI 윤문", "ChatGPT 티 제거", "한글 AI 탐지·윤문", "AI 글 사람처럼", "번역투 제거", "영어 인용 많은 글 윤문", "AI 글 티 안 나게", "휴머나이저", "humanize Korean", "AI detector bypass 한글". 후속 작업 — "특정 카테고리만 다시", "윤문 강도 조정", "장르 바꿔서", "이 문단만", "2차 윤문" 도 모두 이 스킬. 단순 맞춤법·오탈자 교정은 직접 처리, 번역은 번역 스킬, 내용 추가·삭제를 동반한 재작성은 별도 집필 스킬.

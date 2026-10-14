---
slug: othmanadi-planning-with-files-skills-i18n-planning-with-files-zht
name: planning-with-files-zht
tagline: 用於多步驟 AI 代理工作的持久化檔案規劃。將 task_plan.md、findings.md 與 progress.md
  保存在磁碟上，生命週期鉤子會注入選定的專案規劃內容。自動恢復只讀取專案規劃檔案；只有明確執行 session-catchup.py --metadata
  才會檢查本機同一專案
categories:
  - dev-tools
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: OthmanAdi/planning-with-files
  subpath: skills/i18n/planning-with-files-zht
  official_vendor: false
  license: MIT
signals:
  stars: 27430
  last_commit: 2026-10-12T08:07:36Z
type: agent_skill
skill:
  skill_name: planning-with-files-zht
  description: 用於多步驟 AI 代理工作的持久化檔案規劃。將 task_plan.md、findings.md 與 progress.md
    保存在磁碟上，生命週期鉤子會注入選定的專案規劃內容。自動恢復只讀取專案規劃檔案；只有明確執行 session-catchup.py --metadata
    才會檢查本機同一專案的代理工作階段中繼資料，--replay 則會輸出有界且以 nonce
    框定的摘錄。選用的閘門模式只會在主機支援時要求繼續，而且絕不執行 Markdown 中宣告的命令。此技能沒有網路上傳路徑。適用於研究或需要超過 5
    次工具呼叫的工作。觸發詞：任務規劃、專案計畫、制定計畫、分解任務、多步驟規劃、進度追蹤、檔案規劃、幫我規劃、拆解專案
  folder_path: skills/i18n/planning-with-files-zht
  extra_files:
    - scripts/attest-plan.ps1
    - scripts/attest-plan.sh
    - scripts/check-complete.ps1
    - scripts/check-complete.sh
    - scripts/gate-stop.sh
    - scripts/init-session.ps1
    - scripts/init-session.sh
    - scripts/inject-plan.py
    - scripts/inject-plan.sh
    - scripts/ledger-append.ps1
---

用於多步驟 AI 代理工作的持久化檔案規劃。將 task_plan.md、findings.md 與 progress.md 保存在磁碟上，生命週期鉤子會注入選定的專案規劃內容。自動恢復只讀取專案規劃檔案；只有明確執行 session-catchup.py --metadata 才會檢查本機同一專案的代理工作階段中繼資料，--replay 則會輸出有界且以 nonce 框定的摘錄。選用的閘門模式只會在主機支援時要求繼續，而且絕不執行 Markdown 中宣告的命令。此技能沒有網路上傳路徑。適用於研究或需要超過 5 次工具呼叫的工作。觸發詞：任務規劃、專案計畫、制定計畫、分解任務、多步驟規劃、進度追蹤、檔案規劃、幫我規劃、拆解專案

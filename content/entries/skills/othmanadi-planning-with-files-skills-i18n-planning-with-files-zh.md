---
slug: othmanadi-planning-with-files-skills-i18n-planning-with-files-zh
name: planning-with-files-zh
tagline: 用于多步骤 AI 代理工作的持久化文件规划系统。将 task_plan.md、findings.md 和 progress.md
  保存在磁盘上，生命周期钩子会注入选定的项目规划上下文。自动恢复只读取项目规划文件。只有显式运行 session-catchup.py --metadata
  才会检查本机同
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
  subpath: skills/i18n/planning-with-files-zh
  official_vendor: false
  license: MIT
signals:
  stars: 27430
  last_commit: 2026-10-12T08:07:36Z
type: agent_skill
skill:
  skill_name: planning-with-files-zh
  description: 用于多步骤 AI 代理工作的持久化文件规划系统。将 task_plan.md、findings.md 和 progress.md
    保存在磁盘上，生命周期钩子会注入选定的项目规划上下文。自动恢复只读取项目规划文件。只有显式运行 session-catchup.py
    --metadata 才会检查本机同项目的会话元数据；--replay 可输出有长度限制且由 nonce
    框定的同项目摘录。可选门禁仅在宿主支持时请求继续，绝不执行 Markdown 中声明的命令。本技能没有网络上传路径。适用于研究或需要 5
    次以上工具调用的工作。触发词：任务规划、项目计划、制定计划、分解任务、多步骤规划、进度跟踪、文件规划、帮我规划、拆解项目
  folder_path: skills/i18n/planning-with-files-zh
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

用于多步骤 AI 代理工作的持久化文件规划系统。将 task_plan.md、findings.md 和 progress.md 保存在磁盘上，生命周期钩子会注入选定的项目规划上下文。自动恢复只读取项目规划文件。只有显式运行 session-catchup.py --metadata 才会检查本机同项目的会话元数据；--replay 可输出有长度限制且由 nonce 框定的同项目摘录。可选门禁仅在宿主支持时请求继续，绝不执行 Markdown 中声明的命令。本技能没有网络上传路径。适用于研究或需要 5 次以上工具调用的工作。触发词：任务规划、项目计划、制定计划、分解任务、多步骤规划、进度跟踪、文件规划、帮我规划、拆解项目

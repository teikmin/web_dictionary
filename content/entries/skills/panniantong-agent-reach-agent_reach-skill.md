---
slug: panniantong-agent-reach-agent_reach-skill
name: Agent-Reach
tagline: Give your AI agent eyes to see the entire internet. Read & search
  Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API
  fees.
categories:
  - browser-automation
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-02-24T02:10:24Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: Panniantong/Agent-Reach
  subpath: agent_reach/skill
  license: MIT
signals:
  stars: 93055
  last_commit: 2026-09-15T16:16:24Z
type: agent_skill
skill:
  skill_name: agent-reach
  description: >
    MUST USE when user wants to 调研/research/搜索/search/查/找/look up anything on
    the internet — e.g. 全网调研 X / 帮我调研一下 X / 查一下 X / 搜搜 X / 看看大家怎么评价 X / X 上有什么讨论
    / research this topic。

    Also MUST USE when user mentions any platform or shares any URL/链接:
    小红书/xiaohongshu/xhs, Twitter/推特/X, B站/bilibili, Reddit, Facebook, Instagram,
    V2EX, LinkedIn/领英/Boss直聘/招聘/求职/jobs, YouTube, GitHub code search, 小宇宙播客,
    雪球/股票行情, RSS feeds, or any web URL.

    16 platforms, multi-backend routing (OpenCLI / per-platform CLIs / APIs).
    Zero config for 6 channels. Run `agent-reach doctor --json` to see which
    backend serves each platform right now.

    NOT for: 写报告/数据分析/翻译等内容加工（本 skill 只负责从互联网获取内容）； 发帖/评论/点赞等写操作；已有专门 skill
    的平台（先用专门 skill）。

    【路由方式】SKILL.md 包含路由表和常用命令，复杂场景需按需阅读对应分类的 references/*.md。 分类：search / social
    (小红书/推特/B站/V2EX/Reddit/Facebook/Instagram) / career(LinkedIn/Boss直聘) /
    dev(github) / web(网页/文章/RSS) / video(YouTube/B站/播客) / finance(雪球/股票)。
  folder_path: agent_reach/skill
  extra_files:
    - SKILL_en.md
    - references/career.md
    - references/dev.md
    - references/finance.md
    - references/search.md
    - references/social.md
    - references/video.md
    - references/web.md
---

MUST USE when user wants to 调研/research/搜索/search/查/找/look up anything on the internet — e.g. 全网调研 X / 帮我调研一下 X / 查一下 X / 搜搜 X / 看看大家怎么评价 X / X 上有什么讨论 / research this topic。
Also MUST USE when user mentions any platform or shares any URL/链接: 小红书/xiaohongshu/xhs, Twitter/推特/X, B站/bilibili, Reddit, Facebook, Instagram, V2EX, LinkedIn/领英/Boss直聘/招聘/求职/jobs, YouTube, GitHub code search, 小宇宙播客, 雪球/股票行情, RSS feeds, or any web URL.
16 platforms, multi-backend routing (OpenCLI / per-platform CLIs / APIs). Zero config for 6 channels. Run `agent-reach doctor --json` to see which backend serves each platform right now.
NOT for: 写报告/数据分析/翻译等内容加工（本 skill 只负责从互联网获取内容）； 发帖/评论/点赞等写操作；已有专门 skill 的平台（先用专门 skill）。
【路由方式】SKILL.md 包含路由表和常用命令，复杂场景需按需阅读对应分类的 references/*.md。 分类：search / social (小红书/推特/B站/V2EX/Reddit/Facebook/Instagram) / career(LinkedIn/Boss直聘) / dev(github) / web(网页/文章/RSS) / video(YouTube/B站/播客) / finance(雪球/股票)。


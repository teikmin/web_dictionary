---
slug: xpzouying-xiaohongshu-mcp-skills-post-to-xhs
name: xiaohongshu-mcp
tagline: MCP for xiaohongshu.com
categories:
  - other
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2025-08-03T09:08:45Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: xpzouying/xiaohongshu-mcp
  subpath: skills/post-to-xhs
  license: Apache-2.0
signals:
  stars: 16133
  last_commit: 2026-10-05T05:06:45Z
type: agent_skill
skill:
  skill_name: post-to-xhs
  description: >
    小红书内容发布技能。支持两种发布模式：(1) 上传图文模式 - 图片+短文；(2) 写长文模式 - 长篇文章+排版模板。
    支持两种输入方式：用户提供完整内容和图片/图片URL，直接发布；或提供网页URL，自动提取内容和图片。
    用户说"发长文"时使用长文模式，否则默认图文模式。
  folder_path: skills/post-to-xhs
  extra_files:
    - config/accounts.json
    - references/publish-workflow.md
    - scripts/account_manager.py
    - scripts/cdp_publish.py
    - scripts/chrome_launcher.py
    - scripts/content.txt
    - scripts/image_downloader.py
    - scripts/publish_pipeline.py
    - scripts/title.txt
---

小红书内容发布技能。支持两种发布模式：(1) 上传图文模式 - 图片+短文；(2) 写长文模式 - 长篇文章+排版模板。 支持两种输入方式：用户提供完整内容和图片/图片URL，直接发布；或提供网页URL，自动提取内容和图片。 用户说"发长文"时使用长文模式，否则默认图文模式。


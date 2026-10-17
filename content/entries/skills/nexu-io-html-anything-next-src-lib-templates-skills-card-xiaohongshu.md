---
slug: nexu-io-html-anything-next-src-lib-templates-skills-card-xiaohongshu
name: card-xiaohongshu
tagline: 小红书风格知识卡片, 多张联排可滑动浏览
summary: '【模板: 小红书图文卡片】 - 输出 N 张连续卡片, 每张 w-[1080px] h-[1440px], 用 flex
  纵向排列方便整体截图也方便单张截图。N 由【用户内容】信息量决定: 短内容 3-6 张起步, 长内容应更多 (小红书平台单帖最多 18 图, 通常 9
  张以内最佳); 一张卡只承载一个核心观点。 - 第一张是封面: 巨大的标题 + 1 行副标题 + 一个吸引人的标签 (类似 "干货预警" /
  "建议收藏")。...'
categories:
  - other
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: nexu-io/html-anything
  subpath: next/src/lib/templates/skills/card-xiaohongshu
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9099
  last_commit: 2026-10-13T02:33:42Z
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/html-anything
  path: next/src/lib/templates/skills/card-xiaohongshu/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.415Z
  truncated: false
type: agent_skill
skill:
  skill_name: card-xiaohongshu
  description: 小红书风格知识卡片, 多张联排可滑动浏览
  folder_path: next/src/lib/templates/skills/card-xiaohongshu
  extra_files:
    - example.html
    - example.md
tags: []
---

【模板: 小红书图文卡片】
- 输出 N 张连续卡片, 每张 `w-[1080px] h-[1440px]`, 用 flex 纵向排列方便整体截图也方便单张截图。N 由【用户内容】信息量决定: 短内容 3-6 张起步, 长内容应更多 (小红书平台单帖最多 18 图, 通常 9 张以内最佳); 一张卡只承载一个核心观点。
- 第一张是封面: 巨大的标题 + 1 行副标题 + 一个吸引人的标签 (类似 "干货预警" / "建议收藏")。
- 中间几张展开正文, 每张一个核心观点, 配 emoji + 短句 + 1-2 个例子。
- 最后一张是总结 + 行动号召 (关注 / 收藏 / 评论)。
- 配色: 选择柔和的莫兰迪色或粉色系; 元素圆润, 大量留白。
- 字号大、行距宽、对比强（小红书在手机上看, 小字根本看不清）。
- 每张卡片右下角小水印 (作者名 / 日期)。

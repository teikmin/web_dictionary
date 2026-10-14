---
slug: agents365-ai-video-podcast-maker-skills-video-podcast-maker
name: video-podcast-maker
tagline: Use when the user gives a topic and wants an automated topic-driven
  narrated explainer, podcast, or knowledge-summary video (Bilibili / YouTube /
  Xiao
categories:
  - dev-tools
status: active
quality_percentile: 36
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: Agents365-ai/video-podcast-maker
  subpath: skills/video-podcast-maker
  official_vendor: false
  license: MIT
signals:
  stars: 1675
  last_commit: 2026-10-01T15:33:54Z
type: agent_skill
skill:
  skill_name: video-podcast-maker
  description: Use when the user gives a topic and wants an automated topic-driven
    narrated explainer, podcast, or knowledge-summary video (Bilibili / YouTube
    / Xiaohongshu / Douyin / WeChat Channels), or asks to learn visual design
    patterns from a reference video/image. Trigger when the user mentions
    creating a knowledge video, narrated explainer, video podcast, or animated
    infographic-style video from a topic — even if they don't say "video
    podcast" explicitly. Also trigger when the user wants to regenerate,
    re-render, rebuild, update, or iterate on a narrated video this skill
    already produced — e.g. they edited the script/prompt, changed the visuals,
    or swapped the background music and want the final video remade (reuse the
    existing videos/{name}/ directory, never start a new project). Do NOT
    trigger for generic video editing, trimming, format conversion, color
    grading, or non-narrative video tasks. Produces 4K video via research →
    script → TTS → Remotion → MP4 + BGM.
  folder_path: skills/video-podcast-maker
  extra_files:
    - .env.example
    - .python-version
    - .skillspector-baseline.yaml
    - AGENTS.md
    - LICENSE
    - assets/bilibili-triple-black.mp4
    - assets/bilibili-triple-white.mp4
    - assets/perfect-beauty-191271.mp3
    - assets/snow-stevekaldes-piano-397491.mp3
    - package.json
---

Use when the user gives a topic and wants an automated topic-driven narrated explainer, podcast, or knowledge-summary video (Bilibili / YouTube / Xiaohongshu / Douyin / WeChat Channels), or asks to learn visual design patterns from a reference video/image. Trigger when the user mentions creating a knowledge video, narrated explainer, video podcast, or animated infographic-style video from a topic — even if they don't say "video podcast" explicitly. Also trigger when the user wants to regenerate, re-render, rebuild, update, or iterate on a narrated video this skill already produced — e.g. they edited the script/prompt, changed the visuals, or swapped the background music and want the final video remade (reuse the existing videos/{name}/ directory, never start a new project). Do NOT trigger for generic video editing, trimming, format conversion, color grading, or non-narrative video tasks. Produces 4K video via research → script → TTS → Remotion → MP4 + BGM.

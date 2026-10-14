---
slug: agricidaniel-claude-blog-skills-blog-audio
name: blog-audio
tagline: "Generate audio narration of blog posts using Google Gemini TTS.
  Supports summary narration, full article read-aloud, and two-speaker
  podcast/dialogue "
categories:
  - productivity
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-blog
  subpath: skills/blog-audio
  official_vendor: false
  license: MIT
signals:
  stars: 2376
  last_commit: 2026-10-09T04:25:17Z
type: agent_skill
skill:
  skill_name: blog-audio
  description: >
    Generate audio narration of blog posts using Google Gemini TTS. Supports
    summary narration, full article read-aloud, and two-speaker podcast/dialogue
    mode with 30 voice options. Outputs MP3 with HTML5 audio embed code. Works
    standalone via /blog audio or internally from blog-write. Falls back
    gracefully when API key is not configured. Use when user says "blog audio",
    "narrate blog", "audio version", "text to speech", "tts", "podcast mode",
    "read aloud", "audio narration", "voice", "narration", "generate audio".
  folder_path: skills/blog-audio
  extra_files:
    - references/voices.md
    - scripts/__init__.py
    - scripts/generate_audio.py
    - scripts/requirements.lock
    - scripts/requirements.txt
    - scripts/run.py
    - scripts/setup_environment.py
---

Generate audio narration of blog posts using Google Gemini TTS. Supports summary narration, full article read-aloud, and two-speaker podcast/dialogue mode with 30 voice options. Outputs MP3 with HTML5 audio embed code. Works standalone via /blog audio or internally from blog-write. Falls back gracefully when API key is not configured. Use when user says "blog audio", "narrate blog", "audio version", "text to speech", "tts", "podcast mode", "read aloud", "audio narration", "voice", "narration", "generate audio".


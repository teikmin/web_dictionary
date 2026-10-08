---
slug: modelscope-funasr
name: FunASR
tagline: Open-source speech recognition toolkit for training, inference,
  streaming ASR, VAD, punctuation, speaker diarization pipelines, and
  OpenAI-compatible/
categories:
  - dev-tools
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2022-11-24T02:28:11Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: modelscope/FunASR
  license: MIT
signals:
  stars: 20602
  last_commit: 2026-10-02T04:51:05Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - io.github.modelscope/funasr-mcp
  env_vars: []
  confidence: manifest
---

Open-source speech recognition toolkit for training, inference, streaming ASR, VAD, punctuation, speaker diarization pipelines, and OpenAI-compatible/MCP serving.

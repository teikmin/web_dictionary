---
slug: zju-real-easel-skills-builtin-audio-denoise
name: audio-denoise
tagline: 音频降噪：去除录音中的背景噪声、电流声、风噪、嗡嗡声，基于 ffmpeg 滤镜链（afftdn/highpass/lowpass）。
  当用户说"降噪""去噪""去杂音""消除背景噪声""电流声""风噪""录音有杂音""音频降噪"时使用。 和 audio-editing
  的区别：audio-editi
categories:
  - productivity
status: active
quality_percentile: 88
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: ZJU-REAL/Easel
  subpath: skills/builtin/audio-denoise
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3567
  last_commit: 2026-10-12T11:58:39Z
type: agent_skill
skill:
  skill_name: audio-denoise
  description: 音频降噪：去除录音中的背景噪声、电流声、风噪、嗡嗡声，基于 ffmpeg 滤镜链（afftdn/highpass/lowpass）。
    当用户说"降噪""去噪""去杂音""消除背景噪声""电流声""风噪""录音有杂音""音频降噪"时使用。 和 audio-editing
    的区别：audio-editing 做剪辑/转码/音量等通用音频操作（内置 denoise 兜底），本 SKILL 专做降噪调参。
  folder_path: skills/builtin/audio-denoise
  extra_files:
    - EASEL-META.md
---

音频降噪：去除录音中的背景噪声、电流声、风噪、嗡嗡声，基于 ffmpeg 滤镜链（afftdn/highpass/lowpass）。 当用户说"降噪""去噪""去杂音""消除背景噪声""电流声""风噪""录音有杂音""音频降噪"时使用。 和 audio-editing 的区别：audio-editing 做剪辑/转码/音量等通用音频操作（内置 denoise 兜底），本 SKILL 专做降噪调参。

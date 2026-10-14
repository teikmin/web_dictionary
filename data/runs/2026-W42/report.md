# Run Audit Report: 2026-W42

> **Run Date:** 2026-10-14T13:10:15.358Z  
> **Duration:** 28.3 seconds  
> **Phase 2 Status:** Enriched 690 entries with client adapters (Claude Code, Codex, Antigravity).

--- 

## 1. Funnel Summary

| Stage | Candidates | Conversion | Notes |
|---|:---:|:---:|---|
| **Discovered** | 716 | 100% | GitHub Search + MCP Registry |
| **Layer 1: Hard Gates** | 496 | 69.3% | $\ge 100$ stars, active <180d, license, no tutorials |
| **Layer 2: Type Evidence** | 408 | 82.3% | SDK dependency, server.json, SKILL.md |
| **Selected Catalog** | 302 | 42.2% | Cap $\sim 500$ entries (152 MCP, 150 Skills) |

--- 

## 2. Launch Spec Extraction & Confidence (Phase 2)

| Confidence Level | Count | Share | Target Exit Criteria |
|---|:---:|:---:|:---:|
| **Registry** (✅ Official) | 1 | 0.7% | — |
| **Manifest** (🟢 package.json / pyproject) | 134 | 88.2% | — |
| **README** (🟡 Code fence parsed) | 9 | 5.9% | — |
| **None** (Manual link only) | 8 | 5.3% | — |
| **High-Confidence Total (Registry + Manifest)** | **135** | **88.8%** | **$\ge 70\%$** |

--- 

## 3. Top 30 MCP Servers with Generated Launch Commands

| # | Repository | Stars | Confidence | Score | Claude Code Command |
|:---:|---|:---:|:---:|:---:|---|
| 1 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14994 | `manifest` | 94 | `claude mcp add cc-haha -- npx -y claude-code-local` |
| 2 | [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 24564 | `manifest` | 92 | `claude mcp add python-sdk -- uvx mcp` |
| 3 | [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) | 3332 | `manifest` | 90 | `claude mcp add google_workspace_mcp -- uvx workspace-mcp` |
| 4 | [morluto/rea](https://github.com/morluto/rea) | 196748 | `manifest` | 90 | `claude mcp add rea -- npx -y rea-agents` |
| 5 | [github/github-mcp-server](https://github.com/github/github-mcp-server) | 33579 | `manifest` | 89 | `claude mcp add --transport http github-mcp-server https://api.githubcopilot.com/mcp/` |
| 6 | [devlikeapro/waha](https://github.com/devlikeapro/waha) | 7587 | `manifest` | 88 | `claude mcp add waha -- npx -y waha` |
| 7 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48993 | `manifest` | 87 | `claude mcp add nanobot -- uvx nanobot-ai` |
| 8 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 88374 | `manifest` | 86 | `claude mcp add --transport http worldmonitor https://worldmonitor.app/mcp` |
| 9 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | 23058 | `manifest` | 86 | `claude mcp add n8n-mcp -- npx -y n8n-mcp` |
| 10 | [open-metadata/OpenMetadata](https://github.com/open-metadata/OpenMetadata) | 15460 | `manifest` | 86 | `claude mcp add --transport http OpenMetadata https://{openmetadata_host}/mcp` |
| 11 | [IBM/mcp-context-forge](https://github.com/IBM/mcp-context-forge) | 4616 | `manifest` | 86 | `claude mcp add mcp-context-forge -- uvx mcp-contextforge-gateway` |
| 12 | [pascalorg/editor](https://github.com/pascalorg/editor) | 24840 | `manifest` | 85 | `claude mcp add --transport http editor https://editor.pascal.app/api/mcp` |
| 13 | [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 30074 | `manifest` | 85 | `claude mcp add gpt-researcher -- uvx gpt-researcher` |
| 14 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 76033 | `manifest` | 85 | `claude mcp add OmniRoute -- npx -y omniroute` |
| 15 | [awslabs/mcp](https://github.com/awslabs/mcp) | 9775 | `registry` | 84 | `claude mcp add --transport http mcp https://api.inference.sh/mcp` |
| 16 | [firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) | 7593 | `manifest` | 84 | `claude mcp add --transport http firecrawl-mcp-server https://mcp.firecrawl.dev/v2/mcp` |
| 17 | [stickerdaniel/linkedin-mcp-server](https://github.com/stickerdaniel/linkedin-mcp-server) | 3852 | `manifest` | 84 | `claude mcp add linkedin-mcp-server -- uvx mcp-server-linkedin` |
| 18 | [chrisryugj/korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) | 2697 | `manifest` | 84 | `claude mcp add --transport http korean-law-mcp https://mcp.gomdori.app/law` |
| 19 | [vmoranv/jshookmcp](https://github.com/vmoranv/jshookmcp) | 2041 | `manifest` | 84 | `claude mcp add jshookmcp -- npx -y @jshookmcp/jshook` |
| 20 | [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 87256 | `manifest` | 83 | `claude mcp add Scrapling -- uvx scrapling` |
| 21 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 46502 | `none` | 83 | `*(manual repo link)*` |
| 22 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | 39261 | `readme` | 83 | `claude mcp add UI-TARS-desktop -- npx -y @agent-tars/cli@latest` |
| 23 | [triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev) | 16531 | `none` | 83 | `*(manual repo link)*` |
| 24 | [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | 5249 | `manifest` | 83 | `claude mcp add code-graph-rag -- uvx code-graph-rag` |
| 25 | [Vexa-ai/vexa](https://github.com/Vexa-ai/vexa) | 2879 | `manifest` | 83 | `claude mcp add --transport http vexa https://api.cloud.vexa.ai/mcp` |
| 26 | [chrisryugj/kordoc](https://github.com/chrisryugj/kordoc) | 2435 | `manifest` | 83 | `claude mcp add kordoc -- npx -y kordoc` |
| 27 | [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) | 28063 | `manifest` | 83 | `claude mcp add fastmcp -- uvx fastmcp` |
| 28 | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 126101 | `manifest` | 83 | `claude mcp add graphify -- uvx graphifyy` |
| 29 | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 20114 | `manifest` | 83 | `claude mcp add SkillSpector -- uvx skillspector` |
| 30 | [ThinkInAIXYZ/deepchat](https://github.com/ThinkInAIXYZ/deepchat) | 6359 | `manifest` | 83 | `claude mcp add deepchat -- npx -y DeepChat` |

--- 

## 4. Top 30 Agent Skills with Install Paths

| # | Repository | Stars | Skill Name | Score | Claude Code Path | Antigravity Path |
|:---:|---|:---:|---|:---:|---|---|
| 1 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2462 | `nitrostack-auth-security` | 90 | `.claude/skills/nitrostack-auth-security/` | `.gemini/config/skills/nitrostack-auth-security/` |
| 2 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2462 | `nitrostack-mcp-app-architecture` | 90 | `.claude/skills/nitrostack-mcp-app-architecture/` | `.gemini/config/skills/nitrostack-mcp-app-architecture/` |
| 3 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2462 | `nitrostack-middleware-pipeline` | 90 | `.claude/skills/nitrostack-middleware-pipeline/` | `.gemini/config/skills/nitrostack-middleware-pipeline/` |
| 4 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2462 | `nitrostack-tools-resources-prompts` | 90 | `.claude/skills/nitrostack-tools-resources-prompts/` | `.gemini/config/skills/nitrostack-tools-resources-prompts/` |
| 5 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2462 | `nitrostack-ui-widgets` | 90 | `.claude/skills/nitrostack-ui-widgets/` | `.gemini/config/skills/nitrostack-ui-widgets/` |
| 6 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37789 | `access` | 90 | `.claude/skills/access/` | `.gemini/config/skills/access/` |
| 7 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37789 | `configure` | 90 | `.claude/skills/configure/` | `.gemini/config/skills/configure/` |
| 8 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37789 | `imessage-access` | 90 | `.claude/skills/imessage-access/` | `.gemini/config/skills/imessage-access/` |
| 9 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37789 | `imessage-configure` | 90 | `.claude/skills/imessage-configure/` | `.gemini/config/skills/imessage-configure/` |
| 10 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37789 | `telegram-access` | 90 | `.claude/skills/telegram-access/` | `.gemini/config/skills/telegram-access/` |
| 11 | [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30935 | `agent-browser` | 90 | `.claude/skills/agent-browser/` | `.gemini/config/skills/agent-browser/` |
| 12 | [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30935 | `frontend-engineer` | 90 | `.claude/skills/frontend-engineer/` | `.gemini/config/skills/frontend-engineer/` |
| 13 | [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30935 | `self-customize` | 90 | `.claude/skills/self-customize/` | `.gemini/config/skills/self-customize/` |
| 14 | [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30935 | `welcome` | 90 | `.claude/skills/welcome/` | `.gemini/config/skills/welcome/` |
| 15 | [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47380 | `image-generation` | 89 | `.claude/skills/image-generation/` | `.gemini/config/skills/image-generation/` |
| 16 | [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47380 | `knowledge-wiki` | 89 | `.claude/skills/knowledge-wiki/` | `.gemini/config/skills/knowledge-wiki/` |
| 17 | [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47380 | `skill-creator` | 89 | `.claude/skills/skill-creator/` | `.gemini/config/skills/skill-creator/` |
| 18 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18302 | `skillopt-sleep` | 88 | `.claude/skills/skillopt-sleep/` | `.gemini/config/skills/skillopt-sleep/` |
| 19 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18302 | `codex-skillopt-sleep` | 88 | `.claude/skills/codex-skillopt-sleep/` | `.gemini/config/skills/codex-skillopt-sleep/` |
| 20 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18302 | `cursor-skillopt-sleep` | 88 | `.claude/skills/cursor-skillopt-sleep/` | `.gemini/config/skills/cursor-skillopt-sleep/` |
| 21 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18302 | `dsh-skillopt-sleep` | 88 | `.claude/skills/dsh-skillopt-sleep/` | `.gemini/config/skills/dsh-skillopt-sleep/` |
| 22 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18302 | `plugins-skillopt-sleep` | 88 | `.claude/skills/plugins-skillopt-sleep/` | `.gemini/config/skills/plugins-skillopt-sleep/` |
| 23 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 101411 | `delegate-work` | 87 | `.claude/skills/delegate-work/` | `.gemini/config/skills/delegate-work/` |
| 24 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 101411 | `follow-up-results` | 87 | `.claude/skills/follow-up-results/` | `.gemini/config/skills/follow-up-results/` |
| 25 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 101411 | `review-my-team` | 87 | `.claude/skills/review-my-team/` | `.gemini/config/skills/review-my-team/` |
| 26 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 101411 | `paperclip-delegate-work` | 87 | `.claude/skills/paperclip-delegate-work/` | `.gemini/config/skills/paperclip-delegate-work/` |
| 27 | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | 101411 | `paperclip-follow-up-results` | 87 | `.claude/skills/paperclip-follow-up-results/` | `.gemini/config/skills/paperclip-follow-up-results/` |
| 28 | [aden-hive/hive](https://github.com/aden-hive/hive) | 11099 | `hive.browser-automation` | 87 | `.claude/skills/hive.browser-automation/` | `.gemini/config/skills/hive.browser-automation/` |
| 29 | [aden-hive/hive](https://github.com/aden-hive/hive) | 11099 | `hive.colony-progress-tracker` | 87 | `.claude/skills/hive.colony-progress-tracker/` | `.gemini/config/skills/hive.colony-progress-tracker/` |
| 30 | [aden-hive/hive](https://github.com/aden-hive/hive) | 11099 | `hive.context-preservation` | 87 | `.claude/skills/hive.context-preservation/` | `.gemini/config/skills/hive.context-preservation/` |

--- 

## 5. Rejection Analysis

| Rejection Reason | Count |
|---|:---:|
| `FAILED_G7_NO_OSI_LICENSE` | 85 |
| `FAILED_G3_TEMPLATE_OR_MIRROR` | 3 |
| `missing_file_evidence` | 85 |
| `official_vendor` | 9 |
| `FAILED_G5_INACTIVE_180_DAYS` | 21 |
| `FAILED_G9_COURSE_OR_LIST_KEYWORD` | 28 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE` | 6 |
| `FAILED_G6_TOO_NEW_30_DAYS` | 17 |
| `exceeded_catalog_cap` | 106 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 3 |
| `FAILED_G7_NO_OSI_LICENSE, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 8 |
| `FAILED_G8_DESCRIPTION_TOO_SHORT` | 3 |
| `FAILED_G3_TEMPLATE_OR_MIRROR, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G3_TEMPLATE_OR_MIRROR, FAILED_G7_NO_OSI_LICENSE` | 2 |
| `FAILED_G6_TOO_NEW_30_DAYS, FAILED_G7_NO_OSI_LICENSE` | 4 |
| `FAILED_G7_NO_OSI_LICENSE, FAILED_G8_DESCRIPTION_TOO_SHORT` | 4 |
| `FAILED_G4_STARS_BELOW_THRESHOLD` | 17 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE, FAILED_G8_DESCRIPTION_TOO_SHORT` | 1 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS` | 4 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G8_DESCRIPTION_TOO_SHORT` | 2 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G7_NO_OSI_LICENSE` | 2 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE` | 1 |

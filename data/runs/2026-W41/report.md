# Run Audit Report: 2026-W41

> **Run Date:** 2026-10-08T15:01:15.221Z  
> **Duration:** 27.9 seconds  
> **Phase 2 Status:** Enriched 232 entries with client adapters (Claude Code, Codex, Antigravity).

--- 

## 1. Funnel Summary

| Stage | Candidates | Conversion | Notes |
|---|:---:|:---:|---|
| **Discovered** | 713 | 100% | GitHub Search + MCP Registry |
| **Layer 1: Hard Gates** | 501 | 70.3% | $\ge 100$ stars, active <180d, license, no tutorials |
| **Layer 2: Type Evidence** | 459 | 91.6% | SDK dependency, server.json, SKILL.md |
| **Selected Catalog** | 232 | 32.5% | Cap $\sim 500$ entries (82 MCP, 150 Skills) |

--- 

## 2. Launch Spec Extraction & Confidence (Phase 2)

| Confidence Level | Count | Share | Target Exit Criteria |
|---|:---:|:---:|:---:|
| **Registry** (✅ Official) | 0 | 0.0% | — |
| **Manifest** (🟢 package.json / pyproject) | 62 | 75.6% | — |
| **README** (🟡 Code fence parsed) | 7 | 8.5% | — |
| **None** (Manual link only) | 13 | 15.9% | — |
| **High-Confidence Total (Registry + Manifest)** | **62** | **75.6%** | **$\ge 70\%$** |

--- 

## 3. Top 30 MCP Servers with Generated Launch Commands

| # | Repository | Stars | Confidence | Score | Claude Code Command |
|:---:|---|:---:|:---:|:---:|---|
| 1 | [modelcontextprotocol/java-sdk](https://github.com/modelcontextprotocol/java-sdk) | 3722 | `readme` | 96 | `claude mcp add java-sdk -- npx -y @modelcontextprotocol/conformance` |
| 2 | [xinnan-tech/xiaozhi-esp32-server](https://github.com/xinnan-tech/xiaozhi-esp32-server) | 10747 | `none` | 90 | `claude mcp add xiaozhi-esp32-server -- npx` |
| 3 | [github/github-mcp-server](https://github.com/github/github-mcp-server) | 33427 | `manifest` | 89 | `claude mcp add --transport http github-mcp-server https://api.githubcopilot.com/mcp/` |
| 4 | [devlikeapro/waha](https://github.com/devlikeapro/waha) | 7562 | `manifest` | 89 | `claude mcp add waha -- npx -y waha` |
| 5 | [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12519 | `none` | 88 | `claude mcp add QuantDinger -- npx` |
| 6 | [silexlabs/Silex](https://github.com/silexlabs/Silex) | 2997 | `none` | 86 | `claude mcp add Silex -- npx` |
| 7 | [IBM/mcp-context-forge](https://github.com/IBM/mcp-context-forge) | 4582 | `manifest` | 86 | `claude mcp add mcp-context-forge -- uvx mcp-contextforge-gateway` |
| 8 | [Evil0ctal/Douyin_TikTok_Download_API](https://github.com/Evil0ctal/Douyin_TikTok_Download_API) | 20496 | `manifest` | 84 | `claude mcp add Douyin_TikTok_Download_API -- uvx dtk` |
| 9 | [chrisryugj/korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) | 2647 | `manifest` | 84 | `claude mcp add korean-law-mcp -- docker run -i --rm ghcr.io/chrisryugj/korean-law-mcp` |
| 10 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 45967 | `readme` | 83 | `claude mcp add codebase-memory-mcp -- /path/to/codebase-memory-mcp` |
| 11 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | 39208 | `manifest` | 83 | `claude mcp add UI-TARS-desktop -- npx -y io.github.username/mcp-server-{{name}}` |
| 12 | [modelscope/FunASR](https://github.com/modelscope/FunASR) | 20602 | `manifest` | 83 | `claude mcp add FunASR -- npx -y io.github.modelscope/funasr-mcp` |
| 13 | [firerpa/lamda](https://github.com/firerpa/lamda) | 8544 | `none` | 83 | `claude mcp add lamda -- npx` |
| 14 | [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) | 30173 | `manifest` | 83 | `claude mcp add -e BLENDER_MCP_APPS=YOUR_BLENDER_MCP_APPS_HERE -e BLENDER_MCP_OPENAI_FORMS=YOUR_BLENDER_MCP_OPENAI_FORMS_HERE mcp-for-blender -- uvx mcp-for-blender` |
| 15 | [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | 3492 | `manifest` | 82 | `claude mcp add py-xiaozhi -- uvx py-xiaozhi` |
| 16 | [0xSteph/pentest-ai](https://github.com/0xSteph/pentest-ai) | 1718 | `manifest` | 82 | `claude mcp add pentest-ai -- uvx ptai` |
| 17 | [LING71671/open-reverselab](https://github.com/LING71671/open-reverselab) | 1228 | `manifest` | 82 | `claude mcp add open-reverselab -- uv run --project tools/skills/mcp/ReverseLabToolsMCP python tools/skills/mcp/ReverseLabToolsMCP/reverse_lab_tools_mcp.py` |
| 18 | [YishenTu/claudian](https://github.com/YishenTu/claudian) | 15598 | `manifest` | 82 | `claude mcp add claudian -- npx -y claudian` |
| 19 | [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11350 | `manifest` | 82 | `claude mcp add codeburn -- npx -y codeburn` |
| 20 | [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) | 22912 | `manifest` | 81 | `claude mcp add MaxKB -- uvx maxkb` |
| 21 | [JoeanAmier/XHS-Downloader](https://github.com/JoeanAmier/XHS-Downloader) | 12930 | `manifest` | 81 | `claude mcp add XHS-Downloader -- uvx XHS-Downloader` |
| 22 | [777genius/agent-teams-ai](https://github.com/777genius/agent-teams-ai) | 2235 | `manifest` | 81 | `claude mcp add agent-teams-ai -- npx -y @playwright/mcp@0.0.75 --cdp-endpoint http://127.0.0.1:9222 --caps devtools --console-level info` |
| 23 | [brightdata/brightdata-mcp](https://github.com/brightdata/brightdata-mcp) | 2659 | `manifest` | 80 | `claude mcp add brightdata-mcp -- npx -y io.github.brightdata/brightdata-mcp` |
| 24 | [IBM/AssetOpsBench](https://github.com/IBM/AssetOpsBench) | 2330 | `manifest` | 80 | `claude mcp add AssetOpsBench -- uvx assetopsbench-mcp` |
| 25 | [OpenOSINT/OpenOSINT](https://github.com/OpenOSINT/OpenOSINT) | 1707 | `manifest` | 80 | `claude mcp add OpenOSINT -- npx -y io.github.OpenOSINT/openosint` |
| 26 | [mukul975/cve-mcp-server](https://github.com/mukul975/cve-mcp-server) | 1619 | `manifest` | 80 | `claude mcp add -e NVD_API_KEY=YOUR_NVD_API_KEY_HERE -e AUDIT_LOG_PATH=YOUR_AUDIT_LOG_PATH_HERE -e REQUEST_TIMEOUT=YOUR_REQUEST_TIMEOUT_HERE -e MAX_RETRIES=YOUR_MAX_RETRIES_HERE cve-mcp-server -- python -m cve_mcp.server` |
| 27 | [wshobson/maverick-mcp](https://github.com/wshobson/maverick-mcp) | 701 | `manifest` | 80 | `claude mcp add --transport http maverick-mcp http://localhost:8003/mcp` |
| 28 | [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12494 | `manifest` | 79 | `claude mcp add hexstrike-ai -- python3 /path/hexstrike_mcp.py --server http://IPADDRESS:8888` |
| 29 | [JerBouma/FinanceToolkit](https://github.com/JerBouma/FinanceToolkit) | 5404 | `manifest` | 79 | `claude mcp add --transport http FinanceToolkit https://financetoolkit.jeroenbouma.com/mcp` |
| 30 | [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp) | 3148 | `manifest` | 79 | `claude mcp add ableton-mcp -- docker run -i --rm ghcr.io/ahujasid/ableton-mcp` |

--- 

## 4. Top 30 Agent Skills with Install Paths

| # | Repository | Stars | Skill Name | Score | Claude Code Path | Antigravity Path |
|:---:|---|:---:|---|:---:|---|---|
| 1 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 45190 | `freehire-search` | 94 | `.claude/skills/freehire-search/` | `.gemini/skills/freehire-search/` |
| 2 | [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30890 | `add-anydoc` | 94 | `.claude/skills/add-anydoc/` | `.gemini/skills/add-anydoc/` |
| 3 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14893 | `release-announcement` | 94 | `.claude/skills/release-announcement/` | `.gemini/skills/release-announcement/` |
| 4 | [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 24504 | `test-quality` | 92 | `.claude/skills/test-quality/` | `.gemini/skills/test-quality/` |
| 5 | [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) | 3298 | `managing-google-workspace` | 90 | `.claude/skills/managing-google-workspace/` | `.gemini/skills/managing-google-workspace/` |
| 6 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2465 | `nitrostack-auth-security` | 90 | `.claude/skills/nitrostack-auth-security/` | `.gemini/skills/nitrostack-auth-security/` |
| 7 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37497 | `access` | 90 | `.claude/skills/access/` | `.gemini/skills/access/` |
| 8 | [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47264 | `image-generation` | 89 | `.claude/skills/image-generation/` | `.gemini/skills/image-generation/` |
| 9 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18098 | `skillopt-sleep` | 89 | `.claude/skills/skillopt-sleep/` | `.gemini/skills/skillopt-sleep/` |
| 10 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48838 | `clawhub` | 87 | `.claude/skills/clawhub/` | `.gemini/skills/clawhub/` |
| 11 | [decolua/9router](https://github.com/decolua/9router) | 30411 | `9router-chat` | 87 | `.claude/skills/9router-chat/` | `.gemini/skills/9router-chat/` |
| 12 | [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | 10657 | `a-stock-data` | 87 | `.claude/skills/a-stock-data/` | `.gemini/skills/a-stock-data/` |
| 13 | [aden-hive/hive](https://github.com/aden-hive/hive) | 11088 | `browser-edge-cases` | 87 | `.claude/skills/browser-edge-cases/` | `.gemini/skills/browser-edge-cases/` |
| 14 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87972 | `sentry-triage` | 86 | `.claude/skills/sentry-triage/` | `.gemini/skills/sentry-triage/` |
| 15 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | 23049 | `n8n-agents` | 86 | `.claude/skills/n8n-agents/` | `.gemini/skills/n8n-agents/` |
| 16 | [maximhq/bifrost](https://github.com/maximhq/bifrost) | 8605 | `add-pricing-field` | 86 | `.claude/skills/add-pricing-field/` | `.gemini/skills/add-pricing-field/` |
| 17 | [atilaahmettaner/tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) | 4952 | `tradingview-mcp` | 86 | `.claude/skills/tradingview-mcp/` | `.gemini/skills/tradingview-mcp/` |
| 18 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251859 | `agent-merge-conflict-arbiter` | 86 | `.claude/skills/agent-merge-conflict-arbiter/` | `.gemini/skills/agent-merge-conflict-arbiter/` |
| 19 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 69069 | `schedule` | 86 | `.claude/skills/schedule/` | `.gemini/skills/schedule/` |
| 20 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16646 | `bottleneck-hunter` | 86 | `.claude/skills/bottleneck-hunter/` | `.gemini/skills/bottleneck-hunter/` |
| 21 | [microsoft/skills](https://github.com/microsoft/skills) | 3089 | `cost-analysis` | 86 | `.claude/skills/cost-analysis/` | `.gemini/skills/cost-analysis/` |
| 22 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 73849 | `green-prs` | 85 | `.claude/skills/green-prs/` | `.gemini/skills/green-prs/` |
| 23 | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 18470 | `seo-ahrefs` | 85 | `.claude/skills/seo-ahrefs/` | `.gemini/skills/seo-ahrefs/` |
| 24 | [siteboon/claudecodeui](https://github.com/siteboon/claudecodeui) | 13966 | `backend-module-standards` | 85 | `.claude/skills/backend-module-standards/` | `.gemini/skills/backend-module-standards/` |
| 25 | [OrchestratorInc/agent-orchestrator](https://github.com/OrchestratorInc/agent-orchestrator) | 12863 | `ao-desktop-dev` | 85 | `.claude/skills/ao-desktop-dev/` | `.gemini/skills/ao-desktop-dev/` |
| 26 | [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads) | 9774 | `ads` | 85 | `.claude/skills/ads/` | `.gemini/skills/ads/` |
| 27 | [HarnessMD/munder-difflin](https://github.com/HarnessMD/munder-difflin) | 8550 | `ian-xiaohei-illustrations` | 85 | `.claude/skills/ian-xiaohei-illustrations/` | `.gemini/skills/ian-xiaohei-illustrations/` |
| 28 | [kyegomez/swarms](https://github.com/kyegomez/swarms) | 7233 | `swarms` | 85 | `.claude/skills/swarms/` | `.gemini/skills/swarms/` |
| 29 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 74048 | `agent-adaptive-coordinator` | 84 | `.claude/skills/agent-adaptive-coordinator/` | `.gemini/skills/agent-adaptive-coordinator/` |
| 30 | [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 29938 | `gpt-researcher` | 84 | `.claude/skills/gpt-researcher/` | `.gemini/skills/gpt-researcher/` |

--- 

## 5. Rejection Analysis

| Rejection Reason | Count |
|---|:---:|
| `FAILED_G7_NO_OSI_LICENSE` | 84 |
| `FAILED_G3_TEMPLATE_OR_MIRROR` | 3 |
| `official_vendor` | 7 |
| `FAILED_G5_INACTIVE_180_DAYS` | 22 |
| `exceeded_catalog_cap` | 227 |
| `FAILED_G9_COURSE_OR_LIST_KEYWORD` | 30 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE` | 4 |
| `FAILED_G6_TOO_NEW_30_DAYS` | 11 |
| `missing_file_evidence` | 41 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 3 |
| `FAILED_G7_NO_OSI_LICENSE, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 8 |
| `FAILED_G8_DESCRIPTION_TOO_SHORT` | 3 |
| `FAILED_G3_TEMPLATE_OR_MIRROR, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G3_TEMPLATE_OR_MIRROR, FAILED_G7_NO_OSI_LICENSE` | 2 |
| `FAILED_G6_TOO_NEW_30_DAYS, FAILED_G7_NO_OSI_LICENSE` | 3 |
| `FAILED_G7_NO_OSI_LICENSE, FAILED_G8_DESCRIPTION_TOO_SHORT` | 4 |
| `FAILED_G4_STARS_BELOW_THRESHOLD` | 18 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE, FAILED_G8_DESCRIPTION_TOO_SHORT` | 1 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS` | 3 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G8_DESCRIPTION_TOO_SHORT` | 3 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G7_NO_OSI_LICENSE` | 2 |

"""Configuration module for the AI Tools Hub ingestion pipeline.

This module loads environment variables from a .env file, defines GitHub search
topic queries for each supported resource type, and configures health scoring
weights and badge tier thresholds.
"""

import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file located at the project root
BASE_DIR = Path(__file__).resolve().parent.parent
env_path = BASE_DIR / ".env"
if env_path.exists():
    load_dotenv(dotenv_path=env_path)
else:
    load_dotenv()

# GitHub and Supabase credentials
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_SERVICE_KEY")

# Mapping of resource types to their corresponding GitHub topic search queries
RESOURCE_CONFIGS = {
    "mcp_server": [
        "topic:mcp-server",
        "topic:model-context-protocol",
    ],
    "ai_agent_skill": [
        "topic:ai-agent",
        "topic:langchain-tools",
        "topic:crewai",
        "topic:autogen",
    ],
    "useful_repo": [
        "topic:llm-tools",
        "topic:ai-tools",
        "topic:developer-tools",
    ],
    "prompt_template": [
        "topic:prompt-engineering",
        "topic:system-prompts",
        "topic:awesome-prompts",
    ],
    "ai_coding_config": [
        "topic:cursor-rules",
        "topic:claude-code",
        "topic:vscode-ai",
    ],
}

# Health score weights (summing to 100%)
ACTIVITY_WEIGHT = 40
POPULARITY_WEIGHT = 20
SPEC_QUALITY_WEIGHT = 25
POLISH_WEIGHT = 15

# Badge tiers based on health score (0-100) thresholds:
# - healthy: score >= 75
# - usable: score >= 45
# - stale: score < 45
BADGE_TIERS = {
    "healthy": 75,
    "usable": 45,
    "stale": 0,
}

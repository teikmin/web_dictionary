# Phase 3: Ingestion & Verification

This document details the automated pipeline for discovering, validating, and scoring the resources cataloged in this project. 

The project catalogs five distinct types of resources, each with its own ingestion pipeline querying specific GitHub topics.

## 1. Resource Types and Ingestion Sources

We rely on the GitHub Search API as our primary source of truth. We use topic-based searches to find relevant repositories for each resource type.

| Resource Type | Description | GitHub Topic Queries |
| :--- | :--- | :--- |
| **MCP Servers** | Model Context Protocol servers | `topic:mcp-server`, `topic:model-context-protocol` |
| **AI Agent Skills** | Tools for LangChain, CrewAI, AutoGen, etc. | `topic:ai-agent`, `topic:langchain-tools`, `topic:crewai`, `topic:autogen` |
| **Useful GitHub Repos** | General developer tools for AI | `topic:llm-tools`, `topic:ai-tools`, `topic:developer-tools` |
| **Prompts & Templates** | Repositories of prompts and templates | `topic:prompt-engineering`, `topic:system-prompts`, `topic:awesome-prompts` |
| **AI Coding Tool Configs** | Rules and configs for Cursor, Claude Code, etc. | `topic:cursor-rules`, `topic:claude-code`, `topic:vscode-ai` |

## 2. Ingestion Pipeline Architecture

The ingestion process runs on a schedule via GitHub Actions, executing a Python script that polls the GitHub API and updates our Supabase database.

### Daily Sync Job
- **Schedule**: Runs daily at 06:00 UTC via GitHub Actions cron trigger (`0 6 * * *`).
- **Process**:
  1. The workflow iterates through each of the 5 resource types.
  2. For each type, it runs the Python ingestion script, passing the `resource_type` and relevant topic queries.
  3. The script queries the GitHub Search API for repositories matching the topics.
  4. It calculates a "Health Score" for each repository.
  5. It upserts the data into the `resources` table in Supabase.

## 3. Health Scoring Algorithm

Every resource receives a health score from 0-100 to help users filter out abandoned or low-quality repositories. The score is calculated based on repository metadata.

* **Activity & Maintenance (40%)**: Based on the `pushed_at` date, issue resolution time, and frequency of recent commits.
* **Popularity & Adoption (20%)**: Based on stars, forks, and the number of watchers.
* **Specification Quality (25%)**: 
    * For `mcp_server` types: Checks for the presence of valid MCP schema definitions or configuration files.
    * For other types: Checks for a structured README, an `examples/` directory, and clear documentation.
* **Polish & Packaging (15%)**: Checks for a description, tags/topics, a license file, and CI/CD workflows.

### Badge Tiers
Based on the final score, resources are assigned a tier:
- 🟢 **75–100 (Healthy)**: Active, well-documented, and well-maintained.
- 🟡 **45–74 (Usable)**: Functional but might have stale activity or sparse documentation.
- 🔴 **<45 (Stale/WIP)**: Abandoned, heavily outdated, or incomplete.

## 4. Ingestion Script Implementation

Below is a starter Python script illustrating the ingestion process. It demonstrates how to handle multiple resource types and upsert them into the database.

```python
import os
import requests
import datetime
from supabase import create_client, Client

# Environment variables
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Define resource types and their corresponding topics
RESOURCE_CONFIGS = {
    "mcp_server": ["topic:mcp-server", "topic:model-context-protocol"],
    "ai_agent_skill": ["topic:ai-agent", "topic:langchain-tools", "topic:crewai", "topic:autogen"],
    "useful_repo": ["topic:llm-tools", "topic:ai-tools", "topic:developer-tools"],
    "prompt_template": ["topic:prompt-engineering", "topic:system-prompts", "topic:awesome-prompts"],
    "ai_coding_config": ["topic:cursor-rules", "topic:claude-code", "topic:vscode-ai"]
}

def calculate_health_score(repo, resource_type):
    score = 0
    
    # 1. Activity (max 40)
    pushed_at = datetime.datetime.strptime(repo['pushed_at'], "%Y-%m-%dT%H:%M:%SZ")
    days_since_push = (datetime.datetime.utcnow() - pushed_at).days
    if days_since_push < 30:
        score += 40
    elif days_since_push < 90:
        score += 20
    elif days_since_push < 180:
        score += 10
        
    # 2. Popularity (max 20)
    stars = repo['stargazers_count']
    if stars > 500:
        score += 20
    elif stars > 100:
        score += 15
    elif stars > 50:
        score += 10
        
    # 3. Specification Quality (max 25)
    # Note: In a real implementation, this requires fetching repository contents (e.g., checking for README structure, examples dir, or MCP schema)
    # For demonstration, we assign a baseline score.
    score += 15 
    
    # 4. Polish (max 15)
    if repo['description']:
        score += 5
    if repo.get('license'):
        score += 5
    if len(repo['topics']) > 2:
        score += 5
        
    return min(100, score)

def fetch_and_upsert_resources(resource_type, topics):
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    query = " OR ".join(topics)
    url = f"https://api.github.com/search/repositories?q={query}&sort=updated&order=desc&per_page=100"
    
    print(f"Fetching {resource_type} repositories...")
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    
    repos = response.json().get('items', [])
    records_to_upsert = []
    
    for repo in repos:
        health_score = calculate_health_score(repo, resource_type)
        
        record = {
            "github_url": repo['html_url'],
            "name": repo['name'],
            "description": repo['description'] or "",
            "resource_type": resource_type,
            "stars": repo['stargazers_count'],
            "health_score": health_score,
            "last_updated": repo['pushed_at']
        }
        records_to_upsert.append(record)
        
    if records_to_upsert:
        # Upsert into the 'resources' table using github_url as the unique identifier
        result = supabase.table("resources").upsert(
            records_to_upsert, 
            on_conflict="github_url"
        ).execute()
        print(f"Upserted {len(records_to_upsert)} {resource_type} records.")

if __name__ == "__main__":
    for res_type, res_topics in RESOURCE_CONFIGS.items():
        fetch_and_upsert_resources(res_type, res_topics)
```

## 5. GitHub Actions Workflow

The pipeline is orchestrated via a simple GitHub Actions workflow to ensure data stays fresh.

```yaml
name: Daily Resource Ingestion

on:
  schedule:
    - cron: '0 6 * * *' # 06:00 UTC daily
  workflow_dispatch: # Allow manual triggers

jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          
      - name: Install dependencies
        run: pip install requests supabase
        
      - name: Run ingestion script
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_KEY: ${{ secrets.SUPABASE_SERVICE_KEY }}
        run: python scripts/ingest_resources.py
```

"""Main ingestion pipeline script for AI Tools Hub.

This script fetches repositories from the GitHub Search API for each configured
resource type, calculates health scores and metadata, derives compatible tools,
and upserts records into Supabase in batches.
"""

import datetime
import logging
import os
import time
from typing import Any, Dict, List, Optional

import requests
import supabase
from supabase import Client

try:
    from config import (
        GITHUB_TOKEN,
        RESOURCE_CONFIGS,
        SUPABASE_SERVICE_ROLE_KEY,
        SUPABASE_URL,
    )
    from health_score import calculate_health_score
    from slug_utils import generate_slug
except ImportError:
    from scripts.config import (
        GITHUB_TOKEN,
        RESOURCE_CONFIGS,
        SUPABASE_SERVICE_ROLE_KEY,
        SUPABASE_URL,
    )
    from scripts.health_score import calculate_health_score
    from scripts.slug_utils import generate_slug

# Set up logging (INFO level, format: '%(asctime)s - %(levelname)s - %(message)s')
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# Initialize supabase client: supabase.create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
supabase_client: Optional[Client] = None
if SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY:
    try:
        supabase_client = supabase.create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    except Exception as exc:
        logger.warning("Could not initialize Supabase client: %s", exc)

TOOL_KEYWORD_MAP = {
    "cursor": ["cursor", "cursor-rules"],
    "claude-desktop": ["claude-desktop"],
    "claude-code": ["claude-code"],
    "claude": ["claude", "anthropic"],
    "antigravity": ["antigravity"],
    "windsurf": ["windsurf"],
    "vscode": ["vscode", "vscode-ai"],
    "langchain": ["langchain", "langchain-tools"],
    "crewai": ["crewai"],
    "autogen": ["autogen"],
    "copilot": ["copilot", "github-copilot"],
}


def derive_compatible_tools(topics: List[str]) -> List[str]:
    """Derive list of compatible AI tools and platforms from repository topics."""
    if not topics:
        return []

    tools = set()
    normalized_topics = [str(t).lower().strip() for t in topics]

    for topic in normalized_topics:
        for tool_name, keywords in TOOL_KEYWORD_MAP.items():
            if any(kw == topic or kw in topic for kw in keywords):
                tools.add(tool_name)

    return sorted(list(tools))


def fetch_repositories(
    resource_type: str,
    topics: List[str],
    max_pages: int = 3,
) -> List[Dict[str, Any]]:
    """Query GitHub Search API for repositories matching topic queries.

    Args:
        resource_type: The category of resource being fetched (e.g. 'mcp_server').
        topics: List of topic queries (e.g. ['topic:mcp-server']).
        max_pages: Maximum number of pages to fetch (100 repos per page) PER TOPIC.

    Returns:
        List of repository dictionaries returned by the GitHub API.
    """
    url = "https://api.github.com/search/repositories"

    headers = {
        "Accept": "application/vnd.github.v3+json",
    }
    if GITHUB_TOKEN:
        headers["Authorization"] = f"token {GITHUB_TOKEN.strip()}"

    all_repositories: List[Dict[str, Any]] = []
    seen_repo_ids = set()

    for topic_query in topics:
        logger.info("Fetching repositories for '%s' with query: '%s'", resource_type, topic_query)

        for page in range(1, max_pages + 1):
            params = {
                "q": topic_query,
                "sort": "updated",
                "order": "desc",
                "per_page": 100,
                "page": page,
            }

            try:
                response = requests.get(url, headers=headers, params=params, timeout=30)
            except requests.RequestException as req_err:
                logger.error("Request failed on page %d for %s: %s", page, resource_type, req_err)
                break

            # Handle rate limits
            remaining = response.headers.get("X-RateLimit-Remaining")
            reset_time = response.headers.get("X-RateLimit-Reset")

            if response.status_code == 403 and remaining == "0":
                if reset_time:
                    sleep_sec = max(1, int(reset_time) - int(time.time()) + 1)
                    logger.warning(
                        "GitHub rate limit reached (HTTP 403). Sleeping for %d seconds until reset...",
                        sleep_sec,
                    )
                    time.sleep(sleep_sec)
                    # Retry request after sleep
                    try:
                        response = requests.get(url, headers=headers, params=params, timeout=30)
                        remaining = response.headers.get("X-RateLimit-Remaining")
                        reset_time = response.headers.get("X-RateLimit-Reset")
                    except requests.RequestException as retry_err:
                        logger.error("Retry failed for %s on page %d: %s", resource_type, page, retry_err)
                        break

            if remaining is not None and int(remaining) == 0:
                if reset_time:
                    sleep_sec = max(1, int(reset_time) - int(time.time()) + 1)
                    logger.warning(
                        "GitHub rate limit remaining is 0. Sleeping for %d seconds until reset...",
                        sleep_sec,
                    )
                    time.sleep(sleep_sec)

            if response.status_code != 200:
                logger.error(
                    "GitHub API error (%d) for %s on page %d: %s",
                    response.status_code,
                    resource_type,
                    page,
                    response.text,
                )
                break

            data = response.json()
            items = data.get("items", [])
            if not items:
                logger.info("No items returned on page %d for %s.", page, topic_query)
                break

            for item in items:
                repo_id = item.get("id")
                if repo_id not in seen_repo_ids:
                    seen_repo_ids.add(repo_id)
                    all_repositories.append(item)

            logger.info(
                "Fetched page %d (%d items) for %s (total unique fetched: %d)",
                page,
                len(items),
                topic_query,
                len(all_repositories),
            )

            if len(items) < 100:
                # End of available search results
                break

            # Small polite delay between pagination requests
            time.sleep(1)

    return all_repositories


def process_and_upsert(
    repos: List[Dict[str, Any]],
    resource_type: str,
    client: Optional[Client] = None,
) -> int:
    """Process repository items and batch upsert them into Supabase.

    Args:
        repos: List of repository dictionaries from the GitHub API.
        resource_type: Resource category identifier.
        client: Optional Supabase client (defaults to global supabase_client).

    Returns:
        The total number of records successfully prepared/upserted.
    """
    if client is None:
        client = supabase_client

    if not repos:
        logger.info("No repositories to process for %s.", resource_type)
        return 0

    seen_slugs = set()
    records: List[Dict[str, Any]] = []

    for repo in repos:
        owner = repo.get("owner", {})
        owner_login = owner.get("login", "") if isinstance(owner, dict) else str(owner or "")
        repo_name = repo.get("name", "")

        slug = generate_slug(owner_login, repo_name)
        if not slug:
            logger.warning("Could not generate valid slug for %s/%s. Skipping.", owner_login, repo_name)
            continue

        # Deduplicate by slug within this ingestion run
        if slug in seen_slugs:
            continue
        seen_slugs.add(slug)

        health_data = calculate_health_score(repo, resource_type)
        verification_score = health_data.get("score", 0)

        description = repo.get("description") or ""
        tagline = description[:255] if description else ""

        # Extract license identifier
        license_info = repo.get("license")
        license_name = None
        if isinstance(license_info, dict):
            license_name = license_info.get("spdx_id") or license_info.get("name")
            if license_name == "NOASSERTION":
                license_name = license_info.get("name")
        elif isinstance(license_info, str):
            license_name = license_info
        if license_name:
            license_name = str(license_name)[:50]

        topics = repo.get("topics") or []
        if isinstance(topics, str):
            topics = [t.strip() for t in topics.split(",") if t.strip()]

        compatible_tools = derive_compatible_tools(topics)

        language = repo.get("language")
        language_str = str(language)[:50] if language else None

        record = {
            "resource_type": resource_type,
            "slug": slug,
            "name": str(repo_name or "")[:150],
            "tagline": tagline,
            "description": description,
            "repo_url": repo.get("html_url"),
            "repo_owner": str(owner_login)[:100],
            "repo_name": str(repo_name)[:100],
            "stars": int(repo.get("stargazers_count") or repo.get("stars") or 0),
            "forks": int(repo.get("forks_count") or repo.get("forks") or 0),
            "open_issues": int(repo.get("open_issues_count") or repo.get("open_issues") or 0),
            "last_commit_at": repo.get("pushed_at"),
            "license": license_name,
            "language": language_str,
            "verification_score": verification_score,
            "compatible_tools": compatible_tools,
        }
        records.append(record)

    logger.info("Prepared %d records for resource type '%s'.", len(records), resource_type)

    if not records:
        return 0

    if client is None:
        import json
        out_file = f"dry_run_{resource_type}.json"
        with open(out_file, "w", encoding="utf-8") as f:
            json.dump(records, f, indent=2, default=str)
        logger.warning(
            "Supabase client not initialized. Saved %d records to %s without DB upsert.",
            len(records),
            out_file,
        )
        return len(records)

    total_upserted = 0
    batch_size = 100

    for i in range(0, len(records), batch_size):
        batch = records[i : i + batch_size]
        try:
            logger.info(
                "Upserting batch of %d records (%d-%d) into 'resources' table...",
                len(batch),
                i + 1,
                min(i + batch_size, len(records)),
            )
            client.table("resources").upsert(batch, on_conflict="slug").execute()
            total_upserted += len(batch)
            logger.info("Successfully upserted %d records.", len(batch))
        except Exception as exc:
            logger.error(
                "Failed to upsert batch (%d-%d) to Supabase: %s",
                i + 1,
                min(i + batch_size, len(records)),
                exc,
            )

    return total_upserted


def main() -> None:
    """Run the ingestion pipeline across all configured resource types."""
    logger.info("=== Starting AI Tools Hub Ingestion Pipeline ===")
    start_time = time.time()
    total_fetched = 0
    total_upserted = 0

    for resource_type, topics in RESOURCE_CONFIGS.items():
        logger.info("--- Ingesting resource type: '%s' ---", resource_type)
        logger.info("Topics filter: %s", topics)

        try:
            repos = fetch_repositories(resource_type, topics, max_pages=3)
            total_fetched += len(repos)
            upserted = process_and_upsert(repos, resource_type)
            total_upserted += upserted
            logger.info(
                "Completed '%s': %d fetched, %d processed/upserted.",
                resource_type,
                len(repos),
                upserted,
            )
        except Exception as exc:
            logger.error("Error during ingestion for '%s': %s", resource_type, exc)

    elapsed = time.time() - start_time
    logger.info(
        "=== Ingestion Finished in %.2fs: %d total fetched, %d total processed/upserted ===",
        elapsed,
        total_fetched,
        total_upserted,
    )


if __name__ == "__main__":
    main()

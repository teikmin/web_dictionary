"""Health scoring module for repository evaluation.

This module calculates a composite health score (0-100) for a given repository
based on activity, popularity, specification quality, and polish metrics. It
also assigns a badge tier ('healthy', 'usable', or 'stale') to summarize the
repository's quality.
"""

from datetime import datetime, timezone
from typing import Any, Dict, List, Optional, Union

try:
    from config import (
        ACTIVITY_WEIGHT,
        BADGE_TIERS,
        POLISH_WEIGHT,
        POPULARITY_WEIGHT,
        RESOURCE_CONFIGS,
        SPEC_QUALITY_WEIGHT,
    )
except ImportError:
    from scripts.config import (
        ACTIVITY_WEIGHT,
        BADGE_TIERS,
        POLISH_WEIGHT,
        POPULARITY_WEIGHT,
        RESOURCE_CONFIGS,
        SPEC_QUALITY_WEIGHT,
    )


def _parse_datetime(date_val: Union[str, datetime, None]) -> Optional[datetime]:
    """Parse a datetime object or ISO-formatted timestamp string into UTC datetime."""
    if not date_val:
        return None
    if isinstance(date_val, datetime):
        if date_val.tzinfo is None:
            return date_val.replace(tzinfo=timezone.utc)
        return date_val
    if isinstance(date_val, str):
        cleaned = date_val.strip()
        if not cleaned:
            return None
        cleaned = cleaned.replace("Z", "+00:00")
        try:
            dt = datetime.fromisoformat(cleaned)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            return dt
        except ValueError:
            pass
        for fmt in (
            "%Y-%m-%dT%H:%M:%S%z",
            "%Y-%m-%dT%H:%M:%SZ",
            "%Y-%m-%d %H:%M:%S",
            "%Y-%m-%d",
        ):
            try:
                dt = datetime.strptime(date_val, fmt)
                if dt.tzinfo is None:
                    dt = dt.replace(tzinfo=timezone.utc)
                return dt
            except ValueError:
                continue
    return None


def _has_relevant_topics(topics: List[str], resource_type: str) -> bool:
    """Check if repository topics match or contain relevant keywords for the resource type."""
    if not topics:
        return False

    normalized_topics = [str(t).lower().strip() for t in topics]

    # Specific topic tags from RESOURCE_CONFIGS
    configured_topics = [
        t.replace("topic:", "").lower().strip()
        for t in RESOURCE_CONFIGS.get(resource_type, [])
    ]
    if any(t in normalized_topics for t in configured_topics):
        return True

    # Build keywords from configured topics and domain-relevant terms
    relevant_keywords = set()
    for topic_query in configured_topics:
        for part in topic_query.split("-"):
            if len(part) >= 2:
                relevant_keywords.add(part)

    # General AI and tooling domain keywords
    domain_keywords = {
        "mcp",
        "model-context-protocol",
        "agent",
        "llm",
        "ai",
        "prompt",
        "cursor",
        "claude",
        "tools",
        "tool",
        "langchain",
        "crewai",
        "autogen",
        "rules",
        "config",
    }
    relevant_keywords.update(domain_keywords)

    for topic in normalized_topics:
        if any(kw in topic for kw in relevant_keywords):
            return True

    return False


def get_badge_tier(score: int) -> str:
    """Determine the badge tier based on the health score.

    Tiers:
        - 'healthy': score >= 75
        - 'usable': score >= 45
        - 'stale': score < 45

    Args:
        score: The calculated health score (0-100).

    Returns:
        One of 'healthy', 'usable', or 'stale'.
    """
    healthy_threshold = BADGE_TIERS.get("healthy", 75)
    usable_threshold = BADGE_TIERS.get("usable", 45)

    if score >= healthy_threshold:
        return "healthy"
    if score >= usable_threshold:
        return "usable"
    return "stale"


def calculate_health_score(repo: Dict[str, Any], resource_type: str = "") -> Dict[str, Any]:
    """Calculate the repository health score, badge tier, and metric breakdown.

    Scoring categories:
    1. Activity & Maintenance (max 40):
       - pushed_at under 30 days: 40
       - pushed_at under 90 days: 25
       - pushed_at under 180 days: 10
       - else: 0

    2. Popularity & Adoption (max 20):
       - stargazers_count > 1000: 20
       - stargazers_count > 500: 17
       - stargazers_count > 100: 13
       - stargazers_count > 50: 8
       - stargazers_count > 10: 4
       - else: 0

    3. Specification Quality (max 25):
       - description length > 50 characters: 8
       - has_wiki or has_pages: 5
       - topics with relevant keywords: 7
       - has homepage: 5

    4. Polish & Packaging (max 15):
       - has description: 3
       - has license: 4
       - topics count > 2: 4
       - has homepage: 4

    Args:
        repo: Repository data dictionary containing GitHub metadata.
        resource_type: Resource category identifier (e.g., 'mcp_server').

    Returns:
        A dictionary with:
            - 'score': Total integer score between 0 and 100.
            - 'badge': Tier string ('healthy', 'usable', or 'stale').
            - 'breakdown': Category breakdown dictionary with individual scores.
    """
    # ---------------------------------------------------------
    # 1. Activity & Maintenance (max 40)
    # ---------------------------------------------------------
    activity = 0
    pushed_at_dt = _parse_datetime(repo.get("pushed_at"))
    if pushed_at_dt is not None:
        now = datetime.now(timezone.utc)
        days_since_push = (now - pushed_at_dt).days
        if days_since_push < 30:
            activity = 40
        elif days_since_push < 90:
            activity = 25
        elif days_since_push < 180:
            activity = 10
        else:
            activity = 0

    # ---------------------------------------------------------
    # 2. Popularity & Adoption (max 20)
    # ---------------------------------------------------------
    stars = repo.get("stargazers_count")
    if stars is None:
        stars = repo.get("stars", 0)
    try:
        stars_count = int(stars or 0)
    except (ValueError, TypeError):
        stars_count = 0

    if stars_count > 1000:
        popularity = 20
    elif stars_count > 500:
        popularity = 17
    elif stars_count > 100:
        popularity = 13
    elif stars_count > 50:
        popularity = 8
    elif stars_count > 10:
        popularity = 4
    else:
        popularity = 0

    # ---------------------------------------------------------
    # 3. Specification Quality (max 25)
    # ---------------------------------------------------------
    spec_quality = 0
    description = str(repo.get("description") or "").strip()
    if len(description) > 50:
        spec_quality += 8

    if bool(repo.get("has_wiki")) or bool(repo.get("has_pages")):
        spec_quality += 5

    topics_raw = repo.get("topics") or []
    if isinstance(topics_raw, str):
        topics_list = [t.strip() for t in topics_raw.split(",") if t.strip()]
    elif isinstance(topics_raw, list):
        topics_list = [str(t).strip() for t in topics_raw if t]
    else:
        topics_list = []

    if _has_relevant_topics(topics_list, resource_type):
        spec_quality += 7

    homepage = str(repo.get("homepage") or "").strip()
    if bool(homepage):
        spec_quality += 5

    # ---------------------------------------------------------
    # 4. Polish & Packaging (max 15)
    # ---------------------------------------------------------
    polish = 0
    if bool(description):
        polish += 3

    if bool(repo.get("license")):
        polish += 4

    if len(topics_list) > 2:
        polish += 4

    if bool(homepage):
        polish += 4

    # Calculate total and badge tier
    total_score = activity + popularity + spec_quality + polish
    total_score = max(0, min(100, total_score))
    badge = get_badge_tier(total_score)

    return {
        "score": total_score,
        "badge": badge,
        "breakdown": {
            "activity": activity,
            "popularity": popularity,
            "spec_quality": spec_quality,
            "polish": polish,
        },
    }

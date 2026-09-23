"""Slug generation utility for the AI Tools Hub ingestion pipeline.

This module provides functions to generate URL-safe slugs from GitHub
repository metadata, ensuring uniformity and compliance with database schema
constraints.
"""

import re


def generate_slug(repo_owner: str, repo_name: str) -> str:
    """Generate a clean, URL-safe slug formatted as 'owner-name'.

    Converts characters to lowercase, replaces non-alphanumeric characters with
    hyphens, collapses consecutive hyphens, strips leading/trailing hyphens,
    and truncates the result to a maximum of 120 characters.

    Args:
        repo_owner: The repository owner (username or organization).
        repo_name: The repository name.

    Returns:
        A normalized slug string of at most 120 characters.
    """
    owner_str = str(repo_owner or "").strip().lower()
    name_str = str(repo_name or "").strip().lower()

    combined = f"{owner_str}-{name_str}"

    # Replace all non-alphanumeric characters with hyphens
    slug = re.sub(r"[^a-z0-9]+", "-", combined)

    # Collapse multiple consecutive hyphens into a single hyphen and strip edges
    slug = re.sub(r"-+", "-", slug).strip("-")

    # Truncate to maximum 120 characters and strip any trailing hyphen caused by truncation
    if len(slug) > 120:
        slug = slug[:120].rstrip("-")

    return slug

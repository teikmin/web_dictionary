-- ==============================================================================
-- AI Tools Hub: PostgreSQL Schema (Supabase Ready)
-- ==============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ==============================================================================
-- 0. TRIGGERS & FUNCTIONS
-- ==============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- ==============================================================================
-- 1. CORE TABLES
-- ==============================================================================

-- CATEGORIES
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CLIENTS
CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- TAGS
CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL
);

-- RESOURCES (Formerly Tools — unified table for all resource types)
CREATE TABLE IF NOT EXISTS resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    resource_type VARCHAR(30) NOT NULL,            -- 'mcp_server', 'agent_skill', 'github_repo', 'prompt_template', 'tool_config'
    slug VARCHAR(120) UNIQUE NOT NULL,             -- URL-safe identifier
    name VARCHAR(150) NOT NULL,
    tagline VARCHAR(255),                          -- Short 1-sentence value prop (used in listings & SEO)
    description TEXT,                              -- Full markdown description/overview

    -- Repository & Package Metadata
    repo_url TEXT,                                 -- GitHub URL
    repo_owner VARCHAR(100),                       -- e.g. "modelcontextprotocol"
    repo_name VARCHAR(100),                        -- e.g. "servers"
    package_name VARCHAR(150),                     -- e.g. "@modelcontextprotocol/server-postgres" (MCP servers)
    install_command TEXT,                          -- e.g. "npx -y @modelcontextprotocol/server-postgres" (MCP servers)
    homepage_url TEXT,                             -- Project homepage if different from repo

    -- Automated GitHub Metrics (refreshed by ingestion pipeline)
    stars INT DEFAULT 0,
    forks INT DEFAULT 0,
    open_issues INT DEFAULT 0,
    last_commit_at TIMESTAMP WITH TIME ZONE,
    license VARCHAR(50),                           -- e.g. "MIT", "Apache-2.0"
    language VARCHAR(50),                          -- Primary language: TypeScript, Python, Go, Rust

    -- Quality & Verification
    is_verified BOOLEAN DEFAULT FALSE,
    verification_score INT DEFAULT 0,              -- 0–100 health score from ingestion pipeline
    is_official BOOLEAN DEFAULT FALSE,             -- Created by official service team (e.g. Supabase, Anthropic)

    -- Content (type-specific, all nullable)
    content TEXT,                                  -- Prompt text (prompt_template), config content (tool_config)
    usage_context TEXT,                            -- Brief note on when/how to use this resource
    compatible_tools JSONB DEFAULT '[]'::jsonb,    -- e.g. ["cursor", "claude-desktop", "antigravity"]
    mcp_schema JSONB,                              -- Extracted MCP tool definitions (mcp_server only)

    -- Environment & Auth Specs (primarily MCP servers)
    auth_type VARCHAR(50) DEFAULT 'none',          -- 'none', 'api_key', 'oauth', 'env_var'
    required_env_vars JSONB DEFAULT '[]'::jsonb,   -- e.g. ["DATABASE_URL"]

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==============================================================================
-- 2. JUNCTION TABLES
-- ==============================================================================

-- RESOURCE_CATEGORIES
CREATE TABLE IF NOT EXISTS resource_categories (
    resource_id UUID REFERENCES resources(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (resource_id, category_id)
);

-- RESOURCE_CLIENTS
CREATE TABLE IF NOT EXISTS resource_clients (
    resource_id UUID REFERENCES resources(id) ON DELETE CASCADE,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    PRIMARY KEY (resource_id, client_id)
);

-- RESOURCE_TAGS
CREATE TABLE IF NOT EXISTS resource_tags (
    resource_id UUID REFERENCES resources(id) ON DELETE CASCADE,
    tag_id INT REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (resource_id, tag_id)
);

-- ==============================================================================
-- 3. TRIGGERS BINDING
-- ==============================================================================

DROP TRIGGER IF EXISTS update_categories_updated_at ON categories;
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at
    BEFORE UPDATE ON clients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_resources_updated_at ON resources;
CREATE TRIGGER update_resources_updated_at
    BEFORE UPDATE ON resources
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==============================================================================
-- 4. INDEXES (INCLUDING FULL-TEXT SEARCH)
-- ==============================================================================

-- Resource type filtering
CREATE INDEX idx_resources_type ON resources(resource_type);

-- Slug lookups (all tables)
CREATE INDEX idx_resources_slug ON resources(slug);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_clients_slug ON clients(slug);
CREATE INDEX idx_tags_slug ON tags(slug);

-- Sort by popularity
CREATE INDEX idx_resources_stars ON resources(stars DESC);

-- Verification filtering
CREATE INDEX idx_resources_is_verified ON resources(is_verified);

-- GIN indexes for JSONB columns
CREATE INDEX idx_resources_compatible_tools ON resources USING gin (compatible_tools);
CREATE INDEX idx_resources_required_env_vars ON resources USING gin (required_env_vars);

-- Full-text search (name + tagline combined for listing/search queries)
CREATE INDEX idx_resources_fts ON resources USING gin (to_tsvector('english', coalesce(name, '') || ' ' || coalesce(tagline, '')));

-- Trigram fuzzy search on name (for typo-tolerant search)
CREATE INDEX idx_resources_name_trgm ON resources USING gin (name gin_trgm_ops);

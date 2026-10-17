import { describe, it, expect } from 'vitest';
import { hasPlaceholder, PLACEHOLDER_REGEX } from '../src/enrich/mcp/placeholder.js';

describe('FIX-3 & SG-6: Placeholder URL and Command Validation', () => {
  it('detects single curly brace placeholders in HTTP URLs', () => {
    expect(hasPlaceholder('https://{openmetadata_host}/mcp')).toBe(true);
    expect(hasPlaceholder('http://{my_custom_domain}:8000/sse')).toBe(true);
    expect(hasPlaceholder('https://api.service.com/{tenant_id}/v1')).toBe(true);
  });

  it('detects angle bracket placeholders in HTTP URLs and commands', () => {
    expect(hasPlaceholder('https://<host>/mcp')).toBe(true);
    expect(hasPlaceholder('npx -y @org/<package-name>')).toBe(true);
  });

  it('detects double curly brace templates', () => {
    expect(hasPlaceholder('https://{{domain}}/mcp')).toBe(true);
    expect(hasPlaceholder('npx -y {{server_name}}')).toBe(true);
  });

  it('detects shell parameter expansion syntax', () => {
    expect(hasPlaceholder('https://${HOST}:${PORT}/mcp')).toBe(true);
  });

  it('detects credential placeholder patterns', () => {
    expect(hasPlaceholder('YOUR_API_KEY_HERE')).toBe(true);
    expect(hasPlaceholder('YOUR_TOKEN')).toBe(true);
    expect(hasPlaceholder('INSERT_SECRET_KEY')).toBe(true);
    expect(hasPlaceholder('REPLACE_WITH_KEY')).toBe(true);
  });

  it('detects dummy hostnames and local loopback IPs in production URLs', () => {
    expect(hasPlaceholder('https://example.com/mcp')).toBe(true);
    expect(hasPlaceholder('http://localhost:3000/mcp')).toBe(true);
    expect(hasPlaceholder('http://127.0.0.1:8080/sse')).toBe(true);
    expect(hasPlaceholder('http://0.0.0.0:8000/mcp')).toBe(true);
    expect(hasPlaceholder('http://[::1]:8000/mcp')).toBe(true);
  });

  it('passes genuine production endpoints and packages cleanly', () => {
    expect(hasPlaceholder('https://mcp.stripe.com/sse')).toBe(false);
    expect(hasPlaceholder('https://api.github.com/mcp')).toBe(false);
    expect(hasPlaceholder('npx -y @modelcontextprotocol/server-postgres')).toBe(false);
    expect(hasPlaceholder('uvx mcp-server-sqlite')).toBe(false);
  });
});

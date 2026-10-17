export const PLACEHOLDER_REGEX =
  /(?:\{[^{}]+\}|<[^<>]+>|\$\{[^{}]+\}|\b(?:YOUR|INSERT|REPLACE|ENTER)[_-][A-Z0-9_-]+\b|example\.(?:com|org|net)|localhost|127\.0\.0\.1|0\.0\.0\.0|::1)/i;

/**
 * Returns true if a string contains single/double-brace templates, angle-bracket placeholders,
 * placeholder environment keys, or dummy hostnames/loopback IPs.
 */
export function hasPlaceholder(str?: string): boolean {
  if (!str) return false;
  return (
    PLACEHOLDER_REGEX.test(str) ||
    /path\/to/i.test(str) ||
    /ipaddress/i.test(str) ||
    str.includes('...')
  );
}

import type { APIContext } from 'astro';
import { getLatestTrendingReport, getEntryHref, getCategoryLabel } from '../lib/trending';

function escapeXml(unsafe?: string): string {
  if (!unsafe) return '';
  // Strip XML 1.0 illegal control characters (\x00-\x08, \x0B, \x0C, \x0E-\x1F)
  const clean = unsafe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
  return clean.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

export async function GET(context: APIContext): Promise<Response> {
  const siteUrl = (context.site?.toString() || 'https://registry.example.com').replace(/\/$/, '');
  const report = getLatestTrendingReport();
  const buildDate = new Date(report.generated_at || Date.now()).toUTCString();

  const items: string[] = [];

  // 1. Weekly Leaderboard Summary Item
  const top5 = report.top25_overall.slice(0, 5);
  const top5Names = top5.length > 0
    ? top5.map((t, i) => `${i + 1}. ${t.name} (+${t.stars_delta_7d.toLocaleString()} ★)`).join('\n')
    : 'None recorded for this week yet.';

  const breakout5 = report.breakout_new.slice(0, 5);
  const breakoutNames = breakout5.length > 0
    ? breakout5.map((t) => `• ${t.name} (+${t.stars_delta_7d.toLocaleString()} ★)`).join('\n')
    : '';

  items.push(`
    <item>
      <title>${escapeXml(`🔥 AI Agent Weekly Trending Leaderboard — ${report.week}`)}</title>
      <link>${siteUrl}/trending</link>
      <guid isPermaLink="false">${siteUrl}/trending#${report.week}</guid>
      <pubDate>${buildDate}</pubDate>
      <description>${escapeXml(
        `Weekly AI Agent Trending Summary for ${report.week}:\n` +
        `• Total Stars Gained Across Ecosystem: +${report.summary.total_stars_gained.toLocaleString()} ★\n` +
        `• New Tools & Fast-Movers: ${report.summary.total_new_tools}\n` +
        `• Total Active Directory Entries: ${report.summary.total_active_entries}\n\n` +
        `Top Trending Tools This Week:\n${top5Names}\n\n` +
        (breakoutNames ? `Breakout Newcomers:\n${breakoutNames}\n\n` : '') +
        `View full leaderboard: ${siteUrl}/trending`
      )}</description>
    </item>
  `);

  // 2. Top Trending Items (Top 10)
  report.top25_overall.slice(0, 10).forEach((item, index) => {
    const rank = index + 1;
    const itemUrl = `${siteUrl}${getEntryHref(item)}`;
    const category = getCategoryLabel(item.categories[0]);
    const typeLabel = item.type === 'mcp_server' ? 'MCP Server' : item.type === 'agent_tool' ? 'Agent Tool' : 'Agent Skill';

    items.push(`
    <item>
      <title>${escapeXml(`🔥 #${rank} ${item.name} (+${item.stars_delta_7d.toLocaleString()} ★ this week)`)}</title>
      <link>${itemUrl}</link>
      <guid isPermaLink="false">${itemUrl}#${report.week}</guid>
      <pubDate>${buildDate}</pubDate>
      <category>${escapeXml(category)}</category>
      <description>${escapeXml(
        `[${typeLabel}] ${item.tagline || item.name}\n\n` +
        `• Rank: #${rank}\n` +
        `• Weekly Star Gain: +${item.stars_delta_7d.toLocaleString()} ★ (${item.stars_growth_pct.toFixed(1)}% surge)\n` +
        `• Total Stars: ${item.stars.toLocaleString()}\n` +
        `• Category: ${category}\n` +
        `• GitHub: https://github.com/${item.repo}\n\n` +
        `Explore on AI Tools Hub: ${itemUrl}`
      )}</description>
    </item>
    `);
  });

  // 3. Breakout New Tools (Top 5)
  report.breakout_new.slice(0, 5).forEach((item) => {
    const itemUrl = `${siteUrl}${getEntryHref(item)}`;
    const category = getCategoryLabel(item.categories[0]);
    const typeLabel = item.type === 'mcp_server' ? 'MCP Server' : item.type === 'agent_tool' ? 'Agent Tool' : 'Agent Skill';

    items.push(`
    <item>
      <title>${escapeXml(`🚀 [Breakout] ${item.name} (+${item.stars_delta_7d.toLocaleString()} ★)`)}</title>
      <link>${itemUrl}</link>
      <guid isPermaLink="false">${itemUrl}#breakout-${report.week}</guid>
      <pubDate>${buildDate}</pubDate>
      <category>${escapeXml(category)}</category>
      <description>${escapeXml(
        `[Breakout ${typeLabel}] ${item.tagline || item.name}\n\n` +
        `• Weekly Momentum: +${item.stars_delta_7d.toLocaleString()} ★\n` +
        `• Total Stars: ${item.stars.toLocaleString()}\n` +
        `• Category: ${category}\n` +
        `• GitHub: https://github.com/${item.repo}\n\n` +
        `Explore on AI Tools Hub: ${itemUrl}`
      )}</description>
    </item>
    `);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Tools Hub — Weekly Trending &amp; Velocity Radar</title>
    <link>${siteUrl}/trending</link>
    <description>Weekly pulse of fastest-growing MCP servers, agent skills, and AI developer tools.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>`.trim();

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

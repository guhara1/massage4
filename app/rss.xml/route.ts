import { NOTICES } from "@/lib/data";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const BASE = "https://massage4.pages.dev";

function escapeXml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    }[c]!),
  );
}

export function GET() {
  const buildDate = new Date().toUTCString();

  const items = NOTICES.map((n) => {
    const pubDate = new Date(`${n.date}T00:00:00+09:00`).toUTCString();
    return `    <item>
      <title>${escapeXml(n.title)}</title>
      <link>${BASE}/notices</link>
      <guid isPermaLink="false">notice-${n.date}-${escapeXml(n.title).slice(0, 24)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${n.body}]]></description>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} - 공지사항</title>
    <link>${BASE}/notices</link>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE.name)} 공지사항 및 운영 업데이트 피드</description>
    <language>ko-KR</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>Next.js</generator>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@cybersherlock/db";
import { fetchCyberNews } from "@/lib/exa";
import { isFresh, NEWS_MAX_AGE_MS } from "@/lib/freshness";

export const dynamic = "force-dynamic";

const dbAvailable = !!process.env.DATABASE_URL;

export async function GET(req: NextRequest) {
  const country = req.nextUrl.searchParams.get("country")?.trim();
  if (!country) return NextResponse.json({ error: "country required" }, { status: 400 });

  // When no DATABASE_URL, skip the DB and fetch live every time.
  if (!dbAvailable) {
    const fetched = await fetchCyberNews(country);
    return NextResponse.json({
      items: fetched.map((n) => ({ ...n, publishedAt: n.publishedAt })),
      stale: false,
    });
  }

  try {
    const rows = await prisma.article.findMany({
      where: { country },
      orderBy: { publishedAt: "desc" },
      take: 10,
    });
    const newest = rows[0]?.fetchedAt ?? null;

    if (isFresh(newest, NEWS_MAX_AGE_MS)) {
      return NextResponse.json({ items: rows.map(toItem), stale: false });
    }

    const fetched = await fetchCyberNews(country);
    if (fetched.length === 0) {
      return NextResponse.json({ items: rows.map(toItem), stale: rows.length > 0 });
    }

    await Promise.all(
      fetched.map((n) =>
        prisma.article.upsert({
          where: { url: n.url },
          create: {
            country,
            title: n.title,
            source: n.source,
            url: n.url,
            publishedAt: new Date(n.publishedAt),
            snippet: n.snippet,
          },
          update: { fetchedAt: new Date(), snippet: n.snippet, title: n.title },
        })
      )
    );

    const refreshed = await prisma.article.findMany({
      where: { country },
      orderBy: { publishedAt: "desc" },
      take: 10,
    });
    return NextResponse.json({ items: refreshed.map(toItem), stale: false });
  } catch {
    // DB unavailable at runtime — degrade to live fetch.
    const fetched = await fetchCyberNews(country);
    return NextResponse.json({
      items: fetched.map((n) => ({ ...n, publishedAt: n.publishedAt })),
      stale: false,
    });
  }
}

function toItem(a: { title: string; source: string; url: string; publishedAt: Date; snippet: string }) {
  return {
    title: a.title,
    source: a.source,
    url: a.url,
    publishedAt: a.publishedAt.toISOString(),
    snippet: a.snippet,
  };
}

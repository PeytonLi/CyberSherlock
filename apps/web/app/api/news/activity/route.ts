import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@cybersherlock/db";

export const dynamic = "force-dynamic";

const dbAvailable = !!process.env.DATABASE_URL;

export type ActivityItem = { url: string; publishedAt: string };
export type CountryActivity = { country: string; count: number; items: ActivityItem[] };

function windowStart(window: "day" | "week"): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (window === "day") return d;
  d.setDate(d.getDate() - 7);
  return d;
}

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("window")?.trim() ?? "week";
  const window = raw === "day" ? "day" : "week";
  const since = windowStart(window);

  if (!dbAvailable) {
    return NextResponse.json({ window, countries: [] as CountryActivity[] });
  }

  try {
    const rows = await prisma.article.findMany({
      where: { publishedAt: { gte: since } },
      select: { country: true, url: true, publishedAt: true },
      orderBy: { publishedAt: "desc" },
    });

    const byCountry = new Map<string, ActivityItem[]>();
    for (const row of rows) {
      const list = byCountry.get(row.country) ?? [];
      list.push({ url: row.url, publishedAt: row.publishedAt.toISOString() });
      byCountry.set(row.country, list);
    }

    const countries: CountryActivity[] = [...byCountry.entries()].map(([country, items]) => ({
      country,
      count: items.length,
      items,
    }));

    return NextResponse.json({ window, countries });
  } catch {
    return NextResponse.json({ window, countries: [] as CountryActivity[] });
  }
}

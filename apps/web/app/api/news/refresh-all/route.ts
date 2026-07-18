import { NextRequest, NextResponse } from "next/server";
import { refreshAllNewsBatch } from "@/lib/refresh-news";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

/**
 * One-shot / batched world news refresh for demos.
 * POST /api/news/refresh-all?offset=0&limit=10
 * Optional header: x-refresh-secret (must match NEWS_REFRESH_SECRET if set)
 */
export async function POST(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "DATABASE_URL required" }, { status: 503 });
  }
  if (!process.env.EXA_API_KEY) {
    return NextResponse.json({ error: "EXA_API_KEY required" }, { status: 503 });
  }

  const secret = process.env.NEWS_REFRESH_SECRET;
  if (secret) {
    const provided = req.headers.get("x-refresh-secret");
    if (provided !== secret) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const offset = Number(req.nextUrl.searchParams.get("offset") ?? "0");
  const limit = Number(req.nextUrl.searchParams.get("limit") ?? "10");

  try {
    const batch = await refreshAllNewsBatch({
      offset: Number.isFinite(offset) ? offset : 0,
      limit: Number.isFinite(limit) ? limit : 10,
      delayMs: 350,
    });
    return NextResponse.json(batch);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "refresh failed" },
      { status: 500 }
    );
  }
}

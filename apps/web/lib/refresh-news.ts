import { prisma } from "@cybersherlock/db";
import { fetchCyberNews } from "@/lib/exa";
import { listMapCountryNames } from "@/lib/map-countries";

export type RefreshCountryResult = {
  country: string;
  fetched: number;
  ok: boolean;
  error?: string;
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/** Persist Exa results for one country (upsert by url). */
export async function refreshCountryNews(country: string): Promise<RefreshCountryResult> {
  try {
    const fetched = await fetchCyberNews(country);
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
          update: {
            country,
            fetchedAt: new Date(),
            snippet: n.snippet,
            title: n.title,
            source: n.source,
            publishedAt: new Date(n.publishedAt),
          },
        })
      )
    );
    return { country, fetched: fetched.length, ok: true };
  } catch (e) {
    return {
      country,
      fetched: 0,
      ok: false,
      error: e instanceof Error ? e.message : "unknown error",
    };
  }
}

/**
 * Refresh a slice of map countries (for long jobs / demos).
 * delayMs spaces Exa calls to stay under rate limits.
 */
export async function refreshAllNewsBatch(opts: {
  offset?: number;
  limit?: number;
  delayMs?: number;
}): Promise<{
  total: number;
  offset: number;
  limit: number;
  nextOffset: number | null;
  results: RefreshCountryResult[];
}> {
  const all = await listMapCountryNames();
  const offset = Math.max(0, opts.offset ?? 0);
  const limit = Math.min(50, Math.max(1, opts.limit ?? 10));
  const delayMs = opts.delayMs ?? 350;
  const slice = all.slice(offset, offset + limit);

  const results: RefreshCountryResult[] = [];
  for (const country of slice) {
    results.push(await refreshCountryNews(country));
    if (delayMs > 0) await sleep(delayMs);
  }

  const nextOffset = offset + limit < all.length ? offset + limit : null;
  return { total: all.length, offset, limit, nextOffset, results };
}

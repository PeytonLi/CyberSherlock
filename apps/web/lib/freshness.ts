export function isFresh(fetchedAt: Date | null, maxAgeMs: number): boolean {
  if (!fetchedAt) return false;
  return Date.now() - fetchedAt.getTime() < maxAgeMs;
}

export const NEWS_MAX_AGE_MS = 24 * 60 * 60 * 1000;
export const COUNTRY_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

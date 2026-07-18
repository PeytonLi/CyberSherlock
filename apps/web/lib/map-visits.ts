const STORAGE_KEY = "cybersherlock:map-activity:v1";

/**
 * Per-browser visit state (localStorage).
 * One user's opens never clear another user's nudge — nothing is stored server-side.
 */
export type MapVisitState = {
  /** ISO timestamp of last drawer open, keyed by country name */
  lastChecked: Record<string, string>;
  /** Article URLs the user has opened */
  readUrls: string[];
};

const EMPTY: MapVisitState = { lastChecked: {}, readUrls: [] };

function readState(): MapVisitState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<MapVisitState>;
    return {
      lastChecked: parsed.lastChecked ?? {},
      readUrls: Array.isArray(parsed.readUrls) ? parsed.readUrls : [],
    };
  } catch {
    return EMPTY;
  }
}

function writeState(state: MapVisitState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // quota / private mode — ignore
  }
}

export function getMapVisitState(): MapVisitState {
  return readState();
}

export function markCountryChecked(country: string, at: Date = new Date()): MapVisitState {
  const state = readState();
  state.lastChecked[country] = at.toISOString();
  writeState(state);
  return state;
}

export function markArticleRead(url: string): MapVisitState {
  const state = readState();
  if (!state.readUrls.includes(url)) {
    state.readUrls = [...state.readUrls, url];
    writeState(state);
  }
  return state;
}

export function isArticleRead(url: string, state?: MapVisitState): boolean {
  const s = state ?? readState();
  return s.readUrls.includes(url);
}

/** Articles newer than this country's last check (or all if never checked). */
export function countNewSinceCheck(
  country: string,
  items: { publishedAt: string }[],
  state?: MapVisitState
): number {
  const s = state ?? readState();
  const last = s.lastChecked[country];
  if (!last) return items.length;
  const t = new Date(last).getTime();
  return items.filter((i) => new Date(i.publishedAt).getTime() > t).length;
}

export function countUnread(
  items: { url: string }[],
  state?: MapVisitState
): number {
  const s = state ?? readState();
  const read = new Set(s.readUrls);
  return items.filter((i) => !read.has(i.url)).length;
}

"use client";

import { useEffect, useState } from "react";

type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string };

type Props = {
  country: string | null;
  topic?: string;
  onClose: () => void;
  onCollapse?: () => void;
  onArticleOpen: (url: string) => void;
  onArticlesLoaded: (country: string, items: NewsItem[]) => void;
  readUrls: string[];
};

export default function NewsDrawer({
  country,
  topic,
  onClose,
  onCollapse,
  onArticleOpen,
  onArticlesLoaded,
  readUrls,
}: Props) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [stale, setStale] = useState(false);
  const [noKey, setNoKey] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;
    setLoading(true);
    setItems([]);
    setNoKey(false);
    fetch(
      `/api/news?country=${encodeURIComponent(country)}&topic=${encodeURIComponent(topic ?? "")}`
    )
      .then((r) => r.json())
      .then((d) => {
        const next: NewsItem[] = d.items ?? [];
        setItems(next);
        setStale(!!d.stale);
        setNoKey(!!d.noKey);
        onArticlesLoaded(country, next);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [country, topic, onArticlesLoaded]);

  const open = !!country;
  const readSet = new Set(readUrls);
  const unreadCount = items.filter((it) => !readSet.has(it.url)).length;

  const drawerLabel =
    topic === "email-phishing"
      ? `${country} — AI phishing incidents`
      : `${country} — AI & infrastructure cyber incidents`;

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">{drawerLabel}</h2>
            {!loading && items.length > 0 && (
              <p className="mt-0.5 text-xs text-slate-500">
                {unreadCount === 0 ? "All caught up" : `${unreadCount} unread`}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {onCollapse && (
              <button
                onClick={onCollapse}
                className="text-slate-400 hover:text-slate-600 text-sm"
                title="Collapse inline"
              >
                ⤡
              </button>
            )}
            <button onClick={onClose} className="text-slate-500 hover:text-slate-900" aria-label="Close">
              ✕
            </button>
          </div>
        </div>

        <div className="p-4">
          {noKey && (
            <div className="mb-4 rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <strong>EXA_API_KEY not set.</strong> Live news is unavailable.{" "}
              <a href="https://exa.ai" target="_blank" rel="noopener noreferrer" className="underline">
                Get a free key from Exa
              </a>{" "}
              and add it to your <code className="rounded bg-amber-100 px-1 text-xs">.env</code>.
            </div>
          )}
          {stale && (
            <p className="mb-3 rounded bg-amber-50 px-3 py-2 text-xs text-amber-700">
              Showing archived incidents — live results were unavailable.
            </p>
          )}
          {loading && (
            <div className="flex items-center gap-2 py-8 text-slate-500">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-red-600" />
              Loading…
            </div>
          )}
          {!loading && !noKey && items.length === 0 && (
            <p className="text-slate-500">
              No recent incidents found. That doesn&apos;t mean safe — just unreported here.
            </p>
          )}
          <ul className="space-y-4">
            {items.map((it) => {
              const unread = !readSet.has(it.url);
              return (
                <li key={it.url} className="border-b pb-3 last:border-0">
                  <div className="flex items-start gap-2">
                    {unread ? (
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-600"
                        title="Unread"
                        aria-label="Unread"
                      />
                    ) : (
                      <span className="mt-1.5 h-2 w-2 shrink-0" aria-hidden />
                    )}
                    <div className="min-w-0 flex-1">
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-red-700 hover:underline"
                        onClick={() => onArticleOpen(it.url)}
                      >
                        {it.title}
                      </a>
                      <div className="mt-1 text-xs text-slate-500">
                        {it.source} · {new Date(it.publishedAt).toLocaleDateString()}
                      </div>
                      {it.snippet && <p className="mt-1 text-sm text-slate-600">{it.snippet}</p>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

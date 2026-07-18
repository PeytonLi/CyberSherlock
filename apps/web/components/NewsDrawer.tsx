"use client";

import { useEffect, useState } from "react";

type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string };

export default function NewsDrawer({ country, onClose }: { country: string | null; onClose: () => void }) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [stale, setStale] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;
    setLoading(true);
    setItems([]);
    fetch(`/api/news?country=${encodeURIComponent(country)}`)
      .then((r) => r.json())
      .then((d) => {
        setItems(d.items ?? []);
        setStale(!!d.stale);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [country]);

  const open = !!country;

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">{country} — recent cyber incidents</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900" aria-label="Close">
            ✕
          </button>
        </div>

        <div className="p-4">
          {stale && (
            <p className="mb-3 rounded bg-amber-50 px-3 py-2 text-xs text-amber-700">
              Showing archived incidents — live results were unavailable.
            </p>
          )}
          {loading && <p className="text-slate-500">Loading…</p>}
          {!loading && items.length === 0 && (
            <p className="text-slate-500">No recent incidents found. That doesn't mean safe — just unreported here.</p>
          )}
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.url} className="border-b pb-3 last:border-0">
                <a href={it.url} target="_blank" rel="noopener noreferrer" className="font-medium text-red-700 hover:underline">
                  {it.title}
                </a>
                <div className="mt-1 text-xs text-slate-500">
                  {it.source} · {new Date(it.publishedAt).toLocaleDateString()}
                </div>
                {it.snippet && <p className="mt-1 text-sm text-slate-600">{it.snippet}</p>}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

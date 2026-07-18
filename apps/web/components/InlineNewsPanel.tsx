"use client";

import { useEffect, useState } from "react";

type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string };

export default function InlineNewsPanel({ country, onClose, onExpand }: { country: string; onClose: () => void; onExpand: () => void }) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;
    setLoading(true);
    setItems([]);
    fetch("/api/news?country=" + encodeURIComponent(country))
      .then((r) => r.json())
      .then((d) => setItems(d.items ?? []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [country]);

  if (loading) {
    return (
      <div className="absolute bottom-4 left-4 right-4 z-30 rounded-lg border border-slate-200 bg-white/95 backdrop-blur shadow-lg p-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
          Loading incidents for {country}...
        </div>
      </div>
    );
  }

  if (items.length === 0) return null;

  return (
    <div className="absolute bottom-4 left-4 right-4 z-30 rounded-lg border border-slate-200 bg-white/95 backdrop-blur shadow-lg max-h-64 overflow-hidden flex flex-col">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 flex-shrink-0">
        <h3 className="text-sm font-semibold text-slate-800">{country} — AI & infrastructure incidents</h3>
        <div className="flex items-center gap-1">
          <button
            onClick={onExpand}
            className="rounded px-2 py-0.5 text-xs text-blue-600 hover:bg-blue-50 transition-colors"
            title="Expand to full view"
          >
            Expand ↗
          </button>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-sm px-1">
            ✕
          </button>
        </div>
      </div>
      <div className="overflow-y-auto p-3 space-y-2">
        {items.slice(0, 3).map((it) => (
          <div key={it.url} className="text-sm">
            <a href={it.url} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 hover:underline line-clamp-1">
              {it.title}
            </a>
            <div className="text-xs text-slate-400 mt-0.5">
              {it.source} &middot; {new Date(it.publishedAt).toLocaleDateString()}
            </div>
          </div>
        ))}
        {items.length > 3 && (
          <button onClick={onExpand} className="text-xs text-blue-600 hover:underline mt-1">
            + {items.length - 3} more incidents
          </button>
        )}
      </div>
    </div>
  );
}

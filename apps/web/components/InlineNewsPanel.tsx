"use client";

import { useEffect, useState } from "react";
import { getDateLocale } from "@/lib/i18n";
import { useLocaleContext } from "./LocaleProvider";

type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string };
type IncidentItem = { id: string; title: string; description: string; source: string; sourceDate: string };

export default function InlineNewsPanel({ country, topic, onClose, onExpand }: { country: string; topic?: string; onClose: () => void; onExpand: () => void }) {
  const { locale, dict } = useLocaleContext();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [incidents, setIncidents] = useState<IncidentItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;
    setLoading(true);
    setNews([]);
    setIncidents([]);
    Promise.all([
      fetch("/api/incidents?country=" + encodeURIComponent(country) + "&topic=" + encodeURIComponent(topic ?? "")).then(r => r.json()),
      fetch("/api/news?country=" + encodeURIComponent(country) + "&topic=" + encodeURIComponent(topic ?? "")).then(r => r.json()),
    ])
      .then(([incData, newsData]) => {
        setIncidents(incData.incidents ?? []);
        setNews(newsData.items ?? []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [country, topic]);

  const hasContent = incidents.length > 0 || news.length > 0;
  const m = dict.map;

  if (loading) {
    return (
      <div className="absolute bottom-4 left-4 right-4 z-30 rounded-lg border border-slate-200 bg-white/95 backdrop-blur shadow-lg p-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-red-600" />
          {m.loading}
        </div>
      </div>
    );
  }

  if (!hasContent) return null;

  return (
    <div
      className="relative mt-3 sm:absolute sm:mt-0 sm:bottom-4 sm:left-4 sm:right-4 z-30 rounded-lg border border-slate-200 bg-white/95 backdrop-blur shadow-lg max-h-56 sm:max-h-80 overflow-hidden flex flex-col"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 flex-shrink-0">
        <span className="text-sm font-semibold text-slate-800">{country}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={onExpand}
            className="rounded px-2 py-0.5 text-xs text-blue-600 hover:bg-blue-50 transition-colors font-medium"
            title={m.expandTitle}
          >
            {m.expand}
          </button>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-sm px-1" aria-label={m.close}>
            ✕
          </button>
        </div>
      </div>
      <div className="overflow-y-auto p-3 space-y-3">
        {incidents.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{m.incidents}</span>
            </div>
            <div className="space-y-2">
              {incidents.slice(0, 2).map((inc) => (
                <div key={inc.id} className="rounded-md border border-blue-100 bg-blue-50/50 px-3 py-2">
                  <p className="text-sm font-semibold text-slate-900 leading-snug">{inc.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 line-clamp-2">{inc.description}</p>
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-400">
                    <span>{inc.source}</span>
                    {inc.sourceDate && <span>· {inc.sourceDate}</span>}
                  </div>
                </div>
              ))}
            </div>
            {incidents.length > 2 && (
              <button onClick={onExpand} className="text-xs text-blue-600 hover:underline mt-1.5">
                + {incidents.length - 2} {m.moreIncidents}
              </button>
            )}
          </div>
        )}

        {incidents.length > 0 && news.length > 0 && (
          <div className="border-t border-slate-100" />
        )}

        {news.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{m.latestNews}</span>
            </div>
            <div className="space-y-2">
              {news.slice(0, 2).map((it) => (
                <div key={it.url} className="text-sm">
                  <a href={it.url} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 hover:underline line-clamp-1">
                    {it.title}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {it.source} · {new Date(it.publishedAt).toLocaleDateString(getDateLocale(locale))}
                  </div>
                </div>
              ))}
            </div>
            {news.length > 2 && (
              <button onClick={onExpand} className="text-xs text-blue-600 hover:underline mt-1">
                + {news.length - 2} {m.moreNews}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

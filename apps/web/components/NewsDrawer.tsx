"use client";

import { useEffect, useState } from "react";

type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string };
type IncidentItem = { id: string; title: string; description: string; source: string; sourceDate: string };

export default function NewsDrawer({ country, topic, onClose, onCollapse }: { country: string | null; topic?: string; onClose: () => void; onCollapse?: () => void }) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [incidents, setIncidents] = useState<IncidentItem[]>([]);
  const [stale, setStale] = useState(false);
  const [noKey, setNoKey] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;
    setLoading(true);
    setNews([]);
    setIncidents([]);
    setNoKey(false);
    Promise.all([
      fetch("/api/incidents?country=" + encodeURIComponent(country) + "&topic=" + encodeURIComponent(topic ?? "")).then(r => r.json()),
      fetch("/api/news?country=" + encodeURIComponent(country) + "&topic=" + encodeURIComponent(topic ?? "")).then(r => r.json()),
    ])
      .then(([incData, newsData]) => {
        setIncidents(incData.incidents ?? []);
        setNews(newsData.items ?? []);
        setStale(!!newsData.stale);
        setNoKey(!!newsData.noKey);
      })
      .catch(() => {})
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
        dir="rtl"
      >
        <div className="flex items-center justify-between border-b px-4 py-3 sticky top-0 bg-white z-10">
          <span className="font-semibold text-slate-800">{country}</span>
          <div className="flex items-center gap-2">
            {onCollapse && (
              <button onClick={onCollapse} className="text-slate-400 hover:text-slate-600 text-sm" title="طي العرض">
                ⤡
              </button>
            )}
            <button onClick={onClose} className="text-slate-500 hover:text-slate-900" aria-label="إغلاق">
              ✕
            </button>
          </div>
        </div>

        <div className="p-4">
          {noKey && (
            <div className="mb-4 rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <strong>مفتاح EXA غير مضبوط.</strong> الأخبار المباشرة غير متاحة.{" "}
              <a href="https://exa.ai" target="_blank" rel="noopener noreferrer" className="underline">
                احصل على مفتاح مجاني من Exa
              </a>{" "}
              وأضفه إلى ملف <code className="rounded bg-amber-100 px-1 text-xs">.env</code>.
            </div>
          )}
          {stale && (
            <p className="mb-3 rounded bg-amber-50 px-3 py-2 text-xs text-amber-700">
              عرض حوادث مؤرشفة — النتائج المباشرة غير متاحة حالياً.
            </p>
          )}
          {loading && (
            <div className="flex items-center gap-2 py-8 text-slate-500">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
              جاري التحميل...
            </div>
          )}
          {!loading && !noKey && incidents.length === 0 && news.length === 0 && (
            <p className="text-slate-500 text-sm">لا توجد حوادث أو أخبار حديثة. هذا لا يعني الأمان — فقط أنها غير مبلغ عنها هنا.</p>
          )}

          {/* Incidents Section */}
          {incidents.length > 0 && (
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                <h2 className="text-sm font-bold uppercase tracking-wide text-blue-600">سجل الحوادث الموثقة</h2>
                <span className="text-xs text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded-full">{incidents.length}</span>
              </div>
              <div className="space-y-3">
                {incidents.map((inc) => (
                  <div key={inc.id} className="rounded-lg border border-blue-100 bg-gradient-to-l from-blue-50/50 to-white px-4 py-3">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{inc.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{inc.description}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-medium text-blue-500">{inc.source}</span>
                      {inc.sourceDate && <span>· {inc.sourceDate}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Divider */}
          {incidents.length > 0 && news.length > 0 && (
            <div className="border-t-2 border-slate-100 my-6" />
          )}

          {/* News Section */}
          {news.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                <h2 className="text-sm font-bold uppercase tracking-wide text-blue-600">آخر الأخبار</h2>
                <span className="text-xs text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded-full">{news.length}</span>
              </div>
              <ul className="space-y-4">
                {news.map((it) => (
                  <li key={it.url} className="border-b border-slate-100 pb-3 last:border-0">
                    <a href={it.url} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 hover:underline text-sm">
                      {it.title}
                    </a>
                    <div className="mt-1 text-xs text-slate-400">
                      {it.source} · {new Date(it.publishedAt).toLocaleDateString("ar-SA")}
                    </div>
                    {it.snippet && <p className="mt-1 text-sm text-slate-600 leading-relaxed">{it.snippet}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </aside>
    </>
  );
}

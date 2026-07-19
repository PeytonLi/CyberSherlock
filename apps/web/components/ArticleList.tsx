"use client";

import LocaleLink from "./LocaleLink";
import { useLocaleContext } from "./LocaleProvider";

export default function ArticleList() {
  const { dict } = useLocaleContext();
  const t = dict.articles;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{t.eyebrow}</p>
      <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{t.title}</h1>
      <p className="mt-3 text-slate-600">{t.subtitle}</p>

      <div className="mt-10 space-y-12">
        {t.items.map((article) => (
          <article key={article.slug} className="border-b border-slate-200 pb-10 last:border-0">
            <h2 className="text-xl font-bold text-slate-900">{article.title}</h2>
            <p className="mt-1 text-sm text-slate-500">
              {t.by} {article.author} &middot;{" "}
              <span className="text-blue-600">{article.source}</span>
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">{article.summary}</p>
            <LocaleLink
              href={`/lessons/${article.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              {t.readFull} &rarr;
            </LocaleLink>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">{t.moreTitle}</p>
        <p>{t.moreBody}</p>
      </div>
    </div>
  );
}

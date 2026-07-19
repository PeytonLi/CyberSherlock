"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import LocaleLink from "./LocaleLink";
import { useLocaleContext } from "./LocaleProvider";

export default function ArticlesSidebar() {
  const pathname = usePathname();
  const { locale, dict } = useLocaleContext();
  const [open, setOpen] = useState(false);

  const articles = dict.articles.items.map((item) => ({
    href: `/lessons/${item.slug}`,
    fullPath: `/${locale}/lessons/${item.slug}`,
    label: item.title,
  }));

  const activeArticle = articles.find((a) => pathname === a.fullPath);

  return (
    <aside
      className="w-full md:w-64 flex-shrink-0 border-b md:border-b-0 border-slate-200 md:border-r bg-slate-50 md:overflow-y-auto md:max-h-[calc(100vh-57px)] md:sticky md:top-[57px]"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-sm md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={`min-w-0 ${locale === "ar" ? "text-right" : "text-left"}`}>
          <span className="block font-semibold text-slate-900">{dict.articles.sidebarTitle}</span>
          {activeArticle && (
            <span className="mt-0.5 block truncate text-xs text-slate-500">
              {activeArticle.label}
            </span>
          )}
        </span>
        <span className="flex-shrink-0 text-slate-400" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
      </button>

      <div className="hidden md:block px-4 py-3 border-b border-slate-200">
        <span className="text-sm font-semibold text-slate-900">{dict.articles.sidebarTitle}</span>
      </div>

      <nav
        className={
          "border-t border-slate-200 md:border-t-0 py-2 " +
          (open ? "block" : "hidden") +
          " md:block"
        }
      >
        {articles.map((article) => {
          const isActive = pathname === article.fullPath;
          return (
            <LocaleLink
              key={article.href}
              href={article.href}
              onClick={() => setOpen(false)}
              className={
                "flex items-center gap-2 px-4 py-2.5 text-sm transition-colors " +
                (locale === "ar" ? "text-right " : "text-left ") +
                (isActive
                  ? "bg-blue-600/10 text-blue-600 font-medium border-l-2 border-blue-600"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100")
              }
            >
              <span className="leading-snug">{article.label}</span>
            </LocaleLink>
          );
        })}
      </nav>
    </aside>
  );
}

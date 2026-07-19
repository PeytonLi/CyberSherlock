"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ARTICLES = [
  {
    href: "/lessons/ai-infrastructure-collapse",
    label: "كيف يمكن للذكاء الاصطناعي أن ينهار البنية التحتية",
  },
  {
    href: "/lessons/email-phishing",
    label: "مستقبل التصيّد الاحتيالي",
  },
];

export default function ArticlesSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeArticle = ARTICLES.find((a) => a.href === pathname);

  return (
    <aside
      className="w-full md:w-64 flex-shrink-0 border-b md:border-b-0 border-slate-200 md:border-r bg-slate-50 md:overflow-y-auto md:max-h-[calc(100vh-57px)] md:sticky md:top-[57px]"
      dir="rtl"
    >
      {/* Mobile: collapsed by default — tap to expand article list */}
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-sm md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="min-w-0 text-right">
          <span className="block font-semibold text-slate-900">المقالات</span>
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

      {/* Desktop header — always visible */}
      <div className="hidden md:block px-4 py-3 border-b border-slate-200">
        <span className="text-sm font-semibold text-slate-900">المقالات</span>
      </div>

      <nav
        className={
          "border-t border-slate-200 md:border-t-0 py-2 " +
          (open ? "block" : "hidden") +
          " md:block"
        }
      >
        {ARTICLES.map((article) => {
          const isActive = pathname === article.href;
          return (
            <Link
              key={article.href}
              href={article.href}
              onClick={() => setOpen(false)}
              className={
                "flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-right " +
                (isActive
                  ? "bg-blue-600/10 text-blue-600 font-medium border-l-2 border-blue-600"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100")
              }
            >
              <span className="leading-snug">{article.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

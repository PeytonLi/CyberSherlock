"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-slate-50 overflow-y-auto max-h-[calc(100vh-57px)] sticky top-[57px]" dir="rtl">
      <div className="px-4 py-3 border-b border-slate-200">
        <span className="text-sm font-semibold text-slate-900">المقالات</span>
      </div>
      <nav className="py-2">
        {ARTICLES.map((article) => {
          const isActive = pathname === article.href;
          return (
            <Link
              key={article.href}
              href={article.href}
              className={"flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-right " + (isActive ? "bg-blue-600/10 text-blue-600 font-medium border-l-2 border-blue-600" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100")}
            >
              <span className="leading-snug">{article.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

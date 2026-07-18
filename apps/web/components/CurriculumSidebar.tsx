"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CURRICULUM } from "@/lib/curriculum-data";

export default function CurriculumSidebar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [expanded, setExpanded] = useState<Set<number>>(new Set([1, 2, 3, 4, 5]));

  if (hidden) {
    return (
      <button
        onClick={() => setHidden(false)}
        className="fixed left-0 top-20 z-30 rounded-r-lg border border-l-0 border-slate-200 bg-white px-2 py-3 text-sm text-slate-500 hover:text-slate-900 shadow-sm"
      >
        Show
      </button>
    );
  }

  const toggleUnit = (n: number) => {
    const next = new Set(expanded);
    if (next.has(n)) next.delete(n); else next.add(n);
    setExpanded(next);
  };

  return (
    <aside className="w-72 flex-shrink-0 border-r border-slate-200 bg-[#f8fafc] overflow-y-auto max-h-[calc(100vh-57px)] sticky top-[57px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <span className="text-sm font-semibold text-[#0a1628]">AGI Strategy</span>
        <button onClick={() => setHidden(true)} className="text-xs text-slate-400 hover:text-slate-600">Hide</button>
      </div>
      <nav className="py-2">
        {CURRICULUM.map((unit) => {
          const isExpanded = expanded.has(unit.number);
          return (
            <div key={unit.number}>
              <button
                onClick={() => toggleUnit(unit.number)}
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-medium text-[#0a1628] hover:bg-slate-100 transition-colors"
              >
                <span className="text-xs text-slate-400">{isExpanded ? "\u25BC" : "\u25B6"}</span>
                <span>{unit.number}. {unit.title}</span>
              </button>
              {isExpanded && (
                <div>
                  {unit.lessons.map((lesson) => {
                    const href = `/curriculum/${unit.number}/${lesson.lesson}`;
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={lesson.lesson}
                        href={href}
                        className={`flex items-center justify-between pl-10 pr-4 py-1.5 text-sm transition-colors ${isActive ? "bg-[#2563eb]/10 text-[#2563eb] font-medium border-r-2 border-[#2563eb]" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
                      >
                        <span className="truncate">{lesson.title}</span>
                        {lesson.duration && (
                          <span className="ml-2 flex-shrink-0 text-xs text-slate-400">{lesson.duration}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

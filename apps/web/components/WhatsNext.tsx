"use client";

import { useLocaleContext } from "./LocaleProvider";

export default function WhatsNext() {
  const { dict } = useLocaleContext();
  const t = dict.whatsNext;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-3">
          {t.title}
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">{t.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.paths.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group rounded-xl border-2 border-slate-200 p-6 hover:border-[#2563eb] hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-lg text-[#0a1628] group-hover:text-[#2563eb] transition-colors mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.description}</p>
              <span className="text-sm font-medium text-[#2563eb]">{t.exploreCourse}</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.programs.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group rounded-xl border-2 border-slate-200 p-6 hover:border-[#f59e0b] hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg text-[#0a1628] group-hover:text-[#f59e0b] transition-colors mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.description}</p>
              <span className="text-sm font-medium text-[#f59e0b]">{t.exploreProgram}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

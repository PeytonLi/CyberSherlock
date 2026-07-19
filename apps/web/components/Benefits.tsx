"use client";

import { useLocaleContext } from "./LocaleProvider";

export default function Benefits() {
  const { dict } = useLocaleContext();

  return (
    <section className="bg-[#f8fafc] py-20 border-y border-slate-200">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-12">
          {dict.benefits.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.benefits.items.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-semibold text-[#0a1628] mb-3">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLocaleContext } from "./LocaleProvider";

export default function WhoItsFor() {
  const { dict } = useLocaleContext();
  const t = dict.whoItsFor;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628]">{t.title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p className="text-slate-500 italic">{t.note}</p>
        </div>
      </div>
    </section>
  );
}

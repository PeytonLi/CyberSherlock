"use client";

import { useState } from "react";
import { useLocaleContext } from "./LocaleProvider";

export default function FAQ() {
  const { dict } = useLocaleContext();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-12">
          {dict.faq.title}
        </h2>
        <div className="space-y-0 divide-y divide-slate-200">
          {dict.faq.items.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 text-start"
              >
                <span className="font-medium text-slate-900">{faq.q}</span>
                <span className={`mt-0.5 text-slate-400 transition-transform flex-shrink-0 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="mt-3 text-slate-600 leading-relaxed animate-slide-down">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLocaleContext } from "./LocaleProvider";

export default function HowItWorks() {
  const { dict } = useLocaleContext();
  const steps = dict.howItWorks.steps;

  return (
    <section className="bg-[#f8fafc] py-20 border-y border-slate-200" id="curriculum">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-12">
          {dict.howItWorks.title}
        </h2>
        <div className="space-y-0">
          {steps.map((d, i) => (
            <div
              key={d.label}
              className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-5 ${
                i < steps.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <div className="sm:min-w-[120px] sm:flex-shrink-0">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#2563eb]">
                  {d.label}
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

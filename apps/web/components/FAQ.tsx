"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What background do I need?",
    a: "We do not care about your CV. We care about what you will do next. Recent cohorts have included people from policy, engineering, law, medicine, operations, and academia. What they shared was drive and a bias toward action.",
  },
  {
    q: "Is this course for beginners?",
    a: "It is for people new to working on AI safety, not new to thinking hard. If you have been reading and thinking, and are ready to act, this is where you start.",
  },
  {
    q: "What is the difference between intensive and part-time?",
    a: "Same content, different pace. Intensive is 5 days at ~5h/day, for people who can clear a week and want to move fast. Part-time is 5 weeks at ~5h/week, for people fitting this around other commitments. Both end in the same place.",
  },
  {
    q: "What time zones do you run cohorts in?",
    a: "We run discussions across a wide range of timezones. You will tell us your availability and we will put you in a group that works for your current schedule.",
  },
  {
    q: "What if I do not know which direction I want to go?",
    a: "That is what the course is for. You will leave with a view on which problems matter most and which path fits your skills: technical research, governance, biosecurity, or building something new. Figuring that out is the work.",
  },
  {
    q: "Is there funding available?",
    a: "Yes. See our programs page for current grants and how to apply.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. Participants who complete the course receive a digital certificate they can share on LinkedIn or with employers.",
  },
  {
    q: "Is it really free?",
    a: "Yes.",
  },
  {
    q: "Who is CyberSherlock?",
    a: "CyberSherlock is the leading talent accelerator for beneficial AI and societal resilience. We run courses, help people land jobs, organise events around the world, and back people starting new organisations. We have trained thousands of people since 2022. Our alumni now work at Anthropic, DeepMind, UK AISI, and have founded new organisations working on a safe transition to advanced AI.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-0 divide-y divide-slate-200">
          {FAQS.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 text-left"
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

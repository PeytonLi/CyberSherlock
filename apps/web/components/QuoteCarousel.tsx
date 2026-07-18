"use client";

import { useState, useEffect, useCallback } from "react";

const QUOTES = [
  {
    text: "We should not underestimate the real threats coming from AI [while] we have a narrowing window of opportunity to guide this technology responsibly.",
    author: "Ursula von der Leyen",
    role: "President, European Commission",
  },
  {
    text: "I have always thought of AI as the most profound technology humanity is working on. More profound than fire or electricity or anything that we have done in the past. The downside is, at some point, that humanity loses control of the technology it is developing.",
    author: "Sundar Pichai",
    role: "CEO, Google",
  },
  {
    text: "AI could surpass almost all humans at almost everything shortly after 2027.",
    author: "Dario Amodei",
    role: "CEO, Anthropic",
  },
  {
    text: "I am all in favor of accelerating technological progress, but there is something unsettling about the way OpenAI explicitly declares its mission to be the creation of AGI. AI is a wonderful tool for the betterment of humanity; AGI is a potential successor species. To the extent the mission produces extra motivation for the team to ship good products, it is a positive. To the extent it might actually succeed, it is a reason for concern.",
    author: "David Sacks",
    role: "White House AI and Crypto Czar",
  },
];

export default function QuoteCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % QUOTES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const q = QUOTES[current];

  return (
    <section className="bg-[#0a1628] py-20 text-white overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="text-xl sm:text-2xl leading-relaxed font-medium italic mb-8">
          &ldquo;{q.text}&rdquo;
        </blockquote>
        <cite className="not-italic">
          <div className="font-semibold text-lg">{q.author}</div>
          <div className="text-slate-400 text-sm mt-1">{q.role}</div>
        </cite>

        <div className="mt-10 flex justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "bg-[#2563eb] w-8" : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-4 text-sm text-slate-400">
          <button
            onClick={() => goTo((current - 1 + QUOTES.length) % QUOTES.length)}
            className="hover:text-white transition-colors"
          >
            &larr; Previous
          </button>
          <span className="text-slate-600">
            {current + 1} / {QUOTES.length}
          </span>
          <button
            onClick={() => goTo((current + 1) % QUOTES.length)}
            className="hover:text-white transition-colors"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

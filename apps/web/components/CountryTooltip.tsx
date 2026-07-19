"use client";

import { useEffect, useRef, useState } from "react";
import { useLocaleContext } from "./LocaleProvider";

type Facts = {
  name: string;
  flag?: string;
  capital?: string;
  region?: string;
  subregion?: string;
  languages?: string;
  population?: number;
};

export default function CountryTooltip({ name, x, y }: { name: string | null; x: number; y: number }) {
  const { dict } = useLocaleContext();
  const [facts, setFacts] = useState<Facts | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const m = dict.map;

  useEffect(() => {
    if (!name) {
      setFacts(null);
      return;
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetch(`/api/country?name=${encodeURIComponent(name)}`)
        .then((r) => r.json())
        .then((d) => setFacts(d))
        .catch(() => setFacts({ name }));
    }, 150);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [name]);

  if (!name) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-xs rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-lg"
      style={{ left: x + 14, top: y + 14 }}
    >
      <div className="font-semibold">
        {facts?.flag ? `${facts.flag} ` : ""}
        {name}
      </div>
      {facts?.capital && <div className="text-slate-600">{m.capital}: {facts.capital}</div>}
      {facts?.region && (
        <div className="text-slate-600">
          {m.region}: {facts.region}
          {facts.subregion ? ` · ${facts.subregion}` : ""}
        </div>
      )}
      {facts?.languages && <div className="text-slate-600">{m.languages}: {facts.languages}</div>}
      {typeof facts?.population === "number" && facts.population > 0 && (
        <div className="text-slate-600">{m.population}: {facts.population.toLocaleString()}</div>
      )}
      <div className="mt-1 text-xs text-red-600">{m.clickIncidents}</div>
    </div>
  );
}

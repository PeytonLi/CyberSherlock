"use client";

import { useEffect, useRef, useState } from "react";

type Facts = {
  name: string;
  flag?: string;
  capital?: string;
  region?: string;
  subregion?: string;
  languages?: string;
  population?: number;
};

type Props = {
  name: string | null;
  x: number;
  y: number;
  newCount?: number;
  unreadCount?: number;
  totalInWindow?: number;
  windowLabel?: "day" | "week";
};

export default function CountryTooltip({
  name,
  x,
  y,
  newCount = 0,
  unreadCount = 0,
  totalInWindow = 0,
  windowLabel = "week",
}: Props) {
  const [facts, setFacts] = useState<Facts | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const windowText = windowLabel === "day" ? "today" : "this week";

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-xs rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-lg"
      style={{ left: x + 14, top: y + 14 }}
    >
      <div className="font-semibold">
        {facts?.flag ? `${facts.flag} ` : ""}
        {name}
      </div>
      {facts?.capital && <div className="text-slate-600">Capital: {facts.capital}</div>}
      {facts?.region && (
        <div className="text-slate-600">
          Region: {facts.region}
          {facts.subregion ? ` · ${facts.subregion}` : ""}
        </div>
      )}
      {facts?.languages && <div className="text-slate-600">Languages: {facts.languages}</div>}
      {typeof facts?.population === "number" && facts.population > 0 && (
        <div className="text-slate-600">Population: {facts.population.toLocaleString()}</div>
      )}
      {(newCount > 0 || unreadCount > 0 || totalInWindow > 0) && (
        <div className="mt-2 space-y-0.5 border-t border-slate-100 pt-2 text-xs text-slate-600">
          {newCount > 0 ? (
            <div className="font-medium text-red-600">
              {newCount} new since last open on this device
            </div>
          ) : totalInWindow > 0 ? (
            <div>No new for you since last open</div>
          ) : null}
          {totalInWindow > 0 && (
            <div>
              {totalInWindow} reported {windowText}
              {unreadCount > 0 ? ` · ${unreadCount} unread` : ""}
            </div>
          )}
        </div>
      )}
      <div className="mt-1 text-xs text-red-600">Click to see recent cyber incidents →</div>
    </div>
  );
}

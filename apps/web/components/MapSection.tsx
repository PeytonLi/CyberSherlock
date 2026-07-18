"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ThreatMap, { type CountryMetric } from "./ThreatMap";
import CountryTooltip from "./CountryTooltip";
import InlineNewsPanel from "./InlineNewsPanel";
import NewsDrawer from "./NewsDrawer";
import {
  countNewSinceCheck,
  countUnread,
  getMapVisitState,
  markArticleRead,
  markCountryChecked,
  type MapVisitState,
} from "@/lib/map-visits";

type WindowOpt = "day" | "week";

type ActivityPayload = {
  window: WindowOpt;
  countries: {
    country: string;
    count: number;
    items: { url: string; publishedAt: string }[];
  }[];
};

export default function MapSection({ topic }: { topic?: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState<{ name: string | null; x: number; y: number }>({
    name: null,
    x: 0,
    y: 0,
  });
  const [windowOpt, setWindowOpt] = useState<WindowOpt>("week");
  const [activity, setActivity] = useState<ActivityPayload["countries"]>([]);
  const [visits, setVisits] = useState<MapVisitState>({ lastChecked: {}, readUrls: [] });

  useEffect(() => {
    setVisits(getMapVisitState());
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/news/activity?window=${windowOpt}`)
      .then((r) => r.json())
      .then((d: ActivityPayload) => {
        if (!cancelled) setActivity(d.countries ?? []);
      })
      .catch(() => {
        if (!cancelled) setActivity([]);
      });
    return () => {
      cancelled = true;
    };
  }, [windowOpt]);

  const activityByCountry = useMemo(() => {
    const map = new Map<string, ActivityPayload["countries"][number]>();
    for (const c of activity) map.set(c.country, c);
    return map;
  }, [activity]);

  const metrics = useMemo(() => {
    const out: Record<string, CountryMetric> = {};
    for (const c of activity) {
      out[c.country] = {
        newCount: countNewSinceCheck(c.country, c.items, visits),
        unreadCount: countUnread(c.items, visits),
      };
    }
    return out;
  }, [activity, visits]);

  const maxNew = useMemo(() => {
    let max = 0;
    for (const m of Object.values(metrics)) {
      if (m.newCount > max) max = m.newCount;
    }
    return max;
  }, [metrics]);

  const handleSelect = useCallback((name: string) => {
    setSelected(name);
    setExpanded(false);
    // Per-device only — clears heat here; other browsers keep their color
    setVisits(markCountryChecked(name));
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
    setExpanded(false);
  }, []);

  const handleArticleOpen = useCallback((url: string) => {
    setVisits(markArticleRead(url));
  }, []);

  const mergeFetchedArticles = useCallback(
    (country: string, items: { url: string; publishedAt: string }[]) => {
      const since = new Date();
      since.setHours(0, 0, 0, 0);
      if (windowOpt === "week") since.setDate(since.getDate() - 7);
      const sinceMs = since.getTime();
      const inWindow = items.filter((i) => new Date(i.publishedAt).getTime() >= sinceMs);

      setActivity((prev) => {
        const idx = prev.findIndex((c) => c.country === country);
        const nextEntry = { country, count: inWindow.length, items: inWindow };
        if (idx === -1) {
          return inWindow.length === 0 ? prev : [...prev, nextEntry];
        }
        const copy = [...prev];
        if (inWindow.length === 0) {
          copy.splice(idx, 1);
          return copy;
        }
        copy[idx] = nextEntry;
        return copy;
      });
    },
    [windowOpt]
  );

  const hoverMetric = hover.name ? metrics[hover.name] : undefined;
  const hoverActivity = hover.name ? activityByCountry.get(hover.name) : undefined;

  const heading =
    topic === "email-phishing" ? "AI Phishing Threats — Live Map" : "AI-Enabled Cyber Threats — Live Map";
  const subtitle =
    topic === "email-phishing"
      ? "Click any country to see recent AI-powered phishing and social engineering incidents."
      : "Click any country to see recent AI-powered and infrastructure-targeting cyber incidents.";

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-semibold">{heading}</h2>
        <p className="mb-4 text-center text-slate-600">{subtitle}</p>
        <p className="mb-4 text-center text-sm text-slate-500">
          Color shows new incidents since you last opened a country on this device. White means none
          new for you — other devices are unchanged.
        </p>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex rounded-md border border-slate-200 bg-white text-sm">
            <button
              type="button"
              onClick={() => setWindowOpt("day")}
              className={`px-3 py-1.5 ${windowOpt === "day" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Day
            </button>
            <button
              type="button"
              onClick={() => setWindowOpt("week")}
              className={`px-3 py-1.5 ${windowOpt === "week" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Week
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500" aria-hidden>
            <span>Least</span>
            <div
              className="h-2.5 w-28 rounded-sm border border-slate-200"
              style={{
                background: "linear-gradient(to right, #fecaca, #991b1b)",
              }}
            />
            <span>Most new</span>
          </div>
        </div>

        <div className="relative">
          <ThreatMap
            selected={selected}
            onSelect={handleSelect}
            onHover={(name, x, y) => setHover({ name, x, y })}
            metrics={metrics}
            maxNew={maxNew}
          />
          {selected && !expanded && (
            <InlineNewsPanel
              country={selected}
              topic={topic}
              onClose={handleClose}
              onExpand={() => setExpanded(true)}
            />
          )}
        </div>
      </div>
      <CountryTooltip
        name={hover.name}
        x={hover.x}
        y={hover.y}
        newCount={hoverMetric?.newCount ?? 0}
        unreadCount={hoverMetric?.unreadCount ?? 0}
        totalInWindow={hoverActivity?.count ?? 0}
        windowLabel={windowOpt}
      />
      <NewsDrawer
        country={expanded ? selected : null}
        topic={topic}
        onClose={handleClose}
        onCollapse={() => setExpanded(false)}
        onArticleOpen={handleArticleOpen}
        onArticlesLoaded={mergeFetchedArticles}
        readUrls={visits.readUrls}
      />
    </section>
  );
}

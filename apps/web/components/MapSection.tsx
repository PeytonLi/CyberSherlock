"use client";

import { useState } from "react";
import ThreatMap from "./ThreatMap";
import CountryTooltip from "./CountryTooltip";
import InlineNewsPanel from "./InlineNewsPanel";
import NewsDrawer from "./NewsDrawer";

export default function MapSection({ topic }: { topic?: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState<{ name: string | null; x: number; y: number }>({ name: null, x: 0, y: 0 });

  const heading = topic === "email-phishing"
    ? "التهديدات السيبرانية المدعومة بالذكاء الاصطناعي — الخريطة التفاعلية"
    : "هجمات البنية التحتية الحيوية — الخريطة التفاعلية";
  const subtitle = topic === "email-phishing"
    ? "انقر على أي دولة لعرض حوادث التصيّد والاختراق الاجتماعي المدعومة بالذكاء الاصطناعي."
    : "انقر على أي دولة لعرض سجل الحوادث والأخبار الحديثة عن الهجمات السيبرانية على البنية التحتية الحيوية.";

  const handleSelect = (name: string) => {
    setSelected(name);
    setExpanded(false); // always start inline when clicking a country
  };

  const handleClose = () => {
    setSelected(null);
    setExpanded(false);
  };

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-semibold">{heading}</h2>
        <p className="mb-6 text-center text-slate-600">{subtitle}</p>
        <div className="relative">
          <ThreatMap
            selected={selected}
            onSelect={handleSelect}
            onHover={(name, x, y) => setHover({ name, x, y })}
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
      <CountryTooltip name={hover.name} x={hover.x} y={hover.y} />
      <NewsDrawer country={expanded ? selected : null} topic={topic} onClose={handleClose} onCollapse={() => setExpanded(false)} />
    </section>
  );
}

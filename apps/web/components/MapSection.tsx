"use client";

import { useState } from "react";
import ThreatMap from "./ThreatMap";
import CountryTooltip from "./CountryTooltip";
import InlineNewsPanel from "./InlineNewsPanel";
import NewsDrawer from "./NewsDrawer";

export default function MapSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState<{ name: string | null; x: number; y: number }>({ name: null, x: 0, y: 0 });

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
        <h2 className="mb-2 text-center text-2xl font-semibold">AI-Enabled Cyber Threats — Live Map</h2>
        <p className="mb-6 text-center text-slate-600">Click any country to see recent AI-powered and infrastructure-targeting cyber incidents.</p>
        <div className="relative">
          <ThreatMap
            selected={selected}
            onSelect={handleSelect}
            onHover={(name, x, y) => setHover({ name, x, y })}
          />
          {selected && !expanded && (
            <InlineNewsPanel
              country={selected}
              onClose={handleClose}
              onExpand={() => setExpanded(true)}
            />
          )}
        </div>
      </div>
      <CountryTooltip name={hover.name} x={hover.x} y={hover.y} />
      <NewsDrawer country={expanded ? selected : null} onClose={handleClose} onCollapse={() => setExpanded(false)} />
    </section>
  );
}

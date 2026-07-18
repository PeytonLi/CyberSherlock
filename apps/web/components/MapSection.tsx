"use client";

import { useState } from "react";
import ThreatMap from "./ThreatMap";
import CountryTooltip from "./CountryTooltip";
import NewsDrawer from "./NewsDrawer";

export default function MapSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hover, setHover] = useState<{ name: string | null; x: number; y: number }>({ name: null, x: 0, y: 0 });

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-semibold">The live global threat map</h2>
        <p className="mb-6 text-center text-slate-600">Hover a country for the facts. Click it for recent cyber incidents.</p>
        <ThreatMap
          selected={selected}
          onSelect={setSelected}
          onHover={(name, x, y) => setHover({ name, x, y })}
        />
      </div>
      <CountryTooltip name={hover.name} x={hover.x} y={hover.y} />
      <NewsDrawer country={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

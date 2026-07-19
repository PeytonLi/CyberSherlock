"use client";

import { useState, useMemo } from "react";
import ThreatMap from "./ThreatMap";
import CountryTooltip from "./CountryTooltip";
import InlineNewsPanel from "./InlineNewsPanel";
import NewsDrawer from "./NewsDrawer";
import PinTooltip from "./PinTooltip";
import { getPinsForTopic, type PinIncident } from "@/lib/pin-incidents";
import { useLocaleContext } from "./LocaleProvider";

export default function MapSection({ topic }: { topic?: string }) {
  const { locale, dict } = useLocaleContext();
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState<{ name: string | null; x: number; y: number }>({ name: null, x: 0, y: 0 });
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const [activePin, setActivePin] = useState<PinIncident | null>(null);

  const pins = useMemo(() => getPinsForTopic(topic, locale), [topic, locale]);

  const heading =
    topic === "email-phishing" ? dict.map.phishingHeading : dict.map.infraHeading;
  const subtitle =
    topic === "email-phishing" ? dict.map.phishingSubtitle : dict.map.infraSubtitle;

  const handleSelect = (name: string) => {
    setSelected(name);
    setActivePin(null);
    setExpanded(false);
  };

  const handleClose = () => {
    setSelected(null);
    setActivePin(null);
    setExpanded(false);
  };

  const handlePinClick = (pin: PinIncident) => {
    setActivePin(pin);
    setSelected(null);
    setExpanded(false);
  };

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 sm:px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-xl sm:text-2xl font-semibold leading-snug">{heading}</h2>
        <p className="mb-6 text-center text-sm sm:text-base text-slate-600">{subtitle}</p>
        <div className="relative">
          <ThreatMap
            selected={selected}
            onSelect={handleSelect}
            onHover={(name, x, y) => setHover({ name, x, y })}
            pins={pins}
            onPinClick={handlePinClick}
            hoveredPin={hoveredPin}
            onPinHover={setHoveredPin}
          />
          {activePin && (
            <PinTooltip pin={activePin} onClose={() => setActivePin(null)} />
          )}
          {selected && !expanded && !activePin && (
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

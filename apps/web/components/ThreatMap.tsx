"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { FLAT_FILL, SELECTED_FILL, heatFill } from "@/lib/heat";
import { GEO_URL } from "@/lib/map-countries";

export type CountryMetric = {
  /** Per-browser: articles newer than this device's last open — drives heat */
  newCount: number;
  /** Per-browser: articles not yet opened */
  unreadCount: number;
};

type Props = {
  onSelect: (name: string) => void;
  onHover: (name: string | null, x: number, y: number) => void;
  selected: string | null;
  metrics: Record<string, CountryMetric>;
  maxNew: number;
};

export default function ThreatMap({ onSelect, onHover, selected, metrics, maxNew }: Props) {
  return (
    <div className="relative w-full">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const isSelected = name === selected;
              const metric = metrics[name];
              const newCount = metric?.newCount ?? 0;
              const heat = heatFill(newCount, maxNew);
              const fill = isSelected ? SELECTED_FILL : heat ?? FLAT_FILL;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onSelect(name)}
                  onMouseMove={(e) => onHover(name, e.clientX, e.clientY)}
                  onMouseLeave={() => onHover(null, 0, 0)}
                  style={{
                    default: {
                      fill,
                      stroke: "#cbd5e1",
                      strokeWidth: 0.4,
                      outline: "none",
                      transition: "fill 200ms ease",
                    },
                    hover: {
                      fill: isSelected ? SELECTED_FILL : heat ? darken(heat, 0.12) : "#f1f5f9",
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: { fill: SELECTED_FILL, outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

function darken(rgb: string, amount: number): string {
  const m = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/);
  if (!m) return rgb;
  const f = 1 - amount;
  return `rgb(${Math.round(+m[1] * f)},${Math.round(+m[2] * f)},${Math.round(+m[3] * f)})`;
}

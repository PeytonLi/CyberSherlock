"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Props = {
  onSelect: (name: string) => void;
  onHover: (name: string | null, x: number, y: number) => void;
  selected: string | null;
};

export default function ThreatMap({ onSelect, onHover, selected }: Props) {
  return (
    <div className="relative w-full">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const isSelected = name === selected;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onSelect(name)}
                  onMouseMove={(e) => onHover(name, e.clientX, e.clientY)}
                  onMouseLeave={() => onHover(null, 0, 0)}
                  style={{
                    default: {
                      fill: isSelected ? "#dc2626" : "#cbd5e1",
                      stroke: "#ffffff",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: { fill: "#f87171", outline: "none", cursor: "pointer" },
                    pressed: { fill: "#dc2626", outline: "none" },
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

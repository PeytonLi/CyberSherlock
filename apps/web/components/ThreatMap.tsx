"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import type { PinIncident } from "@/lib/pin-incidents";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const FLAT_FILL = "#e2e8f0";
const SELECTED_FILL = "#dc2626";

export type CountryMetric = {
  newCount: number;
  unreadCount: number;
};

type Props = {
  onSelect: (name: string) => void;
  onHover: (name: string | null, x: number, y: number) => void;
  selected: string | null;
  pins: PinIncident[];
  onPinClick: (pin: PinIncident) => void;
  hoveredPin: string | null;
  onPinHover: (id: string | null) => void;
};

export default function ThreatMap({ onSelect, onHover, selected, pins, onPinClick, onPinHover, hoveredPin }: Props) {
  return (
    <div className="relative w-full">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const isSelected = name === selected;
              const fill = isSelected ? SELECTED_FILL : FLAT_FILL;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onSelect(name)}
                  onMouseMove={(e) => onHover(name, e.clientX, e.clientY)}
                  onMouseLeave={() => onHover(null, 0, 0)}
                  style={{
                    default: { fill, stroke: "#ffffff", strokeWidth: 0.4, outline: "none" },
                    hover: { fill: "#f87171", outline: "none", cursor: "pointer" },
                    pressed: { fill: "#dc2626", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
        {pins.map((pin) => {
          const isHovered = hoveredPin === pin.id;
          return (
            <Marker key={pin.id} coordinates={[pin.lng, pin.lat]}>
              <g
                onClick={(e) => { e.stopPropagation(); onPinClick(pin); }}
                onMouseEnter={() => onPinHover(pin.id)}
                onMouseLeave={() => onPinHover(null)}
                style={{ cursor: "pointer" }}
              >
                <circle r={isHovered ? 7 : 5} fill="#dc2626" stroke="#ffffff" strokeWidth={1.5} />
                <circle r={isHovered ? 12 : 0} fill="#dc2626" opacity={0.2} />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}

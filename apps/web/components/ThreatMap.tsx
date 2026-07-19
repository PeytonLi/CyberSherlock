"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import type { PinIncident } from "@/lib/pin-incidents";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const FLAT_FILL = "#dbeafe";
const SELECTED_FILL = "#1d4ed8";

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
                    hover: { fill: "#93c5fd", outline: "none", cursor: "pointer" },
                    pressed: { fill: "#2563eb", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
        {pins.map((pin) => {
          const isHovered = hoveredPin === pin.id;
          const hasAudio = !!pin.audioUrl;
          return (
            <Marker key={pin.id} coordinates={[pin.lng, pin.lat]}>
              <g
                onClick={(e) => { e.stopPropagation(); onPinClick(pin); }}
                onMouseEnter={() => onPinHover(pin.id)}
                onMouseLeave={() => onPinHover(null)}
                style={{ cursor: "pointer" }}
              >
                {hasAudio ? (
                  <>
                    <circle r={isHovered ? 8 : 6} fill="#2563eb" stroke="#ffffff" strokeWidth={2} />
                    <circle r={isHovered ? 14 : 0} fill="#3b82f6" opacity={0.15} />
                    <text textAnchor="middle" dy="0.35em" fontSize={isHovered ? 9 : 7} fill="#ffffff" style={{ pointerEvents: "none", fontWeight: "bold" }}>♫</text>
                  </>
                ) : (
                  <>
                    <circle r={isHovered ? 7 : 5} fill="#2563eb" stroke="#ffffff" strokeWidth={1.5} />
                    <circle r={isHovered ? 12 : 0} fill="#3b82f6" opacity={0.2} />
                  </>
                )}
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}

"use client";

import type { PinIncident } from "@/lib/pin-incidents";

export default function PinTooltip({ pin, onClose }: { pin: PinIncident; onClose: () => void }) {
  return (
    <div className="absolute top-3 left-3 right-3 z-30 rounded-lg border border-red-200 bg-white shadow-lg p-4" dir="rtl">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs">📍</span>
            <h3 className="text-sm font-bold text-slate-900">{pin.title}</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{pin.description}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-red-500">{pin.source}</span>
            <span>·</span>
            <span>{pin.sourceDate}</span>
            <span>·</span>
            <span>{pin.country}</span>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 flex-shrink-0">✕</button>
      </div>
    </div>
  );
}

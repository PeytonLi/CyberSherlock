"use client";

import { useRef, useState } from "react";
import type { PinIncident } from "@/lib/pin-incidents";

export default function PinTooltip({ pin, onClose }: { pin: PinIncident; onClose: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); }
    else { a.pause(); setPlaying(false); }
  };

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a) return;
    setCurrentTime(a.currentTime);
    if (a.duration) setProgress((a.currentTime / a.duration) * 100);
  };

  const onLoaded = () => {
    const a = audioRef.current;
    if (a) setDuration(a.duration);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + sec.toString().padStart(2, "0");
  };

  return (
    <div className="absolute top-3 left-3 right-3 z-30 rounded-lg border border-red-200 bg-white shadow-lg p-4 max-w-sm" dir="rtl">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs flex-shrink-0">📍</span>
            <h3 className="text-sm font-bold text-slate-900 truncate">{pin.title}</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{pin.description}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-red-500">{pin.source}</span>
            <span>·</span>
            <span>{pin.sourceDate}</span>
            <span>·</span>
            <span>{pin.country}</span>
          </div>

          {pin.audioUrl && (
            <div className="mt-3 border-t border-slate-100 pt-3">
              <audio ref={audioRef} src={pin.audioUrl} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoaded} onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} preload="metadata" />
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  {playing ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="1" width="3" height="10" rx="0.5" /><rect x="8" y="1" width="3" height="10" rx="0.5" /></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><polygon points="2,1 11,6 2,11" /></svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-red-500 rounded-full transition-all duration-150" style={{ width: progress + "%" }} />
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{duration ? formatTime(duration) : "--:--"}</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400 leading-relaxed">🎧 استمع إلى ملخص الحادث الصوتي</p>
            </div>
          )}
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 flex-shrink-0">✕</button>
      </div>
    </div>
  );
}

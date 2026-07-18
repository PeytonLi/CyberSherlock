"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "AGI Strategy" },
  { href: "/curriculum", label: "Articles" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#0a1628]">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-[#0a1628] text-white text-xs font-bold">C</div>
          CyberSherlock
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-[#2563eb] ${
                pathname === l.href ? "text-[#2563eb]" : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://bluedot.org/courses/agi-strategy#apply"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#2563eb] px-4 py-2 text-white hover:bg-[#1d4ed8] transition-colors"
          >
            Apply now
          </a>
        </nav>

        <button
          className="sm:hidden p-2 text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === l.href ? "text-[#2563eb]" : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://bluedot.org/courses/agi-strategy#apply"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#2563eb] px-4 py-2 text-white text-center text-sm font-medium"
          >
            Apply now
          </a>
        </nav>
      )}
    </header>
  );
}

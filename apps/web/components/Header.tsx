"use client";

import { useState } from "react";
import LocaleLink from "./LocaleLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocaleContext } from "./LocaleProvider";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const { locale, dict } = useLocaleContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: dict.nav.agiStrategy },
    { href: "/curriculum", label: dict.nav.articles },
  ];

  const isActive = (href: string) => {
    const full = href === "/" ? `/${locale}` : `/${locale}${href}`;
    return pathname === full || (href !== "/" && pathname?.startsWith(full));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 py-3">
        <LocaleLink href="/" className="flex items-center gap-2 font-bold text-lg text-[#0a1628]">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-[#0a1628] text-white text-xs font-bold">C</div>
          CyberSherlock
        </LocaleLink>

        <nav className="hidden sm:flex items-center gap-4 text-sm font-medium">
          {navLinks.map((l) => (
            <LocaleLink
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-[#2563eb] ${
                isActive(l.href) ? "text-[#2563eb]" : "text-slate-600"
              }`}
            >
              {l.label}
            </LocaleLink>
          ))}
          <LanguageSwitcher />
          <a
            href="https://bluedot.org/courses/agi-strategy#apply"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#2563eb] px-4 py-2 text-white hover:bg-[#1d4ed8] transition-colors"
          >
            {dict.nav.apply}
          </a>
        </nav>

        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={dict.nav.menu}
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="sm:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <LocaleLink
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive(l.href) ? "text-[#2563eb]" : "text-slate-600"
              }`}
            >
              {l.label}
            </LocaleLink>
          ))}
          <a
            href="https://bluedot.org/courses/agi-strategy#apply"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#2563eb] px-4 py-2 text-white text-center text-sm font-medium"
          >
            {dict.nav.apply}
          </a>
        </nav>
      )}
    </header>
  );
}

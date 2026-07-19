"use client";

import { useLocaleContext } from "./LocaleProvider";

export default function Footer() {
  const { dict } = useLocaleContext();

  return (
    <footer className="border-t border-slate-200 bg-[#0a1628] text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-white mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-[#2563eb] text-white text-xs font-bold">C</div>
            CyberSherlock
          </div>
          <p className="text-sm leading-relaxed">{dict.footer.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">{dict.footer.courses}</h4>
          <ul className="space-y-2 text-sm">
            {dict.footer.courseLinks.map((label) => (
              <li key={label}>
                <a href="#" className="hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">{dict.footer.programs}</h4>
          <ul className="space-y-2 text-sm">
            {dict.footer.programLinks.map((label) => (
              <li key={label}>
                <a href="#" className="hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} CyberSherlock. {dict.footer.rights}
      </div>
    </footer>
  );
}

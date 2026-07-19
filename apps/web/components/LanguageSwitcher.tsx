"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, swapLocalePath, type Locale } from "@/lib/i18n";
import { useLocaleContext } from "./LocaleProvider";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, dict } = useLocaleContext();
  const other: Locale = locale === "en" ? "ar" : "en";
  const href = swapLocalePath(pathname || `/${locale}`, other);

  const fullLabel = other === "en" ? dict.lang.enFull : dict.lang.arFull;
  const shortLabel = other === "en" ? dict.lang.enShort : dict.lang.arShort;

  return (
    <Link
      href={href}
      onClick={() => setLocaleCookie(other)}
      className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
      aria-label={dict.lang.switchTo}
      title={fullLabel}
    >
      <span className="hidden sm:inline">{fullLabel}</span>
      <span className="sm:hidden">{shortLabel}</span>
    </Link>
  );
}

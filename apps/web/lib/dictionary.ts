import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/en";
import en from "@/messages/en";
import ar from "@/messages/ar";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "ar" ? ar : en;
}

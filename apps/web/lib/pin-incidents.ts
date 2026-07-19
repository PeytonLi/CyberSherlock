import type { Locale } from "@/lib/i18n";
import { PIN_BASES, type PinIncident, type PinTopic } from "@/content/map/pin-base";
import { PIN_COPY_EN } from "@/content/map/pins-en";
import { PIN_COPY_AR } from "@/content/map/pins-ar";

export type { PinIncident, PinTopic } from "@/content/map/pin-base";

function copyFor(locale: Locale) {
  return locale === "ar" ? PIN_COPY_AR : PIN_COPY_EN;
}

export function getPinsForTopic(topic: string | undefined, locale: Locale): PinIncident[] {
  if (!topic) return [];
  const copy = copyFor(locale);
  return PIN_BASES.filter((b) => b.topic === topic).map((base) => {
    const text = copy[base.id];
    if (!text) {
      throw new Error(`Missing pin copy for ${base.id} (${locale})`);
    }
    return { ...base, ...text };
  });
}

/** @deprecated Prefer getPinsForTopic(topic, locale). Kept for any leftover imports. */
export const INCIDENTS_BY_TOPIC: Record<string, PinIncident[]> = {
  "critical-infrastructure": getPinsForTopic("critical-infrastructure", "ar"),
  "email-phishing": getPinsForTopic("email-phishing", "ar"),
};

export type PinTopic = "critical-infrastructure" | "email-phishing";

/** Locale-independent pin geometry and identity — never drop these when splitting languages. */
export type PinBase = {
  id: string;
  country: string;
  lat: number;
  lng: number;
  topic: PinTopic;
};

export type PinCopy = {
  title: string;
  description: string;
  source: string;
  sourceDate: string;
  /** Only set when an audio file exists for this locale. Omit rather than reuse another language's audio. */
  audioUrl?: string;
};

export type PinIncident = PinBase & PinCopy;

export const PIN_BASES: PinBase[] = [
  { id: "ci-1", topic: "critical-infrastructure", country: "Ukraine", lat: 48.38, lng: 31.17 },
  { id: "ci-2", topic: "critical-infrastructure", country: "United States of America", lat: 35.22, lng: -80.84 },
  { id: "ci-3", topic: "critical-infrastructure", country: "United States of America", lat: 28.03, lng: -82.67 },
  { id: "ci-4", topic: "critical-infrastructure", country: "United Kingdom", lat: 52.49, lng: -1.89 },
  { id: "ci-5", topic: "critical-infrastructure", country: "Germany", lat: 51.23, lng: 6.79 },
  { id: "ci-6", topic: "critical-infrastructure", country: "United States of America", lat: 38.9, lng: -77.04 },
  { id: "ci-7", topic: "critical-infrastructure", country: "Ukraine", lat: 50.45, lng: 30.52 },
  { id: "ci-8", topic: "critical-infrastructure", country: "India", lat: 28.57, lng: 77.21 },
  { id: "ci-9", topic: "critical-infrastructure", country: "Norway", lat: 59.91, lng: 10.75 },
  { id: "ph-1", topic: "email-phishing", country: "United States of America", lat: 37.77, lng: -122.42 },
  { id: "ph-2", topic: "email-phishing", country: "United States of America", lat: 38.9, lng: -77.04 },
  { id: "ph-3", topic: "email-phishing", country: "Singapore", lat: 1.35, lng: 103.87 },
  { id: "ph-4", topic: "email-phishing", country: "United States of America", lat: 37.42, lng: -122.08 },
  { id: "ph-5", topic: "email-phishing", country: "United Kingdom", lat: 51.51, lng: -0.12 },
  { id: "ph-6", topic: "email-phishing", country: "Japan", lat: 35.68, lng: 139.76 },
];

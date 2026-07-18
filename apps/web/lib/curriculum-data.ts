export type Resource = {
  title: string;
  authors: string;
  year: number;
  minutes: number;
  listenUrl?: string;
};

export type Lesson = {
  unit: number;
  lesson: number;
  title: string;
  duration: string;
  resources?: Resource[];
  optionalResources?: Resource[];
  hasExercises?: boolean;
  showThreatMap?: boolean;
};

export type Unit = {
  number: number;
  title: string;
  lessons: Lesson[];
};

export const CURRICULUM: Unit[] = [
  {
    number: 1,
    title: "Racing to a Better Future",
    lessons: [
      {
        unit: 1, lesson: 1, title: "Imagining a better future", duration: "55 min",
        resources: [
          { title: "Preparing for Launch", authors: "Tim Fist, Tao Burga, and Tim Hwang", year: 2025, minutes: 30, listenUrl: "#" },
          { title: "Utopia for Realists", authors: "Rutger Bregman", year: 2016, minutes: 25 },
        ],
        optionalResources: [
          { title: "Machines of Loving Grace", authors: "Dario Amodei", year: 2024, minutes: 75, listenUrl: "#" },
          { title: "The Gentle Singularity", authors: "Sam Altman", year: 2025, minutes: 10, listenUrl: "#" },
          { title: "Solarpunk: A Vision for a Sustainable Future", authors: "Joshua Krook", year: 2025, minutes: 10, listenUrl: "#" },
        ],
      },
      {
        unit: 1, lesson: 2, title: "What future do you want?", duration: "20 min",
        hasExercises: true,
      },
      {
        unit: 1, lesson: 3, title: "Steering the race to AGI", duration: "45 min",
        resources: [
          { title: "In search of a dynamist vision for safe superhuman AI", authors: "Helen Toner", year: 2025, minutes: 15, listenUrl: "#" },
          { title: "It's practically impossible to run a big AI company ethically", authors: "Sigal Samuel", year: 2024, minutes: 15, listenUrl: "#" },
          { title: "Seeking Stability in the Competition for AI Advantage", authors: "Rehman, Mueller, and Mazarr", year: 2025, minutes: 15, listenUrl: "#" },
        ],
        optionalResources: [
          { title: "The Intelligence Age", authors: "Sam Altman", year: 2024, minutes: 5 },
        ],
      },
      {
        unit: 1, lesson: 4, title: "The characters", duration: "10 min",
      },
    ],
  },
  {
    number: 2,
    title: "Drivers of AI Progress",
    lessons: [
      {
        unit: 2, lesson: 1, title: "Technical trends driving AI progress", duration: "30 min",
      },
      {
        unit: 2, lesson: 2, title: "Intelligence Explosion", duration: "1h 5min",
      },
      {
        unit: 2, lesson: 3, title: "Will AI progress accelerate even faster?", duration: "1h 20min",
      },
    ],
  },
  {
    number: 3,
    title: "Pathways to Harm",
    lessons: [
      {
        unit: 3, lesson: 1, title: "Map the threat landscape", duration: "55 min",
        resources: [
          { title: "Catastrophic AI Scenarios", authors: "Ben Eisenpress", year: 2024, minutes: 5 },
          { title: "Reframing AGI Threat Models", authors: "Richard Ngo", year: 2024, minutes: 5 },
          { title: "AI Could Defeat All Of Us Combined", authors: "Holden Karnofsky", year: 2022, minutes: 25, listenUrl: "#" },
          { title: "AI Is Reviving Fears Around Bioterrorism. What's the Real Risk?", authors: "Kyle Hiebert", year: 2025, minutes: 5, listenUrl: "#" },
          { title: "AI-Enabled Coups: How a Small Group Could Use AI to Seize Power", authors: "Tom Davidson, Lukas Finnveden, Rose Hadshar", year: 2025, minutes: 15, listenUrl: "#" },
        ],
        optionalResources: [
          { title: "Most common AI-powered cyberattacks", authors: "Crowdstrike", year: 2025, minutes: 10 },
          { title: "The Adolescence of Technology", authors: "Dario Amodei", year: 2026, minutes: 100 },
        ],
        showThreatMap: true,
      },
      {
        unit: 3, lesson: 2, title: "Prioritising threat pathways", duration: "35 min",
      },
      {
        unit: 3, lesson: 3, title: "Option 1: Power concentration", duration: "50 min",
      },
      {
        unit: 3, lesson: 4, title: "Option 2: Gradual disempowerment", duration: "1h 25min",
        resources: [
          { title: "The Intelligence Curse", authors: "Luke Drago and Rudolf Laine", year: 2025, minutes: 35, listenUrl: "#" },
          { title: "Gradual Disempowerment Summary", authors: "Aniket Chakravorty, Dewi Erwan", year: 2025, minutes: 15 },
          { title: "AI and Leviathan: Part I", authors: "Samuel Hammond", year: 2023, minutes: 15, listenUrl: "#" },
        ],
        hasExercises: true,
        optionalResources: [
          { title: "Gradual Disempowerment", authors: "Kulveit et al.", year: 2025, minutes: 60 },
          { title: "What failure looks like", authors: "Paul Christiano", year: 2019, minutes: 10, listenUrl: "#" },
          { title: "AGI, Government, and the Free Society", authors: "Seb Krier", year: 2025, minutes: 10 },
          { title: "What Happens When Capitalism Doesn't Need Workers Anymore?", authors: "Economics Explained", year: 2025, minutes: 20 },
          { title: "The AI takeover we won't see coming", authors: "Future Atlas", year: 2026, minutes: 20 },
        ],
      },
      {
        unit: 3, lesson: 5, title: "Option 3: Catastrophic pandemics", duration: "45 min",
      },
      {
        unit: 3, lesson: 6, title: "Option 4: Critical infrastructure collapse", duration: "1h 25min",
        resources: [
          { title: "Cyber attacks on critical infrastructure", authors: "Allianz Insurance", year: 2016, minutes: 10 },
          { title: "How AI could enable critical infrastructure collapse", authors: "Li-Lian Ang", year: 2025, minutes: 5 },
          { title: "Electric Grid Cyberattack: An AI-Informed Threat Model", authors: "Byron Tomes", year: 2024, minutes: 30 },
          { title: "The Future of Phishing", authors: "CivAI", year: 2025, minutes: 10 },
          { title: "3cb: The Catastrophic Cyber Capabilities Benchmark", authors: "Jonathan Ng", year: 2024, minutes: 10 },
        ],
        hasExercises: true,
        showThreatMap: true,
      },
    ],
  },
  {
    number: 4,
    title: "Defence in Depth",
    lessons: [
      {
        unit: 4, lesson: 1, title: "What might success look like?", duration: "5 min",
        optionalResources: [
          { title: "Strategic Visions in AI Governance: Mapping Pathways to Victory", authors: "Oscar Delaney", year: 2026, minutes: 10 },
        ],
      },
      {
        unit: 4, lesson: 2, title: "Building defences", duration: "20 min",
      },
      {
        unit: 4, lesson: 3, title: "Layer 1: Prevent dangerous AI training", duration: "30 min",
      },
      {
        unit: 4, lesson: 4, title: "Layer 2: Constrain dangerous AI capabilities", duration: "50 min",
      },
      {
        unit: 4, lesson: 5, title: "Layer 3: Withstand dangerous AI actions", duration: "30 min",
      },
    ],
  },
  {
    number: 5,
    title: "Start Contributing",
    lessons: [
      {
        unit: 5, lesson: 1, title: "Choose your focus", duration: "35 min",
      },
      {
        unit: 5, lesson: 2, title: "Go deep in one area", duration: "1h",
      },
      {
        unit: 5, lesson: 3, title: "Make a plan", duration: "1h 10min",
      },
      {
        unit: 5, lesson: 4, title: "Create your 1-pager", duration: "Optional",
      },
      {
        unit: 5, lesson: 5, title: "Optional advice", duration: "2h",
      },
      {
        unit: 5, lesson: 6, title: "Next steps: Deeper-dive courses", duration: "",
      },
      {
        unit: 5, lesson: 7, title: "Next steps: Programs", duration: "",
      },
    ],
  },
];

export function getLesson(unit: number, lesson: number): Lesson | undefined {
  const u = CURRICULUM.find((u) => u.number === unit);
  return u?.lessons.find((l) => l.lesson === lesson);
}

export function getAdjacentLessons(unit: number, lesson: number) {
  const flat: { unit: number; lesson: number; title: string }[] = [];
  for (const u of CURRICULUM) {
    for (const l of u.lessons) {
      flat.push({ unit: l.unit, lesson: l.lesson, title: l.title });
    }
  }
  const idx = flat.findIndex((l) => l.unit === unit && l.lesson === lesson);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

export function getTotalDuration(): string {
  let total = 0;
  for (const u of CURRICULUM) {
    for (const l of u.lessons) {
      const d = l.duration;
      if (!d || d === "Optional") continue;
      const h = d.match(/(\d+)h/);
      const m = d.match(/(\d+)\s*min/);
      if (h) total += parseInt(h[1]) * 60;
      if (m) total += parseInt(m[1]);
    }
  }
  const hours = Math.floor(total / 60);
  const mins = total % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
}

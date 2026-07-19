export type PinIncident = {
  id: string;
  title: string;
  description: string;
  source: string;
  sourceDate: string;
  lat: number;
  lng: number;
  country: string;
  audioUrl?: string;
};

export const INCIDENTS_BY_TOPIC: Record<string, PinIncident[]> = {
  "critical-infrastructure": [
  { id: "ci-1", title: "Ukraine Power Grid Attack (2015)", country: "Ukraine", description: "BlackEnergy malware took down three Ukrainian utilities, leaving hundreds of thousands without power for 6 hours.", source: "Allianz Commercial", sourceDate: "Dec 2015", lat: 48.38, lng: 31.17 },
  { id: "ci-2", title: "Colonial Pipeline Ransomware", country: "United States of America", description: "DarkSide ransomware forced shutdown of the largest US fuel pipeline, causing shortages and panic buying.", source: "BBC News", sourceDate: "May 2021", lat: 35.22, lng: -80.84 },
  { id: "ci-3", title: "Oldsmar Water Poisoning Attempt", country: "United States of America", description: "Hacker increased sodium hydroxide levels in Florida water treatment system. Detected just in time by an operator.", source: "Reuters", sourceDate: "Feb 2021", lat: 28.03, lng: -82.67 },
  { id: "ci-4", title: "Jaguar Land Rover Ransomware", country: "United Kingdom", description: "Ransomware halted luxury car production impacting 5000+ supply chain firms. Cost estimated at 2.1 billion GBP.", source: "Financial Times", sourceDate: "Oct 2025", lat: 52.49, lng: -1.89 },
  { id: "ci-5", title: "First Ransomware-Linked Death", country: "Germany", description: "Ransomware on Duesseldorf University Hospital forced ambulance diversion, causing the first known ransomware fatality.", source: "ZDNet", sourceDate: "Sep 2020", lat: 51.23, lng: 6.79 },
  { id: "ci-6", title: "SolarWinds Supply Chain Attack", country: "United States of America", description: "Russia SVR compromised SolarWinds software, infiltrating Treasury, State, Homeland Security and other US agencies.", source: "NYT", sourceDate: "Dec 2020", lat: 38.9, lng: -77.04 },
  { id: "ci-7", title: "Industroyer2 Ukraine Grid Attack", country: "Ukraine", description: "Russian Sandworm group deployed Industroyer2 malware to take down Ukraine power grid. Foiled hours before blackouts.", source: "Wired", sourceDate: "Apr 2022", lat: 50.45, lng: 30.52 },
  { id: "ci-8", title: "AIIMS Delhi Ransomware", country: "India", description: "Ransomware took India premier hospital offline for 2 weeks, forcing manual operations and delaying patient care.", source: "Indian Express", sourceDate: "Nov 2022", lat: 28.57, lng: 77.21 },
  { id: "ci-9", title: "Norway Hydro Power Grid Cyber Intrusion", country: "Norway", description: "Sophisticated cyber intrusion targeting Norway hydroelectric control systems. Attackers probed SCADA networks controlling dam operations at multiple facilities in Telemark region.", source: "NSM Norway", sourceDate: "Aug 2024", lat: 59.91, lng: 10.75, audioUrl: "/Norway Cyberattack Audio for Map.mp3" }
  ],
  "email-phishing": [
  { id: "ph-1", title: "Twitter VIP Account Takeover", country: "United States of America", description: "Spear-phishing attack on Twitter employees enabled hackers to hijack celebrity accounts and post a Bitcoin scam.", source: "Wired", sourceDate: "Jul 2020", lat: 37.77, lng: -122.42 },
  { id: "ph-2", title: "Biden Campaign Spear-Phishing", country: "United States of America", description: "Iranian hackers sent targeted phishing emails to Biden campaign officials with malicious links to steal credentials.", source: "Reuters", sourceDate: "Aug 2024", lat: 38.9, lng: -77.04 },
  { id: "ph-3", title: "SingHealth Data Breach", country: "Singapore", description: "Phishing email targeting a staff member led to theft of 1.5M patient records including the Prime Minister data.", source: "CNA", sourceDate: "Jul 2018", lat: 1.35, lng: 103.87 },
  { id: "ph-4", title: "Google Docs Phishing Worm", country: "United States of America", description: "Mass phishing attack used a fake Google Docs app, tricking millions into granting account permissions.", source: "The Verge", sourceDate: "May 2017", lat: 37.42, lng: -122.08 },
  { id: "ph-5", title: "COVID-19 NHS Phishing Wave", country: "United Kingdom", description: "Wave of phishing emails targeted NHS staff during pandemic, exploiting fear to steal credentials.", source: "BBC News", sourceDate: "Mar 2020", lat: 51.51, lng: -0.12 },
  { id: "ph-6", title: "CEO Fraud Phishing in Japan", country: "Japan", description: "Hackers targeted company employees with emails impersonating CEOs, requesting urgent wire transfers.", source: "Nikkei Asia", sourceDate: "Jun 2023", lat: 35.68, lng: 139.76 }
  ]
};

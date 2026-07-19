import type { PinCopy } from "./pin-base";

/** English pin copy. ci-9 has no EN audio yet — omit audioUrl until a file is provided. */
export const PIN_COPY_EN: Record<string, PinCopy> = {
  "ci-1": {
    title: "BlackEnergy attack on Ukraine's power grid",
    description: "BlackEnergy malware disrupted three Ukrainian utility companies and left hundreds of thousands without power for six hours.",
    source: "Allianz Commercial",
    sourceDate: "December 2015",
  },
  "ci-2": {
    title: "Colonial Pipeline ransomware attack",
    description: "DarkSide ransomware shut down the largest US fuel pipeline, triggering fuel shortages and panic buying.",
    source: "BBC",
    sourceDate: "May 2021",
  },
  "ci-3": {
    title: "Oldsmar water treatment poisoning attempt",
    description: "An intruder raised sodium hydroxide levels at a Florida water plant. Disaster was averted only because an operator noticed in time.",
    source: "Reuters",
    sourceDate: "February 2021",
  },
  "ci-4": {
    title: "Jaguar Land Rover ransomware attack",
    description: "Ransomware halted luxury car production and affected more than 5,000 supply-chain firms. Cost estimated at £2.1 billion.",
    source: "Financial Times",
    sourceDate: "October 2025",
  },
  "ci-5": {
    title: "First death linked to ransomware",
    description: "Ransomware on Düsseldorf University Hospital forced ambulance diversions and led to the first known death linked to a ransomware attack.",
    source: "ZDNet",
    sourceDate: "September 2020",
  },
  "ci-6": {
    title: "SolarWinds supply-chain attack",
    description: "Russia's SVR compromised SolarWinds software and pivoted into the US Treasury, State Department, DHS, and other agencies.",
    source: "New York Times",
    sourceDate: "December 2020",
  },
  "ci-7": {
    title: "Industroyer2 attack on Ukraine's power grid",
    description: "Russia's Sandworm group deployed Industroyer2 to disrupt Ukraine's grid. The attack was stopped hours before an outage.",
    source: "Wired",
    sourceDate: "April 2022",
  },
  "ci-8": {
    title: "Ransomware on AIIMS New Delhi",
    description: "Ransomware disabled systems at India's largest medical institute for two weeks, forcing manual workflows and delaying care.",
    source: "Indian Express",
    sourceDate: "November 2022",
  },
  "ci-9": {
    title: "Norway hydropower network intrusion",
    description: "A sophisticated cyber intrusion targeted control systems at Norwegian hydropower plants. Attackers probed SCADA networks managing dam operations across several facilities in Telemark.",
    source: "Norwegian National Security Authority",
    sourceDate: "August 2024",
    // No English audio file yet — omit player until provided.
  },
  "ph-1": {
    title: "Twitter VIP account takeover",
    description: "A spear-phishing attack on Twitter employees let attackers seize celebrity accounts and post a Bitcoin scam tweet.",
    source: "Wired",
    sourceDate: "July 2020",
  },
  "ph-2": {
    title: "Phishing against the Biden campaign",
    description: "Iranian hackers sent tailored phishing emails with malicious links to Biden campaign officials to steal credentials.",
    source: "Reuters",
    sourceDate: "August 2024",
  },
  "ph-3": {
    title: "SingHealth data breach",
    description: "A phishing email targeting an employee led to the theft of 1.5 million patient records in Singapore, including the prime minister's.",
    source: "CNA",
    sourceDate: "July 2018",
  },
  "ph-4": {
    title: "Google Docs phishing worm",
    description: "A mass phishing campaign used a fake Google Docs app and tricked millions into granting account access.",
    source: "The Verge",
    sourceDate: "May 2017",
  },
  "ph-5": {
    title: "COVID-19 phishing wave against the NHS",
    description: "Phishing emails targeted UK NHS staff during the pandemic, exploiting fear to steal login credentials.",
    source: "BBC",
    sourceDate: "March 2020",
  },
  "ph-6": {
    title: "CEO impersonation fraud in Japan",
    description: "Attackers emailed company staff impersonating executives and requesting urgent wire transfers.",
    source: "Nikkei Asia",
    sourceDate: "June 2023",
  },
};

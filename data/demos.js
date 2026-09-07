/* ============================================================
   Smart Grid R&D Center — IITH
   data/demos.js — Lab Demonstration Formats
   ============================================================ */

const DEMOS = [
  {
    id:       "demo-30min",
    duration:  30,
    unit:      "min",
    type:      "Demo / Class",
    icon:      "🎓",
    title:     "Full Demonstration & Class",
    description: `A comprehensive laboratory demonstration suitable for academic classes, 
      industry visitors, and delegations. Covers the full scope of the lab's 
      research areas with interactive Q&A and technical deep-dives. 
      Seating for up to 15–20 members.`,
    audience:  "Faculty, students, industry professionals, delegations",
    videoUrl:  null,
    demoZones: ["CEMS Zone", "Smart Grid Zone", "EV Zone", "Microgrid Zone"],
    qrDestination: "events.html#demo-formats"
  },
  {
    id:       "demo-15min",
    duration:  15,
    unit:      "min",
    type:      "Standard Demo",
    icon:      "⚡",
    title:     "Standard Demonstration",
    description: `A focused demonstration covering the core technologies and research 
      outcomes. Ideal for short visits, VIP guests, and institutional tours. 
      Covers key highlights across the lab's research areas.`,
    audience:  "VIP guests, institutional visitors, short-duration visits",
    videoUrl:  null,
    demoZones: ["Smart Grid Zone", "CEMS Zone"],
    qrDestination: "events.html#demo-formats"
  },
  {
    id:       "demo-5min",
    duration:  5,
    unit:      "min",
    type:      "Quick Demo",
    icon:      "🚀",
    title:     "Quick Introduction Demo",
    description: `A rapid overview demonstration designed for brief visits, orientation 
      sessions, and walk-through tours. Delivers the core research story — 
      energy problem, our solution, real-world impact — in a compelling 
      five-minute narrative.`,
    audience:  "Brief visits, orientation tours, media",
    videoUrl:  null,
    demoZones: ["Smart Grid Zone"],
    qrDestination: "events.html#demo-formats"
  }
];

const DEMO_ZONES = [
  {
    id:          "zone-cems",
    name:        "CEMS Zone",
    technology:  "Campus Energy Management System",
    description: "Campus energy management supervisory monitoring testbed.",
    monitors:    "2 monitors"
  },
  {
    id:          "zone-smart-grid",
    name:        "Smart Grid Demo Zone",
    technology:  "Smart Grid Technologies",
    description: "Dual microgrid and SCADA telemetry demonstration zone.",
    monitors:    "2 monitors for SG setup"
  },
  {
    id:          "zone-ev",
    name:        "EV Integration Zone",
    technology:  "Electric Vehicle & Charging",
    description: "Grid-interactive electric vehicle charging and power converter testbed.",
    monitors:    null
  },
  {
    id:          "zone-microgrid",
    name:        "Microgrid Zone",
    technology:  "Microgrid Systems",
    description: "Renewable energy and hybrid storage microgrid platform.",
    monitors:    null
  }
];


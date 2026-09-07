/* ============================================================
   Smart Grid R&D Center — IITH
   data/displays.js — Physical Display to QR to Website Mapping
   Bridges physical lab displays to website pages
   ============================================================ */

const DISPLAYS = [
  /* ─── Student / Staff Posters ──────────────────────────────── */
  {
    id:          "display-current-team",
    type:        "Student",
    title:       "Current Research Team",
    description: "Active PhD researchers, M.Tech researchers, and Project Staff associated with the Smart Grid R&D Center",
    destination: "team.html#current",
    qrGenerated: false,
    physicalLocation: "Research Directory Display"
  },

  /* ─── Alumni Poster ────────────────────────────────────────── */
  {
    id:          "display-alumni",
    type:        "Alumni",
    title:       "Past Research Team — Alumni",
    description: "Previous PhD and M.Tech students who completed their studies at IITH under this lab",
    destination: "team.html#alumni",
    qrGenerated: false,
    physicalLocation: "Alumni Directory Display"
  },

  /* ─── Demo Videos ─────────────────────────────────────────── */
  {
    id:          "display-demo-30",
    type:        "Demonstration",
    title:       "30-Minute Demo — Full Lab Tour",
    description: "Full demonstration covering all research areas",
    destination: "media.html#demo-30min",
    qrGenerated: false,
    physicalLocation: "Main demo area"
  },
  {
    id:          "display-demo-15",
    type:        "Demonstration",
    title:       "15-Minute Demo — Standard Visit",
    description: "Standard demonstration for visitors and guests",
    destination: "media.html#demo-15min",
    qrGenerated: false,
    physicalLocation: "Main demo area"
  },
  {
    id:          "display-demo-5",
    type:        "Demonstration",
    title:       "5-Minute Demo — Quick Introduction",
    description: "Brief introduction to lab research",
    destination: "media.html#demo-5min",
    qrGenerated: false,
    physicalLocation: "Lab entrance"
  },

  /* ─── Publications Poster ─────────────────────────────────── */

  /* ─── Patent Poster ───────────────────────────────────────── */
  {
    id:          "display-patents",
    type:        "Patent",
    title:       "Patents & Technology Transfer",
    description: "Patents developed under this lab with TRL levels and technology transfer possibilities",
    destination: "publications.html#patents",
    qrGenerated: false,
    physicalLocation: "Patents Display"
  },

  /* ─── Power Sense Poster ──────────────────────────────────── */
  {
    id:          "display-power-sense",
    type:        "Startup",
    title:       "Power Sense Pvt Ltd",
    description: "Startup company from this lab — activities and projects",
    destination: "startup.html",
    qrGenerated: false,
    physicalLocation: "Startup Showcase"
  },

  /* ─── Technology Displays ──────────────────────────────────── */
  {
    id:          "display-cems",
    type:        "Technology",
    title:       "CEMS — Campus Energy Management System",
    description: "Research into intelligent energy management for campus infrastructure",
    destination: "research.html#cems",
    qrGenerated: false,
    physicalLocation: "CEMS Zone"
  },
  {
    id:          "display-ups",
    type:        "Technology",
    title:       "UPS Systems Research",
    description: "Research on UPS topologies and power quality",
    destination: "research.html#ups",
    qrGenerated: false,
    physicalLocation: "UPS & Power Quality Zone"
  },
  {
    id:          "display-ev",
    type:        "Technology",
    title:       "EV & Charging Infrastructure",
    description: "Electric vehicle integration and smart charging research",
    destination: "research.html#ev",
    qrGenerated: false,
    physicalLocation: "EV Integration Zone"
  },
  {
    id:          "display-smart-grid",
    type:        "Technology",
    title:       "Smart Grid Technologies",
    description: "Grid modernisation and automation research",
    destination: "research.html#smart-grid",
    qrGenerated: false,
    physicalLocation: "Smart Grid Demo Zone"
  },
  {
    id:          "display-microgrid",
    type:        "Technology",
    title:       "Microgrid Systems",
    description: "Distributed energy and microgrid research",
    destination: "research.html#microgrid",
    qrGenerated: false,
    physicalLocation: "Microgrid Zone"
  }
];

/* Display type colours for badges */
const DISPLAY_TYPE_COLORS = {
  "Student":       { bg: "#FFF1D6", text: "#C94B00" },
  "Alumni":        { bg: "#EDE9FE", text: "#5B21B6" },
  "Demonstration": { bg: "#D1FAE5", text: "#065F46" },
  "Publication":   { bg: "#FEF3C7", text: "#92400E" },
  "Patent":        { bg: "#FCE7F3", text: "#9D174D" },
  "Startup":       { bg: "#FFE4E6", text: "#9F1239" },
  "Technology":    { bg: "#FFF4E5", text: "#C94B00" },
  "Project":       { bg: "#FFF1D6", text: "#C94B00" },
  "Other":         { bg: "#F3F4F6", text: "#374151" }
};
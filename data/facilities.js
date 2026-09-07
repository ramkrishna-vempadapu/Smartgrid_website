/* ============================================================
   Smart Grid R&D Center — IITH
   data/facilities.js — Lab Infrastructure and Facilities
   ============================================================ */

const FACILITIES = {
  overview: "Comprehensive laboratory testbeds for smart grid and microgrid research.",

  infrastructure: [
    {
      id:          "infra-sg-setup",
      name:        "Smart Grid Demonstration Setup",
      category:    "Demonstration Equipment",
      description: "Integrated dual microgrid hardware setup supported by LS Electricals.",
      monitors:    "2 dedicated monitors",
      status:      "verified"
    },
    {
      id:          "infra-cems",
      name:        "CEMS Setup",
      category:    "Monitoring System",
      description: "Campus Energy Management System real-time supervisory telemetry workstation.",
      monitors:    "2 monitors for CEMS telemetry",
      status:      "verified"
    },
    {
      id:          "infra-cctv",
      name:        "CCTV System",
      category:    "Security & Monitoring",
      description: "CCTV surveillance infrastructure for lab security and monitoring.",
      monitors:    "Dedicated monitoring console",
      status:      "verified"
    },
    {
      id:          "infra-tvs",
      name:        "Display TVs",
      category:    "Display Infrastructure",
      description: "Display screens for presenting lab data, demonstration videos, and real-time power flows.",
      status:      "verified"
    },
    {
      id:          "infra-transformer",
      name:        "Transformer Display",
      category:    "Demonstration",
      description: "Dedicated display and safety enclosure for experimental transformer test units.",
      status:      "verified"
    }
  ],

  prototypeShowcase: {
    id:          "rack-prototypes",
    name:        "Prototype & Hardware Showcase",
    description: `A designated showcase displaying tested energy meters, motor starters, and indigenous prototypes developed in the laboratory.`,
    items:       ["Tested Energy Meters", "Motor Starters", "Early Converter Prototypes"],
    status:      "verified"
  },

  testingCertification: {
    title:       "Lab Testing & Certification",
    description: "Laboratory capabilities for experimental verification, harmonic compliance, and power quality testing.",
    standards:   ["IEEE 1547 Grid Interconnection Protocols", "CEA Technical Standards"]
  },

  safety: {
    title:       "Laboratory Safety & Compliance",
    note:        "Standard operating protocols, emergency shutdown switches, and acrylic protection enclosures are in place."
  },

  seating: {
    capacity:    "15 to 20 members",
    description: "Configured seating arrangement for group demonstrations and academic delegations."
  },

  naming: {
    singleLineDiagram: "Single Line Diagram of Smart Grid Setup",
    namePlate: {
      text:      "Smart Grid R&D Center",
      fundedBy:  "LS Electricals",
      }
  }
};


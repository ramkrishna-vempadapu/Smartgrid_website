/* ============================================================
   Smart Grid R&D Center — IIT Hyderabad
   data/technologies.js — Research Projects & Technology Data
   Central Source of Truth for Research Page & Static QR Code System
   ============================================================ */

const RESEARCH_PROJECTS = [
  {
    id: "cems",
    title: "CEMS — Campus Energy Management System",
    shortName: "CEMS",
    category: "ENERGY MANAGEMENT",
    filterCategory: "energy-management",
    area: "Energy Management & Optimization",
    demoZone: "CEMS Zone",
    demoZoneId: "cems",
    icon: "⚡",
    description: "Research into intelligent energy management systems that monitor, control, and optimize energy consumption across campus-scale infrastructure. CEMS integrates real-time data acquisition with smart decision-making algorithms to reduce energy waste, balance peak loads, and improve overall grid reliability.",
    researchFocus: [
      "Campus-scale real-time energy monitoring",
      "Dynamic load forecasting & demand response",
      "Automated energy auditing & analytics",
      "Renewable integration balancing"
    ],
    currentWork: {
      title: "Demonstration & Setup",
      description: "Live demonstration supported in the dedicated CEMS Zone with real-time telemetry streaming and automated peak-shaving analytics.",
      status: "Integrated supervisory console with live feeder monitoring."
    },
    buttonText: "Open CEMS →",
    // Real CEMS Web Application URL (Google Apps Script)
    url: "https://script.google.com/a/macros/bvrit.ac.in/s/AKfycbwtvywmOVEmUmt_KmbZaSXvZNxsMh5ci2DDdfCG1TCch1gr3E3QqI5xYCxbnaI5N0F6/exec",
    qrImage: "assets/images/research/qr/cems-qr.png",
    qrAlt: "Scan QR code to open CEMS project portal"
  },
  {
    id: "ups",
    title: "UPS — Uninterruptible Power Supply Systems",
    shortName: "UPS",
    category: "POWER SYSTEMS",
    filterCategory: "power-systems",
    area: "Power Quality & Reliability",
    demoZone: "UPS & Power Quality Zone",
    demoZoneId: "ups",
    icon: "🔋",
    description: "Research on advanced UPS topologies, high-efficiency power electronics converter design, battery management systems (BMS), and power conditioning technologies. Ensuring uninterrupted, harmonic-free power supply for mission-critical industrial, medical, and data center loads.",
    researchFocus: [
      "Critical load protection & harmonic mitigation",
      "Advanced multilevel inverter topologies",
      "Battery energy storage system (BESS) integration",
      "Fast dynamic voltage regulation"
    ],
    currentWork: {
      title: "Demonstration & Setup",
      description: "Hardware converters and power quality testbed for live load-switching experiments and seamless transfer validation.",
      status: "Active hardware testbench with dynamic load steps."
    },
    buttonText: "Open UPS →",
    // Real UPS Web Application URL (Google Apps Script)
    url: "https://script.google.com/macros/s/AKfycbwMkNT8K24xMB-YTlmEhZgeusYnoZo8wzuH7rghkw4shE5gEBPPvr6dJ94xPZ3gMcfU/exec",
    qrImage: "assets/images/research/qr/ups-qr.png",
    qrAlt: "Scan QR code to open UPS monitoring portal"
  },
  {
    id: "ev",
    title: "EV — Electric Vehicle & Charging Infrastructure",
    shortName: "EV",
    category: "ELECTRIC MOBILITY",
    filterCategory: "electric-mobility",
    area: "E-Mobility & Grid Integration",
    demoZone: "EV Integration Zone",
    demoZoneId: "ev",
    icon: "🚗",
    description: "Investigating electric vehicle charging architectures, Vehicle-to-Grid (V2G) bidirectional power flow, smart charging scheduling algorithms, and distribution grid impact mitigation during concurrent fast charging events.",
    researchFocus: [
      "Bidirectional V2G and V2H power transfer",
      "Smart EV charging coordination algorithms",
      "Grid harmonic and voltage sag mitigation",
      "EV fleet charging station optimization"
    ],
    currentWork: {
      title: "Demonstration & Setup",
      description: "EV charging emulator and DC fast charger interface integrated with the central laboratory microgrid bus.",
      status: "Bidirectional power flow testing setup."
    },
    buttonText: "Open EV Project →",
    // TODO: Replace placeholder URL and QR code when real project URL is available.
    url: "https://example.com/research/ev-charging",
    qrImage: "assets/images/research/qr/ev-qr.png",
    qrAlt: "Scan QR code to open EV charging research portal"
  },
  {
    id: "smart-grid",
    title: "Smart Grid Technologies",
    shortName: "Smart Grid",
    category: "SMART GRID",
    filterCategory: "smart-grid",
    area: "Grid Modernisation & Automation",
    demoZone: "Smart Grid Demo Zone",
    demoZoneId: "smart-grid",
    icon: "🔌",
    description: "Comprehensive research on modernising electrical distribution networks using advanced sensing, IoT telemetry, digital relaying, and real-time supervisory control. Features Single Line Diagram (SLD) analysis, automated fault detection, and digital substation integration.",
    researchFocus: [
      "Single Line Diagram (SLD) real-time power flow analysis",
      "Automated fault detection, isolation, and service restoration (FDIR)",
      "SCADA & telemetry protocol interoperability",
      "Grid cybersecurity and resilient state estimation"
    ],
    currentWork: {
      title: "Demonstration & Setup",
      description: "Central Smart Grid Setup funded by LS Electricals. Includes hardware SLD diagram and digital protection consoles.",
      status: "Active digital protection and control testbed."
    },
    buttonText: "Open Smart Grid →",
    // TODO: Replace placeholder URL and QR code when real project URL is available.
    url: "https://example.com/research/smart-grid",
    qrImage: "assets/images/research/qr/smart-grid-qr.png",
    qrAlt: "Scan QR code to open Smart Grid technologies portal"
  },
  {
    id: "microgrid",
    title: "Microgrid Systems",
    shortName: "Microgrid",
    category: "MICROGRIDS",
    filterCategory: "microgrids",
    area: "Distributed Energy & Resilience",
    demoZone: "Microgrid Zone",
    demoZoneId: "microgrid",
    icon: "🌐",
    description: "Research on autonomous islanded and grid-connected microgrid architectures integrating renewable generation (solar PV, wind), battery storage, and controllable loads. Focuses on seamless transition algorithms, frequency stabilization, and decentralized energy management.",
    researchFocus: [
      "Seamless grid-tied to islanded mode transition",
      "Droop control and secondary frequency regulation",
      "Renewable energy smoothing and storage management",
      "Rural and remote microgrid resilience"
    ],
    currentWork: {
      title: "Demonstration & Setup",
      description: "Dual Microgrid Platform (Microgrid 1 & Microgrid 2) featuring solar PV, wind, battery storage, supercapacitors, and fuel cell emulators.",
      status: "Active dual microgrid testbed platform."
    },
    buttonText: "Open Microgrid →",
    // TODO: Replace placeholder URL and QR code when real project URL is available.
    url: "https://example.com/research/microgrid",
    qrImage: "assets/images/research/qr/microgrid-qr.png",
    qrAlt: "Scan QR code to open Microgrid systems portal"
  }
];

// Backwards compatibility alias
const TECHNOLOGIES = RESEARCH_PROJECTS;

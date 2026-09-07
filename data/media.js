/* ============================================================
   Smart Grid R&D Center — IIT Hyderabad
   data/media.js — Institutional Photo Archive & Media Configuration
   ============================================================
   EASY FUTURE IMAGE MANAGEMENT GUIDE:
   - To add a new DISCOM Batch: find discom: [...] below and copy the template.
   - To add a new Student Batch: find students: [...] below and copy the template.
   - To add a new Visitor Album: find visitors: [...] below and copy the template.
   - To add new Laboratory Setup photos: find setup: [...] and add the image path.
   - To add new Hardware photos: find hardware: [...] and add the image path.
   
   IMPORTANT RULES:
   1. If an album does not have a separate coverImage, the system automatically
      uses images[0] as the cover.
   2. Photo counts are calculated dynamically via images.length.
   3. If an album has no photos yet (images: []), the system cleanly displays
      "Photos coming soon" without any broken image links.
   4. File paths must match the exact case of the files (e.g. .jpg vs .jpeg).
   ============================================================ */

window.MEDIA_ALBUMS = {

  /* ==========================================================
     1. INDUSTRY VISITS & DISCOM BATCHES
     ========================================================== */
  discom: [
    // DISCOM BATCH 1 (21 Photos)
    {
      id: "discom-batch-1",
      title: "DISCOM Batch 1",
      subtitle: "RDSS Capacity Building Program — Batch 1",
      description: "Middle management level DISCOM engineers participating in smart-grid, SCADA telemetry, and loss reduction sessions at the Smart Grid R&D Center.",
      badge: "RDSS • MoP",
      // coverImage is optional — automatically defaults to images[0]
      images: [
        "assets/images/events/b11.jpg",
        "assets/images/events/b12.jpg",
        "assets/images/events/b13.jpg",
        "assets/images/events/b14.jpg",
        "assets/images/events/b15.jpg",
        "assets/images/events/b16.jpg",
        "assets/images/events/b17.jpg",
        "assets/images/events/b18.jpg",
        "assets/images/events/b19.jpg",
        "assets/images/events/b110.jpg",
        "assets/images/events/b111.jpg",
        "assets/images/events/b112.jpg",
        "assets/images/events/b113.jpg",
        "assets/images/events/b114.jpg",
        "assets/images/events/b115.jpg",
        "assets/images/events/b116.jpg",
        "assets/images/events/b117.jpg",
        "assets/images/events/b118.jpeg",
        "assets/images/events/b119.jpg",
        "assets/images/events/b120.jpg",
        "assets/images/events/b121.jpg"
      ]
    },

    // DISCOM BATCH 2 (11 Photos)
    {
      id: "discom-batch-2",
      title: "DISCOM Batch 2",
      subtitle: "RDSS Advanced Power Systems Cohort — Batch 2",
      description: "Utility engineering personnel undergoing hands-on training in distributed energy integration, feeder automation, and microgrid switching.",
      badge: "RDSS • MoP",
      images: [
        "assets/images/events/b21.jpeg",
        "assets/images/events/b22.jpeg",
        "assets/images/events/b23.jpeg",
        "assets/images/events/b24.jpg",
        "assets/images/events/b25.jpg",
        "assets/images/events/b26.jpg",
        "assets/images/events/b27.jpg",
        "assets/images/events/b28.jpg",
        "assets/images/events/b29.jpg",
        "assets/images/events/b210.jpg",
        "assets/images/events/b211.jpg"
      ]
    },

    // DISCOM BATCH 3 (Template ready for future photos)
    {
      id: "discom-batch-3",
      title: "DISCOM Batch 3",
      subtitle: "Upcoming Utility Training Cohort",
      description: "Specialized capacity building program for regional distribution utility executives.",
      badge: "Upcoming",
      images: [] // Empty album: cleanly shows "Photos coming soon"
    }

    // ──────────────────────────────────────────────────────────
    // HOW TO ADD A NEW DISCOM BATCH:
    // Copy the block below and paste above this comment:
    // ----------------------------------------------------------
    // ,{
    //   id: "discom-batch-4",
    //   title: "DISCOM Batch 4",
    //   subtitle: "Training Program Title",
    //   description: "Description of the batch activities.",
    //   badge: "RDSS Training",
    //   images: [
    //     "assets/images/events/b41.jpg",
    //     "assets/images/events/b42.jpg"
    //   ]
    // }
    // ──────────────────────────────────────────────────────────
  ],


  /* ==========================================================
     2. STUDENT WORKSHOPS & LEARNING EXPERIENCES
     ========================================================== */
  students: [
    // STUDENT BATCH 1 (10 Photos)
    {
      id: "student-batch-1",
      title: "Student Batch 1",
      subtitle: "Academic Demonstration & Laboratory Study Tour",
      description: "Undergraduate and postgraduate engineering researchers exploring microgrid testbeds, real-time power flow control, and simulator consoles.",
      badge: "IITH Academic Tour",
      images: [
        "assets/images/events/student1.jpeg",
        "assets/images/events/student2.jpeg",
        "assets/images/events/student3.jpeg",
        "assets/images/events/student4.jpeg",
        "assets/images/events/student5.jpeg",
        "assets/images/events/student6.jpeg",
        "assets/images/events/student7.jpeg",
        "assets/images/events/student8.jpeg",
        "assets/images/events/student9.jpeg",
        "assets/images/events/student10.jpeg"
      ]
    },

    // STUDENT BATCH 2 (2 Photos)
    {
      id: "student-batch-2",
      title: "Student Batch 2",
      subtitle: "Energy Systems Research Scholars Cohort",
      description: "Research scholars and students conducting experimental testing on live microgrid consoles and distributed generation emulators.",
      badge: "Research Scholars",
      images: [
        "assets/images/events/student_b1.jpg",
        "assets/images/events/student1.jpg"
      ]
    },

    // STUDENT BATCH 3 (Template ready for future photos)
    {
      id: "student-batch-3",
      title: "Student Batch 3",
      subtitle: "Upcoming Student Cohort",
      description: "Upcoming laboratory training sessions and hands-on experiments for future academic sessions.",
      badge: "Upcoming",
      images: []
    }

    // ──────────────────────────────────────────────────────────
    // HOW TO ADD A NEW STUDENT BATCH:
    // Copy the block below and paste above this comment:
    // ----------------------------------------------------------
    // ,{
    //   id: "student-batch-4",
    //   title: "Student Batch 4",
    //   subtitle: "Batch Subtitle / Topic",
    //   description: "Student training and laboratory experience.",
    //   badge: "Academic Session",
    //   images: [
    //     "assets/images/events/student11.jpeg"
    //   ]
    // }
    // ──────────────────────────────────────────────────────────
  ],


  /* ==========================================================
     3. VISITORS & DELEGATIONS
     ========================================================== */
  visitors: [
    {
      id: "visitor-experience",
      title: "42 Learn Manager",
      subtitle: "Institutional & Delegation Lab Visits",
      description: "Power sector leadership, institutional delegates, and researchers visiting the Smart Grid R&D Center for technology reviews and demonstrations.",
      badge: "Institutional Delegation",
      images: [
        "assets/images/events/visitor1.jpg",
        "assets/images/events/p1.jpeg"
      ]
    },
    {
      id: "visitor-upcoming",
      title: "IITH CMD Department",
      subtitle: "Electical department",
      description: "Photographs for scheduled technical visits and international research delegations will be archived here.",
      badge: "IITH CMD",
      images: [
        "assets/images/events/visitor2.jpg",
        "assets/images/events/visitor3.jpg",
      ]
    }

    // ──────────────────────────────────────────────────────────
    // HOW TO ADD A NEW VISITOR ALBUM:
    // Copy the block below and paste above this comment:
    // ----------------------------------------------------------
    // ,{
    //   id: "visitor-album-2",
    //   title: "Delegation Title / Event",
    //   subtitle: "Delegation Subtitle",
    //   description: "Description of the delegation visit.",
    //   badge: "Visitor Delegation",
    //   images: [
    //     "assets/images/events/visitor2.jpg"
    //   ]
    // }
    // ──────────────────────────────────────────────────────────
  ],


  /* ==========================================================
     4. EQUIPMENT & LABORATORY SETUP
     ========================================================== */
  setup: [
    // LABORATORY INSTALLATIONS & TESTBEDS (18 Photos)
    {
      id: "lab-installations",
      title: "Installation & Equipment Setup",
      subtitle: "Laboratory Setup, Testbeds & Measurement Infrastructure",
      description: "Full-scale experimental arrangements, real-time digital simulation platforms, touchscreen SCADA consoles, AC/DC distribution switchgear, and high-voltage test racks.",
      badge: "Laboratory Setup",
      images: [
        "assets/images/events/setup1.jpg",
        "assets/images/events/setup2.jpg",
        "assets/images/events/setup3.jpg",
        "assets/images/events/setup4.jpg",
        "assets/images/events/setup5.jpg",
        "assets/images/events/setup6.jpg",
        "assets/images/events/setup7.jpg",
        "assets/images/events/setup8.jpg",
        "assets/images/events/setup9.jpg",
        "assets/images/events/setup10.jpg",
        "assets/images/events/setup11.jpg",
        "assets/images/events/setup12.jpg",
        "assets/images/events/setup13.jpg",
        "assets/images/events/setup14.jpg",
        "assets/images/events/setup15.jpg",
        "assets/images/events/setup16.jpeg",
        "assets/images/events/setup17.jpeg",
        "assets/images/events/setup1.jpeg"
      ]
    },



    // ──────────────────────────────────────────────────────────
    // HOW TO ADD A NEW SETUP ALBUM:
    // Copy the block below and paste above this comment:
    // ----------------------------------------------------------
    // ,{
    //   id: "setup-album-2",
    //   title: "Setup Title",
    //   subtitle: "Setup Subtitle",
    //   description: "Description of the new setup.",
    //   badge: "Hardware Setup",
    //   images: [
    //     "assets/images/events/setup18.jpg"
    //   ]
    // }
    // ──────────────────────────────────────────────────────────
  ],


  /* ==========================================================
     5. HARDWARE DEVELOPMENT & TESTING
     ========================================================== */
  hardware: [
    // HARDWARE DEVELOPMENT & PROTOTYPES (3 Photos)
    {
      id: "hardware-prototypes",
      title: "Hardware Development & Prototyping",
      subtitle: "Custom Relay Controls & High-Speed Sensing Boards",
      description: "Custom sensor integration, microcontroller development boards, and hardware-in-the-loop interfaces for high-speed voltage and current sensing.",
      badge: "Hardware Development",
      images: [
        "assets/images/events/hardware1.jpeg",
        "assets/images/events/hardware2.jpeg",
        "assets/images/events/hardware3.jpeg"
      ]
    },

    // MOTOR TESTING & TELEMETRY (1 Photo)
    {
      id: "motor-testing",
      title: "Motor Testing & Remote Diagnostics",
      subtitle: "IoT Motor Dashboard & Wireless Monitoring Interface",
      description: "Real-time wireless motor monitoring and telemetry interface displaying runtime parameters, load data, and remote start/stop control.",
      badge: "Motor Testing",
      coverImage: "assets/images/events/motor1.jpeg",
      images: [
        "assets/images/events/motor1.jpeg",
        "assets/images/events/motor2.jpg",
        "assets/images/events/motor2.jpg",
        "assets/images/events/motor3.jpg",
        "assets/images/events/motor4.jpg",
        "assets/images/events/motor5.jpg",
        "assets/images/events/motor6.jpg",
        "assets/images/events/motor7.jpg",
        "assets/images/events/motor9.jpg",
        "assets/images/events/motor10.jpg",
        

        

        


      ]
    }

    // ──────────────────────────────────────────────────────────
    // HOW TO ADD A NEW HARDWARE ALBUM:
    // Copy the block below and paste above this comment:
    // ----------------------------------------------------------
    // ,{
    //   id: "hardware-album-3",
    //   title: "Hardware Title",
    //   subtitle: "Hardware Subtitle",
    //   description: "Description of the hardware development.",
    //   badge: "Hardware & IoT",
    //   images: [
    //     "assets/images/events/hardware4.jpeg"
    //   ]
    // }
    // ──────────────────────────────────────────────────────────
  ]

};

/* ==========================================================
   6. RESEARCH IN ACTION (Representative Visual Highlights)
   ========================================================== */
window.RESEARCH_HIGHLIGHTS = [
  {
    title: "Smart Grid Research",
    tag: "Core Focus",
    icon: "⚡",
    image: "assets/images/events/b11.jpg",
    description: "Advanced power distribution simulation, renewable energy modeling, and real-time loss reduction methodologies.",
    targetSection: "discom-batches"
  },
  {
    title: "Student Learning",
    tag: "Academic Tour",
    icon: "🎓",
    image: "assets/images/events/student1.jpg",
    description: "Immersive hands-on experience on live industrial-grade testbeds, hardware controllers, and energy emulators.",
    targetSection: "student-batches"
  },
  {
    title: "Industry Interaction",
    tag: "RDSS Scheme",
    icon: "🤝",
    image: "assets/images/events/b24.jpg",
    description: "National capacity building programs under RDSS, empowering power utility engineers and DISCOM executives.",
    targetSection: "discom-batches"
  },
  {
    title: "Visitors & Delegations",
    tag: "Institutional Visit",
    icon: "🏛️",
    image: "assets/images/events/visitor1.jpg",
    description: "Institutional delegates and academic leaders touring laboratory infrastructure and technology testbeds.",
    targetSection: "visitors-delegations"
  },
  {
    title: "Laboratory Setup",
    tag: "Hardware Rigs",
    icon: "🔬",
    image: "assets/images/events/setup1.jpg",
    description: "Full-scale experimental arrangements, real-time telemetry systems, and industrial power distribution setups.",
    targetSection: "lab-setup"
  },
  {
    title: "Hardware Prototyping",
    tag: "Custom Electronics",
    icon: "💡",
    image: "assets/images/events/hardware1.jpeg",
    description: "Custom relay controllers, IoT telemetry modules, and high-speed energy sensing electronics.",
    targetSection: "hardware-testing"
  }
];

/* ==========================================================
   7. OFFICIAL LAB SELFIE POINT CONFIGURATION
   ========================================================== */
window.SELFIE_CONFIG = {
  frameImage: "assets/images/media/selfie.png",
  frameWidth: 1536,
  frameHeight: 1024,
  cutout: {
    x: 275,
    y: 235,
    width: 985,
    height: 560,
    radius: 24
  },
  hashtags: [
    "#SmartGridIITH",
    "#SGRnDCenter",
    "#IITH",
    "#PowerSensePvtLtd"
  ]
};

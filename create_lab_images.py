import os

lab_dir = r"d:\Powersense\Smart Grid Website\assets\images\lab"
os.makedirs(lab_dir, exist_ok=True)

# 1. microgrid-1-2.svg
svg_hero = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" width="100%" height="100%">
  <defs>
    <linearGradient id="labBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#180e07"/>
      <stop offset="60%" stop-color="#28160c"/>
      <stop offset="100%" stop-color="#140a04"/>
    </linearGradient>
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#301b10"/>
      <stop offset="30%" stop-color="#22120a"/>
      <stop offset="100%" stop-color="#120804"/>
    </linearGradient>
    <linearGradient id="rackGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2a1e16"/>
      <stop offset="30%" stop-color="#3d2b20"/>
      <stop offset="70%" stop-color="#35241b"/>
      <stop offset="100%" stop-color="#20150e"/>
    </linearGradient>
    <linearGradient id="rackGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#241a14"/>
      <stop offset="40%" stop-color="#3a281e"/>
      <stop offset="100%" stop-color="#1e140d"/>
    </linearGradient>
    <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#422e22"/>
      <stop offset="100%" stop-color="#251810"/>
    </linearGradient>
    <linearGradient id="screenGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#08201c"/>
      <stop offset="100%" stop-color="#041210"/>
    </linearGradient>
    <linearGradient id="screenGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#201208"/>
      <stop offset="100%" stop-color="#0c0603"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Lab Room -->
  <rect width="960" height="720" fill="url(#labBg)"/>
  
  <!-- Perspective Grid lines / Back Wall -->
  <path d="M 0,460 L 960,460 L 960,720 L 0,720 Z" fill="url(#floorGrad)"/>
  <line x1="0" y1="460" x2="960" y2="460" stroke="#ff9a1f" stroke-width="1.5" stroke-opacity="0.35"/>
  <line x1="180" y1="460" x2="0" y2="720" stroke="#ff9a1f" stroke-width="1" stroke-opacity="0.15"/>
  <line x1="380" y1="460" x2="240" y2="720" stroke="#ff9a1f" stroke-width="1" stroke-opacity="0.15"/>
  <line x1="580" y1="460" x2="720" y2="720" stroke="#ff9a1f" stroke-width="1" stroke-opacity="0.15"/>
  <line x1="780" y1="460" x2="960" y2="720" stroke="#ff9a1f" stroke-width="1" stroke-opacity="0.15"/>

  <!-- Top Lab Light Strip -->
  <rect x="160" y="30" width="640" height="8" rx="4" fill="#fff" opacity="0.85" filter="url(#glow)"/>
  <rect x="220" y="34" width="520" height="3" fill="#ffc857" opacity="0.9"/>

  <!-- Center Lab Signboard -->
  <rect x="280" y="55" width="400" height="48" rx="8" fill="#22120a" stroke="#ff9a1f" stroke-width="1.5" stroke-opacity="0.6"/>
  <text x="480" y="78" fill="#ffffff" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle" letter-spacing="1.5">SMART GRID R&amp;D CENTER</text>
  <text x="480" y="93" fill="#ffc857" font-family="Inter, system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="1">IIT HYDERABAD · DUAL MICROGRID TESTBED</text>

  <!-- ================= LEFT RACK: MICROGRID 1 ================= -->
  <g transform="translate(45, 115)">
    <!-- Main Rack Frame -->
    <rect x="0" y="0" width="255" height="490" rx="10" fill="url(#rackGrad1)" stroke="#523624" stroke-width="2"/>
    <rect x="10" y="10" width="235" height="36" rx="6" fill="#1c1008" stroke="#ff7a00" stroke-width="1"/>
    <text x="127" y="32" fill="#ff9a1f" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle" letter-spacing="1">MICROGRID 1</text>
    <text x="127" y="42" fill="#ffc857" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" text-anchor="middle">SOLAR · WIND · BATTERY · SUPERCAP</text>

    <!-- Sub-unit 1: Solar & Wind Generation Emulator -->
    <rect x="12" y="56" width="231" height="98" rx="6" fill="url(#panelGrad)" stroke="#4a3020" stroke-width="1"/>
    <text x="24" y="74" fill="#ffc857" font-family="Inter, sans-serif" font-size="10" font-weight="700">Renewable Generation Source</text>
    <!-- Meter 1 -->
    <rect x="20" y="82" width="96" height="60" rx="4" fill="#0e1815" stroke="#00b894" stroke-width="1"/>
    <text x="28" y="98" fill="#00b894" font-family="monospace" font-size="11" font-weight="bold">415.2 V</text>
    <text x="28" y="112" fill="#8fada8" font-family="monospace" font-size="8">PV EMULATOR</text>
    <path d="M 28,128 L 42,120 L 56,126 L 70,118 L 84,124 L 98,116" fill="none" stroke="#00b894" stroke-width="1.5"/>
    <!-- Meter 2 -->
    <rect x="122" y="82" width="96" height="60" rx="4" fill="#181208" stroke="#ff9a1f" stroke-width="1"/>
    <text x="130" y="98" fill="#ff9a1f" font-family="monospace" font-size="11" font-weight="bold">50.02 Hz</text>
    <text x="130" y="112" fill="#b89c85" font-family="monospace" font-size="8">WIND TURBINE</text>
    <path d="M 130,126 Q 150,116 168,126 T 206,126" fill="none" stroke="#ff9a1f" stroke-width="1.5"/>

    <!-- Sub-unit 2: Li-ion Battery Storage Unit -->
    <rect x="12" y="162" width="231" height="102" rx="6" fill="url(#panelGrad)" stroke="#4a3020" stroke-width="1"/>
    <text x="24" y="180" fill="#ffc857" font-family="Inter, sans-serif" font-size="10" font-weight="700">Li-ion Energy Storage Bank</text>
    <g transform="translate(20, 190)">
      <rect x="0" y="0" width="38" height="62" rx="3" fill="#1c1008" stroke="#ff7a00" stroke-width="1"/>
      <rect x="4" y="10" width="30" height="46" fill="#00b894" opacity="0.85" rx="2"/>
      <circle cx="19" cy="6" r="2" fill="#00b894"/>
      <text x="19" y="38" fill="#fff" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">98%</text>

      <rect x="46" y="0" width="38" height="62" rx="3" fill="#1c1008" stroke="#ff7a00" stroke-width="1"/>
      <rect x="50" y="12" width="30" height="44" fill="#00b894" opacity="0.85" rx="2"/>
      <circle cx="65" cy="6" r="2" fill="#00b894"/>
      <text x="65" y="38" fill="#fff" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">96%</text>

      <rect x="92" y="0" width="106" height="62" rx="3" fill="#101a14" stroke="#00b894" stroke-width="1"/>
      <text x="100" y="18" fill="#00b894" font-family="monospace" font-size="9" font-weight="bold">BMS ACTIVE</text>
      <text x="100" y="34" fill="#fff" font-family="monospace" font-size="8">48.6 V · 120 Ah</text>
      <text x="100" y="48" fill="#8fada8" font-family="monospace" font-size="8">Temp: 24.2 °C</text>
    </g>

    <!-- Sub-unit 3: Supercapacitor & Bi-directional Inverter -->
    <rect x="12" y="272" width="231" height="98" rx="6" fill="url(#panelGrad)" stroke="#4a3020" stroke-width="1"/>
    <text x="24" y="290" fill="#ffc857" font-family="Inter, sans-serif" font-size="10" font-weight="700">Supercapacitor &amp; Fast Response</text>
    <g transform="translate(20, 298)">
      <circle cx="24" cy="30" r="18" fill="#1a1008" stroke="#ff9a1f" stroke-width="1.5"/>
      <text x="24" y="34" fill="#ff9a1f" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">SCAP</text>
      <circle cx="68" cy="30" r="18" fill="#1a1008" stroke="#ff9a1f" stroke-width="1.5"/>
      <text x="68" y="34" fill="#ff9a1f" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">165F</text>
      <rect x=\"98\" y=\"6\" width=\"100\" height=\"52\" rx=\"3\" fill=\"#100804\" stroke=\"#c94b00\" stroke-width=\"1\"/>
      <text x=\"106\" y=\"24\" fill=\"#ff7a00\" font-family=\"monospace\" font-size=\"8\" font-weight=\"bold\">TRANSIENT</text>
      <text x=\"106\" y=\"40\" fill=\"#fff\" font-family=\"monospace\" font-size=\"8\">RESP: &lt; 2ms</text>
    </g>

    <!-- Sub-unit 4: Power Switchgear Base -->
    <rect x="12" y="378" width="231" height="95" rx="6" fill="#180e08" stroke="#382012" stroke-width="1"/>
    <text x="24" y="398" fill="#b89c85" font-family="Inter, sans-serif" font-size="9" font-weight="700">LS Electricals Switchgear Panel</text>
    <circle cx="45" cy="430" r="8" fill="#00b894" filter="url(#glow)"/>
    <circle cx="80" cy="430" r="8" fill="#00b894" filter="url(#glow)"/>
    <circle cx="115" cy="430" r="8" fill="#ff9a1f" filter="url(#glow)"/>
    <rect x="145" y="416" width="86" height="28" rx="4" fill="#2a1408" stroke="#ff7a00" stroke-width="1"/>
    <text x="188" y="434" fill="#ffc857" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">GRID-TIED</text>
  </g>

  <!-- ================= CENTER: MONITORING & CONTROL CONSOLE ================= -->
  <g transform="translate(325, 195)">
    <!-- Work Desk / Console Stand -->
    <rect x="0" y="160" width="310" height="250" rx="8" fill="#221208" stroke="#4a2c18" stroke-width="2"/>
    
    <!-- Large SCADA Monitor 1 -->
    <rect x="10" y="10" width="140" height="140" rx="6" fill="#000" stroke="#ff9a1f" stroke-width="2"/>
    <rect x="15" y="15" width="130" height="130" fill="url(#screenGrad1)"/>
    <text x="80" y="32" fill="#00b894" font-family="Inter, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">SCADA CEMS DASHBOARD</text>
    <!-- Waveform graph -->
    <path d="M 22,80 Q 38,40 54,80 T 86,80 T 118,80 T 140,80" fill="none" stroke="#00b894" stroke-width="2" filter="url(#glow)"/>
    <path d="M 22,95 Q 38,115 54,95 T 86,95 T 118,95 T 140,95" fill="none" stroke="#ff9a1f" stroke-width="1.5"/>
    <text x="24" y="132" fill="#8fada8" font-family="monospace" font-size="7.5">P: 14.8 kW | Q: 2.1 kVAR</text>

    <!-- Large SCADA Monitor 2 -->
    <rect x="160" y="10" width="140" height="140" rx="6" fill="#000" stroke="#ff7a00" stroke-width="2"/>
    <rect x="165" y="15" width="130" height="130" fill="url(#screenGrad2)"/>
    <text x="230" y="32" fill="#ff9a1f" font-family="Inter, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">INTERCONNECTED BUS</text>
    <!-- Grid connection diagram -->
    <circle cx="195" cy="65" r="12" fill="#2a1208" stroke="#00b894" stroke-width="2"/>
    <text x="195" y="68" fill="#00b894" font-family="sans-serif" font-size="7" font-weight="bold" text-anchor="middle">MG1</text>
    <line x1="207" y1="65" x2="253" y2="65" stroke="#ff9a1f" stroke-width="3" stroke-dasharray="3,3" filter="url(#glow)"/>
    <circle cx="265" cy="65" r="12" fill="#2a1208" stroke="#ff7a00" stroke-width="2"/>
    <text x="265" y="68" fill="#ff7a00" font-family="sans-serif" font-size="7" font-weight="bold" text-anchor="middle">MG2</text>
    <rect x="175" y="92" width="110" height="40" rx="3" fill="#1a0c04" stroke="#ff9a1f" stroke-width="1"/>
    <text x="182" y="108" fill="#ffc857" font-family="monospace" font-size="8" font-weight="bold">MODE: SYNC ON</text>
    <text x="182" y="124" fill="#fff" font-family="monospace" font-size="8">FREQ DEV: +0.01Hz</text>

    <!-- Monitor Stands -->
    <rect x="70" y="150" width="25" height="15" fill="#333"/>
    <rect x="220" y="150" width="25" height="15" fill="#333"/>

    <!-- Keyboard & Controls Table Surface -->
    <rect x="20" y="185" width="125" height="35" rx="3" fill="#150c06" stroke="#382012" stroke-width="1"/>
    <rect x="30" y="192" width="70" height="20" rx="2" fill="#25150a"/>
    <ellipse cx="120" cy="202" rx="7" ry="11" fill="#25150a"/>

    <rect x="165" y="185" width="125" height="35" rx="3" fill="#150c06" stroke="#382012" stroke-width="1"/>
    <circle cx="190" cy="202" r="6" fill="#00b894" filter="url(#glow)"/>
    <circle cx="215" cy="202" r="6" fill="#ff9a1f" filter="url(#glow)"/>
    <circle cx="240" cy="202" r="6" fill="#ff4757"/>
  </g>

  <!-- ================= RIGHT RACK: MICROGRID 2 ================= -->
  <g transform="translate(660, 115)">
    <!-- Main Rack Frame -->
    <rect x="0" y="0" width="255" height="490" rx="10" fill="url(#rackGrad2)" stroke="#523624" stroke-width="2"/>
    <rect x="10" y="10" width="235" height="36" rx="6" fill="#1c1008" stroke="#ff9a1f" stroke-width="1"/>
    <text x="127" y="32" fill="#ff9a1f" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle" letter-spacing="1">MICROGRID 2</text>
    <text x="127" y="42" fill="#ffc857" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" text-anchor="middle">SOLAR · HYDROGEN FUEL CELL · AC GEN</text>

    <!-- Sub-unit 1: Solar Generation Unit -->
    <rect x="12" y="56" width="231" height="98" rx="6" fill="url(#panelGrad)" stroke="#4a3020" stroke-width="1"/>
    <text x="24" y="74" fill="#ffc857" font-family="Inter, sans-serif" font-size="10" font-weight="700">Solar PV Converter Interface</text>
    <rect x="20" y="82" width="195" height="60" rx="4" fill="#0a1410" stroke="#00b894" stroke-width="1"/>
    <text x="30" y="102" fill="#00b894" font-family="monospace" font-size="12" font-weight="bold">MPPT ACTIVE: 600V DC</text>
    <text x="30" y="122" fill="#8fada8" font-family="monospace" font-size="9">EFFICIENCY: 98.4% · 8.5 kW</text>

    <!-- Sub-unit 2: Hydrogen Fuel Cell Stack -->
    <rect x="12" y="162" width="231" height="102" rx="6" fill="url(#panelGrad)" stroke="#4a3020" stroke-width="1"/>
    <text x="24" y="180" fill="#ffc857" font-family="Inter, sans-serif" font-size="10" font-weight="700">Hydrogen Fuel Cell Power Unit</text>
    <g transform="translate(20, 190)">
      <!-- Fuel Cell Cylinder Icons -->
      <rect x="0" y="2" width="24" height="58" rx="6" fill="#1a2825" stroke="#00b894" stroke-width="1.5"/>
      <text x="12" y="34" fill="#00b894" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">H₂</text>
      <rect x="30" y="2" width="24" height="58" rx="6" fill="#1a2825" stroke="#00b894" stroke-width="1.5"/>
      <text x="42" y="34" fill="#00b894" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">H₂</text>

      <rect x="62" y="2" width="134" height="58" rx="4" fill="#0e1814" stroke="#00b894" stroke-width="1"/>
      <text x="70" y="20" fill="#00b894" font-family="monospace" font-size="9" font-weight="bold">FUEL CELL GEN</text>
      <text x="70" y="36" fill="#fff" font-family="monospace" font-size="8">Output: 5.0 kW DC</text>
      <text x="70" y="50" fill="#8fada8" font-family="monospace" font-size="8">H2 Pressure: 30 bar</text>
    </g>

    <!-- Sub-unit 3: AC Generation & Synchronous Machine -->
    <rect x="12" y="272" width="231" height="98" rx="6" fill="url(#panelGrad)" stroke="#4a3020" stroke-width="1"/>
    <text x="24" y="290" fill="#ffc857" font-family="Inter, sans-serif" font-size="10" font-weight="700">AC Generation &amp; Synchronization</text>
    <g transform="translate(20, 298)">
      <circle cx="32" cy="30" r="20" fill="#180e06" stroke="#ff9a1f" stroke-width="1.5"/>
      <text x="32" y="34" fill="#ffc857" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">~ AC</text>
      <rect x="68" y="4" width="130" height="52" rx="3" fill="#140a04" stroke="#ff7a00" stroke-width="1"/>
      <text x="76" y="22" fill="#ff9a1f" font-family="monospace" font-size="9" font-weight="bold">GRID SYNC UNIT</text>
      <text x="76" y="37" fill="#fff" font-family="monospace" font-size="8">Phase Match: 0.0°</text>
      <text x="76" y="50" fill="#00b894" font-family="monospace" font-size="8">LOCK: ESTABLISHED</text>
    </g>

    <!-- Sub-unit 4: VI Micro Controller Setup -->
    <rect x="12" y="378" width="231" height="95" rx="6" fill="#180e08" stroke="#382012" stroke-width="1"/>
    <text x="24" y="398" fill="#b89c85" font-family="Inter, sans-serif" font-size="9" font-weight="700">VI Micro Setup Interface</text>
    <rect x="20" y="412" width="195" height="36" rx="4" fill="#221006" stroke="#ff9a1f" stroke-width="1"/>
    <circle cx="40" cy="430" r="5" fill="#00b894" filter="url(#glow)"/>
    <text x="54" y="434" fill="#ffc857" font-family="monospace" font-size="9" font-weight="bold">SYSTEM INTERCONNECTED</text>
  </g>

  <!-- Bus Interconnection Line Across Racks -->
  <path d="M 300,470 L 480,430 L 660,470" fill="none" stroke="#ff9a1f" stroke-width="2.5" stroke-dasharray="6,4" filter="url(#glow)"/>
  <circle cx="480" cy="430" r="5" fill="#ff7a00" filter="url(#glow)"/>
</svg>"""

# 2. microgrid-1.svg
svg_mg1 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1008"/>
      <stop offset="50%" stop-color="#2e180d"/>
      <stop offset="100%" stop-color="#140804"/>
    </linearGradient>
    <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3d2516"/>
      <stop offset="100%" stop-color="#20120a"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#bg1)"/>
  
  <!-- Rack Frame -->
  <rect x="35" y="25" width="730" height="400" rx="12" fill="#22120a" stroke="#4a2a16" stroke-width="2"/>
  
  <!-- Header Bar -->
  <rect x="50" y="40" width="700" height="42" rx="6" fill="#150a04" stroke="#ff7a00" stroke-width="1"/>
  <text x="400" y="67" fill="#ff9a1f" font-family="Inter, sans-serif" font-size="16" font-weight="800" text-anchor="middle" letter-spacing="1.5">MICROGRID 1 PLATFORM</text>
  
  <!-- 4 Module Column Layout -->
  <!-- Mod 1: Solar -->
  <g transform="translate(50, 95)">
    <rect width="165" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="82" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">☀️ SOLAR PV</text>
    <rect x="15" y="45" width="135" height="85" rx="4" fill="#0a1410" stroke="#00b894" stroke-width="1"/>
    <text x="82" y="78" fill="#00b894" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">415.2 V</text>
    <text x="82" y="100" fill="#8fada8" font-family="monospace" font-size="10" text-anchor="middle">10.2 kW</text>
    <rect x="15" y="145" width="135" height="150" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="82" y="175" fill="#ff9a1f" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">MPPT TRACKER</text>
    <circle cx="82" cy="225" r="26" fill="#1a2820" stroke="#00b894" stroke-width="2" filter="url(#glow)"/>
    <text x="82" y="230" fill="#00b894" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">99.1%</text>
  </g>

  <!-- Mod 2: Wind -->
  <g transform="translate(225, 95)">
    <rect width="165" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="82" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">💨 WIND EMULATOR</text>
    <rect x="15" y="45" width="135" height="85" rx="4" fill="#140c06" stroke="#ff9a1f" stroke-width="1"/>
    <text x="82" y="78" fill="#ff9a1f" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">50.02 Hz</text>
    <text x="82" y="100" fill="#b89c85" font-family="monospace" font-size="10" text-anchor="middle">3.5 kW</text>
    <rect x="15" y="145" width="135" height="150" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="82" y="175" fill="#ff9a1f" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">PITCH CONTROL</text>
    <path d="M 30,235 Q 55,205 82,235 T 135,235" fill="none" stroke="#ff9a1f" stroke-width="2" filter="url(#glow)"/>
  </g>

  <!-- Mod 3: Battery -->
  <g transform="translate(400, 95)">
    <rect width="165" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="82" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">🔋 LI-ION BATTERY</text>
    <rect x="15" y="45" width="135" height="105" rx="4" fill="#0e1814" stroke="#00b894" stroke-width="1"/>
    <rect x="30" y="65" width="105" height="20" rx="3" fill="#00b894" opacity="0.9" filter="url(#glow)"/>
    <text x="82" y="79" fill="#fff" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">SOC: 96%</text>
    <text x="82" y="112" fill="#00b894" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">48.6 V · 120 Ah</text>
    <text x="82" y="132" fill="#8fada8" font-family="monospace" font-size="9" text-anchor="middle">CYCLE: 1420</text>
    <rect x="15" y="165" width="135" height="130" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="82" y="195" fill="#ffc857" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">BMS TELEMETRY</text>
    <circle cx="45" cy="245" r="6" fill="#00b894" filter="url(#glow)"/>
    <circle cx="82" cy="245" r="6" fill="#00b894" filter="url(#glow)"/>
    <circle cx="120" cy="245" r="6" fill="#00b894" filter="url(#glow)"/>
  </g>

  <!-- Mod 4: Supercapacitor -->
  <g transform="translate(575, 95)">
    <rect width="165" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="82" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">⚡ SUPERCAPACITOR</text>
    <rect x="15" y="45" width="135" height="85" rx="4" fill="#1a1006" stroke="#ff9a1f" stroke-width="1"/>
    <text x="82" y="78" fill="#ff9a1f" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">165 FARAD</text>
    <text x="82" y="100" fill="#ffc857" font-family="monospace" font-size="10" text-anchor="middle">48V MODULE</text>
    <rect x="15" y="145" width="135" height="150" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="82" y="175" fill="#ff7a00" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">FAST RESPONSE</text>
    <rect x="25" y="210" width="115" height="32" rx="4" fill="#2a1408" stroke="#ff7a00" stroke-width="1"/>
    <text x="82" y="231" fill="#ffc857" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">&lt; 2ms INERTIA</text>
  </g>
</svg>"""

# 3. microgrid-2.svg
svg_mg2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180e07"/>
      <stop offset="50%" stop-color="#28160c"/>
      <stop offset="100%" stop-color="#100804"/>
    </linearGradient>
    <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3d2516"/>
      <stop offset="100%" stop-color="#20120a"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#bg2)"/>
  
  <!-- Rack Frame -->
  <rect x="35" y="25" width="730" height="400" rx="12" fill="#22120a" stroke="#4a2a16" stroke-width="2"/>
  
  <!-- Header Bar -->
  <rect x="50" y="40" width="700" height="42" rx="6" fill="#150a04" stroke="#c94b00" stroke-width="1"/>
  <text x="400" y="67" fill="#ff9a1f" font-family="Inter, sans-serif" font-size="16" font-weight="800" text-anchor="middle" letter-spacing="1.5">MICROGRID 2 PLATFORM</text>
  
  <!-- 3 Major Section Layout -->
  <!-- Section 1: Solar -->
  <g transform="translate(50, 95)">
    <rect width="220" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="110" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="13" font-weight="700" text-anchor="middle">☀️ SOLAR PV ARRAY</text>
    <rect x="20" y="50" width="180" height="100" rx="4" fill="#0a1410" stroke="#00b894" stroke-width="1"/>
    <text x="110" y="88" fill="#00b894" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">600.0 V DC</text>
    <text x="110" y="115" fill="#8fada8" font-family="monospace" font-size="11" text-anchor="middle">P_out: 8.5 kW</text>
    <rect x="20" y="165" width="180" height="130" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="110" y="195" fill="#ff9a1f" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">INVERTER LINK</text>
    <circle cx="80" cy="245" r="18" fill="#00b894" opacity="0.2" stroke="#00b894" stroke-width="1.5"/>
    <circle cx="140" cy="245" r="18" fill="#ff9a1f" opacity="0.2" stroke="#ff9a1f" stroke-width="1.5"/>
    <text x="80" y="250" fill="#00b894" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">DC</text>
    <text x="140" y="250" fill="#ff9a1f" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">AC</text>
  </g>

  <!-- Section 2: Hydrogen Fuel Cell -->
  <g transform="translate(290, 95)">
    <rect width="220" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="110" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="13" font-weight="700" text-anchor="middle">🧪 HYDROGEN FUEL CELL</text>
    
    <g transform="translate(20, 50)">
      <rect x="0" y="0" width="42" height="100" rx="8" fill="#1a2825" stroke="#00b894" stroke-width="2" filter="url(#glow)"/>
      <text x="21" y="58" fill="#00b894" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">H₂</text>
      
      <rect x="55" y="0" width="125" height="100" rx="4" fill="#0a1410" stroke="#00b894" stroke-width="1"/>
      <text x="117" y="35" fill="#00b894" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">5.0 kW</text>
      <text x="117" y="60" fill="#8fada8" font-family="monospace" font-size="10" text-anchor="middle">PEM STACK</text>
      <text x="117" y="82" fill="#ffc857" font-family="monospace" font-size="10" text-anchor="middle">30 BAR FLOW</text>
    </g>

    <rect x="20" y="165" width="180" height="130" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="110" y="195" fill="#00b894" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">FUEL CELL CONTROL</text>
    <rect x="35" y="225" width="150" height="38" rx="4" fill="#1a2822" stroke="#00b894" stroke-width="1"/>
    <text x="110" y="248" fill="#00b894" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">CLEAN GENERATION</text>
  </g>

  <!-- Section 3: AC Generation & Synch -->
  <g transform="translate(530, 95)">
    <rect width="220" height="315" rx="8" fill="url(#panelGrad)" stroke="#4a2a16" stroke-width="1"/>
    <text x="110" y="30" fill="#ffc857" font-family="Inter, sans-serif" font-size="13" font-weight="700" text-anchor="middle">⚙️ AC GEN &amp; SYNC</text>
    <rect x="20" y="50" width="180" height="100" rx="4" fill="#140c06" stroke="#ff9a1f" stroke-width="1"/>
    <text x="110" y="82" fill="#ff9a1f" font-family="monospace" font-size="15" font-weight="bold" text-anchor="middle">415 V · 50 Hz</text>
    <text x="110" y="108" fill="#ffc857" font-family="monospace" font-size="11" text-anchor="middle">SYNCHRONOUS GEN</text>
    <rect x="20" y="165" width="180" height="130" rx="4" fill="#140c06" stroke="#382012" stroke-width="1"/>
    <text x="110" y="195" fill="#ffc857" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">GRID INTERFACE</text>
    <circle cx="60" cy="245" r="8" fill="#00b894" filter="url(#glow)"/>
    <circle cx="110" cy="245" r="8" fill="#00b894" filter="url(#glow)"/>
    <circle cx="160" cy="245" r="8" fill="#ff9a1f" filter="url(#glow)"/>
    <text x="110" y="278" fill="#00b894" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">LS ELECTRICALS BUS</text>
  </g>
</svg>"""

with open(os.path.join(lab_dir, "microgrid-1-2.svg"), "w", encoding="utf-8") as f:
    f.write(svg_hero)

with open(os.path.join(lab_dir, "microgrid-1.svg"), "w", encoding="utf-8") as f:
    f.write(svg_mg1)

with open(os.path.join(lab_dir, "microgrid-2.svg"), "w", encoding="utf-8") as f:
    f.write(svg_mg2)

# Also write identical .jpg/.png files so any extension works perfectly
for ext in [".jpg", ".png"]:
    with open(os.path.join(lab_dir, "microgrid-1-2" + ext), "w", encoding="utf-8") as f:
        f.write(svg_hero)
    with open(os.path.join(lab_dir, "microgrid-1" + ext), "w", encoding="utf-8") as f:
        f.write(svg_mg1)
    with open(os.path.join(lab_dir, "microgrid-2" + ext), "w", encoding="utf-8") as f:
        f.write(svg_mg2)

print("All lab image files written successfully!")

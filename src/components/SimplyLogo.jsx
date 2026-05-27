export default function SimplyLogo({ size = 36, showText = true, dark = false }) {
  const textColor = dark ? "#ffffff" : "#0d1117";
  const s = size;

  return (
    <div style={{ display:"flex", alignItems:"center", gap: s * 0.3, userSelect:"none" }}>
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#1d4ed8"/>
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect width="44" height="44" rx="12" fill="url(#lg)"/>

        {/*
          Mark: two stacked rounded rectangles, each spanning full width,
          with a circular cutout on alternating sides — reads as "S" in negative space,
          clean and symmetrical, nothing like a Z.
        */}

        {/* Top half block */}
        <rect x="9" y="9" width="26" height="11" rx="5.5" fill="white"/>

        {/* Middle connector — thin bar linking the two */}
        <rect x="9" y="16.5" width="26" height="11" rx="5.5" fill="white" opacity="0.3"/>

        {/* Bottom half block */}
        <rect x="9" y="24" width="26" height="11" rx="5.5" fill="white"/>

        {/* Punch out left side of top block → creates S curve feel */}
        <rect x="9" y="16" width="13" height="7" fill="url(#lg)"/>

        {/* Punch out right side of bottom block */}
        <rect x="22" y="21" width="13" height="7" fill="url(#lg)"/>
      </svg>

      {showText && (
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: s * 0.68,
          letterSpacing: "-0.035em",
          color: textColor,
          lineHeight: 1,
        }}>
          Simplyy
        </span>
      )}
    </div>
  );
}

import C from "../styles/colors";
import { FOOTER_LINKS } from "../data/content";

const COMPANY_MAP = {
  "About Us":    "About",
  "Our Process": "Process",
  "Contact Us":  "Contact",
  "Book a Call": "Contact",
};

export default function Footer({ setPage }) {
  const goPage = p => { setPage(p); window.scrollTo(0,0); };

  const handleLink = (title, link) => {
    if (title === "Pages") {
      goPage(link);
    } else if (title === "Services") {
      setPage("Home");
      setTimeout(() => {
        const el = document.getElementById("services-section");
        if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
        else window.scrollTo({ top:800, behavior:"smooth" });
      }, 80);
    } else if (title === "Company") {
      const dest = COMPANY_MAP[link];
      if (dest) goPage(dest);
    }
  };

  return (
    <footer style={{ background:C.ink, padding:"52px 5% 24px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>

        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <svg width={32} height={32} viewBox="0 0 44 44" fill="none">
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#1d4ed8"/>
                  </linearGradient>
                </defs>
                <rect width="44" height="44" rx="12" fill="url(#flg)"/>
                <rect x="9" y="9" width="26" height="11" rx="5.5" fill="white"/>
                <rect x="9" y="16.5" width="26" height="11" rx="5.5" fill="white" opacity="0.3"/>
                <rect x="9" y="24" width="26" height="11" rx="5.5" fill="white"/>
                <rect x="9" y="16" width="13" height="7" fill="url(#flg)"/>
                <rect x="22" y="21" width="13" height="7" fill="url(#flg)"/>
              </svg>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:20, letterSpacing:"-0.03em", color:"#fff" }}>Simplyy</span>
            </div>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", lineHeight:1.8, maxWidth:220 }}>
              Premium websites for local businesses. Live in one week.
            </p>
            <p style={{ fontSize:10, color:"rgba(255,255,255,0.2)", marginTop:10, letterSpacing:"0.1em", textTransform:"uppercase" }}>
              Simple · Affordable · Effective
            </p>
          </div>

          {/* Link cols */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.28)", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:14 }}>{title}</div>
              {links.map(l => (
                <button key={l} onClick={() => handleLink(title, l)}
                  style={{ display:"block", background:"none", border:"none", cursor:"pointer", fontSize:13, color:"rgba(255,255,255,0.45)", marginBottom:8, padding:0, fontFamily:"inherit", textAlign:"left", transition:"color 0.15s", lineHeight:1.5 }}
                  onMouseEnter={e=>e.target.style.color="#fff"}
                  onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.45)"}
                >{l}</button>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", marginTop:40, paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.22)" }}>© 2025 Simplyy. All rights reserved.</p>
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.22)" }}>Toronto, Ontario 🇨🇦</p>
        </div>
      </div>

      <style>{`
        .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; }
        @media(max-width:780px) { .footer-grid { grid-template-columns:1fr 1fr; gap:28px; } }
        @media(max-width:440px) { .footer-grid { grid-template-columns:1fr; } }
      `}</style>
    </footer>
  );
}

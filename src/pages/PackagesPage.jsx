import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { PLANS } from "../data/content";

const D  = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.04em", color:C.ink };
const OL = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

export default function PackagesPage({ setPage }) {
  const [hov, setHov] = useState(null);
  const go = () => { setPage("Contact"); window.scrollTo(0,0); };

  return (
    <div style={{ background:C.bgOff, minHeight:"100vh" }}>
      <section style={{ padding:"100px 5% 56px", textAlign:"center", background:`radial-gradient(ellipse 70% 50% at 50% 0%, ${C.blueLight}, transparent 70%), ${C.bg}` }}>
        <Reveal>
          <p style={OL}>Transparent Pricing</p>
          <h1 style={{ ...D, fontSize:"clamp(32px,5vw,62px)", marginTop:12, marginBottom:14, lineHeight:1.06 }}>
            Simple pricing. <span style={{ color:C.blue }}>Real results.</span>
          </h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:C.inkLight, maxWidth:480, margin:"0 auto 12px" }}>
            No setup fees. No lock-in. Cancel anytime. Every plan ships live within a week.
          </p>
          <p style={{ fontSize:14, color:"#dc2626", fontWeight:600 }}>
            Design in ~72 hours. Site live within 7 days.
          </p>
        </Reveal>
      </section>

      <section style={{ padding:"28px 5% 80px" }}>
        <div className="plans-grid">
          {PLANS.map((plan,i) => {
            const rec = plan.recommended;
            const hovered = hov===plan.name && !rec;
            return (
              <Reveal key={plan.name} delay={i*80}>
                <div
                  onMouseEnter={()=>setHov(plan.name)}
                  onMouseLeave={()=>setHov(null)}
                  style={{
                    background: rec ? C.ink : "#fff",
                    borderRadius:16,
                    padding:"32px 26px",
                    border: rec ? "none" : hovered ? `1.5px solid ${C.blue}` : `1px solid ${C.border}`,
                    boxShadow: rec ? "0 20px 60px rgba(13,17,23,0.18)" : hovered ? "0 12px 36px rgba(37,99,235,0.1)" : "0 1px 6px rgba(0,0,0,0.04)",
                    transform: rec ? "scale(1.02)" : hovered ? "translateY(-4px)" : "none",
                    transition:"all 0.25s",
                    height:"100%", boxSizing:"border-box",
                    display:"flex", flexDirection:"column",
                    position:"relative",
                  }}>
                  {rec && (
                    <div style={{ position:"absolute", top:-1, left:"50%", transform:"translateX(-50%)", background:C.blue, color:"#fff", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"5px 16px", borderRadius:"0 0 9px 9px" }}>
                      Best Value
                    </div>
                  )}
                  <div style={{ marginTop: rec ? 16 : 0 }}>
                    <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color: rec ? "rgba(255,255,255,0.45)" : C.inkLight, display:"block", marginBottom:14 }}>{plan.tag}</span>
                    <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(22px,3vw,28px)", letterSpacing:"-0.03em", color: rec ? "#fff" : C.ink, marginBottom:6 }}>{plan.name}</h3>
                    <p style={{ fontSize:13, color: rec ? "rgba(255,255,255,0.5)" : C.inkLight, lineHeight:1.6, marginBottom:20 }}>{plan.desc}</p>
                    <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:22 }}>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(40px,4vw,52px)", letterSpacing:"-0.045em", color: rec ? "#fff" : C.ink }}>${plan.price}</span>
                      <span style={{ fontSize:14, color: rec ? "rgba(255,255,255,0.4)" : C.inkLight }}>/mo</span>
                    </div>
                    <div style={{ flex:1 }}>
                      {plan.features.map(f => (
                        <div key={f} style={{ display:"flex", gap:9, marginBottom:9, alignItems:"flex-start" }}>
                          <span style={{ width:17, height:17, borderRadius:"50%", flexShrink:0, marginTop:2, background: rec ? "rgba(255,255,255,0.1)" : C.blueLight, border: rec ? "1px solid rgba(255,255,255,0.18)" : `1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, color: rec ? "#fff" : C.blue }}>✓</span>
                          <span style={{ fontSize:13, color: rec ? "rgba(255,255,255,0.75)" : C.inkMid, lineHeight:1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={go}
                      style={{ marginTop:22, width:"100%", padding:"12px", borderRadius:9, fontSize:14, fontWeight:700, fontFamily:"inherit", cursor:"pointer", transition:"all 0.2s", background: rec ? "#fff" : C.blue, color: rec ? C.blue : "#fff", border:"none", boxShadow: rec ? "none" : "0 2px 8px rgba(37,99,235,0.22)" }}
                      onMouseEnter={e=>{ e.currentTarget.style.opacity="0.88"; e.currentTarget.style.transform="translateY(-1px)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="none"; }}>
                      Get Started →
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={240}>
          <p style={{ textAlign:"center", marginTop:36, fontSize:14, color:C.inkLight }}>
            Not sure which plan fits?{" "}
            <button onClick={go} style={{ background:"none", border:"none", color:C.blue, cursor:"pointer", fontWeight:600, fontSize:14, fontFamily:"inherit" }}>Let's talk →</button>
          </p>
        </Reveal>
      </section>

      <style>{`
        .plans-grid { max-width:1080px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); gap:18px; align-items:stretch; }
        @media(max-width:900px) { .plans-grid { grid-template-columns:1fr; max-width:520px; } }
      `}</style>
    </div>
  );
}

import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { FAQS } from "../data/content";

const D  = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.035em", lineHeight:1.08, color:C.ink };
const OL = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

export default function FAQsPage() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ background:C.bg }}>
      <section style={{ padding:"100px 5% 80px", background:`radial-gradient(ellipse 70% 50% at 50% 0%, ${C.blueLight}, transparent 65%), ${C.bg}` }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <p style={OL}>FAQ</p>
              <h1 style={{ ...D, fontSize:"clamp(28px,5vw,52px)", marginTop:12, marginBottom:12 }}>
                Every question,<br/><span style={{ color:C.blue }}>answered straight.</span>
              </h1>
              <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.75 }}>Straight answers, no runaround. Can't find yours? Just ask us directly.</p>
            </div>
          </Reveal>

          <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)" }}>
            {FAQS.map((faq,i) => (
              <Reveal key={i} delay={i*20}>
                <div style={{ borderBottom: i<FAQS.length-1 ? `1px solid ${C.border}` : "none" }}>
                  <button
                    onClick={()=>setOpen(open===i ? null : i)}
                    style={{ width:"100%", background:"none", border:"none", cursor:"pointer", padding:"18px 22px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:14, fontFamily:"inherit", transition:"background 0.15s", textAlign:"left" }}
                    onMouseEnter={e=>e.currentTarget.style.background=C.bgOff}
                    onMouseLeave={e=>e.currentTarget.style.background="none"}>
                    <span style={{ fontSize:"clamp(14px,2vw,15.5px)", fontWeight:600, color:C.ink, lineHeight:1.45 }}>{faq.q}</span>
                    <span style={{ width:22, height:22, borderRadius:"50%", flexShrink:0, background: open===i ? C.blue : C.blueLight, border:`1px solid ${open===i ? C.blue : C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, color: open===i ? "#fff" : C.blue, fontWeight:300, transition:"all 0.25s", transform: open===i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <div style={{ maxHeight: open===i ? 300 : 0, overflow:"hidden", transition:"max-height 0.35s ease" }}>
                    <p style={{ fontSize:"clamp(13px,2vw,15px)", color:C.inkLight, lineHeight:1.8, padding:"0 22px 18px" }}>{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

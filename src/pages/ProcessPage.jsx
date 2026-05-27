import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { PROCESS_STEPS } from "../data/content";

const D  = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.035em", lineHeight:1.08, color:C.ink };
const OL = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

const HOVER_DETAIL = {
  "01": { what:"What happens on this call?", detail:"A focused 30-minute session. We cover your goals, target customers, competitors, and what success looks like. You'll leave with clarity — not a sales pitch.", bullets:["Your business & goals","Current online presence audit","Competitor landscape review","Scope & plan outline"] },
  "02": { what:"What does strategy include?", detail:"Before we touch design, we map every page, every user journey, and every conversion point. This is why our sites perform — not just look good.", bullets:["Full sitemap & page structure","User journey mapping","Call-to-action placement","Messaging hierarchy"] },
  "03": { what:"What do I receive in ~72 hours?", detail:"High-fidelity mockups of every page — not wireframes. You'll see exactly how your finished site will look before we write a single line of code.", bullets:["Desktop & mobile mockups","All pages designed","Brand colours & typography","Your feedback round"] },
  "04": { what:"What's included in the build?", detail:"Clean, fast, hand-coded pages. SEO meta tags, Google Analytics, contact form, sitemap — everything set up and tested before launch.", bullets:["Responsive development","SEO & analytics setup","Performance optimisation","Cross-browser QA testing"] },
  "05": { what:"What does ongoing look like?", detail:"Monthly performance reports, strategy check-ins, and continuous improvements. Your site gets better every month.", bullets:["Monthly performance reports","Strategy & growth calls","Content & SEO updates","Ongoing optimisation"] },
};

export default function ProcessPage({ setPage }) {
  const [active, setActive] = useState(null);
  const go = () => { setPage("Contact"); window.scrollTo(0,0); };

  // On touch: toggle; on desktop: hover
  const toggle = (num) => setActive(a => a === num ? null : num);

  return (
    <div style={{ background:C.bg }}>

      <section style={{ padding:"100px 5% 52px", textAlign:"center", background:`radial-gradient(ellipse 70% 50% at 50% 0%, ${C.blueLight}, transparent 65%), ${C.bg}` }}>
        <Reveal>
          <p style={OL}>How It Works</p>
          <h1 style={{ ...D, fontSize:"clamp(30px,5vw,60px)", marginTop:12, marginBottom:14 }}>
            Strategy first.<br/><span style={{ color:C.blue }}>Live in 7 days.</span>
          </h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:C.inkLight, maxWidth:440, margin:"0 auto" }}>
            A tight 5-step process. Tap or hover each step to see exactly what's involved.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:0, flexWrap:"wrap", justifyContent:"center", background:"#fff", border:`1px solid ${C.border}`, borderRadius:12, marginTop:36, boxShadow:"0 2px 10px rgba(0,0,0,0.05)", overflow:"hidden" }}>
            {[["Day 1","Discovery + Strategy"],["~72 hrs","Design delivered"],["Day 5–7","Built & launched"]].map(([n, label], i) => (
              <div key={label} style={{ display:"flex", alignItems:"center" }}>
                <div style={{ padding:"14px 24px", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:18, letterSpacing:"-0.03em", color:C.blue }}>{n}</div>
                  <div style={{ fontSize:11, color:C.inkLight, fontWeight:500 }}>{label}</div>
                </div>
                {i < 2 && <div style={{ width:1, height:36, background:C.border }}/>}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section style={{ padding:"32px 5% 80px" }}>
        <div style={{ maxWidth:820, margin:"0 auto" }}>
          <p style={{ textAlign:"center", fontSize:12, color:C.inkLight, marginBottom:28, fontWeight:500 }}>
            Tap or hover any step to see what's included
          </p>

          {PROCESS_STEPS.map((step, i) => {
            const isActive = active === step.num;
            const detail = HOVER_DETAIL[step.num];
            const is72 = step.duration === "~72 Hours";

            return (
              <Reveal key={step.num} delay={i*55}>
                <div style={{ display:"flex", gap:20 }}>
                  {/* Spine */}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                    <div
                      onClick={() => toggle(step.num)}
                      style={{
                        width:46, height:46, borderRadius:"50%", flexShrink:0,
                        background: isActive ? C.blue : is72 ? C.blue : C.blueLight,
                        border:`2px solid ${isActive || is72 ? C.blue : C.blueBorder}`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:12,
                        color: isActive || is72 ? "#fff" : C.blue,
                        transition:"all 0.25s", cursor:"pointer",
                        boxShadow: isActive ? `0 0 0 4px ${C.blueLight}` : "none",
                      }}>{step.num}</div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div style={{ width:2, flex:1, minHeight:isActive ? 180 : 44, background:`linear-gradient(${isActive ? C.blue : C.blueBorder}, transparent)`, margin:"5px 0", transition:"min-height 0.3s" }}/>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    onMouseEnter={() => setActive(step.num)}
                    onMouseLeave={() => setActive(null)}
                    style={{
                      flex:1,
                      marginBottom: i < PROCESS_STEPS.length-1 ? (isActive ? 12 : 6) : 0,
                      paddingTop:6,
                      background: isActive ? "#fff" : "transparent",
                      border: isActive ? `1.5px solid ${C.blueBorder}` : "1.5px solid transparent",
                      borderRadius:12,
                      padding: isActive ? "18px 20px" : "6px 20px 14px",
                      boxShadow: isActive ? "0 6px 24px rgba(37,99,235,0.1)" : "none",
                      transition:"all 0.3s", cursor:"default",
                    }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6, flexWrap:"wrap" }}>
                      <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(16px,2vw,19px)", letterSpacing:"-0.02em", color: isActive ? C.blue : C.ink, transition:"color 0.2s" }}>{step.title}</h3>
                      <span style={{ fontSize:11, fontWeight: is72 ? 700 : 500, color: is72 ? C.blue : C.inkLight, background: is72 ? C.blueLight : C.bgOff, border:`1px solid ${is72 ? C.blueBorder : C.border}`, padding:"2px 9px", borderRadius:100 }}>{step.duration}</span>
                    </div>
                    <p style={{ fontSize:14, color:C.inkLight, lineHeight:1.75, marginBottom: isActive ? 14 : 0 }}>{step.desc}</p>

                    <div style={{ maxHeight: isActive ? 400 : 0, overflow:"hidden", transition:"max-height 0.35s ease", opacity: isActive ? 1 : 0 }}>
                      <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:14, marginTop:2 }}>
                        <p style={{ fontSize:12, fontWeight:700, color:C.blue, marginBottom:10, textTransform:"uppercase", letterSpacing:"0.08em" }}>{detail.what}</p>
                        <p style={{ fontSize:13, color:C.inkMid, lineHeight:1.75, marginBottom:12 }}>{detail.detail}</p>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                          {detail.bullets.map(b => (
                            <span key={b} style={{ fontSize:11, fontWeight:600, color:C.blue, background:C.blueLight, border:`1px solid ${C.blueBorder}`, padding:"3px 10px", borderRadius:100 }}>✓ {b}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section style={{ padding:"72px 5%", textAlign:"center", background:C.ink, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:`radial-gradient(circle, #2563eb 1px, transparent 1px)`, backgroundSize:"28px 28px" }}/>
        <div style={{ maxWidth:520, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(24px,4vw,42px)", letterSpacing:"-0.035em", color:"#fff", marginBottom:14, lineHeight:1.1 }}>Ready to get started?</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.5)", marginBottom:28 }}>One free call. We map out your site and kick things off the same day.</p>
            <button onClick={go}
              style={{ background:"#fff", color:C.blue, border:"none", cursor:"pointer", padding:"13px 28px", borderRadius:9, fontSize:15, fontWeight:700, fontFamily:"inherit", boxShadow:"0 4px 16px rgba(0,0,0,0.18)", transition:"all 0.2s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 6px 24px rgba(0,0,0,0.24)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.18)"; }}>
              Book Free Call →
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

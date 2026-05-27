import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { PROBLEMS, SERVICES, VALUE_PROPS, COMPARISON } from "../data/content";

const wrap = { maxWidth:1200, margin:"0 auto" };
const D    = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1.06, color:C.ink };
const body = { fontSize:16, color:C.inkLight, lineHeight:1.75 };
const OL   = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

export default function HomePage({ setPage }) {
  const go = p => () => { setPage(p); window.scrollTo(0,0); };
  return (
    <div style={{ background:C.bg }}>

      {/* HERO */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"80px 5%", background:`radial-gradient(ellipse 80% 55% at 65% 0%, ${C.blueLight} 0%, transparent 65%), ${C.bg}`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.3, backgroundImage:`radial-gradient(circle, ${C.blueBorder} 1px, transparent 1px)`, backgroundSize:"32px 32px", maskImage:"radial-gradient(ellipse 70% 80% at 70% 10%, black 10%, transparent 80%)" }}/>
        <div style={{ ...wrap, width:"100%", position:"relative" }}>
          <div className="hero-grid">
            <div>
              <Reveal>
                <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:C.blueLight, border:`1px solid ${C.blueBorder}`, borderRadius:100, padding:"5px 14px", marginBottom:24 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:C.blue, display:"block" }}/>
                  <span style={OL}>Toronto's Digital Growth Partner</span>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ ...D, fontSize:"clamp(36px,5.5vw,70px)", marginBottom:20 }}>
                  Your competitors are winning online.<br/>
                  <span style={{ color:C.blue }}>We're about to change that.</span>
                </h1>
              </Reveal>
              <Reveal delay={130}>
                <p style={{ ...body, fontSize:"clamp(16px,2vw,18px)", maxWidth:460, marginBottom:32 }}>
                  Every day without a high-converting website is leads going to your competitor. We fix that — in one week, flat.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
                  <button onClick={go("Contact")}
                    style={{ background:C.blue, color:"#fff", border:"none", cursor:"pointer", padding:"13px 26px", borderRadius:9, fontSize:15, fontWeight:600, fontFamily:"inherit", boxShadow:"0 2px 8px rgba(37,99,235,0.22)", transition:"all 0.2s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background=C.blueMid; e.currentTarget.style.transform="translateY(-1px)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background=C.blue; e.currentTarget.style.transform="none"; }}>
                    Book Free Call →
                  </button>
                  <button onClick={go("Packages")}
                    style={{ background:"transparent", color:C.inkMid, border:`1.5px solid ${C.border}`, cursor:"pointer", padding:"13px 24px", borderRadius:9, fontSize:15, fontWeight:500, fontFamily:"inherit", transition:"all 0.2s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.blue; e.currentTarget.style.color=C.blue; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.color=C.inkMid; }}>
                    See Packages
                  </button>
                </div>
              </Reveal>
              <Reveal delay={270}>
                <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                  {["Free strategy call","No contracts","Live in one week"].map(t => (
                    <div key={t} style={{ display:"flex", alignItems:"center", gap:7 }}>
                      <span style={{ width:16, height:16, borderRadius:"50%", background:C.blueLight, border:`1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:C.blue, flexShrink:0 }}>✓</span>
                      <span style={{ fontSize:13, color:C.inkLight, fontWeight:500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                {[
                  { n:"72hr",  label:"Design delivered", sub:"From brief to mockup" },
                  { n:"1 wk",  label:"Full site live",   sub:"Start to launch" },
                  { n:"$0",    label:"Setup fees",        sub:"Never, on any plan" },
                  { n:"$149",  label:"Starting /month",  sub:"No hidden costs" },
                ].map(({ n, label, sub }) => (
                  <div key={label} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:12, padding:"20px 16px", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(24px,3.5vw,32px)", letterSpacing:"-0.04em", color:C.blue, lineHeight:1, marginBottom:6 }}>{n}</div>
                    <div style={{ fontWeight:600, color:C.ink, fontSize:13, marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:11, color:C.inkLight }}>{sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section style={{ padding:"72px 5%", background:C.bgOff, borderTop:`1px solid ${C.border}` }}>
        <div style={wrap}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <p style={OL}>The Data Is Clear</p>
              <h2 style={{ ...D, fontSize:"clamp(26px,4vw,46px)", marginTop:12, marginBottom:12 }}>Why your website matters more than you think.</h2>
              <p style={{ ...body, maxWidth:460, margin:"0 auto" }}>Research consistently shows how much your website affects customer behaviour.</p>
            </div>
          </Reveal>
          <div className="grid-4">
            {VALUE_PROPS.map((vp,i) => (
              <Reveal key={i} delay={i*60}>
                <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:14, padding:"28px 22px", boxShadow:"0 1px 6px rgba(0,0,0,0.04)", transition:"all 0.25s", height:"100%", boxSizing:"border-box" }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.1)"; e.currentTarget.style.borderColor=C.blueBorder; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 1px 6px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor=C.border; }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(40px,4vw,56px)", letterSpacing:"-0.045em", color:C.blue, lineHeight:1, marginBottom:12 }}>{vp.stat}</div>
                  <p style={{ fontSize:14, color:C.ink, lineHeight:1.6, marginBottom:8, fontWeight:500 }}>{vp.claim}</p>
                  <p style={{ fontSize:10, color:C.inkLight, letterSpacing:"0.06em", textTransform:"uppercase" }}>{vp.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section style={{ padding:"72px 5%", background:C.bg }}>
        <div style={wrap}>
          <div className="split-grid">
            <Reveal>
              <p style={{ ...OL, color:"#dc2626" }}>Sound Familiar?</p>
              <h2 style={{ ...D, fontSize:"clamp(26px,4vw,46px)", marginTop:12, marginBottom:16 }}>Your website could be costing you customers.</h2>
              <p style={body}>Most local websites aren't neutral — they're actively destroying trust and sending customers straight to competitors, silently, every day.</p>
            </Reveal>
            <div style={{ display:"grid", gap:10 }}>
              {PROBLEMS.map((p,i) => (
                <Reveal key={p.title} delay={i*60}>
                  <div style={{ padding:"18px 20px", background:C.bgOff, border:`1px solid ${C.border}`, borderLeft:"3px solid #fca5a5", borderRadius:"0 10px 10px 0", transition:"all 0.2s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderLeftColor="#dc2626"; e.currentTarget.style.background="#fff7f7"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderLeftColor="#fca5a5"; e.currentTarget.style.background=C.bgOff; }}>
                    <div style={{ fontWeight:600, color:C.ink, fontSize:14, marginBottom:3 }}>{p.title}</div>
                    <div style={{ fontSize:13, color:C.inkLight, lineHeight:1.6 }}>{p.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding:"72px 5%", background:C.bgOff, borderTop:`1px solid ${C.border}` }} id="services-section">
        <div style={wrap}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <p style={OL}>What We Build</p>
              <h2 style={{ ...D, fontSize:"clamp(26px,4vw,46px)", marginTop:12, marginBottom:12 }}>Everything your business needs to win online.</h2>
              <p style={{ ...body, maxWidth:460, margin:"0 auto" }}>Every service engineered around one outcome: more customers calling your number or walking through your door.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {SERVICES.map((s,i) => (
              <Reveal key={s.title} delay={i*50}>
                <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:12, padding:"26px 22px", transition:"all 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.03)", height:"100%", boxSizing:"border-box" }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.borderColor=C.blueBorder; e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.09)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.03)"; }}>
                  <div style={{ width:30, height:30, borderRadius:7, marginBottom:14, background:C.blueLight, border:`1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:10, fontWeight:700, color:C.blue }}>{String(i+1).padStart(2,"0")}</div>
                  <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:16, fontWeight:700, color:C.ink, marginBottom:7 }}>{s.title}</h3>
                  <p style={{ fontSize:13, color:C.inkLight, lineHeight:1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ padding:"72px 5%", background:C.bg }}>
        <div style={{ ...wrap, maxWidth:820 }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:36 }}>
              <p style={OL}>Why Simplyy</p>
              <h2 style={{ ...D, fontSize:"clamp(24px,4vw,44px)", marginTop:12 }}>Not all agencies are built the same.</h2>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div style={{ overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
              <div style={{ border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)", minWidth:480 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 110px 130px", padding:"12px 20px", background:C.bgOff, borderBottom:`1px solid ${C.border}` }}>
                  <div/>
                  <div style={{ textAlign:"center", fontSize:11, fontWeight:700, letterSpacing:"0.08em", color:C.blue }}>SIMPLYY</div>
                  <div style={{ textAlign:"center", fontSize:11, fontWeight:700, letterSpacing:"0.08em", color:C.inkLight }}>TYPICAL AGENCY</div>
                </div>
                {COMPARISON.map((row,i) => (
                  <div key={row.label} style={{ display:"grid", gridTemplateColumns:"1fr 110px 130px", padding:"12px 20px", background: i%2===0 ? "#fff" : C.bgOff, borderBottom: i<COMPARISON.length-1 ? `1px solid ${C.border}` : "none", alignItems:"center" }}>
                    <span style={{ fontSize:13, color:C.inkMid, fontWeight:500 }}>{row.label}</span>
                    <div style={{ textAlign:"center" }}>
                      <span style={{ display:"inline-flex", width:20, height:20, borderRadius:"50%", background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.25)", alignItems:"center", justifyContent:"center", fontSize:9, color:C.green }}>✓</span>
                    </div>
                    <div style={{ textAlign:"center" }}>
                      {row.them===false
                        ? <span style={{ display:"inline-flex", width:20, height:20, borderRadius:"50%", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", alignItems:"center", justifyContent:"center", fontSize:9, color:C.red }}>✕</span>
                        : <span style={{ fontSize:11, color:C.inkLight, fontStyle:"italic" }}>{row.them}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"90px 5%", textAlign:"center", background:C.ink, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:`radial-gradient(circle, #2563eb 1px, transparent 1px)`, backgroundSize:"32px 32px" }}/>
        <div style={{ maxWidth:580, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <p style={{ ...OL, color:"#93c5fd" }}>Zero Risk. Full Speed.</p>
            <h2 style={{ ...D, fontSize:"clamp(28px,4.5vw,54px)", color:"#fff", marginTop:14, marginBottom:18 }}>
              Live in one week.<br/><span style={{ color:"#93c5fd" }}>Leads from day one.</span>
            </h2>
            <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.55)", lineHeight:1.8, maxWidth:460, margin:"0 auto 36px" }}>
              One free call. We'll audit your online presence and show you exactly what we'd fix — whether you hire us or not.
            </p>
            <button onClick={go("Contact")}
              style={{ background:"#fff", color:C.blue, border:"none", cursor:"pointer", padding:"14px 36px", borderRadius:10, fontSize:16, fontWeight:700, fontFamily:"inherit", boxShadow:"0 4px 20px rgba(0,0,0,0.2)", transition:"all 0.2s", display:"inline-block", marginBottom:18 }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.2)"; }}>
              Book My Free Call →
            </button>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.3)" }}>Free · No commitment · Reply within 24 hours</p>
          </Reveal>
        </div>
      </section>

      <style>{`
        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; }
        .split-grid { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; }
        .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        @media(max-width:900px) {
          .grid-4 { grid-template-columns:repeat(2,1fr); }
          .grid-3 { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:680px) {
          .hero-grid { grid-template-columns:1fr; gap:36px; }
          .split-grid { grid-template-columns:1fr; gap:28px; }
          .grid-4 { grid-template-columns:repeat(2,1fr); }
          .grid-3 { grid-template-columns:1fr; }
        }
      `}</style>
    </div>
  );
}

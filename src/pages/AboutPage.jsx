import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { CORE_VALUES } from "../data/content";

const D    = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.035em", lineHeight:1.08, color:C.ink };
const OL   = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

const STATS = [
  { n:"72hr",   label:"Design delivered",  sub:"From brief to mockup" },
  { n:"7 days", label:"Full site live",    sub:"Start to launch" },
  { n:"$0",     label:"Setup fees",        sub:"Ever. On any plan." },
  { n:"100%",   label:"On-time delivery",  sub:"We track it obsessively" },
];

export default function AboutPage({ setPage }) {
  const go = () => { setPage("Contact"); window.scrollTo(0,0); };
  return (
    <div style={{ background:C.bg }}>

      <section style={{ padding:"100px 5% 80px", background:`radial-gradient(ellipse 70% 50% at 40% 0%, ${C.blueLight}, transparent 65%), ${C.bg}` }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="about-hero">
            <Reveal>
              <p style={OL}>Who We Are</p>
              <h1 style={{ ...D, fontSize:"clamp(32px,4.5vw,54px)", marginTop:12, marginBottom:18 }}>
                Local businesses deserve<br/><span style={{ color:C.blue }}>to win online.</span>
              </h1>
              <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.8, marginBottom:14 }}>
                Great local businesses kept losing online to inferior ones with better websites. That's not fair — and it's fixable.
              </p>
              <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.8, marginBottom:24 }}>
                We give every local business the same premium digital presence big brands pay tens of thousands for — at a fraction of the cost.
              </p>
              <blockquote style={{ fontSize:14, color:C.inkMid, lineHeight:1.8, marginBottom:28, fontStyle:"italic", borderLeft:`3px solid ${C.blueBorder}`, paddingLeft:16, fontWeight:500 }}>
                "Every client gets our full attention. Your success is the only portfolio that matters to us."
              </blockquote>
              <button onClick={go}
                style={{ background:C.blue, color:"#fff", border:"none", cursor:"pointer", padding:"12px 24px", borderRadius:9, fontSize:15, fontWeight:600, fontFamily:"inherit", boxShadow:`0 2px 10px rgba(37,99,235,0.22)`, transition:"all 0.2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.background=C.blueMid; e.currentTarget.style.transform="translateY(-1px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background=C.blue; e.currentTarget.style.transform="none"; }}>
                Work With Us →
              </button>
            </Reveal>

            <Reveal delay={150}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                {STATS.map(({ n, label, sub }) => (
                  <div key={label} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:12, padding:"20px 16px", boxShadow:"0 1px 6px rgba(0,0,0,0.04)", transition:"all 0.2s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.blueBorder; e.currentTarget.style.boxShadow=`0 6px 20px rgba(37,99,235,0.09)`; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.boxShadow="0 1px 6px rgba(0,0,0,0.04)"; }}>
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(22px,3vw,34px)", letterSpacing:"-0.04em", color:C.blue, lineHeight:1, marginBottom:6 }}>{n}</div>
                    <div style={{ fontWeight:700, color:C.ink, fontSize:13, marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:11, color:C.inkLight }}>{sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding:"64px 5%", background:C.bgOff, borderTop:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <Reveal>
            <p style={OL}>Our Philosophy</p>
            <h2 style={{ ...D, fontSize:"clamp(24px,3.5vw,42px)", marginTop:12, marginBottom:16 }}>Simple. Affordable. Effective.</h2>
            <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.8 }}>
              Not marketing words — three filters every decision passes through. Simple means no jargon, no surprises. Affordable means pricing built for real small businesses. Effective means we don't ship anything we don't believe will move the needle.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding:"64px 5% 80px", background:C.bg }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <Reveal>
            <h2 style={{ ...D, fontSize:"clamp(24px,3.5vw,40px)", textAlign:"center", marginBottom:36 }}>What we stand for.</h2>
          </Reveal>
          <div className="values-grid">
            {CORE_VALUES.map((v,i) => (
              <Reveal key={v.title} delay={i*70}>
                <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:12, padding:"24px 20px", transition:"all 0.2s", height:"100%", boxSizing:"border-box" }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.blueBorder; e.currentTarget.style.boxShadow=`0 6px 20px rgba(37,99,235,0.08)`; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.boxShadow="none"; }}>
                  <div style={{ width:28, height:28, borderRadius:7, marginBottom:14, background:C.blueLight, border:`1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:10, fontWeight:700, color:C.blue }}>0{i+1}</div>
                  <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:15, fontWeight:700, color:C.ink, marginBottom:7 }}>{v.title}</h3>
                  <p style={{ fontSize:13, color:C.inkLight, lineHeight:1.7 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-hero { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .values-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        @media(max-width:900px) { .values-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:640px) { .about-hero { grid-template-columns:1fr; gap:32px; } .values-grid { grid-template-columns:1fr 1fr; } }
      `}</style>
    </div>
  );
}

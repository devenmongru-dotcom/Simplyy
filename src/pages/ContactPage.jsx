import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { CONTACT_INFO } from "../data/content";

const D   = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.035em", lineHeight:1.08, color:C.ink };
const OL  = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };
const INP = { width:"100%", padding:"11px 13px", borderRadius:9, border:`1.5px solid ${C.border}`, fontSize:14.5, fontFamily:"inherit", color:C.ink, background:"#fff", outline:"none", transition:"border-color 0.2s", boxSizing:"border-box" };
const LBL = { display:"block", fontSize:11, fontWeight:600, color:C.inkLight, marginBottom:6, letterSpacing:"0.04em", textTransform:"uppercase" };
const ICONS = { Email:"✉", "Based in":"⊕", Response:"◷" };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", business:"", message:"", plan:"" });
  const h = (k,v) => setForm(f=>({...f,[k]:v}));
  const focus = e => { e.target.style.borderColor = C.blue; };
  const blur  = e => { e.target.style.borderColor = C.border; };

  return (
    <div style={{ background:C.bgOff }}>
      <section style={{ padding:"100px 5% 80px", background:`radial-gradient(ellipse 70% 50% at 40% 0%, ${C.blueLight}, transparent 65%), ${C.bg}` }}>
        <div style={{ maxWidth:1040, margin:"0 auto" }}>
          <div className="contact-grid">

            <Reveal>
              <p style={OL}>Get In Touch</p>
              <h1 style={{ ...D, fontSize:"clamp(28px,4vw,48px)", marginTop:12, marginBottom:16 }}>
                Let's build something<br/><span style={{ color:C.blue }}>worth talking about.</span>
              </h1>
              <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.8, marginBottom:32 }}>
                Your first call is free. We'll review your online presence, identify what's costing you customers, and show you exactly what we'd do — no pressure.
              </p>

              {CONTACT_INFO.map(({ label, value }) => (
                <div key={label} style={{ display:"flex", gap:13, marginBottom:16, alignItems:"flex-start" }}>
                  <div style={{ width:38, height:38, borderRadius:9, flexShrink:0, background:C.blueLight, border:`1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, color:C.blue }}>{ICONS[label]}</div>
                  <div>
                    <div style={{ fontSize:10, color:C.inkLight, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:14, color:C.ink, fontWeight:600 }}>{value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop:24, padding:"14px 18px", background:C.blueLight, border:`1px solid ${C.blueBorder}`, borderRadius:10 }}>
                <p style={{ fontSize:13, color:C.blue, lineHeight:1.65, fontWeight:600 }}>✓ &nbsp; Free consultation · No commitment · Reply within 24 hours</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              {submitted ? (
                <div style={{ textAlign:"center", padding:"60px 28px", background:"#fff", border:`1px solid ${C.border}`, borderRadius:14, boxShadow:"0 2px 16px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize:44, marginBottom:16 }}>✅</div>
                  <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:22, color:C.ink, marginBottom:8 }}>Message sent!</h2>
                  <p style={{ fontSize:14, color:C.inkLight, lineHeight:1.75 }}>We'll be in touch within 24 hours to book your free strategy call.</p>
                </div>
              ) : (
                <form onSubmit={e=>{ e.preventDefault(); setSubmitted(true); }}
                  style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:14, padding:"30px 26px", boxShadow:"0 2px 16px rgba(0,0,0,0.06)" }}>

                  <div className="form-row" style={{ marginBottom:12 }}>
                    <div>
                      <label style={LBL}>Name *</label>
                      <input required style={INP} placeholder="John Smith" value={form.name} onChange={e=>h("name",e.target.value)} onFocus={focus} onBlur={blur}/>
                    </div>
                    <div>
                      <label style={LBL}>Email *</label>
                      <input required type="email" style={INP} placeholder="john@company.com" value={form.email} onChange={e=>h("email",e.target.value)} onFocus={focus} onBlur={blur}/>
                    </div>
                  </div>

                  <div style={{ marginBottom:12 }}>
                    <label style={LBL}>Business Name</label>
                    <input style={INP} placeholder="Your Business" value={form.business} onChange={e=>h("business",e.target.value)} onFocus={focus} onBlur={blur}/>
                  </div>

                  <div style={{ marginBottom:12 }}>
                    <label style={LBL}>Interested Plan</label>
                    <select style={{ ...INP, appearance:"none", cursor:"pointer" }} value={form.plan} onChange={e=>h("plan",e.target.value)} onFocus={focus} onBlur={blur}>
                      <option value="">Choose a plan (optional)</option>
                      <option>Essential — $149/mo</option>
                      <option>Growth — $299/mo</option>
                      <option>Authority — $499/mo</option>
                      <option>Not sure — help me decide</option>
                    </select>
                  </div>

                  <div style={{ marginBottom:20 }}>
                    <label style={LBL}>About your business *</label>
                    <textarea required rows={4} style={{ ...INP, resize:"vertical" }}
                      placeholder="What do you do, who are your customers, and what's not working online?"
                      value={form.message} onChange={e=>h("message",e.target.value)} onFocus={focus} onBlur={blur}/>
                  </div>

                  <button type="submit"
                    style={{ width:"100%", padding:"13px", borderRadius:9, background:C.blue, color:"#fff", border:"none", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"inherit", boxShadow:`0 2px 10px rgba(37,99,235,0.25)`, transition:"all 0.2s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background=C.blueMid; e.currentTarget.style.transform="translateY(-1px)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background=C.blue; e.currentTarget.style.transform="none"; }}>
                    Send Message →
                  </button>
                  <p style={{ fontSize:11, color:C.inkLight, textAlign:"center", marginTop:10 }}>No spam. No obligation.</p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr 1.1fr; gap:64px; align-items:start; }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:780px) {
          .contact-grid { grid-template-columns:1fr; gap:36px; }
          .form-row { grid-template-columns:1fr; }
        }
      `}</style>
    </div>
  );
}

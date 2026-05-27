import { useState, useEffect } from "react";
import SimplyLogo from "./SimplyLogo";
import C from "../styles/colors";
import { NAV_LINKS } from "../data/content";

// Breakpoint for mobile vs desktop nav
const MOBILE_BP = 900;

export default function Nav({ page, setPage }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isMobile,  setIsMobile]  = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BP : false
  );

  // Track scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track viewport width — switches between mobile/desktop nav
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < MOBILE_BP;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // auto-close drawer on desktop resize
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (p) => { setPage(p); window.scrollTo(0, 0); setMenuOpen(false); };

  const navBg = scrolled || menuOpen
    ? "rgba(255,255,255,0.97)"
    : "transparent";

  return (
    <>
      {/* ── Nav bar ─────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        padding: "0 5%",
        background: navBg,
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${C.border}` : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          {/* Logo */}
          <button onClick={() => go("Home")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}>
            <SimplyLogo size={isMobile ? 28 : 32} />
          </button>

          {/* ── Desktop nav links ── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {NAV_LINKS.map(l => (
                <button key={l} onClick={() => go(l)}
                  style={{
                    background: page === l ? C.blueLight : "none",
                    border: "none", cursor: "pointer",
                    padding: "7px 13px", borderRadius: 7,
                    fontSize: 14, fontWeight: 500,
                    color: page === l ? C.blue : C.inkMid,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.bgOff; e.currentTarget.style.color = C.ink; }}
                  onMouseLeave={e => { e.currentTarget.style.background = page === l ? C.blueLight : "none"; e.currentTarget.style.color = page === l ? C.blue : C.inkMid; }}>
                  {l}
                </button>
              ))}
              <button onClick={() => go("Contact")}
                style={{
                  marginLeft: 8, background: C.blue, color: "#fff",
                  border: "none", cursor: "pointer",
                  padding: "9px 20px", borderRadius: 8,
                  fontSize: 14, fontWeight: 600,
                  boxShadow: "0 1px 3px rgba(37,99,235,0.25)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.blueMid; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = "none"; }}>
                Get Started
              </button>
            </div>
          )}

          {/* ── Hamburger button (mobile only) ── */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: menuOpen ? C.blueLight : "none",
                border: `1.5px solid ${menuOpen ? C.blueBorder : "transparent"}`,
                cursor: "pointer",
                width: 44, height: 44,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 10,
                flexShrink: 0,
                transition: "all 0.2s",
              }}>
              <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5.5, alignItems: "flex-end" }}>
                {/* Bar 1 */}
                <span style={{
                  display: "block", height: 2.5, borderRadius: 2,
                  background: menuOpen ? C.blue : C.ink,
                  width: 24,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease, background 0.2s",
                  transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
                }} />
                {/* Bar 2 — shorter for style */}
                <span style={{
                  display: "block", height: 2.5, borderRadius: 2,
                  background: menuOpen ? C.blue : C.ink,
                  width: menuOpen ? 0 : 17,
                  transition: "width 0.25s ease, opacity 0.2s ease, background 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }} />
                {/* Bar 3 */}
                <span style={{
                  display: "block", height: 2.5, borderRadius: 2,
                  background: menuOpen ? C.blue : C.ink,
                  width: 24,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease, background 0.2s",
                  transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
                }} />
              </div>
            </button>
          )}
        </div>
      </nav>

      {/* ── Backdrop (mobile only) ─────────────────────── */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 280,
            background: "rgba(13,17,23,0.5)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* ── Slide-in drawer (mobile only) ─────────────── */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 290,
          width: "min(340px, 90vw)",
          background: "#fff",
          boxShadow: "-12px 0 48px rgba(0,0,0,0.14)",
          transform: menuOpen ? "translateX(0)" : "translateX(105%)",
          transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
          display: "flex", flexDirection: "column",
          overflowY: "auto",
        }}>
          {/* Drawer header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 20px", height: 64, flexShrink: 0,
            borderBottom: `1px solid ${C.border}`,
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.inkLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Menu
            </span>
            <button onClick={() => setMenuOpen(false)}
              style={{
                background: C.bgOff, border: `1px solid ${C.border}`,
                borderRadius: 8, cursor: "pointer",
                width: 34, height: 34,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, color: C.inkLight, transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.blueLight; e.currentTarget.style.color = C.blue; e.currentTarget.style.borderColor = C.blueBorder; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.bgOff; e.currentTarget.style.color = C.inkLight; e.currentTarget.style.borderColor = C.border; }}>
              ✕
            </button>
          </div>

          {/* Nav links */}
          <div style={{ padding: "16px 14px", flex: 1 }}>
            {NAV_LINKS.map((l, i) => (
              <button key={l} onClick={() => go(l)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%",
                  background: page === l ? C.blueLight : "none",
                  border: "none", cursor: "pointer",
                  padding: "14px 16px", borderRadius: 10,
                  fontSize: 16, fontWeight: page === l ? 700 : 500,
                  color: page === l ? C.blue : C.inkMid,
                  marginBottom: 4, textAlign: "left",
                  transition: "transform 0.3s ease, opacity 0.3s ease, background 0.15s",
                  transitionDelay: menuOpen ? `${60 + i * 45}ms` : "0ms",
                  transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                  opacity: menuOpen ? 1 : 0,
                }}
                onMouseEnter={e => { if (page !== l) { e.currentTarget.style.background = C.bgOff; e.currentTarget.style.color = C.ink; } }}
                onMouseLeave={e => { if (page !== l) { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.inkMid; } }}>
                <span>{l}</span>
                {page === l && (
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.blue, flexShrink: 0 }} />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div style={{ padding: "16px 14px 28px", borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
            <button onClick={() => go("Contact")}
              style={{
                width: "100%", background: C.blue, color: "#fff",
                border: "none", cursor: "pointer",
                padding: "15px", borderRadius: 10,
                fontSize: 16, fontWeight: 700, fontFamily: "inherit",
                boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                transition: "transform 0.3s ease, opacity 0.3s ease, background 0.2s",
                transitionDelay: menuOpen ? `${60 + NAV_LINKS.length * 45}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                opacity: menuOpen ? 1 : 0,
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.blueMid}
              onMouseLeave={e => e.currentTarget.style.background = C.blue}>
              Get Started →
            </button>
            <p style={{ fontSize: 12, color: C.inkLight, textAlign: "center", marginTop: 10 }}>
              Free call · No commitment
            </p>
          </div>
        </div>
      )}
    </>
  );
}

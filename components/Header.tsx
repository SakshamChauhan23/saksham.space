"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home",    href: "/" },
  { label: "Writing", href: "/#writing" },
  { label: "Work",    href: "/#work" },
  { label: "Resume",  href: "/resume" },
];

const badges = ["AI", "Automation", "0-to-1"];

export default function Header() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/" || href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <style>{`
        .header-root {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }
        .header-pill-nav { display: flex; }
        .header-badges    { display: flex; justify-content: flex-end; }
        .header-hamburger { display: none; }
        .nav-pill-link { background: transparent; }
        .nav-pill-link:hover { background: #ebebea !important; color: var(--fg) !important; }

        @media (max-width: 767px) {
          .header-root { grid-template-columns: 1fr auto; }
          .header-pill-nav { display: none; }
          .header-badges   { display: none; }
          .header-hamburger { display: flex; }
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 49;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 2.5rem;
          transform: translateY(-100%);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-menu.open { transform: translateY(0); }
      `}</style>

      <header
        className="header-root"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "1rem clamp(1rem, 2.5vw, 2rem)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Left — label */}
        <span className="section-label" style={{ color: "var(--fg-muted)" }}>
          Product Manager · Builder
        </span>

        {/* Centre — pill nav */}
        <nav
          className="header-pill-nav"
          style={{
            alignItems: "center",
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "999px",
            padding: "0.3rem",
            gap: "0.125rem",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-pill-link"
              style={{
                display: "block",
                padding: "0.45rem 1.25rem",
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: 450,
                color: "var(--fg-muted)",
                textDecoration: "none",
                transition: "background 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap" as const,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right — badges + mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem" }}>
          <div className="header-badges" style={{ gap: "0.4rem" }}>
            {badges.map((b) => (
              <span
                key={b}
                style={{
                  padding: "0.28rem 0.7rem",
                  minWidth: "4.5rem",
                  textAlign: "center",
                  border: "1px solid #1377ff",
                  borderRadius: "999px",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: "#1377ff",
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="header-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              padding: "0.5rem",
              flexDirection: "column",
              gap: "5px",
              zIndex: 51,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--fg)",
                  borderRadius: "2px",
                  transition: "transform 0.35s ease, opacity 0.35s ease",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {navItems.map((item, idx) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "clamp(2.5rem, 10vw, 4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "var(--fg)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 400, letterSpacing: "0.05em" }}>
                  0{idx + 1}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedImage from "@/components/FeaturedImage";

export const metadata = {
  title: "Recruitment Automation — Saksham Chauhan",
  description: "How a US based recruitment agency turned an overwhelmed pipeline into a system that runs on logic, not individual effort and memory.",
};

export default function RecruitmentAutomation() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "6rem" }}>

        {/* Hero */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
                <Link
                  href="/#work"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.75rem", color: "var(--fg-muted)", textDecoration: "none",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Work
                </Link>
                <span style={{ color: "var(--line)", fontSize: "0.75rem" }}>/</span>
                <span className="section-label">AI & Ops · 2024</span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--fg)",
                marginBottom: "clamp(1.25rem, 3vh, 2rem)",
              }}>
                Too many candidates,<br />too little signal.
              </h1>

              <p style={{
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "56ch",
              }}>
                How a US based recruitment agency turned an overwhelmed pipeline into a system that runs on logic, not individual effort and memory.
              </p>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/recruitment-dashboard.png" alt="Recruitment automation dashboard" />
        </section>

        {/* Stats bar */}
        <section style={{ padding: "clamp(2.5rem, 6vh, 4rem) 0" }}>
          <div className="site-container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--line)",
            }} className="stats-grid">
              {[
                { stat: "80%", label: "Screening automated" },
                { stat: "3", label: "System layers built" },
                { stat: "0", label: "Manual outreach per search" },
              ].map(({ stat, label }) => (
                <div key={label} style={{ background: "var(--bg)", padding: "clamp(1.5rem, 4vw, 3rem)" }}>
                  <p style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, letterSpacing: "-0.04em", color: "#1377ff", marginBottom: "0.25rem" }}>
                    {stat}
                  </p>
                  <p className="section-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "clamp(3rem, 8vw, 8rem)",
              alignItems: "start",
            }} className="case-body-grid">

              {/* Sticky label column */}
              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Context</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  US based recruitment agency. High volume operation, experienced team, consistent lead flow — but systemic dysfunction underneath.
                </p>
              </div>

              {/* Content column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 7vh, 5rem)" }}>

                {/* Problem */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>The problem</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "2rem" }}>
                    The agency operated at high volume with consistent leads and an experienced team, yet faced systemic dysfunction. Broad incoming requirements made it impossible to distinguish promising leads from those destined to fail.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    Senior staff invested substantial time on unqualified opportunities. The candidate pool remained largely inactive, scattered across inboxes and spreadsheets without centralised management. The core issue was systemic, not sourcing related.
                  </p>
                </div>

                {/* Gaps */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>Three identified gaps</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                      { n: "01", text: "There was no qualification layer between demand and delivery. Every requirement that came in went directly to the team regardless of its readiness." },
                      { n: "02", text: "The candidate pool had no home. Candidates existed as records, not as a community." },
                      { n: "03", text: "Outreach was reactive. When a requirement was confirmed, the team had to build outreach from scratch." },
                    ].map(({ n, text }) => (
                      <div key={n} style={{
                        display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "1rem",
                        padding: "1.5rem", border: "1px solid var(--line)", background: "#fafafa",
                      }}>
                        <span className="section-label">{n}</span>
                        <p style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)", lineHeight: 1.75, color: "var(--fg-muted)" }}>
                          &ldquo;{text}&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>The solution</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "2rem" }}>
                    A three-layer recruitment operations system — each layer addressing one of the identified gaps.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
                    {[
                      {
                        layer: "Layer One",
                        title: "Discord Candidate Community",
                        desc: "Transformed static candidate lists into a structured, organised environment enabling role based segmentation, consistent engagement, and rapid activation.",
                      },
                      {
                        layer: "Layer Two",
                        title: "Requirements Qualification Flow",
                        desc: "Implemented intake screening with standardised questions regarding role definition, candidate criteria, timeline, and decision authority. AI identified vague language and missing elements; humans retained final approval authority.",
                      },
                      {
                        layer: "Layer Three",
                        title: "LinkedIn & Email Outreach Sequences",
                        desc: "Automated outreach triggered upon requirement qualification, eliminating manual composition per search.",
                      },
                    ].map(({ layer, title, desc }) => (
                      <div key={layer} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "baseline", marginBottom: "0.625rem" }}>
                          <span className="section-label" style={{ color: "#1377ff", flexShrink: 0 }}>{layer}</span>
                          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.1875rem)", fontWeight: 400, letterSpacing: "-0.01em", color: "var(--fg)" }}>{title}</p>
                        </div>
                        <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)", paddingLeft: "0" }}>{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional screenshots */}
                <FeaturedImage src="/recruitment-dashboard2.png" alt="Recruitment automation — pipeline view" maxWidth="100%" />
                <FeaturedImage src="/recruitment-dashboard3.png" alt="Recruitment automation — outreach sequences" maxWidth="100%" />

                {/* Outcome */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>Outcome</p>
                  <blockquote style={{ borderLeft: "2px solid #1377ff", paddingLeft: "1.5rem", margin: "0 0 2rem" }}>
                    <p style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.5, color: "var(--fg)" }}>
                      &ldquo;Three layers. One system. The agency now has a recruitment operation that runs on logic rather than individual effort and memory.&rdquo;
                    </p>
                  </blockquote>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "2rem" }}>
                    The community layer, the qualification layer, and the outreach layer each solved a discrete gap, but together they form a single operating system for the recruitment team. Volume stayed the same. The work the team did to handle that volume changed completely.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    Pre-qualified requirements replaced open ended briefs. An organised candidate community replaced scattered inboxes. Triggered outreach sequences replaced manual composition per search. The agency did not shrink the team to make this work. They redirected the team toward the work that actually required human judgment.
                  </p>
                </div>

                {/* Closing */}
                <div style={{
                  padding: "clamp(1.5rem, 4vw, 2.5rem)",
                  background: "#eef4ff",
                  border: "1px solid rgba(19,119,255,0.15)",
                }}>
                  <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.1875rem)", lineHeight: 1.7, color: "var(--fg)", fontStyle: "italic" }}>
                    &ldquo;If your team is dealing with volume it cannot process cleanly, the problem is almost always upstream of sourcing.&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Back nav */}
        <section style={{ padding: "clamp(3rem, 6vh, 4rem) 0" }}>
          <div className="site-container">
            <Link href="/#work" className="cs-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M2 7l4.5-4.5M2 7l4.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All work
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .cs-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.8125rem;
          color: var(--fg-muted);
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .cs-back-link:hover { color: #1377ff; }
        @media (max-width: 767px) {
          .case-body-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

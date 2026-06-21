import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedImage from "@/components/FeaturedImage";

export const metadata = {
  title: "Admissions at Scale — Saksham Chauhan",
  description: "A four day manual process, rebuilt to run in thirty three hours. NavGurukul admissions system.",
};

export default function AdmissionsAtScale() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "6rem" }}>

        {/* Hero */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
                <Link href="/#work" className="cs-back-link">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Work
                </Link>
                <span style={{ color: "var(--line)", fontSize: "0.75rem" }}>/</span>
                <span className="section-label">Systems Design · 2023</span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--fg)",
                marginBottom: "clamp(1.25rem, 3vh, 2rem)",
              }}>
                A four day manual process, rebuilt to run in thirty three hours.
              </h1>

              <p style={{
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "56ch",
              }}>
                NavGurukul, 2023
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "clamp(2.5rem, 6vh, 4rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--line)" }} className="stats-grid">
              {[
                { stat: "33h",     label: "Down from 4 days" },
                { stat: "100k+",   label: "Applications managed" },
                { stat: "0",       label: "Rework rate" },
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

        {/* Featured image — dashboard */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/ad-dashboard.png" alt="Admissions dashboard" maxWidth="860px" />
          <p className="section-label" style={{ padding: "1rem 0", color: "var(--fg-muted)" }}>
            The dashboard — a single view of every applicant's stage, status, and owner
          </p>
        </section>

        {/* Body */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", alignItems: "start" }} className="case-body-grid">

              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Context</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  NavGurukul processes admissions for tens of thousands of applicants across multiple campuses, languages, and entry pathways. Admissions is the first system a prospective learner touches.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 7vh, 5rem)" }}>

                {/* Problem */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>The problem</p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    The process ran on spreadsheets. A single application took four days to move through screening, interview scheduling, and an offer decision, with the steps coordinated manually across multiple people and files.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
                    Roughly one in seven applications had to be redone because of a manual error — a wrong status, a missed update, a record that fell out of sync with another sheet.
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                    The deeper problem was not the spreadsheets themselves. It was that the workflow had outgrown the tool. Multilingual screening tests, parent conversation holds before an offer could be sent, and waitlist management for social impact admissions are not edge cases — they are the core of how admissions actually works at NavGurukul.
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>Decision and approach</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--line)" }}>
                    {[
                      {
                        n: "Build vs buy",
                        text: "A generic CRM was evaluated and ruled out — not because it lacked features, but because adopting one would have meant reshaping the admissions workflow to fit the software. Parent conversation holds, multilingual screening, and waitlist logic for social impact admissions are specific enough that forcing them into an off-the-shelf tool would have meant working around it as much as with it.",
                      },
                      {
                        n: "What to build first",
                        text: "Rather than attempt a full replacement in one pass, the system was scoped around the actual lifecycle — screening, interview scheduling, decisioning, and onboarding — treating each as a distinct stage with its own state. This made it possible to define exactly where rework was happening and design validation directly into those points.",
                      },
                      {
                        n: "Stack",
                        text: "Built on Lovable, Supabase, and Cursor — chosen to move from decision to working system quickly without sacrificing the data structure a process at this volume needs. Supabase provided the relational structure to track an applicant reliably across stages, owners, and status changes.",
                      },
                    ].map(({ n, text }) => (
                      <div key={n} style={{ background: "var(--bg)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
                        <p style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1rem)", fontWeight: 500, color: "var(--fg)", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{n}</p>
                        <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Build and proof intro */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0 clamp(2rem, 4vh, 3rem)" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)" }} className="case-body-grid">
              <div>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Build & proof</p>
              </div>
              <div>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  Three parts of the system show what changed in practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image — Interview scheduling */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/ad-interviews.png" alt="Interview scheduling interface" maxWidth="860px" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", padding: "clamp(1.5rem, 3vh, 2.5rem) 0" }} className="case-body-grid">
            <p className="section-label" style={{ color: "var(--fg-muted)" }}>Interview scheduling</p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>
              Screening, scheduling, and outcome are tracked as one continuous record per applicant, so an interview decision updates the applicant's status automatically rather than waiting for someone to carry that update into a different file.
            </p>
          </div>
        </section>

        {/* Image — Offer letter */}
        <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
          <FeaturedImage src="/ad-offer-letter.png" alt="Offer letter generation" maxWidth="860px" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)", padding: "clamp(1.5rem, 3vh, 2.5rem) 0" }} className="case-body-grid">
            <p className="section-label" style={{ color: "var(--fg-muted)" }}>Offer letter</p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>
              Generated directly from the applicant's record once a decision is made, removing a manual drafting step that was a common source of rework in the old process.
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}>
          <div className="site-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem, 8vw, 8rem)" }} className="case-body-grid">
              <div style={{ position: "sticky", top: "7rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>What it changed</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 5vh, 3.5rem)" }}>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  Together these stages form a system that manages the complete lifecycle end to end, with validation built into each transition so a record cannot move forward in an inconsistent state.
                </p>

                <blockquote style={{ borderLeft: "2px solid #1377ff", paddingLeft: "1.5rem", margin: 0 }}>
                  <p style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.5, color: "var(--fg)" }}>
                    &ldquo;Admissions stopped being a process held together by people manually checking spreadsheets against each other, and became a system where the workflow itself enforces consistency.&rdquo;
                  </p>
                </blockquote>

                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  The four days an applicant used to wait on uncertain status is now thirty three hours, and that difference is measured in qualified applicants who stay in the process rather than dropping out of it.
                </p>
                <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", lineHeight: 1.8, color: "var(--fg-muted)" }}>
                  Admissions volume grew without adding headcount. The coordination work that previously required people to manually check records across multiple files is now handled by the system itself. The team redirected that time toward conversations with applicants rather than administration of their data.
                </p>
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
      `}</style>
    </>
  );
}

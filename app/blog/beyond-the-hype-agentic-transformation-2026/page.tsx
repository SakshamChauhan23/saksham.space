import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";

const url = "https://saksham.space/blog/beyond-the-hype-agentic-transformation-2026";
const title = "What Separates AI Winners From Everyone Else in 2026";
const description =
  "88 percent of companies use AI. Only 6 percent see real profit from it. Here is what the other 94 percent are getting wrong in 2026.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog/beyond-the-hype-agentic-transformation-2026" },
  openGraph: {
    title: "Beyond the Hype: What Actually Separates AI Winners From Everyone Else in 2026",
    description,
    url,
    type: "article",
    publishedTime: "2026-07-12",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond the Hype: What Actually Separates AI Winners From Everyone Else in 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Beyond the Hype: What Actually Separates AI Winners From Everyone Else in 2026",
      author: { "@type": "Person", name: "Saksham" },
      datePublished: "2026-07-12",
      dateModified: "2026-07-12",
      mainEntityOfPage: url,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do most AI transformations fail to show a profit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most fail because companies buy tools without redesigning the workflow the tool is meant to run on. McKinsey found 88 percent of organizations use AI regularly, but only 39 percent report any enterprise level profit impact, and just 6 percent qualify as genuine high performers. The gap is strategy and workflow redesign, not the AI itself.",
          },
        },
        {
          "@type": "Question",
          name: "What is agentic AI, in plain terms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agentic AI is software given a goal instead of a script. It can plan a sequence of steps, use tools, and adjust when conditions change, largely without a person approving each action. This differs from a chatbot or copilot, which responds to prompts but does not act independently across a workflow.",
          },
        },
        {
          "@type": "Question",
          name: "What is Shadow AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shadow AI is the use of AI tools inside a company that IT and security teams have not approved or are not monitoring. It creates risk because sensitive data can be shared with tools that have no data handling agreement in place, which can violate regulations like GDPR or HIPAA even when no one intended harm.",
          },
        },
        {
          "@type": "Question",
          name: "Did Klarna actually replace its customer service team with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Partially, and then it reversed part of that decision. Klarna's AI chatbot took over routine queries, and headcount fell sharply between 2022 and 2024. But by 2025, declining service quality on complex cases led the company to begin rehiring human agents in a hybrid model, while its broader long term headcount reduction continued in the background.",
          },
        },
        {
          "@type": "Question",
          name: "Does having more AI tools guarantee better results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. BCG's research found that strategic clarity, a clear plan for what AI should achieve, improves measurable business impact by 25 percentage points, while better tool access alone improves it by about 5 percentage points. Direction outperforms access by roughly five to one.",
          },
        },
        {
          "@type": "Question",
          name: "What should a company do first: buy AI tools or build governance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Governance should be designed in from the start, not added after deployment. Deloitte found only 21 percent of companies have a mature governance model for their AI agents even as adoption accelerates. Companies that build oversight, explainability, and data handling rules early scale faster than those that treat governance as cleanup.",
          },
        },
      ],
    },
  ],
};

const linkStyle = {
  color: "#1377ff",
  textDecoration: "none",
  borderBottom: "1px solid rgba(19,119,255,0.3)",
};

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      {children}
    </a>
  );
}

const pStyle: React.CSSProperties = {
  fontSize: "clamp(1rem, 1.3vw, 1.125rem)",
  lineHeight: 1.8,
  color: "rgba(0, 0, 0, 0.72)",
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
  fontWeight: 400,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
  color: "var(--fg)",
};

const articleWrap: React.CSSProperties = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "0 clamp(1.5rem, 6vw, 3rem)",
};

function Section({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: "clamp(1.5rem, 3.5vh, 2.5rem) 0" }}>
      <div style={articleWrap}>
        {label && (
          <p className="section-label" style={{ marginBottom: "1rem", color: "#1377ff" }}>
            {label}
          </p>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{children}</div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Why do most AI transformations fail to show a profit?",
    a: "Most fail because companies buy tools without redesigning the workflow the tool is meant to run on. McKinsey found 88 percent of organizations use AI regularly, but only 39 percent report any enterprise level profit impact, and just 6 percent qualify as genuine high performers. The gap is strategy and workflow redesign, not the AI itself.",
  },
  {
    q: "What is agentic AI, in plain terms?",
    a: "Agentic AI is software given a goal instead of a script. It can plan a sequence of steps, use tools, and adjust when conditions change, largely without a person approving each action. This differs from a chatbot or copilot, which responds to prompts but does not act independently across a workflow.",
  },
  {
    q: "What is Shadow AI?",
    a: "Shadow AI is the use of AI tools inside a company that IT and security teams have not approved or are not monitoring. It creates risk because sensitive data can be shared with tools that have no data handling agreement in place, which can violate regulations like GDPR or HIPAA even when no one intended harm.",
  },
  {
    q: "Did Klarna actually replace its customer service team with AI?",
    a: "Partially, and then it reversed part of that decision. Klarna's AI chatbot took over routine queries, and headcount fell sharply between 2022 and 2024. But by 2025, declining service quality on complex cases led the company to begin rehiring human agents in a hybrid model, while its broader long term headcount reduction continued in the background.",
  },
  {
    q: "Does having more AI tools guarantee better results?",
    a: "No. BCG's research found that strategic clarity, a clear plan for what AI should achieve, improves measurable business impact by 25 percentage points, while better tool access alone improves it by about 5 percentage points. Direction outperforms access by roughly five to one.",
  },
  {
    q: "What should a company do first: buy AI tools or build governance?",
    a: "Governance should be designed in from the start, not added after deployment. Deloitte found only 21 percent of companies have a mature governance model for their AI agents even as adoption accelerates. Companies that build oversight, explainability, and data handling rules early scale faster than those that treat governance as cleanup.",
  },
];

const sources = [
  { n: "1.", t: "McKinsey & Company, The State of AI in 2025 (survey of 1,993 respondents across 105 countries, June to July 2025)" },
  { n: "2.", t: "Boston Consulting Group,", href: "https://www.bcg.com/publications/2026/ai-at-work-why-strategy-matters-more-than-tools", label: "AI at Work: Strategy Matters More Than Tools", rest: ", fourth annual AI at Work survey, June 2026" },
  { n: "3.", t: "Deloitte,", href: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends.html", label: "Tech Trends 2026", rest: " and State of AI in the Enterprise, 2026 edition" },
  { n: "4.", t: "INFORMS,", href: "https://www.informs.org/Impact/O.R.-Analytics-Success-Stories/Optimizing-Delivery-Routes", label: "Optimizing Delivery Routes: UPS ORION", rest: "" },
  { n: "5.", t: "IBM,", href: "https://www.ibm.com/case-studies/ibm-client-zero", label: "IBM as Client Zero", rest: " and Enterprise Transformation and Extreme Productivity with AI" },
  { n: "6.", t: "MarketsandMarkets,", href: "https://www.marketsandmarkets.com/PressReleases/ai-agents.asp", label: "AI Agents Market Worth $52.62 Billion by 2030", rest: "" },
  { n: "7.", t: "Entrepreneur,", href: "https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396", label: "Klarna Is Hiring Customer Service Agents After AI Couldn't Cut It on Calls", rest: ", reporting on Bloomberg interview with CEO Sebastian Siemiatkowski" },
  { n: "8.", t: "FinTech Magazine,", href: "https://fintechmagazine.com/news/klarna-ceo-ai-will-cut-workforce-by-a-third", label: "Klarna CEO: AI Set to Cut Workforce by a Third", rest: "" },
  { n: "9.", t: "Salesforce 2026 Workforce AI Survey, cited via", href: "https://redteampartner.com/blog/shadow-ai-enterprise-risk/", label: "Red Team Partner, Shadow AI: Enterprise Risk", rest: "" },
];

export default function BeyondTheHype() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "6rem" }}>

        {/* Hero */}
        <section style={{ padding: "clamp(2rem, 5vh, 3rem) 0" }}>
          <div style={articleWrap}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
              <Link href="/blog" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.75rem", color: "var(--fg-muted)", textDecoration: "none",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Blog
              </Link>
              <span style={{ color: "var(--line)", fontSize: "0.75rem" }}>/</span>
              <span className="section-label">July 12, 2026</span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "clamp(1.25rem, 3vh, 2rem)",
            }}>
              Beyond the Hype: What Actually Separates AI Winners From Everyone Else in 2026
            </h1>

            <p style={pStyle}>
              Eighty eight percent of companies now use AI regularly, but only 39 percent can point to any actual profit impact, and just 6 percent count as genuine high performers, according to McKinsey&apos;s 2025 State of AI survey. The gap is not the technology. It is strategy, governance, and workforce design: the three things most companies buy AI tools instead of building.
            </p>
          </div>
        </section>

        {/* Intro narrative */}
        <Section>
          <p style={pStyle}>
            The first automation system I built for a client did not fail because the AI was bad. It failed because I automated a mess.
          </p>
          <p style={pStyle}>
            Two small retainer clients, a construction firm and an interior design studio, had come to me for marketing. Within a few weeks it was obvious the real problem sat one layer beneath the content calendar: nobody could see what was actually happening across the business. So I built each of them a Notion Command Centre, a single dashboard tracking every deliverable, every status, every open question. It looked clean. It looked automated. And for the first two weeks, it made the chaos worse, because I had digitized the chaos rather than removing it.
          </p>
          <p style={pStyle}>
            The fix was not a better tool. It was going back and redesigning the workflow the dashboard was supposed to run on, then automating that. That distinction, between installing AI on top of a broken process and rebuilding the process first, is the entire difference between the 6 percent of companies McKinsey calls AI high performers and the 94 percent still waiting for a return.
          </p>
          <p style={pStyle}>
            It plays out at every scale. Here is where, in 2026, across five fronts.
          </p>
        </Section>

        {/* Where is the money */}
        <Section>
          <h2 style={h2Style}>Where Is the Money Actually Being Saved?</h2>
          <p style={pStyle}>
            The honest answer is: in narrower places than the hype suggests, but the savings that are real, are real.
          </p>
          <p style={pStyle}>
            UPS&apos;s ORION routing system is the oldest and well documented example. By combining operations research with machine learning to recalculate delivery routes in real time, ORION now saves UPS an estimated <A href="https://www.informs.org/Impact/O.R.-Analytics-Success-Stories/Optimizing-Delivery-Routes">$300 to $400 million a year</A>, along with 10 million gallons of fuel annually. It took over a decade of field testing before full deployment. Nobody at UPS bought this off a shelf.
          </p>
          <p style={pStyle}>
            IBM&apos;s internal transformation tells a similar story from the office side. Since 2023, IBM has <A href="https://www.ibm.com/case-studies/ibm-client-zero">reported $4.5 billion in productivity gains</A> from AI, automation, and hybrid cloud combined, with its internal HR assistant resolving 94 percent of routine employee inquiries and its IT assistant <A href="https://www.ibm.com/think/insights/enterprise-transformation-extreme-productivity-ai">cutting support tickets by 70 percent</A>. The pattern in both cases is the same: the savings came from redesigning a workflow end to end, not from layering a chatbot on top of the old one.
          </p>
          <p style={pStyle}>
            The macro numbers back this up. BCG&apos;s fourth annual AI at Work survey found that 42 percent of regular frontline AI users save a full workday every week, <A href="https://www.bcg.com/publications/2026/ai-at-work-why-strategy-matters-more-than-tools">rising to 60 percent in marketing and 53 percent in IT</A>. But 66 percent of them get little or no guidance on what to do with that time. Saved hours are not saved money until someone decides where they go.
          </p>
        </Section>

        {/* What makes AI agentic */}
        <Section>
          <h2 style={h2Style}>What Actually Makes AI &ldquo;Agentic&rdquo;?</h2>
          <p style={pStyle}>
            The word gets used loosely, so it is worth being precise. Agentic AI is not a smarter chatbot. It is software given a goal rather than a script, able to plan a sequence of actions, use tools, and adjust when something changes, without a person approving each step.
          </p>
          <p style={pStyle}>
            The money is following that distinction. Estimates vary by research firm, but MarketsandMarkets projects the <A href="https://www.marketsandmarkets.com/PressReleases/ai-agents.asp">enterprise AI agent market growing from $7.84 billion in 2025 to $52.62 billion by 2030</A>, a compound annual growth rate above 46 percent. Grand View Research puts the enterprise specific segment at a similar trajectory, from roughly $3.7 billion to $24.5 billion over the same period.
          </p>
          <p style={pStyle}>
            What the investment has not yet solved is the gap between demo and deployment. Deloitte&apos;s Tech Trends 2026 research found that while <A href="https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends.html">38 percent of organizations are piloting AI agents, only 11 percent have any running in production</A>. Forty two percent are still writing their agentic strategy, and 35 percent have no strategy at all. Gartner, cited in the same report, expects 40 percent of agentic AI projects to be cancelled by the end of 2027, not because the technology fails, but because companies are automating processes that were broken to begin with.
          </p>
        </Section>

        {/* Fewer tools win */}
        <Section>
          <h2 style={h2Style}>Why Do Companies With Fewer Tools Sometimes Win?</h2>
          <p style={pStyle}>
            This is the finding that should reorder most companies&apos; AI budgets. BCG found that giving employees strategic clarity, an explicit plan for what AI is for, improves measurable business impact by 25 percentage points. Giving them better tools alone, <A href="https://www.bcg.com/publications/2026/ai-at-work-why-strategy-matters-more-than-tools">with no strategy attached, improves it by about 5</A>. Clarity outperforms access by five to one.
          </p>
          <p style={pStyle}>
            Deloitte&apos;s research frames the same problem differently: most companies are <A href="https://www.deloitte.com/us/en/insights/topics/talent/operating-models-for-humans-ai-agents.html">automating existing processes designed for human workers</A> instead of redesigning the process itself, a mismatch one Deloitte partner compared to fitting a jet engine to a bicycle. It is a more technical version of what happened with that Notion dashboard: the tool worked exactly as designed. It was solving the wrong problem.
          </p>
          <p style={pStyle}>
            BCG&apos;s own recommendation to CEOs is blunt: change the scoreboard from adoption to value, redesign a few core workflows end to end rather than buying more tools, and personally own the transformation rather than delegating it to IT. Companies where the CEO does this outperform on every measure BCG tracked, including how much employees enjoy the work.
          </p>
        </Section>

        {/* Governance */}
        <Section>
          <h2 style={h2Style}>Who&apos;s Watching What AI Does With Your Data?</h2>
          <p style={pStyle}>
            Governance is the least glamorous front, and the one most companies build last, which is backwards.
          </p>
          <p style={pStyle}>
            Deloitte&apos;s 2026 enterprise survey found that <A href="https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-agents-scaling-faster.html">only 21 percent of companies have a mature governance model</A> for the AI agents they are deploying, even as 74 percent expect to be using agents at least moderately by 2027. On the workforce side, Salesforce&apos;s 2026 Workforce AI Survey found that <A href="https://redteampartner.com/blog/shadow-ai-enterprise-risk/">67 percent of employees now use AI tools at work, but only 18 percent of organizations have a formal AI security policy</A> covering that use. That gap between usage and policy is what security teams call Shadow AI: tools nobody approved, processing data nobody is tracking.
          </p>
          <p style={pStyle}>
            The fix researchers point to is not a ban, since bans do not survive contact with an employee&apos;s actual workload. It is a governed alternative that is fast enough people do not go around it, plus a genuine effort at explainability, understanding why an AI system reached a conclusion, rather than only what it concluded. That second piece matters more as AI moves from answering questions to making decisions with real consequences.
          </p>
        </Section>

        {/* Klarna */}
        <Section>
          <h2 style={h2Style}>Why Is Klarna Rehiring the People It Just Automated Away?</h2>
          <p style={pStyle}>
            In 2024, Klarna&apos;s CEO announced that an AI chatbot was doing the work of roughly 700 customer service agents, and the company <A href="https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396">paused hiring for over a year</A>, cutting headcount toward 3,400. It became the reference case for AI replacing white collar work at scale.
          </p>
          <p style={pStyle}>
            By 2025 and into 2026, Klarna was quietly reversing course. Customer satisfaction had degraded on complex cases, and the projected savings had not fully materialized once the cost of the quality problems was counted. CEO Sebastian Siemiatkowski told Bloomberg the company had gone too far, <A href="https://mlq.ai/news/klarna-ceo-admits-aggressive-ai-job-cuts-went-too-far-starts-hiring-again-after-us-ipo/">saying plainly that the focus on cost had come at the expense of quality</A>, and began recruiting human agents again under a flexible, remote model. AI now handles the routine, high volume queries. Humans handle the escalations, the judgment calls, the moments a customer needs to know someone is actually listening.
          </p>
          <p style={pStyle}>
            Klarna&apos;s broader headcount story continues in parallel and is not a contradiction: the company has still gone from roughly 7,000 employees in 2022 to about 3,000 today, with a <A href="https://fintechmagazine.com/news/klarna-ceo-ai-will-cut-workforce-by-a-third">stated target of 2,000 by 2030</A> through attrition and not backfilling roles. Structural workforce reduction and the customer service reversal are two different decisions running at the same time, which is itself the lesson: a company can be right that AI should shrink certain functions and wrong about which interactions inside those functions still need a person.
          </p>
          <p style={pStyle}>
            BCG&apos;s data explains why this keeps happening across the industry. Two thirds of regular AI users report higher job satisfaction, and 41 percent, rising to 48 percent among leaders, <A href="https://www.bcg.com/publications/2026/ai-at-work-why-strategy-matters-more-than-tools">report increased mental strain at the same time</A>. AI removes the simple work and concentrates what is left into harder judgment calls, for the humans still doing it and, as Klarna discovered, for the customers on the other end of a system with no human left to escalate to.
          </p>
        </Section>

        {/* Throughline */}
        <Section>
          <h2 style={h2Style}>The Throughline</h2>
          <p style={pStyle}>
            None of these five fronts is really separate. Cost savings that hold up are the ones built on a redesigned workflow. Agentic tools that work are the ones with a strategy behind them. Governance built early is what lets a company scale agents without a Shadow AI problem. And the workforce decisions that last are the ones that ask not just what AI can automate, but which parts of that work a human still needs to be standing in for.
          </p>
          <p style={pStyle}>
            I learned the small version of this lesson on a Notion dashboard nobody wanted to open. Klarna learned the billion dollar version of it on a customer service line nobody wanted to call. The scale is different. The lesson is not.
          </p>

          <blockquote style={{ borderLeft: "2px solid #1377ff", paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
            <p style={{
              fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.5,
              color: "var(--fg)",
            }}>
              &ldquo;The useful question for anyone running a team through this is not which of the five fronts to prioritize. It is which one you have been quietly avoiding.&rdquo;
            </p>
          </blockquote>
        </Section>

        {/* FAQ */}
        <section style={{ padding: "clamp(1.5rem, 3.5vh, 2.5rem) 0" }}>
          <div style={articleWrap}>
            <p className="section-label" style={{ marginBottom: "1.5rem", color: "#1377ff" }}>
              Frequently Asked Questions
            </p>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Sources */}
        <section style={{ padding: "clamp(1.5rem, 3.5vh, 2.5rem) 0" }}>
          <div style={articleWrap}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>Sources</p>
            <ol style={{ display: "flex", flexDirection: "column", gap: "0.875rem", listStyle: "none" }}>
              {sources.map(({ n, t, href, label, rest }) => (
                <li key={n} style={{ display: "flex", gap: "0.75rem", fontSize: "0.8125rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--fg-dim)", flexShrink: 0 }}>{n}</span>
                  <span>
                    {t}{href ? (
                      <>
                        {" "}
                        <a href={href} target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, color: "var(--fg-muted)" }}>
                          {label}
                        </a>
                      </>
                    ) : null}
                    {rest}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Back nav */}
        <section style={{ padding: "clamp(1.5rem, 3vh, 2rem) 0" }}>
          <div style={articleWrap}>
            <Link href="/blog" className="cs-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M2 7l4.5-4.5M2 7l4.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All writing
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
      `}</style>
    </>
  );
}

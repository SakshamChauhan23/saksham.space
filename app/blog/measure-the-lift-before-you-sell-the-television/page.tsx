import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedImage from "@/components/FeaturedImage";
import GroundTruthCta from "@/components/GroundTruthCta";
import { articleGraph } from "@/lib/seo";

const url = "https://saksham.space/blog/measure-the-lift-before-you-sell-the-television";
const title = "Measure the Lift Before You Sell the Television";
const description =
  "A supermarket that measured lifts and an airline that handed out umbrellas both beat better-equipped rivals. The advantage was never the tool. It was the system.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blog/measure-the-lift-before-you-sell-the-television" },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    publishedTime: "2026-10-27",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": articleGraph({
    path: "/blog/measure-the-lift-before-you-sell-the-television",
    headline: title,
    description,
    datePublished: "2026-10-27",
    image: "/blog/measure-the-lift-before-you-sell-the-television/opengraph-image.jpg",
  }),
};

const pStyle: React.CSSProperties = {
  fontSize: "clamp(1rem, 1.35vw, 1.25rem)",
  lineHeight: 1.8,
  color: "rgba(0, 0, 0, 0.72)",
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)",
  fontWeight: 400,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
  color: "var(--fg)",
};

const articleWrap: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "0 clamp(1.5rem, 6vw, 3rem)",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const captionStyle: React.CSSProperties = {
  marginTop: "0.85rem",
  fontSize: "0.875rem",
  lineHeight: 1.5,
  color: "var(--fg-muted)",
  textAlign: "center",
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

function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="article-wide" style={{ marginBlock: "0.5rem" }}>
      <FeaturedImage src={src} alt={alt} maxWidth="100%" style={{ borderRadius: "0.75rem" }} />
      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
}

const salesPerStore = [
  { name: "Pang Dong Lai", value: 233, label: "US$233m" },
  { name: "Walmart China", value: 60.8, label: "US$60.8m" },
  { name: "Trader Joe’s", value: 33.8, label: "US$33.8m" },
  { name: "Yonghui", value: 13.2, label: "US$13.2m" },
];

function SalesPerStoreChart() {
  const max = salesPerStore[0].value;
  return (
    <figure className="sps-chart article-wide" style={{ marginBlock: "0.5rem" }}>
      <div
        role="img"
        aria-label={`Average sales per store: ${salesPerStore.map((d) => `${d.name} ${d.label}`).join(", ")}.`}
        className="sps-plot"
      >
        <p className="section-label sps-title" aria-hidden="true">Average sales per store (US$)</p>
        {salesPerStore.map((d, i) => (
          <div key={d.name} className="sps-row" aria-hidden="true">
            <span className="sps-name" style={{ color: i === 0 ? "var(--fg)" : "rgba(0, 0, 0, 0.6)" }}>
              {d.name}
            </span>
            <div className="sps-track">
              <span
                className="sps-bar"
                style={{
                  width: `${(d.value / max) * 100}%`,
                  background: i === 0 ? "#1377ff" : "rgba(0, 0, 0, 0.18)",
                }}
              />
              <span className="sps-value" style={{ color: i === 0 ? "var(--fg)" : "rgba(0, 0, 0, 0.6)" }}>
                {d.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <figcaption style={captionStyle}>Fourteen stores, outselling chains with hundreds.</figcaption>
    </figure>
  );
}

export default function MeasureTheLift() {
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
              <span className="section-label">October 27, 2026</span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
            }}>
              Measure the Lift Before You Sell the Television
            </h1>

            <p style={{ ...pStyle, fontStyle: "italic", color: "var(--fg-muted)" }}>
              Two unglamorous businesses, and why systems still matter in the age of AI
            </p>

            <div className="article-wide" style={{ marginBlock: "clamp(1.75rem, 4vh, 2.5rem)" }}>
              <FeaturedImage
                src="/blog/measure-the-lift/cover.webp"
                alt="A man measures the width of a lift opening with a tape measure while a boxed television leans against the wall beside it."
                maxWidth="100%"
                style={{ borderRadius: "0.75rem" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={pStyle}>
                In the Chinese city of Xuchang, a supermarket once measured every residential lift in town.
              </p>
              <p style={pStyle}>
                A customer bought a large television and couldn&apos;t fit it into their building&apos;s small lift. The retailer, Pang Dong Lai, could have apologised and moved on. Instead, it recorded the lift dimensions of residential complexes across the city, so staff could recommend a television that would actually fit before a customer paid for it.
              </p>
              <p style={pStyle}>
                No algorithm. No app. Just a measuring tape, a database and a habit of solving the real problem.
              </p>
              <p style={pStyle}>
                This month, I studied two cases in my strategy module at UCD Smurfit: Pang Dong Lai, a regional Chinese retailer, and AirAsia X, a Malaysian budget airline. On the surface, they share almost nothing. One sells trust at a premium. The other sells long-distance flights at prices the industry said were impossible. But both succeeded with surprisingly ordinary tools, and both reveal the same thing: the advantage was never the tool. It was the system.
              </p>
            </div>
          </div>
        </section>

        <Section>
          <h2 style={h2Style}>Pang Dong Lai: a system built on people</h2>
          <p style={pStyle}>
            By 2025, Pang Dong Lai operated just 14 stores in two mid-sized cities. Yet each store generated roughly US$233 million in sales, almost four times Walmart China&apos;s per-store average.
          </p>
          <SalesPerStoreChart />
          <p style={pStyle}>
            Alibaba&apos;s Hema, by contrast, built its stores around an app and 30-minute delivery, and only became profitable in 2024. Pang Dong Lai stayed profitable throughout.
          </p>
          <p style={pStyle}>
            What powered it was a system of choices that reinforced one another:
          </p>
          <ul style={listStyle}>
            <li style={pStyle}><b>Employees</b> earn more than double the local average wage, take a month of annual leave and get every Tuesday off. The founder says most profits go to staff. Annual turnover was about 1%, against an industry average near 30%.</li>
            <li style={pStyle}><b>Frontline staff</b> can resolve a customer complaint on the spot for up to RMB 500 without asking a manager.</li>
            <li style={pStyle}><b>Employees helped write over 700 operating manuals</b>, some running to hundreds of pages, covering tasks as specific as cleaning and jewellery handling.</li>
            <li style={pStyle}><b>Suppliers</b> are sometimes paid more as volumes grow, but removed immediately for quality failures.</li>
          </ul>
          <p style={pStyle}>
            Each choice supports the others. Well-paid staff stay. Staff who stay build expertise. Expertise produces the service that customers trust. Trust produces the sales that fund the wages.
          </p>
          <Figure
            src="/blog/measure-the-lift/flywheel.webp"
            alt="The Pang Dong Lai flywheel: fair pay leads to staff who stay, expertise grows, better service, customer trust, higher sales, and back to fair pay."
            caption="Each choice funds the next."
          />
          <p style={pStyle}>
            Yonghui, a major national chain, invested heavily in learning from Pang Dong Lai and kept losing money. It copied the practices. It could not copy the system that held them together.
          </p>
        </Section>

        <Section>
          <h2 style={h2Style}>AirAsia X: a system built on cost</h2>
          <p style={pStyle}>
            AirAsia X began in 2007 with a belief the airline industry considered naive: that it could sell long-haul flights cheaply, without free meals, entertainment, or business class.
          </p>
          <p style={pStyle}>
            Its tools were modest. Passengers walked across the tarmac instead of through gates, and staff handed out umbrellas when it rained. Its booking website crashed during big sales.
          </p>
          <p style={pStyle}>
            Yet by 2009, its cost per seat mile was about US$0.02, compared with roughly US$0.09 for American budget airlines. That gap came from a system:
          </p>
          <ul style={listStyle}>
            <li style={pStyle}><b>More seats per plane:</b> 377 on an aircraft that rivals typically fitted with around 300.</li>
            <li style={pStyle}><b>More flying time:</b> about 16 hours a day per plane, against an industry average of 11, made possible by changing departure times daily.</li>
            <li style={pStyle}><b>Clear pricing:</b> taxes included in the headline fare, every extra on a fixed price list.</li>
            <li style={pStyle}><b>Cabin crew as retailers:</b> onboard sales per passenger exceeded three times those of Singapore Airlines.</li>
          </ul>
        </Section>

        <Section>
          <h2 style={h2Style}>Where the system was missing</h2>
          <p style={pStyle}>
            AirAsia X also shows what happens when one part of the system is weak.
          </p>
          <p style={pStyle}>
            In November 2010, the airline had sold 85% of its remaining seats for the year. It was still about US$15 million short of its revenue plan.
          </p>
          <p style={pStyle}>
            The reason lies in two numbers airlines track:
          </p>
          <ul style={listStyle}>
            <li style={pStyle}><b>Load factor:</b> how full the plane is.</li>
            <li style={pStyle}><b>Yield:</b> how much each seat earns.</li>
          </ul>
          <p style={pStyle}>
            The airline&apos;s habit was to cut prices whenever seats looked empty. On a single flight, that seems sensible. Across hundreds of flights, it quietly lowered every ticket&apos;s value. A simplified example shows the effect: 377 seats sold at $130 earn less than 300 seats sold at $200.
          </p>
          <Figure
            src="/blog/measure-the-lift/load-factor-vs-yield.webp"
            alt="Two aircraft compared: 300 seats at $200 per seat earn $60,000, while 377 seats at $130 per seat earn $49,010."
            caption="Full is not the same as profitable."
          />
          <p style={pStyle}>
            The fix was not a better tool or a louder promotion. The airline built a dedicated revenue management team, led by an experienced specialist, and began steering by value rather than volume. It remained profitable and met its target that year. Its cost system had always been strong. It lacked a revenue system to match.
          </p>
        </Section>

        <Section>
          <h2 style={h2Style}>What this means in the age of AI</h2>
          <p style={pStyle}>
            Today, many organisations are racing to automate every part of their operations with AI. That effort is reasonable, and often valuable. But these two cases point to a question that deserves to come first.
          </p>
          <p style={pStyle}>
            AI is an amplifier. It makes a process faster, cheaper and more scalable. That is excellent news for a business with a sound system, and a risk for one without. Automating a weak process doesn&apos;t fix it. It lets the weakness repeat faster and at greater scale.
          </p>
          <Figure
            src="/blog/measure-the-lift/ai-amplifier.webp"
            alt="AI as an amplifier: a strong system plus AI produces strength at scale, while a weak system plus AI produces weakness at scale."
          />
          <p style={pStyle}>
            Consider what AI could have done for each company:
          </p>
          <ul style={listStyle}>
            <li style={pStyle}>For Pang Dong Lai, it might have made the 700 manuals searchable, or predicted stock levels more precisely. It could not create the trust between staff and customers that makes those manuals worth following.</li>
            <li style={pStyle}>For AirAsia X, it could have priced seats more cleverly. But before 2010, an automated pricing engine running on the airline&apos;s habit of discounting to fill seats would have discounted more efficiently.</li>
          </ul>
          <p style={pStyle}>
            The tools are increasingly available to everyone. That&apos;s why they are unlikely to be a lasting advantage. What remains hard to copy is the system around them: the incentives, habits, standards, and decisions that determine what the tools actually do.
          </p>
        </Section>

        <Section>
          <h2 style={h2Style}>Three questions before automating anything</h2>
          <ol style={listStyle}>
            <li style={pStyle}><b>What is the system this tool will serve?</b> If it cannot be described clearly, the tool has nothing solid to amplify.</li>
            <li style={pStyle}><b>Which number does the system optimise for?</b> Activity, like seats filled, or value, like what each seat earns?</li>
            <li style={pStyle}><b>What would a competitor fail to copy?</b> If the honest answer is &ldquo;our software,&rdquo; the advantage may be shorter-lived than it appears.</li>
          </ol>
          <p style={pStyle}>
            A supermarket that measured lifts and an airline that handed out umbrellas both outperformed better-equipped rivals. Their tools were simple. Their systems were not.
          </p>
          <p style={pStyle}>
            AI can supply the first. The second is still ours to build.
          </p>
          <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "1rem 0 0" }} />
          <p style={{ ...pStyle, fontSize: "0.9375rem", fontStyle: "italic", color: "var(--fg-muted)" }}>
            I studied both cases as part of my MSc at UCD Smurfit. The AirAsia X case describes the airline as of 2011, and the Pang Dong Lai figures are drawn from company sources and press reports cited in the case, so they reflect each business at a specific moment rather than today.
          </p>
        </Section>

        <section style={{ padding: "clamp(2rem, 5vh, 3.5rem) 0 0" }}>
          <div style={articleWrap}>
            <GroundTruthCta />
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

        .article-wide {
          margin-inline: calc(50% - min(550px, 50vw - 1.5rem));
        }

        .sps-plot {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          padding: clamp(1.25rem, 3vw, 1.75rem);
          border: 1px solid var(--line);
          border-radius: 0.75rem;
        }
        .sps-title { margin-bottom: 0.25rem; }
        .sps-row {
          display: grid;
          grid-template-columns: 10rem minmax(0, 1fr);
          align-items: center;
          gap: 1rem;
        }
        .sps-name { font-size: 0.9375rem; }
        .sps-track {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          min-width: 0;
          padding-right: 5.5rem;
        }
        .sps-bar {
          display: block;
          height: 1.25rem;
          border-radius: 0 4px 4px 0;
          flex: 0 0 auto;
        }
        .sps-value {
          font-size: 0.875rem;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }
        @media (max-width: 520px) {
          .sps-row {
            grid-template-columns: 1fr;
            gap: 0.35rem;
          }
        }
      `}</style>
    </>
  );
}

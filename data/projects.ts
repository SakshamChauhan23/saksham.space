export const projects = [
    {
        id: "crm",
        tag: "NavGurukul",
        title: "Internal CRM System",
        subtitle: "Managing 100,000+ Learners at Scale",
        hook: "When Operations Couldn't Scale",
        summary: {
            problem: "Nonprofit managing 100,000+ learners across lifecycle stages. Manual processes breaking at scale.",
            solution: "Built internal CRM using Lovable, Cursor, and Supabase handling complete learner journey.",
            impact: "System now managing 1 lac+ learners. 96% reduction in ops overhead. 3x organizational growth enabled."
        },
        details: {
            context: "Organization serving 100,000+ learners but operations team manually tracking every journey stage. Spreadsheets breaking, consistency lost, 60+ hrs/week on admin.",
            opportunity: "Build purpose-built CRM that understands education lifecycle, not adapt generic business CRM. Foundation for scaling to 500k students.",
            bet: "Use no-code/low-code stack (Lovable, Cursor, Supabase) to build and iterate fast. Custom-built for education workflows, automation-first architecture.",
            decisions: [
                "Built custom workflows matching actual process (Application → Placement)",
                "Automated data entry before complex features (saved 20+ hrs/week)",
                "Prioritized operations dashboard for real-time visibility"
            ],
            stack: "Lovable, Cursor, Supabase",
            metrics: "North Star: Active learners managed per operations team member."
        },
        impactDetails: {
            results: [
                "Managing 100,000+ learners through complete lifecycle",
                "96% reduction in operational overhead (60 hrs to 2 hrs weekly)",
                "Enabled 3x organizational growth without hiring more ops staff",
                "System became foundation for geographic expansion"
            ],
            pmf: "Operations team requesting workflow improvements and new features, not reporting bugs. 90%+ daily usage. System became mission-critical infrastructure.",
            learnings: "Building internal tools requires a different mindset. Operations teams need reliability and time savings, not innovative features. If users can't work without it, you've succeeded."
        }
    },
    {
        id: "adaptive",
        tag: "NavGurukul",
        title: "Adaptive Assessment Engine",
        subtitle: "AI-Powered Personalized Education",
        hook: "When Education Couldn't Scale",
        summary: {
            problem: "Nonprofit needed personalized learning for 2,300+ students without hiring proportional teaching staff.",
            solution: "Built AI-powered adaptive assessment engine that personalizes difficulty in real-time.",
            impact: "2,300+ active learners. 75% engagement rate. Enabled personalized education at scale."
        },
        details: {
            context: "One-size-fits-all assessments meant advanced students were bored and struggling students overwhelmed. Teachers couldn't personalize for 2,300+ students.",
            opportunity: "AI could personalize difficulty based on performance. Market gap: adaptive systems cost $50K+ or required PhD-level implementation.",
            bet: "Build adaptive engine adjusting difficulty in real-time using AI to analyze performance patterns. Seamless integration with existing platform.",
            decisions: [
                "Prioritized adaptive assessment over content library",
                "Built three-tier difficulty system with smooth transitions",
                "Teacher dashboard showed mastery, not just scores"
            ],
            stack: "Python/FastAPI, LangChain, PostgreSQL, Next.js",
            metrics: "North Star: Assessment completion rate with consistent engagement."
        },
        impactDetails: {
            results: [
                "2,300+ students actively using adaptive assessments",
                "75% completion rate (vs 40% industry average)",
                "Teachers reporting better understanding of student needs",
                "Students showing measurable improvement in topic mastery"
            ],
            pmf: "Students voluntarily retaking assessments to improve scores. Teachers requesting expanded subject coverage. System became core learning tool.",
            learnings: "AI should enhance human teaching, not replace it. Adaptive systems need careful tuning—too easy and they don't learn, too hard and they give up."
        }
    },
    {
        id: "discovery",
        tag: "Side-Project",
        title: "B2B Product Discovery",
        subtitle: "Validating Employee Advocacy SaaS",
        hook: "When Employee Voices Were Left on the Table",
        summary: {
            problem: "How to validate B2B SaaS idea before building? Market research showed opportunity but needed real validation.",
            solution: "Ran structured product discovery: customer interviews, smoke tests, positioning strategy.",
            impact: "Validated market demand. Defined MVP scope. Achieved early customer commitments pre-launch."
        },
        details: {
            context: "B2B companies wanted employees posting on LinkedIn but had no systematic way. Needed to validate: Is this a real problem? Will they pay?",
            opportunity: "Companies leaving massive organic reach on table. They'll pay for platform that makes advocacy effortless and measurable.",
            bet: "Run structured discovery over 8 weeks to validate/invalidate before writing code. Better to kill bad ideas cheap.",
            decisions: [
                "AI content suggestions, not content library (authenticity)",
                "Positioned as 'employee tool' + marketing value",
                "ROI measurement built-in from day one",
                "Focused on Tech/SaaS vertical first"
            ],
            stack: "Bubble (Prototype), LinkedIn Ads (Smoke Test)",
            metrics: "Success: Validated Demand & Commitments."
        },
        impactDetails: {
            results: [
                "25 customer interviews confirmed problem exists",
                "Smoke test showed 4% demo request conversion",
                "Prototype achieved 60% daily usage",
                "3 early customers committed to pilot program pre-launch"
            ],
            pmf: "Clear MVP scope defined. Validated pricing range (₹15K-25K). Go-to-market strategy aligned with validated vertical.",
            learnings: "Best product discovery isn't about validating your idea—it's about understanding the problem until the solution becomes obvious. Positioning IS product."
        }
    },
    {
        id: "recruitment",
        tag: "Freelance",
        title: "Recruitment Automation",
        subtitle: "Digital Transformation for Agencies",
        hook: "When Recruiters Drowned in Data Entry",
        summary: {
            problem: "Technical recruitment agency spending 60+ hours/week on manual screening and data entry, losing deals.",
            solution: "Built end-to-end workflow automation: candidate screening, data pipelines, automated reporting.",
            impact: "65% time reduction. 60% automation rate. Recruiters refocused on relationships."
        },
        details: {
            context: "Recruiters spending majority of time on low-value work (data entry, copying files). Losing deals because competitors responded faster.",
            opportunity: "HRTech automation booming but generic CRMs didn't fit agency workflows. Needed purpose-built tools.",
            bet: "Automate entire 'boring' funnel so recruiters focus purely on relationships. Eliminate data entry first, then automate screening.",
            decisions: [
                "Built recruitment-specific, not generic CRM",
                "Automated boring tasks (resume parsing) first for quick wins",
                "Measured by time saved, not features shipped"
            ],
            stack: "Retool, n8n, Airtable, OpenAI API",
            metrics: "North Star: Hours spent on strategic vs admin tasks."
        },
        impactDetails: {
            results: [
                "Automated 60%+ of previously manual processes",
                "Reduced operational time by 65% (60h → 20h weekly)",
                "Faster response time to new jobs (48h → 6h)",
                "Agency took on 40% more clients without hiring"
            ],
            pmf: "90%+ daily usage. System became mission-critical users complained when down for 10 mins.",
            learnings: "Internal tools live or die on adoption. Change management is product management. Automation should eliminate toil, not judgment."
        }
    }
];

export type Project = typeof projects[0];

"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";
import { FadeIn } from "@/components/AnimatedText";

const experience = [
    {
        role: "Product Manager",
        period: "Apr 2023 – Present",
        company: "Navgurukul",
        location: "Gurugram, India",
        description: "Leading product for internal admissions and learning systems.",
        impact: [
            "Owned end-to-end development of internal admissions and learning systems, working hands-on with engineers, ops teams, and data workflows to improve efficiency and user experience.",
            "Built a custom CRM using Lovable + Cursor + Supabase, translating ambiguous operational needs into structured product logic; reduced processing time by 65% (4 days to 33 hours).",
            "Automated ~60% of manual workflows by designing rule-based and AI-assisted processes, improving turnaround times and reducing operational load by 40+ hours/month.",
            "Led product execution across 15 engineers & 7 ops members, driving planning, sprint alignment, and quality checks; achieved 92% sprint velocity with predictable delivery cycles.",
            "Designed data dashboards for admissions funnels, engagement flows, and SLA performance using analytics tools; enabled faster decision cycles and proactive problem detection.",
            "Improved learner engagement by 25% through iterative UX improvements, user research, and experimental rollouts to 1,000+ active users.",
            "Drove discovery sprints for a SaaS product pivot, conducting competitive analysis, defining problem statements, and shaping early product direction with tech + design counterparts.",
            "Tested edge cases, validated flows, and collaborated closely with engineering, ensuring journeys were frictionless, measurable, and technically feasible."
        ],
        stack: ["Product Strategy", "Internal Tools", "Automation", "Data Analytics"]
    },
    {
        role: "Associate Product Manager",
        period: "Jun 2023 – Present",
        company: "OneDigiStore",
        location: "Hyderabad, India",
        description: "Leading the evolution of SMGenie, a workflow platform for design & marketing agencies.",
        impact: [
            "Led the evolution of SMGenie, a workflow platform for design & marketing agencies, translating messy operational pain points into structured, scalable product systems.",
            "Cut project routing time by 83% (2 hours to ~20 minutes) by designing a rule-based allocation engine aligned with capacity, SLAs, and operational constraints.",
            "Enabled ~60% automation across asset management and brief-to-delivery workflows by introducing internal tools, templates, and streamlined processes that reduced manual follow-ups.",
            "Scaled the platform to 50+ SMB clients, shaping workflow rules, approval paths, and turnaround expectations that consistently drove ~90% on-time delivery.",
            "Built performance dashboards (velocity, utilisation, client satisfaction, bottlenecks), helping teams spot inefficiencies early and reduce delivery lead time by ~25%."
        ],
        stack: ["Workflow Automation", "B2B SaaS", "Operational Efficiency"]
    },
    {
        role: "Product Associate",
        period: "Aug 2022 – Jun 2023",
        company: "Newton School",
        location: "Bangalore, India",
        description: "Focused on learner behavior analysis and onboarding flow optimization.",
        impact: [
            "Analyzed learner behavior across 500+ students to diagnose funnel drop-offs and redesigned onboarding + learning flows, resulting in a 30% increase in engagement within 6 months.",
            "Collaborated with engineering and ops to refine product touchpoints, reduce friction across the student lifecycle, and improve NPS by strengthening motivation loops and feedback experiences."
        ],
        stack: ["User Research", "Funnel Optimization", "EdTech"]
    },
    {
        role: "Founder",
        period: "Oct 2019 – Nov 2022",
        company: "Articuleren",
        location: "New Delhi, India",
        description: "Built and scaled an experiential learning platform.",
        impact: [
            "Built and scaled an experiential learning platform across 60+ institutions, coordinating end-to-end program delivery, instructor onboarding, and operational workflows.",
            "Managed institutional partnerships and stakeholder communication, enabling repeat engagement and impacting 100,000+ learners through structured, high-engagement programs."
        ],
        stack: ["Entrepreneurship", "Operations", "Partnerships"]
    }
];

const education = [
    {
        degree: "Product Management Cohort",
        school: "Insurjo - The Product Folks",
        year: "Aug 2022 - Apr 2023",
        status: "Completed"
    },
    {
        degree: "Bachelor of Technology in Electronics and Communication",
        school: "Ajay Kumar Garg Engineering College",
        year: "Aug 2019 - May 2023",
        status: "Completed"
    }
];

const skills = [
    {
        category: "Technical Skills",
        items: [
            "Data Analysis using Python",
            "Product Roadmap & Feature Prioritization",
            "User Experience (UI/UX)",
            "API Design",
            "Go-To-Market Strategy (GTM)",
            "User Story/PRD writing",
            "A/B Testing",
            "Product Strategy",
            "Technical Documentation",
            "System Design / Architecture",
            "SQL & Database Design",
            "Product Marketing Analytics"
        ]
    },
    {
        category: "Tools",
        items: [
            "Jira",
            "Tableau",
            "Confluence",
            "Miro",
            "Figma",
            "MixPanel/Google Analytics",
            "MongoDB",
            "Model Context Protocol"
        ]
    }
];

export default function BackgroundContent() {
    return (
        <>
            {/* Hero */}
            <Section className="pt-16 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-muted text-accent">
                        Resume
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        My <span className="gradient-text">Background</span>
                    </h1>
                    <p className="text-lg text-muted max-w-2xl">
                        Product professional with 2.5+ years of experience improving complex user journeys, building internal tools, and driving cross-functional execution across engineering, design, and operations.
                    </p>

                    <div className="mt-8">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Full Resume
                        </a>
                    </div>
                </motion.div>
            </Section>

            {/* Work Experience */}
            <Section>
                <SectionHeader
                    eyebrow="Experience"
                    title="Work History"
                    description="Key roles where I've delivered impact."
                    centered={false}
                />

                <div className="relative mt-16 space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                    {experience.map((exp, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="relative md:pl-24">
                                {/* Dot */}
                                <div className="absolute left-6 top-6 w-4 h-4 bg-background border-4 border-accent rounded-full -translate-x-1/2 hidden md:block" />

                                <div className="bg-card border border-border rounded-3xl p-8 hover:border-accent/30 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                                            <div className="text-lg text-accent font-medium">{exp.company}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="px-4 py-1.5 rounded-full bg-accent/5 text-accent text-sm font-bold inline-block mb-1">
                                                {exp.period}
                                            </div>
                                            <div className="text-xs text-muted font-medium">{exp.location}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {exp.impact.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                                                <span className="text-accent mt-1.5 flex-shrink-0">●</span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-card border border-border text-muted">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Education & Skills */}
            <Section className="bg-card/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-card border border-border rounded-2xl p-6">
                                    <h4 className="text-lg font-bold text-foreground mb-1">{edu.school}</h4>
                                    <p className="text-muted text-sm mb-4">{edu.degree}</p>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-accent font-medium">{edu.year}</span>
                                        <span className="px-2 py-1 bg-accent/10 rounded-full text-accent">{edu.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </span>
                            Skills & Tools
                        </h3>
                        <div className="space-y-8">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-4 border-b border-border pb-2">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span key={skill} className="px-3 py-1.5 text-sm font-medium bg-card border border-border rounded-lg text-foreground hover:border-accent/50 transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";
import Image from "next/image";
import { FadeIn } from "@/components/AnimatedText";

const timeline = [
    {
        label: "College Years",
        period: "2019-2023",
        title: "Built Business in College While Studying Engineering",
        subtitle: "The Entrepreneurial Foundation",
        content: `Started B.Tech in Electronics & Communication at AKGEC in August 2019. Spent first year doing what most engineering students do: attending classes, complaining about curriculum, wondering what comes next.

In 2019, I stopped wondering and started building.

I built Articuleren in Dec 2019 with one clear mission: bring Model UN and debate culture to tier 2/3 colleges that never got these opportunities. Scaled it to serve 100,000+ students across 25+ colleges. Built a team of 15, generated 25+ lacs revenue.

This wasn't a side project. It was a real business run alongside my degree. I attended classes in the morning and ran the business in the evening.`,
        learnings: "Building is easier than sustaining. Revenue is validation. Team quality matters more than team size."
    },
    {
        label: "First Internship",
        period: "2022",
        title: "Newton School - Learning Product at Scale",
        subtitle: "The First Real Job",
        content: `Final year of college. Wanted to understand how products worked at scale, not just events and operations. Landed an internship at Newton School.

Joined as an intern working on growth and operations. Saw how EdTech products worked at real scale. Thousands of students, complex learning pathways, and operational challenges that couldn't be solved with hustle alone.

My performance led to a PPO (Pre-Placement Offer).`,
        learnings: "How real product companies operate. Processes, frameworks, and metrics matter. I realized I loved being close to the product—building it, not just growing it."
    },
    {
        label: "First Product Role",
        period: "2023",
        title: "OneDigiStore - Finally Becoming a Product Manager",
        subtitle: "The Product Breakthrough",
        content: `Graduated in 2023. Had a job offer from Newton School but wanted to do Product Management, not operations. Taken a bet and joined OneDigiStore as my first real Product Manager.

High ownership from day one. Sink or swim. I chose to swim.

Led product development across e-commerce and digital solutions. But reality hit hard: I wasn't technical. I couldn't estimate effort. I underestimated complexity.

So I stopped faking it. I sat with engineers, learned basics (databases, APIs, architecture), and became technical enough to have real conversations about trade-offs.`,
        learnings: "Product management isn't about having all answers. It's about asking the right questions and making informed trade-offs."
    },
    {
        label: "Freelance Period",
        period: "Early 2025",
        title: "Testing If I Could Pull It Off Solo",
        subtitle: "The Solo Experiment",
        content: `Left OneDigiStore early 2025. Needed to test myself: Could I build products solo?

Started taking freelance projects. Helped startups with product strategy, built MVPs for founders, and automated workflows for agencies.

The Discovery: Modern tools changed everything. AI (Claude, GPT-4), no-code (Bubble, Retool), and automation (n8n) meant I could build and ship products that would normally require a full dev team.`,
        learnings: "Speed is a competitive advantage. Validation before building saves months. I enjoyed building more than managing."
    },
    {
        label: "Now",
        period: "Mid 2025 - Present",
        title: "NavGurukul - Freedom to Build and Experiment",
        subtitle: "The Builder Phase",
        content: `Currently working at NavGurukul, a non-profit building accessible tech education. Chose it for mission, ownership, and freedom.

Managing products serving thousands of learners. Built an internal CRM handling 100,000+ students. Shipped AI-powered adaptive assessments. Automated operations saving 60+ hours weekly.

I use n8n, Lovable, Cursor, and Supabase to ship fast. I don't wait for resources; I build, validate, and scale.

Continuously learning and deepening my skills in AI-driven product building—exploring how modern AI tools can accelerate the entire product lifecycle from ideation to deployment.`,
        learnings: "Best products come from deeply understanding problems, not building cool features. Small teams with modern tools can punch way above their weight. AI is not just a feature—it's a fundamental shift in how we build.",
    },

];

export default function AboutContent() {
    return (
        <>
            {/* Hero Section */}
            <Section className="min-h-[80vh] flex items-center justify-center pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-muted text-accent">
                                About Me
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                                Hey, I&apos;m <span className="gradient-text">Saksham</span>
                            </h1>
                            <div className="space-y-6 text-lg text-muted leading-relaxed">
                                <p>
                                    I&apos;m a product builder who turns ideas into working software. Not decks. Not wireframes. Real products that real people use.
                                </p>
                                <p>
                                    My superpower? Speed without sacrificing quality. I combine product thinking, technical fluency, and modern AI/no-code tools to ship MVPs in weeks, not months.
                                </p>
                                <p>
                                    I&apos;ve built CRMs managing 100,000+ learners, automated workflows saving 60+ hours weekly, and products serving thousands of users. Started by building a 25 lacs+ revenue business with a team of 15 while in college. I want to work with organizations to build solutions that solve real-world problems.
                                </p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a
                                    href="https://www.linkedin.com/in/sakshamchauhan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-accent/5 hover:border-accent/50 transition-colors"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-72 h-72 md:w-96 md:h-96"
                        >
                            <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 blur-2xl" />
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                                <Image
                                    src="/profile.png"
                                    alt="Saksham Chauhan - Product Manager and Builder specializing in 0-to-1 products"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Timeline Section */}
            <Section className="bg-card/30">
                <SectionHeader
                    eyebrow="My Journey"
                    title="How I Got Here"
                    description="The short version of a winding path. From building a business in college to becoming a product manager who ships."
                />

                <div className="max-w-6xl mx-auto mt-20 relative">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />

                    <div className="space-y-16">
                        {timeline.map((item, index) => (
                            <FadeIn key={item.label} delay={index * 0.1}>
                                <div className={`flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    {/* Content Side */}
                                    <div className="md:w-1/2 md:px-12 pl-16">
                                        <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-all hover:shadow-lg relative">
                                            {/* Mobile Dot */}
                                            <div className="absolute left-[-41px] top-8 w-5 h-5 rounded-full bg-background border-4 border-accent md:hidden z-10" />

                                            {/* Label & Period */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                                                    {item.label}
                                                </span>
                                                <span className="text-xs font-medium text-muted bg-accent/5 px-2 py-1 rounded">
                                                    {item.period}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-1">
                                                {item.title}
                                            </h3>
                                            <div className="text-sm font-medium text-muted mb-6">
                                                {item.subtitle}
                                            </div>

                                            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                                                {item.content}
                                            </div>

                                            {item.learnings && (
                                                <div className="mt-6 pt-4 border-t border-border/50">
                                                    <p className="text-xs font-bold text-muted uppercase mb-2">Key Learnings</p>
                                                    <p className="text-sm italic text-muted-foreground border-l-2 border-accent/20 pl-3">
                                                        &quot;{item.learnings}&quot;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Timeline Dot (Desktop) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-8 hidden md:flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-full bg-background border-4 border-accent relative z-10" />
                                    </div>

                                    {/* Empty Side (Desktop) */}
                                    <div className="md:w-1/2" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* The Pattern (Conclusion) */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8">The Pattern I See Now</h2>
                        <div className="bg-card border border-border rounded-3xl p-10 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

                            <p className="text-lg md:text-xl text-foreground font-medium mb-8 leading-relaxed">
                                &quot;I&apos;m a builder who happens to do product management. Not a PM who occasionally ships. There&apos;s a difference.&quot;
                            </p>

                            <p className="text-muted leading-relaxed mb-6">
                                Articuleren taught me to build. Newton School taught me scale. OneDigiStore taught me management. Freelancing taught me modern tools.
                            </p>

                            <p className="text-muted leading-relaxed">
                                I don&apos;t just write specs. I prototype, validate, build, and ship. That&apos;s what gets me up in the morning.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}

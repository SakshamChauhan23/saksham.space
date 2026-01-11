"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";
import { FadeIn } from "@/components/AnimatedText";
import { projects } from "@/data/projects";

const deliverables = [
    "Product Strategy & Scoping",
    "UX Flows & Wireframes",
    "AI / No-code / Lightweight Backend",
    "Production Deployment",
    "Handoff Documentation",
    "Analytics & Roadmap",
];

const idealFor = [
    {
        title: "Pre-seed Founders",
        description: "You have an idea but need a working product to raise funding or validate with real users.",
        benefits: [
            "Get an MVP in weeks, not months—show investors something real",
            "Validate demand before committing to a full engineering team",
            "Use the working product as your pitch deck"
        ]
    },
    {
        title: "First-time Founders",
        description: "You know what to build but don't have a technical co-founder or can't afford a full dev team yet.",
        benefits: [
            "Skip months of hiring and onboarding—start shipping now",
            "Learn what works through real user feedback, not assumptions",
            "Get a technical partner who understands product, not just code"
        ]
    },
    {
        title: "Teams Validating PMF",
        description: "You need to test new features or ideas quickly without pulling your core team away from the main product.",
        benefits: [
            "Ship experiments fast without disrupting your roadmap",
            "Test assumptions with real prototypes, not just mockups",
            "Validate before committing engineering resources"
        ]
    },
];

const faqs = [
    {
        question: "What technologies do you use?",
        answer: "I choose the right tool for each project. Typically: Next.js or React for web apps, Supabase for backend, and AI tools like Claude/GPT for intelligent features. For rapid prototyping, I use no-code tools like Lovable, Framer, or Webflow.",
    },
    {
        question: "What if I need changes after launch?",
        answer: "The handoff includes full documentation. Small tweaks are included in the sprint. For ongoing work, we can discuss a maintenance arrangement or I can recommend developers who can take over.",
    },
    {
        question: "How much does it cost?",
        answer: "Pricing depends on scope and complexity. Let's talk about your specific needs—I'll give you an honest estimate upfront.",
    },
    {
        question: "What do you need from me?",
        answer: "Your time for weekly syncs (30-60 min), quick feedback on demos, and clear communication about priorities. The more engaged you are, the better the outcome.",
    },
];

export default function ServicesContent() {
    const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <>
            {/* Hero */}
            <Section className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm text-muted uppercase tracking-widest mb-6 block">
                            Build Products
                        </span>
                        <h1 className="font-bold text-foreground mb-8 leading-tight" style={{ fontSize: "var(--fluid-h1)" }}>
                            0 to 1 Product Build
                        </h1>
                        <p className="text-muted max-w-3xl mb-12 leading-relaxed" style={{ fontSize: "var(--fluid-p)" }}>
                            Your idea, shipped in <span className="text-foreground font-semibold">30–45 days</span>.
                            Not 6 months. Not "it depends."
                        </p>
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external>
                            Book a Discovery Call →
                        </Button>
                    </motion.div>
                </div>
            </Section>

            {/* Value Props - Minimal */}
            <Section className="border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { value: "30–45 Days", label: "to MVP" },
                            { value: "Full Stack", label: "Ownership" },
                            { value: "Weekly Demos", label: "& Feedback" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-left"
                            >
                                <div className="font-bold text-foreground mb-2" style={{ fontSize: "var(--fluid-h2)" }}>{stat.value}</div>
                                <div className="text-muted">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* What's Included - List Style */}
            <Section className="border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm text-muted uppercase tracking-widest mb-4 block">The Sprint</span>
                        <h2 className="font-bold text-foreground mb-12" style={{ fontSize: "var(--fluid-h2)" }}>What's Included</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {deliverables.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-4 group"
                            >
                                <span className="text-accent mt-1">→</span>
                                <span className="text-lg text-foreground group-hover:text-accent transition-colors">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Case Studies */}
            <Section>
                <SectionHeader
                    eyebrow="Case Studies"
                    title="Real Products, Real Impact"
                    description="Below are some of my past projects that showcase how I approach product development from discovery to delivery."
                />

                <div className="space-y-8 mt-16 max-w-5xl mx-auto">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 ${expandedCaseStudy === project.id
                                ? "border-accent/50 shadow-2xl scale-[1.01]"
                                : "hover:border-accent/30 hover:shadow-lg"
                                }`}
                        >
                            {/* Card Header (Always Visible) */}
                            <div
                                className="p-8 md:p-10 cursor-pointer group"
                                onClick={() => setExpandedCaseStudy(expandedCaseStudy === project.id ? null : project.id)}
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-accent/10 text-accent border border-accent/20">
                                                {project.tag}
                                            </span>
                                            <span className="text-xs font-medium text-muted">{project.hook}</span>
                                        </div>
                                        <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors" style={{ fontSize: "var(--fluid-h3)" }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-muted font-medium">{project.subtitle}</p>
                                    </div>

                                    <div className="shrink-0">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className={`pointer-events-none ${expandedCaseStudy === project.id ? "bg-accent text-foreground border-accent" : ""}`}
                                        >
                                            {expandedCaseStudy === project.id ? "View Less" : "View Case Study"}
                                        </Button>
                                    </div>
                                </div>

                                {/* High Level Summary Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-border">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> The Problem
                                        </h4>
                                        <p className="text-sm text-foreground/80 leading-relaxed">{project.summary.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> The Solution
                                        </h4>
                                        <p className="text-sm text-foreground/80 leading-relaxed">{project.summary.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider mb-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> The Impact
                                        </h4>
                                        <p className="text-sm font-medium text-accent leading-relaxed">{project.summary.impact}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Details */}
                            <AnimatePresence>
                                {expandedCaseStudy === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-accent/5"
                                    >
                                        <div className="p-8 md:p-10 border-t border-accent/10">
                                            {/* Row 1: Strategy & Execution */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                                                {/* Left Col: Strategy */}
                                                <div className="bg-background/80 p-8 rounded-2xl border border-border/50 h-full">
                                                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-accent/20 flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                        Strategic Discovery
                                                    </h4>
                                                    <div className="space-y-6">
                                                        <div>
                                                            <span className="text-xs font-bold text-muted block mb-1">Context</span>
                                                            <p className="text-sm text-foreground/90 leading-relaxed">{project.details.context}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-muted block mb-1">The Opportunity</span>
                                                            <p className="text-sm text-foreground/90 leading-relaxed">{project.details.opportunity}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-accent block mb-1">The Strategic Bet</span>
                                                            <p className="text-sm text-foreground font-medium leading-relaxed">{project.details.bet}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Col: Execution */}
                                                <div className="bg-background/80 p-8 rounded-2xl border border-border/50 h-full">
                                                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-accent/20 flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                        Execution & Delivery
                                                    </h4>
                                                    <div className="space-y-6">
                                                        <div>
                                                            <span className="text-xs font-bold text-muted block mb-2">Key Decisions</span>
                                                            <ul className="space-y-2">
                                                                {project.details.decisions.map((decision, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
                                                                        <span className="text-accent mt-1.5 text-[10px]">●</span>
                                                                        {decision}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="pt-4 border-t border-border/50 mt-auto">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <span className="text-xs font-bold text-muted block mb-1">Tech Stack</span>
                                                                    <p className="text-sm text-foreground/90">{project.details.stack}</p>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs font-bold text-muted block mb-1">Primary Metric</span>
                                                                    <p className="text-sm text-foreground/90">{project.details.metrics}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Row 2: Impact & Learnings (Full Width) */}
                                            <div className="bg-background/80 p-8 rounded-2xl border border-border/50">
                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-accent/20 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                    Impact & Learnings
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                    <div>
                                                        <span className="text-xs font-bold text-muted block mb-3">Business Results</span>
                                                        <ul className="space-y-2">
                                                            {project.impactDetails.results.map((res, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
                                                                    <span className="text-green-500 mt-1.5 text-[10px]">●</span>
                                                                    {res}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-muted block mb-3">Product-Market Fit Signal</span>
                                                        <p className="text-sm text-foreground/90 leading-relaxed border-l-2 border-accent/30 pl-4 italic">
                                                            "{project.impactDetails.pmf}"
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-muted block mb-3">What I Learned</span>
                                                        <p className="text-sm text-foreground/90 leading-relaxed">
                                                            {project.impactDetails.learnings}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Who This Works For - Creative Design */}
            <Section className="border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-sm text-muted uppercase tracking-widest mb-4 block">Ideal For</span>
                        <h2 className="font-bold text-foreground" style={{ fontSize: "var(--fluid-h2)" }}>Who This Works For</h2>
                    </motion.div>

                    <div className="space-y-20">
                        {idealFor.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                            >
                                {/* Large Number */}
                                <div className="md:col-span-2">
                                    <span className="text-6xl md:text-7xl font-bold text-accent/20">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-10 space-y-6">
                                    <div>
                                        <h3 className="font-bold text-foreground mb-3" style={{ fontSize: "var(--fluid-h3)" }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-muted/90 max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                        {item.benefits.map((benefit, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent/5 transition-colors group"
                                            >
                                                <span className="text-accent text-sm font-bold mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                                                    →
                                                </span>
                                                <span className="text-sm text-foreground/90 leading-relaxed">
                                                    {benefit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ - Minimal */}
            <Section className="border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm text-muted uppercase tracking-widest mb-4 block">FAQ</span>
                        <h2 className="font-bold text-foreground mb-12" style={{ fontSize: "var(--fluid-h2)" }}>Common Questions</h2>
                    </motion.div>

                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-border pb-8 last:border-b-0"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full text-left group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                                            {faq.question}
                                        </h3>
                                        <motion.span
                                            className="text-muted shrink-0"
                                            animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            ↓
                                        </motion.span>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {expandedFaq === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-muted leading-relaxed mt-4">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA - Clean */}
            <Section className="border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-bold text-foreground mb-6" style={{ fontSize: "var(--fluid-h1)" }}>
                            Ready to Build?
                        </h2>
                        <p className="text-muted mb-12 leading-relaxed" style={{ fontSize: "var(--fluid-p)" }}>
                            Let's talk about your idea. No commitment, no sales pitch—just an honest conversation about whether this is the right fit.
                        </p>
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external>
                            Book a Discovery Call →
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}

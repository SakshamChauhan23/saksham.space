"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";
import SelectedWork from "@/components/sections/SelectedWork";
import ProcessSteps from "@/components/sections/ProcessSteps";

/* ──────────────────────────── Data ──────────────────────────── */

const stats = [
    { value: "3+", label: "Years Diagnosing Bottlenecks" },
    { value: "20+", label: "Weekly Hours Recovered" },
    { value: "7+", label: "Industries Analyzed" },
    { value: "4+", label: "Products Shipped" },
    { value: "96%", label: "Ops Reduction" },
];

const toolLogos = [
    { src: "/logo/2.svg", alt: "Tool logo" },
    { src: "/logo/3.svg", alt: "Tool logo" },
    { src: "/logo/4.svg", alt: "Tool logo" },
    { src: "/logo/5.svg", alt: "Tool logo" },
    { src: "/logo/6.svg", alt: "Tool logo" },
    { src: "/logo/7.svg", alt: "Tool logo" },
    { src: "/logo/8.svg", alt: "Tool logo" },
    { src: "/logo/9.svg", alt: "Tool logo" },
    { src: "/logo/10.svg", alt: "Tool logo" },
    { src: "/logo/11.svg", alt: "Tool logo" },
    { src: "/logo/12.svg", alt: "Tool logo" },
];

const steps = [
    {
        number: "01",
        title: "Free Workflow Audit",
        description: "We map your current processes, identify the bottlenecks eating 20+ hours weekly, and quantify the cost of doing nothing.",
    },
    {
        number: "02",
        title: "Custom AI Automation",
        description: "We build, test, and deploy custom AI systems that eliminate those workflows — not generic software, but solutions built for your exact process.",
    },
    {
        number: "03",
        title: "Deploy & Maintain",
        description: "Go live in 2 weeks. We handle deployment, monitoring, and maintenance. You get time back, we ensure it stays that way.",
    },
];

const idealFor = [
    {
        number: "01",
        title: "Small-Medium Businesses",
        description: "You have workflows eating 20+ hours weekly but no in-house tech team to fix them. You need automation that works, not another tool to manage.",
        bullets: [
            "Eliminate manual data entry, reporting, and reconciliation",
            "Automate customer follow-ups and appointment reminders",
            "Get systems built for your process, not generic SaaS workarounds",
        ],
    },
    {
        number: "02",
        title: "Consultants & Freelancers",
        description: "You are the business. Every hour spent on admin is an hour not spent on billable work or client delivery.",
        bullets: [
            "Automate proposals, invoicing, and client onboarding",
            "Build systems that scale your capacity without hiring",
            "Reclaim 15+ hours weekly from repetitive operational tasks",
        ],
    },
    {
        number: "03",
        title: "SaaS Teams — Fractional Builders",
        description: "You need to ship features or validate ideas fast without pulling your core engineering team away from the main product.",
        bullets: [
            "Ship experiments fast without disrupting your roadmap",
            "Test assumptions with real prototypes, not just mockups",
            "Validate before committing engineering resources",
        ],
    },
    {
        number: "04",
        title: "Agencies",
        description: "Client work is scaling but internal operations are not. Manual processes are creating bottlenecks that limit how many projects you can take on.",
        bullets: [
            "Automate project intake, status updates, and reporting",
            "Standardize delivery workflows across client accounts",
            "Free your team to focus on creative and strategic work",
        ],
    },
];

const testimonials = [
    {
        quote: "Strategic business planning and attention to detail are exceptional. Plus, the responsiveness and level of cooperation make the process smooth and enjoyable. HIGHLY recommend!",
        name: "Sal Leone",
        title: "Founder, RainesDev",
    },
    {
        quote: "Assisted SocialRipple in our entire 0 to 1 journey, from discovery & marketing analysis to automating lead generation and internal operations. The entire process was smooth and most importantly impactful.",
        name: "Mayank Tivary",
        title: "Founder, SocialRipple",
    },
    {
        quote: "The company was facing difficulties in managing its sourcing, which was eventually delaying production. SocialRipple helped set up an internal system that enabled the entire inventory to be managed in just a few clicks.",
        name: "Avnish Yadav",
        title: "Director, MCS",
    },
    {
        quote: "Operations were heavily dependent on manual work, which consistently led to understaffing and capacity constraints. Several projects had to be declined due to an overloaded internal team. SocialRipple optimized internal operations by implementing the right systems and dashboards.",
        name: "Ayushi Tyagi",
        title: "Co-Founder, MyCareerity",
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
        answer: "Pricing depends on scope and complexity. Let\u2019s talk about your specific needs \u2014 I\u2019ll give you an honest estimate upfront.",
    },
    {
        question: "What do you need from me?",
        answer: "Your time for weekly syncs (30-60 min), quick feedback on demos, and clear communication about priorities. The more engaged you are, the better the outcome.",
    },
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function ServicesContent() {
    const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <>
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
                <div className="site-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <h1
                                className="font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
                                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                            >
                                Elevate Your Business Through <span className="gradient-text">Automation</span>
                            </h1>
                            <p
                                className="text-muted text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
                            >
                                Unlock your team's potential by eliminating manual work. We build custom AI systems that run your operations on autopilot.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button
                                    href="https://calendar.app.google/66rqVeepUyMsziNfA"
                                    size="lg"
                                    external
                                    className="rounded-full px-8"
                                >
                                    Book a Free Audit
                                </Button>
                                <Button
                                    href="#case-studies"
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5"
                                >
                                    View Case Studies
                                </Button>
                            </div>


                        </motion.div>

                        {/* Right: Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] hidden lg:block rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl"
                        >
                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>

                            {/* Floating Cards simulating automation */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-12 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-64 shadow-xl z-20"
                            >
                                <div className="h-2 w-20 bg-accent/50 rounded-full mb-4"></div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                    <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="h-8 w-8 rounded-full bg-purple-500/20"></div>
                                    <div className="h-6 w-16 bg-accent/20 rounded-full text-[10px] text-accent flex items-center justify-center font-medium">Active</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 30, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-12 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-72 shadow-xl z-10"
                            >
                                <div className="flex gap-4 mb-4">
                                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">⚡</div>
                                    <div>
                                        <div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                                        <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="h-32 bg-black/20 rounded-xl border border-white/5 p-4 space-y-2">
                                    <div className="flex justify-between text-[10px] text-muted-foreground">
                                        <span>Process</span>
                                        <span>Status</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-white/80">
                                        <span>Lead Enrichment</span>
                                        <span className="text-accent">Completed</span>
                                    </div>
                                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                        <div className="bg-accent w-full h-full"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Central Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Tools & Technologies - Infinite Scrolling Belt */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative z-10 w-full mt-20"
                >
                    <p className="text-sm text-muted-foreground text-center uppercase tracking-widest mb-8 font-medium">
                        TRUSTED BY INNOVATIVE TEAMS
                    </p>
                    <div className="relative overflow-hidden w-full">
                        {/* Fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                        {/* Scrolling track: duplicate logos for seamless loop */}
                        <div className="flex animate-marquee w-max">
                            {[...toolLogos, ...toolLogos].map((logo, index) => (
                                <div
                                    key={`${logo.src}-${index}`}
                                    className="flex-shrink-0 mx-6 md:mx-10 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={120}
                                        height={120}
                                        className="w-[84px] h-[84px] md:w-[120px] md:h-[120px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA after Tools */}
                    <div className="flex justify-center mt-16">
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external className="rounded-full">
                            Book a Free Audit
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════ PROBLEM STATS ═══════════════════ */}
            <section className="py-10 border-b border-border">
                <div className="site-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.slice(0, 4).map((stat, i) => (
                            <div key={i} className="text-center lg:text-left">
                                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA after Stats */}
                    <div className="flex justify-center mt-12">
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external className="rounded-full">
                            Book a Free Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ OUR SERVICES ═══════════════════ */}
            <Section>
                <div className="site-container">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <h2 className="font-bold text-foreground mb-4 leading-tight" style={{ fontSize: "var(--fluid-h2)" }}>
                                Who This Works For
                            </h2>
                            <p className="text-muted text-lg">
                                Unleashing Comprehensive Automation Services Tailored to Elevate Your Operations.
                            </p>
                        </div>
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" external className="hidden md:flex rounded-full">
                            Book a Free Audit
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {idealFor.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border transition-all duration-300 group ${index === 0
                                    ? "bg-foreground text-background border-foreground"
                                    : "bg-card border-border hover:border-accent/50 hover:shadow-lg"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${index === 0 ? "bg-white/20 text-white" : "bg-accent/10 text-accent"
                                        }`}>
                                        {item.title.charAt(0)}
                                    </div>
                                    <span className={`text-2xl ${index === 0 ? "text-white/20" : "text-muted/20"}`}>0{index + 1}</span>
                                </div>

                                <h3 className={`text-2xl font-bold mb-3 ${index === 0 ? "text-white" : "text-foreground"}`}>{item.title}</h3>
                                <p className={`mb-8 leading-relaxed ${index === 0 ? "text-white/70" : "text-muted"}`}>
                                    {item.description}
                                </p>

                                <div className="flex items-center gap-2 font-medium text-sm">
                                    <span className={index === 0 ? "text-white" : "text-foreground"}>Learn more</span>
                                    <span className={index === 0 ? "text-accent-muted" : "text-accent"}>→</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA after Who This Works For */}
                    <div className="flex justify-center mt-12">
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external className="rounded-full">
                            Book a Free Audit
                        </Button>
                    </div>
                </div>
            </Section>

            {/* ═══════════════════ SELECTED WORK ═══════════════════ */}
            <div id="case-studies">
                <SelectedWork />
            </div>

            {/* CTA after Case Studies */}
            <div className="w-full py-8">
                <div className="flex justify-center">
                    <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external className="rounded-full">
                        Book a Free Audit
                    </Button>
                </div>
            </div>

            {/* ═══════════════════ PROCESS STEPS ═══════════════════ */}
            <ProcessSteps />

            {/* CTA after Process Steps */}
            <div className="w-full py-8">
                <div className="flex justify-center">
                    <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external className="rounded-full">
                        Book a Free Audit
                    </Button>
                </div>
            </div>

            {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
            <div className="w-full py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs text-muted-foreground text-center uppercase tracking-widest mb-10">What Clients Say</p>
                    <div className="relative overflow-hidden w-full">
                        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                        <div className="flex animate-marquee w-max">
                            {[...testimonials, ...testimonials].map((t, index) => (
                                <div
                                    key={`${t.name}-${index}`}
                                    className="flex-shrink-0 mx-4 md:mx-6 w-[320px] md:w-[420px] p-6 md:p-8 bg-card border border-border rounded-2xl"
                                >
                                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 italic">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                                        <p className="text-xs text-muted">{t.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA after Testimonials */}
                <div className="flex justify-center mt-12">
                    <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external className="rounded-full">
                        Book a Free Audit
                    </Button>
                </div>
            </div>

            {/* ═══════════════════ FAQ ═══════════════════ */}
            <Section>
                <SectionHeader
                    eyebrow="FAQ"
                    title="Common Questions"
                />

                <div className="max-w-3xl mx-auto space-y-4 mt-12">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-border rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                className="w-full text-left p-5 flex items-center justify-between gap-4 group"
                            >
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {faq.question}
                                </h3>
                                <motion.span
                                    className="text-xl text-muted shrink-0 leading-none"
                                    animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {expandedFaq === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="px-5 pb-5 text-muted leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ═══════════════════ FINAL CTA ═══════════════════ */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-56 h-56 bg-purple-500/8 rounded-full blur-3xl" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                </div>

                <div className="site-container section relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="font-bold text-foreground mb-6" style={{ fontSize: "var(--fluid-h1)" }}>
                            Stop Losing Hours.{" "}
                            <span className="gradient-text">Start Automating.</span>
                        </h2>
                        <p className="text-muted mb-10 leading-relaxed" style={{ fontSize: "var(--fluid-p)" }}>
                            Free audit. No commitment, no sales pitch — just an honest look
                            at where your team is losing time and how to fix it.
                        </p>
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external>
                            Book a Discovery Call
                        </Button>
                        <p className="text-sm text-muted mt-4">Free 30-minute call. No commitment.</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

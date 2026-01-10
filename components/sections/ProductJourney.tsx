"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/Section";

const processes = [
    {
        id: "01",
        title: "Discovery & Definition",
        role: "What I Do",
        description: "I don't just 'take requirements'. I break down ambiguous problems into clear, solvable logical blocks. I talk to users, dig into data, and ensure we're solving a problem that matters.",
        artifacts: ["User Research", "Problem Statements", "Data Analysis", "Opportunity Sizing"]
    },
    {
        id: "02",
        title: "Strategy & Structure",
        role: "What I Do",
        description: "I define the 'Why' and the 'What'. I translate business goals into product strategy, create detailed roadmaps, and write comprehensive PRDs that give engineering clarity.",
        artifacts: ["PRDs & Specs", "Roadmaps", "System Architecture", "GTM Strategy"]
    },
    {
        id: "03",
        title: "Execution & Build",
        role: "What I Do",
        description: "I collaborate closely with engineering to ship high-quality features. I manage the backlog, unblock the team, handle edge cases, and ensure what we build matches the vision.",
        artifacts: ["Sprint Planning", "Backlog Management", "QA & Testing", "Edge Case Logic"]
    },
    {
        id: "04",
        title: "Growth & Optimization",
        role: "What I Do",
        description: "Shipping is just the start. I track performance, set up analytics loops, and iterate based on real user behavior to drive adoption and retention.",
        artifacts: ["A/B Testing", "Funnel Analytics", "User Feedback", "Iterative Improvements"]
    }
];

export default function ProductJourney() {
    return (
        <Section className="bg-card/30 overflow-hidden">
            <SectionHeader
                eyebrow="My Approach"
                title="From Idea to Scale"
                description="How I navigate the product lifecycle to build things that work."
            />

            <div className="mt-20 max-w-6xl mx-auto relative px-4 md:px-8">
                {/* Desktop Horizontal Line (Hidden on Mobile) */}
                <div className="hidden md:block absolute top-[24px] left-0 w-full h-0.5 bg-border/30 overflow-visible">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-accent"
                    />
                </div>

                {/* Mobile Vertical Line (Hidden on Desktop) */}
                <div className="md:hidden absolute top-0 bottom-0 left-[27px] w-0.5 bg-border/30">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-full bg-accent"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                    {processes.map((process, index) => (
                        <div key={process.id} className="relative pl-16 md:pl-0 md:pt-16 group">

                            {/* Timeline Node */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.4, type: "spring", stiffness: 200, damping: 20 }}
                                className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-[16px] w-4 h-4 rounded-full bg-card border-2 border-accent shadow-[0_0_0_4px_rgba(var(--background-rgb))] z-20"
                            >
                                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                            </motion.div>

                            {/* Card Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index * 0.4) + 0.2, duration: 0.5 }}
                                className="bg-card border border-border p-6 rounded-2xl hover:border-accent/40 transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Step Number & Title */}
                                <div className="mb-4">
                                    <span className="text-sm font-bold text-accent/50 mb-1 block">Step {process.id}</span>
                                    <h3 className="text-lg font-bold text-foreground leading-tight">
                                        {process.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="mb-6 space-y-2">
                                    <p className="text-xs font-bold text-muted uppercase tracking-wider">
                                        {process.role}
                                    </p>
                                    <p className="text-sm text-foreground/80 leading-relaxed">
                                        {process.description}
                                    </p>
                                </div>

                                {/* Artifacts */}
                                <div className="pt-4 border-t border-border/50">
                                    <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2">
                                        Deliverables
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {process.artifacts.map((artifact) => (
                                            <span
                                                key={artifact}
                                                className="px-2 py-0.5 text-[10px] font-medium rounded bg-accent/5 text-foreground/70 border border-transparent group-hover:border-accent/10 transition-colors"
                                            >
                                                {artifact}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

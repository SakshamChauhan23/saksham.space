"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";

const processes = [
    {
        id: "01",
        title: "Understanding What to Build",
        challenge: "Most product failures happen because teams build the wrong thing, not because they build it poorly.",
        process: "Start by understanding the actual problem—not the requested solution. Interview users, analyze usage data, and map current workarounds. The goal: find what's genuinely broken before proposing fixes.",
        outputs: ["Clear problem statements", "Validated user needs", "Opportunity sizing"]
    },
    {
        id: "02",
        title: "Deciding How to Build",
        challenge: "Limited resources mean every decision is a trade-off. Build custom or buy? Feature A or Feature B? Speed or perfection?",
        process: "Map business goals to product decisions. Evaluate build vs buy. Write specifications that provide engineering context (the \"why\"), not just tasks. Set clear success metrics before writing code.",
        outputs: ["PRDs with strategic context", "Prioritised roadmap", "Technical approach"]
    },
    {
        id: "03",
        title: "Shipping & Iterating",
        challenge: "Plans look perfect until they hit reality. Execution requires constant adjustment without losing sight of the goal.",
        process: "Work with engineering to maintain velocity while handling blockers, edge cases, and scope changes. Ship MVPs first, iterate based on real usage, not assumptions.",
        outputs: ["Deployed features", "Sprint execution", "Quality releases"]
    },
    {
        id: "04",
        title: "Measuring & Improving",
        challenge: "Launching isn't success; adoption and retention are. Most products ship and then stagnate.",
        process: "Track what matters (not vanity metrics). Set up feedback loops. Run experiments. Use data to decide what to improve, what to kill, and what to double down on.",
        outputs: ["Analytics dashboards", "A/B tests", "Iteration roadmap"]
    }
];

export default function ProductJourney() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <Section className="bg-card/30" id="approach">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Headline & Description (Sticky) */}
                    <div className="lg:sticky lg:top-32 self-start max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                                My Approach
                            </span>
                            <h2 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "var(--fluid-h2)" }}>
                                How I Work: <br />
                                <span className="text-muted-foreground">From Problem to Product</span>
                            </h2>
                            <p className="text-lg text-muted leading-relaxed mb-8">
                                A proven 4-step framework for building products that solve real problems. I don't just execute tasks; I navigate the entire product lifecycle to ensure we build the right thing, the right way.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Accordion Steps */}
                    <div className="flex flex-col gap-4 relative">
                        {processes.map((process, index) => (
                            <motion.div
                                key={process.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                onMouseEnter={() => setActiveId(process.id)}
                                onMouseLeave={() => setActiveId(null)}
                                onClick={() => setActiveId(process.id === activeId ? null : process.id)}
                                className={`
                                    group relative overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer
                                    ${activeId === process.id
                                        ? "bg-card border-accent/50 shadow-glow scale-[1.02]"
                                        : "bg-card/50 border-border hover:border-accent/30 hover:bg-card"
                                    }
                                `}
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-6">
                                        {/* Number */}
                                        <span className={`
                                            text-3xl md:text-4xl font-bold font-mono transition-colors duration-300
                                            ${activeId === process.id
                                                ? "text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent/20"
                                                : "text-muted-foreground/30 group-hover:text-accent/50"
                                            }
                                        `}>
                                            {process.id}.
                                        </span>

                                        {/* Title */}
                                        <h3 className={`
                                            text-xl md:text-2xl font-bold transition-colors duration-300
                                            ${activeId === process.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}
                                        `}>
                                            {process.title}
                                        </h3>
                                    </div>

                                    {/* Expanded Content with AnimatePresence */}
                                    <AnimatePresence initial={false}>
                                        {activeId === process.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="pt-6 pl-[3.5rem] md:pl-[4.5rem] space-y-6">
                                                    {/* Challenge & Process Grid */}
                                                    <div className="space-y-4">
                                                        {/* Challenge */}
                                                        <div className="pl-4 border-l-2 border-red-500/30">
                                                            <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">The Challenge</p>
                                                            <p className="text-sm text-foreground/70 italic leading-relaxed">{process.challenge}</p>
                                                        </div>

                                                        {/* Process */}
                                                        <div className="pl-4 border-l-2 border-accent/30">
                                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">My Process</p>
                                                            <p className="text-sm text-foreground/90 leading-relaxed">{process.process}</p>
                                                        </div>
                                                    </div>

                                                    {/* Output Chips */}
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {process.outputs.map((output, i) => (
                                                            <span key={i} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-accent/5 text-muted-foreground border border-accent/10">
                                                                {output}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

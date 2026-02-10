"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";

const steps = [
    {
        number: "01",
        title: "Define Success",
        description: "We start by auditing your current workflows. We identify bottlenecks, quantify the time/money lost, and define clear success metrics for automation."
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "We don't just patch holes. We design a comprehensive automation architecture that integrates with your existing stack (Slack, Notion, CRM, etc.) seamlessly."
    },
    {
        number: "03",
        title: "Build & Automate",
        description: "Our engineers build robust, custom AI agents and workflow automations. We test rigorously to ensure 100% reliability before deployment."
    },
    {
        number: "04",
        title: "Handoff & Scale",
        description: "We deploy the system, train your team, and provide a 90-day replacement guarantee. You get a system that works on autopilot."
    }
];

export default function ProcessSteps() {
    return (
        <Section className="relative overflow-hidden py-16 md:py-24">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* LEFT COLUMN - STICKY TITLE */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "var(--fluid-h2)" }}>
                                Our 4-Step <br />
                                <span className="gradient-text">Automation Process</span>
                            </h2>
                            <p className="text-muted text-lg mb-8 leading-relaxed max-w-md">
                                We go beyond simple scripts. We build resilient, AI-powered systems that transform how your business operates. Every step is designed for clarity, speed, and maximum impact.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" size="lg" external>
                                    Book a Discovery Call
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN - VERTICAL STEPS */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative"
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md" />

                                <div className="relative bg-card border border-border p-8 rounded-2xl transition-all duration-300 hover:border-accent/50 hover:translate-x-1">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">

                                        {/* Number */}
                                        <div className="shrink-0">
                                            <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-accent to-accent/20">
                                                {step.number}.
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    );
}

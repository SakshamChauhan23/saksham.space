"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/05 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                   linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container relative z-10 pt-40 pb-20 md:pt-48 md:pb-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1]"
                    >
                        Discovering the Right Product. <br className="hidden md:block" />
                        <span className="gradient-text">Building it Right.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        I identify high-impact opportunities and lead cross-functional teams to deliver measurable business outcomes.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button href="#portfolio" size="lg">
                            View Work
                        </Button>
                        <Button href="https://calendar.app.google/66rqVeepUyMsziNfA" variant="ghost" size="lg" external>
                            Let's Connect
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

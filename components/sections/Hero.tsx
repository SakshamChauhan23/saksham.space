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
                        transition={{ duration: 0.6 }}
                        className="font-bold tracking-tighter text-foreground mb-6 md:mb-8 leading-[1.1]"
                        style={{ fontSize: "var(--fluid-h1)" }}
                    >
                        Building Products That Ship. <br className="hidden md:block" />
                        <span className="gradient-text">Not Just Roadmaps.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
                        style={{ fontSize: "var(--fluid-p)" }}
                    >
                        I combine strategic thinking with hands-on execution. From problem identification to shipped product, I use modern tools (AI, no-code, automation) to move fast without sacrificing quality.
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

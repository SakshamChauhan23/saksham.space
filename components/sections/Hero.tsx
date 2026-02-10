"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

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

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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

            <div className="container relative z-10 pt-40 pb-12 md:pt-48 md:pb-16">
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

            {/* Tools & Technologies - Infinite Scrolling Belt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative z-10 w-full pb-16 md:pb-24"
            >
                <p className="text-xs text-muted-foreground text-center uppercase tracking-widest mb-8">
                    Tools & Technologies
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
            </motion.div>
        </section>
    );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean;
}

export default function Section({
    children,
    className = "",
    id,
    fullWidth = false
}: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`section ${fullWidth ? "" : "container"} ${className}`}
        >
            {children}
        </motion.section>
    );
}

interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    centered?: boolean;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    centered = true
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
        >
            {eyebrow && (
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full bg-accent-muted text-accent">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
            </h2>
            {description && (
                <p className={`text-lg text-muted ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}

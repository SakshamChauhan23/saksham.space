"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    tag?: string;
    href?: string;
    icon?: React.ReactNode;
    index?: number;
}

export default function Card({
    title,
    description,
    tag,
    href,
    icon,
    index = 0
}: CardProps) {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative h-full p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
        >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                {/* Icon */}
                {icon && (
                    <div className="mb-4 text-accent">
                        {icon}
                    </div>
                )}

                {/* Tag */}
                {tag && (
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent-muted text-accent">
                        {tag}
                    </span>
                )}

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                    {description}
                </p>

                {/* Arrow indicator for links */}
                {href && (
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn more</span>
                        <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </motion.svg>
                    </div>
                )}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full">
                {content}
            </Link>
        );
    }

    return content;
}

"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    external?: boolean;
    children: React.ReactNode;
}

const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg",
    secondary: "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
    ghost: "bg-transparent text-foreground hover:bg-accent-muted",
    outline: "bg-transparent border border-border text-foreground hover:bg-accent/5 hover:border-accent",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export default function Button({
    variant = "primary",
    size = "md",
    href,
    external = false,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-full
    transition-all duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const motionProps = {
        whileHover: { scale: 1.02, y: -2 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        if (external) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combinedClassName}
                    {...motionProps}
                >
                    {children}
                </motion.a>
            );
        }
        return (
            <motion.div {...motionProps} className="inline-block">
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            className={combinedClassName}
            {...motionProps}
            {...props}
        >
            {children}
        </motion.button>
    );
}

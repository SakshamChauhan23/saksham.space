import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Saksham Chauhan - Product Builder & PM",
    description:
        "Learn about Saksham Chauhan's journey from founding a 25 lacs+ revenue business in college to becoming a Product Manager who builds and ships real products using AI and no-code tools.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Saksham Chauhan - Product Builder & PM",
        description:
            "From founding a business in college to shipping products at scale. My journey, philosophy, and the modern tools I use.",
        url: "https://saksham.space/about",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Saksham Chauhan - Product Builder & PM",
        description:
            "From founding a business in college to shipping products at scale.",
    },
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <AboutContent />
            </main>
            <Footer />
        </>
    );
}

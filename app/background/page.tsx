import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundContent from "./BackgroundContent";

export const metadata: Metadata = {
    title: "Experience & Education - Saksham Chauhan Resume",
    description:
        "2.5+ years of product management experience at NavGurukul, OneDigiStore, and Newton School. Built CRMs, automated workflows, and shipped AI-powered products serving 100,000+ users.",
    alternates: { canonical: "/background" },
    openGraph: {
        title: "Experience & Education - Saksham Chauhan",
        description:
            "Product Manager with hands-on experience in internal tools, automation, and AI-driven products across EdTech and B2B SaaS.",
        url: "https://saksham.space/background",
    },
    twitter: {
        card: "summary_large_image",
        title: "Experience & Education - Saksham Chauhan",
        description:
            "Product Manager with hands-on experience in internal tools, automation, and AI-driven products.",
    },
};

export default function BackgroundPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <BackgroundContent />
            </main>
            <Footer />
        </>
    );
}

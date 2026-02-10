import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "AI Automation Services - Eliminate 20+ Hours of Manual Work Weekly",
    description:
        "Free audit reveals where time disappears. Custom AI automation eliminates manual workflows in 2 weeks.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "AI Automation Services - Eliminate Manual Workflows",
        description:
            "Custom AI automation eliminates manual workflows in 2 weeks.",
        url: "https://saksham.space/services",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Automation Services - Eliminate Manual Workflows",
        description:
            "Custom AI automation eliminates manual workflows in 2 weeks.",
    },
};

export default function ServicesPage() {
    return (
        <>
            <main>
                <ServicesContent />
            </main>
            <Footer />
        </>
    );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
    title: "Writing",
    description:
        "Every Ground Truth essay. Building with AI, getting products adopted, and the judgment calls in between.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Writing — Ground Truth",
        description:
            "Every essay from the work. Building with AI, getting products adopted, and the judgment calls in between.",
        url: "https://saksham.space/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Writing — Ground Truth",
        description:
            "Every essay from the work. Building with AI, getting products adopted, and the judgment calls in between.",
    },
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main style={{ background: "var(--bg)", paddingTop: "6rem" }}>
                <BlogContent />
            </main>
            <Footer />
        </>
    );
}

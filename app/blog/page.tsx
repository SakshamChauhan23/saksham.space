import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
    title: "Blog - Product Strategy, AI & Building Insights",
    description:
        "Deep dives into product strategy, API design, no-code automation, and practical lessons from building and shipping products fast. Read on Substack.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog - Product Strategy, AI & Building Insights",
        description:
            "Deep dives into product strategy, technical execution, and lessons learned from building real products.",
        url: "https://saksham.space/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Product Strategy, AI & Building Insights",
        description:
            "Deep dives into product strategy, technical execution, and lessons learned from building.",
    },
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <BlogContent />
            </main>
            <Footer />
        </>
    );
}

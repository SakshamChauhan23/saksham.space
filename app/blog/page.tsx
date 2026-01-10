import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";

export const metadata = {
    title: "Blog | Saksham - Thoughts on Product, AI & Building",
    description: "Insights on product building, AI, automation, and lessons from shipping fast.",
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

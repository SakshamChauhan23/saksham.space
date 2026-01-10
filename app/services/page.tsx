import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesContent from "./ServicesContent";

export const metadata = {
    title: "Build Products | Saksham - 0 to 1 Product Build",
    description: "30–45 Day MVP Sprint. From idea to working product using AI, no-code, and pragmatic engineering.",
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <ServicesContent />
            </main>
            <Footer />
        </>
    );
}

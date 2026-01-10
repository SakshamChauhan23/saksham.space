import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ProductJourney from "@/components/sections/ProductJourney";
import SelectedWork from "@/components/sections/SelectedWork";
import CollaborationOptions from "@/components/sections/CollaborationOptions";
import Writing from "@/components/sections/Writing";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <div className="flex flex-col gap-0">
        <Hero />
        <ProductJourney />
        <div id="portfolio">
          <SelectedWork />
        </div>

        <CollaborationOptions />
        <Writing />
        <div id="contact">
          <FinalCTA />
        </div>
      </div>

      <Footer />
    </main>
  );
}

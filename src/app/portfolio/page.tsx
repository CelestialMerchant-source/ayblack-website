import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGallery from "@/components/PortfolioGallery";
import portfolio from "@/data/portfolio.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Browse the ${site.businessName} portfolio — bespoke agbada, suits, aso-ebi, and custom designs.`,
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Craft, On Display"
          subtitle="A curated look at recent work. Tap any image to view it in full."
        />
        <PortfolioGallery items={portfolio} />
      </div>
    </div>
  );
}

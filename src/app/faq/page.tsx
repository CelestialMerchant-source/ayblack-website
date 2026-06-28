import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import faq from "@/data/faq.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${site.businessName}'s bespoke tailoring process, orders, and delivery.`,
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="pt-32 pb-20 px-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking your fitting."
        />
        <FAQAccordion items={faq} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore bespoke tailoring services from ${site.businessName} — native wear, suits, aso-ebi, custom design, alterations, and fabric sourcing.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="Tailoring, Done Right"
          subtitle="Whatever the occasion, we sew it, design it, and combine it into something only you would wear."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="reveal text-center mt-16 bg-charcoal-light border border-gold/15 rounded-2xl p-10">
          <h3 className="font-display text-2xl text-cream mb-3">
            Not sure which service fits your need?
          </h3>
          <p className="text-cream/60 mb-6 text-sm">
            Message us on WhatsApp and we&apos;ll guide you through fabric,
            design, and pricing.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-7 py-3.5 rounded-full uppercase tracking-wide text-sm hover:bg-gold-light transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

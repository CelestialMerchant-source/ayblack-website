import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `What clients are saying about ${site.businessName} — real reviews from real customers.`,
};

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="Words From Our Clients"
          subtitle="Don't take our word for it — hear it from the men we've dressed."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

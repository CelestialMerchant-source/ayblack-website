import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Book a Fitting",
  description: `Book your tailoring appointment with ${site.businessName}. Fill out the form or message us directly on WhatsApp.`,
};

export default function BookingPage() {
  return (
    <div className="pt-32 pb-20 px-5">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Book Now"
          title="Reserve Your Fitting"
          subtitle="Fill out the form below and we'll confirm your appointment within 24 hours, or message us directly on WhatsApp for a faster response."
        />
        <BookingForm />

        <div className="reveal text-center mt-10">
          <p className="text-cream/50 text-sm mb-4">Prefer to chat instead?</p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold px-7 py-3.5 rounded-full uppercase tracking-wide text-sm hover:bg-gold hover:text-charcoal transition-colors"
          >
            Book via WhatsApp Instead
          </a>
        </div>
      </div>
    </div>
  );
}

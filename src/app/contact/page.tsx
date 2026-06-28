import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.businessName} — address, working hours, phone, email, and social links.`,
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk"
          subtitle="Reach out by phone, WhatsApp, email, or visit us in person."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="reveal space-y-6">
            <div className="bg-charcoal-light border border-gold/15 rounded-2xl p-7">
              <h3 className="text-gold uppercase text-xs tracking-wider mb-2 font-semibold">
                Address
              </h3>
              <p className="text-cream/80">{site.address}</p>
            </div>

            <div className="bg-charcoal-light border border-gold/15 rounded-2xl p-7">
              <h3 className="text-gold uppercase text-xs tracking-wider mb-2 font-semibold">
                Working Hours
              </h3>
              <ul className="space-y-1 text-cream/80 text-sm">
                {site.workingHours.map((w) => (
                  <li key={w.day} className="flex justify-between gap-4">
                    <span>{w.day}</span>
                    <span className="text-cream/50">{w.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-charcoal-light border border-gold/15 rounded-2xl p-7 space-y-3">
              <h3 className="text-gold uppercase text-xs tracking-wider mb-1 font-semibold">
                Direct Contact
              </h3>
              <a
                href={`tel:${site.phone}`}
                className="block text-cream/80 hover:text-gold transition-colors"
              >
                📞 {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/80 hover:text-gold transition-colors"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-cream/80 hover:text-gold transition-colors"
              >
                ✉️ {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/80 hover:text-gold transition-colors"
              >
                📸 Follow on Instagram
              </a>
            </div>
          </div>

          <div className="reveal rounded-2xl overflow-hidden border border-gold/15 min-h-[400px]">
            <iframe
              src={site.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${site.businessName} location on Google Maps`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

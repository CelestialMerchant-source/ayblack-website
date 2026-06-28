import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import services from "@/data/services.json";
import testimonials from "@/data/testimonials.json";
import portfolio from "@/data/portfolio.json";
import site from "@/data/site.json";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="AY Black bespoke tailoring"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl">
          <p className="reveal is-visible text-gold uppercase tracking-[0.25em] text-xs sm:text-sm mb-5">
            {site.tagline}
          </p>
          <h1 className="reveal is-visible font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-cream">In a World Full of Trends,</span>
            <br />
            <span className="gold-gradient-text">Remain Classic.</span>
          </h1>
          <p className="reveal is-visible text-cream/70 text-base sm:text-lg max-w-xl mx-auto mb-10">
            {site.businessName} crafts bespoke agbada, suits, and aso-ebi for
            the man who knows exactly who he is. Every stitch, deliberate.
            Every fit, exact.
          </p>

          <div className="reveal is-visible flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-8 py-4 rounded-full uppercase tracking-wide text-sm hover:bg-gold-light transition-colors w-full sm:w-auto justify-center"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-gold/50 text-cream px-8 py-4 rounded-full uppercase tracking-wide text-sm hover:border-gold hover:text-gold transition-colors w-full sm:w-auto justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold/60">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-16 px-5 bg-black border-y border-gold/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {["I Sew", "I Design", "I Combine"].map((word) => (
            <div key={word} className="reveal">
              <p className="font-display text-2xl sm:text-3xl gold-gradient-text font-bold">
                {word}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Offer"
            title="Crafted For Every Occasion"
            subtitle="From bespoke native wear to sharp business suits, every piece is designed and sewn around you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="reveal text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors uppercase text-sm tracking-wide"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24 px-5 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="A Glimpse Into Our Craft"
            subtitle="Every garment tells a story of precision, fabric, and form."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portfolio.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="reveal relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors uppercase text-sm tracking-wide"
            >
              See Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Client Love"
            title="Trusted By Sharp Men Everywhere"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-5 bg-gradient-to-r from-black via-charcoal-light to-black border-t border-gold/15">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to <span className="gold-gradient-text">Remain Classic?</span>
          </h2>
          <p className="text-cream/60 mb-8">
            Book your fitting today and let&apos;s create something timeless together.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-8 py-4 rounded-full uppercase tracking-wide text-sm hover:bg-gold-light transition-colors"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

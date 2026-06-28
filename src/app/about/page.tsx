import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn the story behind ${site.businessName} — our experience, mission, and the values behind every stitch.`,
};

const values = [
  { title: "Precision", desc: "Every measurement, every cut, every seam,done with care, not shortcuts." },
  { title: "Originality", desc: "We design pieces that reflect you, not a copy of what's trending." },
  { title: "Integrity", desc: "We deliver what we promise, on quality, on time, every time." },
  { title: "Timelessness", desc: "Classic style outlives trends. We build wardrobes that last." },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Our Story" title="The Hands Behind AY Black" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="reveal relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/15">
            <Image
              src="/images/about-portrait.jpg"
              alt={`${site.businessName} tailor at work`}
              fill
              className="object-cover"
            />
          </div>
          <div className="reveal space-y-5 text-cream/70 leading-relaxed">
            <p>
              {site.businessName} began with a simple belief: that clothing
              should say something true about the man wearing it. What
              started as a passion for fabric and form has grown into a
              trusted name for bespoke native wear, suits, and aso-ebi across
              Ibadan and beyond.
            </p>
            <p>
              I sew. I design. I combine. Every piece that leaves our hands
              carries that philosophy, technical skill, original design
              thinking, and a sharp eye for combining fabric, colour, and cut
              into something distinct.
            </p>
            <p>
              Years of hands-on tailoring experience have taught us one
              thing above all: trends fade, but classic craftsmanship never
              goes out of style. That&apos;s the standard we hold every
              garment to.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
          <div className="reveal bg-charcoal-light border border-gold/15 rounded-2xl p-8">
            <h3 className="font-display text-2xl text-gold mb-3">Our Mission</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              To dress men with confidence through expertly tailored,
              original garments, combining timeless craftsmanship with
              modern precision, one client at a time.
            </p>
          </div>
          <div className="reveal bg-charcoal-light border border-gold/15 rounded-2xl p-8">
            <h3 className="font-display text-2xl text-gold mb-3">Our Vision</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              To be the name Nigerian men trust first for bespoke tailoring —
              known for craftsmanship, originality, and consistency, both
              locally and internationally.
            </p>
          </div>
        </div>

        <SectionHeading eyebrow="What Drives Us" title="Our Core Values" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="reveal bg-charcoal-light border border-gold/15 rounded-2xl p-6 text-center">
              <h4 className="font-display text-lg text-gold mb-2">{v.title}</h4>
              <p className="text-cream/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  video?: string;
};

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="reveal bg-charcoal-light border border-gold/15 rounded-2xl p-7 flex flex-col h-full">
      <div className="flex items-center gap-1 text-gold mb-4" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            fill={i < t.rating ? "currentColor" : "none"}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7L10 1.5z" />
          </svg>
        ))}
      </div>

      <p className="text-cream/80 text-sm leading-relaxed italic flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      {t.video ? (
        <div className="mt-5 aspect-video rounded-lg overflow-hidden">
          <video controls className="w-full h-full" preload="none" poster={t.image}>
            <source src={t.video} type="video/mp4" />
          </video>
        </div>
      ) : null}

      <div className="flex items-center gap-3 mt-5">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/30">
          <Image src={t.image} alt={t.name} fill loading="lazy" className="object-cover" />
        </div>
        <div>
          <p className="text-cream font-medium text-sm">{t.name}</p>
          <p className="text-cream/50 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

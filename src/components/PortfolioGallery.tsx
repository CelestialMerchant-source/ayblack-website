"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

export default function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((i) => i.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () =>
    setLightboxIndex((idx) =>
      idx === null ? null : (idx + 1) % filtered.length
    );

  const showPrev = () =>
    setLightboxIndex((idx) =>
      idx === null ? null : (idx - 1 + filtered.length) % filtered.length
    );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm uppercase tracking-wide border transition-colors ${
              active === cat
                ? "bg-gold text-charcoal border-gold"
                : "border-gold/30 text-cream/70 hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => openLightbox(item.id)}
            className="reveal group relative aspect-[3/4] overflow-hidden rounded-xl border border-gold/10"
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-cream text-sm font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
            className="absolute top-5 right-5 text-cream/80 hover:text-gold text-3xl"
          >
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-8 text-cream/70 hover:text-gold text-4xl px-2"
          >
            &#8249;
          </button>

          <div
            className="relative w-full max-w-2xl aspect-[3/4]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].title}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="text-center text-cream/80 mt-3 text-sm">
              {filtered[lightboxIndex].title}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-8 text-cream/70 hover:text-gold text-4xl px-2"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}

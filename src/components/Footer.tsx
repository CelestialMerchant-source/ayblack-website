import Link from "next/link";
import site from "@/data/site.json";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/booking", label: "Book a Fitting" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20 pt-14 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl gold-gradient-text font-bold mb-3">
            {site.businessName}
          </h3>
          <p className="text-cream/70 text-sm leading-relaxed">
            {site.slogan}
          </p>
          <p className="text-cream/50 text-xs mt-4 uppercase tracking-wide">
            {site.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-gold uppercase text-sm tracking-wider mb-4 font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream/70 hover:text-gold text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase text-sm tracking-wider mb-4 font-semibold">
            Get In Touch
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>{site.phoneDisplay}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.56 3.73 1.5 5.27L2 22l4.94-1.6a9.86 9.86 0 0 0 5.1 1.4c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.07c-.25.7-1.45 1.34-2 1.42-.52.08-1.06.11-1.71-.1-.4-.13-1.2-.4-2.18-.84-1.6-.72-3.06-1.96-4.15-3.6-.6-.86-.92-1.74-.96-2.43-.04-.7.21-1.31.6-1.78.18-.22.43-.34.65-.34.2 0 .35.01.5.02.16.01.37-.04.58.45.22.5.74 1.83.8 1.96.07.13.12.29.02.46-.1.18-.16.29-.31.46-.16.18-.34.4-.48.54-.16.16-.33.33-.15.65.18.32.81 1.34 1.74 2.18 1.2 1.07 2.21 1.4 2.54 1.56.33.16.52.13.71-.08.2-.21.81-.94 1.03-1.27.21-.32.43-.27.72-.16.3.11 1.88.89 2.2 1.05.32.16.53.24.61.38.08.15.08.83-.17 1.53z" />
              </svg>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.4-3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gold/10 mt-10 pt-6 text-center text-xs text-cream/40">
        © {year} {site.businessName}. All rights reserved.
      </div>
    </footer>
  );
}

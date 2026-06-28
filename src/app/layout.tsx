import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import RevealInit from "@/components/RevealInit";
import Loader from "@/components/Loader";
import site from "@/data/site.json";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.businessName} | Bespoke Nigerian Tailoring — ${site.tagline}`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "AY Black is a premium Nigerian tailoring brand specializing in bespoke agbada, suits, and aso-ebi. I sew, I design, I combine — in a world full of trends, remain classic. Book your fitting on WhatsApp today.",
  keywords: [
    "Nigerian tailor",
    "bespoke agbada",
    "custom suits Lagos",
    "aso ebi tailor",
    "AY Black",
    "men's fashion Nigeria",
    "native wear tailor",
  ],
  authors: [{ name: site.businessName }],
  openGraph: {
    title: `${site.businessName} — ${site.tagline}`,
    description: site.slogan,
    url: site.siteUrl,
    siteName: site.businessName,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.businessName} bespoke tailoring`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — ${site.tagline}`,
    description: site.slogan,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: site.businessName,
    image: `${site.siteUrl}/images/og-image.jpg`,
    "@id": site.siteUrl,
    url: site.siteUrl,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [site.instagram],
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased bg-charcoal text-cream`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealInit />
        <Loader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 bg-gold text-charcoal px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}

import { MetadataRoute } from "next";
import site from "@/data/site.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/testimonials",
    "/booking",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${site.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];

  const pages = ["", "/services", "/about", "/insights", "/contact"];
  return [
    ...pages.map((path, index) => ({
      url: `${site.url}${path}`,
      changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

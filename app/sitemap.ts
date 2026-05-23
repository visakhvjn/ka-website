import type { MetadataRoute } from "next";
import { serviceCategories } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const staticPages = ["", "/about", "/services", "/packages", "/faq", "/contact"];

  const servicePages = serviceCategories.map(
    (cat) => `/services/${cat.slug}`,
  );

  return [...staticPages, ...servicePages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

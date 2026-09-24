import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/termos-de-uso`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
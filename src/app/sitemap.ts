import { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/habits";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://howmuchitscostingyou.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const habitPages = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/lifetime-cost-calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...habitPages,
  ];
}

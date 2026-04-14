import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brandgate.dev";
  const now = new Date();

  const entries: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/features", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/why-brandgate", changeFrequency: "monthly", priority: 0.8 },
    { path: "/integrations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/api", changeFrequency: "monthly", priority: 0.6 },
    { path: "/tools/distribution-roi-calculator", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/fashion", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/food-beverage", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/home-design", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/health-beauty", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/electronics", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/startups", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/growing-brands", changeFrequency: "monthly", priority: 0.7 },
    { path: "/solutions/enterprise", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
    { path: "/help", changeFrequency: "monthly", priority: 0.5 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
    { path: "/guides", changeFrequency: "monthly", priority: 0.5 },
    { path: "/webinars", changeFrequency: "monthly", priority: 0.5 },
    { path: "/case-studies", changeFrequency: "monthly", priority: 0.5 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

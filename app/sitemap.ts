import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trulyfreetools.com";
  const routes = [
    "",
    "/compress-pdf",
    "/merge-pdf",
    "/split-pdf",
    "/pdf-to-word",
    "/remove-pdf-password",
  ];
  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

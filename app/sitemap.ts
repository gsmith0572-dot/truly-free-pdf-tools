import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trulyfreetools.com";
  const now = new Date("2026-05-05");

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/compress-pdf`, priority: 0.9 },
    { url: `${base}/merge-pdf`, priority: 0.9 },
    { url: `${base}/split-pdf`, priority: 0.9 },
    { url: `${base}/pdf-to-word`, priority: 0.9 },
    { url: `${base}/remove-pdf-password`, priority: 0.9 },
    { url: `${base}/blog`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.5 },
    { url: `${base}/how-it-works`, priority: 0.5 },
    { url: `${base}/privacy`, priority: 0.4 },
    { url: `${base}/terms`, priority: 0.4 },
    { url: `${base}/help`, priority: 0.5 },
    { url: `${base}/contact`, priority: 0.4 },
    { url: `${base}/feedback`, priority: 0.4 },
  ];

  const pseoPages = [
    "compress-large-pdf-free-no-limit",
    "compress-pdf-without-uploading",
    "free-pdf-tools-no-subscription",
    "ilovepdf-alternative-free",
    "merge-pdf-free-no-watermark",
    "pdf-to-word-free-no-email",
    "pdf-tools-no-cloud-upload",
    "remove-pdf-password-free-no-subscription",
    "smallpdf-alternative-free",
    "split-pdf-free-no-account",
  ];

  const blogPosts = [
    "pdf-statistics-2026",
    "best-free-pdf-tools-2026",
    "smallpdf-alternatives",
    "adobe-acrobat-alternative-free",
    "pdf-file-size-reducer-guide",
    "how-to-merge-pdf-free",
    "how-to-split-pdf-free",
    "how-to-remove-pdf-password",
    "pdf-to-word-free-no-email",
    "herramientas-pdf-gratis",
    "como-comprimir-pdf-sin-perder-calidad",
    "alternativas-smallpdf-gratis",
    "compress-pdf-without-losing-quality",
    "ilovepdf-alternative-free-unlimited",
    "why-smallpdf-limits-free-users",
  ];

  return [
    ...staticPages.map(({ url, priority }) => ({
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...pseoPages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

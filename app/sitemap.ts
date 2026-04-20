import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trulyfreetools.com";
  const core = [
    "",
    "/compress-pdf",
    "/merge-pdf",
    "/split-pdf",
    "/pdf-to-word",
    "/remove-pdf-password",
  ];
  const pseo = [
    "/compress-pdf-without-uploading",
    "/merge-pdf-free-no-watermark",
    "/pdf-tools-no-cloud-upload",
    "/compress-large-pdf-free-no-limit",
    "/split-pdf-free-no-account",
    "/remove-pdf-password-free-no-subscription",
    "/pdf-to-word-free-no-email",
    "/free-pdf-tools-no-subscription",
    "/smallpdf-alternative-free",
    "/ilovepdf-alternative-free",
  ];
  return [
    ...core.map((route) => ({
      url: base + route,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...pseo.map((route) => ({
      url: base + route,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

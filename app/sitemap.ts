import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trulyfreetools.com"
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/compress-pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/merge-pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/split-pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pdf-to-word`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/remove-pdf-password`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/feedback`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/compress-pdf-without-uploading`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/merge-pdf-free-no-watermark`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pdf-tools-no-cloud-upload`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compress-large-pdf-free-no-limit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/split-pdf-free-no-account`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/remove-pdf-password-free-no-subscription`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pdf-to-word-free-no-email`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/free-pdf-tools-no-subscription`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/smallpdf-alternative-free`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ilovepdf-alternative-free`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ]
}

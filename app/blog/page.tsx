import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF Tools Blog — Guides, Tips, and Comparisons",
  description: "In-depth guides on PDF compression, merging, splitting, conversion, and honest comparisons of free tools. No paywalls, no daily limits.",
  alternates: {
    canonical: "https://trulyfreetools.com/blog",
  },
};

const posts = [
  {
    slug: "pdf-statistics-2026",
    title: "PDF Statistics 2026: Usage, Market Size, and File Trends",
    description: "Comprehensive reference data on global PDF usage volume, market size, search demand by operation, file size benchmarks by document type, and compression ratio expectations.",
    date: "May 5, 2026",
    readTime: "12 min read",
    lang: "EN",
  },
  {
    slug: "best-free-pdf-tools-2026",
    title: "Best Free PDF Tools 2026: No Daily Limits, No Subscription, No Upload",
    description: "An honest comparison of Smallpdf, iLovePDF, PDF24, Adobe Acrobat Online, and browser-based alternatives. Real task limits, watermark behavior, and privacy implications.",
    date: "May 5, 2026",
    readTime: "11 min read",
    lang: "EN",
  },
  {
    slug: "smallpdf-alternatives",
    title: "Best Smallpdf Alternatives in 2026 — Free, No Daily Limits",
    description: "Hit the Smallpdf 2-task daily limit? Five alternatives with no daily caps, no watermarks, and in some cases no file upload at all. Full comparison with real usage limits.",
    date: "May 5, 2026",
    readTime: "10 min read",
    lang: "EN",
  },
  {
    slug: "adobe-acrobat-alternative-free",
    title: "Free Adobe Acrobat Alternatives 2026 — No Subscription Required",
    description: "Adobe Acrobat Pro costs $19.99 per month. These free alternatives handle compression, merging, splitting, and conversion with no subscription and no file size limits.",
    date: "May 5, 2026",
    readTime: "11 min read",
    lang: "EN",
  },
  {
    slug: "pdf-file-size-reducer-guide",
    title: "How to Reduce PDF File Size Free — Complete 2026 Guide",
    description: "Every method for reducing PDF file size — browser-based compression, source-level fixes, macOS Quartz filter, Ghostscript. Expected results by document type.",
    date: "May 5, 2026",
    readTime: "13 min read",
    lang: "EN",
  },
  {
    slug: "how-to-merge-pdf-free",
    title: "How to Merge PDF Files Free — No Upload, No Watermark, No Limit",
    description: "Every method for merging PDFs for free in 2026 — browser-based, macOS Preview, Windows Print to PDF, iPhone Files app, Android. Honest notes on each method.",
    date: "May 5, 2026",
    readTime: "9 min read",
    lang: "EN",
  },
  {
    slug: "how-to-split-pdf-free",
    title: "How to Split a PDF Free — Extract Pages Without Uploading",
    description: "Step-by-step guide to splitting PDFs across browser, macOS Preview, Windows, iPhone, and Android. Covers splitting, extracting, and deleting pages.",
    date: "May 5, 2026",
    readTime: "9 min read",
    lang: "EN",
  },
  {
    slug: "how-to-remove-pdf-password",
    title: "How to Remove a PDF Password Free — Unlock PDF Without Upload",
    description: "Explains the difference between open passwords and permissions passwords, which tools handle each type, and what to do when you do not know the password.",
    date: "May 5, 2026",
    readTime: "10 min read",
    lang: "EN",
  },
  {
    slug: "pdf-to-word-free-no-email",
    title: "How to Convert PDF to Word Free — No Email, No Upload, No Signup",
    description: "Every free PDF to Word conversion method in 2026. Honest about which PDFs convert well and which do not. Covers browser-based, Microsoft Word, Google Docs, and LibreOffice.",
    date: "May 5, 2026",
    readTime: "10 min read",
    lang: "EN",
  },
  {
    slug: "herramientas-pdf-gratis",
    title: "Herramientas PDF Gratis 2026 — Sin Limite de Tareas, Sin Suscripcion",
    description: "Comparativa honesta de las mejores herramientas PDF gratis en 2026. Limites reales, marcas de agua, privacidad y que operaciones funcionan sin pagar.",
    date: "5 mayo, 2026",
    readTime: "11 min",
    lang: "ES",
  },
  {
    slug: "como-comprimir-pdf-sin-perder-calidad",
    title: "Como Comprimir un PDF sin Perder Calidad — Gratis, Sin Subir Archivos",
    description: "Guia completa para comprimir PDFs sin perder calidad. Explica los dos tipos de compresion, cuando se pierde calidad y como procesarlos localmente en el navegador.",
    date: "5 mayo, 2026",
    readTime: "10 min",
    lang: "ES",
  },
  {
    slug: "alternativas-smallpdf-gratis",
    title: "Alternativas a Smallpdf Gratis 2026 — Sin Limite de 2 Tareas Diarias",
    description: "Las mejores alternativas gratuitas a Smallpdf en 2026. Sin limites diarios, sin marcas de agua y algunas sin subir archivos a ningun servidor.",
    date: "5 mayo, 2026",
    readTime: "10 min",
    lang: "ES",
  },
  {
    slug: "compress-pdf-without-losing-quality",
    title: "How to Compress a PDF Without Losing Quality — Free, No Upload Required",
    description: "Learn what actually causes quality loss during PDF compression, which documents compress losslessly, and how to process files locally in your browser.",
    date: "April 27, 2026",
    readTime: "10 min read",
    lang: "EN",
  },
  {
    slug: "ilovepdf-alternative-free-unlimited",
    title: "iLovePDF Alternative: Free PDF Tools With No Limits, No Watermarks, No Upload",
    description: "A full comparison of iLovePDF free tier restrictions vs browser-based alternatives that impose no file size limits, no watermarks, and no server uploads.",
    date: "April 27, 2026",
    readTime: "9 min read",
    lang: "EN",
  },
  {
    slug: "why-smallpdf-limits-free-users",
    title: "Why Smallpdf Limits Free Users to 2 Tasks Per Day (And What To Do About It)",
    description: "Smallpdf restricts free users to 2 PDF tasks every 24 hours. Learn why that limit exists, how their paywall works, and which alternatives have no daily caps.",
    date: "April 27, 2026",
    readTime: "8 min read",
    lang: "EN",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
          TrulyFreeTools Blog
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          PDF Guides and Tool Comparisons
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Practical guides on working with PDFs — compression, merging, splitting, conversion, and honest comparisons of free tools. No paywalls, no daily limits.
        </p>
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-100 pb-10">
            <Link href={"/blog/" + post.slug} className="group block">
              <div className="flex items-center gap-2 mb-2">
                <span style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "2px 7px",
                  borderRadius: 4,
                  background: post.lang === "ES" ? "#fef3c7" : "#eff6ff",
                  color: post.lang === "ES" ? "#92400e" : "#1d4ed8",
                }}>
                  {post.lang}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">{post.description}</p>
              <div className="mt-3 flex items-center gap-3 text-sm text-gray-400">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

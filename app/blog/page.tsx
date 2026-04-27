import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF Tools Blog — Guides, Tips, and Comparisons",
  description: "In-depth guides on PDF compression, free tool comparisons, and practical tips for working with PDF files without subscriptions or file uploads.",
  alternates: {
    canonical: "https://trulyfreetools.com/blog",
  },
};

const posts = [
  {
    slug: "compress-pdf-without-losing-quality",
    title: "How to Compress a PDF Without Losing Quality — Free, No Upload Required",
    description: "Learn what actually causes quality loss during PDF compression, which documents compress losslessly, and how to process files locally in your browser.",
    date: "April 27, 2026",
    readTime: "10 min read",
  },
  {
    slug: "ilovepdf-alternative-free-unlimited",
    title: "iLovePDF Alternative: Free PDF Tools With No Limits, No Watermarks, No Upload",
    description: "A full comparison of iLovePDF free tier restrictions vs browser-based alternatives that impose no file size limits, no watermarks, and no server uploads.",
    date: "April 27, 2026",
    readTime: "9 min read",
  },
  {
    slug: "why-smallpdf-limits-free-users",
    title: "Why Smallpdf Limits Free Users to 2 Tasks Per Day (And What To Do About It)",
    description: "Smallpdf restricts free users to 2 PDF tasks every 24 hours. Learn why that limit exists, how their paywall works, and which alternatives have no daily caps.",
    date: "April 27, 2026",
    readTime: "8 min read",
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
          Practical guides on working with PDFs — compression, format conversion, and honest comparisons of free tools.
        </p>
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-100 pb-10">
            <Link href={"/blog/" + post.slug} className="group block">
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

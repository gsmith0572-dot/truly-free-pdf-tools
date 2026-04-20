import type { Metadata } from "next";
import SplitPDFTool from "@/components/tools/SplitPDFTool";

export const metadata: Metadata = {
  title: "Split PDF Free — No Limits, No Signup, 100% Client-Side | TrulyFree Tools",
  description: "Process your PDF files locally. Split or extract PDF pages instantly — no uploads, no subscriptions, no credit card ever.",
  alternates: { canonical: "https://trulyfreetools.com/split-pdf" },
  openGraph: {
    title: "Split PDF Free — No Limits, No Signup",
    description: "Split PDF files locally in your browser. No watermarks. No email. No limits.",
    url: "https://trulyfreetools.com/split-pdf",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I split a PDF for free without creating an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No account, no email, no signup of any kind. Just upload your PDF and split it instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Why does it not ask for a credit card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because we never charge you. TrulyFree PDF Tools is monetized by non-intrusive ads only. No account required."
      }
    },
    {
      "@type": "Question",
      "name": "Where are my files processed when splitting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entirely in your browser using WebAssembly. Your files are never uploaded to any server. They never leave your device."
      }
    },
    {
      "@type": "Question",
      "name": "Can I extract specific pages from a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can extract all pages individually or define custom page ranges like 1-3, 5, 7-9 — each range becomes a separate PDF file."
      }
    }
  ]
};

export default function SplitPDFPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(0,88,195,0.08)",
            color: "#0058c3",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 4,
            marginBottom: 14,
          }}>
            PDF Splitter
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Split PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Extract pages or split into custom ranges. No watermarks. No email. No limits.
          </p>
        </div>
        <SplitPDFTool />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import CompressPDFTool from "@/components/tools/CompressPDFTool";

export const metadata: Metadata = {
  title: "Compress PDF Free — No Limits, No Signup, 100% Client-Side | TrulyFree Tools",
  description: "Process your PDF files locally. Reduce PDF size instantly — no uploads, no subscriptions, no credit card ever.",
  alternates: { canonical: "https://trulyfreetools.com/compress-pdf" },
  openGraph: {
    title: "Compress PDF Free — No Limits, No Signup",
    description: "Compress PDF files locally in your browser. No watermarks. No email. No limits.",
    url: "https://trulyfreetools.com/compress-pdf",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this PDF compressor really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100% free with no limits. No subscription, no daily cap, no watermarks. Free forever — not free for 14 days."
      }
    },
    {
      "@type": "Question",
      "name": "Why does it not ask for a credit card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because we never charge you. TrulyFree PDF Tools is monetized by non-intrusive ads only. Your data is never sold and no account is required."
      }
    },
    {
      "@type": "Question",
      "name": "Where are my files processed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entirely in your browser using WebAssembly. Your files are never uploaded to any server. They never leave your device."
      }
    },
    {
      "@type": "Question",
      "name": "What is the file size limit for compression?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no file size limit. All processing happens locally on your device, so limits depend only on your browser and hardware."
      }
    }
  ]
};

export default function CompressPDFPage() {
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
            PDF Compressor
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Compress PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Reduce your PDF file size instantly. No watermarks. No email. No limits.
          </p>
        </div>
        <CompressPDFTool />
      </div>
    </main>
  );
}

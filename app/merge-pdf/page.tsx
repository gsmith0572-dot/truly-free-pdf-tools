import type { Metadata } from "next";
import MergePDFTool from "@/components/tools/MergePDFTool";

export const metadata: Metadata = {
  title: "Merge PDF Free — No Limits, No Signup, 100% Client-Side | TrulyFree Tools",
  description: "Process your PDF files locally. Combine multiple PDFs into one — no uploads, no subscriptions, no credit card ever.",
  alternates: { canonical: "https://trulyfreetools.com/merge-pdf" },
  openGraph: {
    title: "Merge PDF Free — No Limits, No Signup",
    description: "Merge PDF files locally in your browser. No watermarks. No email. No limits.",
    url: "https://trulyfreetools.com/merge-pdf",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this PDF merger really free with no watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely free with no watermarks, no signup, and no limits on how many PDFs you can merge."
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
      "name": "Where are my files processed when merging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entirely in your browser using WebAssembly. Your files are never uploaded to any server. They never leave your device."
      }
    },
    {
      "@type": "Question",
      "name": "How many PDF files can I merge at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no limit on the number of files. All processing is local so the only constraint is your device memory."
      }
    }
  ]
};

export default function MergePDFPage() {
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
            PDF Merger
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Merge PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Combine multiple PDFs into one file. No watermarks. No email. No limits.
          </p>
        </div>
        <MergePDFTool />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import PDFToWordTool from "@/components/tools/PDFToWordTool";

export const metadata: Metadata = {
  title: "PDF to Word Free — No Limits, No Signup, 100% Client-Side | TrulyFree Tools",
  description: "Process your PDF files locally. Convert PDF to editable Word .docx — no uploads, no subscriptions, no credit card ever. Works with text-based PDFs only.",
  alternates: { canonical: "https://trulyfreetools.com/pdf-to-word" },
  openGraph: {
    title: "PDF to Word Free — No Limits, No Signup",
    description: "Convert PDF to Word locally in your browser. No watermarks. No email. No limits.",
    url: "https://trulyfreetools.com/pdf-to-word",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this PDF to Word converter really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely free with no signup, no watermarks, and no daily limits."
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
      "name": "Where are my files processed during conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entirely in your browser using WebAssembly. Your files are never uploaded to any server. They never leave your device."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work with scanned PDFs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This tool works with text-based PDFs only. Scanned or image-based PDFs are not supported as they require OCR technology which cannot run client-side."
      }
    }
  ]
};

export default function PDFToWordPage() {
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
            PDF to Word
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            PDF to Word Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Convert PDF to editable .docx instantly. No watermarks. No email. No limits.
          </p>
          <p style={{ fontSize: 13, color: "#718096", maxWidth: 480, margin: "10px auto 0", lineHeight: 1.5 }}>
            Works with text-based PDFs only. Scanned or image-based PDFs are not supported.
          </p>
        </div>
        <PDFToWordTool />
      </div>
    </main>
  );
}

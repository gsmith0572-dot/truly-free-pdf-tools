import type { Metadata } from "next";
import RemovePasswordTool from "@/components/tools/RemovePasswordTool";

export const metadata: Metadata = {
  title: "Remove PDF Password Free — No Limits, No Signup, 100% Client-Side | TrulyFree Tools",
  description: "Process your PDF files locally. Remove PDF password protection instantly — no uploads, no subscriptions, no credit card ever.",
  alternates: { canonical: "https://trulyfreetools.com/remove-pdf-password" },
  openGraph: {
    title: "Remove PDF Password Free — No Limits, No Signup",
    description: "Unlock PDF files locally in your browser. No watermarks. No email. No limits.",
    url: "https://trulyfreetools.com/remove-pdf-password",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I remove a PDF password for free without signing up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No account, no email, no signup. Upload your PDF and remove the password restriction instantly."
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
      "name": "Where are my files processed when unlocking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entirely in your browser using WebAssembly. Your files are never uploaded to any server. They never leave your device."
      }
    },
    {
      "@type": "Question",
      "name": "What type of PDF protection does this remove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This tool removes owner-level restrictions such as printing, copying, and editing locks from PDFs that use standard permission-based protection."
      }
    }
  ]
};

export default function RemovePasswordPage() {
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
            PDF Unlocker
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Remove PDF Password Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Unlock password-protected PDFs instantly. No watermarks. No email. No limits.
          </p>
        </div>
        <RemovePasswordTool />
      </div>
    </main>
  );
}

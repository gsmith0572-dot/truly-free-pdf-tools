import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF to Word Free No Email — Convert PDF to DOCX Instantly",
  description: "Convert PDF to editable Word document free with no email required. No signup, no watermarks. Processed locally in your browser.",
  alternates: { canonical: "https://trulyfreetools.com/pdf-to-word-free-no-email" },
  openGraph: {
    title: "PDF to Word Free No Email — Convert PDF to DOCX Instantly",
    description: "Convert PDF to editable Word document free with no email required. No signup, no watermarks. Processed locally in your browser.",
    url: "https://trulyfreetools.com/pdf-to-word-free-no-email",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "Can I convert PDF to Word without giving my email?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. No email, no account, no signup. Just upload and convert."
    }
  },
  {
    "@type": "Question",
    "name": "Does the converted Word file have watermarks?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Never. Your converted .docx file is clean \u2014 no watermarks, no branding."
    }
  },
  {
    "@type": "Question",
    "name": "Does this work with scanned PDFs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. This tool works with text-based PDFs only. Scanned or image-based PDFs are not supported as OCR cannot run client-side."
    }
  },
  {
    "@type": "Question",
    "name": "Where is the conversion processed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Entirely in your browser. Your PDF is never uploaded to any server."
    }
  }
]
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ marginBottom: 48, textAlign: "center" }}>
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
            Free PDF Tool
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.2 }}>
            PDF to Word Free — No Email, No Signup, No Limits
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Convert text-based PDFs to editable .docx files instantly. Nothing uploaded. Nothing stored.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: "#4a5568", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            No signup. No watermarks. No file size limits. Processed entirely in your browser.
          </p>
          <Link
            href="/pdf-to-word"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #0058c3, #0070f3)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 32px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Convert PDF to Word Free
          </Link>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 16 }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 1.5C3.74 1.5 1.5 3.74 1.5 6.5S3.74 11.5 6.5 11.5 11.5 9.26 11.5 6.5 9.26 1.5 6.5 1.5zm0 4.5a1 1 0 110-2 1 1 0 010 2zm1 3H5.5V7h2v2z" fill="#718096"/>
            </svg>
            <p style={{ color: "#718096", fontSize: 12 }}>Your files never leave your browser. Processed locally.</p>
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Can I convert PDF to Word without giving my email?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>Yes. No email, no account, no signup. Just upload and convert.</p>
            </div>
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Does the converted Word file have watermarks?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>Never. Your converted .docx file is clean — no watermarks, no branding.</p>
            </div>
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Does this work with scanned PDFs?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>No. This tool works with text-based PDFs only. Scanned or image-based PDFs are not supported as OCR cannot run client-side.</p>
            </div>
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Where is the conversion processed?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>Entirely in your browser. Your PDF is never uploaded to any server.</p>
            </div>
          </div>
        </div>

        <div style={{ background: "#f1f4f6", borderRadius: 8, padding: 28, textAlign: "center" }}>
          <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
            Free forever. Not free for 14 days.
          </p>
          <p style={{ color: "#4a5568", fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
            Smallpdf and ILovePDF charge $111-$180/year after giving you 2 free tasks per day. We built the alternative: every tool, unlimited, always free.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "rgba(0,88,195,0.08)",
              color: "#0058c3",
              fontWeight: 600,
              fontSize: 13,
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            See all free PDF tools
          </Link>
        </div>

      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Split PDF Free No Account — Extract Pages Instantly",
  description: "Split or extract pages from any PDF for free. No account required, no watermarks, no email. Processed locally in your browser.",
  alternates: { canonical: "https://trulyfreetools.com/split-pdf-free-no-account" },
  openGraph: {
    title: "Split PDF Free No Account — Extract Pages Instantly",
    description: "Split or extract pages from any PDF for free. No account required, no watermarks, no email. Processed locally in your browser.",
    url: "https://trulyfreetools.com/split-pdf-free-no-account",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "Can I split a PDF without creating an account?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. No account, no email, no signup of any kind. Upload your PDF and split it in seconds."
    }
  },
  {
    "@type": "Question",
    "name": "Can I extract specific pages instead of splitting all?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Use custom range mode to define exactly which pages you want \u2014 for example 1-3, 5, 7-9. Each range becomes a separate PDF."
    }
  },
  {
    "@type": "Question",
    "name": "Where are my files processed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Entirely in your browser. Your PDF is never uploaded to any server."
    }
  },
  {
    "@type": "Question",
    "name": "Is there a page count limit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Split PDFs with any number of pages \u2014 no limits imposed."
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
            Split PDF Free — No Account, No Email, No Limits
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Extract individual pages or custom ranges from any PDF. Instant download, nothing uploaded.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: "#4a5568", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            No signup. No watermarks. No file size limits. Processed entirely in your browser.
          </p>
          <Link
            href="/split-pdf"
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
            Split PDF Free
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
                        <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Can I split a PDF without creating an account?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>Yes. No account, no email, no signup of any kind. Upload your PDF and split it in seconds.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Can I extract specific pages instead of splitting all?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>Yes. Use custom range mode to define exactly which pages you want — for example 1-3, 5, 7-9. Each range becomes a separate PDF.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Where are my files processed?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>Entirely in your browser. Your PDF is never uploaded to any server.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Is there a page count limit?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>No. Split PDFs with any number of pages — no limits imposed.</p>\n            </div>
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

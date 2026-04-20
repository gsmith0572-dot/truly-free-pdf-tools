import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove PDF Password Free — No Subscription, No Signup",
  description: "Remove password protection from PDF files for free. No subscription, no email, no signup. Processed locally in your browser.",
  alternates: { canonical: "https://trulyfreetools.com/remove-pdf-password-free-no-subscription" },
  openGraph: {
    title: "Remove PDF Password Free — No Subscription, No Signup",
    description: "Remove password protection from PDF files for free. No subscription, no email, no signup. Processed locally in your browser.",
    url: "https://trulyfreetools.com/remove-pdf-password-free-no-subscription",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "Is removing a PDF password really free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. No subscription, no trial, no credit card. Free forever."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need to upload my PDF to a server to unlock it?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Unlocking runs entirely in your browser. Your file never leaves your device."
    }
  },
  {
    "@type": "Question",
    "name": "What type of protection does this remove?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It removes owner-level restrictions \u2014 printing, copying, editing locks \u2014 from PDFs with standard permission-based protection."
    }
  },
  {
    "@type": "Question",
    "name": "Why do other tools charge to remove PDF passwords?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Server-based tools charge $111-$180/year for features that can run locally in a browser. We built the ethical alternative."
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
            Remove PDF Password Free — No Subscription Ever
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Unlock password-restricted PDFs instantly. No cloud upload, no account, no hidden fees.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: "#4a5568", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            No signup. No watermarks. No file size limits. Processed entirely in your browser.
          </p>
          <Link
            href="/remove-pdf-password"
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
            Remove PDF Password Free
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
                        <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Is removing a PDF password really free?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>Yes. No subscription, no trial, no credit card. Free forever.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Do I need to upload my PDF to a server to unlock it?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>No. Unlocking runs entirely in your browser. Your file never leaves your device.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>What type of protection does this remove?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>It removes owner-level restrictions — printing, copying, editing locks — from PDFs with standard permission-based protection.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Why do other tools charge to remove PDF passwords?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>Server-based tools charge $111-$180/year for features that can run locally in a browser. We built the ethical alternative.</p>\n            </div>
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

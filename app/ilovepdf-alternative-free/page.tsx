import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ILovePDF Alternative Free — Unlimited, No Watermark, No Signup",
  description: "The best free ILovePDF alternative with no watermarks, no daily limits, and no signup required. All PDF tools run locally in your browser.",
  alternates: { canonical: "https://trulyfreetools.com/ilovepdf-alternative-free" },
  openGraph: {
    title: "ILovePDF Alternative Free — Unlimited, No Watermark, No Signup",
    description: "The best free ILovePDF alternative with no watermarks, no daily limits, and no signup required. All PDF tools run locally in your browser.",
    url: "https://trulyfreetools.com/ilovepdf-alternative-free",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "What is the main difference between this and ILovePDF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "ILovePDF limits free users to 2 tasks per day and requires a paid plan for unlimited access. TrulyFree PDF Tools has no daily limits and is free forever."
    }
  },
  {
    "@type": "Question",
    "name": "Does this alternative work the same as ILovePDF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. It covers the same core use cases: compress, merge, split, convert to Word, and remove passwords \u2014 with no limitations."
    }
  },
  {
    "@type": "Question",
    "name": "Does this tool upload files to a server like ILovePDF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. ILovePDF processes files on cloud servers. TrulyFree PDF Tools runs entirely in your browser via WebAssembly \u2014 zero uploads."
    }
  },
  {
    "@type": "Question",
    "name": "Is there any cost at all?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Free forever. Funded by non-intrusive ads. No subscription, no account, no watermarks."
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
            The ILovePDF Alternative That Is Truly Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            No 2-task daily cap. No $96/year plan. No watermarks. Just free PDF tools that work.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: "#4a5568", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            No signup. No watermarks. No file size limits. Processed entirely in your browser.
          </p>
          <Link
            href="/merge-pdf"
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
            Try Free — No Signup
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
                        <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>What is the main difference between this and ILovePDF?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>ILovePDF limits free users to 2 tasks per day and requires a paid plan for unlimited access. TrulyFree PDF Tools has no daily limits and is free forever.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Does this alternative work the same as ILovePDF?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>Yes. It covers the same core use cases: compress, merge, split, convert to Word, and remove passwords — with no limitations.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Does this tool upload files to a server like ILovePDF?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>No. ILovePDF processes files on cloud servers. TrulyFree PDF Tools runs entirely in your browser via WebAssembly — zero uploads.</p>\n            </div>
            <div style={{{{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}}}>\n              <p style={{{{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}}}>Is there any cost at all?</p>\n              <p style={{{{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}}}>No. Free forever. Funded by non-intrusive ads. No subscription, no account, no watermarks.</p>\n            </div>
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

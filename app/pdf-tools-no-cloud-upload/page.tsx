import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF Tools That Don't Upload to Cloud — 100% Local Processing",
  description: "PDF tools that process files locally in your browser. No cloud uploads, no server storage, no privacy risk. Free forever.",
  alternates: { canonical: "https://trulyfreetools.com/pdf-tools-no-cloud-upload" },
  openGraph: {
    title: "PDF Tools That Don't Upload to Cloud — 100% Local Processing",
    description: "PDF tools that process files locally in your browser. No cloud uploads, no server storage, no privacy risk. Free forever.",
    url: "https://trulyfreetools.com/pdf-tools-no-cloud-upload",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "How do these PDF tools work without uploading files?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We use WebAssembly (Wasm) \u2014 a technology that runs near-native code directly in your browser. This means full PDF processing happens on your device with zero network transfer."
    }
  },
  {
    "@type": "Question",
    "name": "Are cloud-based PDF tools a privacy risk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. When you upload a PDF to a cloud service, that file is stored on their servers. For confidential documents \u2014 contracts, financial records, medical files \u2014 local processing is the only safe option."
    }
  },
  {
    "@type": "Question",
    "name": "Which tools are available?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Compress PDF, Merge PDF, Split PDF, PDF to Word, and Remove PDF Password \u2014 all running locally."
    }
  },
  {
    "@type": "Question",
    "name": "Is this free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Free forever. No subscription, no trial period, no credit card."
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
            PDF Tools That Never Upload Your Files to the Cloud
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Every tool runs in your browser via WebAssembly. Your files are processed locally and never leave your device.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", marginBottom: 48, textAlign: "center" }}>
          <p style={{ color: "#4a5568", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
            No signup. No watermarks. No file size limits. Processed entirely in your browser.
          </p>
          <Link
            href="/compress-pdf"
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
            Try a Tool Free
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
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>How do these PDF tools work without uploading files?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>We use WebAssembly (Wasm) — a technology that runs near-native code directly in your browser. This means full PDF processing happens on your device with zero network transfer.</p>
            </div>
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Are cloud-based PDF tools a privacy risk?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>Yes. When you upload a PDF to a cloud service, that file is stored on their servers. For confidential documents — contracts, financial records, medical files — local processing is the only safe option.</p>
            </div>
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Which tools are available?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>Compress PDF, Merge PDF, Split PDF, PDF to Word, and Remove PDF Password — all running locally.</p>
            </div>
            <div style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <p style={{ color: "#181c1e", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Is this free?</p>
              <p style={{ color: "#4a5568", fontSize: 14, lineHeight: 1.6 }}>Yes. Free forever. No subscription, no trial period, no credit card.</p>
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

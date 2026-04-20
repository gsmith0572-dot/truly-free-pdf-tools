import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Center — Truly Free PDF Tools",
  description: "Answers to common questions about compressing, merging, splitting, and converting PDFs for free with no signup.",
  alternates: { canonical: "https://trulyfreetools.com/help" },
}

const faqs = [
  {
    q: "Is this actually free with no limits?",
    a: "Yes. There are no daily limits, no file count limits, no account required, and no paywall after a trial period. The tools are free because we display non-intrusive advertising — that is the entire business model.",
  },
  {
    q: "Are my files uploaded to your servers?",
    a: "No. Every operation runs in your browser using WebAssembly. Your files are loaded into local memory on your device and processed there. Nothing is transmitted to our servers. When you close the tab, the data is gone.",
  },
  {
    q: "Why is my compressed PDF larger than expected?",
    a: "Compression effectiveness depends on the original content. PDFs that are primarily high-resolution photographs compress significantly. PDFs that are already compressed, contain vector graphics, or are mostly text have less room for size reduction. Try the medium or high compression setting for maximum reduction.",
  },
  {
    q: "Why does PDF to Word conversion lose some formatting?",
    a: "PDF to Word conversion works only on text-based PDFs. Scanned documents, image-based PDFs, or PDFs with complex multi-column layouts will have reduced accuracy. If your PDF was created directly from a Word document, conversion accuracy will be high.",
  },
  {
    q: "What is the maximum file size?",
    a: "File size is limited by your device memory, not by our servers. Most modern devices handle PDFs up to 200MB without issue. For very large files, use Chrome or Edge on a desktop machine for best performance.",
  },
  {
    q: "How do I remove a PDF password if I forgot it?",
    a: "The Remove Password tool can unlock PDFs where you know the password and need to remove the restriction. It cannot bypass unknown passwords — that would be a security vulnerability, not a feature.",
  },
  {
    q: "Does the merged PDF preserve bookmarks and hyperlinks?",
    a: "Hyperlinks within individual pages are preserved. Document-level bookmarks from source files are not automatically merged into the combined document in the current version.",
  },
  {
    q: "How do I split a PDF into individual pages?",
    a: "Open the Split PDF tool, upload your file, and select the page range or individual pages you want to extract. You can extract a single page, a range, or download all pages as separate files.",
  },
  {
    q: "Is there an API available?",
    a: "We do not currently offer a public API. All processing is done client-side and there is no server-side infrastructure to expose. See our How It Works page for technical architecture details.",
  },
  {
    q: "Do you store any of my files after I close the tab?",
    a: "No. Files exist only in browser memory during your active session. We have no database, no file storage, and no logs of file contents. There is nothing to delete because nothing was saved.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
}

export default function HelpPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Support
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Help Center
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.6 }}>
          Answers to common questions. If yours is not here, use the contact page.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 8, padding: "24px 28px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 8 }}>
                {faq.q}
              </h2>
              <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

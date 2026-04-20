import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Truly Free PDF Tools",
  description: "Free forever, no hidden charges, no credit card required. Read our terms of service.",
  alternates: { canonical: "https://trulyfreetools.com/terms" },
}

const sections = [
  {
    title: "Free Forever Guarantee",
    body: "The core PDF tools on this site — compress, merge, split, convert, and unlock — are free to use without limitation. There are no daily limits, no file size paywalls for standard documents, no watermarks on output, and no requirement to register an account. This commitment is permanent. We do not operate a freemium model.",
  },
  {
    title: "No Credit Card. Ever.",
    body: "We will never ask for a credit card, debit card, or payment information. No trial periods that convert to paid subscriptions. No premium tiers. No upsells during the tool workflow. The absence of payment friction is a design principle, not a promotional offer.",
  },
  {
    title: "Acceptable Use",
    body: "You may use these tools for personal, commercial, and professional purposes. You agree not to use the service to process files containing illegal content, to attempt to reverse-engineer the site infrastructure, or to use automated bots to generate excessive load on our CDN. Standard fair use applies.",
  },
  {
    title: "File Processing and Privacy",
    body: "All file processing occurs client-side in your browser. By using the service, you acknowledge that you understand how local processing works and that Klickify Agency has no access to your file contents. You retain full ownership and responsibility for the documents you process.",
  },
  {
    title: "No Warranties",
    body: "This service is provided as-is. While we maintain high standards for tool accuracy, we make no warranty that compression, conversion, or extraction results will meet specific professional or legal requirements. For legally sensitive documents, verify output accuracy before use.",
  },
  {
    title: "Advertising",
    body: "This site displays non-intrusive advertising through Google AdSense. Ad placement does not influence tool functionality or output. We do not show interstitial ads, pop-ups, or ads that interrupt the tool workflow.",
  },
  {
    title: "Intellectual Property",
    body: "The Truly Free PDF Tools brand, design system, and site code are property of Klickify Agency. The PDF processing libraries used (pdf-lib, PDF.js) are open-source software used under their respective licenses. You retain full intellectual property rights over any documents you process.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these terms to reflect changes in service or legal requirements. Material changes will be noted with an updated date. Continued use of the service after changes constitutes acceptance.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be directed to legal@trulyfreetools.com.",
  },
]

export default function TermsPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Legal
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: "#718096", letterSpacing: "-0.02em", marginBottom: 48 }}>
          Last updated: April 21, 2026
        </p>

        <div style={{ background: "linear-gradient(135deg, rgba(0,88,195,0.06), rgba(0,112,243,0.06))", borderRadius: 8, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#0058c3", margin: 0 }}>
            Core commitment: Free forever. No credit card. No watermarks. No daily limits.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 8, padding: "28px 32px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 10 }}>
                {s.title}
              </h2>
              <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

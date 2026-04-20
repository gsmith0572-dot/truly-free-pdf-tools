import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — Truly Free PDF Tools",
  description: "We build precision instruments against predatory software. No paywalls, no watermarks, no data collection. Free forever.",
  alternates: { canonical: "https://trulyfreetools.com/about" },
}

export default function AboutPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 48px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          About
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 24 }}>
          Built against the paywall.
        </h1>
        <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", marginBottom: 40 }}>
          Smallpdf charges $108 per year. ILovePDF charges $96. Adobe Acrobat starts at $179.88. 
          All three offer a "free" tier that limits you to 2 tasks per day — then locks your files 
          behind a subscription wall. We call this the hostage model. We built Truly Free PDF Tools 
          to end it.
        </p>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: "32px 36px", marginBottom: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 12 }}>
            The Mission
          </h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
            We build precision instruments — utilities that do exactly one job, with zero friction, 
            zero cost, and zero compromise. No registration. No watermark. No email capture. 
            No credit card ever. What is free today is free in five years.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: "32px 36px", marginBottom: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 12 }}>
            The Technical Difference
          </h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
            Every PDF operation on this site runs entirely in your browser using WebAssembly. 
            Your files are never uploaded to a server. They are processed locally, in memory, 
            on your device. When you close the tab, the data is gone. We cannot see your files 
            because we never receive them.
          </p>
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: "32px 36px", marginBottom: 32, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 12 }}>
            Who Builds This
          </h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
            Truly Free PDF Tools is a product of Klickify Agency. We are a small team of engineers 
            and product builders focused on one principle: ethical utility software. 
            We sustain operations through non-intrusive display advertising. 
            That is the entire business model — no data sales, no subscriptions, no upsells.
          </p>
        </div>

        <div style={{ background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: 8, padding: "32px 36px" }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#ffffff", margin: 0, lineHeight: 1.6 }}>
            Free forever. Not free for 14 days. Not free until you hit a limit. 
            Free forever.
          </p>
        </div>
      </section>
    </main>
  )
}

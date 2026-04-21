import type { Metadata } from "next"
import SplitPDFTool from "@/components/tools/SplitPDFTool"
import AdSlot from "@/components/ads/AdSlot"

export const metadata: Metadata = {
  title: "Split PDF Free — No Signup, No Watermark | TrulyFree Tools",
  description: "Split PDF files into separate pages or sections. Free, no email required. Files never leave your browser.",
  alternates: { canonical: "https://trulyfreetools.com/split-pdf" },
}

export default function SplitPDFPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Splitter
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Split PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Extract pages or split PDFs into individual files. No watermarks. No email. No limits.
          </p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <AdSlot slot="6508089281" format="leaderboard" />
        </div>
        <SplitPDFTool />
        <div style={{ marginTop: 32 }}>
          <AdSlot slot="8942680933" format="rectangle" />
        </div>
      </div>
    </main>
  )
}

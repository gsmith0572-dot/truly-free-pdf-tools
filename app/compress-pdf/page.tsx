import type { Metadata } from "next"
import CompressPDFTool from "@/components/tools/CompressPDFTool"
import AdSlot from "@/components/ads/AdSlot"

export const metadata: Metadata = {
  title: "Compress PDF Free — No Signup, No Watermark | TrulyFree Tools",
  description: "Reduce PDF file size without losing quality. No watermarks. No email. No limits.",
  alternates: { canonical: "https://trulyfreetools.com/compress-pdf" },
}

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Compressor
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Compress PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Reduce PDF file size without losing quality. No watermarks. No email. No limits.
          </p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <AdSlot slot="6508089281" format="leaderboard" />
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          <div style={{ position: "sticky", top: 80 }}>
            <AdSlot slot="8942680933" format="rectangle" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <CompressPDFTool />
          </div>
        </div>
      </div>
    </main>
  )
}

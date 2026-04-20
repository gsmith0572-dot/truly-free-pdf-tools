import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works — Truly Free PDF Tools",
  description: "Technical architecture: how we process PDF files entirely in your browser using WebAssembly, pdf-lib, and PDF.js.",
  alternates: { canonical: "https://trulyfreetools.com/how-it-works" },
}

const steps = [
  {
    step: "01",
    title: "File Selection",
    body: "When you select or drag a PDF into the tool, the browser reads the file into memory using the File API. The file bytes are transferred to a JavaScript ArrayBuffer. No network request is made. The file never leaves your device.",
  },
  {
    step: "02",
    title: "WebAssembly Processing",
    body: "pdf-lib and PDF.js are compiled WebAssembly modules running inside your browser tab. These are the same libraries used in production software — not simplified versions. Compression, page splitting, merging, and password operations all execute here, in local memory.",
  },
  {
    step: "03",
    title: "Output Generation",
    body: "The processed PDF is written to a new ArrayBuffer, converted to a Blob, and a temporary object URL is created. This URL is used to trigger the browser native download. The Blob is revoked from memory immediately after download initiates.",
  },
  {
    step: "04",
    title: "Memory Cleanup",
    body: "When you close the tab or navigate away, all file data is garbage-collected by the browser. There is no localStorage write, no IndexedDB entry, no service worker cache for file data. The session is stateless by design.",
  },
]

const specs = [
  { label: "PDF Engine", value: "pdf-lib 1.17 + PDF.js 4.x" },
  { label: "Runtime", value: "WebAssembly (WASM) in-browser" },
  { label: "Server Calls", value: "None for file processing" },
  { label: "File Transmission", value: "Zero — local only" },
  { label: "Framework", value: "Next.js 15 + TypeScript" },
  { label: "Hosting", value: "Vercel Edge Network" },
  { label: "Max File Size", value: "Device memory limited" },
  { label: "Supported Formats", value: "PDF 1.0 — 2.0" },
]

export default function HowItWorksPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Technical
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          How It Works
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.6 }}>
          Every PDF operation runs in your browser. Here is the exact technical sequence.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {steps.map((s) => (
            <div key={s.step} style={{ background: "#ffffff", borderRadius: 8, padding: "28px 32px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", display: "flex", gap: 24 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0058c3", letterSpacing: "0.04em", minWidth: 28, paddingTop: 2 }}>
                {s.step}
              </span>
              <div>
                <h2 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 8 }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: "28px 32px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 20 }}>
            Technical Specifications
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {specs.map((s) => (
              <div key={s.label} style={{ borderBottom: "1px solid #f1f4f6", paddingBottom: 12 }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", margin: "0 0 4px" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em", color: "#181c1e", margin: 0 }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

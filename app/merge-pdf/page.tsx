import type { Metadata } from "next";
import MergePDFTool from "@/components/tools/MergePDFTool";

export const metadata: Metadata = {
  title: "Merge PDF Free — No Signup, No Watermark | TrulyFree Tools",
  description: "Combine multiple PDF files into one. Free, no watermark, no email required. Files never leave your browser.",
};

export default function MergePDFPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 40, textAlign: "center" }}>
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
            PDF Merger
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Merge PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Combine multiple PDFs into one file. No watermarks. No email. No limits.
          </p>
        </div>
        <MergePDFTool />
      </div>
    </main>
  );
}

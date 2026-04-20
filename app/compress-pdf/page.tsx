import type { Metadata } from "next";
import CompressPDFTool from "@/components/tools/CompressPDFTool";

export const metadata: Metadata = {
  title: "Compress PDF Free — No Signup, No Watermark | TrulyFree Tools",
  description: "Compress PDF files online for free. No email required. No watermarks. Your file never leaves your browser. Reduce PDF size instantly.",
};

export default function CompressPDFPage() {
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
            PDF Compressor
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Compress PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Reduce your PDF file size instantly. No watermarks. No email. No limits.
          </p>
        </div>
        <CompressPDFTool />
      </div>
    </main>
  );
}

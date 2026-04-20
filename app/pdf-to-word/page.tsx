import type { Metadata } from "next";
import PDFToWordTool from "@/components/tools/PDFToWordTool";

export const metadata: Metadata = {
  title: "PDF to Word Free — No Signup, No Email | TrulyFree Tools",
  description: "Convert PDF to editable Word document (.docx) for free. No email required. No watermarks. Files never leave your browser.",
};

export default function PDFToWordPage() {
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
            PDF to Word
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            PDF to Word Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Convert PDF to editable .docx instantly. No watermarks. No email. No limits.
          </p>
        </div>
        <PDFToWordTool />
      </div>
    </main>
  );
}

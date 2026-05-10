import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | TrulyFreeTools",
  description: "TrulyFreeTools is built by George Smith, founder of Klickify Agency. Free PDF tools that process files locally in your browser — no uploads, no accounts, no paywalls.",
};

export default function AboutPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        <div style={{ background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: "8px", padding: "48px 40px", marginBottom: "32px", color: "#fff" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.8, marginBottom: "16px" }}>ABOUT TRULYFREETOOLS</div>
          <h1 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.2 }}>Built for people who are tired of paywalls.</h1>
        </div>

        <div style={{ background: "#fff", borderRadius: "8px", padding: "40px", marginBottom: "24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", marginBottom: "32px" }}>
            <div style={{ flexShrink: 0 }}>
              <Image src="/george-smith.png" alt="George Smith, Founder of TrulyFreeTools" width={96} height={96} style={{ borderRadius: "50%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "4px" }}>FOUNDER</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: "4px" }}>George Smith</div>
              <div style={{ fontSize: "14px", color: "#0058c3", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "8px" }}>Founder, Klickify Agency</div>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="mailto:george@klickifyagency.com" style={{ fontSize: "13px", color: "#718096", textDecoration: "none", letterSpacing: "-0.01em" }}>george@klickifyagency.com</a>
                <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#0058c3", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}>LinkedIn</a>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "16px", color: "#4a5568", lineHeight: "1.75", letterSpacing: "-0.01em" }}>
            <p style={{ marginTop: 0 }}>I built TrulyFreeTools because I was tired of the same pattern: tools that promise "free" and then lock you out after two uses, demand your email, or upload your sensitive documents to a server you know nothing about.</p>
            <p>PDF tools are something people need every day — compressing a resume, merging contracts, removing a password from an old file. These are basic tasks. They should not cost money or require an account.</p>
            <p>Every tool on this site processes your files directly in your browser using WebAssembly. Your documents never leave your device. There is no server receiving your files. No account required. No daily limits. No watermarks. Free forever.</p>
            <p style={{ marginBottom: 0 }}>Klickify Agency builds utility tools that compete on ethics, not dark patterns. TrulyFreeTools is our flagship product in that mission.</p>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "8px", padding: "40px", marginBottom: "24px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>THE TOOLS</div>
          {[
            ["Compress PDF", "Reduce file size without visible quality loss. Works entirely in your browser."],
            ["Merge PDF", "Combine multiple PDFs into one. No file size limits, no watermarks."],
            ["Split PDF", "Extract pages or split a PDF into multiple files instantly."],
            ["PDF to Word", "Convert text-based PDFs to editable Word documents."],
            ["Remove PDF Password", "Unlock password-protected PDFs you own."],
          ].map(([name, desc]) => (
            <div key={name} style={{ display: "flex", gap: "16px", paddingBottom: "16px", marginBottom: "16px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg, #0058c3, #0070f3)", flexShrink: 0, marginTop: "6px" }} />
              <div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: "2px" }}>{name}</div>
                <div style={{ fontSize: "14px", color: "#4a5568", letterSpacing: "-0.01em" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: "8px", padding: "40px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>CONTACT</div>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: "1.7", letterSpacing: "-0.01em", marginTop: 0 }}>For questions, feedback, or partnership inquiries:</p>
          <a href="mailto:george@klickifyagency.com" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none", fontSize: "16px" }}>george@klickifyagency.com</a>
        </div>

      </div>
    </main>
  );
}

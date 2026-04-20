import Link from "next/link";

const tools = [
  {
    slug: "compress-pdf",
    label: "Compress PDF",
    description: "Reduce file size without losing quality. No limits.",
    badge: "Most Popular",
  },
  {
    slug: "merge-pdf",
    label: "Merge PDF",
    description: "Combine multiple PDFs into one file instantly.",
    badge: null,
  },
  {
    slug: "split-pdf",
    label: "Split PDF",
    description: "Extract pages or split a PDF into separate files.",
    badge: null,
  },
  {
    slug: "pdf-to-word",
    label: "PDF to Word",
    description: "Convert PDF to editable .docx without formatting loss.",
    badge: null,
  },
  {
    slug: "remove-pdf-password",
    label: "Remove PDF Password",
    description: "Unlock password-protected PDFs instantly.",
    badge: null,
  },
];

const pillars = [
  "No signup required",
  "No watermarks",
  "No file size limits",
  "Files never leave your browser",
];

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc" }}>

      <section style={{ padding: "80px 24px 64px", textAlign: "center", background: "#f7fafc" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(0,88,195,0.08)",
            color: "#0058c3",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 4,
            marginBottom: 20,
          }}>
            Free PDF Tools
          </div>
          <h1 style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#181c1e",
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            PDF tools that are<br />actually free
          </h1>
          <p style={{
            fontSize: 17,
            color: "#4a5568",
            lineHeight: 1.65,
            marginBottom: 32,
            maxWidth: 460,
            margin: "0 auto 32px",
          }}>
            No watermarks. No email. No limits. Your files never leave your browser.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {pillars.map((p) => (
              <span key={p} style={{
                background: "#ffffff",
                border: "1px solid rgba(74,85,104,0.15)",
                color: "#4a5568",
                fontSize: 12,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 4,
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", background: "#f7fafc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}>
            {tools.slice(0, 3).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            marginTop: 20,
            maxWidth: 580,
            margin: "20px auto 0",
          }}>
            {tools.slice(3).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f1f4f6", padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#181c1e",
            letterSpacing: "-0.03em",
            marginBottom: 12,
          }}>
            Free forever. Not free for 14 days.
          </h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.65 }}>
            Smallpdf and ILovePDF give you 2 tasks per day, then charge you. We built the alternative: every tool, unlimited, always free.
          </p>
        </div>
      </section>

      <footer style={{ background: "#f7fafc", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "#718096", fontSize: 12 }}>
          TrulyFree PDF Tools — Part of the{" "}
          <span style={{ color: "#0058c3", fontWeight: 600 }}>Truly Free</span>{" "}
          ecosystem. Built by{" "}
          <a href="https://klickifyagency.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none" }}>
            Klickify Agency
          </a>
          .
        </p>
      </footer>

    </main>
  );
}

function ToolCard({ tool }: { tool: { slug: string; label: string; description: string; badge: string | null } }) {
  return (
    <Link href={"/" + tool.slug} style={{ textDecoration: "none" }}>
      <div style={{
        background: "#ffffff",
        borderRadius: 8,
        padding: "28px 24px",
        boxShadow: "0px 8px 24px rgba(24,28,30,0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{
            background: "rgba(0,88,195,0.08)",
            borderRadius: 6,
            padding: "5px 10px",
          }}>
            <span style={{ color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
          </div>
          {tool.badge && (
            <span style={{
              background: "rgba(0,88,195,0.08)",
              color: "#0058c3",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 4,
            }}>
              {tool.badge}
            </span>
          )}
        </div>
        <div>
          <h2 style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#181c1e",
            letterSpacing: "-0.02em",
            marginBottom: 6,
          }}>
            {tool.label}
          </h2>
          <p style={{
            fontSize: 13,
            color: "#718096",
            lineHeight: 1.55,
          }}>
            {tool.description}
          </p>
        </div>
        <div style={{ marginTop: "auto" }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #0058c3, #0070f3)",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: 6,
          }}>
            Use tool
          </span>
        </div>
      </div>
    </Link>
  );
}

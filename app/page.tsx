import Link from "next/link";

const tools = [
  {
    slug: "compress-pdf",
    label: "Compress PDF",
    description: "Reduce file size without losing quality. No limits.",
    badge: "Most Popular",
    badgeColor: "#0058c3",
  },
  {
    slug: "merge-pdf",
    label: "Merge PDF",
    description: "Combine multiple PDFs into one file instantly.",
    badge: null,
    badgeColor: null,
  },
  {
    slug: "split-pdf",
    label: "Split PDF",
    description: "Extract pages or split a PDF into separate files.",
    badge: null,
    badgeColor: null,
  },
  {
    slug: "pdf-to-word",
    label: "PDF to Word",
    description: "Convert PDF to editable .docx without formatting loss.",
    badge: null,
    badgeColor: null,
  },
  {
    slug: "remove-pdf-password",
    label: "Remove PDF Password",
    description: "Unlock password-protected PDFs instantly.",
    badge: null,
    badgeColor: null,
  },
];

const pillars = [
  { label: "No signup required" },
  { label: "No watermarks" },
  { label: "No file size limits" },
  { label: "Files never leave your browser" },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc" }}>

      <section style={{ padding: "72px 24px 56px", textAlign: "center", background: "#f7fafc" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
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
            fontSize: 42,
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
            maxWidth: 480,
            margin: "0 auto 32px",
          }}>
            No watermarks. No email. No limits. Your files never leave your browser.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {pillars.map((p) => (
              <span key={p.label} style={{
                background: "#ffffff",
                border: "1px solid rgba(74,85,104,0.15)",
                color: "#4a5568",
                fontSize: 12,
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 4,
              }}>
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", background: "#f7fafc" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={"/" + tool.slug}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: "#ffffff",
                  borderRadius: 8,
                  padding: "24px 20px",
                  boxShadow: "0px 8px 24px rgba(24,28,30,0.06)",
                  transition: "transform 0.12s ease, box-shadow 0.12s ease",
                  cursor: "pointer",
                  height: "100%",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{
                      background: "rgba(0,88,195,0.08)",
                      borderRadius: 6,
                      padding: "6px 10px",
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
                  <h2 style={{
                    fontSize: 16,
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
                    marginBottom: 16,
                  }}>
                    {tool.description}
                  </p>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f1f4f6", padding: "56px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#181c1e",
            letterSpacing: "-0.03em",
            marginBottom: 12,
          }}>
            Free forever. Not free for 14 days.
          </h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.6 }}>
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

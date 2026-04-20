"use client"

import { useState } from "react"

export default function FeedbackPage() {
  const [tool, setTool] = useState("compress-pdf")
  const [rating, setRating] = useState<number | null>(null)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const tools = [
    { value: "compress-pdf", label: "Compress PDF" },
    { value: "merge-pdf", label: "Merge PDF" },
    { value: "split-pdf", label: "Split PDF" },
    { value: "pdf-to-word", label: "PDF to Word" },
    { value: "remove-pdf-password", label: "Remove Password" },
    { value: "general", label: "General" },
  ]

  const handleSubmit = () => {
    if (!rating) return
    const body = encodeURIComponent(`Tool: ${tool}\nRating: ${rating}/5\n\nComment:\n${comment}`)
    const mailto = `mailto:feedback@trulyfreetools.com?subject=${encodeURIComponent(`Feedback: ${tool} — ${rating}/5`)}&body=${body}`
    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", marginBottom: 12 }}>
            Thank you.
          </p>
          <p style={{ fontSize: 15, color: "#4a5568", letterSpacing: "-0.02em", lineHeight: 1.6 }}>
            Your feedback helps us build better tools. We read every submission.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 480, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Support
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Feedback
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.6 }}>
          Tell us what worked and what did not. Two minutes, no account needed.
        </p>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: "36px 36px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase" as const, marginBottom: 10 }}>
                Which tool?
              </label>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                {tools.map(t => (
                  <button
                    key={t.value}
                    onClick={() => setTool(t.value)}
                    style={{
                      padding: "6px 14px",
                      fontSize: 13,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: tool === t.value ? 700 : 400,
                      letterSpacing: "-0.02em",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      background: tool === t.value ? "linear-gradient(135deg, #0058c3, #0070f3)" : "rgba(0,88,195,0.08)",
                      color: tool === t.value ? "#ffffff" : "#0058c3",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase" as const, marginBottom: 10 }}>
                Rating
              </label>
              <div style={{ display: "flex", gap: 10 }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    onClick={() => setRating(n)}
                    style={{
                      width: 44,
                      height: 44,
                      fontSize: 15,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      background: rating === n ? "linear-gradient(135deg, #0058c3, #0070f3)" : "rgba(0,88,195,0.08)",
                      color: rating === n ? "#ffffff" : "#0058c3",
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase" as const, marginBottom: 8 }}>
                Comments (optional)
              </label>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="What worked well? What could be better?"
                rows={4}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  fontSize: 15,
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#181c1e",
                  background: "#f7fafc",
                  border: "1.5px solid rgba(74,85,104,0.15)",
                  borderRadius: 4,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box" as const,
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!rating}
              style={{
                background: rating ? "linear-gradient(135deg, #0058c3, #0070f3)" : "#e5e9eb",
                color: rating ? "#ffffff" : "#718096",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                border: "none",
                borderRadius: 4,
                padding: "12px 24px",
                cursor: rating ? "pointer" : "not-allowed",
                width: "100%",
              }}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import { useState } from "react"
import type { Metadata } from "next"

const metadata = {
  title: "Contact — Truly Free PDF Tools",
  description: "Get in touch with the Truly Free PDF Tools team. Bug reports, feedback, and business inquiries.",
}

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("general")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const inputStyle = {
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
    boxSizing: "border-box" as const,
  }

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    color: "#718096",
    textTransform: "uppercase" as const,
    marginBottom: 8,
  }

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    const body = encodeURIComponent(`Name: ${name}\n\nSubject: ${subject}\n\nMessage:\n${message}`)
    const mailto = `mailto:hello@trulyfreetools.com?subject=${encodeURIComponent(`[${subject}] ${name}`)}&body=${body}`
    window.location.href = mailto
  }

  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Support
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Contact
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.6 }}>
          Bug reports, business inquiries, or feedback. We read everything.
        </p>

        <div style={{ background: "#ffffff", borderRadius: 8, padding: "36px 36px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Subject</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                style={{ ...inputStyle }}
              >
                <option value="general">General inquiry</option>
                <option value="bug">Bug report</option>
                <option value="feedback">Feature feedback</option>
                <option value="business">Business inquiry</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Describe your issue or question in detail."
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {error && (
              <p style={{ fontSize: 13, color: "#dc2626", letterSpacing: "-0.02em", margin: 0 }}>
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              style={{
                background: "linear-gradient(135deg, #0058c3, #0070f3)",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                border: "none",
                borderRadius: 4,
                padding: "12px 24px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Send Message
            </button>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "#718096", letterSpacing: "-0.02em", marginTop: 20, textAlign: "center" }}>
          Or email us directly at{" "}
          <a href="mailto:hello@trulyfreetools.com" style={{ color: "#0058c3", textDecoration: "none" }}>
            hello@trulyfreetools.com
          </a>
        </p>
      </section>
    </main>
  )
}

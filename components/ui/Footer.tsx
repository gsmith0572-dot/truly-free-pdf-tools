"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ background: "#f1f4f6", marginTop: 80, fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
            Company
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="/about" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>About Us</Link>
            <Link href="/how-it-works" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>How It Works</Link>
            <Link href="/feedback" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>Feedback</Link>
            <a href="https://klickify.agency" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>Klickify Agency</a>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
            Legal
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="/privacy" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>Terms of Service</Link>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
            Support
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="/help" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>Help Center</Link>
            <Link href="/contact" style={{ fontSize: 14, color: "#4a5568", textDecoration: "none", letterSpacing: "-0.02em" }}>Contact</Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 32px", borderTop: "1px solid #e5e9eb", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 12, color: "#718096", letterSpacing: "-0.02em", margin: 0 }}>
          2026 Truly Free Tools — Precision Instruments
        </p>
        <p style={{ fontSize: 12, color: "#718096", letterSpacing: "-0.02em", margin: 0 }}>
          Your files never leave your browser.
        </p>
      </div>
    </footer>
  )
}

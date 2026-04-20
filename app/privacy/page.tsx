import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Truly Free PDF Tools",
  description: "We process your files locally in your browser. No uploads, no data collection, no tracking beyond standard analytics.",
  alternates: { canonical: "https://trulyfreetools.com/privacy" },
}

const sections = [
  {
    title: "Files Never Leave Your Browser",
    body: "All PDF processing on Truly Free PDF Tools runs entirely in your browser using WebAssembly technology. Your files are loaded into local memory, processed on your device, and made available for download — without ever being transmitted to any server. We have no technical capability to receive, store, or access your documents.",
  },
  {
    title: "Data We Collect",
    body: "We collect standard anonymous usage analytics through Google Analytics: page views, session duration, and device/browser type. No personally identifiable information is collected. We do not collect names, email addresses, file contents, or behavioral profiles.",
  },
  {
    title: "Advertising",
    body: "This site is monetized through Google AdSense (Publisher ID: ca-pub-8680464039127093). Google may use cookies to serve ads based on prior visits to this and other websites. You can opt out of personalized advertising at google.com/settings/ads. We do not sell user data to advertisers or third parties.",
  },
  {
    title: "Cookies",
    body: "We use functional cookies necessary for site operation and analytics cookies to understand aggregate traffic patterns. Advertising cookies are managed by Google AdSense. No cookies store your file data — files exist only in browser memory during the active session.",
  },
  {
    title: "Third-Party Services",
    body: "We use Google Analytics for traffic measurement and Google AdSense for advertising. Both are governed by Google\'s Privacy Policy at policies.google.com. No other third-party data processors receive information about your usage of this site.",
  },
  {
    title: "Data Retention",
    body: "Because files are processed locally, there is no file data to retain. Analytics data is retained by Google Analytics according to their standard 26-month retention policy. We do not maintain our own user database.",
  },
  {
    title: "Your Rights",
    body: "Under GDPR and CCPA, you have the right to access, correct, or delete personal data we hold. Since we hold no personally identifiable information, there is effectively no personal data to manage. For advertising opt-out, visit the Google Ads Settings page.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be directed to privacy@trulyfreetools.com. We will respond within 5 business days.",
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Legal
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: "#718096", letterSpacing: "-0.02em", marginBottom: 48 }}>
          Last updated: April 21, 2026
        </p>

        <div style={{ background: "linear-gradient(135deg, rgba(0,88,195,0.06), rgba(0,112,243,0.06))", borderRadius: 8, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#0058c3", margin: 0 }}>
            Short version: Your files are processed on your device. We never see them, never receive them, never store them.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 8, padding: "28px 32px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 10 }}>
                {s.title}
              </h2>
              <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

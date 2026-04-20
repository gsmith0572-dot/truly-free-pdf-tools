import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "TrulyFree PDF Tools — Free PDF Compressor, Merger & More",
  description: "Compress, merge, split, and convert PDFs for free. No signup. No watermarks. Your files never leave your browser.",
  metadataBase: new URL("https://trulyfreetools.com"),
  alternates: { canonical: "https://trulyfreetools.com" },
  openGraph: {
    title: "TrulyFree PDF Tools",
    description: "Free PDF tools with zero limits. No signup. No watermarks. Process locally.",
    url: "https://trulyfreetools.com",
    siteName: "TrulyFree PDF Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrulyFree PDF Tools",
    description: "Free PDF tools with zero limits. No signup. No watermarks. Process locally.",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TrulyFree PDF Tools",
  "url": "https://trulyfreetools.com",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Windows, macOS, Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free PDF tools that run entirely in your browser. No signup, no watermarks, no file uploads to servers.",
  "featureList": "Compress PDF, Merge PDF, Split PDF, PDF to Word, Remove PDF Password"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

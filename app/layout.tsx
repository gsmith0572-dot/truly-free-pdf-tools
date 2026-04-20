import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "TrulyFree PDF Tools — Free PDF Compressor, Merger & More",
  description: "Compress, merge, split, and convert PDFs for free. No signup. No watermarks. Your files never leave your browser.",
  metadataBase: new URL("https://trulyfreetools.com"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

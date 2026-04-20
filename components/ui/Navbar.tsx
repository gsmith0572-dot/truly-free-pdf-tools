"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/compress-pdf", label: "Compress" },
  { href: "/merge-pdf", label: "Merge" },
  { href: "/split-pdf", label: "Split" },
  { href: "/pdf-to-word", label: "PDF to Word" },
  { href: "/remove-pdf-password", label: "Unlock" },
];

export default function Navbar() {
  return (
    <header style={{
      background: "#ffffff",
      boxShadow: "0px 1px 0px rgba(74,85,104,0.10)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="TrulyFree PDF Tools"
            width={180}
            height={48}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "#4a5568",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

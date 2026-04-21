"use client"
import { useEffect } from "react"

const ADSENSE_ENABLED = false

interface AdSlotProps {
  slot: string
  format: "leaderboard" | "rectangle"
}

const dimensions: Record<AdSlotProps["format"], { width: number; height: number }> = {
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
}

export default function AdSlot({ slot, format }: AdSlotProps) {
  const { width, height } = dimensions[format]

  useEffect(() => {
    if (!ADSENSE_ENABLED) return
    try {
      const adsbygoogle = (window as any).adsbygoogle
      if (adsbygoogle) adsbygoogle.push({})
    } catch {}
  }, [])

  if (!ADSENSE_ENABLED) {
    return (
      <div style={{
        width: "100%",
        maxWidth: width,
        height,
        background: "#e5e9eb",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#718096",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        margin: "0 auto",
      }}>
        Advertisement
      </div>
    )
  }

  return (
    <div style={{ width: "100%", maxWidth: width, margin: "0 auto", overflow: "hidden" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width, height }}
        data-ad-client="ca-pub-8680464039127093"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

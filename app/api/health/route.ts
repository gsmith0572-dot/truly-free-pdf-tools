import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    site: "trulyfreetools.com",
    timestamp: new Date().toISOString(),
  })
}

# KLICKIFY AGENCY — MASTER LAUNCH PLAYBOOK
## George + Claude — Living Document
### Last Updated: April 21, 2026

---

## PHILOSOPHY

We build precision instruments. Utility websites with millions of monthly searches where market leaders use predatory bait-and-switch models. We attack the pain point, we own the ethical position, we monetize with AdSense only.

Core principles that never change:
- Zero friction: no registration, no email, no credit card ever
- Radical transparency: what is free today is free in five years
- Privacy by design: client-side processing whenever technically possible
- Industrial speed: Core Web Vitals perfect, sub-700ms response times

---

## PHASE 0 - STRATEGIC VALIDATION

Before writing a single line of code, validate the opportunity:

Market criteria checklist:
- Search volume: minimum 300K monthly searches on head term
- Competitor model: must be bait-and-switch (free tier that hits a wall)
- Technical feasibility: can the core operation run client-side?
- CPM projection: minimum $4 CPM at month 12 to justify build

Keyword research framework:
- Head term: "[tool name] free" - primary SEO target
- Pain keywords: "[tool] no signup", "[tool] no watermark", "[tool] no email", "[tool] no limit"
- Competitor keywords: "[competitor] alternative free", "[competitor] free without subscription"
- Privacy keywords: "[tool] without uploading", "[tool] browser only", "[tool] locally"

Competitor analysis:
- Document their pricing (exact dollar amounts - use in copy)
- Document their daily/monthly limits
- Document their data practices (do they upload files to servers?)
- These become our attack surface in all marketing copy

---

## PHASE 1 - DOMAIN AND INFRASTRUCTURE

Domain:
- Buy on Cloudflare Registrar (same platform as DNS - cleaner workflow)
- Apex domain is primary, www always redirects to apex with 308
- SSL: Cloudflare Full mode
- Never use www as primary

DNS configuration:
- Cloudflare DNS proxied (orange cloud) for all A/CNAME records
- Vercel handles SSL certificate automatically when Cloudflare is in Full mode
- next.config.ts stays empty - all routing in Vercel dashboard

Hosting:
- Vercel - automatic deploys from GitHub main branch
- Deploy workflow: sync.sh script handles git add + commit + push
- Never deploy manually - always through sync.sh

GitHub:
- Repo under gsmith0572-dot/[project-name]
- Branch: main only
- Public repo

---

## PHASE 2 - TECH STACK

Standard stack (no backend needed - client-side tools):
  Framework:    Next.js (latest) + TypeScript
  Styling:      Tailwind CSS
  Hosting:      Vercel
  DNS/SSL:      Cloudflare
  Monetization: Google AdSense (ca-pub-8680464039127093)

Extended stack (when server-side features required):
  Database:     Supabase (PostgreSQL) - for user data, analytics
  Cache:        Redis (Upstash) - for sub-5ms redirects, rate limiting
  Auth:         Supabase Auth - if user accounts needed
  Storage:      Supabase Storage or Cloudflare R2 - for file persistence
  VPS:          DigitalOcean or Railway - only if Node.js server required

When to use what:
- Client-side tools (PDF, image, text processing): no backend needed - WebAssembly + pdf-lib + canvas API
- Dynamic QR codes, URL shorteners: need Redis for redirects + PostgreSQL for data
- User dashboards: need Supabase Auth + PostgreSQL
- File storage beyond session: need Supabase Storage or R2

Key libraries by tool type:
- PDF tools: pdf-lib (manipulation) + pdfjs-dist (rendering) - always use legacy build for pdfjs
- Image tools: Canvas API + sharp (server) or jimp (client)
- QR codes: qrcode library
- ZIP files: jszip

---

## PHASE 3 - DESIGN SYSTEM (TECHNICAL MINIMALIST)

This design system applies to every project without exception.

Core rules:
- No-Line Rule: Never use borders to separate sections. Use tonal layering instead.
- Tonal Layering: #f7fafc to #f1f4f6 to #e5e9eb to #ffffff
- Zero Fluff: Every element must have function. No decoration for decoration.
- No emojis anywhere - use SVG for all icons and graphics

Colors:
  Brand gradient:   linear-gradient(135deg, #0058c3, #0070f3)
  Background base:  #f7fafc
  Surface low:      #f1f4f6
  Surface lowest:   #e5e9eb
  White:            #ffffff
  Text primary:     #181c1e
  Text secondary:   #4a5568
  Text muted:       #718096
  Brand blue:       #0058c3
  Brand blue light: #0070f3
  Success:          #16a34a
  Error:            #dc2626
  Outline:          rgba(74,85,104,0.15)

Typography:
- Font: Inter (Google Fonts)
- Tracking: -0.02em on all text
- Labels ALL-CAPS: tracking 0.08em, weight 600, size 10-11px
- Headings: weight 700, tracking -0.03em to -0.04em

Border radius:
- Small components (badges, inputs, buttons): 4px
- Cards and panels: 8px
- Never more than 8px

Shadows:
- Float shadow: 0px 8px 24px rgba(24,28,30,0.06) - only for elements floating above content
- Ad containers: box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)

CTAs:
- Primary: background linear-gradient(135deg, #0058c3, #0070f3), white text, weight 700
- Secondary: background rgba(0,88,195,0.08), color #0058c3, border rgba(0,88,195,0.2)

---

## PHASE 4 - SEO BACKBONE (NON-NEGOTIABLE)

Every page must have all of the following before launch:

Technical SEO:
- title - keyword-rich, under 60 characters
- meta description - under 160 characters, includes pain keyword
- Canonical tag on every page
- robots.txt - Allow all, point to sitemap
- sitemap.xml - dynamic, includes all URLs with priorities
- next.config.ts - always empty (routing in Vercel)

Schema.org JSON-LD:
- Homepage/layout: SoftwareApplication with price 0, operatingSystem Web Browser
- Tool pages: FAQPage with minimum 4 questions targeting pain keywords
- About page: Organization schema

Sitemap priorities:
  Homepage:          priority 1.0, changeFrequency weekly
  Tool pages:        priority 0.9, changeFrequency monthly
  pSEO pages:        priority 0.8, changeFrequency monthly
  Help/How-it-works: priority 0.7, changeFrequency monthly
  About:             priority 0.6, changeFrequency yearly
  Trust pages:       priority 0.5, changeFrequency yearly

pSEO pages (minimum 10 at launch):
- [tool] without uploading to server
- [tool] free no watermark
- [tool] free no account
- [tool] free no email
- [tool] free no subscription
- [competitor A] alternative free
- [competitor B] alternative free
- [tool] private browser only
- [tool] free no limit
- free [tool] tools no subscription

Each pSEO page must have: H1 with keyword, FAQ Schema, CTA to main tool, Free forever section.

---

## PHASE 5 - TRUST PAGES (ADSENSE REQUIREMENT)

These 7 pages are mandatory for AdSense approval. Create before applying.

1. /about - Mission, who built it, technical differentiation
2. /privacy - Emphasize client-side processing, no data collection
3. /terms - FREE FOREVER guarantee, no credit card clause
4. /help - FAQ with 10+ questions, FAQ Schema for SEO
5. /contact - Mailto-based form, no backend needed
6. /feedback - Simple rating + mailto submission
7. /how-it-works - Technical architecture, builds E-E-A-T

Footer structure - always 3 columns:
- Company: About, How It Works, Feedback, Klickify Agency link
- Legal: Privacy Policy, Terms of Service
- Support: Help Center, Contact

---

## PHASE 6 - MONETIZATION (ADSENSE)

Publisher ID: ca-pub-8680464039127093 (George account - use for all projects)

Application process:
1. Build all 7 trust pages first
2. Get at least 10 real pages of content indexed
3. Add AdSense snippet to layout.tsx head section
4. Submit site for review at adsense.google.com
5. Wait 1-14 days for approval email

AdSlot strategy (standard placement):
- Leaderboard (728x90): above H1 on tool pages — slot varies per project
- Rectangle (300x250): left sidebar, sticky, next to tool — slot varies per project
- ADSENSE_ENABLED = false in AdSlot component until approval arrives
- AdSlot placeholder: background #e5e9eb, no borders, border-radius 8px

What NOT to do:
- No interstitials, no pop-ups, no ads that block the tool workflow
- No clicking your own ads ever
- No incentivizing users to click ads

---

## PHASE 7 - FAVICON AND BRANDING

Favicon generation rule (learned the hard way):
- Source file: always app/icon.png - the correct logo for THIS project
- Generate app/favicon.ico from app/icon.png using Pillow:

  from PIL import Image
  img = Image.open('app/icon.png').convert('RGBA')
  img.save('app/favicon.ico', format='ICO', sizes=[(64,64),(32,32),(16,16)])

- NEVER copy favicon.ico from another project - always check MD5
- File-based App Router only - never configure icons in layout.tsx metadata
- Verify in incognito window after deploy

---

## PHASE 8 - UPTIME MONITORING (MANDATORY FOR ALL PROJECTS)

Every project gets all three layers of monitoring before launch.

Layer 1 - API Health Endpoint (app/api/health/route.ts):
  import { NextResponse } from "next/server"
  export async function GET() {
    return NextResponse.json({
      status: "ok",
      site: "[domain]",
      timestamp: new Date().toISOString(),
    })
  }

Layer 2 - UptimeRobot:
- Create free account at uptimerobot.com
- Add monitor for https://[domain]/api/health
- Add monitor for homepage https://[domain]
- Alert: email to hello@[domain]
- Check interval: every 5 minutes

Layer 3 - Local cron script (check-[site].sh):
- Script checks all critical URLs, logs results, emails on failure
- Install: (crontab -l; echo "*/5 * * * * /bin/bash ~/check-[site].sh") | crontab -

Critical URLs to monitor on every project:
- Homepage
- All tool/feature pages
- /sitemap.xml
- /robots.txt
- /api/health
- /about, /privacy, /terms

---

## PHASE 9 - GSC AND INDEXATION

1. Add property in Google Search Console (Domain type, not URL prefix)
2. Verify via DNS TXT record in Cloudflare
3. Submit sitemap: https://[domain]/sitemap.xml
4. After adding new pages: use URL Inspection + Request Indexing for each
5. Monitor Coverage report weekly for first month

---

## PHASE 10 - DISTRIBUTION (GUERRILLA LAUNCH)

Week 1 (launch day):
- Product Hunt: submit listing with exact pricing of competitors in description
- Fazier: submit at fazier.com
- Viberank: submit at viberank.co
- AlternativeTo: list as alternative to main competitors (requires 7-day old account)

Week 2-4 (organic growth):
- Reddit: find threads where users complain about competitor limits
  Search: site:reddit.com "[competitor]" "limit" OR "paywall"
  Target subreddits: r/productivity, r/software, r/privacy, r/selfhosted, r/freelance, r/smallbusiness
  Comment organically - never spam, max 3-4 comments per day, vary copy
  Wait minimum 2 weeks between projects to avoid account flags

Reddit comment framework:
- Lead with the user pain ("I had the same issue with [competitor]...")
- Mention the technical differentiator (WebAssembly, no upload, browser-only)
- Drop the URL naturally at the end
- Never use the same copy twice

Ongoing:
- Monitor GSC for new keyword opportunities
- Add pSEO pages for any high-volume queries appearing in Search Console
- Respond to Product Hunt comments within 24 hours

---

## PHASE 11 - CODE QUALITY STANDARDS

Terminal-only workflow:
- All files via python3 scripts written to /tmp/ first, never heredocs in zsh
- Never use ! in strings inside python3 -c (zsh history expansion)
- Never open editors - all code delivered as terminal commands
- No inline comments in code anywhere in codebase

TypeScript rules:
- Always cast Uint8Array to ArrayBuffer for Blob: new Blob([bytes.buffer as ArrayBuffer])
- Components with any event handlers: must have "use client" directive
- pdfjs-dist: always dynamic import inside function, never top-level import
- pdfjs-dist: always use legacy build pdfjs-dist/legacy/build/pdf.mjs

Deployment verification (after every large deploy):
  find ~/[project]/app -type f | sort
  curl -s -o /dev/null -w "%{http_code}" https://[domain]/[page]

After every session:
- Run health check script
- Update Claude memory with session changes
- Generate CSO rundown for NotebookLLM sync

---

## ACTIVE PROJECTS

TrulyFreeQR        | trulyfreeqr.com    | Live | AdSense Pending | GSC Submitted
TrulyFreePDFTools  | trulyfreetools.com | Live | AdSense Pending | GSC Submitted

---

## PIPELINE - NEXT PROJECTS TO EVALUATE

Candidates must score 3/3: volume (300K+/mo), predatory competitor, client-side feasible.

- Image Compressor: TinyPNG has paywall, 20 images/mo limit. Canvas API. High CPM.
- Video to GIF: Ezgif.com has limits. FFmpeg.wasm runs in browser. Growing volume.
- Background Remover: Remove.bg charges per image. TensorFlow.js browser inference.
- Color Palette Generator: Adobe Color requires account. Pure JS, instant.
- Invoice Generator: Strong moat needed, KD high. Lower priority.

---

## ECOSYSTEM BRAND VOICE

Tone: Technical authority. Industrial. Zero fluff.

Copy that works:
- "Your files never leave your browser."
- "No watermarks. No email. No limits."
- "Free forever. Not free for 14 days."
- "Process locally. Download instantly."
- "[Competitor] charges $[X]/year. We charge nothing."

Copy to avoid:
- "Amazing", "incredible", "powerful", "game-changing"
- Anything that sounds like a generic startup
- Emojis in primary copy
- Passive voice

---

This document is maintained by George (Klickify Agency) and Claude (Lead Engineer).
Update after every project launch.

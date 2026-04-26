# borc.ee — Baltic Online Research Company

Marketing website for BORC. Next.js 15 (App Router) + TypeScript + Tailwind CSS.

Dark editorial theme, single-page with anchor navigation. All content in English.

---

## Stack

- **Next.js 15** (App Router, RSC)
- **TypeScript**
- **Tailwind CSS**
- **Fonts**: Instrument Serif (display) + Inter (body) + JetBrains Mono (meta), all via `next/font/google`
- **Hosting**: Vercel (auto-deploy from `main`)

---

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

1. Push this repo to GitHub (`klavs-dot/borc.ee`)
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo
3. Framework preset: **Next.js** (auto-detected)
4. No environment variables needed
5. Deploy

Once deployed, add the `borc.ee` domain:

- Vercel → Project → Settings → Domains → add `borc.ee` and `www.borc.ee`
- Point DNS A record (or nameservers) to Vercel as instructed by the dashboard
- `.ee` domains can take a few minutes to propagate

---

## Structure

```
/app
  layout.tsx         # fonts, metadata, <html>
  page.tsx           # composes all sections
  globals.css        # base styles, grain texture, animations
/components
  Nav.tsx
  Hero.tsx
  Intro.tsx
  Services.tsx                   # 8 core services
  QuantMethods.tsx               # CAWI/CATI/CAPI/MOBI + 8 analytical techniques
  QualMethods.tsx                # 8 qualitative methods
  SpecializedCapabilities.tsx    # 8 specialised areas
  BalticExpertise.tsx            # Latvia / Lithuania / Estonia breakdowns
  ResearchPanel.tsx              # 6 panel quality principles
  Process.tsx                    # 7-stage project flow
  Standards.tsx                  # ESOMAR, GDPR, ethics
  FAQ.tsx                        # 12 expandable Q&A
  Contact.tsx                    # email CTAs
  Footer.tsx
/public                          # static assets (empty for now)
```

---

## Content — what to customise

Everything in this site is methodologically factual and cannot get BORC in
trouble if fielded without edits. Things to fill in when real info is available:

- **Contact emails**: `hello@borc.ee`, `partners@borc.ee`, `panel@borc.ee` — set up forwarding or mailboxes
- **Company registration info** in footer (add when incorporated: Reg Nr., VAT, legal address)
- **Privacy / Cookie policy / Terms** pages — currently stub links in footer
- **Real panel numbers**, years in business, client logos — intentionally left out to avoid fabrication
- **Case studies** — add when they exist

---

## Design tokens

Colours, fonts, spacing all live in `tailwind.config.ts`:

- `bg` / `bg.subtle` / `bg.raised` — background layers (near-black warm)
- `ink` / `ink.muted` / `ink.dim` / `ink.faint` — text hierarchy (warm whites)
- `accent` — orange `#D96C3A` (matches the reference screenshot)
- `rule` — divider hairlines

---

## Notes

- Single HTML page; no routing beyond anchors. Add `/app/<route>/page.tsx` when you need more pages (Privacy, Careers, Case studies).
- FAQ accordion is client-side only — the rest is server components.
- No analytics, no cookies, no tracking — add Plausible/Umami/GA later if needed.
- No contact form — direct mailto CTAs. Add a form + API route when you want lead capture.

@AGENTS.md

# Buzz Kill Mosquito Solutions — Website Project

## Business Context
- **Company**: Buzz Kill Mosquito Solutions (buzzkillms.com)
- **Owner**: Stuart (Stu) Golden — 30+ yrs service industry, founded after personal frustration with ineffective mosquito solutions
- **Location**: Schaumburg, IL — serves Chicagoland suburbs (Buffalo Grove, Glenview, Lake Forest, etc.)
- **Phone**: 224-339-8100
- **Season**: April–October

## Services
Mosquito control, tick control, flea control, seasonal program (every 21-25 days), one-time event treatment, commercial (restaurants, parks, municipalities)

## Design System
- **Primary**: `forest` (#2D6A2D) — buttons, links, accents
- **Secondary**: `amber` (#F5A623) — highlights, badges, CTAs
- **Background**: `offwhite` (#F9F7F2)
- **Text**: `charcoal` (#1A1A1A)
- **Card bg**: `palegreen` (#E8F5E8)
- **Display font**: Montserrat (var(--font-display))
- **Body font**: Inter (var(--font-body))

## Tone
Casual-confident. Friendly but expert. Local and personal.
- ✓ "Take back your backyard." not "We provide mosquito abatement services."
- ✓ "Gone in 30 minutes. Protected for 21 days."
- ✓ "Stu answers the phone himself."

## Primary CTA
"Get a Free Estimate" → phone 224-339-8100 or contact form

## Page Structure (Homepage)
1. Navigation
2. Hero — problem + dual CTA
3. Trust Bar — EPA Registered · Pet Safe · 21-Day Protection · Guaranteed
4. Services — 6 cards (Mosquito, Tick, Flea, Seasonal, Events, Commercial)
5. How It Works — 3 steps
6. Stats — 21 days · 30 min safe after treatment · 30+ yrs experience
7. Testimonials — 4-5 quotes
8. About / Stu — founder story + photo
9. FAQ — 6-8 Q&A pairs
10. Final CTA
11. Footer

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- next/font (self-hosted Google Fonts)
- Deployed on Vercel

## File Conventions
- Components: `components/[Name].tsx`
- Images: `public/images/[section]/filename.png`
- Copy data: `lib/copy/[section].ts`

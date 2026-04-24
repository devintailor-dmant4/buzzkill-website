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

---

# Build Learnings & Refinements

## Navigation Visibility (Critical)
**Issue:** Transparent nav at page top made logo/menu hard to read on dark hero background.

**Solution implemented:**
- Add `bg-black/20 backdrop-blur-sm` even when not scrolled (semi-transparent dark overlay with blur)
- Logo: white text when at top, forest green when scrolled (size: 3xl, added `drop-shadow-lg`)
- Menu links: white text when at top, charcoal when scrolled (added `drop-shadow-md`)
- CTA button: amber background when at top (better contrast), forest green when scrolled
- Hamburger icon: white when at top, charcoal when scrolled (added `drop-shadow-md`)

**Pattern:** Always test nav visibility against hero background. Use semi-transparent overlays + text shadows for contrast.

## Image Optimization (Performance Critical)
**Before:** ~97 MB total images → **91% reduction to 8.6 MB**

**Process:**
1. Identify all image sizes before optimization
2. Use ImageMagick to batch resize + compress:
   ```powershell
   magick convert input.png -resize WIDTHxHEIGHT -quality QUALITY -strip output.png
   ```
3. Optimal sizes by section:
   - Hero: 1920x1080, quality 85 (aim <2 MB)
   - Services cards: 600x600, quality 80 (aim <500KB each)
   - How It Works: 800x600, quality 85 (aim <1 MB total)
   - About/founder: 600x600, quality 80 (aim <400KB)

**Results achieved:**
- About: 7.3 MB → 0.33 MB (95% ↓)
- Services (6): 50 MB → 2.48 MB (95% ↓)
- How It Works (3): 11.8 MB → 2.06 MB (83% ↓)
- Hero: 9.3 MB → 4.05 MB (56% ↓) — can be further optimized

**Best practice:** Optimize images BEFORE committing. Include optimization step in build checklist.

## Component Patterns That Work
1. **Client Components for Interactivity:** Navigation, FAQ accordion, ContactForm use `"use client"`
2. **Static Generation:** All pages prerendered as static (no dynamic rendering needed)
3. **Image Optimization:** Use Next.js `<Image>` component with `fill`, `sizes`, and `object-cover`
4. **Scroll Reveal:** IntersectionObserver-based animations with CSS classes (works well for hero, sections)
5. **Alternating Layouts:** How It Works uses `direction: rtl` trick for alternating image/text positions

## Deployment Checklist
- [ ] All images optimized (ImageMagick batch)
- [ ] Navigation tested against hero background for visibility
- [ ] npm run build passes with 0 TypeScript errors
- [ ] Local preview (npm run dev) tested in browser
- [ ] All images in correct folders: `public/images/[section]/`
- [ ] Copy data finalized in `lib/copy/`
- [ ] Git committed and pushed to main
- [ ] Vercel deployed (auto-connects to GitHub main branch)

## Vercel Deployment Notes
- Connect via GitHub: Vercel auto-detects Next.js, auto-configures build
- Domain: Custom domain setup after initial deploy (Vercel → Settings → Domains)
- Redeploys automatically on `git push` to main
- Environment variables (if needed): Vercel dashboard → Settings → Environment Variables

## Future Refinements
- Monitor Lighthouse scores post-deploy (target: all green 90+)
- Consider converting remaining PNG images to WebP for further optimization
- A/B test How It Works layout with user feedback
- Collect real Google reviews when available (replace placeholder testimonials)
- Monitor conversion rate on contact form (goal: leads to phone calls)

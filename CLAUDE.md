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

## Build Process (Refined Template)

### Phase 1: Content Preparation (DO THIS FIRST)
Before writing any code, gather all content and images:

**Images Required (Specify upfront):**
1. **Hero section** — 1 large background image (1920x1080+)
2. **Services section** — 6 service cards (600x600 each, if 6 services)
3. **How It Works section** — Images for EACH step (critical: don't skip this!)
   - Step 1 (Call): image of person calling/phone
   - Step 2 (Treatment): image of technician treating
   - Step 3 (Result): image of family enjoying backyard
4. **About/Founder section** — 1 founder photo (600x600)
5. **Optional:** Testimonial avatars, trust badges, icons

**✅ KEY RULE:** Always ask for How It Works images upfront. Section design requires visual storytelling.

**Copy Content Required:**
- All page copy (hero headline, service descriptions, etc.)
- Testimonials (at least 4 quotes or placeholders)
- FAQ questions & answers (6-8 pairs minimum)
- Business contact info (phone, address, service areas)

### Phase 2: Design System Approval
- Confirm brand colors, fonts, tone
- Approve page structure (which sections, in which order)
- Validate all copy and messaging

### Phase 3: Build (In This Order)
1. Create repo, install dependencies
2. Set up design system (colors, fonts in CSS)
3. Build all components (Navigation, Hero, Services, etc.)
4. Place all images in correct folders
5. **Optimize images with ImageMagick** (do NOT skip — 90%+ file reduction)
6. Test locally (npm run dev)
7. Commit & push to GitHub
8. Deploy to Vercel

### Phase 4: Testing Before Deployment
- [ ] npm run build passes (0 errors)
- [ ] Local preview tested (npm run dev)
- [ ] Navigation visible on all screen sizes
- [ ] All images load and display correctly
- [ ] Mobile responsiveness checked
- [ ] Forms submit without errors
- [ ] Links work (internal & external)
- [ ] Lighthouse score 90+ (performance, accessibility, SEO)

---

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

---

# Using This Template for the Next Website

## Copy This Entire Folder Structure
```
buzzkill-website/
├── app/                      (Next.js app router)
├── components/               (all reusable React components)
├── lib/
│   └── copy/                (all page content/copy files)
├── public/images/
│   ├── hero/
│   ├── services/
│   ├── how-it-works/        (CRITICAL: create this folder)
│   ├── about/
│   └── testimonials/
├── CLAUDE.md                (this file - update business context)
└── package.json
```

## For Next Website: Quick Start

### 1. Update Business Context (Top of CLAUDE.md)
```markdown
## Business Context
- **Company**: [New Company Name]
- **Owner**: [Owner Name]
- **Location**: [Location]
- **Phone**: [Phone]
- **Services**: [List services]
```

### 2. Update Design System (if different colors/fonts)
```markdown
## Design System
- **Primary**: [color] — buttons, links, accents
- **Secondary**: [color] — highlights, badges, CTAs
- (keep rest the same if using same color scheme)
```

### 3. Update Page Structure (if different sections)
Modify the list based on which sections the new website needs.
**Always include:**
- Navigation (use existing component)
- Hero
- How It Works (if applicable — ask for images!)
- Footer (use existing component)

### 4. Content Gathering Checklist
Before building, use this checklist:
```
Image Requirements for [Company Name]:
□ Hero image (1920x1080+, <2MB after optimization)
□ How It Works images (if applicable) — 1 image per step
□ Service/product images (if applicable)
□ About/founder image (if applicable)
□ Copy for all sections
□ Testimonials (4+ minimum)
□ FAQ questions & answers
```

### 5. Build Process
Follow the "Build Process" section above exactly.

### 6. ImageMagick Optimization (Don't Skip!)
Use the same ImageMagick commands:
```powershell
# For your images, adjust dimensions as needed:
magick convert input.png -resize WIDTHxHEIGHT -quality QUALITY -strip output.png
```

### 7. Component Reuse
**Ready-to-reuse components:**
- `Navigation.tsx` — update phone, links, CTA
- `Footer.tsx` — update company info
- `ContactForm.tsx` — update form fields as needed
- `FAQ.tsx` — reusable accordion pattern
- `Hero.tsx` — update copy/image

**Components to rebuild:**
- `Services.tsx` — if different number/type of services
- `HowItWorks.tsx` — if different process steps
- `About.tsx` — specific to company/founder story

---

## Lessons Applied to Every Build

| Lesson | Action | Result |
|--------|--------|--------|
| **Ask for images upfront** | Request all images before building How It Works section | No mid-build delays |
| **Optimize early** | Run ImageMagick after placing images, before committing | 90%+ file reduction, faster load |
| **Test nav visibility** | Test against dark hero background | Good UX, legible navigation |
| **Use static generation** | Keep all pages static (no dynamic rendering) | Faster builds, better performance |
| **Scroll reveal animations** | Use IntersectionObserver pattern | Smooth, performant animations |

---

## Git Workflow for Next Website

```powershell
# Create new repo
git init
git add .
git commit -m "Initial commit: [Company Name] website"
git remote add origin https://github.com/[user]/[repo].git
git push -u origin main

# After each phase
git add .
git commit -m "Phase description"
git push origin main

# Deploy
# Go to Vercel → Import Git → Select repo → Deploy
```

---

## Customization Hints for Next Website

**If changing colors:**
- Update `app/globals.css` `@theme inline` colors
- Update brand colors in CLAUDE.md Design System
- Components reference color names (e.g., `text-forest`, `bg-amber`)

**If changing fonts:**
- Update `app/layout.tsx` font imports
- Keep --font-display for headlines, --font-body for body text

**If different page structure:**
- Edit `app/page.tsx` to remove/reorder sections
- Keep components you don't use (they don't add build size)

**If different number of services:**
- Copy `lib/copy/services.ts` pattern
- Update `components/Services.tsx` to loop through updated data

---

## Success Metrics (Post-Deployment)

Check these 1 week after launch:

```
□ Lighthouse scores (target: 90+ all categories)
□ Page load time (target: <3s on 4G)
□ Mobile responsiveness (test on iPhone 12, Android)
□ Form submissions working
□ No console errors
□ Social sharing preview (check meta tags)
□ Google indexing (Check Search Console)
```

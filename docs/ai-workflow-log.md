# AI Workflow Log — CHEEK Website Build

## How to read this log
Each entry documents a significant AI interaction during development.
I record what I asked, what I got, what I changed, and what I learned.

---

### Entry #1 — [DATE OF OUR FIRST CONVERSATION]
**Task:** Project planning — tech stack, architecture, website requirements, development roadmap
**Tool used:** Claude Opus 4.6

**What I asked (summary):** 
I provided comprehensive documentation about my fashion brand CHEEK (business plan, target audience, competitors, products, pricing, sales channels, marketing strategy) and asked for a thorough plan for rebuilding my website.

**What it gave me:**
- Complete project plan broken into phases (setup, logo design, UX design, development sprints, documentation)
- Tech stack recommendation (Next.js, TypeScript, PostgreSQL, Prisma, Stripe, OpenAI API)
- Detailed database schema
- File/folder structure
- GitHub documentation strategy
- List of all deliverables
- Sprint-by-sprint build order

**What was good:**
- The overall structure and phasing made sense
- Tech stack reasoning was solid — especially the argument for Next.js over plain React
- The deliverables list gave me a clear picture of what I'm working towards

**What was wrong or I need to reconsider:**
- The amount of information was overwhelming — I needed it broken into smaller chunks
- The original tech stack suggestion included some tools I haven't used (TypeScript, Prisma) — I flagged this and got a more realistic assessment of the learning curve
- The timeline assumed more available hours than I may have while job hunting
- Some features are over-engineering for my current needs
- I haven't independently verified all the tech recommendations yet

**Decisions I made based on this session:**
- Chose Next.js + TypeScript + Tailwind + PostgreSQL stack
- Committed to the documentation-first approach
- Will learn TypeScript and Prisma as I build rather than studying them separately first
- Remove unneccessary overly complicated engineering
- Adopted the conventional commits strategy

**What I learned:**
- Server-side rendering is important for e-commerce SEO and that
  a plain React SPA won't rank on Google
- Architecture Decision Records (ADRs) are a real industry practice for documenting technical choices

**Time saved estimate:** 
This planning phase would have taken me 2-3 days of research to reach similar conclusions. The AI session took ~2 hours of back-and-forth. Estimated saving: 
~12-15 hours. However, I need to verify recommendations independently rather than accepting them at face value.

---

### Entry #2 — [DATE OF BUILD SESSION]
**Task:** Project initialisation, layout components 
(header, footer, mobile navigation), page routing
**Tool used:** Claude (via Outlier Model Playground)

**What I asked (summary):**
Step-by-step instructions for setting up the Next.js 
project, creating the component structure, building 
responsive header/footer, and creating placeholder 
page routes.

**What it gave me:**
- Exact terminal commands for project setup
- Complete component code: Header.tsx, MobileMenu.tsx, 
  Footer.tsx
- Layout wrapper configuration
- Navigation data structure (constants file)
- 7 placeholder page files
- TypeScript mini-primer

**What was good:**
- Code worked on first run with no errors
- Good separation of concerns (nav data in constants, 
  components in their own files)
- Mobile menu animation with Framer Motion was smooth
- The TypeScript primer was pitched at exactly my level 
  — just enough to understand the code without 
  overwhelming theory

**What was wrong or I changed:**
- [FILL THIS IN — did you change anything? Did any 
  colours feel wrong? Did you adjust any text?]
- The styling is all placeholder — colours are generic 
  pink/gray, not CHEEK's actual brand palette
- Newsletter form doesn't actually submit anywhere yet
- "CHEEK" is just text, not the real logo
- [ADD anything else you noticed]

**What I need to verify/learn independently:**
- I need to properly understand the "use client" vs 
  server component distinction — I accepted the 
  explanation but should read the Next.js docs on this
- I should understand what every Tailwind class in the 
  components does rather than treating them as a block
- The Framer Motion AnimatePresence pattern — I want to 
  understand how exit animations work

**Decisions I made:**
- Kept the component structure as suggested
- [Did you change anything? Add it here]

**What I learned:**
- Next.js App Router uses folder-based routing — each 
  folder with a page.tsx becomes a URL route
- usePathname() hook for detecting current route
- Framer Motion's AnimatePresence handles mount/unmount 
  animations
- The flex-col min-h-screen + flex-1 pattern for 
  sticky footers

**Time saved estimate:**
Writing these components from scratch with docs 
reference: ~3-4 hours. With AI guidance: ~1.5 hours. 
Saving: ~2 hours. But I moved too fast and skipped 
documentation, so I'm spending time now catching up — 
net saving is probably ~1 hour.

---
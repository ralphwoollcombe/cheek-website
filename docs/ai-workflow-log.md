# AI Workflow Log — CHEEK Website Build

## How to read this log
Each entry documents a significant AI interaction during development.
I record what I asked, what I got, what I changed, and what I learned.

---

### Entry #1
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

### Entry #2
**Task:** Project scaffolding: Layout components (Header/Footer), navigation, and routing.
**Tool used:** Claude

**What I asked (prompt):**
"""
I am building a full-stack e-commerce site for "CHEEK" (queer fashion brand) using Next.js 14, TypeScript, and Tailwind. 
Please provide:
Can you outline the components I should initiate first.
Constraints: Use Tailwind, keep components modular.
Scope: Layout structure only; use placeholder styling.

**Key Outputs:**
- Scaffolded project structure (Header, Footer, MobileMenu, constants).
- Next.js App Router setup for 7 placeholder pages.
- Functional responsive navigation and routing.
- Framer Motion implementation.

**What worked & What I changed:**
- **Good:** The AI produced full scaffolding and placeholder styling for all of the intial pages. 7 placeholder pages were also suggested. Opening the dev server, everything looks correct and the correct error messages appear when navigating to the links along the Navbar.
- **Changed:** I haven't changed anything yet!

**Key Learnings:**
- My main takeaway was to slow down and work with intention. I realised that it is easy to get swept along with AI who makes suggests and in keen to snowball production. I found myself in a correspondance which resulted in the code of many pages being outlined for me, a sense of overwelm and SE paralysis! 
- From this point on I will outline exactly what I want in the first prompt and make sure that the result is confined to the boundaries I provide as to not overwhelm myself or miss any errors.

**Time saved:** I wasted a lot of time, but learnt alot.

### Entry #3 
**Task:** Configure brand typography (Nerko One, Outfit) and integrate into the project.
**Tool used:** Claude

**What I asked (prompt):**
"""
### CONTEXT
I am building a Next.js 14 project using Tailwind CSS. .

### TASK
I have selected two Google Fonts for my brand: "Nerko One" for headings and "Outfit" for body text. How would I import these properly into the project? I want all headings use Nerko One and body text uses Outfit.

### CONSTRAINTS
- Fonts must be applied globally.

### FORMAT
- Provide the necessary code for `globals.css` and `layout.tsx`.
- Include an explanation of why the code is the way it is.

### SCOPE
Focus purely on typography and CSS configuration.
"""

**What it gave me:**
- The standard pattern for importing Google Fonts via `@import` in `globals.css`.
- The implementation of CSS variables (`--font-heading`, `--font-body`) to bridge Google Fonts with Tailwind utility classes.
- Guidelines for setting global font-family defaults in the CSS layer.

**What was good:**
- The CSS variable approach is easy to understand and keeps the design system easily maintainable.

**What was wrong or I changed:**
- During implementation, I encountered errors because my project was using TailwindCSS v4. Claude wanted me to naviagte to `tailwind.config.ts` and alter the code, but this file didn't exist.
- I realised that the commands I was using were not required in v4 and with some help with tailwindcss.com I was able to direct AI to give me the correct information.

**What I need to verify/learn independently:**
- How Tailwind v4 handles custom theme extensions.
- Reviewing the Tailwind v4 migration guide to ensure I am using the new standard best practices correctly.

**Decisions I made:**
- Abandoned `tailwind.config.ts` in favor of the Tailwind v4 CSS-first configuration.
- Adopted the CSS-variable approach in `globals.css` as the standard for styling the application.

**What I learned:**
- Tailwind v4 is significantly more "CSS-first"—configuration now lives in the CSS file, rather than a separate JS/TS file.
- CSS variables are the most robust way to pass design tokens from the global CSS layer into the Tailwind utility layer.
- Framework versioning (Tailwind v3 vs v4) can drastically change how standard commands like `npx tailwindcss init` function.

**Time saved estimate:**
Debugging the version-specific configuration issues alone would have taken an hour of trial and error. AI helped me identify the shift to v4 and implement the correct CSS-only architecture immediately.

### Entry #4 
**Task:** Understand elements of prompt two (header, footer, MobileMenu) output that is confusing.
**Tool used:** Claude

**What I asked (prompt):**
### CONTEXT
General: Build a home page for a queer fashion brand called CHEEK that
sells handmade, customisable chaps. The site is built with
Next.js 14 and Tailwind CSS.
### TASK
Header:
How does usePathname work??
What is the meaning of the 'aria-label=' key
Can you explain Why the mobile menu burger was created using three span sections rather than importing an icon from an external library, was this purely to inlcude the rotation animation?
MobileMenu:
I don't understand the key word interface or how it's used. What data type is MobileMenuProps? And how is it used in the function here: MobileMenu({ isOpen, onClose }: MobileMenuProps).
Can you give me a bit of an explaination about how framer-motion works and what are the extent of the possibilities?
Please also expalin how to use items within framer-motion, I see that you can call motion.div as if the div is a value within the object of motion.
Footer:
In each of my social links there are these key-value pairs: target="_blank", rel="noopener noreferrer", remind me what they mean?
Please remind me what PreventDefault() does, it's been a while since graduation!
### CONSTRAINTS
No constraints.
### FORMAT
In depth descriptions of my various queries to fully wrap my head around the gaps of knowledge so that when I come to alter the styling and content of these sections later on I can understand where to navigate and how to alter the code completely.
### SCOPE
Explainations

**What it gave me:**
Explainations of everything I asked to a level that I understood it all.

**What was good:**
The information was concise yet thorough. 

**What was wrong or I changed:**
I didn't fully understand MobileMenuProps from the description given - I asked for more detail and an analogy. I was given a restaurant analogy which helped me to understand it.
I didn't get an explaination for AnimatePresence in Framer Motion.
I questioned why we would need to create a MobileMenuProps interface why it will only be used once in this project. What are the reasons for still going through this process. Reasons listed in 'What I learned' section below.

**What I need to verify/learn independently:**
I asked AI to clarify.

**Decisions I made:**
I left everything as is for now, I will change content and styling later. The footer is huge and will need to be reduced, the nav bar could be postioned in columns.

**What I learned:**
- Creating a NAV_LINKS array in a constants.ts file to import and use in navigation is a handing trick.
- aria-label is a description for a screen-reader, used by the visually impaired.
- Pathname looks at the current URL as to highlight the corresponding section in the Navbar.
- There are two reasons for creating the burger icon ourselves: Importing large icon files reduces performance & because we now have full control over the animation effect (turning three lines into an X). 
- I understand how framer motion works, especially motion. I just need to follow motion with a tag type to allow the element to be animated easily.
- Spring and Stagger animations are also possible using framer motion.
- target="_blank": Opens the link in a new browser tab.
- rel="noopener noreferrer": This is a Security Requirement. When you open a new tab via target="_blank", the new page has access to your page's window object. noopener prevents that access, and noreferrer hides your site's info from the destination site. Always use them together.
- e.preventDefault() stops the browser from doing a default refresh which would wipe info entered.
- Reasons as to why we would create a policy for a single item:
		"Self-Documenting" Code: Imagine you open MobileMenu.tsx three months from now. You don't have to guess what it needs to work. You just look at the interface at the top and see: "Ah, this component needs a boolean for open/close state and a function to tell the parent when to close." It’s a note to your future self.
		The "One Thing" Rule: What if, next week, you decide to put a MobileMenu in the footer as well? Now you have two places using it. If you change the interface, TypeScript will instantly tell you exactly where you broke things.
		Editor Superpowers: This is the real reason. When you type <MobileMenu inside your Header.tsx, your editor (VS Code) will pop up a little box saying: isOpen: boolean, onClose: () => void. It literally tells you how to use your own component. You don't have to memorize it.

**Time saved estimate:**
2 hours.
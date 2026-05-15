## Tailwind CSS v4 vs v3 Configuration
**Where I encountered it:** Trying to use `tailwind.config.ts` in a fresh Next.js project.
**Current understanding:** Tailwind v4 removed the mandatory `tailwind.config.js` file in favor of a "CSS-first" configuration using `@import "tailwindcss";` and `@layer theme` in CSS files. My `npx tailwindcss init` attempts failed because v4 doesn't use that CLI command anymore.
**Why it's better:** It simplifies the build process, reduces the number of config files in the root directory, and makes styling more tightly coupled with the CSS layer.

## Font Performance & Google Fonts
**Where I encountered it:** Applying fonts to the project.
**Current understanding:** Simply defining a font in CSS isn't enough; the browser needs to fetch the font files. Importing 20 fonts would kill my site's performance (Lighthouse score). I learned to bundle only the 2 fonts I need into a single `@import` URL to minimize network requests. If I decide to change my fonts later on I will alter the fonts in the import link.
**Need to study further?** I want to look into `next/font` local font hosting for even better performance, which prevents a "layout shift" when the Google Font finally loads.
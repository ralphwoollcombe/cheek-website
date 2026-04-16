# ADR 001: Tech Stack Selection

## Status
Accepted

## Date
[16.04.26]

## Context
Building a full-stack e-commerce site for CHEEK, a queer fashion brand selling handmade chaps. The site needs:
- Great SEO (moving away from Etsy dependency)
- Interactive product customisation tool
- Stripe payments
- An AI-powered feature to demonstrate integration skills

## My existing skills
JavaScript, React, Node/Express, Python, MongoDB, 
PostgreSQL, Tailwind CSS, REST APIs, Git/GitHub

## What I chose
- **Framework:** Next.js 14 (App Router) — React-based, but with server-side rendering for SEO
- **Language:** TypeScript (learning as I build)
- **Styling:** Tailwind CSS (just taught myself this)
- **Database:** PostgreSQL via Supabase (free hosted)
- **ORM:** Prisma (new to me, learning as I build)
- **Payments:** Stripe
- **AI:** OpenAI API
- **Deployment:** Vercel (free tier)

## Why Next.js?
A plain React SPA is invisible to Google. For an e-commerce site trying to rank in search and reduce Etsy dependency, I need server-side rendering. Next.js gives me React (which I know) plus SSR, API routes (replacing Express), and image optimisation — all in one framework.

## What's new to me:
- TypeScript
- Prisma
- Next.js App Router

## What carries over from my existing skills
- React fundamentals → Next.js is React
- Express API routes → Next.js API routes (same concept, different syntax)
- PostgreSQL (Same database, just accessed through Prisma)
- Tailwind CSS
- REST API design
- Git/GitHub workflow
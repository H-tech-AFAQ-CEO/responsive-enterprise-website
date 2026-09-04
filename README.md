# Afaq Ahmad — Portfolio & Studio Site

**Developer:** Afaq Ahmad  
**Status:** Frontend prototype complete with mock content

## Overview
A polished, responsive multi-page portfolio and corporate showcase site for Afaq Ahmad, an independent designer and developer. The design uses a warm neutral editorial system, dark ink typography, olive-lime accent, generous whitespace, and photography-led case studies.

## Built
- Responsive homepage with hero, selected work, services, process, testimonial, journal, and CTA sections
- About page with profile, values, and experience timeline
- Services page with service offering and FAQ
- Work index and dynamic case study pages
- Blog index and dynamic article pages
- Contact page with accessible client-side success state
- Centralized mock content in `lib/mock-data.ts`
- SEO metadata, Open Graph defaults, responsive viewport, analytics hook, and favicon
- Mobile navigation and responsive layouts

## Still in progress / production handoff
- Replace mock content and Unsplash images with approved copy and optimized local/CDN assets
- Connect CMS (WordPress, Strapi, Sanity, or a Next.js content API)
- Connect contact form to a secure server route and transactional email provider
- Add real social links, domain, analytics consent, sitemap, robots, and structured data
- Add automated tests, image audit, accessibility audit, and performance monitoring
- Configure deployment environment and production email destination
- Commercial delivery items such as deployment guidance and post-delivery support should be agreed separately

## Routes
`/` · `/about` · `/services` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/contact`

## Local setup
This is a Next.js 16 App Router project using React, Tailwind CSS v4, TypeScript, and Lucide icons. Install dependencies with the project package manager, start the development server, and open the local preview. The prototype currently requires no environment variables.

## Customization
Edit `lib/mock-data.ts` to change projects, services, testimonials, and articles. Update `app/layout.tsx` for title, description, canonical domain, and social metadata. Replace remote image URLs with optimized `next/image` assets before launch.

## Developer note
Created and structured by **Afaq Ahmad**. This README describes the current prototype boundary so CMS, email, content, and deployment work can be completed without confusion.

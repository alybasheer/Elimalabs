# ElimaLabs website

Next.js 16.4.2 / React 19.3.0 company website. No added dependencies.

## Local development

Run `npm.cmd run dev` on Windows, then open the Local URL printed in the terminal. Use `npm.cmd run build` for production validation and `npm.cmd run start` to serve that build.

## Launch configuration

Copy `.env.example` to `.env.local` and set `SITE_URL` to the final public HTTPS origin. Rebuild after changing this value. Until configured, pages are noindex, robots disallows crawling, and the sitemap contains no public URLs. Public deployment and Search Console setup are not yet performed.

## Content and design

- Edit `app/content.ts` for services, case studies, technology stacks, and contact constants.
- Page routes are Home, Services (four detail pages), Work (three detail pages), About, and Contact.
- Shared wordmark, illustrations and sections are in `app/components.tsx`; styling is in `app/globals.css`.
- Contact uses email and WhatsApp links; there is no form backend or analytics tracking.
- Supplied project screenshots are integrated in `app/project-media.tsx` from `public/projects/`, following the user's explicit request to include them. Client company names remain withheld. Screenshot branding is retained as supplied.
- CRM service includes a screenshot-style concept in `app/crm-concept.tsx`, explicitly labeled sample data and not a client case study.

## Routing

Cache Components and partial prefetching from the starter were disabled because this brochure site uses a closed set of statically generated routes. `dynamicParams = false` ensures unknown service and project URLs return HTTP 404 rather than a streamed not-found response with HTTP 200.

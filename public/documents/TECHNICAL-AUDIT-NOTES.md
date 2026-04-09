# Technical Audit Notes — Syntra Digital

Last updated: 2026-04-08

## A. Issues fixed in the codebase now

| Item | Status | Notes |
|------|--------|-------|
| LCP fetchpriority hint | ✅ Done | Hero images preloaded in `app/layout.jsx` with `<link rel="preload">` |
| Referrer-Policy | ✅ Done | `<meta name="referrer" content="strict-origin-when-cross-origin">` in layout head |
| Render-blocking resources | ✅ Mitigated | Google Analytics deferred to `lazyOnload`; fonts use `display: swap` |
| Keyword stuffing ("systems") | ✅ Done | Replaced repeated "systems" across homepage sections with varied language |
| Text-to-HTML ratio too low | ✅ Improved | Added body copy to homepage (ExperienceSection, InPracticeSection); expanded About page |
| Reading level too high | ✅ Improved | Simplified wording across hero, problem, CTA sections; shorter sentences |

## B. Issues requiring deployment/server/header control

These headers **cannot** be set via Next.js static export or GitHub Pages.
A `public/_headers` file is included and will work if deployed to **Netlify** or **Cloudflare Pages**.

| Header | File ready? | Works on GitHub Pages? |
|--------|-------------|----------------------|
| Strict-Transport-Security (HSTS) | ✅ `_headers` | ❌ No — GitHub Pages sets its own HSTS |
| X-Frame-Options | ✅ `_headers` | ❌ No |
| X-Content-Type-Options | ✅ `_headers` | ❌ No |
| Permissions-Policy | ✅ `_headers` | ❌ No |
| Content-Security-Policy (CSP) | ❌ Not yet | ❌ No — requires careful policy definition |

**Recommendation:** When migrating off GitHub Pages, deploy to Netlify or Cloudflare Pages where `_headers` is natively supported. CSP should be drafted and tested separately.

## C. Low priority / acceptable for now

| Item | Reason |
|------|--------|
| Brotli compression | Handled by GitHub Pages CDN automatically; no action needed |
| HTTP/3 + alt-svc header | Controlled by hosting provider; not configurable for static exports |
| CSP (Content-Security-Policy) | Needs careful scoping for inline scripts (GA, JSON-LD); defer until hosting migration |
| Render-blocking CSS | Tailwind CSS is critical-path; splitting would add complexity for minimal gain on a small site |

/** @type {import('next-sitemap').IConfig} */

// Pages that should appear in the sitemap with their priorities
const SITE_PAGES = {
  '/':                    { changefreq: 'weekly',  priority: 1.0 },
  '/services':            { changefreq: 'monthly', priority: 0.9 },
  '/work-with-us':        { changefreq: 'monthly', priority: 0.9 },
  '/pricing':             { changefreq: 'monthly', priority: 0.8 },
  '/about':               { changefreq: 'monthly', priority: 0.8 },
  '/case-studies/saxon':   { changefreq: 'monthly', priority: 0.7 },
  '/website-check':       { changefreq: 'monthly', priority: 0.7 },
  '/faq':                 { changefreq: 'monthly', priority: 0.7 },
  '/contact':             { changefreq: 'monthly', priority: 0.6 },
};

module.exports = {
  siteUrl: "https://syntrasolutions.digital",
  generateRobotsTxt: false, // we maintain public/robots.txt manually
  sitemapSize: 7000,

  // Exclude legacy routes, redirects, legal boilerplate, and Next internals
  exclude: [
    "/deck",
    "/process",
    "/mission",
    "/websites",        // redirects to /services
    "/policies",
    "/privacy-policy",
    "/terms-of-service",
    "/_not-found",
    "/404",
  ],

  transform: async (config, path) => {
    const page = SITE_PAGES[path];
    if (!page) return null;

    return {
      loc: path,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

/** @type {import('next-sitemap').IConfig} */
const ALLOWED = new Set(['/', '/services', '/pricing', '/faq', '/contact']);

module.exports = {
  siteUrl: "https://syntrasolutions.digital",
  generateRobotsTxt: false, // we maintain public/robots.txt manually
  sitemapSize: 7000,

  // Exclude legacy/archived routes that no longer exist
  exclude: [
    "/about",
    "/deck",
    "/process",
    "/mission",
    "/work-with-us",

    // Next internals
    "/_not-found",
    "/404",
  ],

  // Explicitly add only the allowed routes
  additionalPaths: async (config) => {
    const allowedRoutes = [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/services', changefreq: 'monthly', priority: 0.9 },
      { loc: '/pricing', changefreq: 'monthly', priority: 0.8 },
      { loc: '/faq', changefreq: 'monthly', priority: 0.7 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.6 }
    ];
    
    return allowedRoutes;
  },

  // Transform function to ensure only allowed routes are included
  transform: async (config, path) => {
    // Only allow the explicitly defined routes
    if (!ALLOWED.has(path)) {
      return null;
    }
    
    // Set appropriate priority based on path
    let priority = 0.8;
    let changefreq = 'monthly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/services') {
      priority = 0.9;
    } else if (path === '/pricing') {
      priority = 0.8;
    } else if (path === '/faq') {
      priority = 0.7;
    } else if (path === '/contact') {
      priority = 0.6;
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString()
    };
  }
};

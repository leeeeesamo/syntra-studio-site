/** @type {import('next-sitemap').IConfig} */
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
    "/services",
    "/services/*",

    // Next internals
    "/_not-found",
    "/404",
  ],
};

/** @type {import('next-sitemap').IConfig} */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://syntrasolutions.digital').replace(/\/$/, '');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    // Optional: keep if you plan to host additional sitemaps later.
    // If you only have one sitemap, you can remove this block entirely.
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },

  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  generateIndexSitemap: false,
  outDir: 'out',
};

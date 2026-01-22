/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://syntra-studio.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://syntra-studio.com'}/sitemap.xml`,
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  generateIndexSitemap: false,
  outDir: 'out',
  // Add more configuration options as needed
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}

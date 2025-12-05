const fs = require('fs');
const path = require('path');
const { createGzip } = require('zlib');
const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');
const { Readable } = require('stream');

// Configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://syntra-studio.com';
const BUILD_DIR = path.join(process.cwd(), 'out');
const PAGES_DIR = path.join(process.cwd(), 'app');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');

// Pages to include in the sitemap
const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
];

// Function to get all dynamic routes (e.g., blog posts)
async function getDynamicRoutes() {
  // Example: Get all blog posts from a directory
  // const blogPosts = await glob.sync('app/blog/**/*.mdx');
  // return blogPosts.map(post => ({
  //   url: post.replace('app', '').replace(/\.mdx?$/, ''),
  //   changefreq: 'weekly',
  //   priority: 0.7,
  //   lastmod: fs.statSync(post).mtime.toISOString()
  // }));
  return [];
}

async function generateSitemap() {
  try {
    console.log('Generating sitemap...');
    
    // Get all routes
    const dynamicRoutes = await getDynamicRoutes();
    const allRoutes = [...staticPages, ...dynamicRoutes];

        // Create sitemap
    const stream = new SitemapStream({ hostname: SITE_URL });
    
    // Ensure build directory exists
    if (!fs.existsSync(BUILD_DIR)) {
      fs.mkdirSync(BUILD_DIR, { recursive: true });
    }
    
    const writeStream = createWriteStream(SITEMAP_PATH);
    const pipeline = Readable.from(allRoutes)
      .pipe(stream)
      .pipe(createGzip())
      .pipe(writeStream);
    
    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });
    
    console.log(`Sitemap generated at: ${SITEMAP_PATH}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap generator
generateSitemap();

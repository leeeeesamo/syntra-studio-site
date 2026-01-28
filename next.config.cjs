/** @type {import('next').NextConfig} */

// Repo name must match exactly for GitHub Pages project sites:
// https://<username>.github.io/<repoName>/
const repoName = "syntra-studio-site";

// This is set in your GitHub Actions workflow env:
// env:
//   GITHUB_PAGES: "true"
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",

  // GitHub Pages (project site) support:
  // Only apply basePath/assetPrefix during Actions deploy builds.
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",

  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },

  env: {
    // Use your real domain when available; fallback can be your GH Pages URL
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://leeeeesamo.github.io/syntra-studio-site",
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compress: true,

  // NOTE: headers() are not applied on GitHub Pages (static hosting),
  // but keeping this does not hurt if you deploy elsewhere later.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

// Only require @next/bundle-analyzer when enabled
if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}

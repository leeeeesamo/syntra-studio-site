/** @type {import('next').NextConfig} */
const repoName = 'syntra-studio-site';

const nextConfig = {
  output: 'export',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;

const nextConfig = {
  output: "export",

  // Custom domain - no base path needed
  basePath: "",
  assetPrefix: "",

  images: { unoptimized: true },

  reactStrictMode: true,

  // Fix for trailing slash and asset loading
  trailingSlash: true,
};

export default nextConfig;

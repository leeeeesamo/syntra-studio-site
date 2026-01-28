const repoName = "syntra-studio-site";
const isGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_PAGES === "true\n";

const nextConfig = {
  output: "export",

  // GitHub Pages project site support
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",

  images: { unoptimized: true },

  reactStrictMode: true,
};

export default nextConfig;

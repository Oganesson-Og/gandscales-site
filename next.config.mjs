const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  basePath: "/gandscales-site",
  assetPrefix: "/gandscales-site/",

  env: {
    NEXT_PUBLIC_BASE_PATH: "/gandscales-site",
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/spadeztable",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

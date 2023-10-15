/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  // useFileSystemPublicRoutes: false,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "static.nike.com",
      },
      {
        protocol: "https",
        hostname: "www.travelandleisure.com",
      },
    ],
  },
};

export default nextConfig;

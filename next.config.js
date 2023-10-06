/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ik.imagekit.io"], // Add the allowed image domains here
  },
};

module.exports = nextConfig;

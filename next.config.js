const { withContentlayer } = require("next-contentlayer2");

const basePath =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "/portal" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "visitor-badge.laobi.icu" },
    ],
    unoptimized: true,
  },
  env: {
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
    NEXT_PUBLIC_COOKIE_BANNER_ID: process.env.NEXT_PUBLIC_COOKIE_BANNER_ID,
    NEXT_PUBLIC_SHOW_PARTICLES: process.env.NEXT_PUBLIC_SHOW_PARTICLES,
    NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY:
      process.env.NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY,
  },
};

module.exports = withContentlayer(nextConfig);

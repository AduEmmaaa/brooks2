import withPWA from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "fullstack-ecommerce.netlify.app",
      "5.imimg.com",
      "gh.jumia.is",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dzzmqi5hn/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dvyozjjma/**",
      },
    ],
  },
};

// Apply withPWA to nextConfig
export default withPWA({
  dest: "public",
  aggressiveFrontEndNavCaching: true,
  cacheOnFrontEndNav: false,
  reloadOnOnline: true,
  disable: false,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
    clientsClaim: true, // Makes sure SW updates instantly
    skipWaiting: true,
  },
})(nextConfig);


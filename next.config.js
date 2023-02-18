/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["sitesbygvp.com", "slb.sitesbygvp.com"],
    minimumCacheTTL: 31536000,
  },
}

module.exports = nextConfig

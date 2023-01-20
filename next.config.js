/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["sitesbygvp.com", "slb.sitesbygvp.com"],
  },
}

module.exports = nextConfig

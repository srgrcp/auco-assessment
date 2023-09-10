/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'ui-avatars.com'
      }
    ]
  }
}

module.exports = nextConfig

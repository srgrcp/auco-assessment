/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'ui-avatars.com'
      }
    ]
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX(nextConfig)

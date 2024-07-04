const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)

module.exports = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'camo.githubusercontent.com',
            },
        ],
    },
}
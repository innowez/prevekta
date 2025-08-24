import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add rule to process .svg files as React components when imported in .js/.jsx/.ts/.tsx files
    config.module.rules.push({
      test: /\.svg$/,  // Removed /i flag; .svg is typically lowercase, but you can add /i back if needed
      issuer: /\.[jt]sx?$/,  // Only apply to imports in JS/TS/JSX/TSX files
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Optional: Customize SVGR behavior if needed (e.g., remove viewBox, add title prop)
            svgo: true,  // Enable SVGO optimization
            titleProp: true,  // Add <title> prop support for accessibility
          },
        },
      ],
    });
    return config;
  },
  // Add other Next.js configs here if needed, e.g.:
  // images: { domains: ['example.com'] },
  // reactStrictMode: true,
};

export default nextConfig;
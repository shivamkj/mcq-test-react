// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ejs/,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;

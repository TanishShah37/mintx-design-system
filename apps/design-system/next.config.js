const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mintx/ui"],
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

module.exports = nextConfig;

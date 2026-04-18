const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mintx/ui"],
  output: "standalone",
  outputFileTracingRoot: path.resolve(__dirname, "../../"),
};

module.exports = nextConfig;

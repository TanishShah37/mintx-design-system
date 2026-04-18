import type { NextConfig } from "next";

/**
 * MintX Design System - Next.js Configuration
 *
 * NOTE: `output: 'standalone'` and `outputFileTracingRoot` are intentionally
 * omitted. Those options are for self-hosted Docker deployments. Vercel manages
 * its own output format natively — including them causes
 * "TypeError: Cannot read properties of undefined (reading 'phase')" on Vercel
 * because Vercel's build runner invokes next.config before the phase context
 * is fully initialized.
 *
 * See: https://nextjs.org/docs/app/api-reference/config/next-config-js/output
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mintx/ui"],
};

export default nextConfig;

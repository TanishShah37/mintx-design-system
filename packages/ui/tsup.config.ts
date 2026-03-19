import { defineConfig } from "tsup";

export default defineConfig({
  // Single entry — barrel export
  entry: ["src/index.ts"],

  // Output both ESM and CJS
  format: ["cjs", "esm"],

  // Generate TypeScript declaration files
  dts: true,

  // Source maps for debugging
  sourcemap: true,

  // Clean dist/ on each build
  clean: true,

  // React is a peer dep — don't bundle it
  external: ["react", "react-dom", "framer-motion"],

  // Tree-shake — consumers only pay for what they import
  treeshake: true,

  // Keep readable; consumer bundlers handle minification
  minify: false,

  // Support JSX in .tsx files
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});

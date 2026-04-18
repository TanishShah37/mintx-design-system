// @ts-nocheck
// This file is only used by tsup for building @mintx/ui.
// The @ts-nocheck prevents errors when a consumer app's TypeScript
// compiler scans this file (tsup types won't be in their node_modules).
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

  // Don't bundle any dependencies
  external: [
    "react", 
    "react-dom", 
    "framer-motion", 
    "lucide-react", 
    "remixicon",
    "@radix-ui/react-accordion",
    "@radix-ui/react-alert-dialog",
    "@radix-ui/react-avatar",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-label",
    "@radix-ui/react-popover",
    "@radix-ui/react-progress",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-select",
    "@radix-ui/react-separator",
    "@radix-ui/react-slider",
    "@radix-ui/react-slot",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-tooltip",
    "@radix-ui/react-toast",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],

  // Tree-shake — consumers only pay for what they import
  treeshake: true,

  // Keep readable; consumer bundlers handle minification
  minify: false,

  // Support JSX in .tsx files
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});

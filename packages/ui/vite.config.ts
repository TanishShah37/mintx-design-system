// @ts-nocheck
// This file is only used by Vite/tsup for building @mintx/ui.
// The @ts-nocheck prevents TypeScript "Excessive stack depth" errors
// when this file is scanned by a consumer app's TypeScript compiler.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()] as any,
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
} as any);

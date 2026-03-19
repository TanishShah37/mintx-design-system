import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Scan all component stories AND the new docs MDX pages
  stories: [
    // MDX documentation pages — shown first in sidebar
    "../src/stories/docs/**/*.mdx",
    // Component stories — all categories
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",   // includes docs, controls, actions, viewport
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // Required for MDX blocks (ColorPalette, etc.)
  docs: {
    autodocs: "tag",
  },

  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        "process.env": {},
      },
    };
  },
};

export default config;

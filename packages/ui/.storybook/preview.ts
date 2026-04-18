import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src/components/shell/ThemeProvider";
import "../src/storybook.css";
// Import token CSS so CSS variables are available in all stories
import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    // Controls configuration
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,    // Show full prop table by default
      sort: "requiredFirst",
    },

    // Default backgrounds matching Mintx dark/light themes
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark",  value: "#080E0D" },
        { name: "surface-dark", value: "#0D1614" },
        { name: "light", value: "#F5F8F7" },
        { name: "white", value: "#FFFFFF" },
      ],
    },

    // Viewport presets for mobile components
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile (390px)",
          styles: { width: "390px", height: "844px" },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop (1280px)",
          styles: { width: "1280px", height: "900px" },
        },
      },
    },

    // Docs page configuration
    docs: {
      // Show source code by default under each story
      source: { type: "code" },
    },

    // Options
    options: {
      // Sidebar hierarchy: Docs first, then by category
      storySort: {
        order: [
          "Mintx Design System",
          ["Introduction", "Installation & Publishing", "Design Tokens"],
          "UI",
          [
            "Button",
            "Badge",
            "Card",
            "Input",
            "Select",
            "Toggle",
            "Alert",
            "Progress",
            "Tabs",
            "Skeleton",
            "Avatar",
            "Status",
          ],
          "Financial",
          ["StockCard", "MetricCard", "InsightCard", "Sparkline", "PriceChange"],
          "Layout",
          ["MintxLogo", "Sidebar", "ThemeProvider", "ThemeToggle"],
          "Mobile",
          ["BottomNav", "SupportLiveBar"],
          "Icons",
          ["Icon System"],
        ],
      },
    },
  },

  // Global decorator: sync data-theme attribute with Storybook theme selector
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "dark";

      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", theme);
      }

      return React.createElement(ThemeProvider, { 
        defaultTheme: theme as any,
        children: React.createElement(Story) 
      });
    },
  ],

  // Global types for toolbar controls
  globalTypes: {
    theme: {
      description: "Mintx theme",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", icon: "moon", title: "Dark" },
          { value: "light", icon: "sun", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;

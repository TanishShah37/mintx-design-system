import type { Preview } from "@storybook/react";
import "../src/storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#F5F8F7" },
        { name: "dark", value: "#0D1614" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "dark";
      document.documentElement.setAttribute("data-theme", theme);
      return Story();
    },
  ],
};

export default preview;

import type { Preview } from "@storybook/react";
import "@mintx/ui/tokens.css";
import "../stories/storybook.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "Mintx Light",
      values: [
        { name: "Mintx Light", value: "#F5F8F7" },
        { name: "Mintx Dark", value: "#080E0D" },
        { name: "Surface", value: "#FFFFFF" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

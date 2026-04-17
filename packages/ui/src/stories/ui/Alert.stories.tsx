import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/ui/Alert";
import { Button } from "../../components/ui/Button";
import React from "react";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Unified contextual feedback banners. Supports 4 semantic statuses (info, success, warning, error) and 4 visual variants (subtle, solid, outline, ghost). Includes smooth exit animations via Framer Motion.",
      },
    },
  },
  argTypes: {
    status: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["subtle", "solid", "outline", "ghost"],
    },
    title: { control: "text" },
    dismissible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    status: "info",
    variant: "subtle",
    title: "Market Analysis",
    description: "NIFTY 50 is trending near its 52-week high. Monitor volume breakouts for potential entries.",
  },
};

export const Statuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert status="info" title="Informational" description="Educational content for market research." />
      <Alert status="success" title="Success" description="Your trade was executed successfully." />
      <Alert status="warning" title="Warning" description="High volatility detected in this asset." />
      <Alert status="error" title="Error" description="Failed to fetch real-time market data." />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert status="info" variant="subtle" title="Subtle (Default)" description="Light background with tonal borders." />
      <Alert status="info" variant="solid" title="Solid" description="High-visibility filled banner." />
      <Alert status="info" variant="outline" title="Outline" description="Transparent background with defined borders." />
      <Alert status="info" variant="ghost" title="Ghost" description="No borders or background, minimal footprint." />
    </div>
  ),
};

export const WithActions: Story = {
  args: {
    status: "warning",
    title: "High Risk Trade",
    description: "This option is deep out-of-the-money. Probability of profit is less than 15%.",
    action: (
      <div className="flex gap-2">
        <Button size="sm" variant="danger">Confirm Trade</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </div>
    ),
  },
};

export const Dismissible: Story = {
  args: {
    status: "success",
    title: "Portfolio Sync Complete",
    description: "All historical transactions have been imported successfully.",
    dismissible: true,
  },
};

export const SEBIDisclaimer: Story = {
  name: "SEBI Style Disclaimer",
  args: {
    status: "info",
    variant: "subtle",
    description: "SEBI Disclaimer: Investments in securities market are subject to market risks. Read all the related documents carefully before investing.",
    className: "opacity-80 grayscale-[0.5]",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { LoadingOverlay } from "../../components/ui/LoadingOverlay";
import { Card } from "../../components/ui/Card";
import React, { useState } from "react";

const meta: Meta<typeof LoadingOverlay> = {
  title: "UI/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    blur: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

const ContainerTemplate = (args: any) => (
  <Card className="relative w-full max-w-md h-[300px] flex items-center justify-center border-dashed">
    <div className="text-center p-8 space-y-4">
      <h3 className="text-lg font-bold">Confidential Data Container</h3>
      <p className="text-sm opacity-50">This content will be obscured when the loading overlay is active. Useful for partial page loads or authenticating specific widgets.</p>
    </div>
    <LoadingOverlay {...args} />
  </Card>
);

export const Default: Story = {
  render: (args) => <ContainerTemplate {...args} />,
  args: {
    isLoading: true,
    text: "Fetching live data...",
  },
};

export const HeavyBlur: Story = {
  render: (args) => <ContainerTemplate {...args} />,
  args: {
    isLoading: true,
    blur: "lg",
    text: "Processing high-frequency trades",
  },
};

export const NoText: Story = {
  render: (args) => <ContainerTemplate {...args} />,
  args: {
    isLoading: true,
    text: "",
  },
};

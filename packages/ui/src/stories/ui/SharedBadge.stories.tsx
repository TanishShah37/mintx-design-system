import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components/shared/Badge";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "Shared/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "success", "warning", "error", "mint", "blue", "purple", "neutral", "subtle"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="subtle">Subtle (New)</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="mint">Mint</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

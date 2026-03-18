import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@mintx/ui";

const meta: Meta<typeof Badge> = {
  title: "Core/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["mint", "green", "red", "amber", "blue", "purple", "neutral", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { variant: "mint", children: "Design System v1.0" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge variant="mint">Mint</Badge>
      <Badge variant="green">Bullish</Badge>
      <Badge variant="red">Bearish</Badge>
      <Badge variant="amber">Warning</Badge>
      <Badge variant="blue">Info</Badge>
      <Badge variant="purple">Pro</Badge>
      <Badge variant="neutral">Default</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

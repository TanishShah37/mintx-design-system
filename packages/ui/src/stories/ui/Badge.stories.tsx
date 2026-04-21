import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components/ui/Badge";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Compact labels for status, category, and metadata. Supports 6 semantic variants, 4 visual styles, and interactive features like pulse animations and removable tags.",
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["neutral", "primary", "success", "warning", "danger", "info"],
      description: "Semantic color variant",
    },
    variant: {
      control: "select",
      options: ["solid", "subtle", "secondary", "outline", "soft", "ghost"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Badge size",
    },
    dot: { control: "boolean" },
    pulse: { control: "boolean" },
    removable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    color: "neutral",
    variant: "subtle",
  },
};

export const Styles: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
      <Badge color="primary" variant="solid">Solid</Badge>
      <Badge color="primary" variant="subtle">Subtle</Badge>
      <Badge color="primary" variant="secondary">Secondary</Badge>
      <Badge color="primary" variant="outline">Outline</Badge>
      <Badge color="primary" variant="soft">Soft</Badge>
      <Badge color="primary" variant="ghost">Ghost</Badge>
    </div>
  ),
};

export const SemanticVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Badge color="success" dot>Market Open</Badge>
      <Badge color="danger" dot pulse>Live Error</Badge>
      <Badge color="warning" dot>Caution</Badge>
    </div>
  ),
};

export const Counters: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Badge color="primary" variant="solid" count={5} />
      <Badge color="danger" count={120} maxCount={99} />
      <Badge color="neutral" count={0} />
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Badge color="neutral" removable onRemove={() => alert("Removed!")}>Nifty 50</Badge>
      <Badge color="primary" removable onRemove={() => alert("Removed!")}>Tech</Badge>
    </div>
  ),
};

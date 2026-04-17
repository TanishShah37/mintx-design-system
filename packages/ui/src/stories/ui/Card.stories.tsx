import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Surface container for grouping related content. Four visual variants (flat, raised, glass, outlined), optional hover lift, and interactive click mode. Supports new design tokens for elevation and borders.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "raised", "glass", "outlined"],
    },
    padding: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },
    shadow: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "inner"],
    },
    borderWidth: {
      control: "select",
      options: ["none", "thin", "medium", "thick"],
    },
    hover: { control: "boolean" },
    interactive: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "flat",
    padding: "md",
    children: (
      <p style={{ color: "var(--text-secondary, #3A524D)", fontSize: 14 }}>
        A flat card with default padding. The most common surface container in
        the Mintx design system. Now with expanded token support!
      </p>
    ),
  },
};

export const Raised: Story = {
  args: {
    variant: "raised",
    shadow: "lg",
    padding: "md",
    children: (
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Emphasized Surface</h4>
        <p className="text-sm opacity-70 italic">Using raised variant with lg shadow.</p>
      </div>
    ),
  },
};

export const Interactivity: Story = {
  args: {
    variant: "flat",
    hover: true,
    interactive: true,
    shadow: "sm",
    children: (
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Clickable Tile</h4>
        <p className="text-sm opacity-70">Hover for elevation, click for active depth.</p>
      </div>
    ),
    onClick: () => alert("Interactive card clicked!"),
  },
};

export const FinancialContext: Story = {
  name: "Financial Summary Card",
  render: () => (
    <Card 
      variant="raised" 
      padding="lg" 
      shadow="xl" 
      borderLeft="thick" 
      borderColor="mint-500"
      className="max-w-[340px]"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-text-primary">Portfolio Summary</h3>
          <Badge variant="primary" style="solid" size="sm">Pro Plan</Badge>
        </div>
      </div>
      <p className="text-3xl font-bold tracking-tighter text-emerald-500">
        ₹4,82,350.00
      </p>
      <p className="text-xs text-neutral-400 mt-1">
        +₹12,840 (+2.74%) today
      </p>
      <div className="mt-6">
        <Button variant="primary" size="sm" width="full">View Breakdown</Button>
      </div>
    </Card>
  ),
};

export const LayoutGrid: Story = {
  name: "Layout Chunks",
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card variant="outlined" padding="md" shadow="xs">
        <h4 className="font-bold mb-2">Fundamental Data</h4>
        <p className="text-xs opacity-70">Quarterly results, balance sheets and peer comparisons.</p>
      </Card>
      <Card variant="outlined" padding="md" shadow="xs">
        <h4 className="font-bold mb-2">Technical Analysis</h4>
        <p className="text-xs opacity-70">View charts, patterns and indicators for various timeframes.</p>
      </Card>
    </div>
  ),
};

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
          "Compact labels for status, category, and metadata. Supports 8 semantic variants, 3 sizes, and an optional leading dot indicator. Used throughout watchlists, stock cards, insight panels, and alert banners.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "mint",
        "green",
        "red",
        "amber",
        "blue",
        "purple",
        "neutral",
        "outline",
      ],
      description: "Semantic colour variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Badge size",
    },
    dot: {
      control: "boolean",
      description: "Show leading dot indicator",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "mint",
    children: "Mintx Pro",
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge variant="mint">Mint</Badge>
      <Badge variant="green">Bullish</Badge>
      <Badge variant="red">Bearish</Badge>
      <Badge variant="amber">Caution</Badge>
      <Badge variant="blue">Info</Badge>
      <Badge variant="purple">Premium</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Badge variant="mint" size="sm">Small</Badge>
      <Badge variant="mint" size="md">Medium</Badge>
      <Badge variant="mint" size="lg">Large</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  name: "With Leading Dot",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge variant="green" dot>Live</Badge>
      <Badge variant="red" dot>Bearish</Badge>
      <Badge variant="amber" dot>Pre-Open</Badge>
      <Badge variant="mint" dot>Pro Plan</Badge>
      <Badge variant="blue" dot>NSE</Badge>
    </div>
  ),
};

export const FinancialContext: Story = {
  name: "Financial Use Cases",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-tertiary, #748A83)",
            marginBottom: 8,
          }}
        >
          Market Status
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <Badge variant="green" dot size="md">Market Open</Badge>
          <Badge variant="amber" dot size="md">Pre-Open</Badge>
          <Badge variant="neutral" dot size="md">Market Closed</Badge>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-tertiary, #748A83)",
            marginBottom: 8,
          }}
        >
          Insight Tags
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge variant="mint" size="sm">Fibonacci Zone</Badge>
          <Badge variant="blue" size="sm">Volume Breakout</Badge>
          <Badge variant="amber" size="sm">Resistance Level</Badge>
          <Badge variant="purple" size="sm">Institutional Flow</Badge>
          <Badge variant="neutral" size="sm">Illustrative Only</Badge>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-tertiary, #748A83)",
            marginBottom: 8,
          }}
        >
          Plan Tiers
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <Badge variant="neutral" size="sm">Free</Badge>
          <Badge variant="mint" size="sm">Pro</Badge>
          <Badge variant="purple" size="sm">Enterprise</Badge>
        </div>
      </div>
    </div>
  ),
};

export const SmallDark: Story = {
  name: "Small (sm)",
  args: { variant: "green", size: "sm", children: "Bullish" },
};
export const LargePurple: Story = {
  name: "Large Purple",
  args: { variant: "purple", size: "lg", children: "Enterprise" },
};

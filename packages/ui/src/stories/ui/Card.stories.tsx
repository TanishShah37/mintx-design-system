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
          "Surface container for grouping related content. Four visual variants (flat, raised, glass, outlined), optional hover lift, and interactive click mode. Underpins Stock Cards, Insight Cards, Metric Cards, and all dashboard panels.",
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
        the Mintx design system.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {(
        [
          { v: "flat", label: "Flat", desc: "Subtle border, no shadow — default choice" },
          { v: "raised", label: "Raised", desc: "md shadow, stronger border — dashboard panels" },
          { v: "glass", label: "Glass", desc: "Blur backdrop — overlay panels, modals" },
          { v: "outlined", label: "Outlined", desc: "Transparent bg — secondary groupings" },
        ] as const
      ).map(({ v, label, desc }) => (
        <Card key={v} variant={v} padding="md">
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-primary, #141F1D)",
              marginBottom: 4,
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontSize: 12,
              color: "var(--text-tertiary, #748A83)",
            }}
          >
            {desc}
          </p>
        </Card>
      ))}
    </div>
  ),
};

export const HoverState: Story = {
  name: "Hover (lift on hover)",
  args: {
    variant: "flat",
    hover: true,
    padding: "md",
    children: (
      <div>
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary, #141F1D)",
            marginBottom: 6,
          }}
        >
          TCS · Tata Consultancy Services
        </p>
        <p style={{ fontSize: 12, color: "var(--text-tertiary, #748A83)" }}>
          Hover over this card to see the mint border and lift effect. Used for
          watchlist items, search results, and recommendation tiles.
        </p>
      </div>
    ),
  },
};

export const InteractiveClickable: Story = {
  name: "Interactive (clickable)",
  args: {
    variant: "flat",
    interactive: true,
    padding: "md",
    onClick: () => alert("Card clicked!"),
    children: (
      <p style={{ fontSize: 14, color: "var(--text-secondary, #3A524D)" }}>
        Click me — this card is interactive. It has role="button", keyboard
        support, and active scale feedback.
      </p>
    ),
  },
};

export const PaddingScale: Story = {
  name: "Padding Scale",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {(["xs", "sm", "md", "lg"] as const).map((p) => (
        <Card key={p} variant="flat" padding={p}>
          <span
            style={{
              fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              fontSize: 12,
              color: "var(--text-brand, #008F6E)",
            }}
          >
            padding="{p}"
          </span>
        </Card>
      ))}
    </div>
  ),
};

export const WithContent: Story = {
  name: "With Rich Content",
  render: () => (
    <Card variant="raised" padding="md" style={{ maxWidth: 340 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <div>
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "var(--font-display, 'Syne', sans-serif)",
              color: "var(--text-primary, #141F1D)",
            }}
          >
            Portfolio Summary
          </p>
          <Badge variant="mint" size="sm">Pro Plan</Badge>
        </div>
      </div>
      <p style={{ fontSize: 28, fontWeight: 700, color: "#22C55E", fontFamily: "var(--font-display, 'Syne', sans-serif)" }}>
        ₹4,82,350
      </p>
      <p style={{ fontSize: 12, color: "var(--text-tertiary, #748A83)", marginTop: 4 }}>
        +₹12,840 (+2.74%) today
      </p>
      <div style={{ marginTop: 16 }}>
        <Button variant="primary" size="sm">View Portfolio</Button>
      </div>
    </Card>
  ),
};

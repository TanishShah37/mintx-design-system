import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../components/shared/Typography";
import React from "react";

const meta: Meta<typeof Typography> = {
  title: "Shared/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Standard typography component for all text elements. Supports semantic header variants, body text, and custom color mappings.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "h4", "h5", "h6", "body", "label", "mono"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: ["brand", "primary", "secondary", "success", "warning", "danger", "info", "white"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Almost everything is an indicator.",
    variant: "body",
    size: "base",
  },
};

export const HeaderVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Typography variant="display">Display Header</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const BodyAndLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Typography variant="body">
        Body text: MintX is a wealth intelligence platform designed for the modern Indian investor.
        It combines deep market insights with a premium design aesthetic.
      </Typography>
      <Typography variant="label">Market Indicator — NSE</Typography>
      <Typography variant="mono">0x1234567890abcdef</Typography>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Typography color="brand">Brand Color Text</Typography>
      <Typography color="primary">Primary Text (Default)</Typography>
      <Typography color="secondary">Secondary / Muted Text</Typography>
      <Typography color="success">Success Message Text</Typography>
      <Typography color="warning">Warning Alert Text</Typography>
      <Typography color="danger">Danger or Error Text</Typography>
      <Typography color="info">Informational Blue Text</Typography>
      <div style={{ background: "#000", padding: 8, borderRadius: 4 }}>
        <Typography color="white">White Text on Dark Background</Typography>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography size="xs">Extra Small (12px)</Typography>
      <Typography size="sm">Small (14px)</Typography>
      <Typography size="base">Base (16px)</Typography>
      <Typography size="lg">Large (18px)</Typography>
      <Typography size="xl">Extra Large (20px)</Typography>
      <Typography size="2xl">2X Large (24px)</Typography>
      <Typography size="3xl">3X Large (30px)</Typography>
    </div>
  ),
};

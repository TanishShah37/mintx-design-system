import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/ui/Alert";
import React from "react";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline contextual feedback banners. Five semantic variants with auto-matched icons, optional title, optional dismiss button, and custom icon slot. Used for market warnings, trade confirmations, SEBI disclaimers, and system notices. All alerts use role='alert' for screen readers.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger", "brand"],
    },
    title: { control: "text" },
    onDismiss: { action: "dismissed" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "brand",
    title: "Fibonacci Zone Detected",
    children:
      "NIFTY 50 is approaching the 61.8% Fibonacci retracement at 24,200. This is a historically watched support zone.",
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Alert variant="info" title="Info">
        Educational information only — not investment advice.
      </Alert>
      <Alert variant="success" title="Order Placed">
        Your SIP of ₹5,000/month has been activated successfully.
      </Alert>
      <Alert variant="warning" title="High Volatility">
        Market volatility (VIX: 18.4) is elevated. Review your positions.
      </Alert>
      <Alert variant="danger" title="Session Expired">
        Your session has timed out. Please sign in again.
      </Alert>
      <Alert variant="brand" title="New Signal">
        Volume breakout detected on TCS — 3× average. Educational only.
      </Alert>
    </div>
  ),
};

export const WithDismiss: Story = {
  name: "With Dismiss Button",
  args: {
    variant: "warning",
    title: "Market Closure",
    onDismiss: () => {},
    children:
      "Markets will be closed on January 26th for Republic Day. Plan your orders accordingly.",
  },
};

export const TitleOnly: Story = {
  name: "Title Only (no body)",
  args: {
    variant: "success",
    title: "Watchlist updated successfully.",
  },
};

export const BodyOnly: Story = {
  name: "Body Only (no title)",
  args: {
    variant: "info",
    children:
      "SEBI Disclaimer: Investments in securities market are subject to market risks. Read all related documents carefully before investing.",
  },
};

export const SEBIDisclaimer: Story = {
  name: "SEBI Disclaimer Pattern",
  render: () => (
    <Alert variant="info" style={{ borderColor: "rgba(116,138,131,0.3)", background: "rgba(116,138,131,0.06)", color: "var(--text-secondary, #3A524D)" }}>
      <strong>Regulatory Notice:</strong> All analysis, charts, and signals on
      Mintx are for educational and informational purposes only. They do not
      constitute investment advice. Past performance is not indicative of future
      results. Consult a SEBI-registered advisor before investing.
    </Alert>
  ),
};

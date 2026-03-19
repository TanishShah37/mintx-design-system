import type { Meta, StoryObj } from "@storybook/react";
import { MetricCard } from "../../components/financial/MetricCard";
import React from "react";

const meta: Meta<typeof MetricCard> = {
  title: "Financial/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Compact card for displaying a single financial metric — index value, portfolio total, P&L, or KPI. Shows label, value with optional prefix/suffix, and a delta change row with directional colour. The `compact` prop reduces padding for dense dashboard layouts. All numerics use DM Mono with tabular-nums.",
      },
    },
  },
  argTypes: {
    compact: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    data: {
      label: "Nifty 50",
      value: "24,315",
      delta: 143,
      direction: "up",
    },
  },
};

export const WithPrefix: Story = {
  name: "With Currency Prefix",
  args: {
    data: {
      label: "Portfolio Value",
      value: 482350,
      prefix: "₹",
      delta: 12840,
      deltaLabel: "+2.74% today",
      direction: "up",
    },
  },
};

export const WithSuffix: Story = {
  name: "With Suffix",
  args: {
    data: {
      label: "Dividend Yield",
      value: 3.4,
      suffix: "%",
      delta: 0.2,
      direction: "up",
    },
  },
};

export const Bearish: Story = {
  name: "Bearish (down)",
  args: {
    data: {
      label: "Sensex",
      value: "80,220",
      delta: -112,
      direction: "down",
    },
  },
};

export const Flat: Story = {
  name: "Flat / Unchanged",
  args: {
    data: {
      label: "VIX",
      value: "13.42",
      delta: 0,
      direction: "flat",
    },
  },
};

export const Compact: Story = {
  name: "Compact Mode",
  args: {
    compact: true,
    data: {
      label: "Bank Nifty",
      value: "51,840",
      delta: 320,
      direction: "up",
    },
  },
};

export const MarketOverviewRow: Story = {
  name: "Market Overview Row (4-up)",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
      <MetricCard
        data={{ label: "Nifty 50", value: "24,315", delta: 143, direction: "up" }}
      />
      <MetricCard
        data={{ label: "Sensex", value: "80,220", delta: -112, direction: "down" }}
      />
      <MetricCard
        data={{ label: "Bank Nifty", value: "51,840", delta: 320, direction: "up" }}
      />
      <MetricCard
        data={{ label: "VIX", value: "13.42", delta: -0.81, direction: "down" }}
      />
    </div>
  ),
};

export const PortfolioSummaryRow: Story = {
  name: "Portfolio Summary Row",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      <MetricCard
        data={{
          label: "Total Value",
          value: 482350,
          prefix: "₹",
          deltaLabel: "Invested: ₹3,60,000",
          direction: "flat",
        }}
      />
      <MetricCard
        data={{
          label: "Today's P&L",
          value: 12840,
          prefix: "₹",
          delta: 12840,
          direction: "up",
        }}
      />
      <MetricCard
        data={{
          label: "Overall Returns",
          value: 122350,
          prefix: "₹",
          delta: 33.98,
          suffix: "%",
          direction: "up",
        }}
      />
    </div>
  ),
};

export const CompactDashboard: Story = {
  name: "Compact Dashboard Strip",
  render: () => (
    <div style={{ display: "flex", gap: 10 }}>
      {[
        { label: "NIFTY", value: "24,315", delta: 143, direction: "up" as const },
        { label: "SENSEX", value: "80,220", delta: -112, direction: "down" as const },
        { label: "NIFTY IT", value: "38,541", delta: 210, direction: "up" as const },
        { label: "NIFTY BANK", value: "51,840", delta: 320, direction: "up" as const },
        { label: "VIX", value: "13.42", delta: -0.81, direction: "down" as const },
      ].map((d) => (
        <MetricCard key={d.label} data={d} compact style={{ flex: 1 }} />
      ))}
    </div>
  ),
};

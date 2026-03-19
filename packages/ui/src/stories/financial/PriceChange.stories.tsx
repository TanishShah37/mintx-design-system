import type { Meta, StoryObj } from "@storybook/react";
import { PriceChange } from "../../components/financial/PriceChange";
import React from "react";

const meta: Meta<typeof PriceChange> = {
  title: "Financial/PriceChange",
  component: PriceChange,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline price delta display with directional colouring and SVG arrow icon. Renders value + optional percentage in DM Mono tabular-nums. Three directions: `up` (green ▲), `down` (red ▼), `flat` (grey —). `showIcon` controls the arrow visibility. Used inside StockCard, MetricCard, watchlist rows, portfolio holdings, and order history. The direction prop is optional — if omitted, it's derived from the sign of `value`.",
      },
    },
  },
  argTypes: {
    value: { control: "number" },
    percent: { control: "number" },
    direction: {
      control: "select",
      options: ["up", "down", "flat"],
    },
    showIcon: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PriceChange>;

export const Default: Story = {
  args: {
    value: 88.4,
    percent: 2.34,
    direction: "up",
  },
};

export const AllDirections: Story = {
  name: "All Directions",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <PriceChange value={88.4} percent={2.34} direction="up" />
      <PriceChange value={-18.2} percent={-1.23} direction="down" />
      <PriceChange value={1.1} percent={0.04} direction="flat" />
    </div>
  ),
};

export const ValueOnly: Story = {
  name: "Value Only (no percent)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <PriceChange value={143} direction="up" />
      <PriceChange value={-112} direction="down" />
      <PriceChange value={0} direction="flat" />
    </div>
  ),
};

export const NoIcon: Story = {
  name: "No Icon",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <PriceChange value={88.4} percent={2.34} showIcon={false} />
      <PriceChange value={-18.2} percent={-1.23} showIcon={false} direction="down" />
    </div>
  ),
};

export const AutoDirection: Story = {
  name: "Auto Direction (from value sign)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <p style={{ fontSize: 11, color: "var(--text-tertiary, #748A83)", marginBottom: 4 }}>
        Direction derived from value — no direction prop needed:
      </p>
      <PriceChange value={250} />
      <PriceChange value={-84} />
      <PriceChange value={0} />
    </div>
  ),
};

export const InTableRow: Story = {
  name: "In a Holdings Table Row",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #0D1614)",
        border: "1px solid rgba(232,239,237,0.08)",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {[
        { ticker: "TCS", qty: 10, avg: 3600, ltp: 3847, change: 247, pct: 6.86 },
        { ticker: "INFY", qty: 25, avg: 1510, ltp: 1456, change: -54, pct: -3.58 },
        { ticker: "RELIANCE", qty: 5, avg: 2820, ltp: 2847, change: 27, pct: 0.96 },
      ].map((row) => (
        <div
          key={row.ticker}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 100px 100px 120px",
            gap: 16,
            padding: "12px 20px",
            borderBottom: "1px solid rgba(232,239,237,0.06)",
            alignItems: "center",
            fontSize: 13,
          }}
        >
          <span style={{ fontWeight: 700, color: "#E8EFED", fontFamily: "'Syne', sans-serif" }}>
            {row.ticker}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", color: "#9BACA6" }}>
            {row.qty}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", color: "#9BACA6" }}>
            ₹{row.avg.toLocaleString("en-IN")}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", color: "#E8EFED", fontWeight: 600 }}>
            ₹{row.ltp.toLocaleString("en-IN")}
          </span>
          <PriceChange value={row.change} percent={row.pct} />
        </div>
      ))}
    </div>
  ),
};

export const LargeValues: Story = {
  name: "Large Values (index points)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <PriceChange value={143.25} percent={0.59} direction="up" />
      <PriceChange value={-1240.8} percent={-1.52} direction="down" />
      <PriceChange value={32100} percent={2.34} direction="up" />
    </div>
  ),
};

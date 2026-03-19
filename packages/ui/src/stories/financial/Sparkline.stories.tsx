import type { Meta, StoryObj } from "@storybook/react";
import { Sparkline } from "../../components/financial/Sparkline";
import React from "react";

const uptrend = [35, 32, 28, 25, 20, 18, 15, 11, 8, 5];
const downtrend = [5, 8, 11, 15, 18, 20, 25, 28, 32, 35];
const volatile = [20, 35, 10, 30, 8, 28, 15, 32, 12, 25];
const flat = [22, 21, 23, 20, 22, 21, 23, 20, 22, 21];
const vshape = [30, 20, 12, 8, 6, 8, 14, 22, 28, 33];

const meta: Meta<typeof Sparkline> = {
  title: "Financial/Sparkline",
  component: Sparkline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Lightweight SVG sparkline chart for inline price trend visualisation. Three directions — `up` (green fill), `down` (red fill), `flat` (grey fill). Renders a filled area polygon + polyline with no axes or labels. Accepts any numeric array (OHLCV close prices, index values, portfolio values). `preserveAspectRatio='none'` allows fluid width with fixed height. Used inside StockCard, MetricCard, and watchlist rows.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["up", "down", "flat"],
    },
    height: { control: { type: "range", min: 20, max: 120, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

export const Uptrend: Story = {
  name: "Uptrend (up)",
  args: {
    data: uptrend,
    direction: "up",
    height: 40,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export const Downtrend: Story = {
  name: "Downtrend (down)",
  args: {
    data: downtrend,
    direction: "down",
    height: 40,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export const Flat: Story = {
  name: "Flat / Sideways",
  args: {
    data: flat,
    direction: "flat",
    height: 40,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export const AllDirections: Story = {
  name: "All Directions",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(
        [
          { label: "up — bullish / gain", data: uptrend, direction: "up" as const },
          { label: "down — bearish / loss", data: downtrend, direction: "down" as const },
          { label: "flat — sideways / unchanged", data: flat, direction: "flat" as const },
        ]
      ).map(({ label, data, direction }) => (
        <div key={direction}>
          <p
            style={{
              fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              fontSize: 11,
              color: "var(--text-tertiary, #748A83)",
              marginBottom: 6,
            }}
          >
            direction="{label}"
          </p>
          <div style={{ width: 240 }}>
            <Sparkline data={data} direction={direction} height={40} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const DifferentHeights: Story = {
  name: "Height Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[24, 40, 60, 80].map((h) => (
        <div key={h} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              fontSize: 11,
              color: "var(--text-tertiary, #748A83)",
              width: 60,
              flexShrink: 0,
            }}
          >
            h={h}
          </span>
          <div style={{ width: 200 }}>
            <Sparkline data={uptrend} direction="up" height={h} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const VolatileData: Story = {
  name: "Volatile Data Pattern",
  render: () => (
    <div style={{ width: 240 }}>
      <Sparkline data={volatile} direction="up" height={50} />
    </div>
  ),
};

export const VShapeRecovery: Story = {
  name: "V-Shape Recovery",
  render: () => (
    <div style={{ width: 240 }}>
      <Sparkline data={vshape} direction="up" height={50} />
    </div>
  ),
};

export const InCardContext: Story = {
  name: "Inside a Card Context",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #0D1614)",
        border: "1px solid rgba(232,239,237,0.08)",
        borderRadius: 14,
        padding: 16,
        width: 220,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#E8EFED" }}>
            TCS
          </p>
          <p style={{ fontSize: 11, color: "#5A706A" }}>Tata Consultancy</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#22C55E", fontFamily: "'Syne', sans-serif" }}>
            ₹3,847
          </p>
          <p style={{ fontSize: 12, color: "#22C55E", fontFamily: "'DM Mono', monospace" }}>
            +2.34%
          </p>
        </div>
      </div>
      <div style={{ borderRadius: 6, overflow: "hidden" }}>
        <Sparkline data={uptrend} direction="up" height={40} />
      </div>
    </div>
  ),
};

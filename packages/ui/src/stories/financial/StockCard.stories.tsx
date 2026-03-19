import type { Meta, StoryObj } from "@storybook/react";
import { StockCard } from "../../components/financial/StockCard";
import React from "react";

const spkUp = [35, 30, 32, 25, 20, 22, 15, 10, 8, 5];
const spkDown = [5, 8, 10, 12, 18, 22, 20, 28, 32, 35];
const spkFlat = [22, 20, 24, 21, 23, 22, 20, 22, 21, 22];

const meta: Meta<typeof StockCard> = {
  title: "Financial/StockCard",
  component: StockCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Primary financial card for displaying a single stock or index. Shows ticker, full name, current price (coloured by direction), percentage change, sparkline chart, and OHLCV stats. Supports hover lift with mint border, keyboard navigation, and click handler. Direction (`up`/`down`/`flat`) drives the colour of the price, sparkline, and fill. All numbers use DM Mono with tabular-nums for alignment.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StockCard>;

export const Bullish: Story = {
  name: "Bullish (up)",
  args: {
    data: {
      ticker: "TCS",
      name: "Tata Consultancy Services",
      price: 3847,
      change: 88.4,
      changePercent: 2.34,
      open: 3758,
      high: 3862,
      low: 3741,
      volume: "2.1M",
      sparkline: spkUp,
    },
  },
};

export const Bearish: Story = {
  name: "Bearish (down)",
  args: {
    data: {
      ticker: "INFY",
      name: "Infosys Limited",
      price: 1456,
      change: -18.2,
      changePercent: -1.23,
      open: 1474,
      high: 1480,
      low: 1449,
      volume: "4.7M",
      sparkline: spkDown,
    },
  },
};

export const Flat: Story = {
  name: "Flat / Unchanged",
  args: {
    data: {
      ticker: "RELIANCE",
      name: "Reliance Industries Ltd",
      price: 2847,
      change: 1.1,
      changePercent: 0.04,
      open: 2840,
      high: 2858,
      low: 2831,
      volume: "3.3M",
      sparkline: spkFlat,
    },
  },
};

export const WithoutSparkline: Story = {
  name: "Without Sparkline",
  args: {
    data: {
      ticker: "HDFCBANK",
      name: "HDFC Bank Ltd",
      price: 1672,
      change: 23.5,
      changePercent: 1.43,
      open: 1648,
      high: 1680,
      low: 1642,
      volume: "8.2M",
    },
  },
};

export const Clickable: Story = {
  name: "Clickable (with handler)",
  args: {
    data: {
      ticker: "WIPRO",
      name: "Wipro Limited",
      price: 487,
      change: 6.15,
      changePercent: 1.28,
      open: 481,
      high: 492,
      low: 479,
      volume: "5.4M",
      sparkline: spkUp,
    },
    onClick: () => alert("Navigate to WIPRO detail page"),
  },
};

export const WatchlistGrid: Story = {
  name: "Watchlist Grid (3-up)",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      <StockCard
        data={{
          ticker: "TCS",
          name: "Tata Consultancy Services",
          price: 3847,
          change: 88.4,
          changePercent: 2.34,
          open: 3758,
          high: 3862,
          low: 3741,
          volume: "2.1M",
          sparkline: spkUp,
        }}
      />
      <StockCard
        data={{
          ticker: "INFY",
          name: "Infosys Limited",
          price: 1456,
          change: -18.2,
          changePercent: -1.23,
          open: 1474,
          high: 1480,
          low: 1449,
          volume: "4.7M",
          sparkline: spkDown,
        }}
      />
      <StockCard
        data={{
          ticker: "RELIANCE",
          name: "Reliance Industries Ltd",
          price: 2847,
          change: 1.1,
          changePercent: 0.04,
          open: 2840,
          high: 2858,
          low: 2831,
          volume: "3.3M",
          sparkline: spkFlat,
        }}
      />
    </div>
  ),
};

export const IndexCards: Story = {
  name: "Index Cards (NIFTY / Sensex)",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, maxWidth: 560 }}>
      <StockCard
        data={{
          ticker: "NIFTY 50",
          name: "NSE Nifty 50 Index",
          price: 24315,
          change: 143,
          changePercent: 0.59,
          open: 24172,
          high: 24380,
          low: 24088,
          sparkline: spkUp,
        }}
      />
      <StockCard
        data={{
          ticker: "SENSEX",
          name: "BSE Sensitive Index",
          price: 80220,
          change: -112,
          changePercent: -0.14,
          open: 80332,
          high: 80510,
          low: 79988,
          sparkline: spkDown,
        }}
      />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { CustomTickerTape } from "../../components/financial/CustomTickerTape";

const meta: Meta<typeof CustomTickerTape> = {
  title: "Financial/CustomTickerTape",
  component: CustomTickerTape,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CustomTickerTape>;

const sampleItems = [
  { symbol: "BTC/USDT", price: "64,231.50", change: "2.5", isPositive: true },
  { symbol: "ETH/USDT", price: "3,452.10", change: "1.2", isPositive: true },
  { symbol: "SOL/USDT", price: "145.20", change: "4.5", isPositive: false },
  { symbol: "BNB/USDT", price: "582.30", change: "0.8", isPositive: true },
  { symbol: "XRP/USDT", price: "0.62", change: "1.5", isPositive: false },
  { symbol: "ADA/USDT", price: "0.45", change: "0.2", isPositive: true },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const Fast: Story = {
  args: {
    items: sampleItems,
    speed: 10,
  },
};

export const Slow: Story = {
  args: {
    items: sampleItems,
    speed: 40,
  },
};

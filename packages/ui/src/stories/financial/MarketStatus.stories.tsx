import type { Meta, StoryObj } from "@storybook/react";
import { MarketStatus } from "../../components/financial/MarketStatus";

const meta: Meta<typeof MarketStatus> = {
  title: "Financial/MarketStatus",
  component: MarketStatus,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MarketStatus>;

export const Open: Story = {
  args: {
    status: "open",
    market: "NYSE",
  },
};

export const Closed: Story = {
  args: {
    status: "closed",
    market: "London Stock Exchange",
  },
};

export const ClosingSoon: Story = {
  args: {
    status: "closing-soon",
    market: "NSE India",
  },
};

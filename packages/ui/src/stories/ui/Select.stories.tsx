import type { Meta, StoryObj } from "@storybook/react";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator
} from "../../components/ui/Select";
import React from "react";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Radix-based dropdown selection component. Supports grouping, labeling, and smooth animations. Matches the MintX visual language with glassmorphism and rounded corners.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select defaultValue="1m">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Timeframe" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Timeframes</SelectLabel>
          <SelectItem value="1d">1 Day</SelectItem>
          <SelectItem value="1w">1 Week</SelectItem>
          <SelectItem value="1m">1 Month</SelectItem>
          <SelectItem value="1y">1 Year</SelectItem>
          <SelectSeparator />
          <SelectItem value="all">All Time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const FinancialExchanges: Story = {
  name: "Exchanges",
  render: () => (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Select Exchange</label>
      <Select defaultValue="nse">
        <SelectTrigger className="w-[280px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nse">NSE (National Stock Exchange)</SelectItem>
          <SelectItem value="bse">BSE (Bombay Stock Exchange)</SelectItem>
          <SelectItem value="mcx">MCX (Multi Commodity Exchange)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const GroupedOptions: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Market Sectors" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Finance</SelectLabel>
          <SelectItem value="banking">Banking</SelectItem>
          <SelectItem value="insurance">Insurance</SelectItem>
          <SelectItem value="nbfc">NBFC</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Technology</SelectLabel>
          <SelectItem value="it-services">IT Services</SelectItem>
          <SelectItem value="saas">SaaS</SelectItem>
          <SelectItem value="hardward">Hardware</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <Select disabled defaultValue="fixed">
      <SelectTrigger className="w-[200px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fixed">Fixed Selection</SelectItem>
      </SelectContent>
    </Select>
  ),
};

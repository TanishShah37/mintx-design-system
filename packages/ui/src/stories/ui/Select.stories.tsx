import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../components/ui/Select";
import React from "react";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Styled native select element with custom chevron indicator, label, hint, and error states. Maintains full keyboard accessibility and matches Input visual language. Used for timeframe selection, sector filters, order type selection, and settings dropdowns.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Timeframe",
    hint: "Chart display period",
    options: [
      { value: "1d", label: "1 Day" },
      { value: "1w", label: "1 Week" },
      { value: "1m", label: "1 Month" },
      { value: "3m", label: "3 Months" },
      { value: "1y", label: "1 Year" },
      { value: "all", label: "All Time" },
    ],
    value: "1m",
  },
};

export const WithError: Story = {
  name: "Error State",
  args: {
    label: "Sector",
    error: "Please select a sector to continue",
    options: [
      { value: "", label: "Select sector…", disabled: true },
      { value: "it", label: "Information Technology" },
      { value: "banking", label: "Banking & Finance" },
    ],
    value: "",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    label: "Exchange",
    disabled: true,
    options: [{ value: "nse", label: "NSE (National Stock Exchange)" }],
    value: "nse",
    hint: "Exchange is fixed for this instrument",
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 320 }}>
      <Select
        label="Small"
        size="sm"
        options={[{ value: "a", label: "Option A" }]}
      />
      <Select
        label="Medium (default)"
        size="md"
        options={[{ value: "a", label: "Option A" }]}
      />
      <Select
        label="Large"
        size="lg"
        options={[{ value: "a", label: "Option A" }]}
      />
    </div>
  ),
};

export const ScreenerFilters: Story = {
  name: "Screener Filter Row Pattern",
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Select
        size="sm"
        placeholder="Sector"
        options={[
          { value: "it", label: "IT" },
          { value: "banking", label: "Banking" },
          { value: "fmcg", label: "FMCG" },
          { value: "pharma", label: "Pharma" },
          { value: "auto", label: "Auto" },
          { value: "energy", label: "Energy" },
        ]}
        style={{ width: 130 }}
      />
      <Select
        size="sm"
        placeholder="Market Cap"
        options={[
          { value: "large", label: "Large Cap" },
          { value: "mid", label: "Mid Cap" },
          { value: "small", label: "Small Cap" },
          { value: "micro", label: "Micro Cap" },
        ]}
        style={{ width: 140 }}
      />
      <Select
        size="sm"
        placeholder="Index"
        options={[
          { value: "nifty50", label: "Nifty 50" },
          { value: "sensex", label: "Sensex" },
          { value: "nifty100", label: "Nifty 100" },
          { value: "midcap", label: "Nifty Midcap" },
        ]}
        style={{ width: 140 }}
      />
      <Select
        size="sm"
        placeholder="Sort by"
        options={[
          { value: "pe_asc", label: "P/E ↑" },
          { value: "pe_desc", label: "P/E ↓" },
          { value: "mktcap_desc", label: "Mkt Cap ↓" },
          { value: "vol_desc", label: "Volume ↓" },
        ]}
        style={{ width: 120 }}
      />
    </div>
  ),
};

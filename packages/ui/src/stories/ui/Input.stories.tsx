import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/ui/Input";
import { Search, Mail, Lock, IndianRupee } from "lucide-react";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Form input with label, hint, and error states. Supports leading/trailing icon slots, three sizes, and full keyboard accessibility. All states have mint focus rings; error states show red rings. Used in stock search, auth forms, screener filters, and order placement.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "RELIANCE, TCS, INFY…",
    hint: "Enter NSE ticker symbol",
  },
};

export const WithError: Story = {
  name: "Error State",
  args: {
    label: "Email Address",
    placeholder: "you@mintx.trade",
    type: "email",
    error: "Please enter a valid email address",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  name: "Disabled State",
  args: {
    label: "PAN Number",
    placeholder: "ABCDE1234F",
    disabled: true,
    hint: "Verified and locked",
    defaultValue: "ABCDE1234F",
  },
};

export const WithIcons: Story = {
  name: "With Icons",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <Input
        label="Search Stocks"
        placeholder="Search by name or symbol…"
        leftIcon={<Search size={14} />}
      />
      <Input
        label="Email"
        placeholder="you@mintx.trade"
        type="email"
        leftIcon={<Mail size={14} />}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        type="password"
        leftIcon={<Lock size={14} />}
      />
      <Input
        label="Investment Amount"
        placeholder="5000"
        type="number"
        leftIcon={<IndianRupee size={14} />}
        hint="Minimum ₹100"
      />
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <Input label="Small Input" placeholder="sm — compact forms" size="sm" />
      <Input label="Medium Input" placeholder="md — default, most forms" size="md" />
      <Input label="Large Input" placeholder="lg — hero search, prominent CTAs" size="lg" />
    </div>
  ),
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
      <Input label="Default" placeholder="Empty input" />
      <Input
        label="With Value"
        defaultValue="RELIANCE"
        hint="NSE: National Stock Exchange"
      />
      <Input
        label="Error State"
        defaultValue="invalid-ticker"
        error="Symbol not found on NSE or BSE"
      />
      <Input
        label="Disabled"
        defaultValue="Locked value"
        disabled
        hint="This field cannot be edited"
      />
    </div>
  ),
};

export const ScreenerFilter: Story = {
  name: "Screener Filter Row",
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Input placeholder="Min P/E" type="number" size="sm" style={{ width: 120 }} />
      <Input placeholder="Max P/E" type="number" size="sm" style={{ width: 120 }} />
      <Input placeholder="Min Mkt Cap (Cr)" type="number" size="sm" style={{ width: 160 }} />
      <Input placeholder="Min Div Yield %" type="number" size="sm" style={{ width: 160 }} />
    </div>
  ),
};

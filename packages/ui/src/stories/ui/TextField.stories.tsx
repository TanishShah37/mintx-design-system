import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "../../components/ui/TextField";
import { Search, Mail, Lock, IndianRupee, Globe } from "lucide-react";
import React from "react";

const meta: Meta<typeof TextField> = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Advanced form input featuring multiple variants, sizes, and integrated status indicators (loading, success, error). Supports character counting, clear buttons, and leading/trailing icons. Replaces the legacy Input component.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "filled", "flushed", "unstyled"],
    },
    borderRadius: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    helper: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    success: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "RELIANCE, TCS, INFY…",
    hint: "Enter NSE ticker symbol",
    clearable: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-sm">
      <TextField label="Default (Outlined)" placeholder="Border around input" variant="default" />
      <TextField label="Filled" placeholder="Subtle background" variant="filled" />
      <TextField label="Flushed" placeholder="Underline only" variant="flushed" />
    </div>
  ),
};

export const StatusStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-sm">
      <TextField 
        label="Loading State" 
        placeholder="Validating symbol..." 
        loading 
        defaultValue="RELIANCE"
      />
      <TextField 
        label="Success State" 
        placeholder="Valid symbol" 
        success 
        defaultValue="INFY"
        helper="Symbol verified on NSE"
      />
      <TextField 
        label="Error State" 
        placeholder="Invalid symbol" 
        error="Ticker 'INVALID' not found" 
        defaultValue="INVALID"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-sm">
      <TextField
        label="Search Stocks"
        placeholder="Search by name or symbol…"
        leftIcon={<Search size={16} />}
        clearable
      />
      <TextField
        label="Website"
        placeholder="mintx.trade"
        leftIcon={<Globe size={16} />}
        rightIcon={<span className="text-xs font-bold text-mint-600">.com</span>}
      />
      <TextField
        label="Password"
        placeholder="Enter password"
        type="password"
        leftIcon={<Lock size={16} />}
      />
      <TextField
        label="Investment Amount"
        placeholder="5000"
        type="number"
        leftIcon={<IndianRupee size={16} />}
        hint="Min ₹100 · Max ₹10L"
      />
    </div>
  ),
};

export const CharacterCounter: Story = {
  args: {
    label: "Position Note",
    placeholder: "Why are you buying this stock?",
    maxLength: 100,
    defaultValue: "Bought for long term growth potential based on 52-week breakout.",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-sm">
      <TextField label="Small (sm)" placeholder="Compact forms" size="sm" />
      <TextField label="Medium (md)" placeholder="Standard spacing" size="md" />
      <TextField label="Large (lg)" placeholder="Prominent search" size="lg" />
    </div>
  ),
};

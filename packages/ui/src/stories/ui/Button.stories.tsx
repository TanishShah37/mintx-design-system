import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/ui/Button";
import { Plus, ArrowRight, Download, Settings, Trash2 } from "lucide-react";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "ghost",
        "danger",
        "outline-brand",
        "dark",
        "success",
        "warning",
        "info",
        "outline",
        "subtle",
        "soft",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "icon"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    active: { control: "boolean" },
    pressed: { control: "boolean" },
    badge: { control: "text" },
    tooltip: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Invest Now",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "View Details",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Learn More",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Complete Payment",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Risk Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete Position",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "View all transactions",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Cancel changes",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    children: "Mint Active",
  },
};

export const WithIcons: Story = {
  args: {
    variant: "primary",
    leftIcon: <Plus size={16} />,
    rightIcon: <ArrowRight size={16} />,
    children: "Buy Asset",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Settings size={20} />,
    tooltip: "Settings",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Processing order...",
  },
};

export const WithBadge: Story = {
  args: {
    variant: "secondary",
    children: "Notifications",
    badge: 5,
  },
};

export const Tiny: Story = {
  args: {
    size: "2xs",
    children: "New",
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    width: "full",
    children: "Deposit Funds",
  },
};

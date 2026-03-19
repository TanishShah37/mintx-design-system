import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Plus, Loader2 } from "lucide-react";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger", "outline-brand", "dark"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "icon"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
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

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete Position",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: (
      <>
        <Plus className="w-4 h-4 mr-2" />
        Add Asset
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Processing",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Get Started",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import React, { useState } from "react";

const meta: Meta<typeof ConfirmDialog> = {
  title: "UI/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    loading: { control: "boolean" },
    variant: {
      control: "select",
      options: ["primary", "danger", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

const InteractionTemplate = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ConfirmDialog 
        {...args} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          alert("Confirmed!");
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    title: "Confirm Subscription",
    description: "Are you sure you want to subscribe to MintX Pro? This will charge ₹4,999 to your default payment method.",
    confirmLabel: "Subscribe Now",
  },
};

export const Danger: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    variant: "danger",
    title: "Close Position",
    description: "This will immediately close your intraday position in RELIANCE at market price. This action cannot be undone.",
    confirmLabel: "Close at Market",
  },
};

export const Warning: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    variant: "warning",
    title: "Exotic Asset Warning",
    description: "You are about to trade a high-risk penny stock. These assets are highly volatile and illiquid.",
    confirmLabel: "I understand the risks",
  },
};

export const LoadingState: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    title: "Processing Payment",
    description: "Please do not refresh the page while we process your request.",
    loading: true,
  },
};

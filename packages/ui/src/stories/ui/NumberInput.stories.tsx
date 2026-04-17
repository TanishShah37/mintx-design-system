import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "../../components/ui/NumberInput";
import { IndianRupee, Percent } from "lucide-react";
import React from "react";

const meta: Meta<typeof NumberInput> = {
  title: "UI/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    showStepper: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    label: "Quantity",
    placeholder: "0",
    defaultValue: 1,
    min: 1,
    max: 100,
  },
};

export const PriceInput: Story = {
  args: {
    label: "Limit Price",
    placeholder: "0.00",
    step: 0.05,
    min: 0,
    leftIcon: <IndianRupee size={16} />,
    defaultValue: 2450.50,
  },
};

export const Percentage: Story = {
  args: {
    label: "Stop Loss %",
    placeholder: "0",
    min: 0,
    max: 100,
    step: 0.1,
    rightIcon: <Percent size={14} />,
    defaultValue: 2.5,
  },
};

export const LargeStepper: Story = {
  args: {
    label: "Lot Size",
    size: "lg",
    step: 50,
    defaultValue: 50,
    min: 50,
    max: 5000,
    helper: "Must be a multiple of 50",
  },
};

export const WithoutStepper: Story = {
  args: {
    label: "Transaction ID",
    showStepper: false,
    placeholder: "Enter numeric ID",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "../../components/ui/Collapsible";
import { Card } from "../../components/ui/Card";
import React from "react";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    variant: {
      control: "select",
      options: ["ghost", "card", "bordered"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    title: "How do I withdraw funds?",
    children: (
      <p className="text-sm text-neutral-600 leading-relaxed">
        You can withdraw funds by navigating to the Account section and clicking on 'Withdraw'. 
        Withdrawals are usually processed within 24 hours on working days.
      </p>
    ),
  },
};

export const CardVariant: Story = {
  args: {
    variant: "card",
    title: "Technical Indicators",
    children: (
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
          <span className="text-xs font-bold text-neutral-400 block mb-1">RSI (14)</span>
          <span className="text-sm font-bold text-emerald-500">64.2 (Bullish)</span>
        </div>
        <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
          <span className="text-xs font-bold text-neutral-400 block mb-1">MACD</span>
          <span className="text-sm font-bold text-amber-500">Above Signal</span>
        </div>
      </div>
    ),
  },
};

export const BorderedList: Story = {
  render: () => (
    <div className="flex flex-col gap-2 max-w-lg">
      <Collapsible variant="bordered" title="Quarterly Results">
        <div className="space-y-2 text-sm">
          <p>• Net Profit: ₹12,500 Cr (+15% YoY)</p>
          <p>• Revenue: ₹48,000 Cr (+8% YoY)</p>
          <p>• Operating Margin: 24.5%</p>
        </div>
      </Collapsible>
      <Collapsible variant="bordered" title="Shareholding Pattern">
        <p className="text-sm">Promoter holding stable at 72.3%. FII interest increased by 1.2% this quarter.</p>
      </Collapsible>
    </div>
  ),
};

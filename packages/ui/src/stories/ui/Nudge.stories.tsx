import type { Meta, StoryObj } from "@storybook/react";
import { Nudge, type NudgeProps } from "../../components/ui/Nudge";
import { NudgesPanel } from "../../components/ui/NudgesPanel";
import React, { useState } from "react";

const meta: Meta<typeof Nudge> = {
  title: "UI/Nudge",
  component: Nudge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Nudge>;

export const Info: Story = {
  args: {
    id: "nudge-1",
    title: "New Feature Available",
    description: "You can now export your portfolio as a CSV file for easier tracking.",
    variant: "info",
    actionLabel: "Try it now",
    onAction: (id) => console.log("Action on:", id),
    onClose: (id) => console.log("Close:", id),
  },
};

export const Warning: Story = {
  args: {
    id: "nudge-2",
    title: "Account Verification",
    description: "Please verify your email to unlock all trading features.",
    variant: "warning",
    actionLabel: "Verify Email",
  },
};

export const Success: Story = {
  args: {
    id: "nudge-3",
    title: "Trade Executed",
    description: "Your buy order for 0.5 BTC has been successfully completed.",
    variant: "success",
  },
};

export const PanelDemo: Story = {
  render: () => {
    const [nudges, setNudges] = useState<NudgeProps[]>([
      {
        id: "1",
        title: "Welcome to Mintx",
        description: "Start by exploring the latest market trends and top gainers.",
        variant: "info",
        actionLabel: "Explore Markets",
      },
      {
        id: "2",
        title: "Market Alert",
        description: "Bitcoin has reached a new monthly high of $65,000.",
        variant: "warning",
      },
    ]);

    const handleClose = (id: string) => {
      setNudges((prev) => prev.filter((n) => n.id !== id));
    };

    return (
      <div className="h-[400px] w-full relative bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard Preview</h2>
          <p className="opacity-60">Nudges will appear in the bottom-right corner.</p>
          <button 
            onClick={() => setNudges([{
              id: Math.random().toString(),
              title: "Random Alert",
              description: "This is a dynamically added nudge.",
              variant: "neutral" as const,
            }, ...nudges])}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Add Nudge
          </button>
        </div>
        <NudgesPanel
          nudges={nudges}
          onClose={handleClose}
          position="bottom-right"
        />
      </div>
    );
  },
};

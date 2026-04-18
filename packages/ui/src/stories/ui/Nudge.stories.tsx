import type { Meta, StoryObj } from "@storybook/react";
import { Nudge } from "../../components/ui/Nudge";
import { NudgesPanel } from "../../components/ui/NudgesPanel";
import React, { useState } from "react";

const meta: Meta = {
  title: "UI/Nudges",
  tags: ["autodocs"],
};
export default meta;

const sampleNudges = [
  {
    id: "1",
    variant: "info" as const,
    title: "Volume Breakout Detected",
    description: "TCS volume is 3× the 20-day average — unusual institutional activity detected.",
    actionLabel: "View Chart →",
  },
  {
    id: "2",
    variant: "warning" as const,
    title: "Portfolio Concentration Risk",
    description: "IT sector now represents 52% of your portfolio — consider diversifying.",
    actionLabel: "Rebalance →",
  },
  {
    id: "3",
    variant: "success" as const,
    title: "Order Executed",
    description: "Buy 100 RELIANCE @ ₹2450.00 confirmed. Estimated settlement: T+2.",
  },
];

export const NudgeVariants: StoryObj = {
  name: "Nudge (Single)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 420 }}>
      {sampleNudges.map((n) => (
        <Nudge
          key={n.id}
          {...n}
          onClose={(id: string) => console.log("close", id)}
          onAction={(id: string) => console.log("action", id)}
        />
      ))}
    </div>
  ),
};

export const NudgesPanelDemo: StoryObj = {
  name: "NudgesPanel",
  render: () => (
    <div style={{ position: "relative", height: 400, border: "1px dashed rgba(255,255,255,0.1)", borderRadius: 12, overflow: "hidden" }}>
      <p style={{ padding: 24, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))", fontSize: 13 }}>
        The NudgesPanel renders floating nudges in a fixed corner. Below is a simulated preview.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 16 }}>
        {sampleNudges.map((n) => (
          <Nudge
            key={n.id}
            {...n}
            onClose={(id: string) => console.log("close", id)}
          />
        ))}
      </div>
    </div>
  ),
};

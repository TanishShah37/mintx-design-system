import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../../components/ui/Progress";
import React, { useState, useEffect } from "react";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Progress bar with smooth ease-out animation. Four semantic colour variants, three track sizes, optional value label, and shimmer animated mode. Used for portfolio completion, risk scores, SIP progress, onboarding steps, and gamification XP bars.",
      },
    },
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    max: { control: { type: "number" } },
    color: {
      control: "select",
      options: ["brand", "success", "danger", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md"] },
    showValue: { control: "boolean" },
    animated: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 68,
    label: "Portfolio completion",
    showValue: true,
    color: "brand",
  },
};

export const AllColors: Story = {
  name: "All Colours",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Progress value={78} color="brand" label="Brand (Mint) — Portfolio health" showValue />
      <Progress value={82} color="success" label="Success (Green) — Bullish signal strength" showValue />
      <Progress value={37} color="danger" label="Danger (Red) — Drawdown risk" showValue />
      <Progress value={60} color="warning" label="Warning (Amber) — Volatility index" showValue />
      <Progress value={91} color="info" label="Info (Blue) — Data confidence" showValue />
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Progress value={65} size="xs" label="xs — subtle progress" color="brand" />
      <Progress value={65} size="sm" label="sm — default" color="brand" />
      <Progress value={65} size="md" label="md — prominent bars" color="brand" />
    </div>
  ),
};

export const Animated: Story = {
  name: "Shimmer Animated (loading state)",
  args: {
    value: 60,
    label: "Fetching portfolio data…",
    animated: true,
    color: "brand",
  },
};

export const LiveUpdating: Story = {
  name: "Live Updating (animated value)",
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState(10);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const id = setInterval(
        () => setVal((v) => (v >= 100 ? 0 : v + 5)),
        400
      );
      return () => clearInterval(id);
    }, []);
    return (
      <Progress
        value={val}
        label="SIP accumulation progress"
        color="brand"
        showValue
      />
    );
  },
};

export const OnboardingSteps: Story = {
  name: "Onboarding Steps Pattern",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #FFF)",
        border: "1px solid rgba(20,31,29,0.1)",
        borderRadius: 14,
        padding: 24,
        maxWidth: 400,
      }}
    >
      <p
        style={{
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "var(--font-display, 'Syne', sans-serif)",
          marginBottom: 4,
          color: "var(--text-primary, #141F1D)",
        }}
      >
        Complete Your Profile
      </p>
      <p
        style={{
          fontSize: 12,
          color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
          marginBottom: 20,
        }}
      >
        3 of 4 steps complete
      </p>
      <Progress value={75} color="brand" size="sm" showValue />
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
        {[
          { label: "Personal details", done: true },
          { label: "KYC verification", done: true },
          { label: "Bank account linked", done: true },
          { label: "First investment", done: false },
        ].map(({ label, done }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: done ? "var(--mint-400, #10C9A0)" : "rgba(20,31,29,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {done && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--n-950, #001A13)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span
              style={{
                fontSize: 13,
                color: done
                  ? "var(--text-primary, #141F1D)"
                  : "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
                fontWeight: done ? 500 : 400,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

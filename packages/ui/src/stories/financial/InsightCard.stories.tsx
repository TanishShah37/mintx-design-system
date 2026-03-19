import type { Meta, StoryObj } from "@storybook/react";
import { InsightCard } from "../../components/financial/InsightCard";
import React from "react";

const meta: Meta<typeof InsightCard> = {
  title: "Financial/InsightCard",
  component: InsightCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Educational insight card for displaying AI-generated market observations. Features a left mint accent border, tag label, title, body text, and trailing badge chips. All insights display an 'Illustrative Only' or 'Educational' badge to meet SEBI compliance requirements — Mintx never provides direct buy/sell recommendations. Supports hover lift and click handler for detail expansion.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InsightCard>;

export const Default: Story = {
  args: {
    data: {
      tag: "Fibonacci Zone",
      title: "RELIANCE at 61.8% retracement — key support level",
      body: "RELIANCE is trading at ₹2,847, aligning with the 61.8% Fibonacci retracement from the Sept–Nov swing. This is a historically watched support zone. Not a buy recommendation.",
      badges: [
        { label: "Illustrative only", variant: "neutral" },
        { label: "Technical tool", variant: "blue" },
      ],
    },
  },
};

export const VolumeBreakout: Story = {
  name: "Volume Breakout Signal",
  args: {
    data: {
      tag: "Volume Breakout",
      title: "TCS Volume 3× average — unusual activity detected",
      body: "Today's volume at 2.1M shares is 3× the 20-day average. This often precedes significant price movement. Use as one signal among many. Educational and informational only.",
      badges: [
        { label: "Illustrative only", variant: "neutral" },
        { label: "Volume signal", variant: "mint" },
      ],
    },
  },
};

export const FIIFlow: Story = {
  name: "FII / DII Flow",
  args: {
    data: {
      tag: "Institutional Flow",
      title: "FIIs net buyers ₹4,200 Cr — 3rd consecutive session",
      body: "Foreign Institutional Investors have been net buyers for three sessions running, totalling ₹12,600 Cr. This data is sourced from NSE/BSE official disclosures. Not predictive of future flows.",
      badges: [
        { label: "Illustrative only", variant: "neutral" },
        { label: "Institutional", variant: "purple" },
      ],
    },
  },
};

export const Clickable: Story = {
  name: "Clickable (expandable)",
  args: {
    data: {
      tag: "Resistance Zone",
      title: "HDFC Bank approaching key resistance at ₹1,680",
      body: "HDFC Bank has tested ₹1,680 four times in the past 60 days without a sustained breakout. Watch for price action around this level. For educational understanding of resistance concepts.",
      badges: [
        { label: "Illustrative only", variant: "neutral" },
        { label: "Price action", variant: "amber" },
      ],
    },
    onClick: () => alert("Expand insight detail"),
  },
};

export const HomeFeed: Story = {
  name: "Home Feed (stacked)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <InsightCard
        data={{
          tag: "Fibonacci Zone",
          title: "RELIANCE at 61.8% retracement — key support",
          body: "RELIANCE is trading at ₹2,847, aligning with the 61.8% Fibonacci retracement. Historically watched support zone.",
          badges: [
            { label: "Illustrative only", variant: "neutral" },
            { label: "Technical", variant: "blue" },
          ],
        }}
      />
      <InsightCard
        data={{
          tag: "Volume Breakout",
          title: "TCS Volume 3× average — unusual activity",
          body: "Today's volume at 2.1M shares is 3× the 20-day average. Educational context only — not a signal to act.",
          badges: [
            { label: "Illustrative only", variant: "neutral" },
            { label: "Volume", variant: "mint" },
          ],
        }}
      />
      <InsightCard
        data={{
          tag: "Sector Rotation",
          title: "IT sector outperforming NIFTY by 2.1% this week",
          body: "Nifty IT index up 3.4% vs NIFTY 50 up 1.3% over the past 5 sessions. This context is for educational understanding of sector dynamics.",
          badges: [
            { label: "Illustrative only", variant: "neutral" },
            { label: "Sector", variant: "purple" },
          ],
        }}
      />
    </div>
  ),
};

export const Grid: Story = {
  name: "2-Column Grid",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {[
        {
          tag: "Fibonacci Zone",
          title: "RELIANCE at 61.8% retracement",
          body: "Historically watched support zone at ₹2,847.",
          badges: [
            { label: "Illustrative only", variant: "neutral" as const },
            { label: "Technical", variant: "blue" as const },
          ],
        },
        {
          tag: "Volume Breakout",
          title: "TCS Volume 3× average",
          body: "2.1M shares vs 20-day average of 700K. Educational context.",
          badges: [
            { label: "Illustrative only", variant: "neutral" as const },
            { label: "Volume", variant: "mint" as const },
          ],
        },
        {
          tag: "FII Flow",
          title: "FIIs net buyers 3rd session",
          body: "₹4,200 Cr net inflow today. NSE/BSE data. Not predictive.",
          badges: [
            { label: "Illustrative only", variant: "neutral" as const },
            { label: "Institutional", variant: "purple" as const },
          ],
        },
        {
          tag: "RSI Signal",
          title: "INFY RSI at 31 — oversold territory",
          body: "RSI below 30 can indicate an oversold condition. This is a technical context tool, not a recommendation.",
          badges: [
            { label: "Illustrative only", variant: "neutral" as const },
            { label: "Momentum", variant: "amber" as const },
          ],
        },
      ].map((d, i) => (
        <InsightCard key={i} data={d} />
      ))}
    </div>
  ),
};

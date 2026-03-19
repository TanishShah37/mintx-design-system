import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../../components/ui/Skeleton";
import React from "react";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Loading placeholder with shimmer animation. Supports block, text (multi-line), pill, and circle shapes. Used as loading state for all major content areas — stock cards, charts, news feeds, user profiles, and data tables. Prevents layout shift during data fetching.",
      },
    },
  },
  argTypes: {
    width: { control: "text" },
    height: { control: "number" },
    rounded: { control: "boolean" },
    circle: { control: "boolean" },
    lines: { control: { type: "number", min: 1, max: 6 } },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { width: 200, height: 16 },
};

export const TextBlock: Story = {
  name: "Multi-line Text (lines prop)",
  args: { lines: 4, width: "100%" },
};

export const Circle: Story = {
  name: "Circle (avatar)",
  args: { circle: true, width: 40, height: 40 },
};

export const Pill: Story = {
  name: "Pill / Badge",
  args: { rounded: true, width: 80, height: 22 },
};

export const StockCardSkeleton: Story = {
  name: "Stock Card Loading State",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #FFF)",
        border: "1px solid rgba(20,31,29,0.08)",
        borderRadius: 14,
        padding: 16,
        width: 240,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <Skeleton width={60} height={20} style={{ marginBottom: 6 }} />
          <Skeleton width={120} height={12} />
        </div>
        <div style={{ textAlign: "right" }}>
          <Skeleton width={70} height={20} style={{ marginBottom: 6 }} />
          <Skeleton width={50} height={12} />
        </div>
      </div>
      <Skeleton width="100%" height={40} style={{ marginBottom: 12, borderRadius: 6 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        <Skeleton height={28} />
        <Skeleton height={28} />
        <Skeleton height={28} />
      </div>
    </div>
  ),
};

export const DashboardSkeleton: Story = {
  name: "Dashboard Loading Pattern",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Metric row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg-surface, #FFF)",
              border: "1px solid rgba(20,31,29,0.08)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <Skeleton width={80} height={10} style={{ marginBottom: 10 }} />
            <Skeleton width={100} height={28} style={{ marginBottom: 8 }} />
            <Skeleton width={60} height={12} />
          </div>
        ))}
      </div>
      {/* Content area */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div
          style={{
            background: "var(--bg-surface, #FFF)",
            border: "1px solid rgba(20,31,29,0.08)",
            borderRadius: 12,
            padding: 20,
          }}
        >
          <Skeleton width={160} height={18} style={{ marginBottom: 20 }} />
          <Skeleton width="100%" height={180} style={{ borderRadius: 8 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface, #FFF)",
                border: "1px solid rgba(20,31,29,0.08)",
                borderRadius: 10,
                padding: 14,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Skeleton circle width={32} height={32} />
              <div style={{ flex: 1 }}>
                <Skeleton width="70%" height={12} style={{ marginBottom: 6 }} />
                <Skeleton width="50%" height={10} />
              </div>
              <Skeleton width={50} height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  name: "Data Table Loading Pattern",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #FFF)",
        border: "1px solid rgba(20,31,29,0.08)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: 16,
          padding: "12px 20px",
          background: "rgba(20,31,29,0.03)",
          borderBottom: "1px solid rgba(20,31,29,0.08)",
        }}
      >
        {[140, 80, 80, 80, 60].map((w, i) => (
          <Skeleton key={i} width={w} height={10} />
        ))}
      </div>
      {/* Rows */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 16,
            padding: "14px 20px",
            borderBottom: "1px solid rgba(20,31,29,0.05)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Skeleton circle width={28} height={28} />
            <div>
              <Skeleton width={60} height={12} style={{ marginBottom: 4 }} />
              <Skeleton width={100} height={10} />
            </div>
          </div>
          {[70, 60, 60, 50].map((w, j) => (
            <Skeleton key={j} width={w} height={12} />
          ))}
        </div>
      ))}
    </div>
  ),
};

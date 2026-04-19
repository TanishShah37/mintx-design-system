import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../components/shared/Avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "User avatar with initials fallback, image support, five sizes, and status indicator dot. Initials are rendered in Syne display font over a mint-to-mint-dark gradient. Status indicator supports live (animated pulse), paused, offline, error, and pro states. Used in navbars, community posts, RM cards, and notification lists.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    status: {
      control: "select",
      options: [undefined, "online", "offline", "away", "busy", "live", "pro"],
    },
    initials: { control: "text" },
    alt: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initials: "RK",
    size: "md",
    alt: "Rajesh Kumar",
  },
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Avatar initials="AB" size="xs" />
      <Avatar initials="AB" size="sm" />
      <Avatar initials="AB" size="md" />
      <Avatar initials="AB" size="lg" />
      <Avatar initials="AB" size="xl" />
    </div>
  ),
};

export const WithStatus: Story = {
  name: "With Status Indicators",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <Avatar initials="LV" size="md" status="live" />
        <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>live</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <Avatar initials="ON" size="md" status="online" />
        <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>online</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <Avatar initials="OF" size="md" status="offline" />
        <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>offline</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <Avatar initials="AW" size="md" status="away" />
        <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>away</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <Avatar initials="BS" size="md" status="busy" />
        <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>busy</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <Avatar initials="PR" size="md" status="pro" />
        <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>pro</span>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  name: "With Image Source",
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar
        src="https://i.pravatar.cc/64?img=12"
        alt="Priya Sharma"
        size="md"
        status="live"
      />
      <Avatar
        src="https://i.pravatar.cc/64?img=33"
        alt="Arjun Mehta"
        size="md"
        status="pro"
      />
      {/* Broken src — falls back to initials */}
      <Avatar
        src="https://broken-url.example.com/avatar.jpg"
        alt="Fallback User"
        initials="FU"
        size="md"
      />
    </div>
  ),
};

export const RMCard: Story = {
  name: "RM Card Pattern",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #FFF)",
        border: "1px solid rgba(20,31,29,0.08)",
        borderRadius: 14,
        padding: 20,
        display: "flex",
        alignItems: "center",
        gap: 16,
        maxWidth: 360,
      }}
    >
      <Avatar initials="VB" size="lg" status="live" />
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "var(--text-primary, #141F1D)",
            fontFamily: "var(--font-display, 'Syne', sans-serif)",
          }}
        >
          Vikram Bose
        </p>
        <p style={{ fontSize: 12, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>
          Relationship Manager · Mintx Enterprise
        </p>
        <p style={{ fontSize: 12, color: "var(--chart-bullish, var(--chart-bullish, #22C55E))", marginTop: 4, fontWeight: 500 }}>
          ● Available now
        </p>
      </div>
      <button
        style={{
          padding: "7px 14px",
          background: "var(--mint-400, #10C9A0)",
          color: "var(--n-950, #001A13)",
          borderRadius: 8,
          border: "none",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Message
      </button>
    </div>
  ),
};

export const AvatarGroup: Story = {
  name: "Avatar Group (stacked)",
  render: () => (
    <div style={{ display: "flex" }}>
      {[
        { initials: "AK", status: "live" as const },
        { initials: "PS", status: "pro" as const },
        { initials: "RJ", status: "offline" as const },
        { initials: "NM", status: "live" as const },
      ].map((a, i) => (
        <div key={a.initials} style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 10 - i }}>
          <Avatar
            initials={a.initials}
            status={a.status}
            size="sm"
            style={{ border: "2px solid var(--bg-surface, #FFF)" }}
          />
        </div>
      ))}
      <div
        style={{
          marginLeft: -10,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(20,31,29,0.08)",
          border: "2px solid var(--bg-surface, #FFF)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
          color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
          zIndex: 6,
        }}
      >
        +9
      </div>
    </div>
  ),
};

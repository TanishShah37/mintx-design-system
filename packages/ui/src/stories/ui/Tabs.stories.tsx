import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../../components/ui/Tabs";
import { TrendingUp, BarChart2, BookOpen, Bell } from "lucide-react";
import React, { useState } from "react";

const items = [
  { id: "overview", label: "Overview" },
  { id: "charts", label: "Charts" },
  { id: "financials", label: "Financials" },
  { id: "news", label: "News" },
];

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Tab navigation with four visual variants — default pill selector, brand mint active tab, pill individual tabs, and underline. Supports icons, badge counts, disabled tabs, and both controlled/uncontrolled modes. Used in stock detail pages, analytics dashboards, settings screens, and the Academy.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "brand", "pills", "underline"],
    },
    size: { control: "select", options: ["sm", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: { items, defaultActiveId: "overview" },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["default", "brand", "pills", "underline"] as const).map((v) => (
        <div key={v}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
              marginBottom: 10,
            }}
          >
            variant=&quot;{v}&quot;
          </p>
          <Tabs items={items} variant={v} defaultActiveId="overview" />
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  name: "With Icons",
  render: () => (
    <Tabs
      variant="default"
      defaultActiveId="markets"
      items={[
        { id: "markets", label: "Markets", icon: <TrendingUp size={13} /> },
        { id: "charts", label: "Charts", icon: <BarChart2 size={13} /> },
        { id: "academy", label: "Academy", icon: <BookOpen size={13} /> },
        { id: "alerts", label: "Alerts", icon: <Bell size={13} />, badge: 3 },
      ]}
    />
  ),
};

export const WithBadges: Story = {
  name: "With Badges",
  render: () => (
    <Tabs
      variant="pills"
      defaultActiveId="all"
      items={[
        { id: "all", label: "All", badge: 124 },
        { id: "buy", label: "Buy Orders", badge: 12 },
        { id: "sell", label: "Sell Orders", badge: 8 },
        { id: "sip", label: "SIP", badge: 4 },
      ]}
    />
  ),
};

export const WithDisabled: Story = {
  name: "With Disabled Tab",
  args: {
    variant: "default",
    defaultActiveId: "basic",
    items: [
      { id: "basic", label: "Basic" },
      { id: "technical", label: "Technical" },
      { id: "institutional", label: "Institutional", disabled: true },
      { id: "options", label: "Options Chain", disabled: true },
    ],
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <p
          style={{
            fontSize: 11,
            color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
            marginBottom: 8,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          size=&quot;sm&quot;
        </p>
        <Tabs items={items} size="sm" defaultActiveId="overview" />
      </div>
      <div>
        <p
          style={{
            fontSize: 11,
            color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
            marginBottom: 8,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          size=&quot;md&quot; (default)
        </p>
        <Tabs items={items} size="md" defaultActiveId="overview" />
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  name: "Controlled (with panel swap)",
  render: () => {
    const [tab, setTab] = useState("overview");
    const content: Record<string, string> = {
      overview: "Company overview, key metrics, and fundamentals at a glance.",
      charts: "Candlestick chart, volume bars, and technical indicators.",
      financials: "P&L, balance sheet, cash flow, and quarterly trends.",
      news: "Latest news, analyst ratings, and corporate actions.",
    };
    return (
      <div>
        <Tabs
          items={items}
          activeId={tab}
          onChange={setTab}
          variant="underline"
        />
        <div
          style={{
            marginTop: 20,
            padding: 20,
            background: "var(--bg-surface, var(--bg-surface, #0D1614))",
            border: "1px solid rgba(232,239,237,0.08)",
            borderRadius: 12,
            fontSize: 14,
            color: "var(--text-secondary, var(--text-secondary, #9BACA6))",
          }}
        >
          {content[tab]}
        </div>
      </div>
    );
  },
};

export const StockDetailPage: Story = {
  name: "Stock Detail Page Pattern",
  render: () => {
    const [tab, setTab] = useState("overview");
    const panelContent: Record<string, string> = {
      overview: "Fundamentals, shareholding, and key ratios.",
      charts: "Price chart with technical indicator overlay.",
      financials: "Quarterly P&L, balance sheet, and cash flow data.",
      peers: "TCS vs peers: Infosys, Wipro, HCL Tech.",
      news: "3 recent news items for TCS.",
    };
    return (
      <div style={{ maxWidth: 680 }}>
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: "var(--text-primary, var(--text-primary, #E8EFED))",
            }}
          >
            TCS
          </p>
          <p style={{ fontSize: 13, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>
            Tata Consultancy Services Ltd · NSE
          </p>
        </div>
        <Tabs
          items={[
            { id: "overview", label: "Overview" },
            { id: "charts", label: "Charts" },
            { id: "financials", label: "Financials" },
            { id: "peers", label: "Peers" },
            { id: "news", label: "News", badge: 3 },
          ]}
          activeId={tab}
          onChange={setTab}
          variant="underline"
        />
        <div
          style={{
            padding: "24px 0",
            fontSize: 14,
            color: "var(--text-secondary, var(--text-secondary, #9BACA6))",
          }}
        >
          {panelContent[tab]}
        </div>
      </div>
    );
  },
};

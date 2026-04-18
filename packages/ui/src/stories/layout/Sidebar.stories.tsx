import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../../components/shell/Sidebar";
import { ThemeProvider } from "../../components/shell/ThemeProvider";
import {
  Home,
  TrendingUp,
  Search,
  BookOpen,
  Bell,
  Settings,
  BarChart2,
  Users,
  FileText,
  CreditCard,
} from "lucide-react";
import React, { useState } from "react";

const mainNavSections = [
  {
    items: [
      { id: "home", label: "Home", icon: <Home size={16} /> },
      { id: "markets", label: "Markets", icon: <TrendingUp size={16} />, badge: "Live", badgeVariant: "mint" as const },
      { id: "screener", label: "Screener", icon: <Search size={16} /> },
      { id: "portfolio", label: "Portfolio", icon: <BarChart2 size={16} /> },
    ],
  },
  {
    label: "Learn",
    items: [
      { id: "academy", label: "Academy", icon: <BookOpen size={16} />, badge: "New", badgeVariant: "amber" as const },
      { id: "community", label: "Community", icon: <Users size={16} /> },
    ],
  },
  {
    label: "Account",
    items: [
      { id: "alerts", label: "Alerts", icon: <Bell size={16} />, badge: "3" },
      { id: "reports", label: "Reports", icon: <FileText size={16} /> },
      { id: "billing", label: "Billing", icon: <CreditCard size={16} /> },
      { id: "settings", label: "Settings", icon: <Settings size={16} /> },
    ],
  },
];

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Application sidebar with collapsible sections, active state tracking, nested children support, badge chips, and a collapsible mode (260px → 60px) with smooth width transition. The footer slot accepts any node — defaults to `ThemeToggle`. Requires `ThemeProvider` in the tree. On collapse, labels and section headers hide; icons remain centred. Keyboard navigable and ARIA-labelled.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar sections={mainNavSections} activeId="markets" />
        <div
          style={{
            flex: 1,
            padding: 32,
            background: "#080E0D",
            color: "var(--text-secondary, #9BACA6)",
            fontSize: 14,
          }}
        >
          Main content area
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const Collapsed: Story = {
  name: "Collapsed State",
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar sections={mainNavSections} activeId="home" collapsed />
        <div
          style={{
            flex: 1,
            padding: 32,
            background: "#080E0D",
            color: "var(--text-secondary, #9BACA6)",
            fontSize: 14,
          }}
        >
          Sidebar is collapsed — only icons visible
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const CollapsibleInteractive: Story = {
  name: "Collapsible (interactive)",
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [collapsed, setCollapsed] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState("markets");
    return (
      <ThemeProvider defaultTheme="dark">
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar
            sections={mainNavSections}
            activeId={active}
            onNavigate={(item) => setActive(item.id)}
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
          />
          <div
            style={{
              flex: 1,
              padding: 32,
              background: "#080E0D",
              color: "var(--text-secondary, #9BACA6)",
              fontSize: 14,
            }}
          >
            <p>Active: <strong style={{ color: "var(--text-primary, #E8EFED)" }}>{active}</strong></p>
            <p style={{ marginTop: 8 }}>Collapsed: <strong style={{ color: "var(--text-primary, #E8EFED)" }}>{String(collapsed)}</strong></p>
            <p style={{ marginTop: 16, fontSize: 12 }}>Click the menu icon in the sidebar header to toggle.</p>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const LightTheme: Story = {
  name: "Light Theme",
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar sections={mainNavSections} activeId="portfolio" />
        <div
          style={{
            flex: 1,
            padding: 32,
            background: "#F5F8F7",
            color: "#3A524D",
            fontSize: 14,
          }}
        >
          Light theme sidebar
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const WithNestedItems: Story = {
  name: "With Nested Navigation",
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar
          sections={[
            {
              items: [
                { id: "home", label: "Home", icon: <Home size={16} /> },
                {
                  id: "markets",
                  label: "Markets",
                  icon: <TrendingUp size={16} />,
                  children: [
                    { id: "indices", label: "Indices" },
                    { id: "stocks", label: "Stocks" },
                    { id: "fno", label: "F&O" },
                    { id: "commodities", label: "Commodities" },
                  ],
                },
                { id: "screener", label: "Screener", icon: <Search size={16} /> },
              ],
            },
          ]}
          activeId="indices"
        />
        <div
          style={{
            flex: 1,
            padding: 32,
            background: "#080E0D",
            color: "var(--text-secondary, #9BACA6)",
            fontSize: 14,
          }}
        >
          Expand "Markets" to see nested items
        </div>
      </div>
    </ThemeProvider>
  ),
};

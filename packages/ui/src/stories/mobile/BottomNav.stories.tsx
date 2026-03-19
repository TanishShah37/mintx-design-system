import type { Meta, StoryObj } from "@storybook/react";
import { BottomNav } from "../../components/mobile/BottomNav";
import {
  Home,
  TrendingUp,
  PlusCircle,
  GraduationCap,
  User,
} from "lucide-react";
import React, { useState } from "react";
import type { BottomNavItem } from "../../types";

const defaultItems: BottomNavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home size={20} strokeWidth={1.8} />,
    activeIcon: <Home size={20} strokeWidth={2.4} />,
  },
  {
    id: "markets",
    label: "Markets",
    icon: <TrendingUp size={20} strokeWidth={1.8} />,
    activeIcon: <TrendingUp size={20} strokeWidth={2.4} />,
  },
  {
    id: "invest",
    label: "Invest",
    icon: <PlusCircle size={20} strokeWidth={1.8} />,
    activeIcon: <PlusCircle size={20} strokeWidth={2.4} />,
  },
  {
    id: "academy",
    label: "Academy",
    icon: <GraduationCap size={20} strokeWidth={1.8} />,
    activeIcon: <GraduationCap size={20} strokeWidth={2.4} />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User size={20} strokeWidth={1.8} />,
    activeIcon: <User size={20} strokeWidth={2.4} />,
  },
];

const meta: Meta<typeof BottomNav> = {
  title: "Mobile/BottomNav",
  component: BottomNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Fixed bottom navigation bar for mobile-first screens. Supports 3–5 tabs with icon + label, active dot indicator, active/default icon swap, and `env(safe-area-inset-bottom)` padding for iOS home bar. Active tab uses mint colour; inactive uses `text-tertiary`. Each tab has `aria-current='page'` and `aria-label`. Backdrop blur on scroll keeps it visually stable.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {
  render: () => (
    <div style={{ position: "relative", height: 400, background: "#080E0D", overflow: "hidden" }}>
      <div style={{ padding: 24, color: "#9BACA6", fontSize: 14 }}>
        Mobile screen content
      </div>
      <BottomNav items={defaultItems} activeId="home" />
    </div>
  ),
};

export const MarketsActive: Story = {
  name: "Markets Tab Active",
  render: () => (
    <div style={{ position: "relative", height: 400, background: "#080E0D", overflow: "hidden" }}>
      <BottomNav items={defaultItems} activeId="markets" />
    </div>
  ),
};

export const Interactive: Story = {
  name: "Interactive (state managed)",
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState("home");
    const labels: Record<string, string> = {
      home: "Home Dashboard",
      markets: "Market Overview",
      invest: "Investment Centre",
      academy: "Mintx Academy",
      profile: "Your Profile",
    };
    return (
      <div style={{ position: "relative", height: 500, background: "#080E0D", overflow: "hidden" }}>
        <div style={{ padding: "32px 24px", color: "#E8EFED" }}>
          <p style={{ fontSize: 11, color: "#5A706A", fontFamily: "'DM Mono', monospace", marginBottom: 6 }}>
            Active screen:
          </p>
          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {labels[active]}
          </p>
          <p style={{ fontSize: 13, color: "#748A83", marginTop: 8 }}>
            Tap the bottom nav tabs to switch screens.
          </p>
        </div>
        <BottomNav
          items={defaultItems}
          activeId={active}
          onNavigate={(item) => setActive(item.id)}
        />
      </div>
    );
  },
};

export const ThreeItems: Story = {
  name: "3-Tab Variant",
  render: () => (
    <div style={{ position: "relative", height: 400, background: "#F5F8F7", overflow: "hidden" }}>
      <BottomNav
        activeId="home"
        items={[
          {
            id: "home",
            label: "Home",
            icon: <Home size={20} strokeWidth={1.8} />,
          },
          {
            id: "markets",
            label: "Markets",
            icon: <TrendingUp size={20} strokeWidth={1.8} />,
          },
          {
            id: "profile",
            label: "Profile",
            icon: <User size={20} strokeWidth={1.8} />,
          },
        ]}
      />
    </div>
  ),
};

export const LightBackground: Story = {
  name: "Light Theme",
  render: () => (
    <div
      style={{
        position: "relative",
        height: 400,
        background: "#F5F8F7",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: 24, color: "#3A524D", fontSize: 14 }}>
        Light mode mobile screen
      </div>
      <BottomNav items={defaultItems} activeId="academy" />
    </div>
  ),
};

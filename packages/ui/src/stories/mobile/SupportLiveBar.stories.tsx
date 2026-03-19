import type { Meta, StoryObj } from "@storybook/react";
import { SupportLiveBar } from "../../components/mobile/SupportLiveBar";
import React from "react";

const meta: Meta<typeof SupportLiveBar> = {
  title: "Mobile/SupportLiveBar",
  component: SupportLiveBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Persistent bottom utility bar combining real-time market session status with a support CTA. The market status dot animates with `pulse-live` when session is `open`. Four session states: `pre-open` (amber), `open` (green + pulse), `closed` (grey), `post-close` (grey). The support button opens the live chat widget. Used above the BottomNav on mobile and at the bottom of the sidebar on desktop.",
      },
    },
  },
  argTypes: {
    onSupportClick: { action: "support clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof SupportLiveBar>;

export const MarketOpen: Story = {
  name: "Market Open (live)",
  args: {
    marketStatus: {
      session: "open",
      label: "Market Open",
      nextEvent: "Closes at",
      nextEventTime: "15:30",
    },
  },
};

export const PreOpen: Story = {
  name: "Pre-Open Session",
  args: {
    marketStatus: {
      session: "pre-open",
      label: "Pre-Open",
      nextEvent: "Opens at",
      nextEventTime: "09:15",
    },
  },
};

export const MarketClosed: Story = {
  name: "Market Closed",
  args: {
    marketStatus: {
      session: "closed",
      label: "Market Closed",
      nextEvent: "Opens at",
      nextEventTime: "09:00",
    },
  },
};

export const PostClose: Story = {
  name: "Post-Close Session",
  args: {
    marketStatus: {
      session: "post-close",
      label: "Post-Close",
      nextEvent: "Session ends",
      nextEventTime: "16:00",
    },
  },
};

export const AllSessions: Story = {
  name: "All Sessions",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(
        [
          {
            session: "pre-open" as const,
            label: "Pre-Open",
            nextEvent: "Opens at",
            nextEventTime: "09:15",
          },
          {
            session: "open" as const,
            label: "Market Open",
            nextEvent: "Closes at",
            nextEventTime: "15:30",
          },
          {
            session: "post-close" as const,
            label: "Post-Close",
            nextEvent: "Session ends",
            nextEventTime: "16:00",
          },
          {
            session: "closed" as const,
            label: "Market Closed",
            nextEvent: "Opens at",
            nextEventTime: "09:00",
          },
        ]
      ).map((status) => (
        <div
          key={status.session}
          style={{
            background: "var(--bg-surface, #0D1614)",
            border: "1px solid rgba(232,239,237,0.08)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <SupportLiveBar marketStatus={status} />
        </div>
      ))}
    </div>
  ),
};

export const SupportOnly: Story = {
  name: "Support Button Only (no market status)",
  args: {
    onSupportClick: () => alert("Open support chat"),
  },
};

export const InMobileLayout: Story = {
  name: "In Mobile Layout (above BottomNav)",
  render: () => (
    <div
      style={{
        position: "relative",
        height: 500,
        background: "#080E0D",
        overflow: "hidden",
        maxWidth: 390,
      }}
    >
      <div style={{ padding: 24, color: "#9BACA6", fontSize: 14 }}>
        Mobile app content area
      </div>
      {/* SupportLiveBar sits above the BottomNav */}
      <div style={{ position: "absolute", bottom: 64, left: 0, right: 0 }}>
        <SupportLiveBar
          marketStatus={{
            session: "open",
            label: "Market Open",
            nextEvent: "Closes at",
            nextEventTime: "15:30",
          }}
        />
      </div>
      {/* Simulated BottomNav */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          background: "#0D1614",
          borderTop: "1px solid rgba(232,239,237,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 8px",
        }}
      >
        {["⌂", "📊", "⊕", "🎓", "◉"].map((icon, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              color: i === 0 ? "#10C9A0" : "#5A706A",
              fontSize: 20,
              padding: "8px 12px",
            }}
          >
            {icon}
            <span style={{ fontSize: 9 }}>
              {["Home", "Markets", "Invest", "Learn", "Profile"][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

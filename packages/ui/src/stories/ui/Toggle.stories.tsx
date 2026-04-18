import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../components/ui/Toggle";
import React, { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Accessible switch / toggle component with spring-physics thumb animation. Two sizes, optional label, supports both controlled and uncontrolled modes. Used in notification preferences, dark mode switch, feature toggles, and settings panels. Uses role='switch' and aria-checked for full WCAG compliance.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: "Push Notifications",
    defaultChecked: true,
  },
};

export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Toggle label={on ? "Enabled" : "Disabled"} checked={on} onChange={setOn} />
        <p style={{ fontSize: 12, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))" }}>
          Value: <strong>{String(on)}</strong>
        </p>
      </div>
    );
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Toggle size="sm" label="Small toggle" defaultChecked />
      <Toggle size="md" label="Medium toggle (default)" defaultChecked />
    </div>
  ),
};

export const Disabled: Story = {
  name: "Disabled States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Toggle label="Disabled off" disabled />
      <Toggle label="Disabled on" disabled checked />
    </div>
  ),
};

export const SettingsPanel: Story = {
  name: "Settings Panel Pattern",
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [notifs, setNotifs] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dark, setDark] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pro, setPro] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sip, setSip] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alerts, setAlerts] = useState(true);
    return (
      <div
        style={{
          background: "var(--bg-surface, #FFFFFF)",
          border: "1px solid rgba(20,31,29,0.1)",
          borderRadius: 14,
          padding: 24,
          maxWidth: 360,
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))",
            marginBottom: 16,
          }}
        >
          Notification Preferences
        </p>
        {[
          { label: "Push Notifications", val: notifs, set: setNotifs },
          { label: "Dark Mode", val: dark, set: setDark },
          { label: "SIP Reminders", val: sip, set: setSip },
          { label: "Price Alerts", val: alerts, set: setAlerts },
          { label: "Pro Features (locked)", val: pro, set: setPro, disabled: true },
        ].map(({ label, val, set, disabled }) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid rgba(20,31,29,0.07)",
            }}
          >
            <span style={{ fontSize: 13, color: "var(--text-secondary, #3A524D)" }}>
              {label}
            </span>
            <Toggle checked={val} onChange={set} disabled={disabled} />
          </div>
        ))}
      </div>
    );
  },
};

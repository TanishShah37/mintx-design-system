import type { Meta, StoryObj } from "@storybook/react";
import { MintxLogo } from "../../components/layout/MintxLogo";
import React from "react";

const meta: Meta<typeof MintxLogo> = {
  title: "Layout/MintxLogo",
  component: MintxLogo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Mintx brand mark in three variants: `mark` (icon only), `wordmark` (text only), `full` (icon + text). Four themes adapt the colour to different backgrounds: `brand` (mint bg + dark stroke), `dark` (mint accent on dark surface), `light` (mint accent on light surface), `white` (white on dark overlays). Five sizes from `xs` to `xl`. Always uses the SVG trade-line icon — never rasterise or distort.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["mark", "wordmark", "full"],
    },
    theme: {
      control: "select",
      options: ["brand", "dark", "light", "white"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MintxLogo>;

export const Default: Story = {
  args: {
    variant: "full",
    theme: "brand",
    size: "md",
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {(["mark", "wordmark", "full"] as const).map((v) => (
        <div key={v} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              fontSize: 11,
              color: "var(--text-tertiary, #748A83)",
              width: 80,
              flexShrink: 0,
            }}
          >
            variant="{v}"
          </span>
          <MintxLogo variant={v} size="md" />
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "flex-start",
      }}
    >
      {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-mono, 'DM Mono', monospace)",
              fontSize: 11,
              color: "var(--text-tertiary, #748A83)",
              width: 40,
              flexShrink: 0,
            }}
          >
            {s}
          </span>
          <MintxLogo variant="full" size={s} />
        </div>
      ))}
    </div>
  ),
};

export const AllThemes: Story = {
  name: "All Themes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, overflow: "hidden", borderRadius: 12 }}>
      <div
        style={{ padding: "20px 24px", background: "#FFFFFF" }}
      >
        <p style={{ fontSize: 10, color: "#748A83", marginBottom: 10, fontFamily: "'DM Mono', monospace" }}>
          theme="light" on white bg
        </p>
        <MintxLogo variant="full" theme="light" size="md" />
      </div>
      <div
        style={{ padding: "20px 24px", background: "#10C9A0" }}
      >
        <p style={{ fontSize: 10, color: "#004736", marginBottom: 10, fontFamily: "'DM Mono', monospace" }}>
          theme="brand" on mint bg
        </p>
        <MintxLogo variant="full" theme="brand" size="md" />
      </div>
      <div
        style={{ padding: "20px 24px", background: "#0D1614" }}
      >
        <p style={{ fontSize: 10, color: "#5A706A", marginBottom: 10, fontFamily: "'DM Mono', monospace" }}>
          theme="dark" on dark bg
        </p>
        <MintxLogo variant="full" theme="dark" size="md" />
      </div>
      <div
        style={{ padding: "20px 24px", background: "#080E0D" }}
      >
        <p style={{ fontSize: 10, color: "#5A706A", marginBottom: 10, fontFamily: "'DM Mono', monospace" }}>
          theme="white" on near-black bg
        </p>
        <MintxLogo variant="full" theme="white" size="md" />
      </div>
    </div>
  ),
};

export const MarkOnly: Story = {
  name: "Mark Only — Sizes",
  render: () => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
        <MintxLogo key={s} variant="mark" size={s} />
      ))}
    </div>
  ),
};

export const InNavbar: Story = {
  name: "In Navbar Context",
  render: () => (
    <div
      style={{
        background: "var(--bg-surface, #0D1614)",
        borderBottom: "1px solid rgba(232,239,237,0.08)",
        height: 56,
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        justifyContent: "space-between",
      }}
    >
      <MintxLogo variant="full" theme="dark" size="sm" />
      <div style={{ display: "flex", gap: 8 }}>
        {["Markets", "Portfolio", "Academy"].map((item) => (
          <button
            key={item}
            style={{
              background: "none",
              border: "none",
              color: "#9BACA6",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              padding: "4px 12px",
              borderRadius: 8,
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  ),
};

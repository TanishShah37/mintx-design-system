import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../../components/ui/Loader";
import { Carousel } from "../../components/ui/Carousel";
import { FadeIn, SlideIn, ScaleIn } from "../../components/ui/Animations";
import { RemixIcon } from "../../components/ui/RemixIcon";
import { Badge } from "../../components/ui/Badge";
import React from "react";

const meta: Meta = {
  title: "UI/Misc",
  tags: ["autodocs"],
};
export default meta;

export const LoaderVariants: StoryObj = {
  name: "Loader",
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="xl" />
      <Loader size="md" label="Processing..." />
    </div>
  ),
};

export const CarouselDemo: StoryObj = {
  name: "Carousel",
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <Carousel>
        {["Area Chart", "Candlestick", "Baseline", "Volume"].map((s) => (
          <div
            key={s}
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,179,138,0.08)",
              borderRadius: 12,
              border: "1px solid rgba(0,179,138,0.2)",
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 700, color: "#00B38A" }}>{s}</p>
          </div>
        ))}
      </Carousel>
    </div>
  ),
};

export const AnimationsDemo: StoryObj = {
  name: "Animations",
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <FadeIn><Badge variant="mint">Fade In</Badge></FadeIn>
      <SlideIn direction="up"><Badge variant="blue">Slide Up</Badge></SlideIn>
      <SlideIn direction="left"><Badge variant="purple">Slide Left</Badge></SlideIn>
      <ScaleIn><Badge variant="success">Scale In</Badge></ScaleIn>
    </div>
  ),
};

export const RemixIconDemo: StoryObj = {
  name: "RemixIcon",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 8 }}>
      {[
        "ri-home-line",
        "ri-user-line",
        "ri-settings-4-line",
        "ri-notification-3-line",
        "ri-line-chart-line",
        "ri-money-rupee-circle-line",
        "ri-shield-check-line",
        "ri-search-line",
        "ri-bar-chart-2-line",
        "ri-wallet-3-line",
      ].map((icon) => (
        <div key={icon} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <RemixIcon name={icon} size={24} color="var(--text-brand, #00B38A)" />
          <span style={{ fontSize: 10, color: "var(--text-tertiary, var(--chart-neutral, var(--chart-neutral, #748A83)))", fontFamily: "monospace" }}>{icon}</span>
        </div>
      ))}
    </div>
  ),
};

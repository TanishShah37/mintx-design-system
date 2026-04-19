import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../../components/ui/Loader";
import { Carousel } from "../../components/ui/Carousel";
import { FadeIn, SlideIn, ScaleIn } from "../../components/ui/Animations";
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
      <FadeIn><Badge color="primary">Fade In</Badge></FadeIn>
      <SlideIn direction="up"><Badge color="info">Slide Up</Badge></SlideIn>
      <SlideIn direction="left"><Badge color="warning">Slide Left</Badge></SlideIn>
      <ScaleIn><Badge color="success">Scale In</Badge></ScaleIn>
    </div>
  ),
};

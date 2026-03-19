import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart, CandlestickChart, BaselineChart, VolumeChart } from "../../components/financial/LightweightChart";
import React from "react";

const meta: Meta = {
  title: "Financial/Charts",
  tags: ["autodocs"],
};
export default meta;

const lineData = [
  { time: "2024-11-01", value: 27.5 },
  { time: "2024-11-04", value: 29.1 },
  { time: "2024-11-05", value: 26.8 },
  { time: "2024-11-06", value: 31.2 },
  { time: "2024-11-07", value: 33.8 },
  { time: "2024-11-08", value: 32.1 },
  { time: "2024-11-11", value: 28.9 },
  { time: "2024-11-12", value: 30.4 },
  { time: "2024-11-13", value: 35.7 },
  { time: "2024-11-14", value: 38.2 },
];

const candleData = [
  { time: "2024-11-01", open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
  { time: "2024-11-04", open: 145.72, high: 152.9, low: 137.41, close: 148.43 },
  { time: "2024-11-05", open: 148.43, high: 151.04, low: 136.31, close: 138.29 },
  { time: "2024-11-06", open: 138.29, high: 142.29, low: 128.47, close: 140.51 },
  { time: "2024-11-07", open: 140.51, high: 152.53, low: 138.65, close: 148.36 },
  { time: "2024-11-08", open: 148.36, high: 151.24, low: 140.74, close: 146.42 },
  { time: "2024-11-11", open: 146.42, high: 156.78, low: 142.42, close: 152.74 },
  { time: "2024-11-12", open: 152.74, high: 157.44, low: 147.97, close: 155.61 },
];

export const AreaChartStory: StoryObj = {
  name: "Area Chart",
  render: () => (
    <div style={{ background: "#080E0D", padding: 16, borderRadius: 16 }}>
      <AreaChart data={lineData} height={300} theme="dark" color="#00B38A" />
    </div>
  ),
};

export const CandlestickChartStory: StoryObj = {
  name: "Candlestick Chart",
  render: () => (
    <div style={{ background: "#080E0D", padding: 16, borderRadius: 16 }}>
      <CandlestickChart data={candleData} height={300} theme="dark" />
    </div>
  ),
};

export const BaselineChartStory: StoryObj = {
  name: "Baseline Chart",
  render: () => (
    <div style={{ background: "#080E0D", padding: 16, borderRadius: 16 }}>
      <BaselineChart data={lineData} height={300} theme="dark" color="#00B38A" />
    </div>
  ),
};

export const VolumeChartStory: StoryObj = {
  name: "Volume / Histogram Chart",
  render: () => (
    <div style={{ background: "#080E0D", padding: 16, borderRadius: 16 }}>
      <VolumeChart data={lineData} height={300} theme="dark" />
    </div>
  ),
};

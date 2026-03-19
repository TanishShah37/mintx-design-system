import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  AreaChart, 
  CandlestickChart, 
  BaselineChart, 
  VolumeChart 
} from '../../components/financial/LightweightChart';

const lineData = [
  { time: '2024-01-01', value: 100 },
  { time: '2024-01-02', value: 120 },
  { time: '2024-01-03', value: 115 },
  { time: '2024-01-04', value: 140 },
  { time: '2024-01-05', value: 135 },
  { time: '2024-01-06', value: 160 },
];

const candleData = [
  { time: '2024-01-01', open: 100, high: 110, low: 95, close: 105 },
  { time: '2024-01-02', open: 105, high: 125, low: 102, close: 120 },
  { time: '2024-01-03', open: 120, high: 122, low: 110, close: 115 },
  { time: '2024-01-04', open: 115, high: 145, low: 112, close: 140 },
  { time: '2024-01-05', open: 140, high: 142, low: 130, close: 135 },
  { time: '2024-01-06', open: 135, high: 165, low: 132, close: 160 },
];

const meta: Meta = {
  title: 'Financial/Charts',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

export const Area: StoryObj = {
  render: () => (
    <div style={{ height: '400px' }}>
      <AreaChart data={lineData} theme="dark" />
    </div>
  ),
};

export const Candlestick: StoryObj = {
  render: () => (
    <div style={{ height: '400px' }}>
      <CandlestickChart data={candleData} theme="dark" />
    </div>
  ),
};

export const Baseline: StoryObj = {
  render: () => (
    <div style={{ height: '400px' }}>
      <BaselineChart data={lineData} theme="dark" />
    </div>
  ),
};

export const Volume: StoryObj = {
  render: () => (
    <div style={{ height: '400px' }}>
      <VolumeChart data={lineData} theme="dark" />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "@mintx/ui";

const meta: Meta<typeof Card> = {
  title: "Core/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Real-time market data and analytics</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
          Track NIFTY 50, SENSEX, and 5,000+ stocks with real-time candlestick charts and institutional flow data.
        </p>
      </CardContent>
      <CardFooter style={{ gap: 8 }}>
        <Button size="sm">Open Dashboard</Button>
        <Button variant="ghost" size="sm">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

export const Hover: Story = {
  render: () => (
    <Card hover style={{ width: 360, padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <Badge variant="green">▲ Bullish</Badge>
        <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>15 Mar · 15:29 IST</span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>NIFTY 50 breaks 22,400</div>
      <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>
        FII buying above ₹2,000 Cr supporting the breakout. Watch 22,600 resistance.
      </div>
    </Card>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { MetricCard, StockCard, InsightCard } from "@mintx/ui";
import { TrendingUp, Users, Activity, BarChart3 } from "lucide-react";

export default {
  title: "Mintx/Custom Cards",
} as Meta;

export const MetricCards: StoryObj = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 280px)", gap: 12 }}>
      <MetricCard label="Active Users" value="12,847" delta={12.5} deltaLabel="vs last week" icon={<Users className="w-4 h-4" />} />
      <MetricCard label="Portfolio Value" value="₹4.2L" delta={-2.3} deltaLabel="today" icon={<TrendingUp className="w-4 h-4" />} />
      <MetricCard label="Watchlist Items" value="28" delta={0} deltaLabel="no change" icon={<Activity className="w-4 h-4" />} />
      <MetricCard label="Insights Read" value="142" delta={34} deltaLabel="this month" icon={<BarChart3 className="w-4 h-4" />} />
    </div>
  ),
};

export const StockCards: StoryObj = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 320px)", gap: 16 }}>
      <StockCard
        ticker="RELIANCE"
        name="Reliance Industries Ltd."
        price={2847.50}
        change={89.20}
        changePercent={3.24}
        volume="8.2M"
        marketCap="₹19.2T"
      />
      <StockCard
        ticker="INFY"
        name="Infosys Limited"
        price={1542.30}
        change={-18.40}
        changePercent={-1.18}
        volume="4.1M"
        marketCap="₹6.4T"
      />
    </div>
  ),
};

export const InsightCards: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 420 }}>
      <InsightCard
        tag="Market Analysis"
        title="NIFTY 50 Approaching Key Fibonacci Level"
        body="The 61.8% retracement from the Oct high sits at 22,180 — a make-or-break zone. FII flows and VIX are the leading indicators to watch."
      />
      <InsightCard
        tag="Sector Rotation"
        title="IT Sector Shows Relative Strength"
        body="INFY, TCS, and WIPRO are outperforming the broader market. Earnings season could accelerate this trend."
        accentColor="var(--blue-400)"
      />
      <InsightCard
        tag="Risk Alert"
        title="Elevated VIX Suggesting Caution"
        body="India VIX above 18 for three consecutive sessions. Consider reducing position sizing and tightening stop losses."
        accentColor="var(--amber-400)"
      />
    </div>
  ),
};

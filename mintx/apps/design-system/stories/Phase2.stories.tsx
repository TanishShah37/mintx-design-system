import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  Badge,
  Button,
  StockCard,
  MetricCard,
  InsightCard
} from "@mintx/ui";
import { TrendingUp, Share2 } from "lucide-react";

/**
 * Phase 2 Components - Revalidated @mintx/ui Implementation
 * Now using market-specific React components.
 */
const meta: Meta = {
  title: "Phase 2/Advanced Components",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const MarketCards: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-[var(--bg-base)] max-w-4xl rounded-[var(--r-xl)]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Market Status & Tickers</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="mint" className="px-4 py-2 gap-3 shadow-sm border border-[var(--border-subtle)]">
            <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="font-bold text-[var(--text-primary)]">NIFTY 50</span>
            <span className="font-mono font-bold text-[#22C55E]">22,462.10 (+0.85%)</span>
          </Badge>
          <Badge variant="neutral" className="px-4 py-2 gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--text-tertiary)]" />
            <span className="font-bold text-[var(--text-primary)]">SENSEX</span>
            <span className="font-mono font-bold text-[var(--text-tertiary)]">74,119.39 (Closed)</span>
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StockCard 
          ticker="TATAMOTORS" 
          name="TATA MOTORS · NSE" 
          price={984.25} 
          change={24.80} 
          changePercent={2.56} 
          volume="12.4M"
          marketCap="3.2T"
        />
        <StockCard 
          ticker="HDFCBANK" 
          name="HDFC BANK · NSE" 
          price={1442.80} 
          change={-12.30} 
          changePercent={-0.84} 
          volume="8.2M"
          marketCap="10.8T"
        />
      </div>
    </div>
  ),
};

export const SupportElements: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-[var(--bg-base)] max-w-lg rounded-[var(--r-xl)]">
      <Card hover className="p-6 border-l-4 border-l-[var(--mint-400)] shadow-[var(--shadow-md)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-[var(--mint-400)] flex items-center justify-center text-[var(--n-900)] font-bold">RM</div>
          <div>
            <h4 className="text-[var(--text-sm)] font-bold text-[var(--text-primary)]">Talk to Your Advisor</h4>
            <p className="text-[var(--text-xs)] text-[var(--text-tertiary)]">Anish Verma is currently online</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" size="sm">Chat Now</Button>
          <Button variant="secondary" className="flex-1" size="sm">Book Call</Button>
        </div>
      </Card>

      <div className="bg-[var(--n-800)] rounded-[var(--r-xl)] p-6 text-[var(--text-inverse)] overflow-hidden relative border border-[var(--border-subtle)]">
        <div className="relative z-10">
          <Badge variant="mint" className="mb-2">PRO TIP</Badge>
          <h4 className="text-[var(--text-lg)] font-bold mb-2 font-[var(--font-display)]">Smart Rebalancing</h4>
          <p className="text-[var(--text-sm)] text-[var(--text-tertiary)] mb-4 leading-relaxed">
            You have ₹25,400 in idle cash. Deploy it now to maintain your target asset allocation.
          </p>
          <Button variant="link" className="text-[var(--mint-400)] p-0 h-auto font-bold flex items-center gap-2 hover:gap-3 transition-all no-underline">
            Review Allocation <TrendingUp size={16} />
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--mint-400)] opacity-10 rounded-full -mr-16 -mt-16 blur-3xl" />
      </div>
    </div>
  ),
};

export const FeedCards: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-[var(--bg-base)] max-w-xl rounded-[var(--r-xl)]">
      <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Market Insights Feed</h3>
      
      <Card hover className="overflow-hidden border border-[var(--border-subtle)]">
        <div className="h-32 bg-[var(--n-100)] flex items-center justify-center text-[var(--text-tertiary)] text-[var(--text-xs)] font-bold m-2 rounded-[var(--r-lg)]">
          Article Cover Image
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="blue" size="sm">Macro View</Badge>
            <span className="text-[var(--text-xs)] text-[var(--text-tertiary)] font-mono">15 MAR 2024</span>
          </div>
          <h4 className="text-[var(--text-base)] font-bold text-[var(--text-primary)] leading-tight mb-2 group-hover:text-[var(--mint-500)] transition-colors">
            How global interest rates are affecting Indian mid-caps
          </h4>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
            The recent FOMC meeting has sparked a new wave of volatility. Here is what it means for your local portfolio...
          </p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--mint-100)] text-[10px] font-bold flex items-center justify-center text-[var(--mint-700)] shadow-inner">SM</div>
              <span className="text-[11px] font-bold text-[var(--text-primary)]">Sunita Mehta</span>
            </div>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-[var(--text-tertiary)]">
              <Share2 size={14} className="mr-2" /> Share
            </Button>
          </div>
        </div>
      </Card>

      <InsightCard 
        tag="PORTFOLIO ALERT"
        title="NIFTY IT Sector Outlook"
        description="IT stocks are showing resilience amid positive earnings updates from global peers. Consider increasing weights in large-cap IT."
      />
    </div>
  ),
};

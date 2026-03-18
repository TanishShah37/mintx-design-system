import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  AppHeader, 
  Sidebar, 
  MarketingFooter, 
  BottomNavigation, 
  SupportLiveBar,
  Logo,
  PlatformStatus,
  MarketTicker
} from "@mintx/ui";
import { 
  Home,
  BarChart3,
  Compass,
  Bell,
  User,
  Users,
  Activity,
  PieChart
} from "lucide-react";

const meta: Meta = {
  title: "Phase 4/Architecture & Overlays",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: BarChart3, label: "Markets" },
  { icon: Compass, label: "Explore" },
  { icon: Bell, label: "Alerts", badge: 3 },
  { icon: User, label: "Profile" },
];

const tickerItems = [
  { name: "NIFTY 50", value: "22,478.50", change: "+1.24%", up: true },
  { name: "SENSEX", value: "74,119.20", change: "+0.98%", up: true },
  { name: "BANK NIFTY", value: "47,892.40", change: "-0.32%", up: false },
];

export const MobileArchitecture: Story = {
  render: () => (
    <div className="flex flex-col min-h-screen bg-[var(--bg-base)]">
      <MarketTicker items={tickerItems} />
      <AppHeader 
        status={<PlatformStatus />} 
        actions={<div className="text-[11px] font-bold text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-3 py-1.5 rounded-full">DARK</div>}
      />
      
      <main className="flex-1 p-6 pb-40">
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold font-[var(--font-display)] text-[var(--text-primary)] mb-2">Mobile Shell Active</h2>
          <p className="text-[var(--text-secondary)]">The mobile experience features a sticky header, market ticker, support bar, and bottom navigation.</p>
        </div>
      </main>

      <SupportLiveBar 
        message="RM is online" 
        status="online"
      />
      <BottomNavigation items={navItems} />
    </div>
  ),
};

export const DesktopArchitecture: Story = {
  render: () => (
    <div className="flex h-screen bg-[var(--bg-base)] overflow-hidden">
      <Sidebar 
        brandName="MINTX ADMIN"
        links={[
          { icon: Users, label: "My Clients", active: true },
          { icon: PieChart, label: "Portfolios" },
          { icon: Activity, label: "Team Status" },
        ]}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader 
          maxWidth="max-w-none px-6"
          status={<PlatformStatus />}
          actions={
            <div className="flex items-center gap-4">
               <div className="text-xs font-bold text-[var(--text-secondary)]">ANISH VERMA</div>
               <div className="w-8 h-8 rounded-full bg-[var(--mint-100)] border border-[var(--mint-400)] flex items-center justify-center font-bold text-[10px] text-[var(--mint-700)]">AV</div>
            </div>
          }
        />
        
        <main className="flex-1 p-10 overflow-y-auto">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--text-primary)] mb-6">Relationship Manager Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
               {[1,2,3].map(i => (
                 <div key={i} className="h-32 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-6 shadow-sm">
                    <div className="text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Metric {i}</div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">₹12.5 Cr</div>
                 </div>
               ))}
            </div>
            
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-10 h-[500px] flex items-center justify-center text-[var(--text-tertiary)] border-dashed border-2">
               Main Content Area
            </div>
          </div>
        </main>
      </div>
    </div>
  ),
};

export const MarketingSystem: Story = {
  render: () => (
    <div className="flex flex-col bg-[var(--bg-base)]">
       <AppHeader />
       <div className="p-20 text-center flex flex-col items-center gap-6">
          <Logo size={80} />
          <h1 className="text-5xl font-extrabold font-[var(--font-display)] text-[var(--text-primary)] tracking-tighter">Mintx Design System</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-lg">Linking the core components to production-ready layouts.</p>
       </div>
       <MarketingFooter 
         disclosure="Mintx is not registered with SEBI as an Investment Adviser or Research Analyst."
         links={[
           { label: "Terms", href: "#" },
           { label: "Privacy", href: "#" },
           { label: "Contact", href: "#" },
         ]}
       />
    </div>
  )
}

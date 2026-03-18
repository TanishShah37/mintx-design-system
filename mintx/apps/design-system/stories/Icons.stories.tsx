import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import * as LucideIcons from "lucide-react";

/**
 * Icon System - Based on 04_icons.html
 * Comprehensive gallery of icons used in Mintx Design System.
 */
const meta: Meta = {
  title: "Icons/System Gallery",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

const IconItem = ({ name, Icon }: { name: string; Icon: any }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white border border-[#141F1D1A] rounded-[20px] shadow-sm hover:border-[#00B38A] transition-all cursor-pointer group">
    <div className="w-10 h-10 flex items-center justify-center mb-4 text-[#748A83] group-hover:text-[#00B38A] group-hover:scale-110 transition-all">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <span className="text-[10px] font-bold text-[#748A83] uppercase tracking-widest text-center group-hover:text-[#141F1D]">{name}</span>
  </div>
);

const IconSection = ({ title, icons }: { title: string; icons: string[] }) => (
  <div className="flex flex-col gap-6 mb-12">
    <h3 className="text-sm font-bold text-[#748A83] uppercase tracking-widest border-b border-[#141F1D0A] pb-2">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {icons.map((name) => {
        const IconComponent = (LucideIcons as any)[name];
        return IconComponent ? <IconItem key={name} name={name} Icon={IconComponent} /> : null;
      })}
    </div>
  </div>
);

export const Gallery: Story = {
  render: () => (
    <div className="p-10 bg-[#F5F8F7] max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-syne text-[#141F1D] mb-2">Iconography</h2>
        <p className="text-sm text-[#748A83]">Standardized Lucide-react icons with consistent stroke-weight (1.5) and scaling.</p>
      </div>

      <IconSection 
        title="Navigation & Core" 
        icons={["Home", "Compass", "LineChart", "PieChart", "LayoutGrid", "User", "Bell", "Settings", "LogOut", "MoreHorizontal"]} 
      />

      <IconSection 
        title="Market & Trading" 
        icons={["TrendingUp", "TrendingDown", "Zap", "Activity", "RefreshCcw", "CheckCircle2", "Plus", "History", "BarChart3", "Wallet"]} 
      />

      <IconSection 
        title="Communication & Support" 
        icons={["MessageSquare", "Phone", "Mail", "Globe", "HelpCircle", "AlertCircle", "Info", "FileText", "BookOpen", "Video"]} 
      />

      <IconSection 
        title="Actions & Interface" 
        icons={["ArrowRight", "ArrowLeft", "ChevronRight", "ChevronDown", "Search", "Filter", "Download", "Share2", "Copy", "Trash2"]} 
      />
    </div>
  ),
};

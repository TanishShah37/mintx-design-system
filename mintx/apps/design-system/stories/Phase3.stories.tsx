import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  Button, 
  Badge, 
  Card, 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell,
  MetricCard,
  Progress,
  Sidebar
} from "@mintx/ui";
import { Users, PieChart, Activity, UserPlus } from "lucide-react";

/**
 * Phase 3 Components - Revalidated @mintx/ui Implementation
 * Now using original design system enterprise React components.
 */
const meta: Meta = {
  title: "Phase 3/Enterprise Components",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const RMConsole: Story = {
  render: () => (
    <div className="flex bg-[var(--bg-base)] min-h-screen">
      <Sidebar 
        brandName="RM Admin"
        links={[
          { icon: Users, label: "My Clients", active: true },
          { icon: PieChart, label: "Portfolios" },
          { icon: Activity, label: "Team Status" },
        ]}
      />

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[var(--text-3xl)] font-bold font-[var(--font-display)] text-[var(--text-primary)] tracking-tight">Client Overview</h2>
            <p className="text-[var(--text-sm)] text-[var(--text-tertiary)]">Manage your relationship pipeline and AUM targets.</p>
          </div>
          <Button className="gap-2 shadow-[var(--shadow-lg)]">
            <UserPlus size={18} /> Add New Client
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard label="Total AUM" value="₹12.5 Cr" delta={8.2} deltaLabel="vs last month" />
          <MetricCard label="Active Clients" value="25" delta={2} deltaLabel="new this week" />
          <MetricCard label="Satisfaction" value="4.8/5" delta={0.2} />
          <MetricCard label="Retention" value="98%" delta={5} deltaLabel="Above target" />
        </div>

        <Card className="overflow-hidden border-[var(--border-subtle)] shadow-[var(--shadow-md)]">
          <Table>
            <TableHeader className="bg-[var(--bg-base)]">
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>AUM Contribution</TableHead>
                <TableHead>Risk Profile</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Rajesh Kumar", aum: "₹50L", risk: "Moderate", status: "Active" },
                { name: "Priya Menon", aum: "₹1.2 Cr", risk: "Low", status: "Active" },
                { name: "Arjun Shah", aum: "₹85L", risk: "High", status: "Review Due" },
              ].map((client, i) => (
                <TableRow key={i} className="cursor-pointer hover:bg-[var(--bg-overlay)]">
                  <TableCell className="font-bold text-[var(--text-primary)]">{client.name}</TableCell>
                  <TableCell className="font-mono text-[var(--text-secondary)]">{client.aum}</TableCell>
                  <TableCell>
                    <Badge variant={client.risk === 'High' ? 'red' : client.risk === 'Moderate' ? 'amber' : 'green'} size="sm">
                      {client.risk}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={client.status === 'Active' ? 'mint' : 'neutral'} size="sm">
                      {client.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  ),
};

export const BrokerIntegration: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-10 bg-[var(--bg-base)]">
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="text-[var(--text-xl)] font-bold font-[var(--font-display)] mb-2 text-[var(--text-primary)]">Connected Brokers</h3>
        <p className="text-[var(--text-sm)] text-[var(--text-tertiary)] mb-8">Trade directly through Mintx via our SEBI-registered partners.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[var(--mint-50)] border-[var(--mint-400)] p-6 relative shadow-[var(--shadow-brand)]">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[var(--mint-400)] rounded-xl flex items-center justify-center font-bold text-[var(--n-900)] text-xl">Z</div>
              <Badge variant="mint">Connected</Badge>
            </div>
            <h4 className="text-[var(--text-base)] font-bold text-[var(--text-primary)] font-[var(--font-display)]">Zerodha Kite</h4>
            <p className="text-[var(--text-xs)] text-[var(--text-secondary)] mt-1">API Connected · Last trade 2h ago</p>
            <Button variant="link" className="text-[var(--red-500)] mt-8 p-0 h-auto font-bold no-underline">Disconnect Broker →</Button>
          </Card>

          {[
            { name: "Groww", initial: "G", color: "text-blue-500", bg: "bg-blue-50" },
            { name: "Angel One", initial: "A", color: "text-amber-500", bg: "bg-amber-50" }
          ].map((broker) => (
            <Card key={broker.name} hover className="p-6 shadow-[var(--shadow-sm)]">
              <div className={`w-12 h-12 ${broker.bg} ${broker.color} rounded-xl flex items-center justify-center font-bold text-xl`}>
                {broker.initial}
              </div>
              <h4 className="text-[var(--text-base)] font-bold text-[var(--text-primary)] mt-6 font-[var(--font-display)]">{broker.name}</h4>
              <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mt-1">Direct API Integration</p>
              <Button variant="secondary" size="sm" className="mt-8 w-full">Link Account</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Academy: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-10 bg-[var(--bg-base)] max-w-6xl mx-auto w-full">
      <div>
        <h3 className="text-[var(--text-3xl)] font-bold font-[var(--font-display)] text-[var(--text-primary)] tracking-tight">Learning Modules</h3>
        <p className="text-[var(--text-sm)] text-[var(--text-tertiary)] mt-1">Master the markets with our zero-to-one curriculum.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Fundamental Analysis 101", desc: "Understanding P/E, Debt ratios, and growth metrics.", modules: 12, dur: "4h 30m", progress: 25 },
          { title: "Advanced Technicals", desc: "Bollinger bands, RSI, and multi-timeframe analysis.", modules: 8, dur: "6h 15m", progress: 0 },
          { title: "Derivatives Trading", desc: "Options Greeks, delta hedging, and spread strategies.", modules: 15, dur: "10h 0m", progress: 0 },
        ].map((course, i) => (
          <Card key={i} hover className="overflow-hidden group flex flex-col shadow-[var(--shadow-sm)]">
            <div className="h-44 bg-[var(--n-100)] relative flex items-center justify-center m-2 rounded-[var(--r-lg)]">
              <div className="w-14 h-14 bg-[var(--bg-surface)] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer border border-[var(--border-subtle)]">
                <span className="text-[var(--mint-400)] ml-1">▶</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <Badge variant="mint" size="sm" className="mb-3 w-fit">Certification Course</Badge>
              <h4 className="text-[var(--text-lg)] font-bold text-[var(--text-primary)] font-[var(--font-display)] mb-2 leading-tight">{course.title}</h4>
              <p className="text-[var(--text-sm)] text-[var(--text-secondary)] mb-8 line-clamp-2 leading-relaxed">{course.desc}</p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-4 text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
                  <span>{course.modules} Modules</span>
                  <div className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                  <span>{course.dur} Total</span>
                </div>
                
                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase">{course.progress > 0 ? `Module 3 of ${course.modules}` : 'Not Started'}</span>
                    <span className="text-[10px] font-bold text-[var(--text-brand)] uppercase">{course.progress}% DONE</span>
                  </div>
                  <Progress value={course.progress} className="h-1.5" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
};

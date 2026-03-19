"use client";
import React, { useState } from "react";
import { 
  Search, 
  ChevronUp, 
  ChevronDown, 
  ChevronsUpDown,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowRight,
  Plus,
  Layout,
  Layers,
  Zap,
  Shield,
  Clock,
  ExternalLink,
  ChevronRight,
  Sun,
  Moon,
  TrendingUp,
  PieChart,
  Users,
  MessageSquare,
  Sparkles,
  Smartphone,
  Globe,
  Star,
  FileText,
  Copy,
  PlusCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Check,
  MoreVertical,
  Menu,
  X,
  CreditCard,
  Target,
  Bell,
  Wallet,
  LogOut,
  Settings,
  BarChart
} from "lucide-react";
import { 
  AssetLibrary, 
  DataTable, 
  ColumnDef, 
  AdvancedRealTimeChart, 
  TechnicalAnalysis, 
  MarketOverview, 
  SymbolOverviewMini,
  TickerTape,
  AreaChart,
  CandlestickChart,
  BaselineChart,
  VolumeChart,
  Alert,
  Loader,
  Progress,
  Skeleton,
  Toast,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  Backdrop,
  NotiStackProvider,
  useToast,
  Carousel,
  FadeIn,
  SlideIn,
  ScaleIn,
  RemixIcon,
  Nudge,
  NudgesPanel,
  Tag,
  TagGroup,
  Rating,
  Avatar,
  Badge,
  Chip,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Card as UiCard,
} from "@mintx/ui";

// ─── Inline mini-implementations for the live demo ───────────────────────────
// (In the real project these come from @mintx/ui)

type Theme = "light" | "dark";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "outline-brand"
  | "dark";
type BadgeVariant =
  | "mint"
  | "green"
  | "red"
  | "amber"
  | "blue"
  | "purple"
  | "neutral"
  | "outline";
type AlertVariant = "info" | "success" | "warning" | "danger" | "brand";
type PriceDir = "up" | "down" | "flat";

function cn(...args: (string | undefined | false | null)[]): string {
  return args.filter(Boolean).join(" ");
}

// ─── Token palette used in demo ────────────────────────────────────────────
const MINT = "#10C9A0";
const N900 = "#080E0D";

// ─── SVG Logo ──────────────────────────────────────────────────────────────
const MintxMark = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
    <rect width="96" height="96" rx="24" fill={MINT} />
    <path
      d="M20 64L34 42L44 52L62 30"
      stroke={N900}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="62" cy="30" r="6" fill={N900} />
    <path
      d="M20 72H76"
      stroke={N900}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.3"
    />
    <path
      d="M44 52L44 72"
      stroke={N900}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.2"
    />
  </svg>
);

// ─── Sparkline ─────────────────────────────────────────────────────────────
const Sparkline = ({ data, dir }: { data: number[]; dir: PriceDir }) => {
  const h = 40;
  const w = 200;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const pts = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * (h - 6) - 3}`)
    .join(" ");
  const fill =
    dir === "up"
      ? "rgba(34,197,94,0.09)"
      : dir === "down"
        ? "rgba(248,113,113,0.09)"
        : "rgba(116,138,131,0.06)";
  const stroke =
    dir === "up" ? "#22C55E" : dir === "down" ? "#F87171" : "#748A83";
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: h }}
    >
      <polygon points={`${pts} ${w},${h} 0,${h}`} fill={fill} stroke="none" />
      <polyline
        points={pts}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ─── Sample data for sparklines ──────────────────────────────────────────
const spkUp = [35, 30, 32, 25, 20, 22, 15, 10, 8];
const spkDown = [8, 12, 10, 18, 22, 20, 28, 32, 35];
const spkFlat = [22, 20, 24, 21, 23, 22, 20, 24, 22];

// ── Sample Data for Lightweight Charts ────────────────────────────────────
const lwcLineData = [
  { time: "2024-12-01", value: 32.51 },
  { time: "2024-12-02", value: 31.11 },
  { time: "2024-12-03", value: 27.02 },
  { time: "2024-12-04", value: 27.32 },
  { time: "2024-12-05", value: 25.17 },
  { time: "2024-12-06", value: 28.89 },
  { time: "2024-12-07", value: 25.46 },
  { time: "2024-12-08", value: 23.92 },
  { time: "2024-12-09", value: 22.68 },
  { time: "2024-12-10", value: 22.67 },
  { time: "2024-12-11", value: 27.57 },
  { time: "2024-12-12", value: 24.11 },
  { time: "2024-12-13", value: 30.74 },
];

const lwcCandleData = [
  { time: "2024-12-01", open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
  { time: "2024-12-02", open: 145.72, high: 147.90, low: 137.41, close: 140.43 },
  { time: "2024-12-03", open: 140.43, high: 143.04, low: 136.31, close: 138.29 },
  { time: "2024-12-04", open: 138.29, high: 138.29, low: 128.47, close: 133.51 },
  { time: "2024-12-05", open: 133.51, high: 146.53, low: 132.65, close: 142.36 },
  { time: "2024-12-06", open: 142.36, high: 145.24, low: 140.74, close: 142.42 },
  { time: "2024-12-07", open: 142.42, high: 152.78, low: 142.42, close: 148.74 },
  { time: "2024-12-08", open: 148.74, high: 151.44, low: 145.97, close: 149.61 },
  { time: "2024-12-09", open: 149.61, high: 154.99, low: 149.61, close: 152.09 },
  { time: "2024-12-10", open: 152.09, high: 153.13, low: 144.13, close: 148.60 },
  { time: "2024-12-11", open: 148.60, high: 151.10, low: 142.32, close: 144.92 },
  { time: "2024-12-12", open: 144.92, high: 149.27, low: 140.52, close: 148.11 },
  { time: "2024-12-13", open: 148.11, high: 152.00, low: 146.00, close: 150.00 },
];

// ── Sections ───────────────────────────────────────────────────────────────
const sections = [
  "instructions",
  "tokens",
  "buttons",
  "badges",
  "cards",
  "ui-primitives",
  "financial",
  "mobile",
  "layout",
  "feedback",
  "misc",
  "charts",
  "icons",
  "illustrations",
  "typography",
];

// ── Chart Tabs for Sidebar ──────────────────────────────────────────────────
const ChartTabs = [
  { id: "area", label: "Area Chart", icon: "TrendingUp" },
  { id: "candles", label: "Candlestick", icon: "BarChart" },
  { id: "baseline", label: "Baseline", icon: "Zap" },
  { id: "volume", label: "Volume Hist", icon: "Layers" },
];

export default function MintxDesignSystem() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeTab, setActiveTab] = useState(sections[0]);
  const [activeChartTab, setActiveChartTab] = useState("area");
  const [toggleOn, setToggleOn] = useState(true);
  const [progress, setProgress] = useState(68);
  const [activeNav, setActiveNav] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isDark = theme === "dark";

  // ── CSS variables injected inline so demo is self-contained ──────────────
  const vars: React.CSSProperties = {
    // Backgrounds
    "--bg-base": isDark ? "#080E0D" : "#F5F8F7",
    "--bg-surface": isDark ? "#0D1614" : "#FFFFFF",
    "--bg-elevated": isDark ? "#141F1D" : "#FFFFFF",
    "--bg-overlay": isDark ? "rgba(255,255,255,0.05)" : "rgba(20,31,29,0.06)",
    "--bg-brand-soft": isDark ? "rgba(0,179,138,0.12)" : "#E6FBF5",
    // Text
    "--text-primary": isDark ? "#E8EFED" : "#141F1D",
    "--text-secondary": isDark ? "#9BACA6" : "#3A524D",
    "--text-tertiary": isDark ? "#5A706A" : "#748A83",
    "--text-disabled": isDark ? "#3A524D" : "#9BACA6",
    "--text-brand": isDark ? "#3DDCBA" : "#008F6E",
    // Borders
    "--border-subtle": isDark
      ? "rgba(232,239,237,0.06)"
      : "rgba(20,31,29,0.07)",
    "--border-default": isDark
      ? "rgba(232,239,237,0.10)"
      : "rgba(20,31,29,0.12)",
    "--border-strong": isDark
      ? "rgba(232,239,237,0.18)"
      : "rgba(20,31,29,0.22)",
    // Shadows
    "--shadow-sm": isDark
      ? "0 1px 3px rgba(0,0,0,0.30)"
      : "0 1px 3px rgba(0,0,0,0.06)",
    "--shadow-md": isDark
      ? "0 4px 12px rgba(0,0,0,0.40)"
      : "0 4px 12px rgba(0,0,0,0.08)",
    "--shadow-brand": "0 4px 16px rgba(0,179,138,0.28)",
    // Static
    "--mint-400": "#10C9A0",
    "--mint-300": "#3DDCBA",
    "--mint-50": "#E6FBF5",
    "--mint-600": "#008F6E",
    "--mint-700": "#006B52",
    "--mint-900": "#00231A",
    "--n-300": "#9BACA6",
    "--n-800": "#141F1D",
    "--green-400": "#22C55E",
    "--red-400": "#F87171",
    "--amber-400": "#FBBF24",
    "--blue-400": "#60A5FA",
    "--red-500": "#DC2626",
    "--blue-500": "#2563EB",
    "--green-500": "#16A34A",
    "--amber-500": "#D97706",
    // Fonts
    "--font-display": "'Syne', sans-serif",
    "--font-body": "'DM Sans', sans-serif",
    "--font-mono": "'DM Mono', monospace",
    // Spacing
    "--sp-1": "4px",
    "--sp-2": "8px",
    "--sp-3": "12px",
    "--sp-4": "16px",
    "--sp-5": "20px",
    "--sp-6": "24px",
    "--sp-8": "32px",
    "--sp-10": "40px",
    // Radius
    "--r-xs": "4px",
    "--r-sm": "6px",
    "--r-md": "10px",
    "--r-lg": "14px",
    "--r-xl": "20px",
    "--r-2xl": "28px",
    "--r-full": "9999px",
    // Type scale
    "--text-xs": "11px",
    "--text-sm": "13px",
    "--text-base": "15px",
    "--text-lg": "17px",
    "--text-xl": "20px",
    "--text-2xl": "24px",
    "--text-3xl": "30px",
    "--text-4xl": "38px",
    // Motion
    "--ease-out": "cubic-bezier(0.16,1,0.3,1)",
    "--ease-spring": "cubic-bezier(0.34,1.56,0.64,1)",
    "--dur-fast": "120ms",
    "--dur-base": "200ms",
  } as React.CSSProperties;

  // ── Data for Table Demo ──────────────────────────────────────────────────
  interface Transaction {
    id: string;
    asset: string;
    type: "buy" | "sell";
    amount: string;
    status: "completed" | "pending" | "failed";
    date: string;
    risk: number; // 0-100
    isHighlight?: boolean;
  }

  const tableColumns: ColumnDef<Transaction>[] = [
    {
      id: "asset",
      header: "Asset",
      accessorKey: "asset",
      sortable: true,
    },
    {
      id: "type",
      header: "Type",
      accessorKey: "type",
      cell: (item: Transaction) => (
        <span className={item.type === "buy" ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
          {item.type.toUpperCase()}
        </span>
      ),
      sortable: true,
    },
    {
      id: "amount",
      header: "Amount",
      accessorKey: "amount",
      sortable: true,
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: (item: Transaction) => {
        const variants: Record<string, BadgeVariant> = {
          completed: "green",
          pending: "amber",
          failed: "red",
        };
        return <BadgeEl v={variants[item.status] || "neutral"} sz="sm">{item.status}</BadgeEl>;
      },
    },
    {
      id: "risk",
      header: "Risk Score",
      accessorKey: "risk",
      cell: (item: Transaction) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 100 }}>
          <ProgressEl value={item.risk} color={item.risk > 70 ? "red" : item.risk > 30 ? "amber" : "brand"} label={`${item.risk}% risk`} />
          <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>{item.risk}%</span>
        </div>
      ),
      sortable: true,
    },
    {
      id: "date",
      header: "Date",
      accessorKey: "date",
      sortable: true,
    },
  ];

  const tableData: Transaction[] = [
    { id: "1", asset: "RELIANCE", type: "buy", amount: "₹24,500", status: "completed", date: "2024-03-12", risk: 24, isHighlight: true },
    { id: "2", asset: "TCS", type: "sell", amount: "₹12,200", status: "completed", date: "2024-03-11", risk: 12 },
    { id: "3", asset: "INFY", type: "buy", amount: "₹8,400", status: "pending", date: "2024-03-11", risk: 45 },
    { id: "4", asset: "ZOMATO", type: "buy", amount: "₹1,200", status: "completed", date: "2024-03-10", risk: 85 },
    { id: "5", asset: "HDFCBANK", type: "sell", amount: "₹45,000", status: "failed", date: "2024-03-09", risk: 15 },
    { id: "6", asset: "ADANIENT", type: "buy", amount: "₹92,000", status: "completed", date: "2024-03-08", risk: 92 },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        ...vars,
        fontFamily: "var(--font-body)",
        background: "var(--bg-base)",
        color: "var(--text-primary)",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
        transition: "background 0.35s, color 0.35s",
      }}
    >
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        button{font-family:inherit;cursor:pointer}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulse-live{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.5)}50%{box-shadow:0 0 0 6px rgba(34,197,94,0)}}
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        .skel{background:var(--bg-overlay);border-radius:4px;position:relative;overflow:hidden}
        .skel::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 25%,rgba(255,255,255,0.06) 50%,transparent 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
        
        /* Responsive utilities */
        .tab-scroll {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .tab-scroll::-webkit-scrollbar {
          display: none; /* WebKit */
        }
        
        .resp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .resp-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        .resp-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        
        @media (max-width: 1024px) {
          .resp-grid-4 {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 800px) {
          .resp-grid, .resp-grid-3, .resp-grid-4 {
            grid-template-columns: 1fr;
          }
          .hide-mobile {
            display: none !important;
          }
        }
        
        @media (max-width: 1024px) {
           .header-content {
             flex-direction: column;
             height: auto !important;
             padding: 12px var(--sp-6) !important;
             gap: 12px;
           }
           .header-tabs {
             width: 100%;
             order: 3;
             justify-content: flex-start !important;
           }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          STICKY HEADER
      ══════════════════════════════════════════════ */}
      <header
        className="header-content"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "0 var(--sp-6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MintxMark size={28} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
            }}
          >
            Mint<span style={{ color: MINT }}>x</span>
          </span>
          <span
            className="hide-mobile"
            style={{
              fontSize: 11,
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-mono)",
              marginLeft: 4,
            }}
          >
            Design System v1.0
          </span>
        </div>

        {/* Section tabs */}
        <div
          className="header-tabs tab-scroll"
          style={{
            display: "flex",
            gap: 2,
            background: "var(--bg-base)",
            border: "1px solid var(--border-default)",
            borderRadius: 10,
            padding: 3,
          }}
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActiveTab(s)}
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                border: "none",
                background:
                  activeTab === s ? "var(--bg-surface)" : "transparent",
                color:
                  activeTab === s
                    ? "var(--text-primary)"
                    : "var(--text-tertiary)",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: activeTab === s ? 600 : 500,
                boxShadow: activeTab === s ? "var(--shadow-sm)" : "none",
                transition: "all 0.15s",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Theme toggle & Storybook */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="/storybook"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid var(--border-default)",
              background: "var(--bg-overlay)",
              color: "var(--text-secondary)",
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--border-strong)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--bg-overlay)")}
          >
            📘 Storybook
          </a>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid var(--border-default)",
              background: "none",
              color: "var(--text-tertiary)",
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              transition: "all 0.15s",
            }}
          >
            {isDark ? "☀ Light" : "◑ Dark"}
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "48px 48px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 800px 400px at 50% -20%, rgba(0,179,138,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 720 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-brand)",
              background: "var(--bg-brand-soft)",
              border: "1px solid rgba(0,179,138,0.25)",
              borderRadius: 999,
              padding: "3px 12px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--mint-400)",
                display: "inline-block",
              }}
            />
            Brand &amp; Design System
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px,6vw,64px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            Mint<span style={{ color: MINT }}>x</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 6,
            }}
          >
            Wealth intelligence. Built for every Indian investor.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--text-tertiary)",
            }}
          >
            mintx.trade · mintx.in · @mintx
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════ */}
      <div
        style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px 80px" }}
      >
        {/* ── INSTRUCTIONS ────────────────────────── */}
        {activeTab === "instructions" && (
          <section>
            <SectionHeader
              tag="Getting Started"
              title="Design System Instructions"
              desc="How to install, configure, and use the Mintx Design System in your projects."
            />
            <GeneralInstructions />
          </section>
        )}

        {/* ── TOKENS ──────────────────────────────── */}
        {activeTab === "tokens" && (
          <section>
            <SectionHeader
              tag="Design Tokens"
              title="Colour System"
              desc="The Mintx mint palette is the heart of the brand — a green-tinted neutral system that works across light and dark modes."
            />

            {/* Mint ramp */}
            <div style={{ marginBottom: 32 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-tertiary)",
                  marginBottom: 12,
                }}
              >
                Mint Brand Scale
              </div>
              <div
                style={{
                  display: "flex",
                  borderRadius: 14,
                  overflow: "hidden",
                  height: 64,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {(
                  [
                    "#E6FBF5",
                    "#BFFAE9",
                    "#7DEFD2",
                    "#3DDCBA",
                    "#10C9A0",
                    "#00B38A",
                    "#008F6E",
                    "#006B52",
                    "#004736",
                    "#00231A",
                  ] as const
                ).map((c, i) => (
                  <div
                    key={c}
                    style={{
                      flex: i === 4 ? 2 : 1,
                      background: c,
                      position: "relative",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 6,
                      transition: "flex 0.2s",
                    }}
                  >
                    {i === 4 && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          color: "rgba(0,26,19,0.7)",
                          fontWeight: 600,
                        }}
                      >
                        ★ 400
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic + Token table side by side */}
            <div
              className="resp-grid"
              style={{
                marginBottom: 32,
              }}
            >
              {/* Semantic */}
              <Card>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-tertiary)",
                    marginBottom: 16,
                  }}
                >
                  Semantic Colours
                </div>
                {[
                  {
                    name: "Gain Green",
                    hex: "#22C55E",
                    use: "Up / Bullish / Profit",
                    bg: "rgba(34,197,94,0.12)",
                    fg: "#15803D",
                  },
                  {
                    name: "Loss Red",
                    hex: "#F87171",
                    use: "Down / Bearish / Loss",
                    bg: "rgba(248,113,113,0.12)",
                    fg: "#B91C1C",
                  },
                  {
                    name: "Alert Amber",
                    hex: "#FBBF24",
                    use: "Warning / Caution",
                    bg: "rgba(251,191,36,0.12)",
                    fg: "#B45309",
                  },
                  {
                    name: "Info Blue",
                    hex: "#60A5FA",
                    use: "Neutral info",
                    bg: "rgba(96,165,250,0.12)",
                    fg: "#1D4ED8",
                  },
                ].map((s) => (
                  <div
                    key={s.hex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: s.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 4,
                          background: s.hex,
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        {s.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-tertiary)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {s.hex} · {s.use}
                      </div>
                    </div>
                  </div>
                ))}
              </Card>

              {/* Spacing + Radius */}
              <Card>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-tertiary)",
                    marginBottom: 16,
                  }}
                >
                  Spacing &amp; Radius Scale
                </div>
                <div
                  className="resp-grid"
                  style={{
                    gap: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        marginBottom: 8,
                      }}
                    >
                      Spacing (4px base)
                    </div>
                    {([1, 2, 3, 4, 5, 6, 8, 10] as const).map((k) => (
                      <div
                        key={k}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            color: "var(--text-brand)",
                            width: 36,
                          }}
                        >
                          sp-{k}
                        </span>
                        <div
                          style={{
                            height: 6,
                            borderRadius: 2,
                            background: "var(--mint-400)",
                            width: k * 4,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 10,
                            color: "var(--text-tertiary)",
                          }}
                        >
                          {k * 4}px
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        marginBottom: 8,
                      }}
                    >
                      Border Radius
                    </div>
                    {[
                      { k: "r-xs", v: 4 },
                      { k: "r-sm", v: 6 },
                      { k: "r-md", v: 10 },
                      { k: "r-lg", v: 14 },
                      { k: "r-xl", v: 20 },
                      { k: "r-2xl", v: 28 },
                      { k: "r-full", v: 999 },
                    ].map((r) => (
                      <div
                        key={r.k}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            color: "var(--text-brand)",
                            width: 44,
                          }}
                        >
                          {r.k}
                        </span>
                        <div
                          style={{
                            width: 28,
                            height: 16,
                            background: "var(--bg-brand-soft)",
                            border: "1.5px solid var(--mint-400)",
                            borderRadius: r.v,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 10,
                            color: "var(--text-tertiary)",
                          }}
                        >
                          {r.v}px
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Shadow demo */}
            <Card>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-tertiary)",
                  marginBottom: 16,
                }}
              >
                Elevation (Shadows)
              </div>
              <div
                className="resp-grid-4"
                style={{
                  gap: 16,
                }}
              >
                {[
                  {
                    name: "shadow-sm",
                    shadow: "0 1px 3px rgba(0,0,0,0.3)",
                    label: "Cards, inputs",
                  },
                  {
                    name: "shadow-md",
                    shadow: "0 4px 12px rgba(0,0,0,0.4)",
                    label: "Dropdowns, raised",
                  },
                  {
                    name: "shadow-lg",
                    shadow: "0 12px 32px rgba(0,0,0,0.5)",
                    label: "Modals, drawers",
                  },
                  {
                    name: "shadow-brand",
                    shadow: "0 4px 20px rgba(0,179,138,0.35)",
                    label: "CTAs, primary actions",
                  },
                ].map((s) => (
                  <div
                    key={s.name}
                    style={{
                      background: "var(--bg-surface)",
                      borderRadius: 12,
                      padding: 16,
                      boxShadow: s.shadow,
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--text-brand)",
                        marginBottom: 4,
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      style={{ fontSize: 11, color: "var(--text-tertiary)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        )}

        {/* ── BUTTONS ─────────────────────────────── */}
        {activeTab === "buttons" && (
          <section>
            <SectionHeader
              tag="Components"
              title="Buttons"
              desc="6 variants × 5 sizes with loading state, icon support, and full dark mode."
            />

            <Card style={{ marginBottom: 16 }}>
              <Label>Variants</Label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Btn v="primary">Open Dashboard</Btn>
                <Btn v="secondary">Learn More</Btn>
                <Btn v="outline-brand">Go Pro</Btn>
                <Btn v="ghost">Cancel</Btn>
                <Btn v="danger">Delete</Btn>
                <Btn v="dark">Dark Mode</Btn>
                <Btn v="primary" disabled>
                  Disabled
                </Btn>
                <BtnLoading />
              </div>
            </Card>

            <Card style={{ marginBottom: 16 }}>
              <Label>Sizes</Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
                  <Btn key={s} v="primary" sz={s}>
                    {s.toUpperCase()}
                  </Btn>
                ))}
              </div>
            </Card>

            <Card>
              <Label>Icon Buttons</Label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {(["sm", "md", "lg"] as const).map((s) => (
                  <BtnIcon key={s} sz={s} />
                ))}
              </div>
            </Card>
          </section>
        )}

        {/* ── BADGES ──────────────────────────────── */}
        {activeTab === "badges" && (
          <section>
            <SectionHeader
              tag="Components"
              title="Badges &amp; Status"
              desc="8 badge variants, 3 sizes, dot indicator, and live status indicators."
            />

            <Card style={{ marginBottom: 16 }}>
              <Label>Badge Variants</Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {(
                  [
                    "mint",
                    "green",
                    "red",
                    "amber",
                    "blue",
                    "purple",
                    "neutral",
                    "outline",
                  ] as BadgeVariant[]
                ).map((v) => (
                  <BadgeEl key={v} v={v}>
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </BadgeEl>
                ))}
              </div>
            </Card>

            <Card style={{ marginBottom: 16 }}>
              <Label>Sizes</Label>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <BadgeEl v="mint" sz="sm">
                  Small
                </BadgeEl>
                <BadgeEl v="mint" sz="md">
                  Medium
                </BadgeEl>
                <BadgeEl v="mint" sz="lg">
                  Large
                </BadgeEl>
              </div>
            </Card>

            <Card>
              <Label>Status Indicators</Label>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                <StatusEl s="live" label="Market Open" />
                <StatusEl s="paused" label="Pre-open" />
                <StatusEl s="offline" label="Market Closed" />
                <StatusEl s="error" label="Data Error" />
                <StatusEl s="pro" label="Pro Plan" />
              </div>
            </Card>
          </section>
        )}

        {/* ── CARDS ───────────────────────────────── */}
        {activeTab === "cards" && (
          <section>
            <SectionHeader
              tag="Components"
              title="Cards"
              desc="4 surface variants — flat, raised, glass, outlined — with hover and interactive modes."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 16,
                marginBottom: 16,
              }}
            >
              {[
                {
                  variant: "flat",
                  label: "Flat",
                  sub: "No shadow, subtle border",
                },
                {
                  variant: "raised",
                  label: "Raised",
                  sub: "md shadow, stronger border",
                },
                {
                  variant: "glass",
                  label: "Glass",
                  sub: "Blur backdrop, semi-transparent",
                },
                {
                  variant: "outlined",
                  label: "Outlined",
                  sub: "Transparent bg, default border",
                },
              ].map((c) => (
                <CardVariantDemo key={c.variant} {...c} />
              ))}
            </div>

            <Card hover>
              <Label>Hover Card (try hovering)</Label>
              <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                Cards with hover=true lift and show a brand shadow + border on
                hover. Used for watchlist items, search results, and
                recommendation tiles.
              </p>
            </Card>
          </section>
        )}

        {/* ── UI PRIMITIVES ────────────────────────── */}
        {activeTab === "ui-primitives" && (
          <section>
            <SectionHeader
              tag="Components"
              title="UI Primitives"
              desc="The core building blocks of the Mintx interface — all fully accessible and theme-aware."
            />

            <div
              className="resp-grid"
              style={{
                marginBottom: 16,
              }}
            >
              <Card>
                <Label>Form Elements</Label>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <InputEl
                    label="Stock symbol"
                    placeholder="RELIANCE, TCS, INFY…"
                    hint="Enter NSE ticker symbol"
                  />
                  <SelectEl
                    label="Timeframe"
                    options={["1D", "1W", "1M", "3M", "1Y", "All"]}
                  />
                  <div style={{ display: "flex", gap: 20 }}>
                     <ToggleEl
                       label="Push notifications"
                       checked={toggleOn}
                       onChange={setToggleOn}
                     />
                     <ToggleEl label="Pro features" checked={false} />
                  </div>
                </div>
              </Card>

              <Card>
                <Label>Status &amp; Feedback</Label>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", gap: 20 }}>
                    <StatusEl s="live" label="Market Live" />
                    <StatusEl s="paused" label="Market Closed" />
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 99, background: "var(--bg-brand-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-brand)", fontWeight: 700 }}>TS</div>
                    <div style={{ width: 40, height: 40, borderRadius: 99, background: "var(--bg-overlay)", border: "1px solid var(--border-subtle)" }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                       <div style={{ height: 12, width: 120, background: "var(--bg-overlay)", borderRadius: 4 }} />
                       <div style={{ height: 10, width: 80, background: "var(--bg-overlay)", borderRadius: 4, opacity: 0.5 }} />
                    </div>
                  </div>
                  <ProgressEl
                    value={progress}
                    color="brand"
                    label={`Portfolio completion — ${progress}%`}
                  />
                </div>
              </Card>
            </div>

            {/* Layout Primitives */}
            <div className="resp-grid" style={{ gap: 16, marginBottom: 16 }}>
               <Card>
                 <Label>Navigation Tabs</Label>
                 <div style={{ display: "flex", background: "var(--bg-base)", padding: 4, borderRadius: 10, gap: 4 }}>
                    <div style={{ flex: 1, textAlign: "center", padding: "6px 0", background: "var(--bg-surface)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Summary</div>
                    <div style={{ flex: 1, textAlign: "center", padding: "6px 0", borderRadius: 6, fontSize: 13, fontWeight: 500, color: "var(--text-tertiary)" }}>Holdings</div>
                    <div style={{ flex: 1, textAlign: "center", padding: "6px 0", borderRadius: 6, fontSize: 13, fontWeight: 500, color: "var(--text-tertiary)" }}>Orders</div>
                 </div>
               </Card>
               <Card>
                  <Label>Alerts</Label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                     <AlertEl v="info" />
                     <AlertEl v="success" />
                  </div>
               </Card>
            </div>

            {/* Data Management */}
            <div style={{ marginTop: 24 }}>
               <Card>
                  <Label>Interactive Data Table</Label>
                  <div style={{ marginTop: 12 }}>
                <DataTableEl 
                   columns={tableColumns} 
                   data={tableData} 
                   searchKey="asset" 
                   searchPlaceholder="Filter by asset name (e.g. RELIANCE)..."
                   highlightKey="isHighlight"
                />
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text-tertiary)", marginTop: 16 }}>
                    Supports sorting (click headers), filtering (search box), and row highlighting (e.g. recent transactions).
                  </p>
               </Card>
            </div>
          </section>
        )}

        {/* ── FINANCIAL ───────────────────────────── */}
        {activeTab === "financial" && (
          <section>
            <SectionHeader
              tag="Financial Components"
              title="Market Cards"
              desc="StockCard, MetricCard, InsightCard — purpose-built for financial data display."
            />

            {/* Market metrics */}
            <div
              className="resp-grid-4"
              style={{
                marginBottom: 16,
              }}
            >
              {[
                {
                  label: "Nifty 50",
                  value: "24,315",
                  delta: "+143",
                  dir: "up" as PriceDir,
                },
                {
                  label: "Sensex",
                  value: "80,220",
                  delta: "-112",
                  dir: "down" as PriceDir,
                },
                {
                  label: "Bank Nifty",
                  value: "51,840",
                  delta: "+320",
                  dir: "up" as PriceDir,
                },
                {
                  label: "VIX",
                  value: "13.42",
                  delta: "-0.81",
                  dir: "down" as PriceDir,
                },
              ].map((m) => (
                <MetricCardEl key={m.label} {...m} />
              ))}
            </div>

            {/* Stock cards */}
            <div
              className="resp-grid-3"
              style={{
                marginBottom: 16,
              }}
            >
              <StockCardEl
                ticker="TCS"
                name="Tata Consultancy Svcs"
                price="₹3,847"
                pct="+2.34%"
                dir="up"
                spk={spkUp}
              />
              <StockCardEl
                ticker="INFY"
                name="Infosys Limited"
                price="₹1,456"
                pct="-1.23%"
                dir="down"
                spk={spkDown}
              />
              <StockCardEl
                ticker="RELIANCE"
                name="Reliance Industries"
                price="₹2,847"
                pct="+0.04%"
                dir="flat"
                spk={spkFlat}
              />
            </div>

            {/* Insight cards */}
            <div
              className="resp-grid"
              style={{
                gap: 12,
              }}
            >
              <InsightCardEl
                tag="Volume Breakout"
                title="TCS Volume 3× average — unusual activity detected"
                body="Today's volume at 2.1M shares is 3× the 20-day average. This often precedes significant price movement. Use as one signal among many. Educational and informational only."
                badges={[
                  { label: "Illustrative only", v: "neutral" },
                  { label: "Volume signal", v: "mint" },
                ]}
              />
            </div>

            {/* TradingView Widgets */}
            <div style={{ marginTop: 48 }}>
              <SectionHeader
                tag="Live Market Data"
                title="TradingView Widgets"
                desc="Embeddable real-time charts and analysis from TradingView. The marquee below is also a component."
              />
              
              <div style={{ marginBottom: 24 }}>
                <TickerTape theme={theme} />
              </div>

              <div className="resp-grid-2" style={{ gap: 24, marginBottom: 24 }}>
                <Card>
                  <Label>Advanced Chart</Label>
                  <div style={{ height: 450, marginTop: 12, borderRadius: 8, overflow: 'hidden' }}>
                    <AdvancedRealTimeChart symbol="NASDAQ:NVDA" theme={theme} height={450} />
                  </div>
                </Card>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <Card>
                    <Label>Technical Analysis</Label>
                    <div style={{ marginTop: 12 }}>
                      <TechnicalAnalysis symbol="NASDAQ:NVDA" theme={theme} height={320} />
                    </div>
                  </Card>
                </div>
              </div>

              <Card>
                <Label>Market Overview</Label>
                <div style={{ marginTop: 12 }}>
                  <MarketOverview theme={theme} height={400} />
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* ── MOBILE ──────────────────────────────── */}
        {activeTab === "mobile" && (
          <section>
            <SectionHeader
              tag="Mobile Components"
              title="Navigation"
              desc="Bottom navigation bar and support live bar — SubZero-inspired, safe-area aware."
            />

            <div
              className="resp-grid"
              style={{
                gap: 16,
              }}
            >
              {/* Bottom nav preview */}
              <Card>
                <Label>Bottom Navigation</Label>
                <div
                  style={{
                    background: "var(--bg-base)",
                    borderRadius: 12,
                    padding: 24,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    minHeight: 200,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 390,
                      background: "var(--bg-surface)",
                      borderTop: "1px solid var(--border-subtle)",
                      borderRadius: "0 0 20px 20px",
                      backdropFilter: "blur(20px)",
                      padding: "0 0 16px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      {[
                        { id: "home", label: "Home", icon: "⌂" },
                        { id: "markets", label: "Markets", icon: "📊" },
                        { id: "search", label: "Search", icon: "⊕" },
                        { id: "academy", label: "Academy", icon: "🎓" },
                        { id: "profile", label: "Profile", icon: "◉" },
                      ].map((item) => {
                        const isActive = activeNav === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            style={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 3,
                              padding: "12px 4px 4px",
                              border: "none",
                              background: "none",
                              color: isActive ? MINT : "var(--text-tertiary)",
                              fontFamily: "var(--font-body)",
                              transition: "all 0.15s",
                              position: "relative",
                            }}
                          >
                            {isActive && (
                              <span
                                style={{
                                  position: "absolute",
                                  top: 6,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: MINT,
                                }}
                              />
                            )}
                            <span style={{ fontSize: 20, lineHeight: 1 }}>
                              {item.icon}
                            </span>
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: isActive ? 700 : 500,
                              }}
                            >
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Support live bar + sidebar collapsed */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <Card>
                  <Label>Support Live Bar</Label>
                  <div
                    style={{
                      background: "var(--bg-elevated)",
                      borderRadius: 10,
                      border: "1px solid var(--border-subtle)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#22C55E",
                            animation: "pulse-live 1.8s ease infinite",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          Market Open
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            color: "var(--text-tertiary)",
                          }}
                        >
                          · Closes at{" "}
                          <span style={{ fontFamily: "var(--font-mono)" }}>
                            15:30
                          </span>
                        </span>
                      </div>
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-brand)",
                          background: "var(--bg-brand-soft)",
                          border: "1px solid rgba(0,179,138,0.2)",
                          borderRadius: 999,
                          padding: "4px 10px",
                        }}
                      >
                        💬 Support
                      </button>
                    </div>
                  </div>
                </Card>

                <Card>
                  <Label>Sidebar — Collapsed State</Label>
                  <div
                    style={{
                      display: "flex",
                      gap: 0,
                      borderRadius: 12,
                      border: "1px solid var(--border-subtle)",
                      overflow: "hidden",
                      height: 200,
                    }}
                  >
                    {/* Collapsed sidebar */}
                    <div
                      style={{
                        width: sidebarCollapsed ? 52 : 180,
                        background: "var(--bg-surface)",
                        borderRight: "1px solid var(--border-subtle)",
                        transition: "width 0.3s",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: sidebarCollapsed ? "center" : "flex-start",
                        padding: sidebarCollapsed ? "12px 0" : "12px 8px",
                        gap: 4,
                      }}
                    >
                      {[
                        { icon: "⌂", label: "Home", active: true },
                        { icon: "📊", label: "Markets", active: false },
                        { icon: "🔍", label: "Screener", active: false },
                        { icon: "📚", label: "Academy", active: false },
                      ].map((item) => (
                        <div
                          key={item.label}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: sidebarCollapsed ? "6px" : "6px 8px",
                            borderRadius: 8,
                            width: "100%",
                            background: item.active
                              ? "var(--bg-brand-soft)"
                              : "transparent",
                            color: item.active
                              ? "var(--text-brand)"
                              : "var(--text-tertiary)",
                            fontSize: 13,
                            fontWeight: item.active ? 600 : 500,
                            justifyContent: sidebarCollapsed
                              ? "center"
                              : "flex-start",
                          }}
                        >
                          <span>{item.icon}</span>
                          {!sidebarCollapsed && <span>{item.label}</span>}
                        </div>
                      ))}
                    </div>
                    {/* Main content area */}
                    <div
                      style={{
                        flex: 1,
                        background: "var(--bg-base)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      <button
                        onClick={() => setSidebarCollapsed((v) => !v)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 8,
                          border: "1px solid var(--border-default)",
                          background: "var(--bg-surface)",
                          color: "var(--text-secondary)",
                          fontSize: 12,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {sidebarCollapsed ? "→ Expand" : "← Collapse"}
                      </button>
                      <span
                        style={{ fontSize: 11, color: "var(--text-tertiary)" }}
                      >
                        Toggle sidebar
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}
        {/* ── FEEDBACK ───────────────────────────── */}
        {activeTab === "feedback" && (
          <section>
            <SectionHeader
              tag="Status & Feedback"
              title="Communication"
              desc="Alerts, loaders, and progress indicators to keep users informed about system status and actions."
            />
            <div className="bg-red-500 p-2 text-white text-center mb-4 rounded-md">Tailwind Test: If you see red, App Tailwind is working</div>
            <div className="resp-grid" style={{ gap: 24 }}>
              <UiCard variant="raised" padding="lg">
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Alerts</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <Alert variant="info" title="Market Update" description="Trading will be halted for 15 minutes due to circuit breaker." />
                  <Alert variant="success" title="Order Executed" description="Buy 100 RELIANCE @ ₹2450.00 successful." />
                  <Alert variant="warning" title="KYC Pending" description="Please complete your KYC to avoid account restrictions." />
                  <Alert variant="destructive" title="System Error" description="Unable to connect to live data stream. Retrying..." />
                </div>
              </UiCard>

              <UiCard variant="raised" padding="lg">
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Progress & Loading</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div>
                    <span style={{ fontSize: 12, color: "var(--text-tertiary)", display: "block", marginBottom: 8 }}>Progress Bar</span>
                    <Progress value={65} color="brand" label="Portfolio Completion" showValue />
                  </div>
                  <div>
                    <span style={{ fontSize: 12, color: "var(--text-tertiary)", display: "block", marginBottom: 8 }}>Loading States</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <Loader size="md" />
                      <Loader size="sm" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                </div>
              </UiCard>
            </div>
          </section>
        )}

        {/* ── MISC ───────────────────────────────── */}
        {activeTab === "misc" && (
          <section>
            <SectionHeader
              tag="Miscellaneous"
              title="Extended Kit"
              desc="Animations, carousel, and advanced iconography for richer interactive experiences."
            />
            <div className="resp-grid" style={{ gap: 24 }}>
              <UiCard variant="raised" padding="lg">
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Carousel</h3>
                <Carousel>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ height: 200, display: "flex", alignItems: "center", justifyItems: "center", background: "var(--bg-base)", borderRadius: 12, border: "1px solid var(--border-default)" }}>
                      <p style={{ width: "100%", textAlign: "center", fontSize: 24, fontWeight: 700, color: "var(--text-brand)" }}>Slide {i}</p>
                    </div>
                  ))}
                </Carousel>
              </UiCard>

              <UiCard variant="raised" padding="lg">
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Animations & Icons</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <FadeIn><Badge variant="mint">Fade In</Badge></FadeIn>
                    <SlideIn direction="up"><Badge variant="blue">Slide Up</Badge></SlideIn>
                    <ScaleIn><Badge variant="purple">Scale In</Badge></ScaleIn>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                    <RemixIcon name="ri-home-line" size={24} color="var(--text-brand)" />
                    <RemixIcon name="ri-user-line" size={24} />
                    <RemixIcon name="ri-settings-4-line" size={24} />
                    <RemixIcon name="ri-notification-3-line" size={24} />
                  </div>
                </div>
              </UiCard>
            </div>
          </section>
        )}

        {/* ── LAYOUT ────────────────────────── */}
        {activeTab === "layout" && (
          <section>
            <SectionHeader
              tag="Navigation & Layout"
              title="Interface Shell"
              desc="The framework that wraps the content — including the sidebar navigation and brand mark."
            />
            <div className="resp-grid" style={{ gap: 24 }}>
               <Card>
                 <Label>Sidebar Component</Label>
                 <div style={{ display: "flex", gap: 16, height: 400, border: "1px solid var(--border-subtle)", borderRadius: 12, overflow: "hidden", background: "var(--bg-base)" }}>
                    <div style={{ width: 64, background: "var(--bg-surface)", borderRight: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: 12 }}>
                       <div style={{ width: 32, height: 32, background: "var(--bg-brand-soft)", borderRadius: 8 }} />
                       <div style={{ width: 22, height: 22, background: "var(--bg-overlay)", borderRadius: 6 }} />
                       <div style={{ width: 22, height: 22, background: "var(--bg-overlay)", borderRadius: 6 }} />
                       <div style={{ width: 22, height: 22, background: "var(--bg-overlay)", borderRadius: 6 }} />
                    </div>
                    <div style={{ flex: 1, padding: 24 }}>
                       <div style={{ height: 24, width: 200, background: "var(--bg-overlay)", borderRadius: 12, marginBottom: 16 }} />
                       <div style={{ height: 150, width: "100%", background: "var(--bg-overlay)", borderRadius: 12, opacity: 0.5 }} />
                    </div>
                 </div>
               </Card>
            </div>
          </section>
        )}

        {/* ── CHARTS ────────────────────────────────── */}
        {activeTab === "charts" && (
          <section>
            <SectionHeader
              tag="Financial Visuals"
              title="State-of-the-Art Charts"
              desc="High-performance TradingView library charts built directly into our design system. No iframes."
            />

            <div style={{ display: "flex", gap: 32, alignItems: "flex-start", marginTop: 24 }}>
              {/* Sidebar */}
              <div style={{ width: 240, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {ChartTabs.map((ct) => {
                  const Icon = ct.id === "area" ? TrendingUp : 
                             ct.id === "candles" ? BarChart : 
                             ct.id === "baseline" ? Zap : Layers;
                  const isActive = activeChartTab === ct.id;
                  
                  return (
                    <button
                      key={ct.id}
                      onClick={() => setActiveChartTab(ct.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 16px",
                        borderRadius: 12,
                        border: "none",
                        background: isActive ? "rgba(230, 30, 80, 1)" : "transparent",
                        color: isActive ? "#fff" : "var(--text-secondary)",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        textAlign: "left",
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      <Icon 
                        size={18} 
                        style={{ 
                          color: isActive ? "#fff" : "var(--text-brand)",
                          opacity: isActive ? 1 : 0.7 
                        }} 
                      />
                      {ct.label}
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {activeChartTab === "area" && (
                  <Card>
                    <Label>Asset Performance - Area</Label>
                    <div style={{ height: 450, marginTop: 16 }}>
                      <AreaChart data={lwcLineData} theme={theme} height={450} />
                    </div>
                  </Card>
                )}

                {activeChartTab === "candles" && (
                  <Card>
                    <Label>Market Dynamics - Candlestick</Label>
                    <div style={{ height: 450, marginTop: 16 }}>
                      <CandlestickChart data={lwcCandleData} theme={theme} height={450} />
                    </div>
                  </Card>
                )}

                {activeChartTab === "baseline" && (
                  <Card>
                    <Label>Price Relative to Baseline</Label>
                    <div style={{ height: 450, marginTop: 16 }}>
                      <BaselineChart data={lwcLineData} theme={theme} height={450} />
                    </div>
                  </Card>
                )}

                {activeChartTab === "volume" && (
                  <Card>
                    <Label>Trading Volume Histogram</Label>
                    <div style={{ height: 450, marginTop: 16 }}>
                      <VolumeChart 
                        data={lwcLineData.map(d => ({ ...d, color: d.value > 25 ? '#00B38A80' : '#EF444480' }))} 
                        theme={theme} 
                        height={450} 
                      />
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── ICONS ───────────────────────────────── */}
        {activeTab === "icons" && (
          <section>
            <SectionHeader
              tag="Icon Library"
              title="Icons"
              desc="Search and copy Lucide icons used across the Mintx platform."
            />
            <AssetLibrary showHeader={false} mode="icons" />
          </section>
        )}

        {/* ── ILLUSTRATIONS ────────────────────────── */}
        {activeTab === "illustrations" && (
          <section>
            <SectionHeader
              tag="Illustration Library"
              title="Illustrations"
              desc="SVG illustrations for onboarding, empty states, and marketing."
            />
            <AssetLibrary showHeader={false} mode="illustrations" />
          </section>
        )}

        {/* ── TYPOGRAPHY ──────────────────────────── */}
        {activeTab === "typography" && (
          <section>
            <SectionHeader
              tag="Typography"
              title="Type System"
              desc="Syne for display, DM Sans for body, DM Mono for financial data. Every number is tabular."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  role: "Display / Headings",
                  font: "Syne",
                  weight: 800,
                  sample: "Syne",
                  desc: "Bold, geometric, memorable. Used for all headings, brand marks, and number displays.",
                },
                {
                  role: "Body / UI",
                  font: "DM Sans",
                  weight: 400,
                  sample: "DM Sans",
                  desc: "Clean, approachable, legible at small sizes. All body text, labels, and UI copy.",
                },
                {
                  role: "Data / Code",
                  font: "DM Mono",
                  weight: 500,
                  sample: "DM Mono",
                  desc: "Tabular numbers, prices, percentages, code. Every financial figure uses this font.",
                },
              ].map((f) => (
                <Card key={f.font}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-tertiary)",
                      marginBottom: 12,
                    }}
                  >
                    {f.role}
                  </div>
                  <div
                    style={{
                      fontFamily:
                        f.font === "Syne"
                          ? "var(--font-display)"
                          : f.font === "DM Mono"
                            ? "var(--font-mono)"
                            : "var(--font-body)",
                      fontSize: 28,
                      fontWeight: f.weight,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                      marginBottom: 10,
                    }}
                  >
                    {f.sample}
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.desc}
                  </p>
                </Card>
              ))}
            </div>

            <Card>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-tertiary)",
                  marginBottom: 16,
                }}
              >
                Type Scale
              </div>
              {[
                {
                  label: "Display 6xl / 60px",
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 60,
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  },
                  text: "Mintx.trade",
                },
                {
                  label: "Display 5xl / 48px",
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 48,
                    fontWeight: 800,
                    letterSpacing: "-1.5px",
                    lineHeight: 1.05,
                  },
                  text: "Market Intelligence",
                },
                {
                  label: "H1 / 30px",
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 30,
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                  },
                  text: "Fibonacci Zones",
                },
                {
                  label: "H2 / 24px",
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 700,
                  },
                  text: "Sector Sentiment",
                },
                {
                  label: "Body / 15px",
                  style: { fontSize: 15, lineHeight: 1.6 },
                  text: "Fibonacci retracement zones are calculated automatically across multiple timeframes.",
                },
                {
                  label: "Body SM / 13px",
                  style: {
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  },
                  text: "For educational and informational purposes only. Not investment advice.",
                },
                {
                  label: "Caption / 11px",
                  style: { fontSize: 11, color: "var(--text-tertiary)" },
                  text: 'SEBI: "Investments in securities market are subject to market risks."',
                },
                {
                  label: "Mono Data / 15px",
                  style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: 15,
                    fontWeight: 500,
                    fontVariantNumeric: "tabular-nums",
                  },
                  text: "₹3,847.50   +2.34%   Vol: 2.1M",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border-subtle)",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--text-tertiary)",
                      flexShrink: 0,
                      width: 180,
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      ...(row.style as React.CSSProperties),
                      color: (row.style as any).color || "var(--text-primary)",
                      flex: 1,
                    }}
                  >
                    {row.text}
                  </span>
                </div>
              ))}
            </Card>
          </section>
        )}
      </div>
    </div>
  );
}

// ─── Shared sub-components (inline, no imports needed) ──────────────────────

function SectionHeader({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-brand)",
          marginBottom: 6,
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 28,
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: 8,
          letterSpacing: "-0.3px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          maxWidth: 560,
          lineHeight: 1.65,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function Card({
  children,
  style,
  hover,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  hover?: boolean;
}) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        background: "var(--bg-surface)",
        border: `1px solid ${hov ? "var(--mint-400)" : "var(--border-subtle)"}`,
        borderRadius: 14,
        padding: 24,
        transition: "all 0.2s",
        boxShadow: hov ? "var(--shadow-brand)" : "none",
        transform: hov ? "translateY(-2px)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-tertiary)",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 7,
  fontFamily: "var(--font-body)",
  fontWeight: 500,
  cursor: "pointer",
  border: "1px solid transparent",
  position: "relative" as const,
  overflow: "hidden" as const,
  transition: "all 0.12s",
  userSelect: "none" as const,
  whiteSpace: "nowrap" as const,
};

const btnVariants: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: MINT,
    color: "#001A13",
    borderColor: MINT,
    boxShadow: "0 4px 16px rgba(0,179,138,0.28)",
  },
  secondary: {
    background: "var(--bg-surface)",
    color: "var(--text-primary)",
    borderColor: "var(--border-default)",
    boxShadow: "var(--shadow-sm)",
  },
  ghost: { background: "transparent", color: "var(--text-secondary)" },
  danger: {
    background: "rgba(220,38,38,0.08)",
    color: "var(--red-500)",
    borderColor: "rgba(220,38,38,0.2)",
  },
  "outline-brand": {
    background: "transparent",
    color: "var(--text-brand)",
    borderColor: "var(--mint-400)",
  },
  dark: {
    background: "var(--n-800)",
    color: "var(--mint-300)",
    borderColor: "rgba(61,220,186,0.2)",
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  xs: { fontSize: 11, padding: "4px 10px", borderRadius: 6 },
  sm: { fontSize: 12, padding: "6px 14px", borderRadius: 10 },
  md: { fontSize: 14, padding: "9px 20px", borderRadius: 10 },
  lg: { fontSize: 15, padding: "12px 26px", borderRadius: 14 },
  xl: { fontSize: 16, padding: "14px 32px", borderRadius: 14, fontWeight: 600 },
};

function Btn({
  v,
  sz = "md",
  children,
  disabled,
}: {
  v: ButtonVariant;
  sz?: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      style={{
        ...btnBase,
        ...btnVariants[v],
        ...sizeStyles[sz],
        opacity: disabled ? 0.42 : 1,
      }}
    >
      {children}
    </button>
  );
}

function BtnLoading() {
  return (
    <button
      style={{
        ...btnBase,
        ...btnVariants["primary"],
        ...sizeStyles["md"],
        cursor: "wait",
      }}
    >
      <span
        style={{
          position: "absolute",
          width: 14,
          height: 14,
          border: "2px solid #001A13",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 0.7s linear infinite",
        }}
      />
      <span style={{ opacity: 0 }}>Loading</span>
    </button>
  );
}

function BtnIcon({ sz }: { sz: "sm" | "md" | "lg" }) {
  const s = sz === "sm" ? 32 : sz === "md" ? 38 : 46;
  return (
    <button
      style={{
        ...btnBase,
        ...btnVariants["secondary"],
        width: s,
        height: s,
        borderRadius: sz === "sm" ? 6 : 10,
        padding: 0,
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  );
}

const badgeVariantStyles: Record<BadgeVariant, React.CSSProperties> = {
  mint: { background: "var(--mint-50)", color: "var(--mint-700)" },
  green: { background: "rgba(34,197,94,0.12)", color: "#15803D" },
  red: { background: "rgba(248,113,113,0.12)", color: "#B91C1C" },
  amber: { background: "rgba(251,191,36,0.12)", color: "#B45309" },
  blue: { background: "rgba(96,165,250,0.12)", color: "#1D4ED8" },
  purple: { background: "rgba(167,139,250,0.12)", color: "#6D28D9" },
  neutral: {
    background: "var(--bg-overlay)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-default)",
  },
  outline: {
    background: "transparent",
    color: "var(--text-brand)",
    border: "1px solid var(--mint-400)",
  },
};
const badgeSizes: Record<string, React.CSSProperties> = {
  sm: { fontSize: 10, padding: "2px 7px" },
  md: { fontSize: 11, padding: "3px 9px" },
  lg: { fontSize: 12, padding: "4px 12px" },
};

function BadgeEl({
  v,
  sz = "md",
  children,
}: {
  v: BadgeVariant;
  sz?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontWeight: 600,
        borderRadius: 9999,
        border: "1px solid transparent",
        letterSpacing: "0.01em",
        ...badgeVariantStyles[v],
        ...badgeSizes[sz],
      }}
    >
      {children}
    </span>
  );
}

const statusDot: Record<string, string> = {
  live: "#22C55E",
  paused: "#FBBF24",
  offline: "#9BACA6",
  error: "#F87171",
  pro: "#10C9A0",
};
const statusLabel: Record<string, string> = {
  live: "var(--green-400)",
  paused: "var(--amber-400)",
  offline: "var(--text-tertiary)",
  error: "var(--red-400)",
  pro: "var(--text-brand)",
};

function StatusEl({ s, label }: { s: string; label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        fontWeight: 500,
        color: statusLabel[s],
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: statusDot[s],
          flexShrink: 0,
          animation:
            s === "live" || s === "pro"
              ? "pulse-live 1.8s ease infinite"
              : "none",
        }}
      />
      {label}
    </span>
  );
}

function CardVariantDemo({
  variant,
  label,
  sub,
}: {
  variant: string;
  label: string;
  sub: string;
}) {
  const vs: Record<string, React.CSSProperties> = {
    flat: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none",
    },
    raised: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-md)",
    },
    glass: {
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
      border: "1px solid var(--border-subtle)",
    },
    outlined: {
      background: "transparent",
      border: "1px solid var(--border-default)",
    },
  };
  return (
    <div style={{ ...vs[variant], borderRadius: 14, padding: 24 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{sub}</div>
    </div>
  );
}

function InputEl({
  label,
  placeholder,
  hint,
  error,
  type,
}: {
  label: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  type?: string;
}) {
  const [val, setVal] = React.useState("");
  const [focused, setFoc] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </label>
      <input
        type={type || "text"}
        value={val}
        placeholder={placeholder}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFoc(true)}
        onBlur={() => setFoc(false)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "var(--text-primary)",
          background: "var(--bg-surface)",
          border: `1px solid ${error ? "var(--red-500)" : focused ? MINT : "var(--border-default)"}`,
          borderRadius: 10,
          padding: "9px 14px",
          outline: "none",
          width: "100%",
          boxShadow: focused
            ? error
              ? "0 0 0 3px rgba(220,38,38,0.15)"
              : "0 0 0 3px rgba(0,179,138,0.15)"
            : "none",
          transition: "all 0.12s",
        }}
      />
      {hint && !error && (
        <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
          {hint}
        </span>
      )}
      {error && (
        <span style={{ fontSize: 11, color: "var(--red-500)" }}>{error}</span>
      )}
    </div>
  );
}

function SelectEl({
  label,
  options,
  hint,
}: {
  label: string;
  options: string[];
  hint?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <select
          style={{
            width: "100%",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "var(--text-primary)",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
            borderRadius: 10,
            padding: "9px 36px 9px 14px",
            outline: "none",
            appearance: "none",
          }}
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--text-tertiary)",
            pointerEvents: "none",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      {hint && (
        <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
          {hint}
        </span>
      )}
    </div>
  );
}

function ToggleEl({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div
        onClick={() => onChange?.(!checked)}
        style={{
          width: 40,
          height: 22,
          borderRadius: 99,
          background: checked ? MINT : "var(--border-default)",
          position: "relative",
          transition: "background 0.2s",
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 3,
            left: checked ? 21 : 3,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            transition: "left 0.2s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
      </div>
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </span>
    </label>
  );
}

const alertCfg: Record<
  AlertVariant,
  { bg: string; border: string; color: string; icon: string; title: string }
> = {
  info: {
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.25)",
    color: "#2563EB",
    icon: "ℹ",
    title: "Info",
  },
  success: {
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.25)",
    color: "#16A34A",
    icon: "✓",
    title: "Success",
  },
  warning: {
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.25)",
    color: "#D97706",
    icon: "⚠",
    title: "Warning",
  },
  danger: {
    bg: "rgba(248,113,113,0.08)",
    border: "rgba(248,113,113,0.25)",
    color: "#DC2626",
    icon: "✕",
    title: "Error",
  },
  brand: {
    bg: "rgba(0,179,138,0.08)",
    border: "rgba(0,179,138,0.25)",
    color: "var(--text-brand)",
    icon: "◈",
    title: "Mintx",
  },
};

const alertMessages: Record<AlertVariant, string> = {
  info: "Educational information only — not investment advice.",
  success: "Your portfolio has been successfully updated.",
  warning: "Market volatility is elevated. Review your positions.",
  danger: "Authentication failed. Please sign in again.",
  brand: "New Fibonacci zone detected on NIFTY at 24,200.",
};

function AlertEl({ v }: { v: AlertVariant }) {
  const c = alertCfg[v];
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        padding: "12px 16px",
        borderRadius: 10,
        border: `1px solid ${c.border}`,
        background: c.bg,
        color: c.color,
        fontSize: 13,
      }}
    >
      <span style={{ flexShrink: 0, marginTop: 1, fontSize: 15 }}>
        {c.icon}
      </span>
      <div>
        <span style={{ fontWeight: 600 }}>{c.title} — </span>
        {alertMessages[v]}
      </div>
    </div>
  );
}

function ProgressEl({
  value,
  color,
  label,
}: {
  value: number;
  color: string;
  label: string;
}) {
  const colors: Record<string, string> = {
    brand: MINT,
    green: "#22C55E",
    red: "#F87171",
    amber: "#FBBF24",
    blue: "#60A5FA",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>
          {label}
        </span>
      </div>
      <div
        style={{
          height: 6,
          background: "var(--border-subtle)",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            background: colors[color] || MINT,
            borderRadius: 99,
            transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  );
}

function MetricCardEl({
  label,
  value,
  delta,
  dir,
}: {
  label: string;
  value: string;
  delta: string;
  dir: PriceDir;
}) {
  const c =
    dir === "up"
      ? "#22C55E"
      : dir === "down"
        ? "#F87171"
        : "var(--text-tertiary)";
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 14,
        padding: "16px 20px",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--text-tertiary)",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 26,
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.5px",
          fontVariantNumeric: "tabular-nums",
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontSize: 12,
          fontFamily: "var(--font-mono)",
          color: c,
          fontWeight: 500,
        }}
      >
        {dir === "up" ? "▲" : dir === "down" ? "▼" : "–"} {delta}
      </div>
    </div>
  );
}

function StockCardEl({
  ticker,
  name,
  price,
  pct,
  dir,
  spk,
}: {
  ticker: string;
  name: string;
  price: string;
  pct: string;
  dir: PriceDir;
  spk: number[];
}) {
  const [hov, setHov] = React.useState(false);
  const c =
    dir === "up"
      ? "#22C55E"
      : dir === "down"
        ? "#F87171"
        : "var(--text-tertiary)";
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--bg-surface)",
        border: `1px solid ${hov ? MINT : "var(--border-subtle)"}`,
        borderRadius: 14,
        padding: 16,
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: hov ? "0 4px 16px rgba(0,179,138,0.22)" : "none",
        transform: hov ? "translateY(-2px)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.3px",
            }}
          >
            {ticker}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--text-tertiary)",
              marginTop: 2,
            }}
          >
            {name}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: c,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {price}
          </div>
          <div
            style={{
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: c,
              fontWeight: 500,
            }}
          >
            {pct}
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 12, borderRadius: 6, overflow: "hidden" }}>
        <Sparkline data={spk} dir={dir} />
      </div>
      <div
        className="resp-grid-3"
        style={{
          gap: 8,
          paddingTop: 12,
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        {[
          ["Open", "₹3,758"],
          ["High", "₹3,862"],
          ["Vol", "2.1M"],
        ].map(([l, v]) => (
          <div key={l}>
            <div
              style={{
                fontSize: 10,
                color: "var(--text-tertiary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {l}
            </div>
            <div
              style={{
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightCardEl({
  tag,
  title,
  body,
  badges,
}: {
  tag: string;
  title: string;
  body: string;
  badges: { label: string; v: BadgeVariant }[];
}) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--bg-surface)",
        borderLeft: "3px solid var(--mint-400)",
        border: `1px solid ${hov ? MINT : "var(--border-subtle)"}`,
        borderLeftWidth: 3,
        borderLeftColor: MINT,
        borderRadius: "0 14px 14px 0",
        padding: 20,
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: hov ? "0 4px 16px rgba(0,179,138,0.18)" : "none",
        transform: hov ? "translateY(-2px)" : "none",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--text-brand)",
          marginBottom: 8,
        }}
      >
        {tag}
      </div>
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "var(--text-primary)",
          lineHeight: 1.4,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "var(--text-secondary)",
          lineHeight: 1.65,
        }}
      >
        {body}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
        {badges.map((b) => (
          <BadgeEl key={b.label} v={b.v} sz="sm">
            {b.label}
          </BadgeEl>
        ))}
      </div>
    </div>
  );
}

function DataTableEl<TData,>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  highlightKey,
}: {
  columns: ColumnDef<TData>[];
  data: TData[];
  searchKey?: keyof TData;
  searchPlaceholder?: string;
  highlightKey?: keyof TData;
}) {
  const [searchValue, setSearchValue] = React.useState("");
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({ key: "", direction: null });

  const filteredData = React.useMemo(() => {
    if (!searchKey || !searchValue) return data;
    return data.filter((item) => {
      const value = item[searchKey];
      return String(value).toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [data, searchKey, searchValue]);

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof TData];
      const bValue = b[sortConfig.key as keyof TData];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" | null = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    else if (sortConfig.key === key && sortConfig.direction === "desc") direction = null;
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {searchKey && (
        <div style={{ position: "relative", maxWidth: 320 }}>
          <Search
            size={16}
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-tertiary)",
              pointerEvents: "none",
            }}
          />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchPlaceholder}
            style={{
              width: "100%",
              padding: "9px 14px 9px 40px",
              background: "var(--bg-base)",
              border: "1px solid var(--border-default)",
              borderRadius: 10,
              fontSize: 13,
              color: "var(--text-primary)",
              outline: "none",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = MINT)}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
          />
        </div>
      )}

      <div
        style={{
          border: "1px solid var(--border-subtle)",
          borderRadius: 14,
          background: "var(--bg-surface)",
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "var(--bg-overlay)", borderBottom: "1px solid var(--border-subtle)" }}>
                {columns.map((col) => (
                  <th
                    key={col.id}
                    onClick={() => col.sortable && handleSort(String(col.accessorKey || col.id))}
                    style={{
                      padding: "12px 16px",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-secondary)",
                      cursor: col.sortable ? "pointer" : "default",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {col.header}
                      {col.sortable && (
                        <span style={{ color: "var(--text-tertiary)", opacity: sortConfig.key === (col.accessorKey || col.id) ? 1 : 0.3 }}>
                          {sortConfig.key === (col.accessorKey || col.id) ? (
                            sortConfig.direction === "asc" ? <ChevronUp size={12} /> :
                            sortConfig.direction === "desc" ? <ChevronDown size={12} /> :
                            <ChevronsUpDown size={12} />
                          ) : (
                            <ChevronsUpDown size={12} />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.length > 0 ? (
                sortedData.map((row, i) => {
                  const isHighlighted = highlightKey && row[highlightKey];
                  return (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid var(--border-subtle)",
                        background: isHighlighted ? "var(--bg-brand-soft)" : "transparent",
                        transition: "background 0.1s",
                      }}
                    >
                      {columns.map((col) => (
                        <td key={col.id} style={{ padding: "14px 16px", fontSize: 13, color: "var(--text-primary)" }}>
                          {col.cell ? col.cell(row) : (col.accessorKey ? String(row[col.accessorKey]) : null)}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    style={{ padding: 48, textAlign: "center", color: "var(--text-tertiary)", fontSize: 13 }}
                  >
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
        <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
          Showing <b style={{ color: "var(--text-secondary)" }}>{sortedData.length}</b> of <b>{data.length}</b> records
        </div>
        <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
          <button
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              border: "1px solid var(--border-default)",
              background: "var(--bg-surface)",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            Previous
          </button>
          <button
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              border: "1px solid var(--border-default)",
              background: "var(--bg-surface)",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── General Instructions Component ────────────────────────────────────────

function GeneralInstructions() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <Card>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>1. Installation</h3>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>
          Install the package from your private registry or link it locally in your monorepo.
        </p>
        <pre style={{ background: "var(--bg-elevated)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-brand)", border: "1px solid var(--border-subtle)", overflowX: "auto" }}>
          npm install @mintx/ui
        </pre>
      </Card>

      <Card>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>2. Tailwind Configuration</h3>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>
          Ensure Tailwind scans the Mintx package for class names to include necessary styles.
        </p>
        <pre style={{ background: "var(--bg-elevated)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-brand)", border: "1px solid var(--border-subtle)", overflowX: "auto" }}>
{`// tailwind.config.ts
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@mintx/ui/src/**/*.{ts,tsx}", // ✅ Add this
  ],
  // ...
};`}
        </pre>
      </Card>

      <Card>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>3. Setup Styles & Theme</h3>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>
          Import the token CSS and wrap your app with the ThemeProvider in your root layout.
        </p>
        <pre style={{ background: "var(--bg-elevated)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-brand)", border: "1px solid var(--border-subtle)", marginBottom: 12, overflowX: "auto" }}>
{`import "@mintx/ui/src/tokens/tokens.css";
import { ThemeProvider } from "@mintx/ui";`}
        </pre>
        <pre style={{ background: "var(--bg-elevated)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-brand)", border: "1px solid var(--border-subtle)", overflowX: "auto" }}>
{`<ThemeProvider defaultTheme="dark">
  {children}
</ThemeProvider>`}
        </pre>
      </Card>

      <Card>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>4. Usage Example</h3>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }}>
          Import components and use them directly with type-safe props.
        </p>
        <pre style={{ background: "var(--bg-elevated)", padding: 12, borderRadius: 8, fontSize: 13, color: "var(--text-brand)", border: "1px solid var(--border-subtle)", overflowX: "auto" }}>
{`import { Button, Alert, StockCard } from "@mintx/ui";

export default function Page() {
  return (
    <div className="p-8">
      <Alert variant="brand" title="Signal">
        New Fibonacci zone detected.
      </Alert>
      <Button variant="primary">Trade Now</Button>
    </div>
  );
}`}
        </pre>
      </Card>
    </div>
  );
}

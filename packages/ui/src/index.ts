export * from "./types";
export * from "./tokens/cn";
export * from "./tokens/tokens";
export * from "./hooks";

// ── Canonical UI Components ─────────────────────────────────
export * from "./components/ui";

// ── Specialized Domains ─────────────────────────────────────
// Note: Omitted TradingViewChart and LightweightChart as they are canonical in charts/
export {
  InsightCard,
  MetricCard,
  PriceChange,
  Sparkline,
  StockCard,
  CustomTickerTape,
  MarketStatus,
} from "./components/financial";
export * from "./components/shell";
export * from "./components/mobile";
export * from "./components/marketing";

// ── Colliding Market Components ─────────────────────────────
// (Exported with Market prefix to avoid ambiguity with ui/ & financial/)
export { 
  DataTable as MarketDataTable,
  Pagination as MarketPagination,
  Table as MarketTable,
  Status as MarketStatusIndicator,
  CustomTickerTape as MarketTickerTape,
  MarketStatus as MarketDataStatus,
  MetricCard as MarketMetricCard,
  PriceChange as MarketPriceChange,
  Sparkline as MarketSparkline,
  StockCard as MarketStockCard,
} from "./components/market";

// ── Colliding Onboarding Components ─────────────────────────
// (Exported with Onboarding prefix to avoid ambiguity with ui/)
export {
  Dialog as OnboardingDialog,
  Drawer as OnboardingDrawer,
  Menu as OnboardingMenu,
  Fab as OnboardingFab,
  Breadcrumbs as OnboardingBreadcrumbs,
  SupportLiveBar as OnboardingSupportLiveBar,
} from "./components/onboarding";

// ── Feedback & Engagement ───────────────────────────────────
// Conflict: Nudge, NudgesPanel are already in ui/
export {
  Nudge as EngagementNudge,
  NudgesPanel as EngagementNudgesPanel,
} from "./components/engagement";

// ── Charts & Visualization ─────────────────────────────────
export * from "./components/charts";

// ── Asset Library & Metadata ────────────────────────────────
export * from "./components/AssetLibrary";
export * from "./components/AssetData";

// ── Utilities & Layout ──────────────────────────────────────
// Resolve NotiStackProvider overlap with ui/
export {
  NotiStackProvider as WrapperNotiStackProvider,
} from "./components/wrappers";
export * from "./components/layout";

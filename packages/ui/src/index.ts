export * from "./types";
export * from "./tokens/cn";
export * from "./tokens/tokens";
export * from "./tokens/common-props";
export * from "./hooks";

// ── Icons ───────────────────────────────────────────────────
// Re-export all lucide-react icons for easier consumption
export * from "lucide-react";

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

// ── Shared Components ───────────────────────────────────────
// (Exported with Shared prefix to avoid ambiguity with ui/)
export {
  Accordion as SharedAccordion,
  Alert as SharedAlert,
  Backdrop as SharedBackdrop,
  Badge as SharedBadge,
  Box as SharedBox,
  FadeIn as SharedFadeIn,
  SlideIn as SharedSlideIn,
  ScaleIn as SharedScaleIn,
  Autocomplete as SharedAutocomplete,
  Avatar as SharedAvatar,
  Button as SharedButton,
  Card as SharedCard,
  Carousel as SharedCarousel,
  CheckBox as SharedCheckBox,
  Chip as SharedChip,
  DatePicker as SharedDatePicker,
  DigitInput as SharedDigitInput,
  Divider as SharedDivider,
  FileUploader as SharedFileUploader,
  IconButton as SharedIconButton,
  Image as SharedImage,
  ImageList as SharedImageList,
  Input as SharedInput,
  Link as SharedLink,
  List as SharedList,
  Loader as SharedLoader,
  Popover as SharedPopover,
  Progress as SharedProgress,
  ProgressIndicator as SharedProgressIndicator,
  ProgressTracker as SharedProgressTracker,
  RadioGroup as SharedRadioGroup,
  RadioGroupItem as SharedRadioGroupItem,
  Rating as SharedRating,
  Select as SharedSelect,
  Separator as SharedSeparator,
  Skeleton as SharedSkeleton,
  Slider as SharedSlider,
  Stack as SharedStack,
  Switch as SharedSwitch,
  Tabs as SharedTabs,
  Tag as SharedTag,
  TagGroup as SharedTagGroup,
  TextArea as SharedTextArea,
  TextField as SharedTextField,
  TextFieldPassword as SharedTextFieldPassword,
  Toast as SharedToast,
  Toggle as SharedToggle,
  Tooltip as SharedTooltip,
} from "./components/shared";

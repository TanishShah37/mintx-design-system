# Mintx Design System

Wealth intelligence. Built for every Indian investor.

This design system provides a collection of high-performance UI components built with **Tailwind CSS**, **Class Variance Authority (CVA)**, and **Radix UI**. It enforces a **Token-First** styling approach to ensure perfect brand consistency and dark mode support.

## 🚀 Design Intelligence (UI/UX Pro Max)
This project is integrated with the **UI/UX Pro Max** skill (v1.0), enforcing professional-grade design standards:
- **Accessibility**: Strict adherence to WCAG 2.1 contrast and touch target rules (min 44x44px).
- **Motion**: Standardized 150-300ms durations with natural spring physics.
- **Rhythm**: Explicit 4/8px spacing grid across all components.
- **Feedback**: Immediate visual interaction feedback (Scale & State layers).

## 💎 Design Tokens

All styles MUST use these tokens. Avoid arbitrary hex codes or hardcoded pixel values.

### Colors
- **Mint Scale**: `mintColors[50-900]` (Primary brand)
- **Neutral Scale**: `neutralColors[0-950]` (Green-tinted grays)
- **Semantic**: `green`, `red`, `amber`, `blue`

### Elevation (Shadows)
| Token | Description | CSS Variable |
|-------|-------------|--------------|
| `none` | No shadow | `var(--elevation-none)` |
| `sm` | Subtle elevation | `var(--elevation-sm)` |
| `md` | Standard elevation | `var(--elevation-md)` |
| `lg` | Higher elevation | `var(--elevation-lg)` |
| `xl` | Modal/Overlay elevation | `var(--elevation-xl)` |
| `2xl` | Maximum elevation | `var(--elevation-2xl)` |
| `inner` | Inset shadow | `var(--elevation-inner)` |

### Border & Z-Index
- **Border Width**: `none` (0px), `thin` (1px), `medium` (2px), `thick` (4px).
- **Z-Index**: `hide (-1)` ... `dropdown (1000)` ... `modal (1400)` ... `tooltip (1800)`.

## 🛠 Common Props System

Most Mintx components extend `BaseProps`, allowing you to apply shared design tokens directly as props:

```tsx
<Card 
  elevation="md" 
  borderWidth="thin" 
  zIndex="base" 
  opacity={90}
>
  Standard Card
</Card>
```

## 🔄 Migration Guide

Replace native HTML elements with MintX primitives to ensure theme compliance.

| Native Element | MintX Primitive | Key Benefits |
|----------------|-----------------|--------------|
| `<input>` | `TextField` | Integrated labels, icons, and error states. |
| `<select>` | `Select` | Searchable, multi-select, and custom styling. |
| `<table>` | `DataTable` | Sticky headers, sorting, and virtualization. |
| `<textarea>` | `TextArea` | Auto-resizing and consistent borders. |
| `<div>` (box) | `Box` / `Stack` | Easy spacing and layout alignment. |

### Example Migration

**Before (Native):**
```tsx
<input 
  type="text" 
  className="rounded border p-2" 
  placeholder="Search..." 
/>
```

**After (MintX):**
```tsx
import { TextField } from "@mintx/ui";

<TextField 
  variant="filled" 
  size="sm" 
  leftIcon={<SearchIcon />} 
  placeholder="Search..." 
/>
```

## 🔌 Integration & Consumption

If you are using `@mintx/ui` in a separate application, follow these steps to ensure the design remains consistent with the system.

### 1. Global CSS Import
The design system relies on CSS variables (tokens) for its identity. Import the master tokens in your app's entry point (e.g., `_app.tsx` or `layout.tsx`):

```tsx
// This contains the :root / data-theme="dark" variable definitions
import "@mintx/ui/src/tokens/tokens.css";
```

### 2. Tailwind Configuration
To use MintX utility classes (like `text-mint-400` or `bg-surface`), you must extend your `tailwind.config.js` with the MintX theme.

**Important:** Your `content` array must scan the `@mintx/ui` source:
```javascript
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  // Add this line so Tailwind generates classes used inside the UI library
  "./node_modules/@mintx/ui/**/*.{js,ts,jsx,tsx}", 
],
```

### 3. Setup ThemeProvider
Wrap your root layout in the `ThemeProvider`. This manages the `data-theme` attribute which activates the correct dark/light mode tokens.

```tsx
import { ThemeProvider } from "@mintx/ui";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="min-h-screen bg-base text-primary">
        {children}
      </main>
    </ThemeProvider>
  );
}
```

### 4. Load Required Fonts
MintX is optimized for **Syne** (Display) and **DM Sans** (Body). You can import them in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
```

---

## 🎨 MintX Icon Library

MintX re-exports the entire **Lucide React** set. You can import any icon directly from `@mintx/ui` for a seamless integration.

```tsx
import { Search, Bell, TrendingUp, ArrowRight } from "@mintx/ui";

function MyComponent() {
  return (
    <Button leftIcon={<Search size={18} />}>
      Search Markets
    </Button>
  );
}
```

> [!TIP]
> Use the **AssetLibrary** component in Storybook to browse all 500+ available icons and their design categories.

### Icon Props
All icons support the standard Lucide interface:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **size** | `number \| string` | `24` | Icon height and width in pixels. |
| **color** | `string` | `currentColor` | Stroke color. Supports CSS colors or variables. |
| **strokeWidth** | `number \| string` | `2` | Thickness of the icon lines. |
| **absoluteStrokeWidth** | `boolean` | `false` | If true, scaling transformation won't affect stroke. |
| **className** | `string` | - | Additional Tailwind classes for fine-tuning. |
| **...props** | `SVGAttributes` | - | Supports all standard SVG attributes & listeners. |

### Typing
When passing icons as props in your own components, use the `LucideProps` type:

```tsx
import { LucideProps } from "@mintx/ui";

interface MyCardProps {
  icon: React.ComponentType<LucideProps>;
}
```

---

## ✨ Animation Systema

MintX provides pre-configured motion wrappers built on Framer Motion to ensure consistent, professional transitions across your apps.

### Motion Wrappers
| Component | Primary Props | Type / Available Values |
|-----------|---------------|-------------------------|
| **FadeIn** | `delay`, `duration` | Generic `HTMLMotionProps<"div">` |
| **SlideIn**| **`direction`** | **`'up'` \| `'down'` \| `'left'` \| `'right'`** |
| **ScaleIn**| `initialScale` | `HTMLMotionProps` (Defaults: 0.95 -> 1.0) |

> [!IMPORTANT]
> All wrappers support **`HTMLMotionProps`**. This means you can pass any Framer Motion attributes like `stiffness`, `damping`, `mass`, or `onAnimationComplete` directly to the component.

**Example Usage:**
```tsx
import { FadeIn, SlideIn } from "@mintx/ui";

function AnimatedHero() {
  return (
    <SlideIn direction="up">
      <h1>Welcome to MintX</h1>
      <FadeIn delay={0.2}>
        <p>Premium wealth intelligence.</p>
      </FadeIn>
    </SlideIn>
  );
}
```

### Motion Tokens
You can use these CSS variables for custom animations:
- **Easings**: `var(--ease-out)`, `var(--ease-spring)`, `var(--ease-smooth)`
- **Durations**: `var(--dur-fast)` (150ms), `var(--dur-base)` (250ms), `var(--dur-slow)` (300ms)

---

## 🛠 Development & Docs

### Local Documentation
The Design System documentation is available at [http://localhost:3000](http://localhost:3000).

```bash
# Start the docs app
npm run dev

# Build the docs app
npm run build:docs
```

### Storybook
View components in isolation with Storybook:

```bash
npm run storybook
```

## 🎨 Exported Components

### Core UI Components (`@mintx/ui`)

| Component | Props | Available Literals (Variants / Scales) |
|-----------|---------------|-----------------------------------------|
| **Button** | `variant`, `size`, `loading`, `iconOnly`, `leftIcon`, `rightIcon`, `as` | **Variant**: `primary, secondary, ghost, danger, outline-brand, dark, success, warning, info, outline, subtle, link` <br> **Size**: `2xs, xs, sm, md, lg, xl, icon` |
| **Badge**  | `variant`, `size`, `pulse` | **Variant**: `solid, subtle, outline, ghost` <br> **Color**: `neutral, primary, success, warning, danger, info, blue, purple` <br> **Size**: `sm, md, lg` |
| **Card**   | `variant`, `padding`, `hover`, `interactive`, `elevation`, `as` | **Variant**: `flat, raised, glass, outlined` <br> **Padding**: `none, xs, sm, md, lg, xl` |
| **Typography** | `variant`, `size`, `color`, `align`, `as` | **Variant**: `h1-h6, body, body2, label, mono, display, sharedcard, tablehead, tablecell, ghost, button` <br> **Color**: `default, primary, secondary, tertiary, brand, white, danger, success, warning, info` <br> **Align**: `left, center, right` |
| **Input**  | `variant`, `size`, `error`, `hint` | **Variant**: `default, filled, flushed, unstyled` <br> **Size**: `sm, md, lg` |
| **Tag**    | `variant`, `size`, `onRemove` | **Variant**: `default, primary, secondary, outline` <br> **Size**: `sm, md` |
| **Alert**  | `variant`, `status`, `dismissible` | **Variant**: `subtle, solid, outline, ghost` <br> **Status**: `info, success, warning, error` |
| **Switch** | `label`, `checked`, `disabled` | - |
| **CheckBox**| `label`, `checked`, `error` | - |
| **Select** | `variant`, `size`, `options` | (Wraps Radix Select Primitive) |
| **Chip** | `variant`, `size`, `color`, `clickable`, `onDelete`, `avatar`, `icon` |
| **Avatar** | `src`, `alt`, `initials`, `size`, `status` | **Size**: `xs, sm, md, lg, xl, 2xl` <br> **Status**: `online, offline, away, busy, live, pro` |
| **IconButton** | `size`, `variant`, `color`, `loading`, `badge`, `tooltip` |
| **Fab (Floating Action Button)** | `size`, `variant`, `color`, `icon`, `extended`, `position` |
| **Rating** | `value`, `max`, `size`, `precision`, `readOnly`, `disabled`, `emptyIcon`, `filledIcon` |
| **Progress** | `value`, `max`, `size` (xs, sm, md, lg), `variant` (linear, circular), `color`, `indeterminate` |
| **ProgressIndicator** | `steps`, `currentStep`, `orientation`, `clickable`, `onStepClick` |
| **ProgressTracker** | `items`, `currentIndex`, `orientation`, `showLabels` |
| **Skeleton** | `variant` (text, circular, rectangular, rounded), `width`, `height`, `animation` |
| **Loader** | `size`, `color`, `variant` (spinner, dots, pulse, ring) |
| **Dialog** | `open`, `onClose`, `title`, `description`, `size` (xs, sm, md, lg, xl, full), `closeOnOverlay`, `hideCloseButton` |
| **ConfirmDialog** | `open`, `onConfirm`, `onCancel`, `title`, `description`, `confirmText`, `cancelText`, `variant` |
| **Drawer** | `open`, `onClose`, `anchor` (left, right, top, bottom), `size`, `closeOnOverlay`, `hideBackdrop` |
| **Popover** | `trigger`, `content`, `placement`, `open`, `onOpenChange`, `closeOnClickOutside`, `arrow` |
| **Tooltip** | `content`, `placement`, `delay`, `arrow`, `disabled` |
| **Menu** | `items`, `trigger`, `placement`, `closeOnSelect` |
| **Backdrop** | `open`, `onClick`, `blur`, `color`, `zIndex` |
| **AppBar** | `position`, `color`, `elevation`, `sticky`, `toolbarContent` |
| **BottomNavigation** | `value`, `onChange`, `items`, `showLabels`, `elevation` |
| **Breadcrumbs** | `items`, `separator`, `maxItems`, `expandText` |
| **Pagination** | `page`, `count`, `onChange`, `siblingCount`, `boundaryCount`, `showFirstButton`, `showLastButton`, `size`, `variant` |
| **DataTable** | `data`, `columns`, `sortable`, `selectable`, `paginated`, `rowsPerPage`, `loading`, `emptyState`, `onRowClick` |
| **Table** | `children`, `size`, `striped`, `bordered`, `hover`, `dense` |
| **List** | `items`, `variant` (default, ordered, unordered), `dense`, `divided`, `selectable` |
| **Tabs** | `value`, `onChange`, `orientation`, `variant` (default, enclosed, outlined), `size`, `fullWidth` |
| **Stepper** | `steps`, `activeStep`, `orientation`, `alternativeLabel`, `connector` |
| **Accordion** | `items`, `multiple`, `defaultExpanded`, `onChange`, `variant` |
| **Carousel** | `slides`, `autoPlay`, `interval`, `indicators`, `controls`, `loop`, `onChange` |
| **FileUploader** | `accept`, `multiple`, `maxSize`, `maxFiles`, `onUpload`, `variant`, `dragDrop` |
| **DatePicker** | `value`, `onChange`, `min`, `max`, `format`, `views` (year, month, day), `disabled`, `readOnly` |
| **DateRangePicker** | `start`, `end`, `onChange`, `presetRanges`, `min`, `max`, `format` |
| **Image** | `src`, `alt`, `width`, `height`, `objectFit`, `placeholder`, `lazy`, `onLoad`, `onError` |
| **ImageList** | `images`, `cols`, `gap`, `variant` (default, quilted, woven, masonry) |
| **Separator / Divider** | `orientation`, `size`, `variant` (solid, dashed, dotted), `color` |
| **Link** | `href`, `external`, `underline`, `color`, `disabled`, `onClick` |
| **Box** | `display`, `direction`, `wrap`, `justify`, `align`, `gap`, `padding`, `margin` |
| **Stack** | `direction`, `spacing`, `divider`, `align`, `justify` |
| **Alert** | `severity` (success, error, warning, info), `variant` (filled, outlined, standard), `title`, `onClose`, `action` |
| **Toast** | `message`, `severity`, `duration`, `position`, `onClose`, `action` |
| **Nudge** | `type` (info, success, warning, error), `title`, `message`, `actions`, `dismissible`, `duration`, `onDismiss` |
| **NudgesPanel** | `nudges`, `maxVisible`, `position`, `onDismiss` |
| **SearchInput** | `value`, `onChange`, `placeholder`, `loading`, `results`, `onResultClick`, `debounce` |
| **EmptyState** | `icon`, `title`, `description`, `action`, `compact` |
| **ErrorBoundary** | `fallback`, `onError`, `resetKeys` |
| **LoadingOverlay** | `loading`, `text`, `blur`, `opacity`, `zIndex` |
| **Status** | `status` (online, offline, away, busy), `size`, `position`, `pulse` |
| **Collapsible** | `open`, `onOpenChange`, `children`, `transitionDuration` |
| **NotiStackProvider** | `maxSnack`, `anchorOrigin`, `autoHideDuration`, `preventDuplicate` |
| **Animations** | `FadeIn`, `SlideIn`, `ScaleIn` - motion wrapper components |

### Financial Components

| Component | Props |
|-----------|-------|
| Component | Primary Prop | Type / Data Shape |
|-----------|--------------|-------------------|
| **MetricCard** | `data` | `MetricData` |
| **StockCard** | `data` | `StockData` |
| **InsightCard** | `data` | `InsightData` |
| **PriceChange** | `value`, `percent` | `PriceDirection` helper |
| **Sparkline** | `data` | `number[]` |
| **CustomTickerTape** | `symbols` | `string[]` |
| **MarketStatus** | `status` | `'open' \| 'closed' \| 'pre' \| 'post'` |
| **TradingViewChart** | `symbol`, `interval`, `theme`, `autosize`, `height`, `width`, `studies` |
| **LightweightChart** | `data`, `type` (area, bar, candlestick, line, histogram), `options`, `onCrosshairMove` |

### Chart Components

| Component | Props |
|-----------|-------|
| **LightweightChart** | `data`, `type`, `options`, `autoFit`, `watermark`, `timeScale`, `priceScale`, `handleScroll`, `handleScale` |
| **TradingViewChart** | `symbol`, `interval`, `theme`, `libraryPath`, `loadingComponent`, `onChartReady` |

### Shell Components

| Component | Props |
|-----------|-------|
| **AppHeader** | `title`, `logo`, `actions`, `sticky`, `elevation`, `onMenuClick` |
| **AppFooter** | `links`, `copyright`, `social`, `variant` |
| **MintxLogo** | `size`, `variant` (light, dark, color), `animated` |
| **Sidebar** | `items`, `collapsed`, `onToggle`, `header`, `footer`, `variant` |
| **BottomNav** | `items`, `value`, `onChange`, `showLabels`, `elevation` |
| **ThemeProvider** | `defaultTheme`, `themes`, `storageKey`, `children` |
| **ThemeToggle** | `size`, `variant`, `className` |

### Marketing Components

| Component | Props |
|-----------|-------|
| **Hero** | `title`, `subtitle`, `cta`, `background`, `animated` |
| **Ticker** | `items`, `speed`, `direction`, `pauseOnHover` |
| **HowItWorks** | `steps`, `title`, `animated` |
| **Differentiators** | `items`, `layout`, `animated` |
| **DiffCard** | `icon`, `title`, `description`, `highlight` |
| **WaitlistForm** | `onSubmit`, `loading`, `successMessage`, `buttonText` |
| **FibSpiral** | `size`, `animated`, `color` |
| **StatsSection** | `stats`, `title`, `animated`, `layout` |
| **CommunitySection** | `platforms`, `memberCount`, `testimonials`, `cta` |

### Engagement Components

| Component | Props |
|-----------|-------|
| **Nudge / EngagementNudge** | `id`, `type`, `priority`, `content`, `actions`, `dismissible`, `duration`, `onDismiss`, `onAction` |
| **NudgesPanel / EngagementNudgesPanel** | `nudges`, `position`, `strategy` (stack, queue, replace), `maxVisible`, `onDismissAll` |

### Market Components (Prefixed)

| Component | Props |
|-----------|-------|
| **MarketDataTable** | `data`, `columns`, `sortable`, `selectable`, `paginated`, `loading` |
| **MarketPagination** | `page`, `count`, `onChange`, `siblingCount`, `size` |
| **MarketTable** | `children`, `size`, `striped`, `bordered`, `hover` |
| **MarketStatusIndicator** | `status`, `size`, `pulse`, `label` |
| **MarketTickerTape** | `symbols`, `speed`, `direction`, `pauseOnHover` |
| **MarketDataStatus** | `status`, `market`, `nextEvent`, `countdown` |
| Component | Equivalent To | Primary Data Type |
|-----------|---------------|-------------------|
| **MarketMetricCard** | `MetricCard` | `MetricData` |
| **MarketStockCard** | `StockCard` | `StockData` |
| **MarketSparkline** | `Sparkline` | `number[]` |
| **MarketPriceChange**| `PriceChange` | `number` |
| **MarketDataTable** | `DataTable` | `ColumnDef<T>[]` |

### Shared Components (Prefixed)

| Component | Description |
|-----------|-------------|
| **SharedAccordion** | Reusable accordion implementation |
| **SharedAlert** | Reusable alert implementation |
| **SharedAnimations** | `SharedFadeIn`, `SharedSlideIn`, `SharedScaleIn` |
| **SharedAutocomplete** | Alternative autocomplete implementation |
| **SharedAvatar** | Alternative avatar implementation |
| **SharedBackdrop** | Alternative backdrop implementation |
| **SharedBadge** | Alternative badge implementation |
| **SharedBox** | Alternative box implementation |
| **SharedButton** | Alternative button implementation |
| **SharedCard** | Alternative card implementation |
| **SharedCarousel** | Alternative carousel implementation |
| **SharedCheckBox** | Alternative checkbox implementation |
| **SharedChip** | Alternative chip implementation |
| **SharedDatePicker** | Alternative date picker implementation |
| **SharedDigitInput** | Alternative digit input implementation |
| **SharedDivider** | Alternative divider implementation |
| **SharedFileUploader** | Alternative file uploader implementation |
| **SharedIconButton** | Alternative icon button implementation |
| **SharedImage** | Alternative image implementation |
| **SharedImageList** | Alternative image list implementation |
| **SharedInput** | Alternative input implementation |
| **SharedLink** | Alternative link implementation |
| **SharedList** | Alternative list implementation |
| **SharedLoader** | Alternative loader implementation |
| **SharedPopover** | Alternative popover implementation |
| **SharedProgress** | Alternative progress implementation |
| **SharedProgressIndicator** | Alternative progress indicator implementation |
| **SharedProgressTracker** | Alternative progress tracker implementation |
| **SharedRadio/SharedRadioGroup** | Alternative radio implementations |
| **SharedRating** | Alternative rating implementation |
| **SharedSelect** | Alternative select implementation |
| **SharedSeparator** | Alternative separator implementation |
| **SharedSkeleton** | Alternative skeleton implementation |
| **SharedSlider** | Alternative slider implementation |
| **SharedStack** | Alternative stack implementation |
| **SharedSwitch** | Alternative switch implementation |
| **SharedTabs** | Alternative tabs implementation |
| **SharedTag/SharedTagGroup** | Alternative tag implementations |
| **SharedTextArea** | Alternative textarea implementation |
| **SharedTextField/SharedTextFieldPassword** | Alternative text field implementations |
| **SharedToast** | Alternative toast implementation |
| **SharedToggle** | Alternative toggle implementation |
| **SharedTooltip** | Alternative tooltip implementation |

### Onboarding Components (Prefixed)

| Component | Description |
|-----------|-------------|
| **OnboardingDialog** | Dialog for onboarding flows |
| **OnboardingDrawer** | Drawer for onboarding flows |
| **OnboardingMenu** | Menu for onboarding flows |
| **OnboardingFab** | FAB for onboarding flows |
| **OnboardingBreadcrumbs** | Breadcrumbs for onboarding flows |
| **OnboardingSupportLiveBar** | Support bar for onboarding |

### Mobile Components

| Component | Key Props | Type / Data Shape |
|-----------|-----------|-------------------|
| **SupportLiveBar** | `agents`, `waitTime` | `LiveSupportProps` |
| **SimpleBottomNav** | `items`, `active` | `NavItems[]` |

### Wrapper Components

| Component | Key Props | Type / Source |
|-----------|-----------|---------------|
| **ThemeProvider** | `defaultTheme` | `'light' \| 'dark' \| 'system'` |
| **NotiStackProvider**| `maxSnack`, `dense` | `SnackbarProviderProps` (Notistack) |

---

## 🔧 Custom Hooks

| Hook | Description | Signature (Params → Returns) |
|------|-------------|----------------------------|
| **usePriceDirection** | Returns direction based on numeric value | `(value: number) → PriceDirection` |
| **useCountUp** | Animated number counter | `(options: CountUpOptions) → number` |
| **useMediaQuery** | CSS media query matcher | `(query: string) → boolean` |
| **useIsMobile** | Mobile viewport detector | `() → boolean` |
| **useDisclosure** | Boolean state manager | `(initial?: boolean) → { isOpen, open, close, toggle }` |
| **useLocalStorage** | Persist state to localStorage | `<T>(key: string, default: T) → [T, (val: T) \| (fn) => void]` |
| **useCarouselButtons**| Embla navigation controls | `(api: EmblaApi) → { prevDisabled, nextDisabled, ... }` |
| **useCarouselDots** | Embla dot indicators | `(api: EmblaApi) → { selectedIndex, scrollSnaps, ... }` |

---

## 💻 Technical Reference (TypeScript)

MintX is strictly typed to ensure a robust developer experience. Below are the core types and interfaces exported from the library.

### 0. Polymorphic Components (`as` prop)
Most core components (`Button`, `Typography`, `Card`, etc.) support the `as` prop. This allows you to change the underlying HTML element while keeping the design system styles and props.

```tsx
// Renders a p tag with h1 styles
<Typography as="p" variant="h1">
  SEO-friendly heading
</Typography>

// Renders a Next.js Link as a MintX Button
import Link from 'next/link';
<Button as={Link} href="/dashboard" variant="primary">
  Go to Dashboard
</Button>
```

### 1. Global Design Unions
Import these to type-check your custom component wrappers.

| Type | Export Name | Available Literals |
|------|-------------|--------------------|
| **Button** | `ButtonVariant` | `primary, secondary, ghost, danger, outline-brand, dark, success, warning, info, outline, subtle, link` |
| **Badge** | `BadgeVariant` | `solid, subtle, outline, ghost` |
| **BadgeColor** | `BadgeColor`| `neutral, primary, success, warning, danger, info, blue, purple` |
| **Typography** | `TypographyVariant` | `h1, h2, h3, h4, h5, h6, body, body2, label, mono, display, sharedcard, tablehead, tablecell, ghost, button` |
| **TypographyColor** | `TypographyColor` | `default, primary, secondary, tertiary, brand, white, danger, success, warning, info` |
| **AvatarSize** | `AvatarSize` | `xs, sm, md, lg, xl, 2xl` |
| **AvatarStatus** | `AvatarStatus` | `online, offline, away, busy, live, pro` |
| **Alert** | `AlertStatus` | `info, success, warning, error` |
| **ZIndex** | `ZIndex` | `hide, base, docked, dropdown, sticky, banner, overlay, modal, popover, skipLink, toast, tooltip` |
| **Elevation**| `Elevation` | `none, sm, md, lg, xl, 2xl, inner` |

### 2. Specialized Interface Schema
These define the data contracts for our financial visualization suite.

**MetricData**
```tsx
interface MetricData {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  direction?: 'up' | 'down' | 'flat';
  prefix?: string;
  suffix?: string;
}
```

**StockData**
```tsx
interface StockData {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: string;
  sparkline?: number[];
}
```

### 3. Animation & Asset Types
| Type | Source | Description |
|------|--------|-------------|
| **LucideProps** | `@mintx/ui` | Full SVG attributes + `size`, `strokeWidth`, `absoluteStrokeWidth`. |
| **FadeInProps** | `@mintx/ui` | `HTMLMotionProps<"div">` (Framer Motion). |
| **SlideInProps**| `@mintx/ui` | Extends motion props with `direction: 'up' \| 'down' \| 'left' \| 'right'`. |

**InsightData**
```tsx
interface InsightData {
  tag: string;
  title: string;
  body: string;
  badges?: Array<{ label: string; variant: BadgeVariant }>;
}
```

---

## 📈 Financial Charting

MintX offers two tiers of charting components depending on your performance and data requirements.

### 1. High-Performance (Lightweight Charts)
Highly optimized Canvas-based charts for real-time price action.

| Component | Key Props |
|-----------|-----------|
| **AreaChart** | `data` (time, value), `color`, `height` |
| **CandlestickChart** | `data` (time, open, high, low, close), `height` |
| **BaselineChart** | `data` (time, value), `baseValue`, `color` |
| **VolumeChart** | `data` (time, value), `color` |

### 2. Market Widgets (TradingView)
Feature-rich iframe-based widgets for deep technical analysis.

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| **AdvancedRealTimeChart** | Full analyst suite | `symbol`, `interval`, `theme` |
| **TechnicalAnalysis** | Indicator summary | `symbol`, `width`, `height` |
| **MarketOverview** | Multi-symbol list | `symbols` (array), `theme` |
| **TickerTape** | Continuous scroller | `symbols`, `speed`, `direction` |

---

## 🛠 Customization (Tailwind & BaseProps)

Most MintX components support **Common Props**, allowing you override styling without writing custom CSS Classes.

| Prop | Type | Description |
|------|------|-------------|
| **elevation** | `sm | md | lg | xl | 2xl` | Adds shadow elevation. |
| **borderWidth** | `none | thin | medium | thick` | Sets border thickness. |
| **zIndex** | `base | overlay | modal | tooltip` | Controls stacking order. |
| **opacity** | `0 | 25 | 50 | 75 | 100` | Sets element transparency. |

**Example:**
```tsx
<Card 
  elevation="lg" 
  borderWidth="thin" 
  className="bg-brand-soft"
>
  Shadow and Border applied via props.
</Card>
```

---

## 💎 CSS Token Reference

Use these variables in your own CSS or Style blocks to stay on-brand.

| Category | Variables |
|----------|-----------|
| **Brand Colors** | `--mint-300`, `--mint-400` (Main), `--mint-500` |
| **Backgrounds** | `--bg-base`, `--bg-surface`, `--bg-elevated` |
| **Text** | `--text-primary`, `--text-secondary`, `--text-brand` |
| **Spacing** | `--sp-1` (4px), `--sp-2` (8px), `--sp-4` (16px), `--sp-6` (24px) |
| **Radius** | `--r-sm` (6px), `--r-md` (10px), `--r-full` (Circle) |

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Variants**: [CVA](https://cva.style/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

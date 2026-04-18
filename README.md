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
      {children}
    </ThemeProvider>
  );
}
```

### 4. Load Required Fonts
MintX looks for **Syne** and **DM Sans**. Ensure these are loaded in your project (via Google Fonts or Next.js Fonts).

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

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Variants**: [CVA](https://cva.style/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)


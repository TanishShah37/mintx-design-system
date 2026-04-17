# Mintx Design System

Wealth intelligence. Built for every Indian investor.

This design system provides a collection of high-performance UI components built with **Tailwind CSS**, **Class Variance Authority (CVA)**, and **Radix UI**. It enforces a **Token-First** styling approach to ensure perfect brand consistency and dark mode support.

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

## 📦 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The Design System documentation is available at [http://localhost:3000](http://localhost:3000).

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Variants**: [CVA](https://cva.style/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

# Mintx Design System

Wealth intelligence. Built for every Indian investor.

This design system provides a collection of high-performance UI components built with **Tailwind CSS**, **Class Variance Authority (CVA)**, and **Radix UI**.

## Project Structure

- `apps/design-system`: The live documentation and demo of all components.
- `packages/ui`: The core component library.
  - `src/components/ui`: Fundamental primitives (Button, Alert, etc.)
  - `src/components/financial`: Investment-specific components (StockCard, Sparkline, etc.)
  - `src/components/layout`: Structural components (Sidebar, Logo, etc.)
  - `src/components/mobile`: Mobile-first navigation and bars.
  - `src/tokens`: Tailwind constants and the `cn` utility.

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Run the development server (Next.js + Turborepo):

```bash
npm run dev
```

The Design System documentation will be available at [http://localhost:3000](http://localhost:3000).

### Build

Compile the entire workspace:

```bash
npm run build
```

## Consuming the Package

To use these components in your own application:

1. Add `@mintx/ui` to your `package.json` dependencies (assuming workspaces or local linking).
2. Configure your `tailwind.config.ts` to include the Mintx theme and scan the package.

### Example Usage

```tsx
import { Button, Alert } from "@mintx/ui";

export default function MyPage() {
  return (
    <div className="p-8">
      <Alert variant="brand" title="Market Update">
        NIFTY 50 is trading at an all-time high.
      </Alert>
      <Button variant="primary" className="mt-4">
        Invest Now
      </Button>
    </div>
  );
}
```

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Variants**: [class-variance-authority](https://cva.style/)
- **Monorepo**: [Turborepo](https://turbo.build/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

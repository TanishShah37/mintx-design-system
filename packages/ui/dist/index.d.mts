import * as React$1 from 'react';
import React__default, { CSSProperties, ReactNode, Component, ErrorInfo } from 'react';
import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export { TooltipProps } from '@radix-ui/react-tooltip';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLMotionProps } from 'framer-motion';
import * as TabsPrimitive from '@radix-ui/react-tabs';

type Elevation = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner";
type BorderWidth = "none" | "thin" | "medium" | "thick";
type ZIndex = "hide" | "base" | "docked" | "dropdown" | "sticky" | "banner" | "overlay" | "modal" | "popover" | "skipLink" | "toast" | "tooltip";
type Opacity = 0 | 25 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
interface BaseProps {
    className?: string;
    style?: CSSProperties;
    elevation?: Elevation;
    borderWidth?: BorderWidth;
    zIndex?: ZIndex;
    opacity?: Opacity;
}
interface ChildrenProps extends BaseProps {
    children?: ReactNode;
}
type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl";

declare function cn(...inputs: ClassValue[]): string;

declare const mintColors: {
    readonly 50: "#E6FBF5";
    readonly 100: "#BFFAE9";
    readonly 200: "#7DEFD2";
    readonly 300: "#3DDCBA";
    readonly 400: "#10C9A0";
    readonly 500: "#00B38A";
    readonly 600: "#008F6E";
    readonly 700: "#006B52";
    readonly 800: "#004736";
    readonly 900: "#00231A";
};
declare const neutralColors: {
    readonly 0: "#FFFFFF";
    readonly 50: "#F5F8F7";
    readonly 100: "#EBF0EE";
    readonly 150: "#D8E0DE";
    readonly 200: "#C2CECA";
    readonly 300: "#9BACA6";
    readonly 400: "#748A83";
    readonly 500: "#55706A";
    readonly 600: "#3A524D";
    readonly 700: "#253733";
    readonly 800: "#141F1D";
    readonly 850: "#0D1614";
    readonly 900: "#080E0D";
    readonly 950: "#040807";
};
declare const semanticColors: {
    readonly green: {
        readonly 300: "#86EFAC";
        readonly 400: "#22C55E";
        readonly 500: "#16A34A";
    };
    readonly red: {
        readonly 300: "#FCA5A5";
        readonly 400: "#F87171";
        readonly 500: "#DC2626";
    };
    readonly orange: {
        readonly 300: "#FDBA74";
        readonly 400: "#FB923C";
        readonly 500: "#F97316";
        readonly 600: "#EA580C";
    };
    readonly amber: {
        readonly 300: "#FCD34D";
        readonly 400: "#FBBF24";
        readonly 500: "#F59E0B";
        readonly 600: "#D97706";
    };
    readonly yellow: {
        readonly 300: "#FDE047";
        readonly 400: "#FACC15";
        readonly 500: "#EAB308";
    };
    readonly lime: {
        readonly 300: "#BEF264";
        readonly 400: "#A3E635";
        readonly 500: "#84CC16";
    };
    readonly cyan: {
        readonly 300: "#67E8F9";
        readonly 400: "#22D3EE";
        readonly 500: "#06B6D4";
    };
    readonly sky: {
        readonly 300: "#7DD3FC";
        readonly 400: "#38BDF8";
        readonly 500: "#0EA5E9";
    };
    readonly indigo: {
        readonly 300: "#A5B4FC";
        readonly 400: "#818CF8";
        readonly 500: "#6366F1";
        readonly 600: "#4F46E5";
    };
    readonly violet: {
        readonly 300: "#C4B5FD";
        readonly 400: "#A78BFA";
        readonly 500: "#8B5CF6";
        readonly 600: "#7C3AED";
    };
    readonly purple: {
        readonly 300: "#D8B4FE";
        readonly 400: "#C084FC";
        readonly 500: "#A855F7";
    };
    readonly pink: {
        readonly 300: "#F9A8D4";
        readonly 400: "#F472B6";
        readonly 500: "#EC4899";
    };
    readonly rose: {
        readonly 300: "#FDA4AF";
        readonly 400: "#FB7185";
        readonly 500: "#E11D48";
    };
    readonly slate: {
        readonly 50: "#F8FAFC";
        readonly 100: "#F1F5F9";
        readonly 200: "#E2E8F0";
        readonly 300: "#CBD5E1";
        readonly 400: "#94A3B8";
        readonly 500: "#64748B";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1E293B";
        readonly 900: "#0F172A";
        readonly 950: "#020617";
    };
    readonly gray: {
        readonly 50: "#F9FAFB";
        readonly 100: "#F3F4F6";
        readonly 200: "#E5E7EB";
        readonly 300: "#D1D5DB";
        readonly 400: "#9CA3AF";
        readonly 500: "#6B7280";
        readonly 600: "#4B5563";
        readonly 700: "#374151";
        readonly 800: "#1F2937";
        readonly 900: "#111827";
        readonly 950: "#030712";
    };
    readonly emerald: {
        readonly 600: "#059669";
        readonly 700: "#047857";
        readonly 800: "#065F46";
    };
    readonly blue: {
        readonly 400: "#60A5FA";
        readonly 500: "#2563EB";
    };
};
declare const hexToRgba: (hex: string, alpha: number) => string;
declare const chartColors: {
    readonly primary: "#10C9A0";
    readonly secondary: "#2563EB";
    readonly tertiary: "#C084FC";
    readonly quaternary: "#F97316";
    readonly bullish: "#16A34A";
    readonly bearish: "#DC2626";
    readonly neutral: "#748A83";
    readonly volumeUp: "#22C55E";
    readonly volumeDown: "#EF4444";
};
declare const spacing: {
    readonly 1: "4px";
    readonly 2: "8px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 8: "32px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 16: "64px";
    readonly 20: "80px";
};
declare const radius: {
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "10px";
    readonly lg: "14px";
    readonly xl: "20px";
    readonly "2xl": "28px";
    readonly full: "9999px";
};
declare const elevation: {
    readonly none: "none";
    readonly sm: "0 1px 2px 0 rgba(0,0,0,0.05)";
    readonly md: "0 4px 6px -1px rgba(0,0,0,0.1)";
    readonly lg: "0 10px 15px -3px rgba(0,0,0,0.1)";
    readonly xl: "0 20px 25px -5px rgba(0,0,0,0.1)";
    readonly "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)";
    readonly inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)";
    readonly "sm-dark": "0 1px 2px 0 rgba(0,0,0,0.3)";
    readonly "md-dark": "0 4px 6px -1px rgba(0,0,0,0.4)";
};
declare const borderWidth: {
    readonly none: "0px";
    readonly thin: "1px";
    readonly medium: "2px";
    readonly thick: "4px";
};
declare const zIndex: {
    readonly hide: -1;
    readonly base: 0;
    readonly docked: 10;
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly banner: 1200;
    readonly overlay: 1300;
    readonly modal: 1400;
    readonly popover: 1500;
    readonly skipLink: 1600;
    readonly toast: 1700;
    readonly tooltip: 1800;
};
declare const opacity: {
    readonly 0: "0";
    readonly 25: "0.25";
    readonly 40: "0.4";
    readonly 50: "0.5";
    readonly 60: "0.6";
    readonly 70: "0.7";
    readonly 80: "0.8";
    readonly 90: "0.9";
    readonly 100: "1";
};
declare const backdrop: {
    readonly blur: {
        readonly none: "0";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
    };
    readonly opacity: {
        readonly sm: "0.4";
        readonly md: "0.6";
        readonly lg: "0.8";
    };
};
declare const typography: {
    readonly fontDisplay: "'Syne', sans-serif";
    readonly fontBody: "'DM Sans', sans-serif";
    readonly fontMono: "'DM Mono', monospace";
    readonly scale: {
        readonly xs: "12px";
        readonly sm: "14px";
        readonly base: "16px";
        readonly lg: "18px";
        readonly xl: "20px";
        readonly "2xl": "24px";
        readonly "3xl": "30px";
        readonly "4xl": "38px";
        readonly "5xl": "48px";
        readonly "6xl": "60px";
    };
};
declare const motion: {
    readonly easeOut: "cubic-bezier(0.16, 1, 0.3, 1)";
    readonly easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)";
    readonly easeSmooth: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly fast: "150ms";
    readonly base: "250ms";
    readonly slow: "300ms";
    readonly page: "500ms";
};
declare const animation: {
    readonly fade: {
        readonly in: "fade-in 200ms ease-out";
        readonly out: "fade-out 150ms ease-in";
    };
    readonly slide: {
        readonly up: "slide-up 300ms ease-out";
        readonly down: "slide-down 300ms ease-out";
        readonly left: "slide-left 300ms ease-out";
        readonly right: "slide-right 300ms ease-out";
    };
    readonly scale: {
        readonly in: "scale-in 200ms ease-out";
        readonly out: "scale-out 150ms ease-in";
    };
    readonly spin: "spin 1s linear infinite";
    readonly pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
    readonly bounce: "bounce 1s infinite";
};
declare const transition: {
    readonly property: {
        readonly none: "none";
        readonly all: "all";
        readonly colors: "background-color, border-color, color, fill, stroke";
        readonly opacity: "opacity";
        readonly shadow: "box-shadow";
        readonly transform: "transform";
    };
    readonly duration: {
        readonly fast: "120ms";
        readonly base: "200ms";
        readonly slow: "300ms";
        readonly slower: "500ms";
    };
};
declare const shadows: {
    readonly sm: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
    readonly md: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)";
    readonly lg: "0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)";
    readonly xl: "0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.07)";
    readonly brand: "0 4px 16px rgba(0, 179, 138, 0.25)";
};
type MintShade = keyof typeof mintColors;
type NeutralShade = keyof typeof neutralColors;
type SpacingKey = keyof typeof spacing;
type RadiusKey = keyof typeof radius;
type TextSizeKey = keyof typeof typography.scale;
declare const tokens: {
    readonly colors: {
        readonly mint: {
            readonly 50: "#E6FBF5";
            readonly 100: "#BFFAE9";
            readonly 200: "#7DEFD2";
            readonly 300: "#3DDCBA";
            readonly 400: "#10C9A0";
            readonly 500: "#00B38A";
            readonly 600: "#008F6E";
            readonly 700: "#006B52";
            readonly 800: "#004736";
            readonly 900: "#00231A";
        };
        readonly neutral: {
            readonly 0: "#FFFFFF";
            readonly 50: "#F5F8F7";
            readonly 100: "#EBF0EE";
            readonly 150: "#D8E0DE";
            readonly 200: "#C2CECA";
            readonly 300: "#9BACA6";
            readonly 400: "#748A83";
            readonly 500: "#55706A";
            readonly 600: "#3A524D";
            readonly 700: "#253733";
            readonly 800: "#141F1D";
            readonly 850: "#0D1614";
            readonly 900: "#080E0D";
            readonly 950: "#040807";
        };
        readonly semantic: {
            readonly green: {
                readonly 300: "#86EFAC";
                readonly 400: "#22C55E";
                readonly 500: "#16A34A";
            };
            readonly red: {
                readonly 300: "#FCA5A5";
                readonly 400: "#F87171";
                readonly 500: "#DC2626";
            };
            readonly orange: {
                readonly 300: "#FDBA74";
                readonly 400: "#FB923C";
                readonly 500: "#F97316";
                readonly 600: "#EA580C";
            };
            readonly amber: {
                readonly 300: "#FCD34D";
                readonly 400: "#FBBF24";
                readonly 500: "#F59E0B";
                readonly 600: "#D97706";
            };
            readonly yellow: {
                readonly 300: "#FDE047";
                readonly 400: "#FACC15";
                readonly 500: "#EAB308";
            };
            readonly lime: {
                readonly 300: "#BEF264";
                readonly 400: "#A3E635";
                readonly 500: "#84CC16";
            };
            readonly cyan: {
                readonly 300: "#67E8F9";
                readonly 400: "#22D3EE";
                readonly 500: "#06B6D4";
            };
            readonly sky: {
                readonly 300: "#7DD3FC";
                readonly 400: "#38BDF8";
                readonly 500: "#0EA5E9";
            };
            readonly indigo: {
                readonly 300: "#A5B4FC";
                readonly 400: "#818CF8";
                readonly 500: "#6366F1";
                readonly 600: "#4F46E5";
            };
            readonly violet: {
                readonly 300: "#C4B5FD";
                readonly 400: "#A78BFA";
                readonly 500: "#8B5CF6";
                readonly 600: "#7C3AED";
            };
            readonly purple: {
                readonly 300: "#D8B4FE";
                readonly 400: "#C084FC";
                readonly 500: "#A855F7";
            };
            readonly pink: {
                readonly 300: "#F9A8D4";
                readonly 400: "#F472B6";
                readonly 500: "#EC4899";
            };
            readonly rose: {
                readonly 300: "#FDA4AF";
                readonly 400: "#FB7185";
                readonly 500: "#E11D48";
            };
            readonly slate: {
                readonly 50: "#F8FAFC";
                readonly 100: "#F1F5F9";
                readonly 200: "#E2E8F0";
                readonly 300: "#CBD5E1";
                readonly 400: "#94A3B8";
                readonly 500: "#64748B";
                readonly 600: "#475569";
                readonly 700: "#334155";
                readonly 800: "#1E293B";
                readonly 900: "#0F172A";
                readonly 950: "#020617";
            };
            readonly gray: {
                readonly 50: "#F9FAFB";
                readonly 100: "#F3F4F6";
                readonly 200: "#E5E7EB";
                readonly 300: "#D1D5DB";
                readonly 400: "#9CA3AF";
                readonly 500: "#6B7280";
                readonly 600: "#4B5563";
                readonly 700: "#374151";
                readonly 800: "#1F2937";
                readonly 900: "#111827";
                readonly 950: "#030712";
            };
            readonly emerald: {
                readonly 600: "#059669";
                readonly 700: "#047857";
                readonly 800: "#065F46";
            };
            readonly blue: {
                readonly 400: "#60A5FA";
                readonly 500: "#2563EB";
            };
        };
        readonly charts: {
            readonly primary: "#10C9A0";
            readonly secondary: "#2563EB";
            readonly tertiary: "#C084FC";
            readonly quaternary: "#F97316";
            readonly bullish: "#16A34A";
            readonly bearish: "#DC2626";
            readonly neutral: "#748A83";
            readonly volumeUp: "#22C55E";
            readonly volumeDown: "#EF4444";
        };
    };
    readonly spacing: {
        readonly 1: "4px";
        readonly 2: "8px";
        readonly 3: "12px";
        readonly 4: "16px";
        readonly 5: "20px";
        readonly 6: "24px";
        readonly 8: "32px";
        readonly 10: "40px";
        readonly 12: "48px";
        readonly 16: "64px";
        readonly 20: "80px";
    };
    readonly radius: {
        readonly xs: "4px";
        readonly sm: "6px";
        readonly md: "10px";
        readonly lg: "14px";
        readonly xl: "20px";
        readonly "2xl": "28px";
        readonly full: "9999px";
    };
    readonly elevation: {
        readonly none: "none";
        readonly sm: "0 1px 2px 0 rgba(0,0,0,0.05)";
        readonly md: "0 4px 6px -1px rgba(0,0,0,0.1)";
        readonly lg: "0 10px 15px -3px rgba(0,0,0,0.1)";
        readonly xl: "0 20px 25px -5px rgba(0,0,0,0.1)";
        readonly "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)";
        readonly inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)";
        readonly "sm-dark": "0 1px 2px 0 rgba(0,0,0,0.3)";
        readonly "md-dark": "0 4px 6px -1px rgba(0,0,0,0.4)";
    };
    readonly borderWidth: {
        readonly none: "0px";
        readonly thin: "1px";
        readonly medium: "2px";
        readonly thick: "4px";
    };
    readonly zIndex: {
        readonly hide: -1;
        readonly base: 0;
        readonly docked: 10;
        readonly dropdown: 1000;
        readonly sticky: 1100;
        readonly banner: 1200;
        readonly overlay: 1300;
        readonly modal: 1400;
        readonly popover: 1500;
        readonly skipLink: 1600;
        readonly toast: 1700;
        readonly tooltip: 1800;
    };
    readonly opacity: {
        readonly 0: "0";
        readonly 25: "0.25";
        readonly 40: "0.4";
        readonly 50: "0.5";
        readonly 60: "0.6";
        readonly 70: "0.7";
        readonly 80: "0.8";
        readonly 90: "0.9";
        readonly 100: "1";
    };
    readonly backdrop: {
        readonly blur: {
            readonly none: "0";
            readonly sm: "4px";
            readonly md: "8px";
            readonly lg: "12px";
            readonly xl: "16px";
        };
        readonly opacity: {
            readonly sm: "0.4";
            readonly md: "0.6";
            readonly lg: "0.8";
        };
    };
    readonly typography: {
        readonly fontDisplay: "'Syne', sans-serif";
        readonly fontBody: "'DM Sans', sans-serif";
        readonly fontMono: "'DM Mono', monospace";
        readonly scale: {
            readonly xs: "12px";
            readonly sm: "14px";
            readonly base: "16px";
            readonly lg: "18px";
            readonly xl: "20px";
            readonly "2xl": "24px";
            readonly "3xl": "30px";
            readonly "4xl": "38px";
            readonly "5xl": "48px";
            readonly "6xl": "60px";
        };
    };
    readonly motion: {
        readonly easeOut: "cubic-bezier(0.16, 1, 0.3, 1)";
        readonly easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)";
        readonly easeSmooth: "cubic-bezier(0.4, 0, 0.2, 1)";
        readonly fast: "150ms";
        readonly base: "250ms";
        readonly slow: "300ms";
        readonly page: "500ms";
    };
    readonly animation: {
        readonly fade: {
            readonly in: "fade-in 200ms ease-out";
            readonly out: "fade-out 150ms ease-in";
        };
        readonly slide: {
            readonly up: "slide-up 300ms ease-out";
            readonly down: "slide-down 300ms ease-out";
            readonly left: "slide-left 300ms ease-out";
            readonly right: "slide-right 300ms ease-out";
        };
        readonly scale: {
            readonly in: "scale-in 200ms ease-out";
            readonly out: "scale-out 150ms ease-in";
        };
        readonly spin: "spin 1s linear infinite";
        readonly pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
        readonly bounce: "bounce 1s infinite";
    };
    readonly transition: {
        readonly property: {
            readonly none: "none";
            readonly all: "all";
            readonly colors: "background-color, border-color, color, fill, stroke";
            readonly opacity: "opacity";
            readonly shadow: "box-shadow";
            readonly transform: "transform";
        };
        readonly duration: {
            readonly fast: "120ms";
            readonly base: "200ms";
            readonly slow: "300ms";
            readonly slower: "500ms";
        };
    };
    readonly shadows: {
        readonly sm: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
        readonly md: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)";
        readonly lg: "0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)";
        readonly xl: "0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.07)";
        readonly brand: "0 4px 16px rgba(0, 179, 138, 0.25)";
    };
};
type DesignTokens = typeof tokens;

/**
 * Utility to map common design tokens (elevation, borderWidth, zIndex, opacity)
 * from BaseProps to Tailwind CSS classes.
 */
declare function getCommonClasses(props: BaseProps): string;

type PriceDirection$1 = "up" | "down" | "flat";
declare const priceVariants$1: (props?: ({
    direction?: "up" | "down" | "flat" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PriceChangeProps$1 extends VariantProps<typeof priceVariants$1> {
    value: number;
    percent?: number;
    showIcon?: boolean;
    className?: string;
}
declare function PriceChange$1({ value, percent, direction, showIcon, className, }: PriceChangeProps$1): React__default.JSX.Element;
declare namespace PriceChange$1 {
    var displayName: string;
}

declare const usePrevNextButtons: (emblaApi: EmblaCarouselType | undefined) => {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

declare const useDotButton: (emblaApi: EmblaCarouselType | undefined) => {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

declare function usePriceDirection(value: number): PriceDirection$1;
interface CountUpOptions {
    start?: number;
    end: number;
    duration?: number;
    decimals?: number;
}
declare function useCountUp({ start, end, duration, decimals, }: CountUpOptions): number;
declare function useMediaQuery(query: string): boolean;
/** Convenience: returns true on mobile viewports (< 768px) */
declare function useIsMobile(): boolean;
declare function useDisclosure(initial?: boolean): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
declare function useLocalStorage<T>(key: string, defaultValue: T): readonly [T, (newValue: T | ((prev: T) => T)) => void];

declare const buttonVariants$1: (props?: ({
    variant?: "link" | "primary" | "secondary" | "ghost" | "danger" | "outline-brand" | "dark" | "success" | "warning" | "info" | "outline" | "subtle" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "2xs" | "xs" | "icon" | null | undefined;
    fullWidth?: boolean | null | undefined;
    loading?: boolean | null | undefined;
    iconOnly?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps$1 extends React__default.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants$1>, BaseProps {
    loading?: boolean;
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    iconOnly?: boolean;
    active?: boolean;
    pressed?: boolean;
    width?: "auto" | "full" | "fit";
    badge?: number | string;
    tooltip?: string;
}
declare const Button$1: React__default.ForwardRefExoticComponent<ButtonProps$1 & React__default.RefAttributes<HTMLButtonElement>>;

declare const badgeVariants$1: (props?: ({
    color?: "primary" | "danger" | "success" | "warning" | "info" | "neutral" | null | undefined;
    variant?: "ghost" | "outline" | "subtle" | "solid" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps$1 extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof badgeVariants$1>, BaseProps {
    dot?: boolean;
    pulse?: boolean;
    removable?: boolean;
    onRemove?: () => void;
    count?: number;
    maxCount?: number;
}
declare function Badge$1({ className, color, variant, size, dot, pulse, removable, onRemove, count, maxCount, children, ...props }: BadgeProps$1): React__default.JSX.Element;

interface CardProps$1 extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants$2>, BaseProps {
    hover?: boolean;
    interactive?: boolean;
}
declare const cardVariants$2: (props?: ({
    variant?: "flat" | "raised" | "glass" | "outlined" | null | undefined;
    padding?: "none" | "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
    hover?: boolean | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Card$1({ variant, hover, interactive, padding, onClick, className, children, ...props }: CardProps$1): React__default.JSX.Element;
declare namespace Card$1 {
    var displayName: string;
}

interface InputProps$1 extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size">, BaseProps {
    label?: string;
    hint?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    fullWidth?: boolean;
}
declare const Input$1: React__default.ForwardRefExoticComponent<InputProps$1 & React__default.RefAttributes<HTMLInputElement>>;

interface ToggleProps$1 extends BaseProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: "sm" | "md";
    label?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
}
declare function Toggle$1({ checked, defaultChecked, disabled, size, label, onChange, className, ...props }: ToggleProps$1): React__default.JSX.Element;
declare namespace Toggle$1 {
    var displayName: string;
}

interface AppBarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    title?: string;
    leftAction?: React__default.ReactNode;
    rightActions?: React__default.ReactNode;
    sticky?: boolean;
}
declare function AppBar({ title, leftAction, rightActions, sticky, className, ...props }: AppBarProps): React__default.JSX.Element;
declare namespace AppBar {
    var displayName: string;
}

interface BottomNavigationItem {
    id: string;
    label: string;
    icon: React__default.ReactNode;
    activeIcon?: React__default.ReactNode;
}
interface BottomNavigationProps {
    items: BottomNavigationItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    className?: string;
}
declare function BottomNavigation({ items, activeId, onSelect, className, }: BottomNavigationProps): React__default.JSX.Element;
declare namespace BottomNavigation {
    var displayName: string;
}

interface BreadcrumbItem$1 {
    label: string;
    href?: string;
    icon?: React__default.ReactNode;
}
interface BreadcrumbsProps$1 extends React__default.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem$1[];
    separator?: React__default.ReactNode;
}
declare function Breadcrumbs$1({ items, separator, className, ...props }: BreadcrumbsProps$1): React__default.JSX.Element;
declare namespace Breadcrumbs$1 {
    var displayName: string;
}

interface DrawerProps$1 {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    children: React__default.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    className?: string;
}
declare function Drawer$1({ open, onOpenChange, title, description, children, side, className, }: DrawerProps$1): React__default.JSX.Element;
declare namespace Drawer$1 {
    var displayName: string;
}

interface PaginationProps$1 {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
declare function Pagination$1({ currentPage, totalPages, onPageChange, className, }: PaginationProps$1): React__default.JSX.Element;
declare namespace Pagination$1 {
    var displayName: string;
}

declare const Menu$1: React__default.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const MenuTrigger: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const MenuGroup: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuPortal: React__default.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const MenuSub: React__default.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const MenuContent: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuItem: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuLabel: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuSeparator: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const Popover$1: React__default.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React__default.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React__default.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface IconButtonProps$1 extends Omit<ButtonProps$1, "iconOnly" | "leftIcon" | "rightIcon"> {
    icon: React__default.ReactNode;
}
declare const IconButton$1: React__default.ForwardRefExoticComponent<IconButtonProps$1 & React__default.RefAttributes<HTMLButtonElement>>;

interface CheckBoxProps$1 extends React__default.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, BaseProps {
    label?: string;
    error?: string;
}
declare const CheckBox$1: React__default.ForwardRefExoticComponent<CheckBoxProps$1 & React__default.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup$1: React__default.ForwardRefExoticComponent<RadioGroupPrimitive.RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
interface RadioItemProps$1 extends React__default.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    label?: string;
}
declare const RadioGroupItem$1: React__default.ForwardRefExoticComponent<RadioItemProps$1 & React__default.RefAttributes<HTMLButtonElement>>;

interface SwitchProps$1 extends React__default.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    label?: string;
}
declare const Switch$1: React__default.ForwardRefExoticComponent<SwitchProps$1 & React__default.RefAttributes<HTMLButtonElement>>;

interface SliderProps$1 extends React__default.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    label?: string;
    error?: string;
}
declare const Slider$1: React__default.ForwardRefExoticComponent<SliderProps$1 & React__default.RefAttributes<HTMLSpanElement>>;

interface TextFieldProps$1 extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size">, BaseProps {
    label?: string;
    error?: string;
    helper?: string;
    hint?: string;
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    containerClassName?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "filled" | "flushed" | "unstyled";
    borderRadius?: "sm" | "md" | "lg" | "full";
    clearable?: boolean;
    loading?: boolean;
    success?: boolean;
    mask?: string;
    maxLength?: number;
    autoSelect?: boolean;
    onClear?: () => void;
}
declare const TextField$1: React__default.ForwardRefExoticComponent<TextFieldProps$1 & React__default.RefAttributes<HTMLInputElement>>;

interface TextFieldPasswordProps$1 extends Omit<TextFieldProps$1, "rightIcon" | "type"> {
}
declare const TextFieldPassword$1: React__default.ForwardRefExoticComponent<TextFieldPasswordProps$1 & React__default.RefAttributes<HTMLInputElement>>;

interface DigitInputProps$1 {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    containerClassName?: string;
}
declare function DigitInput$1({ length, value, onChange, disabled, error, className, containerClassName, }: DigitInputProps$1): React__default.JSX.Element;
declare namespace DigitInput$1 {
    var displayName: string;
}

interface TextAreaProps$1 extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
declare const TextArea$1: React__default.ForwardRefExoticComponent<TextAreaProps$1 & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const Select$1: React__default.FC<SelectPrimitive.SelectProps>;
declare const SelectValue: React__default.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React__default.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & BaseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const SelectGroup: React__default.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface FileUploaderProps$1 {
    onFilesSelected?: (files: File[]) => void;
    maxFiles?: number;
    accept?: string;
    className?: string;
    label?: string;
}
declare function FileUploader$1({ onFilesSelected, maxFiles, accept, className, label, }: FileUploaderProps$1): React__default.JSX.Element;
declare namespace FileUploader$1 {
    var displayName: string;
}

interface DatePickerProps$1 {
    value?: Date;
    onChange?: (date: Date) => void;
    label?: string;
    error?: string;
    placeholder?: string;
    className?: string;
}
declare function DatePicker$1({ value, onChange, label, error, placeholder, className, }: DatePickerProps$1): React__default.JSX.Element;
declare namespace DatePicker$1 {
    var displayName: string;
}

interface AutocompleteOption$1 {
    value: string;
    label: string;
}
interface AutocompleteProps$1 extends BaseProps {
    options: AutocompleteOption$1[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    className?: string;
}
declare function Autocomplete$1({ options, value, onChange, placeholder, label, error, className, ...props }: AutocompleteProps$1): React__default.JSX.Element;
declare namespace Autocomplete$1 {
    var displayName: string;
}

interface FabProps$1 extends Omit<ButtonProps$1, "variant"> {
    icon: React__default.ReactNode;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "none";
}
declare const Fab$1: React__default.ForwardRefExoticComponent<FabProps$1 & React__default.RefAttributes<HTMLButtonElement>>;

interface TagProps$1 {
    label: string;
    onRemove?: () => void;
    onClick?: () => void;
    variant?: "default" | "primary" | "secondary" | "outline";
    size?: "sm" | "md";
    className?: string;
}
declare function Tag$1({ label, onRemove, onClick, variant, size, className, }: TagProps$1): React__default.JSX.Element;
declare namespace Tag$1 {
    var displayName: string;
}

interface TagGroupProps$1 {
    tags: string[];
    onRemoveTag?: (tag: string) => void;
    variant?: TagProps$1["variant"];
    size?: TagProps$1["size"];
    label?: string;
    className?: string;
}
declare function TagGroup$1({ tags, onRemoveTag, variant, size, label, className, }: TagGroupProps$1): React__default.JSX.Element;
declare namespace TagGroup$1 {
    var displayName: string;
}

interface RatingProps$1 {
    value?: number;
    max?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    label?: string;
}
declare function Rating$1({ value, max, onChange, readonly, size, className, label, }: RatingProps$1): React__default.JSX.Element;
declare namespace Rating$1 {
    var displayName: string;
}

declare const Avatar$1: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React__default.RefAttributes<HTMLSpanElement>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React__default.RefAttributes<HTMLImageElement>, "ref"> & React__default.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React__default.RefAttributes<HTMLSpanElement>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;
type AvatarProps = React__default.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

interface ChipProps$1 extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color"> {
    label: string;
    onDelete?: () => void;
    icon?: React__default.ReactNode;
    variant?: "filled" | "outline" | "ghost";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "default";
}
declare function Chip$1({ label, onDelete, icon, variant, color, className, ...props }: ChipProps$1): React__default.JSX.Element;
declare namespace Chip$1 {
    var displayName: string;
}

interface ImageProps$1 extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: "square" | "video" | "portrait" | "none";
    fallback?: string;
    containerClassName?: string;
}
declare function Image$1({ className, aspectRatio, fallback, containerClassName, src, alt, ...props }: ImageProps$1): React__default.JSX.Element;
declare namespace Image$1 {
    var displayName: string;
}

interface ImageListProps$1 {
    children: React__default.ReactNode;
    cols?: number;
    gap?: number;
    className?: string;
}
declare function ImageList$1({ children, cols, gap, className, }: ImageListProps$1): React__default.JSX.Element;
declare namespace ImageList$1 {
    var displayName: string;
}

interface ColumnDef$1<TData> {
    id: string;
    header: string;
    accessorKey?: keyof TData;
    cell?: (item: TData) => React$1.ReactNode;
    sortable?: boolean;
}
interface DataTableProps$1<TData> extends BaseProps {
    columns: ColumnDef$1<TData>[];
    data: TData[];
    searchKey?: keyof TData;
    searchPlaceholder?: string;
    highlightKey?: keyof TData;
    pageSize?: number;
    loading?: boolean;
    skeletonRows?: number;
    emptyState?: React$1.ReactNode;
    stickyHeader?: boolean;
    striped?: boolean;
    compact?: boolean;
}
declare function DataTable$1<TData>({ columns, data, searchKey, searchPlaceholder, highlightKey, pageSize, loading, skeletonRows, emptyState, stickyHeader, striped, compact, className, ...props }: DataTableProps$1<TData>): React$1.JSX.Element;

interface ListProps$1 {
    children: React__default.ReactNode;
    className?: string;
}
declare function List$1({ children, className }: ListProps$1): React__default.JSX.Element;
declare namespace List$1 {
    var displayName: string;
}
interface ListItemProps {
    children: React__default.ReactNode;
    icon?: React__default.ReactNode;
    secondaryAction?: React__default.ReactNode;
    onClick?: () => void;
    className?: string;
}
declare function ListItem({ children, icon, secondaryAction, onClick, className, }: ListItemProps): React__default.JSX.Element;
declare namespace ListItem {
    var displayName: string;
}

interface TableProps extends React__default.HTMLAttributes<HTMLTableElement>, BaseProps {
    stickyHeader?: boolean;
    striped?: boolean;
    compact?: boolean;
}
declare const Table$1: React__default.ForwardRefExoticComponent<TableProps & React__default.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableSectionElement> & {
    sticky?: boolean;
} & React__default.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableSectionElement> & React__default.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableSectionElement> & React__default.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableRowElement> & React__default.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React__default.ForwardRefExoticComponent<React__default.ThHTMLAttributes<HTMLTableCellElement> & React__default.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React__default.ForwardRefExoticComponent<React__default.TdHTMLAttributes<HTMLTableCellElement> & React__default.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableCaptionElement> & React__default.RefAttributes<HTMLTableCaptionElement>>;

declare const TooltipProvider: React__default.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip$1: React__default.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React__default.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React__default.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const progressVariants$1: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ProgressColor$1 = "brand" | "success" | "danger" | "warning" | "info";
interface ProgressProps$1 extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof progressVariants$1> {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    color?: ProgressColor$1;
}
declare const Progress$1: React__default.ForwardRefExoticComponent<ProgressProps$1 & React__default.RefAttributes<HTMLDivElement>>;

interface TabsProps {
    items: Array<{
        id: string;
        label: string;
        icon?: React__default.ReactNode;
        disabled?: boolean;
        badge?: string | number;
    }>;
    activeId?: string;
    defaultActiveId?: string;
    variant?: "default" | "brand" | "pills" | "underline";
    size?: "sm" | "md";
    onChange?: (id: string) => void;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Tabs$1({ items, activeId: controlledActiveId, defaultActiveId, variant, size, onChange, className, style, }: TabsProps): React__default.JSX.Element;
declare namespace Tabs$1 {
    var displayName: string;
}

interface SeparatorProps$1 extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}
declare const Separator$1: React__default.ForwardRefExoticComponent<SeparatorProps$1 & React__default.RefAttributes<HTMLDivElement>>;

interface BoxProps$1 extends React__default.HTMLAttributes<HTMLDivElement> {
    as?: React__default.ElementType;
    className?: string;
    children?: React__default.ReactNode;
}
declare function Box$1({ as: Component, className, children, ...props }: BoxProps$1): React__default.JSX.Element;
declare namespace Box$1 {
    var displayName: string;
}

interface StackProps$1 extends React__default.HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    gap?: number | string;
    wrap?: boolean;
}
declare function Stack$1({ direction, align, justify, gap, wrap, className, children, ...props }: StackProps$1): React__default.JSX.Element;
declare namespace Stack$1 {
    var displayName: string;
}

interface DividerProps$1 extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    className?: string;
}
declare function Divider$1({ orientation, className, ...props }: DividerProps$1): React__default.JSX.Element;
declare namespace Divider$1 {
    var displayName: string;
}

interface LinkProps$1 extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "default" | "muted" | "brand";
    underline?: "none" | "hover" | "always";
}
declare function Link$1({ variant, underline, className, children, ...props }: LinkProps$1): React__default.JSX.Element;
declare namespace Link$1 {
    var displayName: string;
}

declare const Accordion$1: React__default.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React__default.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const alertVariants$1: (props?: ({
    status?: "success" | "warning" | "info" | "error" | null | undefined;
    variant?: "ghost" | "outline" | "subtle" | "solid" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps$1 extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart">, VariantProps<typeof alertVariants$1>, BaseProps {
    title?: string;
    description?: string;
    icon?: React__default.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    action?: React__default.ReactNode;
}
declare const Alert$1: React__default.ForwardRefExoticComponent<AlertProps$1 & React__default.RefAttributes<HTMLDivElement>>;

declare const loaderVariants$1: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
    color?: "primary" | "neutral" | "brand" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LoaderProps$1 extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof loaderVariants$1> {
    label?: string;
    color?: "brand" | "primary" | "neutral";
}
declare const Loader$1: React__default.ForwardRefExoticComponent<LoaderProps$1 & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressIndicatorProps$1 extends React__default.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    indicatorClassName?: string;
}
declare const ProgressIndicator$1: React__default.ForwardRefExoticComponent<ProgressIndicatorProps$1 & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressTrackerStep$1 {
    id: string;
    label: string;
    description?: string;
}
interface ProgressTrackerProps$1 {
    steps: ProgressTrackerStep$1[];
    currentStepIndex: number;
    className?: string;
}
declare function ProgressTracker$1({ steps, currentStepIndex, className, }: ProgressTrackerProps$1): React__default.JSX.Element;
declare namespace ProgressTracker$1 {
    var displayName: string;
}

declare function Skeleton$1({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): React__default.JSX.Element;
/**
 * BoneyardSkeleton
 * Automated skeleton generation using boneyard-js.
 * Requires a unique 'name' and a 'loading' state.
 */
declare function BoneyardSkeleton({ name, loading, children, fixture }: {
    name: string;
    loading: boolean;
    children: React__default.ReactNode;
    fixture?: React__default.ReactNode;
}): React__default.JSX.Element;

declare const Dialog$1: React__default.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React__default.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare function DialogHeader({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): React__default.JSX.Element;
declare namespace DialogHeader {
    var displayName: string;
}
declare function DialogFooter({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): React__default.JSX.Element;
declare namespace DialogFooter {
    var displayName: string;
}
declare const DialogTitle: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>, "ref"> & React__default.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>, "ref"> & React__default.RefAttributes<HTMLParagraphElement>>;

declare const ToastProvider: React__default.FC<ToastPrimitive.ToastProviderProps>;
declare const ToastViewport: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastViewportProps & React__default.RefAttributes<HTMLOListElement>, "ref"> & React__default.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastProps & React__default.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "success" | "warning" | "info" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastActionProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastCloseProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastTitleProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastDescriptionProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
type ToastProps = React__default.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React__default.ReactElement<typeof ToastAction>;

interface BackdropProps$1 {
    show: boolean;
    onClick?: () => void;
    className?: string;
    blur?: boolean;
}
declare function Backdrop$1({ show, onClick, className, blur, }: BackdropProps$1): React__default.JSX.Element | null;
declare namespace Backdrop$1 {
    var displayName: string;
}

type ToastType = "default" | "success" | "warning" | "error" | "info";
interface ToastInstance {
    id: string;
    title?: string;
    description?: string;
    type?: ToastType;
    action?: ToastActionElement;
}
declare function NotiStackProvider$1({ children, }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;
declare const ToastContext: React__default.Context<{
    addToast: (toast: Omit<ToastInstance, "id">) => string;
    removeToast: (id: string) => void;
}>;
declare const useToast: () => {
    addToast: (toast: Omit<ToastInstance, "id">) => string;
    removeToast: (id: string) => void;
};

interface CarouselProps$1 {
    children: React__default.ReactNode;
    options?: EmblaOptionsType;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Carousel$1({ children, options, className, style, }: CarouselProps$1): React__default.JSX.Element;
declare namespace Carousel$1 {
    var displayName: string;
}

declare const FadeIn$1: ({ children, className, ...props }: HTMLMotionProps<"div">) => react_jsx_runtime.JSX.Element;
declare const SlideIn$1: ({ children, className, direction, ...props }: HTMLMotionProps<"div"> & {
    direction?: "up" | "down" | "left" | "right";
}) => react_jsx_runtime.JSX.Element;
declare const ScaleIn$1: ({ children, className, ...props }: HTMLMotionProps<"div">) => react_jsx_runtime.JSX.Element;

interface NudgeProps$1 {
    id: string;
    title: string;
    description: string;
    variant?: "info" | "warning" | "success" | "neutral";
    onClose?: (id: string) => void;
    onAction?: (id: string) => void;
    actionLabel?: string;
    className?: string;
}
declare function Nudge$1({ id, title, description, variant, onClose, onAction, actionLabel, className, }: NudgeProps$1): React__default.JSX.Element;

interface NudgesPanelProps$1 {
    nudges: NudgeProps$1[];
    onClose?: (id: string) => void;
    onAction?: (id: string) => void;
    position?: "top-right" | "bottom-right" | "bottom-center";
    className?: string;
}
declare function NudgesPanel$1({ nudges, onClose, onAction, position, className, }: NudgesPanelProps$1): React__default.JSX.Element;

interface ConfirmDialogProps extends BaseProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: "danger" | "primary" | "warning";
    loading?: boolean;
    className?: string;
}
declare function ConfirmDialog({ isOpen, onClose, onConfirm, title, description, confirmLabel, cancelLabel, variant, loading, className, ...props }: ConfirmDialogProps): React__default.JSX.Element;

interface NumberInputProps extends Omit<TextFieldProps$1, "onChange" | "value">, BaseProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    showStepper?: boolean;
}
declare const NumberInput: React__default.ForwardRefExoticComponent<NumberInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface DateRange {
    from: Date;
    to: Date;
}
interface DateRangePickerProps extends BaseProps {
    value?: DateRange;
    onChange?: (range: DateRange) => void;
    label?: string;
    error?: string;
    placeholder?: string;
}
declare function DateRangePicker({ value, onChange, label, error, placeholder, className, ...props }: DateRangePickerProps): React__default.JSX.Element;

interface EmptyStateProps extends BaseProps {
    icon?: React__default.ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}
declare function EmptyState({ icon, title, description, action, className, ...props }: EmptyStateProps): React__default.JSX.Element;

interface Props extends BaseProps {
    children?: ReactNode;
    fallback?: ReactNode;
    onReset?: () => void;
    className?: string;
}
interface State {
    hasError: boolean;
    error: Error | null;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    private handleReset;
    render(): string | number | bigint | boolean | Iterable<React__default.ReactNode> | Promise<string | number | bigint | boolean | React__default.ReactPortal | React__default.ReactElement<unknown, string | React__default.JSXElementConstructor<any>> | Iterable<React__default.ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null | undefined;
}

interface LoadingOverlayProps extends BaseProps {
    isLoading: boolean;
    blur?: "none" | "sm" | "md" | "lg";
    text?: string;
}
declare function LoadingOverlay({ isLoading, blur, text, className, ...props }: LoadingOverlayProps): React__default.JSX.Element;

interface SearchInputProps extends Omit<TextFieldProps$1, "leftIcon"> {
    onSearch?: (value: string) => void;
    debounce?: number;
}
declare const SearchInput: React__default.ForwardRefExoticComponent<SearchInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface StatusProps$1 {
    status?: "live" | "paused" | "offline" | "error" | "pro";
    label?: string;
    pulse?: boolean;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Status$1({ status, label, pulse, className, style, }: StatusProps$1): React__default.JSX.Element;
declare namespace Status$1 {
    var displayName: string;
}

interface Step {
    id: string;
    title: string;
    description?: string;
    status: "complete" | "current" | "upcoming";
}
interface StepperProps extends BaseProps {
    steps: Step[];
    orientation?: "horizontal" | "vertical";
}
declare function Stepper({ steps, orientation, className, ...props }: StepperProps): React__default.JSX.Element;

interface CollapsibleProps extends BaseProps {
    title: React__default.ReactNode;
    children: React__default.ReactNode;
    defaultOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    variant?: "ghost" | "card" | "bordered";
}
declare function Collapsible({ title, children, defaultOpen, onToggle, variant, className, ...props }: CollapsibleProps): React__default.JSX.Element;

interface InsightData {
    tag: string;
    title: string;
    body: string;
    badges?: Array<{
        label: string;
        variant: any;
    }>;
}
interface InsightCardProps {
    data: InsightData;
    className?: string;
    onClick?: () => void;
}
declare function InsightCard({ data, className, onClick, }: InsightCardProps): React__default.JSX.Element;
declare namespace InsightCard {
    var displayName: string;
}

interface MetricData$1 {
    label: string;
    value: string | number;
    delta?: number;
    deltaLabel?: string;
    direction?: PriceDirection$1;
    prefix?: string;
    suffix?: string;
}
declare const cardVariants$1: (props?: ({
    compact?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MetricCardProps$1 extends VariantProps<typeof cardVariants$1> {
    data: MetricData$1;
    className?: string;
}
declare function MetricCard$1({ data, className, compact, }: MetricCardProps$1): React__default.JSX.Element;
declare namespace MetricCard$1 {
    var displayName: string;
}

interface SparklineProps$1 {
    data: number[];
    direction?: PriceDirection$1;
    width?: number;
    height?: number;
    className?: string;
}
declare function Sparkline$1({ data, direction, width, height, className, }: SparklineProps$1): React__default.JSX.Element | null;
declare namespace Sparkline$1 {
    var displayName: string;
}

interface StockData$1 {
    ticker: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    open?: number;
    high?: number;
    low?: number;
    volume?: string;
    sparkline?: number[];
}
interface StockCardProps$1 {
    data: StockData$1;
    onClick?: () => void;
    className?: string;
}
declare function StockCard$1({ data, onClick, className, }: StockCardProps$1): React__default.JSX.Element;
declare namespace StockCard$1 {
    var displayName: string;
}

declare global {
    interface Window {
        TradingView: any;
    }
}

interface TickerItem$1 {
    symbol: string;
    price: string;
    change: string;
    isPositive: boolean;
}
interface CustomTickerTapeProps$1 {
    items: TickerItem$1[];
    speed?: number;
    className?: string;
}
declare function CustomTickerTape$1({ items, speed, className, }: CustomTickerTapeProps$1): React__default.JSX.Element;

interface MarketStatusProps$1 {
    status: "open" | "closed" | "closing-soon";
    market?: string;
    className?: string;
}
declare function MarketStatus$1({ status, market, className, }: MarketStatusProps$1): React__default.JSX.Element;

interface AppHeaderNavItem {
    label: string;
    href: string;
    /** Show a badge on this nav item */
    badge?: string;
    /** Icon to render before the label */
    icon?: React.ReactNode;
    /** Sub-items for dropdown */
    children?: Pick<AppHeaderNavItem, 'label' | 'href' | 'icon' | 'badge'>[];
}
interface AppHeaderProps {
    /** User object - null = logged out */
    user?: {
        name: string;
        email: string;
        avatarUrl?: string;
        plan: 'free' | 'pro';
    } | null;
    /** Override navigation items */
    navItems?: AppHeaderNavItem[];
    /** Show market status bar below header */
    showMarketStatus?: boolean;
    /** Callback when user clicks logout */
    onLogout?: () => void;
    /** Optional right-side CTA override */
    cta?: React.ReactNode;
}
declare function AppHeader({ user, navItems, onLogout, cta, }: AppHeaderProps): react_jsx_runtime.JSX.Element;

interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}
interface FooterColumn {
    title: string;
    links: FooterLink[];
}
interface AppFooterProps {
    /** Override footer columns */
    columns?: FooterColumn[];
    /** Show SEBI disclaimer */
    showDisclaimer?: boolean;
    /** Compact single-line footer mode */
    compact?: boolean;
    /** Additional className */
    className?: string;
}
declare function AppFooter({ columns, showDisclaimer, compact, className, }: AppFooterProps): react_jsx_runtime.JSX.Element;

type LogoVariant = "mark" | "wordmark" | "full";
type LogoTheme = "brand" | "dark" | "light" | "white";
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";
interface MintxLogoProps {
    variant?: LogoVariant;
    theme?: LogoTheme;
    size?: LogoSize;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function MintxLogo({ variant, theme, size, className, style, }: MintxLogoProps): React__default.JSX.Element;
declare namespace MintxLogo {
    var displayName: string;
}

type GlobalBadgeVariant = "mint" | "green" | "red" | "amber" | "blue" | "purple" | "neutral" | "outline";
interface NavItem {
    id: string;
    label: string;
    icon?: React__default.ReactNode;
    href?: string;
    badge?: string;
    badgeVariant?: GlobalBadgeVariant;
    children?: NavItem[];
}
interface SidebarSection {
    label?: string;
    items: NavItem[];
}
interface SidebarProps {
    sections: SidebarSection[];
    activeId?: string;
    onNavigate?: (item: NavItem) => void;
    collapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    footer?: React__default.ReactNode;
    className?: string;
}
declare function Sidebar({ sections, activeId, onNavigate, collapsed, onCollapsedChange, footer, className, }: SidebarProps): React__default.JSX.Element;
declare namespace Sidebar {
    var displayName: string;
}

type Theme = "light" | "dark";
interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}
declare function ThemeProvider({ children, defaultTheme, }: ThemeProviderProps): React__default.JSX.Element;
declare function useTheme(): ThemeContextValue;

interface ThemeToggleProps {
    className?: string;
    showLabel?: boolean;
}
declare function ThemeToggle({ className, showLabel, }: ThemeToggleProps): React__default.JSX.Element;
declare namespace ThemeToggle {
    var displayName: string;
}

interface BottomNavItem {
    id: string;
    label: string;
    icon: React__default.ReactNode;
    activeIcon?: React__default.ReactNode;
    href?: string;
}
interface BottomNavProps {
    items: BottomNavItem[];
    activeId?: string;
    onNavigate?: (item: BottomNavItem) => void;
    className?: string;
}
declare function BottomNav({ items, activeId, onNavigate, className, }: BottomNavProps): React__default.JSX.Element;
declare namespace BottomNav {
    var displayName: string;
}

type MarketSession$1 = "pre-open" | "open" | "closed" | "post-close";
interface MarketStatusData$1 {
    session: MarketSession$1;
    label: string;
    nextEvent?: string;
    nextEventTime?: string;
}
interface SupportLiveBarProps$1 {
    marketStatus?: MarketStatusData$1;
    onSupportClick?: () => void;
    className?: string;
}
declare function SupportLiveBar$1({ marketStatus, onSupportClick, className, }: SupportLiveBarProps$1): React__default.JSX.Element;
declare namespace SupportLiveBar$1 {
    var displayName: string;
}

interface HeroProps {
    tag?: string;
    title: React__default.ReactNode;
    description: string;
    features?: string[];
    theme?: 'dark' | 'light';
    className?: string;
    children?: React__default.ReactNode;
    socialProof?: React__default.ReactNode;
    /** Data for floating chips */
    chips?: {
        left?: {
            label: string;
            value: string;
            sub: string;
        };
        right?: {
            label: string;
            value: string;
            sub: string;
        };
    };
}
declare function Hero({ tag, title, description, features, theme, className, children, socialProof, chips, }: HeroProps): react_jsx_runtime.JSX.Element;

interface TickerProps {
    items: string[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function Ticker({ items, theme, className }: TickerProps): react_jsx_runtime.JSX.Element;

interface HowItWorksStep {
    n: string;
    title: string;
    body: string;
}
interface HowItWorksProps {
    label: string;
    steps: HowItWorksStep[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function HowItWorks({ label, steps, theme, className, }: HowItWorksProps): react_jsx_runtime.JSX.Element;

interface Differentiator {
    rank: string;
    title: string;
    body: string;
    metric: string;
    metricSub: string;
    tag: string;
    accent: string;
    icon: React__default.ReactNode;
}
interface DiffCardProps {
    item: Differentiator;
    i: number;
    theme?: 'dark' | 'light';
}
declare function DiffCard({ item, i, theme }: DiffCardProps): react_jsx_runtime.JSX.Element;

interface DifferentiatorsProps {
    title: string;
    items: readonly Differentiator[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function Differentiators({ title, items, theme, className, }: DifferentiatorsProps): react_jsx_runtime.JSX.Element;

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';
interface WaitlistFormProps {
    theme?: 'dark' | 'light';
    size?: 'sm' | 'md';
    className?: string;
    /** Optional callback on successful signup */
    onSuccess?: (email: string, position?: number) => void;
}
declare function WaitlistForm({ theme, size, className, onSuccess, }: WaitlistFormProps): react_jsx_runtime.JSX.Element;

interface FibSpiralProps {
    theme?: 'dark' | 'light';
    className?: string;
}
declare function FibSpiral({ theme, className }: FibSpiralProps): react_jsx_runtime.JSX.Element;

interface StatItem {
    val: string;
    label: string;
    sub: string;
}
interface StatsSectionProps {
    stats: StatItem[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function StatsSection({ stats, theme, className, }: StatsSectionProps): react_jsx_runtime.JSX.Element;

interface CommunitySectionProps {
    theme?: 'dark' | 'light';
    className?: string;
    title: React__default.ReactNode;
    description: string;
    label?: string;
    perks?: string[];
    children?: React__default.ReactNode;
}
declare function CommunitySection({ theme, className, title, description, label, perks, children, }: CommunitySectionProps): react_jsx_runtime.JSX.Element;

interface ColumnDef<TData> {
    id: string;
    header: string;
    accessorKey?: keyof TData;
    cell?: (item: TData) => React$1.ReactNode;
    sortable?: boolean;
}
interface DataTableProps<TData> {
    columns: ColumnDef<TData>[];
    data: TData[];
    searchKey?: keyof TData;
    searchPlaceholder?: string;
    highlightKey?: keyof TData;
    pageSize?: number;
}
declare function DataTable<TData>({ columns, data, searchKey, searchPlaceholder, highlightKey, pageSize, }: DataTableProps<TData>): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
declare function Pagination({ currentPage, totalPages, onPageChange, className, }: PaginationProps): React__default.JSX.Element;
declare namespace Pagination {
    var displayName: string;
}

declare const Table: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableElement> & React__default.RefAttributes<HTMLTableElement>>;

interface StatusProps {
    status?: "live" | "paused" | "offline" | "error" | "pro";
    label?: string;
    pulse?: boolean;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Status({ status, label, pulse, className, style, }: StatusProps): React__default.JSX.Element;
declare namespace Status {
    var displayName: string;
}

interface TickerItem {
    symbol: string;
    price: string;
    change: string;
    isPositive: boolean;
}
interface CustomTickerTapeProps {
    items: TickerItem[];
    speed?: number;
    className?: string;
}
declare function CustomTickerTape({ items, speed, className, }: CustomTickerTapeProps): React__default.JSX.Element;

interface MarketStatusProps {
    status: "open" | "closed" | "closing-soon";
    market?: string;
    className?: string;
}
declare function MarketStatus({ status, market, className, }: MarketStatusProps): React__default.JSX.Element;

type PriceDirection = "up" | "down" | "flat";
declare const priceVariants: (props?: ({
    direction?: "up" | "down" | "flat" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PriceChangeProps extends VariantProps<typeof priceVariants> {
    value: number;
    percent?: number;
    showIcon?: boolean;
    className?: string;
}
declare function PriceChange({ value, percent, direction, showIcon, className, }: PriceChangeProps): React__default.JSX.Element;
declare namespace PriceChange {
    var displayName: string;
}

interface MetricData {
    label: string;
    value: string | number;
    delta?: number;
    deltaLabel?: string;
    direction?: PriceDirection;
    prefix?: string;
    suffix?: string;
}
declare const cardVariants: (props?: ({
    compact?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MetricCardProps extends VariantProps<typeof cardVariants> {
    data: MetricData;
    className?: string;
}
declare function MetricCard({ data, className, compact, }: MetricCardProps): React__default.JSX.Element;
declare namespace MetricCard {
    var displayName: string;
}

interface SparklineProps {
    data: number[];
    direction?: PriceDirection;
    width?: number;
    height?: number;
    className?: string;
}
declare function Sparkline({ data, direction, width, height, className, }: SparklineProps): React__default.JSX.Element | null;
declare namespace Sparkline {
    var displayName: string;
}

interface StockData {
    ticker: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    open?: number;
    high?: number;
    low?: number;
    volume?: string;
    sparkline?: number[];
}
interface StockCardProps {
    data: StockData;
    onClick?: () => void;
    className?: string;
}
declare function StockCard({ data, onClick, className, }: StockCardProps): React__default.JSX.Element;
declare namespace StockCard {
    var displayName: string;
}

declare const Dialog: React__default.FC<DialogPrimitive.DialogProps>;

interface DrawerProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    children: React__default.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    className?: string;
}
declare function Drawer({ open, onOpenChange, title, description, children, side, className, }: DrawerProps): React__default.JSX.Element;
declare namespace Drawer {
    var displayName: string;
}

declare const Menu: React__default.FC<DropdownMenuPrimitive.DropdownMenuProps>;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | "danger" | "outline-brand" | "dark" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
    fullWidth?: boolean | null | undefined;
    loading?: boolean | null | undefined;
    iconOnly?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    iconOnly?: boolean;
}
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface FabProps extends Omit<ButtonProps, "variant"> {
    icon: React__default.ReactNode;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "none";
}
declare const Fab: React__default.ForwardRefExoticComponent<FabProps & React__default.RefAttributes<HTMLButtonElement>>;

interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React__default.ReactNode;
}
interface BreadcrumbsProps extends React__default.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    separator?: React__default.ReactNode;
}
declare function Breadcrumbs({ items, separator, className, ...props }: BreadcrumbsProps): React__default.JSX.Element;
declare namespace Breadcrumbs {
    var displayName: string;
}

type MarketSession = "pre-open" | "open" | "closed" | "post-close";
interface MarketStatusData {
    session: MarketSession;
    label: string;
    nextEvent?: string;
    nextEventTime?: string;
}
interface SupportLiveBarProps {
    marketStatus?: MarketStatusData;
    onSupportClick?: () => void;
    className?: string;
}
declare function SupportLiveBar({ marketStatus, onSupportClick, className, }: SupportLiveBarProps): React__default.JSX.Element;
declare namespace SupportLiveBar {
    var displayName: string;
}

interface NudgeProps {
    id: string;
    title: string;
    description: string;
    variant?: "info" | "warning" | "success" | "neutral";
    onClose?: (id: string) => void;
    onAction?: (id: string) => void;
    actionLabel?: string;
    className?: string;
}
declare function Nudge({ id, title, description, variant, onClose, onAction, actionLabel, className, }: NudgeProps): React__default.JSX.Element;

interface NudgesPanelProps {
    nudges: NudgeProps[];
    onClose?: (id: string) => void;
    onAction?: (id: string) => void;
    position?: "top-right" | "bottom-right" | "bottom-center";
    className?: string;
}
declare function NudgesPanel({ nudges, onClose, onAction, position, className, }: NudgesPanelProps): React__default.JSX.Element;

interface ChartProps {
    data: any[];
    height?: number;
    theme?: "light" | "dark";
    color?: string;
    className?: string;
    title?: string;
}
declare const AreaChart: ({ data, color, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;
declare const CandlestickChart: ({ data, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;
declare const BaselineChart: ({ data, color, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;
declare const VolumeChart: ({ data, color, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;

interface TradingViewConfig {
    symbol?: string;
    interval?: string;
    timezone?: string;
    theme?: "light" | "dark";
    style?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    locale?: string;
    toolbar_bg?: string;
    enable_publishing?: boolean;
    allow_symbol_change?: boolean;
    container_id: string;
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
    hide_side_toolbar?: boolean;
    hide_top_toolbar?: boolean;
    details?: boolean;
    hotlist?: boolean;
    calendar?: boolean;
    show_popup_button?: boolean;
    popup_width?: string;
    popup_height?: string;
    withdateranges?: boolean;
    save_image?: boolean;
    backgroundColor?: string;
    gridLineColor?: string;
}
/**
 * Advanced Real-Time Chart Widget
 */
declare const AdvancedRealTimeChart: ({ symbol, interval, theme, autosize, height, ...rest }: Partial<TradingViewConfig>) => react_jsx_runtime.JSX.Element;
/**
 * Technical Analysis Widget
 */
declare const TechnicalAnalysis: ({ symbol, theme, width, height, interval }: {
    symbol?: string;
    theme?: "light" | "dark";
    width?: string | number;
    height?: string | number;
    interval?: string;
}) => react_jsx_runtime.JSX.Element;
/**
 * Market Overview Widget
 */
declare const MarketOverview: ({ theme, width, height, symbols }: {
    theme?: "light" | "dark";
    width?: string | number;
    height?: string | number;
    symbols?: {
        s: string;
        d: string;
    }[];
}) => react_jsx_runtime.JSX.Element;
/**
 * Symbol Overview Mini Widget
 */
declare const SymbolOverviewMini: ({ symbol, theme, width, height }: {
    symbol?: string;
    theme?: "light" | "dark";
    width?: string | number;
    height?: string | number;
}) => react_jsx_runtime.JSX.Element;
/**
 * Ticker Tape Widget
 */
declare const TickerTape: ({ theme, symbols }: {
    theme?: "light" | "dark";
    symbols?: {
        proName: string;
        title: string;
    }[];
}) => react_jsx_runtime.JSX.Element;
declare global {
    interface Window {
        TradingView: any;
    }
}

declare function AssetLibrary({ showHeader, mode }: {
    showHeader?: boolean;
    mode?: "icons" | "illustrations";
}): react_jsx_runtime.JSX.Element;

type IconCategory = "navigation" | "market" | "action" | "status" | "social" | "device" | "finance" | "academy";
type IllustrationCategory = "empty-state" | "onboarding" | "pro-upgrade" | "error" | "market-status" | "success" | "academy" | "social";
interface IconDef {
    name: string;
    category: IconCategory;
    musrStories: string[];
}
interface IllustrationDef {
    id: string;
    name: string;
    use: string;
    category: IllustrationCategory;
    musrStories: string[];
    tags: string[];
}
declare const ICONS: IconDef[];
declare const ILLUSTRATIONS: IllustrationDef[];
declare const SVGS: Record<string, string>;

declare const Toast: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastProps & React__default.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "success" | "warning" | "info" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.RefAttributes<HTMLLIElement>>;

declare function NotiStackProvider({ children, }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;

declare const Accordion: React__default.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React__default.RefAttributes<HTMLDivElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "info" | "brand" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
    description?: string;
}
declare const Alert: React__default.ForwardRefExoticComponent<AlertProps & React__default.RefAttributes<HTMLDivElement>>;

declare const FadeIn: ({ children, className, ...props }: HTMLMotionProps<"div">) => react_jsx_runtime.JSX.Element;
declare const SlideIn: ({ children, className, direction, ...props }: HTMLMotionProps<"div"> & {
    direction?: "up" | "down" | "left" | "right";
}) => react_jsx_runtime.JSX.Element;
declare const ScaleIn: ({ children, className, ...props }: HTMLMotionProps<"div">) => react_jsx_runtime.JSX.Element;

interface AutocompleteOption {
    value: string;
    label: string;
}
interface AutocompleteProps {
    options: AutocompleteOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    className?: string;
}
declare function Autocomplete({ options, value, onChange, placeholder, label, error, className, }: AutocompleteProps): React__default.JSX.Element;
declare namespace Autocomplete {
    var displayName: string;
}

declare const Avatar: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React__default.RefAttributes<HTMLSpanElement>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;

interface BackdropProps {
    show: boolean;
    onClick?: () => void;
    className?: string;
    blur?: boolean;
}
declare function Backdrop({ show, onClick, className, blur, }: BackdropProps): React__default.JSX.Element | null;
declare namespace Backdrop {
    var displayName: string;
}

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "success" | "warning" | "outline" | "neutral" | "error" | "blue" | "purple" | "destructive" | "mint" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface BoxProps extends React__default.HTMLAttributes<HTMLDivElement> {
    as?: React__default.ElementType;
    className?: string;
    children?: React__default.ReactNode;
}
declare function Box({ as: Component, className, children, ...props }: BoxProps): React__default.JSX.Element;
declare namespace Box {
    var displayName: string;
}

interface CardProps extends BaseProps {
    variant?: "flat" | "raised" | "glass" | "outlined";
    padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
    hover?: boolean;
    interactive?: boolean;
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    border?: boolean;
    borderColor?: string;
    borderLeft?: boolean;
    borderLeftColor?: string;
    borderWidth?: "thin" | "medium" | "thick";
    onClick?: () => void;
    children?: React__default.ReactNode;
}
declare function Card({ variant, hover, interactive, padding, shadow, border, borderColor, borderLeft, borderLeftColor, borderWidth, onClick, className, style, children, ...props }: CardProps): React__default.JSX.Element;
declare namespace Card {
    var displayName: string;
}

interface CarouselProps {
    children: React__default.ReactNode;
    options?: EmblaOptionsType;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Carousel({ children, options, className, style, }: CarouselProps): React__default.JSX.Element;
declare namespace Carousel {
    var displayName: string;
}

interface CheckBoxProps extends React__default.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label?: string;
    error?: string;
}
declare const CheckBox: React__default.ForwardRefExoticComponent<CheckBoxProps & React__default.RefAttributes<HTMLButtonElement>>;

interface ChipProps extends React__default.HTMLAttributes<HTMLDivElement> {
    label: string;
    onDelete?: () => void;
    icon?: React__default.ReactNode;
    variant?: "filled" | "outline" | "ghost";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "default";
}
declare function Chip({ label, onDelete, icon, variant, color, className, ...props }: ChipProps): React__default.JSX.Element;
declare namespace Chip {
    var displayName: string;
}

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date) => void;
    label?: string;
    error?: string;
    placeholder?: string;
    className?: string;
}
declare function DatePicker({ value, onChange, label, error, placeholder, className, }: DatePickerProps): React__default.JSX.Element;
declare namespace DatePicker {
    var displayName: string;
}

interface DigitInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    containerClassName?: string;
}
declare function DigitInput({ length, value, onChange, disabled, error, className, containerClassName, }: DigitInputProps): React__default.JSX.Element;
declare namespace DigitInput {
    var displayName: string;
}

interface DividerProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    className?: string;
}
declare function Divider({ orientation, className, ...props }: DividerProps): React__default.JSX.Element;
declare namespace Divider {
    var displayName: string;
}

interface FileUploaderProps {
    onFilesSelected?: (files: File[]) => void;
    maxFiles?: number;
    accept?: string;
    className?: string;
    label?: string;
}
declare function FileUploader({ onFilesSelected, maxFiles, accept, className, label, }: FileUploaderProps): React__default.JSX.Element;
declare namespace FileUploader {
    var displayName: string;
}

interface IconButtonProps extends Omit<ButtonProps, "iconOnly" | "leftIcon" | "rightIcon"> {
    icon: React__default.ReactNode;
}
declare const IconButton: React__default.ForwardRefExoticComponent<IconButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface ImageProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: "square" | "video" | "portrait" | "none";
    fallback?: string;
    containerClassName?: string;
}
declare function Image({ className, aspectRatio, fallback, containerClassName, src, alt, ...props }: ImageProps): React__default.JSX.Element;
declare namespace Image {
    var displayName: string;
}

interface ImageListProps {
    children: React__default.ReactNode;
    cols?: number;
    gap?: number;
    className?: string;
}
declare function ImageList({ children, cols, gap, className, }: ImageListProps): React__default.JSX.Element;
declare namespace ImageList {
    var displayName: string;
}

interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    hint?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    fullWidth?: boolean;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface LinkProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "default" | "muted" | "brand" | "ghost" | "neutral";
    underline?: "none" | "hover" | "always";
}
declare function Link({ variant, underline, className, children, ...props }: LinkProps): React__default.JSX.Element;
declare namespace Link {
    var displayName: string;
}

interface ListProps {
    children: React__default.ReactNode;
    className?: string;
}
declare function List({ children, className }: ListProps): React__default.JSX.Element;
declare namespace List {
    var displayName: string;
}

declare const loaderVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "neutral" | "brand" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LoaderProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof loaderVariants> {
    label?: string;
    color?: "brand" | "primary" | "neutral";
}
declare const Loader: React__default.ForwardRefExoticComponent<LoaderProps & React__default.RefAttributes<HTMLDivElement>>;

declare const Popover: React__default.FC<PopoverPrimitive.PopoverProps>;

declare const progressVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ProgressColor = "brand" | "success" | "danger" | "warning" | "info";
interface ProgressProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof progressVariants> {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    color?: ProgressColor;
}
declare const Progress: React__default.ForwardRefExoticComponent<ProgressProps & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressIndicatorProps extends React__default.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    indicatorClassName?: string;
}
declare const ProgressIndicator: React__default.ForwardRefExoticComponent<ProgressIndicatorProps & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressTrackerStep {
    id: string;
    label: string;
    description?: string;
}
interface ProgressTrackerProps {
    steps: ProgressTrackerStep[];
    currentStepIndex: number;
    className?: string;
}
declare function ProgressTracker({ steps, currentStepIndex, className, }: ProgressTrackerProps): React__default.JSX.Element;
declare namespace ProgressTracker {
    var displayName: string;
}

declare const RadioGroup: React__default.ForwardRefExoticComponent<RadioGroupPrimitive.RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
interface RadioItemProps extends React__default.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    label?: string;
}
declare const RadioGroupItem: React__default.ForwardRefExoticComponent<RadioItemProps & React__default.RefAttributes<HTMLButtonElement>>;

interface RatingProps {
    value?: number;
    max?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    label?: string;
}
declare function Rating({ value, max, onChange, readonly, size, className, label, }: RatingProps): React__default.JSX.Element;
declare namespace Rating {
    var displayName: string;
}

declare const Select: React__default.FC<SelectPrimitive.SelectProps>;

interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}
declare const Separator: React__default.ForwardRefExoticComponent<SeparatorProps & React__default.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

interface SliderProps extends React__default.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    label?: string;
    error?: string;
}
declare const Slider: React__default.ForwardRefExoticComponent<SliderProps & React__default.RefAttributes<HTMLSpanElement>>;

interface StackProps extends React__default.HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    gap?: number | string;
    wrap?: boolean;
}
declare function Stack({ direction, align, justify, gap, wrap, className, children, ...props }: StackProps): React__default.JSX.Element;
declare namespace Stack {
    var displayName: string;
}

interface SwitchProps extends React__default.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    label?: string;
}
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const Tabs: React__default.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React__default.RefAttributes<HTMLDivElement>>;

interface TagProps {
    label: string;
    onRemove?: () => void;
    onClick?: () => void;
    variant?: "default" | "primary" | "secondary" | "outline";
    size?: "sm" | "md";
    className?: string;
}
declare function Tag({ label, onRemove, onClick, variant, size, className, }: TagProps): React__default.JSX.Element;
declare namespace Tag {
    var displayName: string;
}

interface TagGroupProps {
    tags: string[];
    onRemoveTag?: (tag: string) => void;
    variant?: TagProps["variant"];
    size?: TagProps["size"];
    label?: string;
    className?: string;
}
declare function TagGroup({ tags, onRemoveTag, variant, size, label, className, }: TagGroupProps): React__default.JSX.Element;
declare namespace TagGroup {
    var displayName: string;
}

interface TextAreaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
declare const TextArea: React__default.ForwardRefExoticComponent<TextAreaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    fullWidth?: boolean;
}
declare const TextField: React__default.ForwardRefExoticComponent<TextFieldProps & React__default.RefAttributes<HTMLInputElement>>;

interface TextFieldPasswordProps extends Omit<TextFieldProps, "rightIcon" | "type"> {
}
declare const TextFieldPassword: React__default.ForwardRefExoticComponent<TextFieldPasswordProps & React__default.RefAttributes<HTMLInputElement>>;

interface ToggleProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: "sm" | "md";
    label?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
    style?: React__default.CSSProperties;
}
declare function Toggle({ checked, defaultChecked, disabled, size, label, onChange, className, style, }: ToggleProps): React__default.JSX.Element;
declare namespace Toggle {
    var displayName: string;
}

declare const Tooltip: React__default.FC<TooltipPrimitive.TooltipProps>;

export { Accordion$1 as Accordion, AccordionContent, AccordionItem, AccordionTrigger, AdvancedRealTimeChart, Alert$1 as Alert, type AlertProps$1 as AlertProps, AppBar, type AppBarProps, AppFooter, type AppFooterProps, AppHeader, type AppHeaderNavItem, type AppHeaderProps, AreaChart, AssetLibrary, Autocomplete$1 as Autocomplete, type AutocompleteOption$1 as AutocompleteOption, type AutocompleteProps$1 as AutocompleteProps, Avatar$1 as Avatar, AvatarFallback, AvatarImage, type AvatarProps, Backdrop$1 as Backdrop, type BackdropProps$1 as BackdropProps, Badge$1 as Badge, type BadgeProps$1 as BadgeProps, type BaseProps, BaselineChart, BoneyardSkeleton, type BorderWidth, BottomNav, type BottomNavItem, BottomNavigation, type BottomNavigationItem, type BottomNavigationProps, Box$1 as Box, type BoxProps$1 as BoxProps, type BreadcrumbItem$1 as BreadcrumbItem, Breadcrumbs$1 as Breadcrumbs, type BreadcrumbsProps$1 as BreadcrumbsProps, Button$1 as Button, type ButtonProps$1 as ButtonProps, CandlestickChart, Card$1 as Card, type CardProps$1 as CardProps, Carousel$1 as Carousel, type CarouselProps$1 as CarouselProps, CheckBox$1 as CheckBox, type CheckBoxProps$1 as CheckBoxProps, type ChildrenProps, Chip$1 as Chip, type ChipProps$1 as ChipProps, Collapsible, type ColumnDef$1 as ColumnDef, CommunitySection, type CommunitySectionProps, ConfirmDialog, type ConfirmDialogProps, CustomTickerTape$1 as CustomTickerTape, DataTable$1 as DataTable, DatePicker$1 as DatePicker, type DatePickerProps$1 as DatePickerProps, type DateRange, DateRangePicker, type DateRangePickerProps, type DesignTokens, Dialog$1 as Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DiffCard, type DiffCardProps, type Differentiator, Differentiators, type DifferentiatorsProps, DigitInput$1 as DigitInput, type DigitInputProps$1 as DigitInputProps, Divider$1 as Divider, type DividerProps$1 as DividerProps, Drawer$1 as Drawer, type DrawerProps$1 as DrawerProps, type Elevation, EmptyState, Nudge as EngagementNudge, NudgesPanel as EngagementNudgesPanel, ErrorBoundary, Fab$1 as Fab, type FabProps$1 as FabProps, FadeIn$1 as FadeIn, FibSpiral, type FibSpiralProps, FileUploader$1 as FileUploader, type FileUploaderProps$1 as FileUploaderProps, type FooterColumn, type FooterLink, type GlobalBadgeVariant, Hero, type HeroProps, HowItWorks, type HowItWorksProps, type HowItWorksStep, ICONS, ILLUSTRATIONS, IconButton$1 as IconButton, type IconButtonProps$1 as IconButtonProps, type IconCategory, type IconDef, type IllustrationCategory, type IllustrationDef, Image$1 as Image, ImageList$1 as ImageList, type ImageListProps$1 as ImageListProps, type ImageProps$1 as ImageProps, Input$1 as Input, type InputProps$1 as InputProps, InsightCard, Link$1 as Link, type LinkProps$1 as LinkProps, List$1 as List, ListItem, type ListItemProps, type ListProps$1 as ListProps, Loader$1 as Loader, type LoaderProps$1 as LoaderProps, LoadingOverlay, MarketStatus as MarketDataStatus, DataTable as MarketDataTable, MetricCard as MarketMetricCard, MarketOverview, Pagination as MarketPagination, PriceChange as MarketPriceChange, Sparkline as MarketSparkline, MarketStatus$1 as MarketStatus, Status as MarketStatusIndicator, StockCard as MarketStockCard, Table as MarketTable, CustomTickerTape as MarketTickerTape, Menu$1 as Menu, MenuContent, MenuGroup, MenuItem, MenuLabel, MenuPortal, MenuSeparator, MenuSub, MenuTrigger, MetricCard$1 as MetricCard, type MintShade, MintxLogo, type NavItem, type NeutralShade, NotiStackProvider$1 as NotiStackProvider, Nudge$1 as Nudge, type NudgeProps$1 as NudgeProps, NudgesPanel$1 as NudgesPanel, NumberInput, type NumberInputProps, Breadcrumbs as OnboardingBreadcrumbs, Dialog as OnboardingDialog, Drawer as OnboardingDrawer, Fab as OnboardingFab, Menu as OnboardingMenu, SupportLiveBar as OnboardingSupportLiveBar, type Opacity, Pagination$1 as Pagination, type PaginationProps$1 as PaginationProps, Popover$1 as Popover, PopoverContent, PopoverTrigger, PriceChange$1 as PriceChange, Progress$1 as Progress, ProgressIndicator$1 as ProgressIndicator, type ProgressIndicatorProps$1 as ProgressIndicatorProps, type ProgressProps$1 as ProgressProps, ProgressTracker$1 as ProgressTracker, type ProgressTrackerProps$1 as ProgressTrackerProps, type ProgressTrackerStep$1 as ProgressTrackerStep, RadioGroup$1 as RadioGroup, RadioGroupItem$1 as RadioGroupItem, type RadioItemProps$1 as RadioItemProps, type RadiusKey, Rating$1 as Rating, type RatingProps$1 as RatingProps, SVGS, ScaleIn$1 as ScaleIn, SearchInput, type SearchInputProps, Select$1 as Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator$1 as Separator, type SeparatorProps$1 as SeparatorProps, Accordion as SharedAccordion, Alert as SharedAlert, Autocomplete as SharedAutocomplete, Avatar as SharedAvatar, Backdrop as SharedBackdrop, Badge as SharedBadge, Box as SharedBox, Button as SharedButton, Card as SharedCard, Carousel as SharedCarousel, CheckBox as SharedCheckBox, Chip as SharedChip, DatePicker as SharedDatePicker, DigitInput as SharedDigitInput, Divider as SharedDivider, FadeIn as SharedFadeIn, FileUploader as SharedFileUploader, IconButton as SharedIconButton, Image as SharedImage, ImageList as SharedImageList, Input as SharedInput, Link as SharedLink, List as SharedList, Loader as SharedLoader, Popover as SharedPopover, Progress as SharedProgress, ProgressIndicator as SharedProgressIndicator, ProgressTracker as SharedProgressTracker, RadioGroup as SharedRadioGroup, RadioGroupItem as SharedRadioGroupItem, Rating as SharedRating, ScaleIn as SharedScaleIn, Select as SharedSelect, Separator as SharedSeparator, Skeleton as SharedSkeleton, SlideIn as SharedSlideIn, Slider as SharedSlider, Stack as SharedStack, Switch as SharedSwitch, Tabs as SharedTabs, Tag as SharedTag, TagGroup as SharedTagGroup, TextArea as SharedTextArea, TextField as SharedTextField, TextFieldPassword as SharedTextFieldPassword, Toast as SharedToast, Toggle as SharedToggle, Tooltip as SharedTooltip, Sidebar, type Size, Skeleton$1 as Skeleton, SlideIn$1 as SlideIn, Slider$1 as Slider, type SliderProps$1 as SliderProps, type SpacingKey, Sparkline$1 as Sparkline, Stack$1 as Stack, type StackProps$1 as StackProps, type StatItem, StatsSection, type StatsSectionProps, Status$1 as Status, type StatusProps$1 as StatusProps, type Step, Stepper, StockCard$1 as StockCard, SupportLiveBar$1 as SupportLiveBar, Switch$1 as Switch, type SwitchProps$1 as SwitchProps, SymbolOverviewMini, Table$1 as Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, type TableProps, TableRow, Tabs$1 as Tabs, type TabsProps, Tag$1 as Tag, TagGroup$1 as TagGroup, type TagGroupProps$1 as TagGroupProps, type TagProps$1 as TagProps, TechnicalAnalysis, TextArea$1 as TextArea, type TextAreaProps$1 as TextAreaProps, TextField$1 as TextField, TextFieldPassword$1 as TextFieldPassword, type TextFieldPasswordProps$1 as TextFieldPasswordProps, type TextFieldProps$1 as TextFieldProps, type TextSizeKey, type Theme, type ThemeContextValue, ThemeProvider, ThemeToggle, Ticker, type TickerProps, TickerTape, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastContext, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toggle$1 as Toggle, type ToggleProps$1 as ToggleProps, Tooltip$1 as Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, VolumeChart, WaitlistForm, type WaitlistFormProps, type WaitlistStatus, NotiStackProvider as WrapperNotiStackProvider, type ZIndex, animation, backdrop, badgeVariants$1 as badgeVariants, borderWidth, chartColors, cn, elevation, getCommonClasses, hexToRgba, mintColors, motion, neutralColors, opacity, radius, semanticColors, shadows, spacing, tokens, transition, typography, useCountUp, useDisclosure, useDotButton, useIsMobile, useLocalStorage, useMediaQuery, usePrevNextButtons, usePriceDirection, useTheme, useToast, zIndex };

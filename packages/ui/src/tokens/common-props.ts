import { BaseProps } from "../types";
import { cn } from "./cn";

/**
 * Utility to map common design tokens (elevation, borderWidth, zIndex, opacity)
 * from BaseProps to Tailwind CSS classes.
 */
export function getCommonClasses(props: BaseProps): string {
  const { elevation, borderWidth, zIndex, opacity } = props;

  return cn(
    // Elevation (Shadows)
    elevation === "none" && "shadow-none",
    elevation === "sm" && "shadow-sm",
    elevation === "md" && "shadow-md",
    elevation === "lg" && "shadow-lg",
    elevation === "xl" && "shadow-xl",
    elevation === "2xl" && "shadow-2xl",
    elevation === "inner" && "shadow-inner",

    // Border Width
    borderWidth === "none" && "border-0",
    borderWidth === "thin" && "border-thin",
    borderWidth === "medium" && "border-medium",
    borderWidth === "thick" && "border-thick",

    // Z-Index
    zIndex === "hide" && "z-hide",
    zIndex === "base" && "z-base",
    zIndex === "docked" && "z-docked",
    zIndex === "dropdown" && "z-dropdown",
    zIndex === "sticky" && "z-sticky",
    zIndex === "banner" && "z-banner",
    zIndex === "overlay" && "z-overlay",
    zIndex === "modal" && "z-modal",
    zIndex === "popover" && "z-popover",
    zIndex === "skipLink" && "z-skipLink",
    zIndex === "toast" && "z-toast",
    zIndex === "tooltip" && "z-tooltip",

    // Opacity
    opacity === 0 && "opacity-0",
    opacity === 25 && "opacity-25",
    opacity === 40 && "opacity-40",
    opacity === 50 && "opacity-50",
    opacity === 60 && "opacity-60",
    opacity === 70 && "opacity-70",
    opacity === 80 && "opacity-80",
    opacity === 90 && "opacity-90",
    opacity === 100 && "opacity-100"
  );
}

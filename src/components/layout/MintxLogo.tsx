import React from "react";
import { cn } from "../../tokens/cn";
import "./MintxLogo.css";

type LogoVariant = "mark" | "wordmark" | "full";
type LogoTheme = "brand" | "dark" | "light" | "white";
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface MintxLogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  className?: string;
  style?: React.CSSProperties;
}

const markSizes: Record<LogoSize, number> = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 96,
};

const wordmarkSizes: Record<LogoSize, number> = {
  xs: 12,
  sm: 14,
  md: 17,
  lg: 22,
  xl: 36,
};

/** The ascending trade-line icon mark */
const IconMark: React.FC<{ size: number; theme: LogoTheme }> = ({
  size,
  theme,
}) => {
  const bgColor =
    theme === "white" ? "#FFFFFF" : theme === "light" ? "#F5F8F7" : "#00B38A"; // brand + dark

  const strokeColor =
    theme === "white" || theme === "light" ? "#00B38A" : "#001A13";

  const rx = Math.round(size * 0.25);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="96" height="96" rx={rx} fill={bgColor} />
      <path
        d="M20 64L34 42L44 52L62 30"
        stroke={strokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="62" cy="30" r="6" fill={strokeColor} />
      <path
        d="M20 72H76"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M44 52L44 72"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.2"
      />
    </svg>
  );
};

/** Text wordmark */
const Wordmark: React.FC<{ fontSize: number; theme: LogoTheme }> = ({
  fontSize,
  theme,
}) => {
  const primaryColor =
    theme === "white" ? "#FFFFFF" : theme === "dark" ? "#E8EFED" : "#141F1D";

  const accentColor = theme === "white" ? "rgba(255,255,255,0.7)" : "#00B38A";

  return (
    <span
      className="logo-wordmark"
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        color: primaryColor,
        userSelect: "none",
      }}
    >
      Mint<span style={{ color: accentColor }}>x</span>
    </span>
  );
};

export const MintxLogo: React.FC<MintxLogoProps> = ({
  variant = "full",
  theme = "brand",
  size = "md",
  className,
  style,
}) => {
  const markSize = markSizes[size];
  const wordSize = wordmarkSizes[size];

  if (variant === "mark") {
    return (
      <span className={cn("logo", className)} style={style} aria-label="Mintx">
        <IconMark size={markSize} theme={theme} />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={cn("logo", className)} style={style} aria-label="Mintx">
        <Wordmark fontSize={wordSize} theme={theme} />
      </span>
    );
  }

  // full = mark + wordmark
  return (
    <span
      className={cn("logo logo--full", className)}
      style={{ gap: Math.round(markSize * 0.25), ...style }}
      aria-label="Mintx"
    >
      <IconMark size={markSize} theme={theme} />
      <Wordmark fontSize={wordSize} theme={theme} />
    </span>
  );
};

MintxLogo.displayName = "MintxLogo";

import React from "react";
import { Loader2 } from "lucide-react";

export interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
}

const sizePx: Record<string, number> = { sm: 16, md: 32, lg: 48, xl: 64 };

export const Loader: React.FC<LoaderProps> = ({ size = "md", className, label }) => {
  const px = sizePx[size] ?? 32;

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}
    >
      <style>{`
        @keyframes mintxSpin { to { transform: rotate(360deg); } }
      `}</style>
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        style={{ animation: "mintxSpin 0.8s linear infinite", color: "#00B38A" }}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.5" />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {label && (
        <p style={{ fontSize: 12, fontWeight: 600, color: "#5A706A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {label}
        </p>
      )}
    </div>
  );
};

Loader.displayName = "Loader";

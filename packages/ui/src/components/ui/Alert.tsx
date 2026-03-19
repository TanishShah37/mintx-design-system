import React from "react";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(232,239,237,0.12)",
    color: "var(--text-primary, #E8EFED)",
  },
  info: {
    background: "rgba(0,179,138,0.08)",
    border: "1px solid rgba(0,179,138,0.3)",
    color: "#3DDCBA",
  },
  success: {
    background: "rgba(34,197,94,0.08)",
    border: "1px solid rgba(34,197,94,0.3)",
    color: "#22C55E",
  },
  warning: {
    background: "rgba(251,191,36,0.08)",
    border: "1px solid rgba(251,191,36,0.3)",
    color: "#FBBF24",
  },
  destructive: {
    background: "rgba(239,68,68,0.08)",
    border: "1px solid rgba(239,68,68,0.3)",
    color: "#EF4444",
  },
};

const icons: Record<string, React.ReactNode> = {
  default: <Info size={18} />,
  info: <Info size={18} />,
  success: <CheckCircle2 size={18} />,
  warning: <AlertCircle size={18} />,
  destructive: <XCircle size={18} />,
};

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "info" | "success" | "warning" | "destructive";
  title?: string;
  description?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, description, children, style, ...props }, ref) => {
    const vs = variantStyles[variant] ?? variantStyles.default;
    return (
      <div
        ref={ref}
        role="alert"
        className={className}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          padding: "12px 16px",
          borderRadius: 14,
          ...vs,
          ...style,
        }}
        {...props}
      >
        <span style={{ color: vs.color as string, flexShrink: 0, marginTop: 1 }}>
          {icons[variant ?? "default"]}
        </span>
        <div style={{ flex: 1 }}>
          {title && (
            <p style={{ fontWeight: 600, fontSize: 14, marginBottom: description ? 2 : 0, color: vs.color as string }}>
              {title}
            </p>
          )}
          {description && (
            <p style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5, color: vs.color as string }}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

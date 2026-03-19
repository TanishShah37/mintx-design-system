import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ label, style, ...props }, ref) => {
  const [checked, setChecked] = React.useState(props.defaultChecked ?? false);
  const isChecked = props.checked !== undefined ? props.checked : checked;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: props.disabled ? "not-allowed" : "pointer", opacity: props.disabled ? 0.5 : 1 }}>
      <SwitchPrimitive.Root
        ref={ref}
        {...props}
        onCheckedChange={(v) => {
          setChecked(v);
          props.onCheckedChange?.(v);
        }}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: 44,
          height: 24,
          borderRadius: 12,
          background: isChecked ? "#00B38A" : "var(--bg-overlay, #1A2624)",
          border: `1.5px solid ${isChecked ? "#00B38A" : "var(--border-default, #2A3836)"}`,
          cursor: props.disabled ? "not-allowed" : "pointer",
          outline: "none",
          transition: "background 0.2s, border-color 0.2s",
          flexShrink: 0,
          ...style,
        }}
      >
        <SwitchPrimitive.Thumb
          style={{
            display: "block",
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            transform: isChecked ? "translateX(22px)" : "translateX(2px)",
            transition: "transform 0.2s",
          }}
        />
      </SwitchPrimitive.Root>
      {label && (
        <span style={{ fontSize: 14, color: "var(--text-primary, #E8EDE8)", fontFamily: "var(--font-body)", userSelect: "none" }}>
          {label}
        </span>
      )}
    </div>
  );
});
Switch.displayName = "Switch";

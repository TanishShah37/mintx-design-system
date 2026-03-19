import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export interface CheckBoxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  error?: string;
}

export const CheckBox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckBoxProps
>(({ label, error, style, ...props }, ref) => {
  const [checked, setChecked] = React.useState(props.defaultChecked ?? false);
  const isChecked = props.checked !== undefined ? props.checked : checked;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: props.disabled ? "not-allowed" : "pointer", opacity: props.disabled ? 0.5 : 1 }}>
        <CheckboxPrimitive.Root
          ref={ref}
          {...props}
          onCheckedChange={(v) => {
            setChecked(!!v);
            props.onCheckedChange?.(v);
          }}
          style={{
            width: 20,
            height: 20,
            borderRadius: 6,
            border: `1.5px solid ${error ? "#EF4444" : isChecked ? "#00B38A" : "var(--border-default, #2A3836)"}`,
            background: isChecked ? "#00B38A" : "var(--bg-surface, #111918)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.15s",
            outline: "none",
            cursor: props.disabled ? "not-allowed" : "pointer",
            ...style,
          }}
        >
          <CheckboxPrimitive.Indicator>
            <Check size={13} color="#fff" strokeWidth={3} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <span style={{ fontSize: 14, color: "var(--text-primary, #E8EDE8)", fontFamily: "var(--font-body)", lineHeight: 1.4, userSelect: "none" }}>
            {label}
          </span>
        )}
      </div>
      {error && (
        <p style={{ fontSize: 12, color: "#EF4444", margin: 0, paddingLeft: 30 }}>{error}</p>
      )}
    </div>
  );
});
CheckBox.displayName = "CheckBox";

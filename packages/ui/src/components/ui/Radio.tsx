import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioGroup = RadioGroupPrimitive.Root;

export interface RadioItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string;
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ label, style, ...props }, ref) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: props.disabled ? "not-allowed" : "pointer", opacity: props.disabled ? 0.5 : 1 }}>
      <RadioGroupPrimitive.Item
        ref={ref}
        {...props}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "1.5px solid var(--border-default, #2A3836)",
          background: "var(--bg-surface, #111918)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          cursor: props.disabled ? "not-allowed" : "pointer",
          outline: "none",
          transition: "border-color 0.15s",
          ...style,
        }}
      >
        <RadioGroupPrimitive.Indicator>
          <div style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#00B38A",
          }} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {label && (
        <span style={{ fontSize: 14, color: "var(--text-primary, #E8EDE8)", fontFamily: "var(--font-body)", userSelect: "none" }}>
          {label}
        </span>
      )}
    </div>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

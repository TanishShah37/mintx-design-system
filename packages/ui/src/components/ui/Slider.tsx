import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string;
  error?: string;
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ label, error, style, ...props }, ref) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
    {label && (
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary, #748A83)", fontFamily: "var(--font-body)" }}>
        {label}
      </span>
    )}
    <SliderPrimitive.Root
      ref={ref}
      {...props}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 20,
        touchAction: "none",
        userSelect: "none",
        opacity: props.disabled ? 0.5 : 1,
        cursor: props.disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      <SliderPrimitive.Track
        style={{
          position: "relative",
          height: 4,
          width: "100%",
          flexGrow: 1,
          borderRadius: 99,
          background: "var(--bg-overlay, #1A2624)",
          overflow: "hidden",
        }}
      >
        <SliderPrimitive.Range
          style={{
            position: "absolute",
            height: "100%",
            background: "linear-gradient(90deg, #00B38A, #10C9A0)",
            borderRadius: 99,
          }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        style={{
          display: "block",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#00B38A",
          border: "2.5px solid var(--bg-surface, #111918)",
          boxShadow: "0 0 0 2px rgba(0,179,138,0.3), 0 2px 8px rgba(0,0,0,0.3)",
          cursor: props.disabled ? "not-allowed" : "grab",
          outline: "none",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
      />
    </SliderPrimitive.Root>
    {error && (
      <p style={{ fontSize: 12, color: "#EF4444", margin: 0 }}>{error}</p>
    )}
  </div>
));
Slider.displayName = "Slider";

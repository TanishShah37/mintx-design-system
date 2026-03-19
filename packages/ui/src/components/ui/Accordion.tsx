import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ style, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    style={{
      borderBottom: "1px solid var(--border-subtle, rgba(255,255,255,0.06))",
      ...style,
    }}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, style, ...props }, ref) => (
  <AccordionPrimitive.Header style={{ display: "flex", margin: 0 }}>
    <AccordionPrimitive.Trigger
      ref={ref}
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "var(--font-body)",
        color: "var(--text-primary, #E8EDE8)",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        outline: "none",
        transition: "color 0.15s",
        letterSpacing: "-0.01em",
        ...style,
      }}
      className="accordion-trigger"
      {...props}
    >
      {children}
      <ChevronDown
        size={16}
        color="var(--text-secondary, #748A83)"
        style={{ flexShrink: 0, transition: "transform 0.2s" }}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, style, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    style={{ overflow: "hidden" }}
    {...props}
  >
    <div
      style={{
        paddingBottom: 16,
        paddingTop: 0,
        fontSize: 13,
        color: "var(--text-secondary, #748A83)",
        lineHeight: 1.7,
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

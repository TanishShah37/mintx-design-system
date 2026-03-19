import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ style, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    style={{
      position: "relative",
      display: "flex",
      width: 40,
      height: 40,
      flexShrink: 0,
      overflow: "hidden",
      borderRadius: "50%",
      border: "2px solid var(--bg-surface, #111918)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      ...style,
    }}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ style, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    style={{
      aspectRatio: "1",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      ...style,
    }}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ style, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    style={{
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "rgba(0,179,138,0.15)",
      color: "#00B38A",
      fontSize: "0.7em",
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      ...style,
    }}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

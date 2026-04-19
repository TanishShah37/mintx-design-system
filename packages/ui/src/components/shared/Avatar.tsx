import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border-2 border-surface shadow-md",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-xl",
        "2xl": "h-20 w-20 text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const statusVariants = cva(
  "absolute bottom-0 right-0 h-[25%] w-[25%] rounded-full border-2 border-surface shadow-sm",
  {
    variants: {
      status: {
        online: "bg-emerald-500",
        offline: "bg-neutral-400",
        away: "bg-amber-400",
        busy: "bg-red-500",
        live: "bg-purple-500 animate-pulse",
        pro: "bg-mint-500",
      },
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
  status?: VariantProps<typeof statusVariants>["status"];
}

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, alt, initials, size, status, ...props }, ref): React.JSX.Element => (
  <div className="relative inline-block">
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="aspect-square h-full w-full object-cover"
      />
      <AvatarPrimitive.Fallback
        className="flex h-full w-full items-center justify-center rounded-full bg-mint-500/15 text-mint-500 font-bold uppercase tracking-widest font-body"
      >
        {initials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
    {status && <span className={statusVariants({ status })} />}
  </div>
));

Avatar.displayName = "Avatar";

"use client";

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../tokens/cn";

export interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  side = "right",
  className,
}: DrawerProps): React.JSX.Element {
  const sideClasses = {
    right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l animate-in slide-in-from-right",
    left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r animate-in slide-in-from-left",
    top: "inset-x-0 top-0 h-auto w-full border-b animate-in slide-in-from-top",
    bottom: "inset-x-0 bottom-0 h-auto w-full border-t animate-in slide-in-from-bottom",
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=fade-in-0] data-[state=closed]:fade-out-0 transition-opacity" />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 bg-background p-6 shadow-2xl outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out duration-300 ease-out",
            "data-[state=open]:duration-300 data-[state=closed]:duration-200", // Rule §7: Exit faster than enter
            side === "bottom" && "pb-safe-offset-6", // Rule §5: Safe area compliance
            sideClasses[side],
            className
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col gap-1">
                {title && (
                  <DialogPrimitive.Title className="text-xl font-bold leading-tight tracking-tight text-foreground">
                    {title}
                  </DialogPrimitive.Title>
                )}
                {description && (
                  <DialogPrimitive.Description className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </DialogPrimitive.Description>
                )}
              </div>
              <DialogPrimitive.Close className="rounded-full opacity-70 p-2 transition-all hover:opacity-100 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-mint-500 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>
            <div className="flex-1 overflow-y-auto min-h-0">
              {children}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

Drawer.displayName = "Drawer";

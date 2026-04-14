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

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  side = "right",
  className,
}) => {
  const sideClasses = {
    right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l border-border-subtle bg-surface animate-in slide-in-from-right",
    left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r border-border-subtle bg-surface animate-in slide-in-from-left",
    top: "inset-x-0 top-0 h-auto w-full border-b border-border-subtle bg-surface animate-in slide-in-from-top",
    bottom: "inset-x-0 bottom-0 h-auto w-full border-t border-border-subtle bg-surface animate-in slide-in-from-bottom",
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 bg-surface p-sp-6 shadow-xl outline-none duration-300",
            sideClasses[side],
            className
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-sp-4">
              <div className="flex flex-col gap-1">
                {title && (
                  <DialogPrimitive.Title className="text-lg font-bold leading-none tracking-tight text-text-primary">
                    {title}
                  </DialogPrimitive.Title>
                )}
                {description && (
                  <DialogPrimitive.Description className="text-sm text-text-tertiary font-body">
                    {description}
                  </DialogPrimitive.Description>
                )}
              </div>
              <DialogPrimitive.Close className="rounded-md opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none text-text-primary">
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
};

Drawer.displayName = "Drawer";

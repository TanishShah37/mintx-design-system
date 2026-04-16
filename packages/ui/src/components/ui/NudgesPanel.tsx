import React from "react";
import { AnimatePresence } from "framer-motion";
import { Nudge, type NudgeProps } from "./Nudge";
import { cn } from "../../tokens/cn";

interface NudgesPanelProps {
  nudges: NudgeProps[];
  onClose?: (id: string) => void;
  onAction?: (id: string) => void;
  position?: "top-right" | "bottom-right" | "bottom-center";
  className?: string;
}

export function NudgesPanel({
  nudges,
  onClose,
  onAction,
  position = "bottom-right",
  className,
}: NudgesPanelProps): React.JSX.Element {
  const positionClasses = {
    "top-right": "top-6 right-6 flex-col-reverse",
    "bottom-right": "bottom-6 right-6 flex-col",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2 flex-col",
  }

  return (
    <div
      className={cn(
        "fixed z-50 flex gap-3 pointer-events-none",
        positionClasses[position],
        className
      )}
    >
      <AnimatePresence>
        {nudges.map((nudge) => (
          <div key={nudge.id} className="pointer-events-auto">
            <Nudge
              {...nudge}
              onClose={onClose}
              onAction={onAction}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

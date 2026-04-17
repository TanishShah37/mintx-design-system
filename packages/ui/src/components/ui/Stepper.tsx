import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface Step {
  id: string;
  title: string;
  description?: string;
  status: "complete" | "current" | "upcoming";
}

interface StepperProps extends BaseProps {
  steps: Step[];
  orientation?: "horizontal" | "vertical";
}

export function Stepper({
  steps,
  orientation = "horizontal",
  className,
  ...props
}: StepperProps): React.JSX.Element {
  return (
    <div className={cn(
      "flex w-full",
      orientation === "horizontal" ? "flex-row items-center justify-between" : "flex-col gap-6",
      getCommonClasses(props),
      className
    )}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={cn(
            "flex items-center gap-3",
            orientation === "vertical" ? "w-full" : "flex-1 last:flex-none"
          )}>
            {/* Step Circle */}
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
                step.status === "complete"
                  ? "bg-mint-500 border-mint-500 text-white"
                  : step.status === "current"
                  ? "border-mint-500 text-mint-600 bg-white shadow-[0_0_0_4px_rgba(0,179,138,0.1)]"
                  : "border-neutral-200 text-neutral-400 bg-white"
              )}
            >
              {step.status === "complete" ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </div>

            {/* Step Content */}
            <div className="flex flex-col min-w-0">
              <span className={cn(
                "text-sm font-bold tracking-tight",
                step.status === "current" ? "text-text-primary" : "text-text-tertiary"
              )}>
                {step.title}
              </span>
              {step.description && orientation === "vertical" && (
                <span className="text-xs text-text-tertiary mt-0.5">{step.description}</span>
              )}
            </div>

            {/* Connecting Line (Horizontal) */}
            {orientation === "horizontal" && index < steps.length - 1 && (
              <div className="flex-1 h-[2px] mx-4 bg-muted overflow-hidden">
                <div 
                  className={cn(
                    "h-full bg-mint-500 transition-all duration-500",
                    step.status === "complete" ? "w-full" : "w-0"
                  )} 
                />
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

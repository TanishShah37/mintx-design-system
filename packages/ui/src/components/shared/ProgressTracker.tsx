import React from "react";
import { cn } from "../../tokens/cn";
import { Check } from "lucide-react";

export interface ProgressTrackerStep {
  id: string;
  label: string;
  description?: string;
}

export interface ProgressTrackerProps {
  steps: ProgressTrackerStep[];
  currentStepIndex: number;
  className?: string;
}

export function ProgressTracker({
  steps,
  currentStepIndex,
  className,
}: ProgressTrackerProps): React.JSX.Element {
  return (
    <div className={cn("flex w-full justify-between items-start", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;

        return (
          <div key={step.id} className="flex flex-col items-center flex-1 relative">
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute top-5 left-1/2 w-full h-[2px] -translate-y-1/2 -z-10 transition-colors duration-500",
                  index < currentStepIndex ? "bg-primary" : "bg-muted"
                )}
              />
            )}

            {/* Step Circle */}
            <div
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm",
                isCompleted
                  ? "bg-primary border-primary text-white"
                  : isActive
                  ? "bg-background border-primary text-primary ring-4 ring-primary/10"
                  : "bg-background border-muted text-muted-foreground"
              )}
            >
              {isCompleted ? (
                <Check size={20} className="stroke-[3]" />
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </div>

            {/* Step Content */}
            <div className="mt-3 text-center px-2">
              <p
                className={cn(
                  "text-xs font-bold uppercase tracking-widest",
                  isActive ? "text-primary" : "text-foreground/60"
                )}
              >
                {step.label}
              </p>
              {step.description && (
                <p className="text-[10px] text-muted-foreground mt-1 max-w-[120px] line-clamp-2 italic">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProgressTracker.displayName = "ProgressTracker";

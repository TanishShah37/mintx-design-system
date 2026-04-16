import React from "react";
import { cn } from "../../tokens/cn";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, label, error, ...props }, ref): React.JSX.Element => {
    return (
      <div className="flex flex-col gap-sp-1.5 w-full">
        {label && (
          <label className="text-sm font-semibold text-text-primary/80 leading-none font-display">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "flex min-h-[100px] w-full rounded-xl border border-neutral-150 bg-surface px-sp-3 py-sp-2 text-sm shadow-sm transition-all placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/20 focus-visible:border-mint-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none font-body",
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

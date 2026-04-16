import React from "react";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "../../tokens/cn";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "flex items-start gap-sp-4 p-sp-4 rounded-xl border transition-all duration-200 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-surface text-neutral-900 border-neutral-150",
        info: "bg-mint-500/10 text-mint-600 border-mint-500/20",
        success: "bg-mint-500/10 text-mint-600 border-mint-500/20",
        warning: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        destructive: "bg-red-500/10 text-red-600 border-red-500/20",
        brand: "bg-mint-500 text-neutral-0 border-mint-500 shadow-[0_4px_16px_rgba(0,179,138,0.25)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const icons = {
  default: <Info size={20} />,
  info: <Info size={20} />,
  success: <CheckCircle2 size={20} />,
  warning: <AlertCircle size={20} />,
  destructive: <XCircle size={20} />,
  brand: <Info size={20} />,
};

export interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant = "default", title, description, children, ...props }, ref): React.JSX.Element => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <span className="flex-shrink-0 mt-0.5 text-current opacity-90">
          {icons[variant ?? "default"]}
        </span>
        <div className="flex-1 min-w-0">
          {title && (
            <p className="text-sm font-bold mb-sp-1 tracking-tight leading-none text-current font-display">
              {title}
            </p>
          )}
          {description && (
            <p className="text-xs opacity-90 leading-relaxed font-body text-current">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

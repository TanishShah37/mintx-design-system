import React from "react";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "../../tokens/cn";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-surface text-primary border-border",
        info: "bg-info/10 text-info border-info/20",
        success: "bg-success/10 text-success border-success/20",
        warning: "bg-warning/10 text-warning border-warning/20",
        destructive: "bg-danger/10 text-danger border-danger/20",
        brand: "bg-brand text-inverse border-brand shadow-brand",
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
            <p className="text-sm font-bold mb-1 tracking-tight leading-none text-current">
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

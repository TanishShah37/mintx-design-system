import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-2xl border p-4 [&>svg~*]:pl-9 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-green-500/50 text-green-500 [&>svg]:text-green-500 bg-green-500/5",
        warning: "border-yellow-500/50 text-yellow-500 [&>svg]:text-yellow-500 bg-yellow-500/5",
        info: "border-primary/50 text-primary [&>svg]:text-primary bg-primary/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const icons = {
  default: <Info size={20} />,
  destructive: <XCircle size={20} />,
  success: <CheckCircle2 size={20} />,
  warning: <AlertCircle size={20} />,
  info: <Info size={20} />,
};

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, description, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icons[variant || "default"]}
      {title && <h5 className="mb-1 font-bold leading-none tracking-tight">{title}</h5>}
      {description && <div className="text-sm opacity-90 leading-relaxed">{description}</div>}
      {children}
    </div>
  )
);

Alert.displayName = "Alert";

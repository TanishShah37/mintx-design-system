import React, { Component, ErrorInfo, ReactNode } from "react";
import { Alert } from "./Alert";
import { Button } from "./Button";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { cn } from "../../tokens/cn";

interface Props extends BaseProps {
  children?: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  className?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={cn(
          "flex flex-col items-center justify-center min-h-[200px] p-6 text-center bg-red-50 rounded-2xl border border-red-100",
          getCommonClasses(this.props),
          this.props.className
        )}>
          <Alert
            status="error"
            variant="ghost"
            title="Something went wrong"
            description={this.state.error?.message || "An unexpected error occurred."}
            className="mb-6 max-w-md mx-auto"
          />
          <Button variant="secondary" onClick={this.handleReset}>
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

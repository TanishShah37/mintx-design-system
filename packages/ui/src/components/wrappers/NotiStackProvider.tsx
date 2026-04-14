"use client";

import React from "react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  type ToastProps,
  type ToastActionElement,
} from "../shared/Toast";

type ToastType = "default" | "success" | "warning" | "error" | "info";

interface ToastInstance {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  action?: ToastActionElement;
}

export const NotiStackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = React.useState<ToastInstance[]>([]);

  const addToast = React.useCallback(
    (toast: Omit<ToastInstance, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((current) => [...current, { ...toast, id }]);
      return id;
    },
    []
  );

  const removeToast = React.useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastProvider>
        {children}
        {toasts.map(({ id, title, description, type, action }) => (
          <Toast
            key={id}
            variant={type === "error" ? "destructive" : (type as any)}
            onOpenChange={(open: boolean) => {
              if (!open) removeToast(id);
            }}
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
};

export const ToastContext = React.createContext<{
  addToast: (toast: Omit<ToastInstance, "id">) => string;
  removeToast: (id: string) => void;
}>({
  addToast: () => "",
  removeToast: () => {},
});

export const useToast = () => React.useContext(ToastContext);

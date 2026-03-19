import React, { useId } from "react";
import type { ToggleProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Toggle.css";

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultChecked,
  disabled = false,
  size = "md",
  label,
  onChange,
  className,
  style,
}) => {
  const uid = useId();

  return (
    <label
      htmlFor={uid}
      className={cn(
        "toggle",
        `toggle--${size}`,
        disabled && "toggle--disabled",
        className,
      )}
      style={style}
    >
      <input
        id={uid}
        type="checkbox"
        className="toggle__input"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        role="switch"
        aria-checked={checked}
      />
      <span className="toggle__track" aria-hidden="true">
        <span className="toggle__thumb" />
      </span>
      {label && <span className="toggle__label">{label}</span>}
    </label>
  );
};

Toggle.displayName = "Toggle";

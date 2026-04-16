"use client";

import React, { useState } from "react";
import { TextField, type TextFieldProps } from "./TextField";
import { Eye, EyeOff } from "lucide-react";
import { IconButton } from "./IconButton";

export interface TextFieldPasswordProps extends Omit<TextFieldProps, "rightIcon" | "type"> {}

export const TextFieldPassword = React.forwardRef<HTMLInputElement, TextFieldPasswordProps>((props, ref): React.JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        {...props}
        ref={ref}
        type={showPassword ? "text" : "password"}
        rightIcon={
          <IconButton
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => setShowPassword(!showPassword)}
            icon={showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          />
        }
      />
    );
  }
);

TextFieldPassword.displayName = "TextFieldPassword";

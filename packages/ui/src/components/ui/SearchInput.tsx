import React from "react";
import { Search } from "lucide-react";
import { TextField, TextFieldProps } from "./TextField";

export interface SearchInputProps extends Omit<TextFieldProps, "leftIcon"> {
  onSearch?: (value: string) => void;
  debounce?: number;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, debounce = 300, ...props }, ref): React.JSX.Element => {
    return (
      <TextField
        ref={ref}
        type="search"
        leftIcon={<Search className="h-4 w-4" />}
        clearable
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";

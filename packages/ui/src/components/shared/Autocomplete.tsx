"use client";

import React, { useState } from "react";
import { cn } from "../../tokens/cn";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "./Button";

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  label,
  error,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={cn("flex flex-col gap-sp-1.5 w-full", className)}>
      {label && <label className="text-sm font-semibold text-neutral-900/80 leading-none font-display">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between font-normal rounded-xl h-sp-11 border-neutral-150 bg-surface hover:bg-neutral-100 transition-all font-body",
              !value && "text-neutral-400",
              error && "border-red-500"
            )}
            rightIcon={<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-1.5" align="start">
          <div className="flex flex-col gap-1.5">
            <div className="relative flex items-center px-sp-2 py-sp-2 border-b border-neutral-150/50 mb-sp-1">
              <Search className="h-4 w-4 absolute left-sp-3 opacity-40 text-neutral-400" />
              <input
                className="w-full bg-transparent pl-8 text-sm outline-none placeholder:opacity-50"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="max-h-60 overflow-y-auto min-h-0 custom-scrollbar">
              {filteredOptions.length === 0 ? (
                <p className="p-sp-3 text-xs text-center text-neutral-400 italic font-body">No options found.</p>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onChange?.(option.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-sp-3 py-sp-2 text-sm rounded-lg transition-colors text-left font-body",
                      value === option.value ? "bg-mint-500/10 text-mint-600 font-bold" : "hover:bg-neutral-100 text-neutral-900"
                    )}
                  >
                    {option.label}
                    {value === option.value && <Check className="h-4 w-4" />}
                  </button>
                ))
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {error && <p className="text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
};

Autocomplete.displayName = "Autocomplete";

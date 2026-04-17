"use client";

import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, eachDayOfInterval, isWithinInterval, subDays } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../tokens/cn";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "./Button";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface DateRange {
  from: Date;
  to: Date;
}

export interface DateRangePickerProps extends BaseProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  label?: string;
  error?: string;
  placeholder?: string;
}

export function DateRangePicker({
  value,
  onChange,
  label,
  error,
  placeholder = "Pick a date range",
  className,
  ...props
}: DateRangePickerProps): React.JSX.Element {
  const [currentMonth, setCurrentMonth] = useState(value?.from || new Date());
  
  const presets = [
    { label: "Today", getValue: () => ({ from: new Date(), to: new Date() }) },
    { label: "Yesterday", getValue: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
    { label: "Last 7 Days", getValue: () => ({ from: subDays(new Date(), 7), to: new Date() }) },
    { label: "Last 30 Days", getValue: () => ({ from: subDays(new Date(), 30), to: new Date() }) },
    { label: "This Month", getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
  ];

  const handleDayClick = (day: Date) => {
    if (!value || (value.from && value.to)) {
      onChange?.({ from: day, to: day });
    } else if (value.from && !value.to) {
      if (day < value.from) {
        onChange?.({ from: day, to: value.from });
      } else {
        onChange?.({ from: value.from, to: day });
      }
    }
  };

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const isInRange = (day: Date) => {
    if (!value?.from || !value?.to) return false;
    return isWithinInterval(day, { start: value.from, end: value.to });
  };

  return (
    <div className={cn("flex flex-col gap-1.5 w-full", getCommonClasses(props), className)}>
      {label && <label className="text-sm font-semibold text-foreground/80 leading-none">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            className={cn(
              "w-full justify-start text-left font-normal h-11 border-border bg-background hover:bg-muted/50",
              !value && "text-muted-foreground",
              error && "border-red-500"
            )}
            leftIcon={<CalendarIcon className="mr-2 h-4 w-4" />}
          >
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "LLL dd, y")} - {format(value.to, "LLL dd, y")}
                </>
              ) : (
                format(value.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x" align="start">
          {/* Presets */}
          <div className="p-3 flex flex-col gap-1 w-full md:w-36 bg-muted/20">
            {presets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  const range = preset.getValue();
                  onChange?.(range);
                  setCurrentMonth(range.from);
                }}
                className="text-left px-2 py-1.5 text-xs font-medium rounded-md hover:bg-muted transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Calendar */}
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm tracking-tight">
                {format(currentMonth, "MMMM yyyy")}
              </h4>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" iconOnly onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                  <ChevronLeft size={16} />
                </Button>
                <Button variant="ghost" size="sm" iconOnly onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-[10px] font-bold text-center opacity-40 uppercase py-1">
                  {day}
                </div>
              ))}
              {days.map((day) => {
                const isSelected = value && (isSameDay(day, value.from) || isSameDay(day, value.to));
                const inRange = isInRange(day);
                const isCurrentMonth = isSameMonth(day, currentMonth);

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => isCurrentMonth && handleDayClick(day)}
                    className={cn(
                      "h-8 w-8 text-xs rounded-lg transition-all flex items-center justify-center relative",
                      isSelected ? "bg-mint-500 text-white font-bold shadow-sm z-10" : inRange ? "bg-mint-50 text-mint-700 rounded-none first:rounded-l-lg last:rounded-r-lg" : "hover:bg-muted",
                      !isCurrentMonth && "opacity-20 pointer-events-none"
                    )}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {error && <p className="text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

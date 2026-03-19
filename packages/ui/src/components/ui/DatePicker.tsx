import React, { useState } from "react";
import { cn } from "../../tokens/cn";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "./Button";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, eachDayOfInterval } from "date-fns";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
  error?: string;
  placeholder?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  error,
  placeholder = "Pick a date",
  className,
}) => {
  const [currentMonth, setCurrentMonth] = useState(value || new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label && <label className="text-sm font-semibold text-foreground/80 leading-none">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            className={cn(
              "w-full justify-start text-left font-normal rounded-xl h-11 border-border bg-background hover:bg-muted/50",
              !value && "text-muted-foreground",
              error && "border-red-500"
            )}
            leftIcon={<CalendarIcon className="mr-2 h-4 w-4" />}
          >
            {value ? format(value, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm tracking-tight">
                {format(currentMonth, "MMMM yyyy")}
              </h4>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                >
                  <ChevronLeft size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                >
                  <ChevronLeft className="rotate-180" size={16} />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-[10px] font-bold text-center opacity-40 uppercase py-1">
                  {day}
                </div>
              ))}
              {days.map((day: Date) => {
                const isSelected = value && isSameDay(day, value);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => {
                      onChange?.(day);
                    }}
                    className={cn(
                      "h-8 w-8 text-xs rounded-lg transition-all flex items-center justify-center",
                      isSelected ? "bg-primary text-primary-foreground font-bold shadow-md" : "hover:bg-muted text-foreground",
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
};

DatePicker.displayName = "DatePicker";

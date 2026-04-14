import React from "react";
export interface InsightData {
  tag: string;
  title: string;
  body: string;
  badges?: Array<{ label: string; variant: any }>; 
}
import { Badge } from "../ui/Badge";
import { cn } from "../../tokens/cn";

interface InsightCardProps {
  data: InsightData;
  className?: string;
  onClick?: () => void;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  data,
  className,
  onClick,
}) => (
  <div
    className={cn(
      "bg-surface border border-neutral-100 border-l-[3px] border-l-mint-400 rounded-r-lg p-sp-5 transition-all duration-300 ease-out",
      onClick && "cursor-pointer hover:shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2",
      className,
    )}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={
      onClick
        ? (e) => {
            if (e.key === "Enter" || e.key === " ") onClick();
          }
        : undefined
    }
  >
    <div className="text-[10px] font-bold uppercase tracking-wider text-mint-600 mb-sp-2">{data.tag}</div>
    <div className="text-base font-semibold text-neutral-900 leading-[1.4] mb-sp-2">{data.title}</div>
    <div className="text-sm text-neutral-600 leading-tight">{data.body}</div>
    {data.badges && data.badges.length > 0 && (
      <div className="flex flex-wrap gap-sp-2 mt-sp-3">
        {data.badges.map((b, i) => (
          <Badge key={i} variant={b.variant} size="sm">
            {b.label}
          </Badge>
        ))}
      </div>
    )}
  </div>
);

InsightCard.displayName = "InsightCard";

import React from "react";
import type { InsightData } from "../../types";
import { Badge } from "../ui/Badge";
import { cn } from "../../tokens/cn";
import "./InsightCard.css";

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
      "insight-card",
      onClick && "insight-card--interactive",
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
    <div className="insight-card__tag">{data.tag}</div>
    <div className="insight-card__title">{data.title}</div>
    <div className="insight-card__body">{data.body}</div>
    {data.badges && data.badges.length > 0 && (
      <div className="insight-card__badges">
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

import React from "react";
import type { StockData } from "../../types";
import { cn } from "../../tokens/cn";
import { PriceChange, getDirection } from "./PriceChange";
import { Sparkline } from "./Sparkline";
import "./StockCard.css";

interface StockCardProps {
  data: StockData;
  onClick?: () => void;
  className?: string;
}

export const StockCard: React.FC<StockCardProps> = ({
  data,
  onClick,
  className,
}) => {
  const direction = getDirection(data.change);

  return (
    <div
      className={cn(
        "stock-card",
        onClick && "stock-card--interactive",
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
      {/* Header */}
      <div className="stock-card__header">
        <div>
          <div className="stock-card__ticker">{data.ticker}</div>
          <div className="stock-card__name">{data.name}</div>
        </div>
        <div className="stock-card__price-block">
          <div
            className={cn(
              "stock-card__price",
              `stock-card__price--${direction}`,
            )}
          >
            ₹{data.price.toLocaleString("en-IN")}
          </div>
          <PriceChange
            value={data.change}
            percent={data.changePercent}
            direction={direction}
          />
        </div>
      </div>

      {/* Sparkline */}
      {data.sparkline && (
        <div className="stock-card__chart">
          <Sparkline data={data.sparkline} direction={direction} height={40} />
        </div>
      )}

      {/* Stats row */}
      <div className="stock-card__stats">
        {data.open !== undefined && (
          <div className="stock-card__stat">
            <div className="stock-card__stat-label">Open</div>
            <div className="stock-card__stat-val">
              {data.open.toLocaleString("en-IN")}
            </div>
          </div>
        )}
        {data.high !== undefined && (
          <div className="stock-card__stat">
            <div className="stock-card__stat-label">
              {direction === "down" ? "Low" : "High"}
            </div>
            <div className="stock-card__stat-val">
              {(direction === "down" ? data.low : data.high)?.toLocaleString(
                "en-IN",
              )}
            </div>
          </div>
        )}
        {data.volume && (
          <div className="stock-card__stat">
            <div className="stock-card__stat-label">Vol</div>
            <div className="stock-card__stat-val">{data.volume}</div>
          </div>
        )}
      </div>
    </div>
  );
};

StockCard.displayName = "StockCard";

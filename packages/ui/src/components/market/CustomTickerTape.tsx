import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../tokens/cn";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

interface CustomTickerTapeProps {
  items: TickerItem[];
  speed?: number;
  className?: string;
}

export const CustomTickerTape: React.FC<CustomTickerTapeProps> = ({
  items,
  speed = 20,
  className,
}) => {
  // Triple the items to ensure seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className={cn("relative w-full overflow-hidden bg-surface/50 backdrop-blur-sm border-y border-neutral-150 py-sp-2", className)}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 * items.length + "%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-sp-4 px-sp-8 border-r border-neutral-150 last:border-r-0"
          >
            <span className="font-bold text-sm tracking-tight">{item.symbol}</span>
            <span className="font-mono text-sm">{item.price}</span>
            <span
              className={cn(
                "flex items-center gap-sp-1 text-xs font-semibold",
                item.isPositive ? "text-mint-500" : "text-red-500"
              )}
            >
              {item.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {item.change}%
            </span>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

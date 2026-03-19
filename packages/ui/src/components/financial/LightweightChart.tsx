import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../tokens/cn";

// We'll load the library from CDN as we can't install packages easily
const LWC_URL = "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js";

interface ChartProps {
  data: any[];
  height?: number;
  width?: number;
  theme?: "light" | "dark";
  color?: string;
  className?: string;
  title?: string;
}

/**
 * Base Chart Component that handles library loading and container creation
 */
const BaseChart = ({ 
  render, 
  height = 300, 
  theme = "dark", 
  className 
}: { 
  render: (chart: any, container: HTMLElement) => void,
  height?: number,
  theme?: "light" | "dark",
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const loadScript = async () => {
      if ((window as any).LightweightCharts) {
        setIsLoaded(true);
        return;
      }

      // Check for already existing script to avoid duplicates
      let existingScript = document.getElementById("lwc-script") as HTMLScriptElement;
      if (existingScript) {
        if ((window as any).LightweightCharts) {
          setIsLoaded(true);
        } else {
          existingScript.addEventListener("load", () => setIsLoaded(true));
        }
        return;
      }

      script = document.createElement("script");
      script.src = LWC_URL;
      script.id = "lwc-script";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    };

    loadScript();

    return () => {
      // We don't remove the script itself to allow other components to use it,
      // but we clean up our specific chart instance below.
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const chartInstance = (window as any).LightweightCharts.createChart(containerRef.current, {
      layout: {
        background: { type: 'solid', color: 'transparent' },
        textColor: theme === "dark" ? "#D1D4DC" : "#0D1614",
        fontFamily: "'Inter', sans-serif",
      },
      grid: {
        vertLines: { color: theme === "dark" ? "rgba(232,239,237,0.05)" : "rgba(8,14,13,0.05)" },
        horzLines: { color: theme === "dark" ? "rgba(232,239,237,0.05)" : "rgba(8,14,13,0.05)" },
      },
      width: containerRef.current.clientWidth,
      height: height,
      timeScale: {
        borderColor: theme === "dark" ? "rgba(232,239,237,0.1)" : "rgba(8,14,13,0.1)",
      },
      rightPriceScale: {
        borderColor: theme === "dark" ? "rgba(232,239,237,0.1)" : "rgba(8,14,13,0.1)",
      },
      handleScroll: true,
      handleScale: true,
    });

    chartRef.current = chartInstance;
    render(chartInstance, containerRef.current);

    const handleResize = () => {
      if (containerRef.current && chartInstance) {
        chartInstance.applyOptions({ width: containerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartInstance) {
        chartInstance.remove();
      }
    };
  }, [isLoaded, theme, height, render]);

  return (
    <div 
      ref={containerRef} 
      className={cn("w-full relative overflow-hidden rounded-xl border border-border-subtle bg-bg-surface", className)}
      style={{ height }}
    />
  );
};

export const AreaChart = ({ data, color = "#00B38A", ...props }: ChartProps) => {
  return (
    <BaseChart 
      {...props}
      render={(chart) => {
        const areaSeries = chart.addAreaSeries({
          topColor: `${color}4D`,
          bottomColor: `${color}00`,
          lineColor: color,
          lineWidth: 2,
        });
        areaSeries.setData(data);
      }}
    />
  );
};

export const CandlestickChart = ({ data, ...props }: ChartProps) => {
  return (
    <BaseChart 
      {...props}
      render={(chart) => {
        const candlestickSeries = chart.addCandlestickSeries({
          upColor: '#00B38A',
          downColor: '#EF4444',
          borderVisible: false,
          wickUpColor: '#00B38A',
          wickDownColor: '#EF4444',
        });
        candlestickSeries.setData(data);
      }}
    />
  );
};

export const BaselineChart = ({ data, color = "#00B38A", ...props }: ChartProps) => {
  return (
    <BaseChart 
      {...props}
      render={(chart) => {
        const baselineSeries = chart.addBaselineSeries({
          topFillColor1: `${color}4D`,
          topFillColor2: `${color}00`,
          topLineColor: color,
          bottomFillColor1: 'rgba(239, 68, 68, 0)',
          bottomFillColor2: 'rgba(239, 68, 68, 0.3)',
          bottomLineColor: '#EF4444',
          lineWidth: 2,
        });
        baselineSeries.setData(data);
      }}
    />
  );
};

export const VolumeChart = ({ data, color = "#00B38A", ...props }: ChartProps) => {
  return (
    <BaseChart 
      {...props}
      render={(chart) => {
        const histogramSeries = chart.addHistogramSeries({
          color: `${color}80`,
        });
        histogramSeries.setData(data);
      }}
    />
  );
};

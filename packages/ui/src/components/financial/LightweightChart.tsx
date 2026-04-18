"use client";

import React, { useEffect, useRef, useState } from "react";
import { tokens } from "../../tokens/tokens";

const DEFAULT_CHART_COLOR = tokens.colors.charts.primary;
const SUCCESS_COLOR = tokens.colors.charts.bullish;
const DANGER_COLOR = tokens.colors.charts.bearish;

// Use a pinned version with stable API
const LWC_URL = "https://unpkg.com/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js";

interface ChartProps {
  data: any[];
  height?: number;
  theme?: "light" | "dark";
  color?: string;
  className?: string;
  title?: string;
}

let scriptPromise: Promise<void> | null = null;

const loadScript = (): Promise<void> => {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      if ((window as any).LightweightCharts) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = LWC_URL;
      script.id = "lwc-script-v4";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load LightweightCharts"));
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
};

const BaseChart = ({
  renderFn,
  height = 300,
  theme = "dark",
  className,
}: {
  renderFn: (LWT: any, chart: any) => void;
  height?: number;
  theme?: "light" | "dark";
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let chart: any = null;
    let cancelled = false;

    const init = async () => {
      try {
        await loadScript();
        if (cancelled || !containerRef.current) return;

        const LWT = (window as any).LightweightCharts;
        if (!LWT?.createChart) {
          setError("LightweightCharts not available");
          return;
        }

        // Clear any previous chart
        if (chartRef.current) {
          try { chartRef.current.remove(); } catch (_) {}
          chartRef.current = null;
        }

        chart = LWT.createChart(containerRef.current, {
          layout: {
            background: { type: "solid", color: "transparent" },
            textColor: theme === "dark" ? tokens.colors.neutral[300] : tokens.colors.neutral[600],
            fontFamily: tokens.typography.fontBody,
          },
          grid: {
            vertLines: { color: theme === "dark" ? "rgba(232,239,237,0.06)" : "rgba(8,14,13,0.06)" },
            horzLines: { color: theme === "dark" ? "rgba(232,239,237,0.06)" : "rgba(8,14,13,0.06)" },
          },
          crosshair: {
            vertLine: { color: tokens.colors.mint[300], width: 1, style: 3, labelBackgroundColor: tokens.colors.mint[500] },
            horzLine: { color: tokens.colors.mint[300], width: 1, style: 3, labelBackgroundColor: tokens.colors.mint[500] },
          },
          timeScale: {
            borderColor: theme === "dark" ? "rgba(232,239,237,0.1)" : "rgba(8,14,13,0.1)",
            timeVisible: true,
          },
          rightPriceScale: {
            borderColor: theme === "dark" ? "rgba(232,239,237,0.1)" : "rgba(8,14,13,0.1)",
          },
          width: containerRef.current.clientWidth,
          height,
        });

        chartRef.current = chart;
        renderFn(LWT, chart);

        const handleResize = () => {
          if (containerRef.current && chartRef.current) {
            chartRef.current.applyOptions({ width: containerRef.current.clientWidth });
          }
        };
        window.addEventListener("resize", handleResize);
        return handleResize;
      } catch (err: any) {
        if (!cancelled) setError(err.message ?? "Chart error");
      }
    };

    init();

    return () => {
      cancelled = true;
      if (chartRef.current) {
        try { chartRef.current.remove(); } catch (_) {}
        chartRef.current = null;
      }
    };
  }, [theme, height]);

  if (error) {
    return (
      <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--chart-bearish, var(--chart-bearish, #EF4444))", fontSize: 13, borderRadius: 12, border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)" }}>
        Chart failed to load: {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height,
        borderRadius: 12,
        overflow: "hidden",
        background: theme === "dark" ? "rgba(13,22,20,0.4)" : "rgba(245,248,247,0.8)",
        border: `1px solid ${theme === "dark" ? "rgba(232,239,237,0.08)" : "rgba(8,14,13,0.1)"}`,
      }}
    />
  );
};

export const AreaChart = ({ data, color = DEFAULT_CHART_COLOR, ...props }: ChartProps) => (
  <BaseChart
    {...props}
    renderFn={(_LWT, chart) => {
      // v4 API: addAreaSeries exists directly on chart
      const series = chart.addAreaSeries({
        topColor: `${color}4D`,
        bottomColor: `${color}00`,
        lineColor: color,
        lineWidth: 2,
      });
      series.setData(data);
    }}
  />
);

export const CandlestickChart = ({ data, ...props }: ChartProps) => (
  <BaseChart
    {...props}
    renderFn={(_LWT, chart) => {
      const series = chart.addCandlestickSeries({
        upColor: SUCCESS_COLOR,
        downColor: DANGER_COLOR,
        borderVisible: false,
        wickUpColor: SUCCESS_COLOR,
        wickDownColor: DANGER_COLOR,
      });
      series.setData(data);
    }}
  />
);

export const BaselineChart = ({ data, color = DEFAULT_CHART_COLOR, ...props }: ChartProps) => (
  <BaseChart
    {...props}
    renderFn={(_LWT, chart) => {
      const series = chart.addBaselineSeries({
        topFillColor1: `${color}4D`,
        topFillColor2: `${color}00`,
        topLineColor: color,
        bottomFillColor1: "rgba(239,68,68,0)",
        bottomFillColor2: "rgba(239,68,68,0.3)",
        bottomLineColor: DANGER_COLOR,
        lineWidth: 2,
      });
      series.setData(data);
    }}
  />
);

export const VolumeChart = ({ data, color = DEFAULT_CHART_COLOR, ...props }: ChartProps) => (
  <BaseChart
    {...props}
    renderFn={(_LWT, chart) => {
      const series = chart.addHistogramSeries({
        priceFormat: { type: "volume" },
        priceScaleId: "volume",
      });
      chart.priceScale("volume").applyOptions({
        scaleMargins: { top: 0.1, bottom: 0 },
      });
      series.setData(
        data.map((d: any) => ({
          time: d.time,
          value: d.value ?? 0,
          color: (d.value ?? 0) > 25 ? `${color}B3` : `${DANGER_COLOR}80`,
        }))
      );
    }}
  />
);

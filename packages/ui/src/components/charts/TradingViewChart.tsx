"use client";

import React, { useEffect, useRef } from "react";

interface TradingViewConfig {
  symbol?: string;
  interval?: string;
  timezone?: string;
  theme?: "light" | "dark";
  style?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  allow_symbol_change?: boolean;
  container_id: string;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  hide_side_toolbar?: boolean;
  hide_top_toolbar?: boolean;
  details?: boolean;
  hotlist?: boolean;
  calendar?: boolean;
  show_popup_button?: boolean;
  popup_width?: string;
  popup_height?: string;
  withdateranges?: boolean;
  save_image?: boolean;
  backgroundColor?: string;
  gridLineColor?: string;
}

/**
 * Advanced Real-Time Chart Widget
 */
export const AdvancedRealTimeChart = ({
  symbol = "NASDAQ:AAPL",
  interval = "D",
  theme = "dark",
  autosize = true,
  height = 500,
  ...rest
}: Partial<TradingViewConfig>) => {
  const container = useRef<HTMLDivElement>(null);
  const scriptId = `tradingview-advanced-${symbol}`;

  useEffect(() => {
    if (container.current && !document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        if (window.TradingView) {
          new window.TradingView.widget({
            autosize: autosize,
            symbol: symbol,
            interval: interval,
            timezone: "Etc/UTC",
            theme: theme,
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: container.current?.id,
            height: height,
            ...rest
          });
        }
      };
      document.head.appendChild(script);
    }
  }, [symbol, interval, theme, autosize, height, scriptId, rest]);

  return (
    <div 
      className="tradingview-widget-container" 
      style={{ height: autosize ? "100%" : height, width: "100%" }}
    >
      <div id={`tv_chart_${symbol.replace(/[^a-zA-Z0-9]/g, "_")}`} ref={container} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

/**
 * Technical Analysis Widget
 */
export const TechnicalAnalysis = ({
  symbol = "NASDAQ:AAPL",
  theme = "dark",
  width = "100%",
  height = 450,
  interval = "1D"
}: {
  symbol?: string;
  theme?: "light" | "dark";
  width?: string | number;
  height?: string | number;
  interval?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval,
        width,
        isTransparent: false,
        height,
        symbol,
        showIntervalTabs: true,
        locale: "en",
        colorTheme: theme,
        ... (theme === "dark" ? { 
           "gridLineColor": "rgba(42, 46, 57, 0)",
           "fontColor": "#d1d4dc",
           "underLineColor": "rgba(41, 98, 255, 0.3)",
           "trendLineColor": "rgba(41, 98, 255, 1)"
        } : {})
      });
      container.current.appendChild(script);
    }
  }, [symbol, interval, theme, width, height]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

/**
 * Market Overview Widget
 */
export const MarketOverview = ({
  theme = "dark",
  width = "100%",
  height = 400,
  symbols = [
    { s: "FOREXCOM:SPX500", d: "S&P 500" },
    { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
    { s: "FX_IDC:INRUSD", d: "USD/INR" },
    { s: "BITSTAMP:BTCUSD", d: "Bitcoin" }
  ]
}: {
  theme?: "light" | "dark";
  width?: string | number;
  height?: string | number;
  symbols?: { s: string; d: string }[];
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: theme,
        dateRange: "12M",
        showChart: true,
        locale: "en",
        width,
        height,
        largeChartAtBottom: false,
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        tabs: [
          {
            title: "Indices",
            symbols: symbols
          }
        ]
      });
      container.current.appendChild(script);
    }
  }, [theme, width, height, symbols]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

/**
 * Symbol Overview Mini Widget
 */
export const SymbolOverviewMini = ({
  symbol = "NASDAQ:AAPL",
  theme = "dark",
  width = "100%",
  height = 200
}: {
  symbol?: string;
  theme?: "light" | "dark";
  width?: string | number;
  height?: string | number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol,
        width,
        height,
        locale: "en",
        dateRange: "12M",
        colorTheme: theme,
        isTransparent: false,
        autosize: false,
        largeChartAtBottom: false
      });
      container.current.appendChild(script);
    }
  }, [symbol, theme, width, height]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

/**
 * Ticker Tape Widget
 */
export const TickerTape = ({
  theme = "dark",
  symbols = [
    { proName: "FOREXCOM:SPX500", title: "S&P 500" },
    { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
    { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
  ]
}: {
  theme?: "light" | "dark";
  symbols?: { proName: string; title: string }[];
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols,
        showSymbolLogo: true,
        colorTheme: theme,
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en"
      });
      container.current.appendChild(script);
    }
  }, [theme, symbols]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

declare global {
  interface Window {
    TradingView: any;
  }
}

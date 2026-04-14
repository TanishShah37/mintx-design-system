"use client";

import { useState, useEffect } from "react";
import { 
  AppHeader, 
  AppFooter, 
  Hero, 
  Ticker, 
  HowItWorks, 
  Differentiators,
  WaitlistForm,
  StatsSection,
  CommunitySection,
  ThemeToggle,
  useTheme
} from "@mintx/ui";

// ─────────────────────────────────────────────────────────────────
// DATA 
// ─────────────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    rank: "01",
    title: "Know where\nthe stock will move",
    body: "No more guess work Mintx calculates using Fibonacci retracement, the same method used by trading desks globally. You see the exact levels before the price arrives.",
    metric: "6 levels",
    metricSub: "per stock, calculated automatically",
    tag: "Support & Resistance",
    accent: "#00B38A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 17 4-4 4 4 4-4" />
      </svg>
    ),
  },
  {
    rank: "02",
    title: "Build your own\nstock screener",
    body: "Stop sorting through the NSE stocks by hand. Pick your filters (price near support, RSI oversold, FII buying) and get a focused shortlist in seconds. No formulas. No spreadsheets.",
    metric: "2,800+",
    metricSub: "NSE stocks, filtered to your criteria",
    tag: "DIY Screener",
    accent: "#3DDCBA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    rank: "03",
    title: "See where big money\nis moving",
    body: "FIIs and DIIs move markets. Mintx tracks their daily cash flows, futures positions, and bulk deals - then shows you the trend in plain numbers. No financial jargon. Just the signal.",
    metric: "₹crore",
    metricSub: "institutional flows tracked daily",
    tag: "Institutional Flows",
    accent: "#22C55E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20V8" />
        <path d="M22 4v16" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { val: "2,800+", label: "NSE Stocks", sub: "screened every day" },
  { val: "6", label: "Fib Levels", sub: "per stock, auto-calculated" },
  { val: "Live", label: "FII / DII Flows", sub: "institutional data daily" },
  { val: "One", label: "Dashboard", sub: "everything in one view" },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Search any stock or index",
    body: "Type TCS, RELIANCE, or NIFTY. Get support zones, resistance levels, momentum signals and institutional activity - instantly, no setup.",
  },
  {
    n: "02",
    title: "Filter the market to your edge",
    body: "Use the DIY screener to narrow 2,800 stocks down to 10 that match your strategy. Near support. FII buying. High momentum. Your filters, your rules.",
  },
  {
    n: "03",
    title: "Track levels and get alerted",
    body: "Log positions. Set alerts when a stock reaches a Fibonacci zone. Know before the market moves, not after it does.",
  },
];

const TICKER_ITEMS = [
  "NIFTY 50  22,547",
  "TCS  ₹3,847 | at 61.8% support",
  "FII net buy  +₹1,250 Cr today",
  "RELIANCE  ₹2,847 | watch zone",
  "HDFC  ₹1,720 | 38.2% level",
  "BANKNIFTY  trending up",
  "PCR  0.82 | bullish signal",
  "IT sector  +2.1% | outperforming",
  "INFY  ₹1,456 | below midpoint",
  "Options OI  calls heavy above 23k",
];

// ─────────────────────────────────────────────────────────────────
// THEME TOKENS 
// ─────────────────────────────────────────────────────────────────
const DARK_TOKENS = {
  bg: "#080E0D",
  t1: "#E8EFED",
  t2: "#9BACA6",
  t3: "#5A706A",
  t4: "#3A524D",
  grain: 0.038,
  scanOpacity: 0.18,
};
const LIGHT_TOKENS = {
  bg: "#F5F8F7",
  t1: "#141F1D",
  t2: "#3A524D",
  t3: "#748A83",
  t4: "#9BACA6",
  grain: 0.025,
  scanOpacity: 0.08,
};

// ─────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────
export default function ComingSoonPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 40 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) =>
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!mounted) return null;

  const tk = theme === "dark" ? DARK_TOKENS : LIGHT_TOKENS;
  const dark = theme === "dark";

  return (
    <div
      className="relative min-h-screen overflow-x-hidden transition-colors duration-500"
      style={{
        background: tk.bg,
        color: tk.t1,
        fontFamily: "DM Sans, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap');
        @keyframes ticker   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes revealUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes revealFd { from{opacity:0} to{opacity:1} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes floatA   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes floatB   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes scanLine { from{top:-1px} to{top:100vh} }
        .rev-up { animation: revealUp 0.75s cubic-bezier(0.16,1,0.3,1) both; }
        .rev-fd { animation: revealFd 0.9s ease both; }
        .blink  { animation: blink 1.1s step-end infinite; }
        .float-a{ animation: floatA 7s ease-in-out infinite; }
        .float-b{ animation: floatB 9s ease-in-out 1.5s infinite; }
      `}</style>

      {/* Background Elements */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0,179,138,${dark ? "0.045" : "0.025"}) 0%, transparent 55%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          opacity: tk.grain,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 z-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(0,179,138,${tk.scanOpacity}), transparent)`,
          animation: "scanLine 14s linear infinite",
        }}
      />

      <AppHeader 
        cta={<ThemeToggle showLabel={false} />}
      />

      <Hero
        theme={theme}
        tag="Early access • Coming soon"
        title={
          <>
            <span style={{ display: "block", color: tk.t1 }}>See where</span>
            <span style={{ display: "block", color: "#00B38A", textShadow: "0 0 80px rgba(0,179,138,0.25)" }}>
              stocks move
              <span className="blink inline-block ml-2 align-middle bg-[#00B38A]" style={{ width: "4px", height: "0.85em" }} aria-hidden />
            </span>
            <span style={{ display: "block", color: dark ? "rgba(232,239,237,0.22)" : "rgba(20,31,29,0.22)" }}>
              Wealth intelligence for every investor.
            </span>
          </>
        }
        description="Mintx maps support and resistance zones mathematically using Fibonacci retracement for every NSE stock. Build your own screener. Track institutional money. Know the market before it moves."
        features={[
          "Fibonacci retracement",
          "Support & resistance",
          "DIY screener",
          "FII / DII flows",
        ]}
        socialProof={
          <>
            <div className="flex -space-x-2">
              {["#1a4a38", "#0d3328", "#1f5c48", "#0a2820", "#165c48"].map((bg, i) => (
                <div
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2"
                  style={{
                    background: bg,
                    borderColor: tk.bg,
                    fontFamily: "Syne, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#3DDCBA",
                  }}
                >
                  {["R", "P", "A", "S", "V"][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: "12px", color: tk.t4 }}>
              <span style={{ color: tk.t2 }}>340+ investors</span> already waiting
            </span>
          </>
        }
        chips={{
          left: { label: "NSE Live", value: "NIFTY 50 | 22,547", sub: "▲ +0.87%" },
          right: { label: "FII Today", value: "+₹1,250 Cr", sub: "Net buyer | 3rd day" }
        }}
      >
        <WaitlistForm theme={theme} />
      </Hero>

      <Ticker theme={theme} items={TICKER_ITEMS} />

      <StatsSection theme={theme} stats={STATS} />

      <Differentiators 
        theme={theme}
        title="What makes Mintx different"
        items={DIFFERENTIATORS}
      />

      <HowItWorks 
        theme={theme}
        label="How it works"
        steps={HOW_IT_WORKS}
      />

      <CommunitySection 
        theme={theme}
        title={
          <>
            Shape how Indian<br />
            <span style={{ color: "#00B38A", textShadow: "0 0 40px rgba(0,179,138,0.28)" }}>retail investors</span><br />
            read the market.
          </>
        }
        description="You get early access. We get honest feedback from real traders. Together, we build something the Indian market has never had."
        perks={["Early beta access", "Direct feedback channel", "Feature vote rights", "Founding member badge"]}
      >
        <WaitlistForm theme={theme} size="sm" />
      </CommunitySection>

      <AppFooter />
    </div>
  );
}

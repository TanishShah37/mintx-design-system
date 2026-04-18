"use client";

import React, { useState, useMemo } from "react";
import { Search, Copy as CopyIcon, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";

import { 
  IconCategory, 
  IllustrationCategory, 
  IconDef, 
  IllustrationDef, 
  ICONS, 
  ILLUSTRATIONS, 
  SVGS 
} from "./AssetData";

const CATEGORY_COLORS: Record<IconCategory, { dot: string; label: string; bg: string; text: string }> = {
  navigation: { dot: "var(--mint-400, #10C9A0)", label: "Navigation", bg: "rgba(0,179,138,0.1)", text: "#3DDCBA" },
  market: { dot: "var(--chart-bullish, var(--chart-bullish, #22C55E))", label: "Market & Trading", bg: "rgba(34,197,94,0.1)", text: "var(--chart-bullish, var(--chart-bullish, #22C55E))" },
  action: { dot: "#60A5FA", label: "Actions", bg: "rgba(96,165,250,0.1)", text: "#60A5FA" },
  status: { dot: "#FBBF24", label: "Status & Feedback", bg: "rgba(251,191,36,0.1)", text: "#FBBF24" },
  social: { dot: "#A78BFA", label: "Social & Community", bg: "rgba(167,139,250,0.1)", text: "#A78BFA" },
  device: { dot: "var(--chart-bearish, var(--chart-bearish, #F87171))", label: "Device & Platform", bg: "rgba(248,113,113,0.1)", text: "var(--chart-bearish, var(--chart-bearish, #F87171))" },
  finance: { dot: "#FBBF24", label: "Finance & Analytics", bg: "rgba(251,191,36,0.1)", text: "#FBBF24" },
  academy: { dot: "#60A5FA", label: "Academy", bg: "rgba(96,165,250,0.1)", text: "#60A5FA" },
};

const ILLUS_CATEGORY_META: Record<IllustrationCategory, { label: string; color: string; bg: string; musr: string }> = {
  "empty-state": { label: "Empty States", color: "var(--mint-400, #10C9A0)", bg: "rgba(0,179,138,0.1)", musr: "MUSR-01 · MUSR-03 · MUSR-05 · MUSR-16 · MUSR-19" },
  onboarding: { label: "Onboarding Steps", color: "#3DDCBA", bg: "rgba(61,220,186,0.1)", musr: "MUSR-22" },
  "pro-upgrade": { label: "Pro Upgrade", color: "#FBBF24", bg: "rgba(251,191,36,0.1)", musr: "MUSR-04 · MUSR-16" },
  error: { label: "Error States", color: "var(--chart-bearish, var(--chart-bearish, #F87171))", bg: "rgba(248,113,113,0.1)", musr: "MUSR-02 · MUSR-09 · MUSR-18" },
  "market-status": { label: "Market Status", color: "#FBBF24", bg: "rgba(251,191,36,0.1)", musr: "MUSR-05 · MUSR-16" },
  success: { label: "Success & Celebration", color: "var(--chart-bullish, var(--chart-bullish, #22C55E))", bg: "rgba(34,197,94,0.1)", musr: "MUSR-04 · MUSR-11 · MUSR-15 · MUSR-21" },
  academy: { label: "Academy", color: "#60A5FA", bg: "rgba(96,165,250,0.1)", musr: "MUSR-11 · MUSR-15" },
  social: { label: "Social Moments", color: "#A78BFA", bg: "rgba(167,139,250,0.1)", musr: "MUSR-19 · MUSR-21" },
};

// --- Components ---

export function AssetLibrary({ 
  showHeader = true, 
  mode 
}: { 
  showHeader?: boolean, 
  mode?: "icons" | "illustrations" 
}) {
  const [activeTab, setActiveTab] = useState<"icons" | "illustrations">(mode || "icons");

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text-primary, var(--text-primary, #E8EFED))", background: "var(--bg-base, #080E0D)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(232,239,237,0.08)" }}>
      {showHeader && (
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px", borderBottom: "1px solid rgba(232,239,237,0.08)", paddingBottom: "12px" }}>
          <button 
            onClick={() => setActiveTab("icons")}
            style={{ padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", background: activeTab === "icons" ? "var(--bg-brand, var(--mint-400, #10C9A0))" : "transparent", color: activeTab === "icons" ? "var(--n-950, #001A13)" : "var(--text-tertiary)", fontWeight: 600 }}
          >
            Icons
          </button>
          <button 
            onClick={() => setActiveTab("illustrations")}
            style={{ padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", background: activeTab === "illustrations" ? "var(--bg-brand, var(--mint-400, #10C9A0))" : "transparent", color: activeTab === "illustrations" ? "var(--n-950, #001A13)" : "var(--text-tertiary)", fontWeight: 600 }}
          >
            Illustrations
          </button>
        </div>
      )}

      {activeTab === "icons" ? <IconLibrary /> : <IllustrationLibrary />}
    </div>
  );
}

function IconLibrary() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => ICONS.filter(i => i.name.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary, #5A706A)" }} />
        <input 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search icons..." 
          style={{ width: "100%", padding: "10px 12px 10px 40px", borderRadius: "10px", background: "var(--bg-surface, var(--bg-surface, #0D1614))", border: "1px solid rgba(232,239,237,0.1)", color: "#fff", outline: "none" }}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "12px" }}>
        {filtered.map(icon => (
          <AssetCard key={icon.name} name={icon.name} type="icon" />
        ))}
      </div>
    </div>
  );
}

function IllustrationLibrary() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => ILLUSTRATIONS.filter(i => i.name.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary, #5A706A)" }} />
        <input 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search illustrations..." 
          style={{ width: "100%", padding: "10px 12px 10px 40px", borderRadius: "10px", background: "var(--bg-surface, var(--bg-surface, #0D1614))", border: "1px solid rgba(232,239,237,0.1)", color: "#fff", outline: "none" }}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "16px" }}>
        {filtered.map(illus => (
          <AssetCard key={illus.id} id={illus.id} name={illus.name} type="illustration" />
        ))}
      </div>
    </div>
  );
}

function AssetCard({ name, id, type }: { name: string, id?: string, type: "icon" | "illustration" }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    const text = type === "icon" ? `import { ${name} } from 'lucide-react';` : SVGS[id!] || "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div 
      onClick={handleCopy}
      style={{ background: "var(--bg-surface, var(--bg-surface, #0D1614))", border: "1px solid rgba(232,239,237,0.08)", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer", position: "relative", transition: "all 0.2s" }}
    >
      {copied && <span style={{ position: "absolute", top: "5px", right: "5px", background: "var(--chart-bullish, var(--chart-bullish, #22C55E))", color: "#fff", fontSize: "10px", padding: "2px 6px", borderRadius: "4px" }}>Copied!</span>}
      <div style={{ height: type === "icon" ? "24px" : "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {type === "icon" ? (
          (() => {
            const Icon = (LucideIcons as any)[name];
            return Icon ? <Icon size={20} /> : null;
          })()
        ) : (
          <div dangerouslySetInnerHTML={{ __html: SVGS[id!] || "" }} style={{ transform: "scale(0.5)" }} />
        )}
      </div>
      <span style={{ fontSize: "11px", color: "var(--text-tertiary)", textAlign: "center", wordBreak: "break-all" }}>{name}</span>
    </div>
  );
}

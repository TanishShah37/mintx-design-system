import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "../../tokens/tokens";

const meta: Meta = {
  title: "Mintx Design System / Colors Exploration",
  tags: ["autodocs"],
};

export default meta;

export const AllSemanticColors: StoryObj = {
  render: () => {
    const semanticColors = tokens.colors.semantic;
    
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", padding: 20 }}>
        <h1 style={{ fontSize: 24, marginBottom: 20 }}>Semantic Color Exploration</h1>
        <p style={{ marginBottom: 40, color: "var(--text-secondary)" }}>
          Verification of the expanded color families and their behavior.
        </p>

        {Object.entries(semanticColors).map(([name, scale]) => (
          <div key={name} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, textTransform: "capitalize", marginBottom: 16 }}>{name}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 16 }}>
              {Object.entries(scale).map(([shade, hex]) => (
                <div key={shade} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div 
                    style={{ 
                      height: 60, 
                      borderRadius: 8, 
                      background: `var(--${name}-${shade}, ${hex})`,
                      border: "1px solid var(--border-subtle)"
                    }} 
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{name}-{shade}</div>
                    <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "'DM Mono', monospace" }}>{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

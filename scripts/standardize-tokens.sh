#!/bin/bash

# Standardize MintX tokens across the repo (Bash 3.2 / Mac compatible)
SEARCH_PATH="packages/ui/src"

echo "🚀 Starting Extended Token Standardization..."

replace() {
  local pattern="$1"
  local replacement="$2"
  
  files=$(grep -rli "$pattern" "$SEARCH_PATH" --exclude-dir="tokens" --exclude-dir=".storybook")
  
  if [ -n "$files" ]; then
    echo "Applying: $pattern -> $replacement"
    echo "$files" | while read -r file; do
      # Avoid double-wrapping if already tokenized
      if grep -q "var($replacement" "$file"; then
         continue
      fi
      # Special handling for CSS vs TSX if needed, but simple replacement usually works
      LC_ALL=C sed -i '' "s|$pattern|$replacement|g" "$file"
    done
  fi
}

# --- GROUP 1: FINANCIAL STATUS (The core of the request) ---
replace "#22C55E" "var(--chart-bullish, #22C55E)"
replace "#EF4444" "var(--chart-bearish, #EF4444)"
replace "#F87171" "var(--chart-bearish, #F87171)"
replace "#748A83" "var(--chart-neutral, #748A83)"

# --- GROUP 2: BRAND & NEUTRAL (Generalizing further) ---
replace "#10C9A0" "var(--mint-400, #10C9A0)"   # Primary Mint
replace "#001A13" "var(--n-950, #001A13)"     # Dark Neutral
replace "#0D1614" "var(--bg-surface, #0D1614)" # Surface BG
replace "#E8EFED" "var(--text-primary, #E8EFED)" # Text Primary
replace "#9BACA6" "var(--text-secondary, #9BACA6)"
replace "#5A706A" "var(--text-tertiary, #5A706A)"
replace "#E6FBF5" "var(--bg-brand-soft, #E6FBF5)"

# --- GROUP 3: LOW-LEVEL -> SEMANTIC ---
replace "var(--green-400)" "var(--chart-bullish)"
replace "var(--green-500)" "var(--chart-bullish)"
replace "var(--red-400)" "var(--chart-bearish)"
replace "var(--red-500)" "var(--chart-bearish)"
replace "var(--n-400)" "var(--chart-neutral)"

echo "✅ Extended standardization complete!"

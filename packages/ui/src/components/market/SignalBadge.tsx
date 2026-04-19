'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Badge } from '../ui/Badge'
import { cn } from '../../tokens/cn'

const signalVariants = cva(
  "font-black uppercase tracking-widest text-[8px] bg-opacity-10 flex items-center gap-1.5 px-2 py-0.5",
  {
    variants: {
      variant: {
        success: "bg-success text-success",
        danger: "bg-danger text-danger",
        neutral: "bg-neutral-500 text-neutral-500",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export interface SignalBadgeProps extends VariantProps<typeof signalVariants> {
  signal?: number | null
  showLabel?: boolean
  className?: string
}

/** 
 * MarketSignalBadge: Premium status indicator for asset vectors.
 * Interprets numerical signals (-1 to 1) into visual status tokens.
 */
export function SignalBadge({ signal, showLabel = true, className = '' }: SignalBadgeProps) {
  const s = signal == null ? 0 : Number(signal)
  const resolved = s > 0 ? 1 : s < 0 ? -1 : 0
  
  const config = {
    1: { variant: 'success' as const, label: 'BULLISH', icon: '▲', val: '+1' },
    '-1': { variant: 'danger' as const, label: 'BEARISH', icon: '▼', val: '-1' },
    0: { variant: 'neutral' as const, label: 'NEUTRAL', icon: '•', val: '0' },
  }[String(resolved) as '1' | '-1' | '0']

  return (
    <Badge
      color={config.variant}
      className={cn(signalVariants({ variant: config.variant }), className)}
    >
      <span className="text-[10px] leading-none" aria-hidden>{config.icon}</span>
      {showLabel && <span>{config.label} ({config.val})</span>}
    </Badge>
  )
}

SignalBadge.displayName = "MarketSignalBadge"

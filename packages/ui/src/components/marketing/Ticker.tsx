'use client'

import React from 'react'
import { cn } from '../../tokens/cn'

export interface TickerProps {
  items: string[]
  theme?: 'dark' | 'light'
  className?: string
}

export function Ticker({ items, theme = 'dark', className }: TickerProps) {
  const dark = theme === 'dark'
  const doubled = [...items, ...items]

  return (
    <div
      className={cn('overflow-hidden py-2.5', className)}
      style={{
        borderTop: `1px solid ${dark ? 'rgba(232,239,237,0.05)' : 'rgba(20,31,29,0.06)'}`,
        borderBottom: `1px solid ${dark ? 'rgba(232,239,237,0.05)' : 'rgba(20,31,29,0.06)'}`,
        background: dark ? 'rgba(13,22,20,0.7)' : 'rgba(235,243,240,0.8)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: 'ticker 46s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.05em',
              color: dark ? 'rgba(232,239,237,0.28)' : 'rgba(20,31,29,0.38)',
            }}
          >
            <span
              style={{ color: '#00B38A', opacity: 0.5, marginRight: '10px' }}
            >
              ◆
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

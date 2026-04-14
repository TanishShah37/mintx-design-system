'use client'

import React from 'react'
import { cn } from '../../tokens/cn'

export interface StatItem {
  val: string
  label: string
  sub: string
}

export interface StatsSectionProps {
  stats: StatItem[]
  theme?: 'dark' | 'light'
  className?: string
}

export function StatsSection({
  stats,
  theme = 'dark',
  className,
}: StatsSectionProps) {
  const dark = theme === 'dark'
  const divider = dark ? 'rgba(232,239,237,0.05)' : 'rgba(20,31,29,0.06)'
  const bg = dark ? '#080E0D' : '#F5F8F7'
  const t1 = dark ? '#E8EFED' : '#141F1D'
  const t4 = dark ? '#3A524D' : '#9BACA6'

  return (
    <div
      className={cn('grid grid-cols-2 lg:grid-cols-4', className)}
      style={{ gap: '1px', background: divider }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center gap-1 px-6 py-8 text-center transition-colors duration-500"
          style={{ background: bg }}
        >
          <span
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              letterSpacing: '-0.03em',
              color: t1,
            }}
          >
            {s.val}
          </span>
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#00B38A',
            }}
          >
            {s.label}
          </span>
          <span style={{ fontSize: '11px', color: t4 }}>{s.sub}</span>
        </div>
      ))}
    </div>
  )
}

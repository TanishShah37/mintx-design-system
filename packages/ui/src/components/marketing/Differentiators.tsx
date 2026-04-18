'use client'

import React from 'react'
import { cn } from '../../tokens/cn'
import { DiffCard, type Differentiator } from './DiffCard'

export interface DifferentiatorsProps {
  title: string
  items: readonly Differentiator[]
  theme?: 'dark' | 'light'
  className?: string
}

export function Differentiators({
  title,
  items,
  theme = 'dark',
  className,
}: DifferentiatorsProps) {
  const dark = theme === 'dark'
  const divider = dark ? 'rgba(232,239,237,0.05)' : 'rgba(20,31,29,0.06)'

  return (
    <section className={cn('mx-auto max-w-7xl px-6 py-20 lg:px-12', className)}>
      {/* Section label */}
      <div className="mb-10 flex items-center gap-5">
        <span
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: dark ? '#3A524D' : 'var(--text-secondary, #9BACA6)',
          }}
        >
          {title}
        </span>
        <div className="h-px flex-1" style={{ background: divider }} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <DiffCard key={item.rank} item={item} i={i} theme={theme} />
        ))}
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { cn } from '../../tokens/cn'

export interface CommunitySectionProps {
  theme?: 'dark' | 'light'
  className?: string
  title: React.ReactNode
  description: string
  label?: string
  perks?: string[]
  children?: React.ReactNode
}

export function CommunitySection({
  theme = 'dark',
  className,
  title,
  description,
  label = 'Join the founding community',
  perks = [],
  children,
}: CommunitySectionProps) {
  const dark = theme === 'dark'
  const t1 = dark ? '#E8EFED' : '#141F1D'
  const t3 = dark ? '#5A706A' : '#748A83'
  const t4 = dark ? '#3A524D' : '#9BACA6'

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 55% at 50% 100%, rgba(0,179,138,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <span
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: t4,
          }}
        >
          {label}
        </span>
        <h2
          className="mt-4"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 62px)',
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: t1,
          }}
        >
          {title}
        </h2>
        <p
          className="mx-auto mt-5 max-w-sm"
          style={{ fontSize: '15px', lineHeight: 1.7, color: t3 }}
        >
          {description}
        </p>
        <div className="mx-auto mt-8 max-w-md">{children}</div>
        {perks.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-1.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00B38A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span style={{ fontSize: '12px', color: t3 }}>{perk}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

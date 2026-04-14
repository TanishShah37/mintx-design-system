'use client'

import React, { useState } from 'react'
import { cn } from '../../tokens/cn'

export interface Differentiator {
  rank: string
  title: string
  body: string
  metric: string
  metricSub: string
  tag: string
  accent: string
  icon: React.ReactNode
}

export interface DiffCardProps {
  item: Differentiator
  i: number
  theme?: 'dark' | 'light'
}

export function DiffCard({ item, i, theme = 'dark' }: DiffCardProps) {
  const dark = theme === 'dark'
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6 transition-all duration-500 cursor-default"
      style={{
        background: dark ? 'rgba(13,22,20,0.55)' : 'rgba(255,255,255,0.75)',
        border: `1px solid ${hovered ? `${item.accent}35` : dark ? 'rgba(232,239,237,0.07)' : 'rgba(20,31,29,0.08)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: hovered ? `0 0 48px ${item.accent}0A` : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Corner glow on hover */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-[100%] transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${item.accent}14, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Tag + icon row */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300"
          style={{
            background: hovered
              ? `${item.accent}18`
              : dark
                ? 'rgba(232,239,237,0.05)'
                : 'rgba(20,31,29,0.04)',
            border: `1px solid ${hovered ? `${item.accent}30` : dark ? 'rgba(232,239,237,0.08)' : 'rgba(20,31,29,0.08)'}`,
            color: hovered ? item.accent : dark ? '#5A706A' : '#748A83',
          }}
        >
          {item.icon}
        </div>
        <span
          className="rounded-full px-2.5 py-0.5"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            background: `${item.accent}12`,
            color: item.accent,
            border: `1px solid ${item.accent}25`,
          }}
        >
          {item.tag}
        </span>
      </div>

      {/* Headline */}
      <h3
        className="leading-tight tracking-tight transition-colors duration-300"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(20px, 2.2vw, 26px)',
          color: dark ? '#E8EFED' : '#141F1D',
          whiteSpace: 'pre-line',
        }}
      >
        {item.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: 1.7,
          color: dark ? '#5A706A' : '#748A83',
        }}
      >
        {item.body}
      </p>

      {/* Metric footer */}
      <div
        className="mt-auto flex items-end justify-between pt-4"
        style={{
          borderTop: `1px solid ${dark ? 'rgba(232,239,237,0.05)' : 'rgba(20,31,29,0.06)'}`,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: 1,
              color: item.accent,
            }}
          >
            {item.metric}
          </div>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              color: dark ? '#3A524D' : '#9BACA6',
              marginTop: '4px',
            }}
          >
            {item.metricSub}
          </div>
        </div>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300"
          style={{
            border: `1px solid ${item.accent}${hovered ? '45' : '20'}`,
            color: item.accent,
            opacity: hovered ? 1 : 0.4,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
    </article>
  )
}

'use client'

import React from 'react'
import { cn } from '../../tokens/cn'

export interface HowItWorksStep {
  n: string
  title: string
  body: string
}

export interface HowItWorksProps {
  label: string
  steps: HowItWorksStep[]
  theme?: 'dark' | 'light'
  className?: string
}

export function HowItWorks({
  label,
  steps,
  theme = 'dark',
  className,
}: HowItWorksProps) {
  const dark = theme === 'dark'
  const divider = dark ? 'rgba(232,239,237,0.05)' : 'rgba(20,31,29,0.06)'

  return (
    <section
      className={cn('', className)}
      style={{
        borderTop: `1px solid ${divider}`,
        borderBottom: `1px solid ${divider}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="mb-12 flex items-center gap-5">
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: dark ? '#3A524D' : '#9BACA6',
            }}
          >
            {label}
          </span>
          <div className="h-px flex-1" style={{ background: divider }} />
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-0 top-5 hidden h-px w-full md:block"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(0,179,138,0.10), transparent)',
            }}
          />

          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col gap-4">
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  border: '1px solid rgba(0,179,138,0.2)',
                  background: 'rgba(0,179,138,0.06)',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#00B38A',
                }}
              >
                {step.n}
              </div>
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '18px',
                  lineHeight: 1.2,
                  color: dark ? '#E8EFED' : '#141F1D',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.7, color: dark ? '#5A706A' : '#748A83' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { cn } from '../../tokens/cn'
import { FibSpiral } from './FibSpiral'

export interface HeroProps {
  tag?: string
  title: React.ReactNode
  description: string
  features?: string[]
  theme?: 'dark' | 'light'
  className?: string
  children?: React.ReactNode
  socialProof?: React.ReactNode
  /** Data for floating chips */
  chips?: {
    left?: { label: string; value: string; sub: string }
    right?: { label: string; value: string; sub: string }
  }
}

export function Hero({
  tag,
  title,
  description,
  features = [],
  theme = 'dark',
  className,
  children,
  socialProof,
  chips,
}: HeroProps) {
  const dark = theme === 'dark'
  const t2 = dark ? '#9BACA6' : '#3A524D'
  const t3 = dark ? '#5A706A' : '#748A83'
  const t4 = dark ? '#3A524D' : '#9BACA6'

  return (
    <section className={cn('relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-12 lg:pt-14', className)}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* — LEFT — */}
        <div className="flex flex-col lg:max-w-2xl">
          {/* Eyebrow */}
          {tag && (
            <div className="rev-up mb-6 flex items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#00B38A',
                  background: 'rgba(0,179,138,0.08)',
                  border: '1px solid rgba(0,179,138,0.2)',
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ background: '#00B38A' }}
                  />
                  <span
                    className="relative flex h-1.5 w-1.5 rounded-full"
                    style={{ background: '#00B38A' }}
                  />
                </span>
                {tag}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1
            className="rev-up"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(44px, 6.2vw, 88px)',
              lineHeight: 0.94,
              letterSpacing: '-0.04em',
            }}
          >
            {title}
          </h1>

          {/* Sub-copy */}
          <p
            className="rev-up mt-7 max-w-[440px]"
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: t3,
            }}
          >
            {description}
          </p>

          {/* Key feature chips */}
          {features.length > 0 && (
            <div className="rev-up mt-5 flex flex-wrap gap-2 text-center">
              {features.map((f) => (
                <span
                  key={f}
                  className="rounded-full px-3 py-1"
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    color: dark ? '#9BACA6' : '#3A524D',
                    background: dark
                      ? 'rgba(232,239,237,0.05)'
                      : 'rgba(20,31,29,0.05)',
                    border: `1px solid ${dark ? 'rgba(232,239,237,0.08)' : 'rgba(20,31,29,0.09)'}`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          )}

          {/* Action children (e.g. WaitlistForm) */}
          <div className="rev-up mt-8 w-full max-w-[440px]">
            {children}
          </div>

          {/* Social proof */}
          {socialProof && (
            <div className="rev-up mt-6 flex items-center gap-3">
              {socialProof}
            </div>
          )}
        </div>

        {/* — RIGHT: spiral + chips — */}
        <div className="rev-fd relative lg:flex lg:justify-end">
          <FibSpiral theme={theme} />

          {/* Floating chips (hidden on mobile) */}
          {chips?.left && (
            <div
              className="float-a absolute -left-2 top-[22%] hidden rounded-xl px-3.5 py-2.5 lg:block"
              style={{
                border: '1px solid rgba(0,179,138,0.2)',
                background: dark
                  ? 'rgba(8,14,13,0.92)'
                  : 'rgba(245,248,247,0.95)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: t4,
                  marginBottom: '3px',
                }}
              >
                {chips.left.label}
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#00B38A',
                }}
              >
                {chips.left.value}
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  color: '#22C55E',
                }}
              >
                {chips.left.sub}
              </div>
            </div>
          )}

          {chips?.right && (
            <div
              className="float-b absolute -right-1 bottom-[22%] hidden rounded-xl px-3.5 py-2.5 lg:block"
              style={{
                border: '1px solid rgba(0,179,138,0.2)',
                background: dark
                  ? 'rgba(8,14,13,0.92)'
                  : 'rgba(245,248,247,0.95)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: t4,
                  marginBottom: '3px',
                }}
              >
                {chips.right.label}
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#3DDCBA',
                }}
              >
                {chips.right.value}
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  color: t3,
                }}
              >
                {chips.right.sub}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

import React, { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '../../tokens/cn'

export type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error'

export interface WaitlistFormProps {
  theme?: 'dark' | 'light'
  size?: 'sm' | 'md'
  className?: string
  /** Optional callback on successful signup */
  onSuccess?: (email: string, position?: number) => void
}

export function WaitlistForm({
  theme = 'dark',
  size = 'md',
  className,
  onSuccess,
}: WaitlistFormProps) {
  const dark = theme === 'dark'
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<WaitlistStatus>('idle')
  const [position, setPos] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const val = email.trim()
      if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setError('Enter a valid email address.')
        inputRef.current?.focus()
        return
      }
      setStatus('loading')
      setError(null)
      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: val }),
        })
        if (!res.ok) throw new Error()
        const data = await res.json()
        setPos(data.position ?? null)
        setStatus('success')
        onSuccess?.(val, data.position)
      } catch {
        setStatus('error')
        setError('Something went wrong. Please try again.')
      }
    },
    [email, onSuccess],
  )

  if (status === 'success') {
    return (
      <div
        className={cn(
          'flex flex-col items-center gap-3 rounded-2xl p-6 text-center',
          className,
        )}
        style={{
          background: dark ? 'rgba(0,179,138,0.05)' : 'rgba(0,179,138,0.07)',
          border: '1px solid rgba(0,179,138,0.2)',
        }}
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full"
          style={{
            background: 'rgba(0,179,138,0.12)',
            border: '1px solid rgba(0,179,138,0.3)',
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00B38A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '18px',
            color: dark ? 'var(--text-primary, #E8EFED)' : '#141F1D',
          }}
        >
          You&rsquo;re in
          {position ? ` - #${position.toLocaleString('en-IN')}` : ''}
        </p>
        <p style={{ fontSize: '13px', color: dark ? 'var(--text-tertiary, #5A706A)' : 'var(--chart-neutral, var(--chart-neutral, #748A83))' }}>
          We&rsquo;ll email{' '}
          <span style={{ color: dark ? 'var(--text-secondary, #9BACA6)' : '#3A524D' }}>{email}</span>{' '}
          when early access opens.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className={cn('w-full', className)}>
      <div
        className="flex overflow-hidden rounded-2xl transition-all duration-300"
        style={{
          border: `1px solid ${dark ? 'rgba(232,239,237,0.09)' : 'rgba(20,31,29,0.12)'}`,
          background: dark ? 'rgba(13,22,20,0.85)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 0 0 transparent',
        }}
        onFocusCapture={(e) =>
          (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,179,138,0.10)')
        }
        onBlurCapture={(e) =>
          (e.currentTarget.style.boxShadow = '0 0 0 0 transparent')
        }
      >
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError(null)
          }}
          placeholder="your@email.com"
          disabled={status === 'loading'}
          aria-label="Email for early access"
          style={{
            flex: 1,
            background: 'transparent',
            padding: size === 'sm' ? '12px 20px' : '15px 20px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: dark ? 'var(--text-primary, #E8EFED)' : '#141F1D',
            outline: 'none',
            border: 'none',
          }}
          className="placeholder:text-[var(--text-tertiary, #5A706A)]"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="m-1.5 flex shrink-0 items-center gap-2 rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50"
          style={{
            background: '#00B38A',
            padding: '10px 20px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--n-950, #001A13)',
            boxShadow: '0 4px 20px rgba(0,179,138,0.32)',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = '#3DDCBA'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 6px 28px rgba(0,179,138,0.48)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = '#00B38A'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 4px 20px rgba(0,179,138,0.32)'
          }}
        >
          {status === 'loading' ? (
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
            <>
              Get early access{' '}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
      {error && (
        <p
          className="mt-2 text-center text-xs"
          style={{ color: 'var(--chart-bearish, var(--chart-bearish, #EF4444))' }}
          role="alert"
        >
          {error}
        </p>
      )}
      <p
        className="mt-3 text-center"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          color: dark ? '#3A524D' : 'var(--text-secondary, #9BACA6)',
        }}
      >
        No spam. Unsubscribe anytime.{' '}
        <Link
          href="/privacy"
          className="underline underline-offset-2 transition-colors"
          style={{ color: dark ? 'var(--text-tertiary, #5A706A)' : 'var(--chart-neutral, var(--chart-neutral, #748A83))' }}
        >
          Privacy policy
        </Link>
      </p>
    </form>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "../../tokens/cn"

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────
export interface AppHeaderNavItem {
  label: string
  href: string
  /** Show a badge on this nav item */
  badge?: string
  /** Icon to render before the label */
  icon?: React.ReactNode
  /** Sub-items for dropdown */
  children?: Pick<AppHeaderNavItem, 'label' | 'href' | 'icon' | 'badge'>[]
}

export interface AppHeaderProps {
  /** User object - null = logged out */
  user?: {
    name: string
    email: string
    avatarUrl?: string
    plan: 'free' | 'pro'
  } | null
  /** Override navigation items */
  navItems?: AppHeaderNavItem[]
  /** Show market status bar below header */
  showMarketStatus?: boolean
  /** Callback when user clicks logout */
  onLogout?: () => void
  /** Optional right-side CTA override */
  cta?: React.ReactNode
}

// ─────────────────────────────────────────
// Constants
// ─────────────────────────────────────────
const DEFAULT_NAV: AppHeaderNavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
  },
  {
    label: 'Markets',
    href: '/market-overview',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    children: [
      { label: 'Market Overview', href: '/market-overview' },
      { label: 'Gainers & Losers', href: '/gainers-losers' },
      { label: 'Pre-Open Data', href: '/market-overview#preopen' },
      { label: 'Sector Heatmap', href: '/market-overview#heatmap' },
    ],
  },
  {
    label: 'Screener',
    href: '/technical-screener',
    badge: 'Pro',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    label: 'FII / DII',
    href: '/fii-dii',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" /><line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    ),
  },
  {
    label: 'Academy',
    href: '/academy',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
]

// ─────────────────────────────────────────
// Micro components
// ─────────────────────────────────────────

/** Mintx logomark + wordmark */
function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-[15px] font-extrabold tracking-tight text-[var(--t1)] transition-opacity hover:opacity-90"
      aria-label="Mintx home"
    >
      <svg width="26" height="26" viewBox="0 0 96 96" fill="none" aria-hidden>
        <rect width="96" height="96" rx="20" fill="var(--mint)" />
        <path d="M20 64L34 42L44 52L62 30" stroke="#001A13" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="62" cy="30" r="6" fill="#001A13" />
      </svg>
      {!collapsed && (
        <span>
          Mintx<span className="text-[var(--mint)]">.</span>
        </span>
      )}
    </Link>
  )
}

/** Badge - "Pro" or custom */
function NavBadge({ text }: { text: string }) {
  const isPro = text === 'Pro'
  return (
    <span
      className={cn(
        'ml-1 inline-flex rounded-full px-1.5 py-px font-mono text-[9px] font-bold uppercase leading-tight',
        isPro
          ? 'bg-[var(--mint-l)] text-[var(--mint-d)]'
          : 'bg-[var(--bd2)] text-[var(--t3)] border border-[var(--bd)]',
      )}
    >
      {text}
    </span>
  )
}

/** Single nav link */
function NavLink({
  item,
  active,
  onClick,
}: {
  item: AppHeaderNavItem
  active: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        'flex items-center gap-1.5 rounded-[var(--r1)] px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150',
        active
          ? 'bg-[var(--mint-l)] text-[var(--mint-d)] font-semibold'
          : 'text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)]',
      )}
    >
      {item.icon && (
        <span className={cn('opacity-70', active && 'opacity-100 text-[var(--mint)]')}>
          {item.icon}
        </span>
      )}
      {item.label}
      {item.badge && <NavBadge text={item.badge} />}
    </Link>
  )
}

/** Dropdown navigation with children */
function NavDropdown({ item, active }: { item: AppHeaderNavItem; active: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className={cn(
          'flex items-center gap-1.5 rounded-[var(--r1)] px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150',
          active || open
            ? 'bg-[var(--mint-l)] text-[var(--mint-d)] font-semibold'
            : 'text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)]',
        )}
      >
        {item.icon && <span className="opacity-70">{item.icon}</span>}
        {item.label}
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={cn('transition-transform duration-150 opacity-60', open && 'rotate-180')}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className={cn(
            'absolute left-0 top-full z-50 mt-1.5 min-w-[180px] origin-top-left',
            'rounded-[var(--r2)] border border-[var(--bd)] bg-[var(--surf)] py-1 shadow-[var(--sh2)]',
            'animate-in fade-in slide-in-from-top-2 duration-150',
          )}
        >
          {item.children?.map(child => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3.5 py-2 text-[13px] text-[var(--t2)] transition-colors hover:bg-[var(--bd2)] hover:text-[var(--t1)]"
            >
              {child.icon && <span className="opacity-60">{child.icon}</span>}
              {child.label}
              {child.badge && <NavBadge text={child.badge} />}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/** User avatar + dropdown */
function UserMenu({
  user,
  onLogout,
}: {
  user: NonNullable<AppHeaderProps['user']>
  onLogout?: () => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label="Open user menu"
        className="flex items-center gap-2 rounded-[var(--r2)] px-2 py-1.5 transition-colors hover:bg-[var(--bd2)]"
      >
        {/* Avatar */}
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--mint)] to-[var(--mint-d)] font-display text-[11px] font-bold text-[#001A13]">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name} className="h-7 w-7 rounded-full object-cover" />
          ) : (
            initials
          )}
        </div>

        {/* Pro badge */}
        {user.plan === 'pro' && (
          <span className="rounded-full bg-[var(--mint-l)] px-1.5 py-px font-mono text-[9px] font-bold text-[var(--mint-d)]">
            PRO
          </span>
        )}

        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn('opacity-40 transition-transform duration-150', open && 'rotate-180')}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className={cn(
          'absolute right-0 top-full z-50 mt-1.5 w-56 origin-top-right',
          'rounded-[var(--r3)] border border-[var(--bd)] bg-[var(--surf)] shadow-[var(--sh2)]',
          'animate-in fade-in slide-in-from-top-2 duration-150',
        )}>
          {/* User info */}
          <div className="border-b border-[var(--bd)] px-4 py-3">
            <p className="text-[13px] font-semibold text-[var(--t1)] truncate">{user.name}</p>
            <p className="text-[11px] text-[var(--t3)] truncate">{user.email}</p>
          </div>

          {/* Menu items */}
          <div className="py-1">
            {[
              { label: 'Your account', href: '/account' },
              { label: 'Portfolio tracker', href: '/portfolio' },
              { label: 'Watchlist', href: '/watchlist' },
              { label: 'Referrals & credits', href: '/referrals' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-[13px] text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Upgrade CTA for free users */}
          {user.plan === 'free' && (
            <div className="border-t border-[var(--bd)] p-2">
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="block w-full rounded-[var(--r1)] bg-[var(--mint)] px-3 py-2 text-center text-[12px] font-semibold text-[#001A13] shadow-[var(--sh-brand)] hover:bg-[var(--mint-300)] transition-colors"
              >
                Upgrade to Pro ↗
              </Link>
            </div>
          )}

          {/* Logout */}
          <div className="border-t border-[var(--bd)] py-1">
            <button
              onClick={() => { setOpen(false); onLogout?.() }}
              className="w-full px-4 py-2 text-left text-[13px] text-[var(--red)] hover:bg-[rgba(239,68,68,0.06)] transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/** Notification bell */
function NotificationBell({ count = 0 }: { count?: number }) {
  return (
    <button
      aria-label={`Notifications${count > 0 ? ` (${count} unread)` : ''}`}
      className="relative flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t3)] transition-colors hover:bg-[var(--bd2)] hover:text-[var(--t1)]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
      {count > 0 && (
        <span className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--red)] font-mono text-[8px] font-bold text-white">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  )
}

/** Market status indicator */
function MarketStatus() {
  const [status, setStatus] = useState<'open' | 'closed' | 'preopen'>('closed')

  useEffect(() => {
    // Determine market status from time (IST = UTC+5:30)
    const now = new Date()
    const istOffset = 5.5 * 60 * 60 * 1000
    const ist = new Date(now.getTime() + istOffset - now.getTimezoneOffset() * 60000)
    const day = ist.getDay()
    const hour = ist.getHours()
    const min = ist.getMinutes()
    const totalMins = hour * 60 + min

    if (day === 0 || day === 6) { setStatus('closed'); return }
    if (totalMins >= 9 * 60 && totalMins < 9 * 60 + 15) { setStatus('preopen'); return }
    if (totalMins >= 9 * 60 + 15 && totalMins < 15 * 60 + 30) { setStatus('open'); return }
    setStatus('closed')
  }, [])

  const cfg = {
    open:    { label: 'Market Open', color: 'var(--grn)', pulse: true },
    preopen: { label: 'Pre-Open',    color: 'var(--amb)', pulse: true },
    closed:  { label: 'Market Closed', color: 'var(--t4)', pulse: false },
  }[status]

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[var(--bd)] px-2.5 py-1 text-[11px] font-medium text-[var(--t3)]">
      <span className="relative flex h-1.5 w-1.5">
        {cfg.pulse && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ background: cfg.color }}
          />
        )}
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: cfg.color }} />
      </span>
      <span className="hidden sm:block">{cfg.label}</span>
    </div>
  )
}

/** Mobile hamburger menu */
function MobileMenu({
  items,
  open,
  onClose,
  user,
  onLogout,
}: {
  items: AppHeaderNavItem[]
  open: boolean
  onClose: () => void
  user: AppHeaderProps['user']
  onLogout?: () => void
}) {
  const pathname = usePathname()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[var(--surf)] lg:hidden">
      {/* Header row */}
      <div className="flex items-center justify-between border-b border-[var(--bd)] px-6 py-4">
        <Logo />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t3)] hover:bg-[var(--bd2)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-4 gap-1">
        {items.map(item => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              'flex items-center gap-2.5 rounded-[var(--r2)] px-3 py-2.5 text-sm font-medium',
              pathname === item.href || pathname.startsWith(item.href + '/')
                ? 'bg-[var(--mint-l)] text-[var(--mint-d)] font-semibold'
                : 'text-[var(--t2)] hover:bg-[var(--bd2)]',
            )}
          >
            {item.icon && <span className="opacity-70">{item.icon}</span>}
            {item.label}
            {item.badge && <NavBadge text={item.badge} />}
          </Link>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-[var(--bd)] p-4">
        {user ? (
          <div className="flex flex-col gap-2">
            <div className="px-2 text-xs text-[var(--t3)]">
              Signed in as <strong className="text-[var(--t2)]">{user.email}</strong>
            </div>
            {user.plan === 'free' && (
              <Link
                href="/pricing"
                onClick={onClose}
                className="w-full rounded-[var(--r2)] bg-[var(--mint)] py-2.5 text-center text-sm font-semibold text-[#001A13]"
              >
                Upgrade to Pro
              </Link>
            )}
            <button
              onClick={() => { onClose(); onLogout?.() }}
              className="w-full rounded-[var(--r2)] py-2 text-sm text-[var(--red)] hover:bg-[rgba(239,68,68,0.06)]"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Link
              href="/auth/login"
              onClick={onClose}
              className="w-full rounded-[var(--r2)] border border-[var(--bd)] py-2.5 text-center text-sm font-medium text-[var(--t1)]"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              onClick={onClose}
              className="w-full rounded-[var(--r2)] bg-[var(--mint)] py-2.5 text-center text-sm font-semibold text-[#001A13] shadow-[var(--sh-brand)]"
            >
              Get started free
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────
// AppHeader (main export)
// ─────────────────────────────────────────
export function AppHeader({
  user = null,
  navItems = DEFAULT_NAV,
  onLogout,
  cta,
}: AppHeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b border-[var(--bd)] bg-[var(--surf)]/90 backdrop-blur-md',
          'transition-shadow duration-150',
          scrolled && 'shadow-[var(--sh)]',
        )}
      >
        <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between gap-4 px-4 lg:px-8">

          {/* Left: Logo + nav */}
          <div className="flex items-center gap-1">
            <Logo />

            {/* Desktop nav */}
            <nav className="ml-4 hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
              {navItems.map(item =>
                item.children ? (
                  <NavDropdown
                    key={item.href}
                    item={item}
                    active={pathname === item.href || pathname.startsWith(item.href + '/')}
                  />
                ) : (
                  <NavLink
                    key={item.href}
                    item={item}
                    active={pathname === item.href || pathname.startsWith(item.href + '/')}
                  />
                ),
              )}
            </nav>
          </div>

          {/* Right: status + actions */}
          <div className="flex items-center gap-2">
            <MarketStatus />

            {user ? (
              <>
                <NotificationBell count={3} />
                <UserMenu user={user} onLogout={onLogout} />
              </>
            ) : cta ? (
              cta
            ) : (
              <div className="hidden items-center gap-2 lg:flex">
                <Link
                  href="/auth/login"
                  className="rounded-[var(--r2)] px-3 py-1.5 text-[13px] font-medium text-[var(--t2)] hover:bg-[var(--bd2)] hover:text-[var(--t1)] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="rounded-[var(--r2)] bg-[var(--mint)] px-3.5 py-1.5 text-[13px] font-semibold text-[#001A13] shadow-[var(--sh-brand)] hover:bg-[var(--mint-300)] transition-all"
                >
                  Get started
                </Link>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t2)] hover:bg-[var(--bd2)] lg:hidden transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu (portal) */}
      <MobileMenu
        items={navItems}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        user={user}
        onLogout={onLogout}
      />
    </>
  )
}

export default AppHeader

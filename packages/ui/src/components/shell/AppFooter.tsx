import Link from 'next/link'
import { cn } from "../../tokens/cn"

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────
export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface AppFooterProps {
  /** Override footer columns */
  columns?: FooterColumn[]
  /** Show SEBI disclaimer */
  showDisclaimer?: boolean
  /** Compact single-line footer mode */
  compact?: boolean
  /** Additional className */
  className?: string
}

// ─────────────────────────────────────────
// Data
// ─────────────────────────────────────────
const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Market Overview', href: '/market-overview' },
      { label: 'Stock Screener', href: '/technical-screener' },
      { label: 'FII / DII Flows', href: '/fii-dii' },
      { label: 'Options Analytics', href: '/options/NIFTY' },
      { label: 'Holidays Calendar', href: '/holidays' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Academy', href: '/academy' },
      { label: 'Fibonacci Guide', href: '/academy/fibonacci' },
      { label: 'IPO Analysis', href: '/academy/ipo' },
      { label: 'Investment Fundamentals', href: '/academy/fundamentals' },
      { label: 'Daily Insight Cards', href: '/academy#insights' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Referrals', href: '/referrals' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Status', href: 'https://status.mintx.trade', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: 'mailto:support@mintx.trade', external: true },
      { label: 'Community', href: '/community' },
    ],
  },
]

const LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const SEBI_DISCLAIMER = `Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Mintx Technologies Pvt Ltd is not registered with SEBI as an Investment Adviser or Research Analyst. The information on this platform is for educational and informational purposes only and does not constitute investment advice, a recommendation to buy or sell any security, or a solicitation of any offer to buy or sell securities.`

// ─────────────────────────────────────────
// Micro components
// ─────────────────────────────────────────

/** Social icons */
const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {[
      {
        label: 'Twitter / X',
        href: 'https://twitter.com/mintx_trade',
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        ),
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/mintx-trade',
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        ),
      },
      {
        label: 'Telegram',
        href: 'https://t.me/mintx_trade',
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.078 9.76c-.156.698-.567.868-1.148.54l-3.184-2.342-1.537 1.478c-.17.17-.313.313-.64.313l.228-3.247 5.905-5.327c.257-.228-.056-.354-.398-.126L6.68 14.413 3.54 13.44c-.683-.215-.698-.683.143-.997l10.875-4.193c.57-.213 1.068.128.904.998z" />
          </svg>
        ),
      },
      {
        label: 'YouTube',
        href: 'https://youtube.com/@mintx_trade',
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        ),
      },
    ].map(s => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="flex h-8 w-8 items-center justify-center rounded-[var(--r1)] text-[var(--t3)] transition-colors hover:bg-[var(--bd2)] hover:text-[var(--t1)]"
      >
        {s.icon}
      </a>
    ))}
  </div>
)

/** Mintx logomark + wordmark */
const FooterLogo = () => (
  <Link
    href="/"
    className="flex items-center gap-2 font-display text-[15px] font-extrabold tracking-tight text-[var(--t1)] transition-opacity hover:opacity-90"
    aria-label="Mintx home"
  >
    <svg width="26" height="26" viewBox="0 0 96 96" fill="none" aria-hidden>
      <rect width="96" height="96" rx="20" fill="var(--mint)" />
      <path d="M20 64L34 42L44 52L62 30" stroke="var(--n-950, var(--n-950, #001A13))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="62" cy="30" r="6" fill="var(--n-950, var(--n-950, #001A13))" />
    </svg>
    Mintx<span className="text-[var(--mint)]">.</span>
  </Link>
)

// ─────────────────────────────────────────
// AppFooter (main export)
// ─────────────────────────────────────────
export function AppFooter({
  columns = DEFAULT_COLUMNS,
  showDisclaimer = true,
  compact = false,
  className,
}: AppFooterProps) {

  if (compact) {
    return (
      <footer
        className={cn(
          'border-t border-[var(--bd)] bg-[var(--surf)]/60 backdrop-blur-sm',
          className,
        )}
      >
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row lg:px-8">
          <FooterLogo />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {LEGAL_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-[var(--t4)] hover:text-[var(--t2)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <span className="font-mono text-[10px] text-[var(--t4)]">
            © {new Date().getFullYear()} Mintx Technologies Pvt Ltd
          </span>
        </div>
      </footer>
    )
  }

  return (
    <footer
      className={cn(
        'border-t border-[var(--bd)] bg-[var(--surf)]/80 backdrop-blur-sm',
        className,
      )}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-8">

        {/* Top: Logo + Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">

          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1 xl:col-span-2">
            <FooterLogo />
            <p className="max-w-[240px] text-xs leading-relaxed text-[var(--t3)]">
              Institutional-grade market intelligence for Indian retail investors. SEBI-compliant. Always educational. Never advisory.
            </p>
            <SocialLinks />
            <div className="mt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--bd)] bg-[var(--bd2)] px-2.5 py-1 font-mono text-[10px] text-[var(--t4)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--grn)]" />
                NSE data | Supabase snapshots
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map(col => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--t3)]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map(link => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[13px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors"
                      >
                        {link.label}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                          <path d="M7 7h10v10M7 17 17 7" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* SEBI Disclaimer */}
        {showDisclaimer && (
          <div className="mt-10 rounded-[var(--r2)] border border-[var(--bd)] bg-[var(--bd2)] px-4 py-3">
            <p className="text-center text-[10.5px] leading-relaxed text-[var(--t4)]">
              <span className="font-semibold text-[var(--t3)]">SEBI Disclaimer - </span>
              {SEBI_DISCLAIMER}
            </p>
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--bd)] pt-6 sm:flex-row">
          <span className="font-mono text-[11px] text-[var(--t4)]">
            © {new Date().getFullYear()} Mintx Technologies Pvt Ltd | mintx.trade | mintx.in
          </span>

          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] text-[var(--t4)] hover:text-[var(--t2)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--t4)]">
            <span>Built on</span>
            <span className="rounded px-1 py-0.5 bg-[var(--bd2)] border border-[var(--bd)]">Next.js 14</span>
            <span>|</span>
            <span className="rounded px-1 py-0.5 bg-[var(--bd2)] border border-[var(--bd)]">Supabase</span>
            <span>|</span>
            <span className="rounded px-1 py-0.5 bg-[var(--bd2)] border border-[var(--bd)]">Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default AppFooter

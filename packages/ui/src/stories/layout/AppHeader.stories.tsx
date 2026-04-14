import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AppHeader, type AppHeaderProps } from '../../components/shell/AppHeader'
import React from 'react'

const mockUserFree: AppHeaderProps['user'] = {
  name: 'Priya Menon',
  email: 'priya@example.com',
  plan: 'free',
}

const mockUserPro: AppHeaderProps['user'] = {
  name: 'Rahul Sharma',
  email: 'rahul@example.com',
  avatarUrl: undefined,
  plan: 'pro',
}

const meta: Meta<typeof AppHeader> = {
  title: 'Components / AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Sticky top navigation header. Handles logged-out, free-user, and Pro-user states. Includes desktop nav with dropdown support, market status indicator, notification bell, user menu, and mobile hamburger.',
      },
    },
  },
  args: {
    onLogout: fn(),
  },
  argTypes: {
    user: {
      control: 'select',
      options: ['null', 'free', 'pro'],
      mapping: {
        null: null,
        free: mockUserFree,
        pro: mockUserPro,
      },
    },
    showMarketStatus: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          '--mint': '#00B38A',
          '--mint-l': '#E6FBF5',
          '--mint-300': '#3DDCBA',
          '--mint-d': '#006B52',
          '--bg': '#F5F8F7',
          '--surf': '#FFFFFF',
          '--elev': '#FFFFFF',
          '--t1': '#141F1D',
          '--t2': '#3A524D',
          '--t3': '#748A83',
          '--t4': '#C2CECA',
          '--bd': 'rgba(20,31,29,.10)',
          '--bd2': 'rgba(20,31,29,.06)',
          '--grn': '#22C55E',
          '--red': '#EF4444',
          '--amb': '#F59E0B',
          '--sh-brand': '0 4px 20px rgba(0,179,138,.28)',
          '--sh': '0 1px 3px rgba(0,0,0,.06)',
          '--sh2': '0 4px 16px rgba(0,0,0,.08)',
          '--r1': '6px',
          '--r2': '10px',
          '--r3': '14px',
        } as React.CSSProperties}
      >
        <Story />
        <div className="h-40 bg-[var(--bg)] px-8 py-6 text-sm text-[var(--t3)]">
          ← Page content area
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {
  name: 'Header — Logged Out',
  args: {
    user: null,
  },
}

export const FreeUser: Story = {
  name: 'Header — Free User',
  args: {
    user: mockUserFree,
  },
}

export const ProUser: Story = {
  name: 'Header — Pro User',
  args: {
    user: mockUserPro,
  },
}

export const Mobile: Story = {
  name: 'Header — Mobile',
  args: {
    user: mockUserFree,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}

export const WithCustomCTA: Story = {
  name: 'Header — Custom CTA',
  args: {
    user: null,
    cta: (
      <a
        href="/waitlist"
        className="rounded-[var(--r2)] bg-[var(--mint)] px-3.5 py-1.5 text-[13px] font-semibold text-[#001A13] shadow-[var(--sh-brand)] hover:bg-[var(--mint-300)] transition-all"
      >
        Join waitlist →
      </a>
    ),
  },
}

export const MinimalNav: Story = {
  name: 'Header — Minimal Nav',
  args: {
    user: null,
    navItems: [
      {
        label: 'Academy',
        href: '/academy',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          </svg>
        ),
      },
    ],
  },
}

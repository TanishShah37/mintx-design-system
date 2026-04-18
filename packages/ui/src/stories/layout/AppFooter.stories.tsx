import type { Meta, StoryObj } from '@storybook/react'
import { AppFooter } from '../../components/shell/AppFooter'
import React from 'react'

const meta: Meta<typeof AppFooter> = {
  title: 'Components / AppFooter',
  component: AppFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-width site footer. Two modes: full (4-column nav + SEBI disclaimer) and compact (single bar). Includes social links, legal links, and tech stack badges.',
      },
    },
  },
  argTypes: {
    showDisclaimer: {
      control: 'boolean',
      description: 'Show mandatory SEBI investment disclaimer',
    },
    compact: {
      control: 'boolean',
      description: 'Compact single-line mode (used on coming-soon and landing pages)',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          '--mint': '#00B38A',
          '--mint-l': 'var(--bg-brand-soft, #E6FBF5)',
          '--mint-300': '#3DDCBA',
          '--mint-d': '#006B52',
          '--bg': '#F5F8F7',
          '--surf': '#FFFFFF',
          '--t1': '#141F1D',
          '--t2': '#3A524D',
          '--t3': 'var(--chart-neutral, var(--chart-neutral, #748A83))',
          '--t4': '#C2CECA',
          '--bd': 'rgba(20,31,29,.10)',
          '--bd2': 'rgba(20,31,29,.06)',
          '--grn': 'var(--chart-bullish, var(--chart-bullish, #22C55E))',
          '--r1': '6px',
          '--r2': '10px',
        } as React.CSSProperties}
      >
        <div className="h-24 bg-[var(--bg)]" aria-hidden />
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Full: Story = {
  name: 'Footer — Full',
  args: {
    showDisclaimer: true,
    compact: false,
  },
}

export const Compact: Story = {
  name: 'Footer — Compact',
  args: {
    compact: true,
  },
}

export const WithoutDisclaimer: Story = {
  name: 'Footer — No Disclaimer',
  args: {
    showDisclaimer: false,
    compact: false,
  },
}

export const Mobile: Story = {
  name: 'Footer — Mobile',
  args: {
    showDisclaimer: true,
    compact: false,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}

export const CustomColumns: Story = {
  name: 'Footer — Custom Columns',
  args: {
    showDisclaimer: true,
    compact: false,
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Market Overview', href: '/market-overview' },
          { label: 'Academy', href: '/academy' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Contact', href: 'mailto:support@mintx.trade', external: true },
        ],
      },
    ],
  },
}

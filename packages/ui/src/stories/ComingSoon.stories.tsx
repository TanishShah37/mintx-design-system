import type { Meta, StoryObj } from '@storybook/react'
import ComingSoonPage from '../../../../apps/coming-soon/src/app/page'
import { AppHeader } from '../components/shell/AppHeader'
import { AppFooter } from '../components/shell/AppFooter'
import React from 'react'

const meta: Meta<typeof ComingSoonPage> = {
  title: 'Pages / ComingSoon',
  component: ComingSoonPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Pre-launch coming soon page with waitlist form, Fibonacci chart illustration, feature grid, stats, how-it-works section, and footer.',
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          '--mint': '#00B38A',
          '--mint-l': '#E6FBF5',
          '--mint-100': '#BFFAE9',
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
          '--blu': '#3B82F6',
          '--sh-brand': '0 4px 20px rgba(0,179,138,.28)',
          '--sh': '0 1px 3px rgba(0,0,0,.06)',
          '--r1': '6px',
          '--r2': '10px',
          '--r3': '14px',
          '--r4': '20px',
        } as React.CSSProperties}
        className="font-body antialiased"
      >
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ComingSoonPage>

export const Default: Story = {
  name: 'Coming Soon — Default',
}

export const Mobile: Story = {
  name: 'Coming Soon — Mobile',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}

export const Tablet: Story = {
  name: 'Coming Soon — Tablet',
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const FullLayout: Story = {
  name: 'Full Page Layout — Coming Soon',
  render: () => (
    <div
      style={{
        '--mint': '#00B38A',
        '--mint-l': '#E6FBF5',
        '--mint-100': '#BFFAE9',
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
        '--blu': '#3B82F6',
        '--sh-brand': '0 4px 20px rgba(0,179,138,.28)',
        '--sh': '0 1px 3px rgba(0,0,0,.06)',
        '--sh2': '0 4px 16px rgba(0,0,0,.08)',
        '--r1': '6px',
        '--r2': '10px',
        '--r3': '14px',
        '--r4': '20px',
      } as React.CSSProperties}
    >
      <AppHeader user={null} />
      <ComingSoonPage />
      <AppFooter showDisclaimer compact />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
  },
}

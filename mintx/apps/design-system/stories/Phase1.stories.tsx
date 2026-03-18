import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  Button, 
  Badge, 
  Input, 
  Label,
  Alert, 
  AlertTitle, 
  AlertDescription,
  Progress,
  Switch
} from "@mintx/ui";

/**
 * Phase 1 Components - Revalidated @mintx/ui Implementation
 * Now using original design system React components.
 */
const meta: Meta = {
  title: "Phase 1/Core Components",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const Buttons: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-[var(--bg-base)] rounded-[var(--r-xl)] border border-[var(--border-subtle)]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Primary Buttons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small Button</Button>
          <Button>Medium/Default</Button>
          <Button size="lg">Large Action</Button>
          <Button size="xl">Extra Large Hero</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Secondary Buttons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" size="sm">Secondary Sm</Button>
          <Button variant="secondary">Secondary Medium</Button>
          <Button variant="secondary" size="lg">Secondary Large</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Special Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="destructive">Danger Action</Button>
          <Button loading>Processing...</Button>
          <Button disabled>Disabled State</Button>
        </div>
      </div>
    </div>
  ),
};

export const Badges: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-[var(--bg-base)] rounded-[var(--r-xl)] border border-[var(--border-subtle)]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Status Badges</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="mint">Mint Brand</Badge>
          <Badge variant="green">Success</Badge>
          <Badge variant="red">Critical</Badge>
          <Badge variant="amber">Warning</Badge>
          <Badge variant="blue">Info Only</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Badge Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm" variant="mint">Small Badge</Badge>
          <Badge variant="mint">Medium Badge</Badge>
          <Badge size="lg" variant="mint">Large Tag</Badge>
        </div>
      </div>
    </div>
  ),
};

export const Forms: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--r-xl)] max-w-md shadow-[var(--shadow-md)]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Input Fields</h3>
        <div className="flex flex-col gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="e.g. Rajesh Kumar" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="rajesh@example.com" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[var(--text-xs)] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Toggles & Progress</h3>
        <div className="flex items-center gap-4">
          <Switch id="notify" />
          <Label htmlFor="notify">Email Notifications</Label>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">
            <span>Setup Progress</span>
            <span>65%</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
      </div>
    </div>
  ),
};

export const Alerts: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-[var(--bg-base)] max-w-2xl rounded-[var(--r-xl)]">
      <Alert variant="brand">
        <AlertTitle>Account Verified</AlertTitle>
        <AlertDescription>Your identity documents have been processed successfully.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Action Required</AlertTitle>
        <AlertDescription>Please update your PAN details to continue trading.</AlertDescription>
      </Alert>

      <Alert variant="danger">
        <AlertTitle>Transaction Failed</AlertTitle>
        <AlertDescription>Unable to process payment. Insufficient funds in linked account.</AlertDescription>
      </Alert>
    </div>
  ),
};

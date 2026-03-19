import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/Dialog";
import { Button } from "../../components/ui/Button";
import { Alert } from "../../components/ui/Alert";
import { Progress } from "../../components/ui/Progress";
import { Skeleton } from "../../components/ui/Skeleton";
import React from "react";

const meta: Meta = {
  title: "UI/Feedback",
  tags: ["autodocs"],
};
export default meta;

export const AlertVariants: StoryObj = {
  name: "Alert",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
      <Alert variant="info" title="Market Update" description="Trading will be halted for 15 minutes due to circuit breaker." />
      <Alert variant="success" title="Order Executed" description="Buy 100 RELIANCE @ ₹2450.00 successful." />
      <Alert variant="warning" title="KYC Pending" description="Please complete your KYC to avoid account restrictions." />
      <Alert variant="destructive" title="System Error" description="Unable to connect to live data stream. Retrying..." />
    </div>
  ),
};

export const ProgressVariants: StoryObj = {
  name: "Progress",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 400 }}>
      <Progress value={75} label="Portfolio Completion" showValue color="brand" />
      <Progress value={45} label="Risk Exposure" showValue color="amber" size="md" />
      <Progress value={90} label="Capital Deployed" showValue color="green" />
      <Progress value={20} label="Available Cash" showValue color="blue" size="xs" />
      <Progress value={60} color="brand" size="sm" />
    </div>
  ),
};

export const SkeletonVariants: StoryObj = {
  name: "Skeleton",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
      <Skeleton style={{ height: 24, width: "60%" }} />
      <Skeleton style={{ height: 16, width: "100%" }} />
      <Skeleton style={{ height: 16, width: "80%" }} />
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Skeleton style={{ width: 48, height: 48, borderRadius: "50%" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <Skeleton style={{ height: 14, width: "70%" }} />
          <Skeleton style={{ height: 12, width: "50%" }} />
        </div>
      </div>
    </div>
  ),
};

export const DialogDemo: StoryObj = {
  name: "Dialog",
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Trade Order</DialogTitle>
          <DialogDescription>
            You are about to place a BUY order for 100 shares of RELIANCE at ₹2,450.00. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: "8px 0" }}>
          <Alert variant="warning" title="Market Risk" description="Stock prices fluctuate. Please review before confirming." />
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Confirm Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

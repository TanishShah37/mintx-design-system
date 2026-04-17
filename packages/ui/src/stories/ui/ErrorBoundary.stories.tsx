import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBoundary } from "../../components/ui/ErrorBoundary";
import { Card } from "../../components/ui/Card";
import { Alert } from "../../components/ui/Alert";
import React, { useState } from "react";

const meta: Meta<typeof ErrorBoundary> = {
  title: "UI/ErrorBoundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

const CrashingComponent = () => {
  throw new Error("Simulated runtime error in dashboard widget.");
};

const ErrorTrigger = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) return <CrashingComponent />;

  return (
    <Card variant="outlined" padding="lg" className="flex flex-col items-center justify-center gap-4 h-[250px]">
      <h3 className="font-bold">Stable Component</h3>
      <p className="text-sm opacity-50">This widget is running normally.</p>
      <button 
        onClick={() => setShouldCrash(true)}
        className="text-xs text-red-500 hover:underline font-bold"
      >
        Force Crash (Trigger Boundary)
      </button>
    </Card>
  );
};

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <ErrorBoundary>
        <ErrorTrigger />
      </ErrorBoundary>
    </div>
  ),
};

export const CustomFallback: Story = {
  render: () => (
    <div className="max-w-md">
      <ErrorBoundary 
        fallback={
          <Alert 
            status="error" 
            variant="solid" 
            title="Widget Unavailable" 
            description="We failed to load this specific panel. The rest of your dashboard remains safe." 
          />
        }
      >
        <ErrorTrigger />
      </ErrorBoundary>
    </div>
  ),
};

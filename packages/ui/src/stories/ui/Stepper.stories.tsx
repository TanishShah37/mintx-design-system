import type { Meta, StoryObj } from "@storybook/react";
import { Stepper, type Step } from "../../components/ui/Stepper";
import React from "react";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps: Step[] = [
  { id: "1", title: "KYC Details", status: "complete" },
  { id: "2", title: "Bank Verification", status: "current" },
  { id: "3", title: "E-Sign", status: "upcoming" },
  { id: "4", title: "Allocation", status: "upcoming" },
];

export const Horizontal: Story = {
  args: {
    steps,
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    steps: [
      { id: "1", title: "Account Created", description: "Successfully verified email and phone.", status: "complete" },
      { id: "2", title: "PAN Verification", description: "Verifying your documents with SEBI records.", status: "current" },
      { id: "3", title: "Bank Mandate", description: "Setup auto-debit for your monthly SIPs.", status: "upcoming" },
    ],
    orientation: "vertical",
  },
};

export const Progressing: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(1);
    
    const dynamicSteps: Step[] = [
      { id: "1", title: "Profile", status: currentStep > 1 ? "complete" : currentStep === 1 ? "current" : "upcoming" },
      { id: "2", title: "Experience", status: currentStep > 2 ? "complete" : currentStep === 2 ? "current" : "upcoming" },
      { id: "3", title: "Agreement", status: currentStep > 3 ? "complete" : currentStep === 3 ? "current" : "upcoming" },
    ];

    return (
      <div className="space-y-8">
        <Stepper steps={dynamicSteps} />
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            className="px-3 py-1 bg-neutral-100 rounded text-xs font-bold"
          >
            Back
          </button>
          <button 
            onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
            className="px-3 py-1 bg-mint-500 text-white rounded text-xs font-bold"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
};

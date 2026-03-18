import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@mintx/ui";
import { Info, CheckCircle2, AlertTriangle, XCircle, Sparkles } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Core/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger", "brand"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 480 }}>
      <Alert variant="info">
        <Info className="w-4 h-4" />
        <div>
          <AlertTitle>Market Update</AlertTitle>
          <AlertDescription>NIFTY 50 is trading near day high. FII buying above ₹2,000 Cr.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="success">
        <CheckCircle2 className="w-4 h-4" />
        <div>
          <AlertTitle>Watchlist Updated</AlertTitle>
          <AlertDescription>RELIANCE added to your watchlist successfully.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="warning">
        <AlertTriangle className="w-4 h-4" />
        <div>
          <AlertTitle>Session Expiring</AlertTitle>
          <AlertDescription>Your session will expire in 5 minutes. Data refresh will pause.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="danger">
        <XCircle className="w-4 h-4" />
        <div>
          <AlertTitle>API Error</AlertTitle>
          <AlertDescription>Failed to fetch market data. Retrying in 15 seconds.</AlertDescription>
        </div>
      </Alert>
      <Alert variant="brand">
        <Sparkles className="w-4 h-4" />
        <div>
          <AlertTitle>Pro Feature</AlertTitle>
          <AlertDescription>Upgrade to Pro for real-time institutional flow data and AI insights.</AlertDescription>
        </div>
      </Alert>
    </div>
  ),
};

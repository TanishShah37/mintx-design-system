import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label, Textarea } from "@mintx/ui";
import { Search, Mail } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Core/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <Label>Email Address</Label>
        <Input type="email" placeholder="you@example.com" style={{ marginTop: 4 }} />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" placeholder="Enter password" style={{ marginTop: 4 }} />
      </div>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Label>Email</Label>
      <Input type="email" error placeholder="Invalid email" style={{ marginTop: 4 }} />
      <span style={{ fontSize: 11, color: "var(--red-500)", marginTop: 4, display: "block" }}>Please enter a valid email address</span>
    </div>
  ),
};

export const TextareaStory: Story = {
  name: "Textarea",
  render: () => (
    <div style={{ width: 360 }}>
      <Label>Description</Label>
      <Textarea placeholder="Write your analysis..." style={{ marginTop: 4 }} />
    </div>
  ),
};

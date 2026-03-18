import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mintx/ui";
import { Send, ArrowRight, Download, Plus, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "ghost", "destructive", "outline", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "xl", "icon"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { variant: "default", children: "Join Waitlist" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Learn More" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Cancel" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete Account" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "View Details" },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button><Send className="w-4 h-4" /> Send</Button>
      <Button variant="secondary"><Download className="w-4 h-4" /> Download</Button>
      <Button variant="ghost"><Plus className="w-4 h-4" /> Add</Button>
      <Button variant="destructive"><Trash2 className="w-4 h-4" /> Delete</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Submitting..." },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="default" disabled>Disabled</Button>
        <Button variant="default" loading>Loading</Button>
      </div>
    </div>
  ),
};

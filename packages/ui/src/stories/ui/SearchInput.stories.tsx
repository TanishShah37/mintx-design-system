import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "../../components/ui/SearchInput";
import React from "react";

const meta: Meta<typeof SearchInput> = {
  title: "UI/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: "Search for stocks, indices...",
    className: "max-w-md",
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-md">
      <SearchInput placeholder="Loading state..." loading />
      <SearchInput placeholder="Small search..." size="sm" />
      <SearchInput placeholder="Large search..." size="lg" />
      <SearchInput placeholder="Disabled search..." disabled defaultValue="NIFTY 50" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Global Search",
    placeholder: "Type to search...",
    helper: "Search across assets, news and help articles",
    className: "max-w-md",
  },
};

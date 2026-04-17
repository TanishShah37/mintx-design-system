import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "../../components/ui/EmptyState";
import { FileQuestion, Plus, BarChart3, BellOff } from "lucide-react";
import React from "react";

const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No data found",
    description: "Try adjusting your search or filters to find what you're looking for.",
  },
};

export const WithAction: Story = {
  args: {
    title: "No Watchlists",
    description: "Create your first watchlist to stay updated on your favorite stocks.",
    icon: <BarChart3 className="h-8 w-8 text-mint-500" />,
    action: {
      label: "Create Watchlist",
      onClick: () => alert("Creating watchlist..."),
    },
  },
};

export const Notifications: Story = {
  args: {
    title: "All Caught Up!",
    description: "You have no new notifications at the moment.",
    icon: <BellOff className="h-8 w-8 text-neutral-400" />,
  },
};

export const SearchResults: Story = {
  args: {
    title: "No matching stocks",
    description: "We couldn't find any results for 'XYZABC'. Check for typos or search for a different symbol.",
    icon: <Plus className="h-8 w-8 text-neutral-400 rotate-45" />,
    action: {
      label: "Clear Search",
      onClick: () => alert("Clearing search..."),
    },
  },
};

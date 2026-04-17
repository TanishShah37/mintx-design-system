import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "../../components/ui/DateRangePicker";
import { subDays, addDays } from "date-fns";
import React, { useState } from "react";

const meta: Meta<typeof DateRangePicker> = {
  title: "UI/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const InteractionTemplate = ({ ...args }) => {
  const [range, setRange] = useState<{ from: Date; to: Date } | undefined>(args.value);
  return (
    <div className="max-w-md">
      <DateRangePicker 
        {...args} 
        value={range} 
        onChange={setRange} 
      />
      {range?.from && (
        <p className="mt-4 text-xs text-neutral-500 font-mono">
          Selected: {range.from.toLocaleDateString()} - {range.to?.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    label: "Transaction History Range",
    placeholder: "Select date range",
  },
};

export const Preselected: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    label: "Comparison Period",
    value: {
      from: subDays(new Date(), 7),
      to: new Date(),
    },
  },
};

export const WithError: Story = {
  render: (args) => <InteractionTemplate {...args} />,
  args: {
    label: "Reporting Period",
    error: "Invalid date range selected for historical data",
  },
};

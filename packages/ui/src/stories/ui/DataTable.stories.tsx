import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type ColumnDef } from "../../components/ui/DataTable";
import { Badge } from "../../components/ui/Badge";
import { Progress } from "../../components/ui/Progress";

interface Transaction {
  id: string;
  asset: string;
  type: "buy" | "sell";
  amount: string;
  status: "completed" | "pending" | "failed";
  date: string;
  risk: number; // 0-100
  isHighlight?: boolean;
}

const meta: Meta<typeof DataTable<Transaction>> = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<Transaction>>;

const columns: ColumnDef<Transaction>[] = [
  {
    id: "asset",
    header: "Asset",
    accessorKey: "asset",
    sortable: true,
  },
  {
    id: "type",
    header: "Type",
    accessorKey: "type",
    cell: (item) => (
      <span className={item.type === "buy" ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
        {item.type.toUpperCase()}
      </span>
    ),
    sortable: true,
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
    sortable: true,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: (item) => {
      const variants: Record<string, "green" | "amber" | "red" | "neutral"> = {
        completed: "green",
        pending: "amber",
        failed: "red",
      };
      return <Badge variant={variants[item.status] || "neutral"} size="sm">{item.status}</Badge>;
    },
  },
  {
    id: "risk",
    header: "Risk Score",
    accessorKey: "risk",
    cell: (item) => (
      <div className="flex items-center gap-2 min-w-[100px]">
        <Progress value={item.risk} className="h-1.5" color={item.risk > 70 ? "red" : item.risk > 30 ? "amber" : "brand"} />
        <span className="text-[11px] font-mono text-text-tertiary">{item.risk}%</span>
      </div>
    ),
    sortable: true,
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    sortable: true,
  },
];

const data: Transaction[] = [
  { id: "1", asset: "RELIANCE", type: "buy", amount: "₹24,500", status: "completed", date: "2024-03-12", risk: 24, isHighlight: true },
  { id: "2", asset: "TCS", type: "sell", amount: "₹12,200", status: "completed", date: "2024-03-11", risk: 12 },
  { id: "3", asset: "INFY", type: "buy", amount: "₹8,400", status: "pending", date: "2024-03-11", risk: 45 },
  { id: "4", asset: "ZOMATO", type: "buy", amount: "₹1,200", status: "completed", date: "2024-03-10", risk: 85 },
  { id: "5", asset: "HDFCBANK", type: "sell", amount: "₹45,000", status: "failed", date: "2024-03-09", risk: 15 },
  { id: "6", asset: "ADANIENT", type: "buy", amount: "₹92,000", status: "completed", date: "2024-03-08", risk: 92 },
];

export const Default: Story = {
  args: {
    columns,
    data,
    searchKey: "asset",
    searchPlaceholder: "Search by asset...",
  },
};

export const WithHighlight: Story = {
  args: {
    columns,
    data,
    searchKey: "asset",
    highlightKey: "isHighlight",
  },
};

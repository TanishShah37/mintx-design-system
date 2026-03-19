export type IconCategory = "navigation" | "market" | "action" | "status" | "social" | "device" | "finance" | "academy";
export type IllustrationCategory = "empty-state" | "onboarding" | "pro-upgrade" | "error" | "market-status" | "success" | "academy" | "social";

export interface IconDef {
  name: string;
  category: IconCategory;
  musrStories: string[];
}

export interface IllustrationDef {
  id: string;
  name: string;
  use: string;
  category: IllustrationCategory;
  musrStories: string[];
  tags: string[];
}

export const ICONS: IconDef[] = [
  {
    "name": "Home",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-02"
    ]
  },
  {
    "name": "LayoutDashboard",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Menu",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-02"
    ]
  },
  {
    "name": "X",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Search",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-08",
      "MUSR-16"
    ]
  },
  {
    "name": "Bell",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-03"
    ]
  },
  {
    "name": "BellOff",
    "category": "navigation",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "User",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-02"
    ]
  },
  {
    "name": "Users",
    "category": "navigation",
    "musrStories": [
      "MUSR-14",
      "MUSR-19"
    ]
  },
  {
    "name": "Settings",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "LogOut",
    "category": "navigation",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "ChevronDown",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ChevronRight",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ChevronLeft",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ArrowLeft",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ArrowRight",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-22"
    ]
  },
  {
    "name": "Slash",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "SlidersHorizontal",
    "category": "navigation",
    "musrStories": [
      "MUSR-16",
      "MUSR-20"
    ]
  },
  {
    "name": "ExternalLink",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Grid2X2",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "List",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "PanelLeft",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Compass",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Bookmark",
    "category": "navigation",
    "musrStories": [
      "MUSR-01",
      "MUSR-05"
    ]
  },
  {
    "name": "MoreHorizontal",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "MoreVertical",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Pin",
    "category": "navigation",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Maximize2",
    "category": "navigation",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "TrendingUp",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-13",
      "MUSR-16"
    ]
  },
  {
    "name": "TrendingDown",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-13",
      "MUSR-16"
    ]
  },
  {
    "name": "BarChart2",
    "category": "market",
    "musrStories": [
      "MUSR-16",
      "MUSR-17"
    ]
  },
  {
    "name": "BarChart4",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "LineChart",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "AreaChart",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "PieChart",
    "category": "market",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "CandlestickChart",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Activity",
    "category": "market",
    "musrStories": [
      "MUSR-09",
      "MUSR-16"
    ]
  },
  {
    "name": "Percent",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "IndianRupee",
    "category": "market",
    "musrStories": [
      "MUSR-04",
      "MUSR-06",
      "MUSR-13"
    ]
  },
  {
    "name": "DollarSign",
    "category": "market",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "ArrowUpRight",
    "category": "market",
    "musrStories": [
      "MUSR-13",
      "MUSR-05"
    ]
  },
  {
    "name": "ArrowDownRight",
    "category": "market",
    "musrStories": [
      "MUSR-13",
      "MUSR-05"
    ]
  },
  {
    "name": "Minus",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "Wallet",
    "category": "market",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "Briefcase",
    "category": "market",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Building2",
    "category": "market",
    "musrStories": [
      "MUSR-13",
      "MUSR-17"
    ]
  },
  {
    "name": "Scale",
    "category": "market",
    "musrStories": [
      "MUSR-13"
    ]
  },
  {
    "name": "Layers",
    "category": "market",
    "musrStories": [
      "MUSR-17"
    ]
  },
  {
    "name": "Zap",
    "category": "market",
    "musrStories": [
      "MUSR-03",
      "MUSR-20"
    ]
  },
  {
    "name": "Target",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-14"
    ]
  },
  {
    "name": "Eye",
    "category": "market",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "EyeOff",
    "category": "market",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "Star",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "Clock",
    "category": "market",
    "musrStories": [
      "MUSR-01",
      "MUSR-08"
    ]
  },
  {
    "name": "Calendar",
    "category": "market",
    "musrStories": [
      "MUSR-05",
      "MUSR-08"
    ]
  },
  {
    "name": "Globe",
    "category": "market",
    "musrStories": [
      "MUSR-08",
      "MUSR-17"
    ]
  },
  {
    "name": "Newspaper",
    "category": "market",
    "musrStories": [
      "MUSR-05"
    ]
  },
  {
    "name": "Hash",
    "category": "market",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Gauge",
    "category": "market",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Plus",
    "category": "action",
    "musrStories": [
      "MUSR-01",
      "MUSR-04"
    ]
  },
  {
    "name": "Pencil",
    "category": "action",
    "musrStories": [
      "MUSR-01",
      "MUSR-08"
    ]
  },
  {
    "name": "Trash2",
    "category": "action",
    "musrStories": [
      "MUSR-01",
      "MUSR-21"
    ]
  },
  {
    "name": "Save",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Copy",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Download",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Upload",
    "category": "action",
    "musrStories": [
      "MUSR-08"
    ]
  },
  {
    "name": "Share2",
    "category": "action",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "RefreshCw",
    "category": "action",
    "musrStories": [
      "MUSR-08",
      "MUSR-09"
    ]
  },
  {
    "name": "Filter",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "SortAsc",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "QrCode",
    "category": "action",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "Link2",
    "category": "action",
    "musrStories": [
      "MUSR-08",
      "MUSR-21"
    ]
  },
  {
    "name": "Send",
    "category": "action",
    "musrStories": [
      "MUSR-03",
      "MUSR-19"
    ]
  },
  {
    "name": "Mail",
    "category": "action",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "MessageSquare",
    "category": "action",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "Phone",
    "category": "action",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "FileText",
    "category": "action",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Clipboard",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Printer",
    "category": "action",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Maximize",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Minimize2",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "RotateCcw",
    "category": "action",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "ZoomIn",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "ZoomOut",
    "category": "action",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "Gift",
    "category": "action",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "Tag",
    "category": "action",
    "musrStories": [
      "MUSR-04",
      "MUSR-21"
    ]
  },
  {
    "name": "Sparkles",
    "category": "action",
    "musrStories": [
      "MUSR-22"
    ]
  },
  {
    "name": "Wand2",
    "category": "action",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "Play",
    "category": "action",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "CheckCircle2",
    "category": "status",
    "musrStories": [
      "MUSR-09",
      "MUSR-12",
      "MUSR-22"
    ]
  },
  {
    "name": "XCircle",
    "category": "status",
    "musrStories": [
      "MUSR-09",
      "MUSR-12"
    ]
  },
  {
    "name": "AlertTriangle",
    "category": "status",
    "musrStories": [
      "MUSR-03",
      "MUSR-09"
    ]
  },
  {
    "name": "AlertCircle",
    "category": "status",
    "musrStories": [
      "MUSR-03",
      "MUSR-09"
    ]
  },
  {
    "name": "Info",
    "category": "status",
    "musrStories": [
      "MUSR-03"
    ]
  },
  {
    "name": "Loader2",
    "category": "status",
    "musrStories": [
      "MUSR-09",
      "MUSR-05"
    ]
  },
  {
    "name": "CheckCheck",
    "category": "status",
    "musrStories": [
      "MUSR-04",
      "MUSR-22"
    ]
  },
  {
    "name": "Check",
    "category": "status",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "Ban",
    "category": "status",
    "musrStories": [
      "MUSR-12"
    ]
  },
  {
    "name": "Wifi",
    "category": "status",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "WifiOff",
    "category": "status",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Signal",
    "category": "status",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "ShieldCheck",
    "category": "status",
    "musrStories": [
      "MUSR-02",
      "MUSR-12"
    ]
  },
  {
    "name": "Lock",
    "category": "status",
    "musrStories": [
      "MUSR-02",
      "MUSR-04"
    ]
  },
  {
    "name": "Unlock",
    "category": "status",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "Crown",
    "category": "status",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "Trophy",
    "category": "status",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Flame",
    "category": "status",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "BadgeCheck",
    "category": "status",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Circle",
    "category": "status",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "CircleDot",
    "category": "status",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "Clock3",
    "category": "status",
    "musrStories": [
      "MUSR-01"
    ]
  },
  {
    "name": "HeartPulse",
    "category": "status",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Hourglass",
    "category": "status",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Heart",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "ThumbsUp",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "ThumbsDown",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "MessageCircle",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "UserPlus",
    "category": "social",
    "musrStories": [
      "MUSR-21",
      "MUSR-22"
    ]
  },
  {
    "name": "UserCheck",
    "category": "social",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "AtSign",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "MessagesSquare",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Repeat2",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Quote",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Award",
    "category": "social",
    "musrStories": [
      "MUSR-11",
      "MUSR-19"
    ]
  },
  {
    "name": "Milestone",
    "category": "social",
    "musrStories": [
      "MUSR-22"
    ]
  },
  {
    "name": "Rocket",
    "category": "social",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "Handshake",
    "category": "social",
    "musrStories": [
      "MUSR-21"
    ]
  },
  {
    "name": "Network",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Podcast",
    "category": "social",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "Video",
    "category": "social",
    "musrStories": [
      "MUSR-15",
      "MUSR-19"
    ]
  },
  {
    "name": "Megaphone",
    "category": "social",
    "musrStories": [
      "MUSR-03",
      "MUSR-19"
    ]
  },
  {
    "name": "Contact",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Group",
    "category": "social",
    "musrStories": [
      "MUSR-19"
    ]
  },
  {
    "name": "Rss",
    "category": "social",
    "musrStories": [
      "MUSR-05",
      "MUSR-08"
    ]
  },
  {
    "name": "Smile",
    "category": "social",
    "musrStories": [
      "MUSR-22"
    ]
  },
  {
    "name": "Smartphone",
    "category": "device",
    "musrStories": [
      "MUSR-11",
      "MUSR-18"
    ]
  },
  {
    "name": "Monitor",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Tablet",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Laptop",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Cloud",
    "category": "device",
    "musrStories": [
      "MUSR-11",
      "MUSR-18"
    ]
  },
  {
    "name": "CloudDownload",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "HardDrive",
    "category": "device",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Server",
    "category": "device",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Cpu",
    "category": "device",
    "musrStories": [
      "MUSR-09"
    ]
  },
  {
    "name": "Database",
    "category": "device",
    "musrStories": [
      "MUSR-08",
      "MUSR-09"
    ]
  },
  {
    "name": "Fingerprint",
    "category": "device",
    "musrStories": [
      "MUSR-02"
    ]
  },
  {
    "name": "BatteryMedium",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Power",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Vibrate",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Volume2",
    "category": "device",
    "musrStories": [
      "MUSR-11"
    ]
  },
  {
    "name": "Bluetooth",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "Cast",
    "category": "device",
    "musrStories": [
      "MUSR-18"
    ]
  },
  {
    "name": "ToggleLeft",
    "category": "device",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "CreditCard",
    "category": "finance",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "Banknote",
    "category": "finance",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "Landmark",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "PiggyBank",
    "category": "finance",
    "musrStories": [
      "MUSR-06"
    ]
  },
  {
    "name": "Receipt",
    "category": "finance",
    "musrStories": [
      "MUSR-04",
      "MUSR-06"
    ]
  },
  {
    "name": "TrendingUpDown",
    "category": "finance",
    "musrStories": [
      "MUSR-05",
      "MUSR-16"
    ]
  },
  {
    "name": "CircleDollarSign",
    "category": "finance",
    "musrStories": [
      "MUSR-04"
    ]
  },
  {
    "name": "Sigma",
    "category": "finance",
    "musrStories": [
      "MUSR-16",
      "MUSR-17"
    ]
  },
  {
    "name": "Calculator",
    "category": "finance",
    "musrStories": [
      "MUSR-06"
    ]
  },
  {
    "name": "ListOrdered",
    "category": "finance",
    "musrStories": [
      "MUSR-13"
    ]
  },
  {
    "name": "Presentation",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "TableProperties",
    "category": "finance",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "CirclePercent",
    "category": "finance",
    "musrStories": [
      "MUSR-17"
    ]
  },
  {
    "name": "ArrowUpDown",
    "category": "finance",
    "musrStories": [
      "MUSR-16"
    ]
  },
  {
    "name": "GitCompare",
    "category": "finance",
    "musrStories": [
      "MUSR-20"
    ]
  },
  {
    "name": "FileSpreadsheet",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "Split",
    "category": "finance",
    "musrStories": [
      "MUSR-06"
    ]
  },
  {
    "name": "FolderOpen",
    "category": "finance",
    "musrStories": [
      "MUSR-14"
    ]
  },
  {
    "name": "GraduationCap",
    "category": "academy",
    "musrStories": [
      "MUSR-15",
      "MUSR-22"
    ]
  },
  {
    "name": "BookOpen",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "BookMarked",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "Brain",
    "category": "academy",
    "musrStories": [
      "MUSR-15",
      "MUSR-22"
    ]
  },
  {
    "name": "Lightbulb",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "PencilLine",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "FlaskConical",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "GalleryVerticalEnd",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "ScrollText",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "CirclePlay",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  },
  {
    "name": "Medal",
    "category": "academy",
    "musrStories": [
      "MUSR-11",
      "MUSR-15"
    ]
  },
  {
    "name": "Microscope",
    "category": "academy",
    "musrStories": [
      "MUSR-15"
    ]
  }
];
export const ILLUSTRATIONS: IllustrationDef[] = [
  // ── Empty States ──────────────────────────────────────────────────────────
  {
    id: "svg-empty-watchlist",
    name: "Empty Watchlist",
    use: "Watchlist page — no stocks added yet",
    category: "empty-state",
    musrStories: ["MUSR-01"],
    tags: ["watchlist", "empty"],
  },
  {
    id: "svg-empty-portfolio",
    name: "Empty Portfolio",
    use: "Portfolio tracker — no positions logged",
    category: "empty-state",
    musrStories: ["MUSR-01"],
    tags: ["portfolio", "empty"],
  },
  {
    id: "svg-empty-feed",
    name: "Empty Feed",
    use: "Home feed / news — no items yet",
    category: "empty-state",
    musrStories: ["MUSR-05"],
    tags: ["feed", "news", "empty"],
  },
  {
    id: "svg-empty-notifs",
    name: "No Notifications",
    use: "Notification centre — all read / none",
    category: "empty-state",
    musrStories: ["MUSR-03"],
    tags: ["notifications", "empty"],
  },
  {
    id: "svg-empty-search",
    name: "No Search Results",
    use: "Screener / search — no matches found",
    category: "empty-state",
    musrStories: ["MUSR-16"],
    tags: ["search", "screener", "empty"],
  },
  {
    id: "svg-empty-community",
    name: "Empty Community",
    use: "Community / forum — no posts yet",
    category: "empty-state",
    musrStories: ["MUSR-19"],
    tags: ["community", "empty"],
  },
  // ── Onboarding Steps ──────────────────────────────────────────────────────
  {
    id: "svg-onboard-welcome",
    name: "Welcome",
    use: "Onboarding step 1 — Introduction",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "welcome"],
  },
  {
    id: "svg-onboard-experience",
    name: "Experience Level",
    use: "Onboarding step 2 — Personalisation",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "experience"],
  },
  {
    id: "svg-onboard-goals",
    name: "Set Goals",
    use: "Onboarding step 3 — Goal selection",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "goals"],
  },
  {
    id: "svg-onboard-ready",
    name: "All Set!",
    use: "Onboarding step 4 — Completion",
    category: "onboarding",
    musrStories: ["MUSR-22"],
    tags: ["onboarding", "complete"],
  },
  // ── Pro Upgrade ───────────────────────────────────────────────────────────
  {
    id: "svg-pro-locked",
    name: "Pro Feature Gate",
    use: "Feature locked — upgrade prompt",
    category: "pro-upgrade",
    musrStories: ["MUSR-04"],
    tags: ["pro", "locked", "upgrade"],
  },
  {
    id: "svg-pro-rocket",
    name: "Upgrade — Analytics",
    use: "Advanced analytics Pro upsell",
    category: "pro-upgrade",
    musrStories: ["MUSR-04", "MUSR-16"],
    tags: ["pro", "analytics", "upgrade"],
  },
  {
    id: "svg-pro-crown",
    name: "Pro Plan Card",
    use: "Pricing page — Pro tier visual",
    category: "pro-upgrade",
    musrStories: ["MUSR-04"],
    tags: ["pro", "pricing", "crown"],
  },
  // ── Error States ──────────────────────────────────────────────────────────
  {
    id: "svg-404",
    name: "404 Not Found",
    use: "Page / route missing",
    category: "error",
    musrStories: [],
    tags: ["error", "404"],
  },
  {
    id: "svg-500",
    name: "Server Error 500",
    use: "API failure / server down",
    category: "error",
    musrStories: ["MUSR-09"],
    tags: ["error", "500", "server"],
  },
  {
    id: "svg-offline",
    name: "No Internet",
    use: "Offline / connection lost",
    category: "error",
    musrStories: ["MUSR-18"],
    tags: ["error", "offline"],
  },
  {
    id: "svg-session",
    name: "Session Expired",
    use: "Auth token expired — re-login",
    category: "error",
    musrStories: ["MUSR-02"],
    tags: ["error", "session", "auth"],
  },
  // ── Market Status ─────────────────────────────────────────────────────────
  {
    id: "svg-market-closed",
    name: "Market Closed",
    use: "Weekend / holiday — dashboard header",
    category: "market-status",
    musrStories: ["MUSR-05"],
    tags: ["market", "closed", "weekend"],
  },
  {
    id: "svg-pre-open",
    name: "Pre-Open Session",
    use: "Pre-market 9:00–9:15 AM",
    category: "market-status",
    musrStories: ["MUSR-05"],
    tags: ["market", "pre-open"],
  },
  {
    id: "svg-loading-data",
    name: "Loading Market Data",
    use: "Chart skeleton / data fetch",
    category: "market-status",
    musrStories: ["MUSR-16"],
    tags: ["loading", "market", "chart"],
  },
  // ── Success & Celebration ─────────────────────────────────────────────────
  {
    id: "svg-payment-success",
    name: "Payment Success",
    use: "Pro subscription activated",
    category: "success",
    musrStories: ["MUSR-04"],
    tags: ["success", "payment", "pro"],
  },
  {
    id: "svg-referral-earned",
    name: "Referral Earned",
    use: "Credit added after referral",
    category: "success",
    musrStories: ["MUSR-21"],
    tags: ["success", "referral", "credit"],
  },
  {
    id: "svg-module-complete",
    name: "Module Completed",
    use: "Academy module finished",
    category: "success",
    musrStories: ["MUSR-15"],
    tags: ["success", "academy", "module"],
  },
  {
    id: "svg-streak-done",
    name: "Streak Milestone",
    use: "Daily streak achievement",
    category: "success",
    musrStories: ["MUSR-11"],
    tags: ["success", "streak", "gamification"],
  },
  // ── Academy ───────────────────────────────────────────────────────────────
  {
    id: "svg-course-fundamentals",
    name: "Investment Fundamentals",
    use: "Course thumbnail — beginner",
    category: "academy",
    musrStories: ["MUSR-15"],
    tags: ["academy", "course", "beginner"],
  },
  {
    id: "svg-course-fibonacci",
    name: "Fibonacci Mastery",
    use: "Course thumbnail — intermediate",
    category: "academy",
    musrStories: ["MUSR-15"],
    tags: ["academy", "course", "fibonacci"],
  },
  {
    id: "svg-course-ipo",
    name: "IPO Analysis",
    use: "Course thumbnail — advanced",
    category: "academy",
    musrStories: ["MUSR-15"],
    tags: ["academy", "course", "ipo"],
  },
  {
    id: "svg-quiz-correct",
    name: "Quiz Correct",
    use: "Quiz answer — correct feedback (+XP)",
    category: "academy",
    musrStories: ["MUSR-11", "MUSR-15"],
    tags: ["academy", "quiz", "gamification"],
  },
  // ── Social Moments ────────────────────────────────────────────────────────
  {
    id: "svg-first-post",
    name: "First Post",
    use: "Community — first contribution",
    category: "social",
    musrStories: ["MUSR-19"],
    tags: ["social", "community", "first"],
  },
  {
    id: "svg-verified",
    name: "Verified Analyst",
    use: "Community badge — expert status",
    category: "social",
    musrStories: ["MUSR-19"],
    tags: ["social", "verified", "badge"],
  },
  {
    id: "svg-ambassador",
    name: "Ambassador Badge",
    use: "Referral tier 4 — 25+ referrals",
    category: "social",
    musrStories: ["MUSR-21"],
    tags: ["social", "ambassador", "referral"],
  },
];
export const SVGS: Record<string, string> = {
  "svg-empty-watchlist":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="80" cy="80" r="60" fill="#E6FBF5" opacity="0.8"/>\n          <rect x="44" y="52" width="72" height="56" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <line x1="55" y1="68" x2="105" y2="68" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <line x1="55" y1="80" x2="95" y2="80" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <line x1="55" y1="92" x2="88" y2="92" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <circle cx="108" cy="98" r="18" fill="#10C9A0"/>\n          <line x1="108" y1="91" x2="108" y2="105" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <line x1="101" y1="98" x2="115" y2="98" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <path d="M62 60 L66 56 L70 60" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n        </svg>',
  "svg-empty-portfolio":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="#E6FBF5" opacity="0.6"/>\n          <rect x="48" y="60" width="64" height="48" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="48" y="60" width="64" height="14" rx="8" fill="#E6FBF5"/>\n          <rect x="48" y="67" width="64" height="7" rx="0" fill="#E6FBF5"/>\n          <path d="M56 88 L66 76 L76 82 L88 70 L98 74" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          <circle cx="56" cy="88" r="2.5" fill="#5A706A"/>\n          <circle cx="66" cy="76" r="2.5" fill="#5A706A"/>\n          <circle cx="88" cy="70" r="2.5" fill="#10C9A0"/>\n          <text x="80" y="75" font-family="DM Sans" font-size="8" fill="#5A706A" text-anchor="middle">No positions yet</text>\n          <circle cx="106" cy="102" r="16" fill="#10C9A0"/>\n          <line x1="106" y1="96" x2="106" y2="108" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <line x1="100" y1="102" x2="112" y2="102" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n        </svg>',
  "svg-empty-feed":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(59,130,246,.07)"/>\n          <rect x="40" y="46" width="80" height="22" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="40" y="76" width="80" height="22" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="40" y="106" width="80" height="22" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="50" cy="57" r="5" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="53" width="40" height="4" rx="2" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="59" width="25" height="3" rx="1.5" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="50" cy="87" r="5" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="83" width="35" height="4" rx="2" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="89" width="20" height="3" rx="1.5" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="50" cy="117" r="5" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="113" width="45" height="4" rx="2" fill="rgba(232,239,237,0.12)"/>\n          <rect x="60" y="119" width="28" height="3" rx="1.5" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="112" cy="68" r="14" fill="#10C9A0"/>\n          <line x1="112" y1="63" x2="112" y2="73" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <line x1="107" y1="68" x2="117" y2="68" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n        </svg>',
  "svg-empty-notifs":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(245,158,11,.07)"/>\n          <path d="M64 68a16 16 0 0 1 32 0c0 18 8 24 8 24H56s8-6 8-24z" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <path d="M74 92a6 6 0 0 0 12 0" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="80" cy="68" r="3" fill="#FBBF24" opacity="0.4"/>\n          <line x1="68" y1="54" x2="92" y2="54" stroke="rgba(232,239,237,0.06)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2"/>\n          <path d="M72 110 L80 124 L88 110" stroke="#10C9A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="80" y="138" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">All caught up!</text>\n        </svg>',
  "svg-empty-search":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(232,239,237,0.06)"/>\n          <circle cx="74" cy="74" r="26" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="2"/>\n          <line x1="93" y1="93" x2="110" y2="110" stroke="rgba(232,239,237,0.12)" stroke-width="3.5" stroke-linecap="round"/>\n          <path d="M66 74 Q72 66 80 70" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <text x="74" y="81" font-family="DM Sans" font-size="14" fill="rgba(232,239,237,0.12)" text-anchor="middle">?</text>\n          <circle cx="110" cy="110" r="8" fill="rgba(232,239,237,0.12)" opacity="0.4"/>\n        </svg>',
  "svg-empty-community":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="60" fill="rgba(139,92,246,.07)"/>\n          <circle cx="58" cy="72" r="14" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="102" cy="72" r="14" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <circle cx="80" cy="66" r="16" fill="#0D1614" stroke="#10C9A0" stroke-width="1.5"/>\n          <path d="M44 100 Q44 90 58 90 Q64 90 70 93" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <path d="M116 100 Q116 90 102 90 Q96 90 90 93" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <path d="M64 94 Q64 82 80 82 Q96 82 96 94" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round" fill="none"/>\n          <circle cx="80" cy="60" r="5" fill="#E6FBF5"/>\n          <line x1="80" y1="57" x2="80" y2="63" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="77" y1="60" x2="83" y2="60" stroke="#10C9A0" stroke-width="1.5" stroke-linecap="round"/>\n        </svg>',
  "svg-onboard-welcome":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="#E6FBF5"/>\n          <circle cx="70" cy="58" r="20" fill="#10C9A0" opacity="0.9"/>\n          <path d="M50 95 Q50 78 70 78 Q90 78 90 95" fill="#10C9A0" opacity="0.7"/>\n          <path d="M38 62 L46 58 L38 54" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <path d="M102 62 L94 58 L102 54" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <circle cx="64" cy="55" r="2" fill="#001A13" opacity="0.7"/>\n          <circle cx="76" cy="55" r="2" fill="#001A13" opacity="0.7"/>\n          <path d="M65 65 Q70 70 75 65" stroke="#001A13" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="10" font-weight="600" fill="#006B52" text-anchor="middle">Welcome!</text>\n        </svg>',
  "svg-onboard-experience":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="rgba(59,130,246,.07)"/>\n          <rect x="30" y="52" width="80" height="56" rx="10" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="38" y="64" width="64" height="12" rx="6" fill="#E6FBF5" stroke="#10C9A0" stroke-width="1"/>\n          <rect x="38" y="82" width="64" height="12" rx="6" fill="rgba(232,239,237,0.06)" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <rect x="38" y="100" width="64" height="12" rx="6" fill="rgba(232,239,237,0.06)" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <circle cx="44" cy="70" r="3" fill="#10C9A0"/>\n          <text x="52" y="73" font-family="DM Sans" font-size="7" fill="#006B52">Complete beginner</text>\n          <circle cx="44" cy="88" r="3" fill="rgba(232,239,237,0.12)"/>\n          <text x="52" y="91" font-family="DM Sans" font-size="7" fill="#5A706A">Some knowledge</text>\n          <circle cx="44" cy="106" r="3" fill="rgba(232,239,237,0.12)"/>\n          <text x="52" y="109" font-family="DM Sans" font-size="7" fill="#5A706A">Experienced</text>\n        </svg>',
  "svg-onboard-goals":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="rgba(245,158,11,.07)"/>\n          <circle cx="70" cy="70" r="32" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2"/>\n          <circle cx="70" cy="70" r="22" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2"/>\n          <circle cx="70" cy="70" r="12" fill="none" stroke="#10C9A0" stroke-width="2.5"/>\n          <circle cx="70" cy="70" r="4" fill="#10C9A0"/>\n          <line x1="70" y1="38" x2="70" y2="45" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="70" y1="95" x2="70" y2="102" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="38" y1="70" x2="45" y2="70" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="95" y1="70" x2="102" y2="70" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <path d="M102 45 L74 70" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <circle cx="102" cy="45" r="4" fill="#FBBF24"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="9" font-weight="600" fill="#9BACA6" text-anchor="middle">Set your goals</text>\n        </svg>',
  "svg-onboard-ready":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="55" fill="#E6FBF5"/>\n          <circle cx="70" cy="70" r="32" fill="#10C9A0" opacity="0.9"/>\n          <path d="M52 70 L65 83 L88 58" stroke="#001A13" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <!-- Sparkles -->\n          <line x1="32" y1="32" x2="32" y2="42" stroke="#10C9A0" stroke-width="2" stroke-linecap="round"/>\n          <line x1="27" y1="37" x2="37" y2="37" stroke="#10C9A0" stroke-width="2" stroke-linecap="round"/>\n          <line x1="108" y1="28" x2="108" y2="36" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round"/>\n          <line x1="104" y1="32" x2="112" y2="32" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round"/>\n          <line x1="118" y1="95" x2="118" y2="101" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="115" y1="98" x2="121" y2="98" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="10" font-weight="700" fill="#006B52" text-anchor="middle">You\'re all set! \ud83c\udf89</text>\n        </svg>',
  "svg-pro-locked":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="55" fill="rgba(0,179,138,.1)"/>\n          <rect x="56" y="74" width="48" height="38" rx="8" fill="rgba(0,179,138,.15)" stroke="rgba(0,179,138,.4)" stroke-width="1.5"/>\n          <path d="M66 74 L66 64 Q66 52 80 52 Q94 52 94 64 L94 74" fill="none" stroke="rgba(0,179,138,.5)" stroke-width="2.5" stroke-linecap="round"/>\n          <rect x="72" y="88" width="16" height="14" rx="4" fill="#10C9A0" opacity="0.9"/>\n          <line x1="80" y1="92" x2="80" y2="98" stroke="#001A13" stroke-width="2.5" stroke-linecap="round"/>\n          <!-- Crown -->\n          <path d="M62 46 L70 56 L80 44 L90 56 L98 46 L96 62 L64 62 Z" fill="#FBBF24" opacity="0.9"/>\n          <circle cx="80" cy="44" r="3" fill="#FBBF24"/>\n          <circle cx="62" cy="46" r="2.5" fill="#FBBF24"/>\n          <circle cx="98" cy="46" r="2.5" fill="#FBBF24"/>\n          <text x="80" y="126" font-family="DM Sans" font-size="10" font-weight="600" fill="#3DDCBA" text-anchor="middle">Pro Feature</text>\n        </svg>',
  "svg-pro-rocket":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="55" fill="rgba(0,179,138,.08)"/>\n          <!-- Chart going up -->\n          <path d="M36 110 L52 92 L68 98 L84 74 L100 66 L116 48" stroke="rgba(0,179,138,.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n          <path d="M36 110 L52 92 L68 98 L84 74 L100 66 L116 48 L116 110 Z" fill="rgba(0,179,138,.08)"/>\n          <!-- Rocket -->\n          <path d="M80 54 Q88 44 96 42 Q98 50 94 58 L86 66 Z" fill="#10C9A0" opacity="0.9"/>\n          <circle cx="84" cy="60" r="5" fill="#001A13" opacity="0.4"/>\n          <path d="M80 54 L72 70 L80 66 L86 66 Z" fill="#006B52"/>\n          <path d="M86 66 L94 72 L94 58" fill="#3DDCBA" opacity="0.6"/>\n          <path d="M76 66 Q72 74 74 80" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.7"/>\n          <path d="M80 68 Q76 76 78 82" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>\n          <text x="80" y="122" font-family="DM Sans" font-size="10" font-weight="600" fill="#3DDCBA" text-anchor="middle">Unlock Pro Analytics</text>\n        </svg>',
  "svg-pro-crown":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="55" fill="rgba(245,158,11,.07)"/>\n          <!-- Stars -->\n          <polygon points="80,42 83,52 93,52 85,58 88,68 80,62 72,68 75,58 67,52 77,52" fill="#FBBF24" opacity="0.9"/>\n          <polygon points="46,74 48,80 54,80 49,84 51,90 46,86 41,90 43,84 38,80 44,80" fill="#FBBF24" opacity="0.5" transform="scale(0.7) translate(20,38)"/>\n          <polygon points="114,74 116,80 122,80 117,84 119,90 114,86 109,90 111,84 106,80 112,80" fill="#FBBF24" opacity="0.5" transform="scale(0.7) translate(-28,38)"/>\n          <rect x="52" y="88" width="56" height="8" rx="4" fill="rgba(245,158,11,.2)" stroke="#FBBF24" stroke-width="1"/>\n          <rect x="56" y="100" width="48" height="20" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <text x="80" y="114" font-family="DM Sans" font-size="9" font-weight="700" fill="#E8EFED" text-anchor="middle">Mintx Pro</text>\n          <text x="80" y="123" font-family="DM Mono" font-size="8" fill="#10C9A0" text-anchor="middle">\u20b9999/mo</text>\n        </svg>',
  "svg-404":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(232,239,237,0.06)"/>\n          <text x="70" y="82" font-family="Syne" font-size="36" font-weight="800" fill="rgba(232,239,237,0.12)" text-anchor="middle">404</text>\n          <circle cx="70" cy="68" r="28" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-dasharray="4 3"/>\n          <path d="M54 56 L86 84" stroke="#F87171" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>\n          <path d="M86 56 L54 84" stroke="#F87171" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>\n          <text x="70" y="112" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">Page not found</text>\n        </svg>',
  "svg-500":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(239,68,68,.05)"/>\n          <rect x="40" y="50" width="60" height="48" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <rect x="40" y="50" width="60" height="12" rx="8" fill="rgba(239,68,68,.1)"/>\n          <rect x="40" y="56" width="60" height="6" rx="0" fill="rgba(239,68,68,.1)"/>\n          <circle cx="50" cy="56" r="2.5" fill="rgba(239,68,68,.4)"/>\n          <circle cx="58" cy="56" r="2.5" fill="rgba(245,158,11,.4)"/>\n          <circle cx="66" cy="56" r="2.5" fill="rgba(34,197,94,.4)"/>\n          <path d="M52 74 Q70 66 88 74" stroke="#F87171" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>\n          <text x="70" y="82" font-family="DM Mono" font-size="9" fill="#F87171" text-anchor="middle">Error 500</text>\n          <text x="70" y="92" font-family="DM Sans" font-size="7" fill="#5A706A" text-anchor="middle">Something went wrong</text>\n          <path d="M62 104 L70 116 L78 104" stroke="#10C9A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="70" y="126" font-family="DM Sans" font-size="8" fill="#10C9A0" text-anchor="middle">Retry</text>\n        </svg>',
  "svg-offline":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(232,239,237,0.06)"/>\n          <path d="M30 54 Q70 34 110 54" stroke="rgba(232,239,237,0.12)" stroke-width="2.5" stroke-linecap="round" fill="none"/>\n          <path d="M42 66 Q70 50 98 66" stroke="rgba(232,239,237,0.12)" stroke-width="2.5" stroke-linecap="round" fill="none"/>\n          <path d="M54 78 Q70 66 86 78" stroke="rgba(232,239,237,0.12)" stroke-width="2.5" stroke-linecap="round" fill="none"/>\n          <circle cx="70" cy="90" r="5" fill="rgba(232,239,237,0.12)"/>\n          <line x1="30" y1="34" x2="110" y2="106" stroke="#F87171" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>\n          <text x="70" y="118" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">No connection</text>\n        </svg>',
  "svg-session":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(245,158,11,.07)"/>\n          <rect x="50" y="60" width="40" height="36" rx="7" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <path d="M60 60 L60 52 Q60 44 70 44 Q80 44 80 52 L80 60" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="2" stroke-linecap="round"/>\n          <rect x="62" y="74" width="16" height="12" rx="3" fill="#FBBF24" opacity="0.7"/>\n          <line x1="70" y1="77" x2="70" y2="82" stroke="#fff" stroke-width="2" stroke-linecap="round"/>\n          <path d="M58 44 Q50 42 46 50" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round" fill="none" stroke-dasharray="2 2"/>\n          <circle cx="44" cy="52" r="3" fill="#FBBF24" opacity="0.5"/>\n          <text x="70" y="110" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">Session expired</text>\n          <text x="70" y="120" font-family="DM Sans" font-size="8" fill="#10C9A0" text-anchor="middle">Sign in again</text>\n        </svg>',
  "svg-market-closed":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="56" fill="rgba(0,179,138,.07)"/>\n          <!-- Moon + stars = market closed at night -->\n          <path d="M92 52 Q78 56 76 70 Q74 86 86 92 Q68 96 58 82 Q50 66 60 54 Q72 44 92 52Z" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>\n          <circle cx="108" cy="42" r="2" fill="rgba(255,255,255,.4)"/>\n          <circle cx="118" cy="58" r="1.5" fill="rgba(255,255,255,.3)"/>\n          <circle cx="104" cy="62" r="1" fill="rgba(255,255,255,.3)"/>\n          <circle cx="40" cy="46" r="1.5" fill="rgba(255,255,255,.3)"/>\n          <circle cx="50" cy="36" r="2" fill="rgba(255,255,255,.4)"/>\n          <rect x="48" y="96" width="64" height="24" rx="2" fill="rgba(0,179,138,.15)" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <rect x="60" y="90" width="40" height="8" rx="1" fill="rgba(0,179,138,.2)"/>\n          <line x1="60" y1="104" x2="60" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <line x1="72" y1="104" x2="72" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <line x1="88" y1="104" x2="88" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <line x1="100" y1="104" x2="100" y2="120" stroke="rgba(0,179,138,.3)" stroke-width="1"/>\n          <text x="80" y="135" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(0,179,138,.6)" text-anchor="middle">Market Closed</text>\n          <text x="80" y="145" font-family="DM Mono" font-size="8" fill="rgba(255,255,255,.3)" text-anchor="middle">Opens Mon 9:15 AM IST</text>\n        </svg>',
  "svg-loading-data":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="56" fill="#E6FBF5" opacity="0.5"/>\n          <rect x="44" y="100" width="12" height="24" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="62" y="82" width="12" height="42" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="80" y="68" width="12" height="56" rx="3" fill="#10C9A0" opacity="0.5"/>\n          <rect x="98" y="76" width="12" height="48" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="116" y="90" width="12" height="34" rx="3" fill="rgba(232,239,237,0.12)"/>\n          <rect x="44" y="100" width="12" height="24" rx="3" fill="url(#shimmerGrad)" opacity="0.6"/>\n          <rect x="62" y="82" width="12" height="42" rx="3" fill="url(#shimmerGrad)" opacity="0.4"/>\n          <defs><linearGradient id="shimmerGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="transparent"/><stop offset="50%" stop-color="rgba(255,255,255,.4)"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs>\n          <circle cx="80" cy="50" r="12" fill="none" stroke="rgba(232,239,237,0.12)" stroke-width="3"/>\n          <path d="M80 38 A12 12 0 0 1 92 50" stroke="#10C9A0" stroke-width="3" stroke-linecap="round" fill="none"/>\n          <text x="80" y="140" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">Loading market data\u2026</text>\n        </svg>',
  "svg-pre-open":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="56" fill="rgba(245,158,11,.07)"/>\n          <!-- Rising sun = pre-open -->\n          <path d="M46 96 Q80 50 114 96" fill="rgba(245,158,11,.15)" stroke="#FBBF24" stroke-width="1.5"/>\n          <circle cx="80" cy="80" r="20" fill="#FBBF24" opacity="0.7"/>\n          <!-- Sun rays -->\n          <line x1="80" y1="46" x2="80" y2="54" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="104" y1="56" x2="99" y2="61" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="56" y1="56" x2="61" y2="61" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="112" y1="80" x2="104" y2="80" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <line x1="48" y1="80" x2="56" y2="80" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>\n          <!-- Horizon line -->\n          <line x1="36" y1="100" x2="124" y2="100" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <text x="80" y="118" font-family="DM Sans" font-size="9" font-weight="600" fill="#9BACA6" text-anchor="middle">Pre-Open Session</text>\n          <text x="80" y="128" font-family="DM Mono" font-size="8" fill="#FBBF24" text-anchor="middle">9:00 \u2013 9:15 AM IST</text>\n        </svg>',
  "svg-payment-success":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="#E6FBF5"/>\n          <circle cx="70" cy="66" r="28" fill="#10C9A0" opacity="0.9"/>\n          <path d="M54 66 L65 77 L86 54" stroke="#001A13" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <rect x="48" y="96" width="44" height="18" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <text x="70" y="109" font-family="DM Sans" font-size="9" font-weight="700" fill="#22C55E" text-anchor="middle">Payment Successful!</text>\n          <!-- Confetti -->\n          <rect x="36" y="44" width="5" height="5" rx="1" fill="#FBBF24" transform="rotate(20 36 44)" opacity="0.8"/>\n          <rect x="96" y="38" width="4" height="4" rx="1" fill="#60A5FA" transform="rotate(-15 96 38)" opacity="0.8"/>\n          <rect x="108" y="60" width="4" height="6" rx="1" fill="#A78BFA" transform="rotate(30 108 60)" opacity="0.7"/>\n          <rect x="30" y="68" width="5" height="4" rx="1" fill="#3DDCBA" transform="rotate(-20 30 68)" opacity="0.7"/>\n        </svg>',
  "svg-referral-earned":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="#E6FBF5"/>\n          <circle cx="50" cy="70" r="16" fill="#10C9A0" opacity="0.8"/>\n          <circle cx="90" cy="70" r="16" fill="#006B52"/>\n          <line x1="66" y1="70" x2="74" y2="70" stroke="#3DDCBA" stroke-width="2.5" stroke-linecap="round"/>\n          <path d="M70 66 L74 70 L70 74" stroke="#3DDCBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <circle cx="50" cy="66" r="4" fill="#001A13" opacity="0.3"/>\n          <circle cx="90" cy="66" r="4" fill="rgba(255,255,255,.3)"/>\n          <rect x="46" y="92" width="48" height="16" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <text x="70" y="104" font-family="DM Mono" font-size="9" font-weight="700" fill="#10C9A0" text-anchor="middle">+1 Month Free!</text>\n        </svg>',
  "svg-module-complete":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(59,130,246,.07)"/>\n          <!-- Graduation cap -->\n          <polygon points="70,42 96,54 70,66 44,54" fill="#60A5FA" opacity="0.8"/>\n          <path d="M96 54 L96 70 Q96 78 82 82" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" opacity="0.6"/>\n          <path d="M44 54 L44 68" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" opacity="0.4"/>\n          <rect x="52" y="68" width="36" height="22" rx="6" fill="#0D1614" stroke="rgba(59,130,246,.3)" stroke-width="1.5"/>\n          <path d="M60 79 L67 86 L82 72" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="70" y="106" font-family="DM Sans" font-size="8" font-weight="700" fill="#60A5FA" text-anchor="middle">Module Complete!</text>\n          <text x="70" y="116" font-family="DM Mono" font-size="8" fill="#10C9A0" text-anchor="middle">+75 XP earned</text>\n        </svg>',
  "svg-streak-done":
    '<svg width="140" height="140" viewBox="0 0 140 140" fill="none">\n          <circle cx="70" cy="70" r="52" fill="rgba(245,158,11,.07)"/>\n          <text x="70" y="82" font-size="52" text-anchor="middle">\ud83d\udd25</text>\n          <rect x="42" y="94" width="56" height="16" rx="6" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1"/>\n          <text x="70" y="106" font-family="DM Sans" font-size="9" font-weight="700" fill="#FBBF24" text-anchor="middle">15-Day Streak! \ud83c\udf89</text>\n          <!-- Small dots for days -->\n          <circle cx="46" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="54" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="62" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="70" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="78" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="86" cy="116" r="3" fill="#FBBF24"/>\n          <circle cx="94" cy="116" r="3.5" fill="#10C9A0" stroke="#006B52" stroke-width="1"/>\n        </svg>',
  "svg-course-fundamentals":
    '<svg width="120" height="100" viewBox="0 0 120 100" fill="none">\n          <path d="M20 80 L35 58 L50 64 L65 48 L80 52 L95 34" stroke="rgba(255,255,255,.8)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n          <circle cx="65" cy="48" r="5" fill="#fff"/>\n          <path d="M20 80 L35 58 L50 64 L65 48 L80 52 L95 34 L95 80 Z" fill="rgba(255,255,255,.1)"/>\n          <text x="60" y="94" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(255,255,255,.8)" text-anchor="middle">Fundamentals</text>\n        </svg>',
  "svg-course-fibonacci":
    '<svg width="120" height="100" viewBox="0 0 120 100" fill="none">\n          <!-- Fibonacci spiral hint -->\n          <rect x="10" y="10" width="100" height="80" rx="4" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>\n          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <line x1="72" y1="10" x2="72" y2="90" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <!-- Golden ratio spiral approximation -->\n          <path d="M72 50 Q72 20 100 20 Q110 20 110 50 Q110 90 60 90 Q10 90 10 40 Q10 10 50 10 Q72 10 72 50" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"/>\n          <!-- Fib level lines -->\n          <line x1="10" y1="19" x2="110" y2="19" stroke="#22C55E" stroke-width="1" opacity="0.5"/>\n          <line x1="10" y1="34" x2="110" y2="34" stroke="#FBBF24" stroke-width="1" opacity="0.5"/>\n          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(0,179,138,.8)" stroke-width="1.5"/>\n          <line x1="10" y1="66" x2="110" y2="66" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>\n          <text x="60" y="98" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(255,255,255,.8)" text-anchor="middle">Fibonacci</text>\n        </svg>',
  "svg-course-ipo":
    '<svg width="120" height="100" viewBox="0 0 120 100" fill="none">\n          <rect x="20" y="28" width="80" height="50" rx="6" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <text x="60" y="46" font-family="Syne" font-size="12" font-weight="800" fill="#fff" text-anchor="middle">IPO</text>\n          <line x1="28" y1="54" x2="92" y2="54" stroke="rgba(255,255,255,.2)" stroke-width="1"/>\n          <text x="60" y="64" font-family="DM Mono" font-size="8" fill="rgba(255,255,255,.6)" text-anchor="middle">\u20b9450 \u2013 \u20b9475</text>\n          <text x="60" y="73" font-family="DM Sans" font-size="7" fill="rgba(255,255,255,.4)" text-anchor="middle">Issue Price</text>\n          <!-- Confetti -->\n          <circle cx="28" cy="24" r="2" fill="#FBBF24" opacity="0.8"/>\n          <circle cx="92" cy="20" r="2.5" fill="#22C55E" opacity="0.8"/>\n          <rect x="98" y="28" width="4" height="4" rx="1" fill="rgba(255,255,255,.4)" transform="rotate(30 98 28)"/>\n          <text x="60" y="98" font-family="DM Sans" font-size="9" font-weight="600" fill="rgba(255,255,255,.8)" text-anchor="middle">IPO Analysis</text>\n        </svg>',
  "svg-quiz-correct":
    '<svg width="140" height="120" viewBox="0 0 140 120" fill="none">\n          <circle cx="70" cy="54" r="34" fill="#E6FBF5"/>\n          <circle cx="70" cy="54" r="24" fill="#10C9A0" opacity="0.9"/>\n          <path d="M56 54 L66 64 L84 44" stroke="#001A13" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <text x="70" y="96" font-family="DM Sans" font-size="11" font-weight="700" fill="#22C55E" text-anchor="middle">Correct! +25 XP</text>\n          <text x="70" y="110" font-family="DM Sans" font-size="9" fill="#5A706A" text-anchor="middle">The golden ratio \u2728</text>\n        </svg>',
  "svg-first-post":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="58" fill="rgba(139,92,246,.07)"/>\n          <!-- Chat bubble -->\n          <rect x="36" y="46" width="88" height="62" rx="12" fill="#0D1614" stroke="#A78BFA" stroke-width="1.5"/>\n          <path d="M50 108 L44 120 L62 108" fill="#0D1614" stroke="#A78BFA" stroke-width="1.5" stroke-linejoin="round"/>\n          <line x1="48" y1="62" x2="112" y2="62" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="48" y1="72" x2="100" y2="72" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <line x1="48" y1="82" x2="88" y2="82" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <!-- Sparkle on first post -->\n          <circle cx="108" cy="52" r="12" fill="#A78BFA" opacity="0.8"/>\n          <text x="108" y="56" font-size="12" text-anchor="middle">\u2728</text>\n          <text x="80" y="136" font-family="DM Sans" font-size="9" font-weight="600" fill="#9BACA6" text-anchor="middle">First post published!</text>\n        </svg>',
  "svg-verified":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="58" fill="#E6FBF5" opacity="0.6"/>\n          <circle cx="80" cy="72" r="22" fill="#10C9A0" opacity="0.85"/>\n          <path d="M68 72 L77 81 L93 63" stroke="#001A13" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>\n          <path d="M80 94 Q80 100 80 106" stroke="rgba(232,239,237,0.12)" stroke-width="1.5" stroke-linecap="round"/>\n          <rect x="56" y="106" width="48" height="20" rx="8" fill="#10C9A0" opacity="0.9"/>\n          <text x="80" y="120" font-family="DM Sans" font-size="9" font-weight="700" fill="#001A13" text-anchor="middle">Verified Analyst</text>\n          <!-- Badge stars -->\n          <circle cx="52" cy="56" r="4" fill="#3DDCBA" opacity="0.6"/>\n          <circle cx="108" cy="50" r="5" fill="#3DDCBA" opacity="0.5"/>\n          <circle cx="116" cy="76" r="3" fill="#3DDCBA" opacity="0.4"/>\n          <circle cx="44" cy="78" r="3" fill="#3DDCBA" opacity="0.4"/>\n        </svg>',
  "svg-ambassador":
    '<svg width="160" height="160" viewBox="0 0 160 160" fill="none">\n          <circle cx="80" cy="80" r="58" fill="rgba(245,158,11,.07)"/>\n          <!-- Ambassador badge -->\n          <polygon points="80,38 86,56 106,56 91,68 97,86 80,74 63,86 69,68 54,56 74,56" fill="#FBBF24" opacity="0.9"/>\n          <polygon points="80,46 84,58 98,58 87,66 91,78 80,70 69,78 73,66 62,58 76,58" fill="rgba(255,255,255,.3)"/>\n          <rect x="52" y="96" width="56" height="20" rx="8" fill="#0D1614" stroke="rgba(232,239,237,0.12)" stroke-width="1.5"/>\n          <text x="80" y="107" font-family="DM Sans" font-size="8" font-weight="700" fill="#FBBF24" text-anchor="middle">Mintx Ambassador</text>\n          <text x="80" y="116" font-family="DM Mono" font-size="7" fill="#5A706A" text-anchor="middle">25+ referrals</text>\n          <text x="80" y="132" font-family="DM Sans" font-size="8" fill="#5A706A" text-anchor="middle">Annual Pro \u2014 free forever</text>\n        </svg>',
};


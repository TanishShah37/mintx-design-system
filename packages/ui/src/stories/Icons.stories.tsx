import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useMemo } from "react";
import {
  // Navigation
  Home,
  LayoutDashboard,
  Menu,
  X,
  Search,
  Bell,
  BellOff,
  User,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Slash,
  SlidersHorizontal,
  ExternalLink,
  Grid2X2,
  List,
  PanelLeft,
  Compass,
  Bookmark,
  MoreHorizontal,
  MoreVertical,
  Pin,
  Maximize2,
  // Market & Trading
  TrendingUp,
  TrendingDown,
  BarChart2,
  BarChart4,
  LineChart,
  AreaChart,
  PieChart,
  CandlestickChart,
  Activity,
  Percent,
  IndianRupee,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Wallet,
  Briefcase,
  Building2,
  Scale,
  Layers,
  Zap,
  Target,
  Eye,
  EyeOff,
  Star,
  Clock,
  Calendar,
  Globe,
  Newspaper,
  Hash,
  Gauge,
  // Actions
  Plus,
  Pencil,
  Trash2,
  Save,
  Copy,
  Download,
  Upload,
  Share2,
  RefreshCw,
  Filter,
  SortAsc,
  QrCode,
  Link2,
  Send,
  Mail,
  MessageSquare,
  Phone,
  FileText,
  Clipboard,
  Printer,
  Maximize,
  Minimize2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Gift,
  Tag,
  Sparkles,
  Wand2,
  Play,
  // Status
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Loader2,
  CheckCheck,
  Check,
  Ban,
  Wifi,
  WifiOff,
  Signal,
  ShieldCheck,
  Lock,
  Unlock,
  Crown,
  Trophy,
  Flame,
  BadgeCheck,
  Circle,
  CircleDot,
  Clock3,
  HeartPulse,
  Hourglass,
  // Social
  Heart,
  ThumbsUp,
  MessageCircle,
  UserPlus,
  UserCheck,
  AtSign,
  MessagesSquare,
  Repeat2,
  Quote,
  Award,
  Milestone,
  Rocket,
  Handshake,
  Network,
  Podcast,
  Video,
  Megaphone,
  Contact,
  Group,
  Rss,
  Smile,
  ThumbsDown,
  // Device
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Cloud,
  CloudDownload,
  HardDrive,
  Server,
  Cpu,
  Database,
  Fingerprint,
  BatteryMedium,
  Power,
  Vibrate,
  Volume2,
  Bluetooth,
  Cast,
  ToggleLeft,
  // Finance
  CreditCard,
  Banknote,
  Landmark,
  PiggyBank,
  Receipt,
  TrendingUpDown,
  CircleDollarSign,
  Sigma,
  Calculator,
  ListOrdered,
  Presentation,
  TableProperties,
  CirclePercent,
  ArrowUpDown,
  GitCompare,
  FileSpreadsheet,
  Split,
  FolderOpen,
  // Academy
  GraduationCap,
  BookOpen,
  BookMarked,
  Brain,
  Lightbulb,
  PencilLine,
  FlaskConical,
  GalleryVerticalEnd,
  ScrollText,
  CirclePlay,
  Medal,
  Microscope,
} from "lucide-react";

// ─── Type & data ────────────────────────────────────────────────────────────

type IconCategory =
  | "navigation"
  | "market"
  | "action"
  | "status"
  | "social"
  | "device"
  | "finance"
  | "academy";

interface IconDef {
  name: string;
  component: React.FC<{
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
  }>;
  category: IconCategory;
  musrStories: string[];
}

const ICONS: IconDef[] = [
  // ── Navigation ──────────────────────────────────────────────────────────
  {
    name: "Home",
    component: Home,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-02"],
  },
  {
    name: "LayoutDashboard",
    component: LayoutDashboard,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Menu",
    component: Menu,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-02"],
  },
  { name: "X", component: X, category: "navigation", musrStories: ["MUSR-01"] },
  {
    name: "Search",
    component: Search,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-08", "MUSR-16"],
  },
  {
    name: "Bell",
    component: Bell,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-03"],
  },
  {
    name: "BellOff",
    component: BellOff,
    category: "navigation",
    musrStories: ["MUSR-03"],
  },
  {
    name: "User",
    component: User,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-02"],
  },
  {
    name: "Users",
    component: Users,
    category: "navigation",
    musrStories: ["MUSR-14", "MUSR-19"],
  },
  {
    name: "Settings",
    component: Settings,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "LogOut",
    component: LogOut,
    category: "navigation",
    musrStories: ["MUSR-02"],
  },
  {
    name: "ChevronDown",
    component: ChevronDown,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "ChevronRight",
    component: ChevronRight,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "ChevronLeft",
    component: ChevronLeft,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "ArrowLeft",
    component: ArrowLeft,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "ArrowRight",
    component: ArrowRight,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-22"],
  },
  {
    name: "Slash",
    component: Slash,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "SlidersHorizontal",
    component: SlidersHorizontal,
    category: "navigation",
    musrStories: ["MUSR-16", "MUSR-20"],
  },
  {
    name: "ExternalLink",
    component: ExternalLink,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Grid2X2",
    component: Grid2X2,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "List",
    component: List,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "PanelLeft",
    component: PanelLeft,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Compass",
    component: Compass,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Bookmark",
    component: Bookmark,
    category: "navigation",
    musrStories: ["MUSR-01", "MUSR-05"],
  },
  {
    name: "MoreHorizontal",
    component: MoreHorizontal,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "MoreVertical",
    component: MoreVertical,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Pin",
    component: Pin,
    category: "navigation",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Maximize2",
    component: Maximize2,
    category: "navigation",
    musrStories: ["MUSR-16"],
  },
  // ── Market & Trading ───────────────────────────────────────────────────
  {
    name: "TrendingUp",
    component: TrendingUp,
    category: "market",
    musrStories: ["MUSR-05", "MUSR-13", "MUSR-16"],
  },
  {
    name: "TrendingDown",
    component: TrendingDown,
    category: "market",
    musrStories: ["MUSR-05", "MUSR-13", "MUSR-16"],
  },
  {
    name: "BarChart2",
    component: BarChart2,
    category: "market",
    musrStories: ["MUSR-16", "MUSR-17"],
  },
  {
    name: "BarChart4",
    component: BarChart4,
    category: "market",
    musrStories: ["MUSR-16"],
  },
  {
    name: "LineChart",
    component: LineChart,
    category: "market",
    musrStories: ["MUSR-16"],
  },
  {
    name: "AreaChart",
    component: AreaChart,
    category: "market",
    musrStories: ["MUSR-16"],
  },
  {
    name: "PieChart",
    component: PieChart,
    category: "market",
    musrStories: ["MUSR-14"],
  },
  {
    name: "CandlestickChart",
    component: CandlestickChart,
    category: "market",
    musrStories: ["MUSR-16"],
  },
  {
    name: "Activity",
    component: Activity,
    category: "market",
    musrStories: ["MUSR-09", "MUSR-16"],
  },
  {
    name: "Percent",
    component: Percent,
    category: "market",
    musrStories: ["MUSR-05"],
  },
  {
    name: "IndianRupee",
    component: IndianRupee,
    category: "market",
    musrStories: ["MUSR-04", "MUSR-06", "MUSR-13"],
  },
  {
    name: "DollarSign",
    component: DollarSign,
    category: "market",
    musrStories: ["MUSR-04"],
  },
  {
    name: "ArrowUpRight",
    component: ArrowUpRight,
    category: "market",
    musrStories: ["MUSR-13", "MUSR-05"],
  },
  {
    name: "ArrowDownRight",
    component: ArrowDownRight,
    category: "market",
    musrStories: ["MUSR-13", "MUSR-05"],
  },
  {
    name: "Minus",
    component: Minus,
    category: "market",
    musrStories: ["MUSR-05"],
  },
  {
    name: "Wallet",
    component: Wallet,
    category: "market",
    musrStories: ["MUSR-04", "MUSR-06"],
  },
  {
    name: "Briefcase",
    component: Briefcase,
    category: "market",
    musrStories: ["MUSR-14"],
  },
  {
    name: "Building2",
    component: Building2,
    category: "market",
    musrStories: ["MUSR-13", "MUSR-17"],
  },
  {
    name: "Scale",
    component: Scale,
    category: "market",
    musrStories: ["MUSR-13"],
  },
  {
    name: "Layers",
    component: Layers,
    category: "market",
    musrStories: ["MUSR-17"],
  },
  {
    name: "Zap",
    component: Zap,
    category: "market",
    musrStories: ["MUSR-03", "MUSR-20"],
  },
  {
    name: "Target",
    component: Target,
    category: "market",
    musrStories: ["MUSR-05", "MUSR-14"],
  },
  { name: "Eye", component: Eye, category: "market", musrStories: ["MUSR-02"] },
  {
    name: "EyeOff",
    component: EyeOff,
    category: "market",
    musrStories: ["MUSR-02"],
  },
  {
    name: "Star",
    component: Star,
    category: "market",
    musrStories: ["MUSR-05"],
  },
  {
    name: "Clock",
    component: Clock,
    category: "market",
    musrStories: ["MUSR-01", "MUSR-08"],
  },
  {
    name: "Calendar",
    component: Calendar,
    category: "market",
    musrStories: ["MUSR-05", "MUSR-08"],
  },
  {
    name: "Globe",
    component: Globe,
    category: "market",
    musrStories: ["MUSR-08", "MUSR-17"],
  },
  {
    name: "Newspaper",
    component: Newspaper,
    category: "market",
    musrStories: ["MUSR-05"],
  },
  {
    name: "Hash",
    component: Hash,
    category: "market",
    musrStories: ["MUSR-16"],
  },
  {
    name: "Gauge",
    component: Gauge,
    category: "market",
    musrStories: ["MUSR-09"],
  },
  // ── Actions ────────────────────────────────────────────────────────────
  {
    name: "Plus",
    component: Plus,
    category: "action",
    musrStories: ["MUSR-01", "MUSR-04"],
  },
  {
    name: "Pencil",
    component: Pencil,
    category: "action",
    musrStories: ["MUSR-01", "MUSR-08"],
  },
  {
    name: "Trash2",
    component: Trash2,
    category: "action",
    musrStories: ["MUSR-01", "MUSR-21"],
  },
  {
    name: "Save",
    component: Save,
    category: "action",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Copy",
    component: Copy,
    category: "action",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Download",
    component: Download,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "Upload",
    component: Upload,
    category: "action",
    musrStories: ["MUSR-08"],
  },
  {
    name: "Share2",
    component: Share2,
    category: "action",
    musrStories: ["MUSR-21"],
  },
  {
    name: "RefreshCw",
    component: RefreshCw,
    category: "action",
    musrStories: ["MUSR-08", "MUSR-09"],
  },
  {
    name: "Filter",
    component: Filter,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "SortAsc",
    component: SortAsc,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "QrCode",
    component: QrCode,
    category: "action",
    musrStories: ["MUSR-21"],
  },
  {
    name: "Link2",
    component: Link2,
    category: "action",
    musrStories: ["MUSR-08", "MUSR-21"],
  },
  {
    name: "Send",
    component: Send,
    category: "action",
    musrStories: ["MUSR-03", "MUSR-19"],
  },
  {
    name: "Mail",
    component: Mail,
    category: "action",
    musrStories: ["MUSR-02"],
  },
  {
    name: "MessageSquare",
    component: MessageSquare,
    category: "action",
    musrStories: ["MUSR-03"],
  },
  {
    name: "Phone",
    component: Phone,
    category: "action",
    musrStories: ["MUSR-03"],
  },
  {
    name: "FileText",
    component: FileText,
    category: "action",
    musrStories: ["MUSR-14"],
  },
  {
    name: "Clipboard",
    component: Clipboard,
    category: "action",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Printer",
    component: Printer,
    category: "action",
    musrStories: ["MUSR-14"],
  },
  {
    name: "Maximize",
    component: Maximize,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "Minimize2",
    component: Minimize2,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "RotateCcw",
    component: RotateCcw,
    category: "action",
    musrStories: ["MUSR-01"],
  },
  {
    name: "ZoomIn",
    component: ZoomIn,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "ZoomOut",
    component: ZoomOut,
    category: "action",
    musrStories: ["MUSR-16"],
  },
  {
    name: "Gift",
    component: Gift,
    category: "action",
    musrStories: ["MUSR-21"],
  },
  {
    name: "Tag",
    component: Tag,
    category: "action",
    musrStories: ["MUSR-04", "MUSR-21"],
  },
  {
    name: "Sparkles",
    component: Sparkles,
    category: "action",
    musrStories: ["MUSR-22"],
  },
  {
    name: "Wand2",
    component: Wand2,
    category: "action",
    musrStories: ["MUSR-20"],
  },
  {
    name: "Play",
    component: Play,
    category: "action",
    musrStories: ["MUSR-15"],
  },
  // ── Status ──────────────────────────────────────────────────────────────
  {
    name: "CheckCircle2",
    component: CheckCircle2,
    category: "status",
    musrStories: ["MUSR-09", "MUSR-12", "MUSR-22"],
  },
  {
    name: "XCircle",
    component: XCircle,
    category: "status",
    musrStories: ["MUSR-09", "MUSR-12"],
  },
  {
    name: "AlertTriangle",
    component: AlertTriangle,
    category: "status",
    musrStories: ["MUSR-03", "MUSR-09"],
  },
  {
    name: "AlertCircle",
    component: AlertCircle,
    category: "status",
    musrStories: ["MUSR-03", "MUSR-09"],
  },
  {
    name: "Info",
    component: Info,
    category: "status",
    musrStories: ["MUSR-03"],
  },
  {
    name: "Loader2",
    component: Loader2,
    category: "status",
    musrStories: ["MUSR-09", "MUSR-05"],
  },
  {
    name: "CheckCheck",
    component: CheckCheck,
    category: "status",
    musrStories: ["MUSR-04", "MUSR-22"],
  },
  {
    name: "Check",
    component: Check,
    category: "status",
    musrStories: ["MUSR-04"],
  },
  { name: "Ban", component: Ban, category: "status", musrStories: ["MUSR-12"] },
  {
    name: "Wifi",
    component: Wifi,
    category: "status",
    musrStories: ["MUSR-18"],
  },
  {
    name: "WifiOff",
    component: WifiOff,
    category: "status",
    musrStories: ["MUSR-18"],
  },
  {
    name: "Signal",
    component: Signal,
    category: "status",
    musrStories: ["MUSR-09"],
  },
  {
    name: "ShieldCheck",
    component: ShieldCheck,
    category: "status",
    musrStories: ["MUSR-02", "MUSR-12"],
  },
  {
    name: "Lock",
    component: Lock,
    category: "status",
    musrStories: ["MUSR-02", "MUSR-04"],
  },
  {
    name: "Unlock",
    component: Unlock,
    category: "status",
    musrStories: ["MUSR-02"],
  },
  {
    name: "Crown",
    component: Crown,
    category: "status",
    musrStories: ["MUSR-04"],
  },
  {
    name: "Trophy",
    component: Trophy,
    category: "status",
    musrStories: ["MUSR-11"],
  },
  {
    name: "Flame",
    component: Flame,
    category: "status",
    musrStories: ["MUSR-11"],
  },
  {
    name: "BadgeCheck",
    component: BadgeCheck,
    category: "status",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Circle",
    component: Circle,
    category: "status",
    musrStories: ["MUSR-01"],
  },
  {
    name: "CircleDot",
    component: CircleDot,
    category: "status",
    musrStories: ["MUSR-01"],
  },
  {
    name: "Clock3",
    component: Clock3,
    category: "status",
    musrStories: ["MUSR-01"],
  },
  {
    name: "HeartPulse",
    component: HeartPulse,
    category: "status",
    musrStories: ["MUSR-09"],
  },
  {
    name: "Hourglass",
    component: Hourglass,
    category: "status",
    musrStories: ["MUSR-09"],
  },
  // ── Social ──────────────────────────────────────────────────────────────
  {
    name: "Heart",
    component: Heart,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "ThumbsUp",
    component: ThumbsUp,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "ThumbsDown",
    component: ThumbsDown,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "MessageCircle",
    component: MessageCircle,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "UserPlus",
    component: UserPlus,
    category: "social",
    musrStories: ["MUSR-21", "MUSR-22"],
  },
  {
    name: "UserCheck",
    component: UserCheck,
    category: "social",
    musrStories: ["MUSR-21"],
  },
  {
    name: "AtSign",
    component: AtSign,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "MessagesSquare",
    component: MessagesSquare,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Repeat2",
    component: Repeat2,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Quote",
    component: Quote,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Award",
    component: Award,
    category: "social",
    musrStories: ["MUSR-11", "MUSR-19"],
  },
  {
    name: "Milestone",
    component: Milestone,
    category: "social",
    musrStories: ["MUSR-22"],
  },
  {
    name: "Rocket",
    component: Rocket,
    category: "social",
    musrStories: ["MUSR-20"],
  },
  {
    name: "Handshake",
    component: Handshake,
    category: "social",
    musrStories: ["MUSR-21"],
  },
  {
    name: "Network",
    component: Network,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Podcast",
    component: Podcast,
    category: "social",
    musrStories: ["MUSR-15"],
  },
  {
    name: "Video",
    component: Video,
    category: "social",
    musrStories: ["MUSR-15", "MUSR-19"],
  },
  {
    name: "Megaphone",
    component: Megaphone,
    category: "social",
    musrStories: ["MUSR-03", "MUSR-19"],
  },
  {
    name: "Contact",
    component: Contact,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Group",
    component: Group,
    category: "social",
    musrStories: ["MUSR-19"],
  },
  {
    name: "Rss",
    component: Rss,
    category: "social",
    musrStories: ["MUSR-05", "MUSR-08"],
  },
  {
    name: "Smile",
    component: Smile,
    category: "social",
    musrStories: ["MUSR-22"],
  },
  // ── Device ──────────────────────────────────────────────────────────────
  {
    name: "Smartphone",
    component: Smartphone,
    category: "device",
    musrStories: ["MUSR-11", "MUSR-18"],
  },
  {
    name: "Monitor",
    component: Monitor,
    category: "device",
    musrStories: ["MUSR-18"],
  },
  {
    name: "Tablet",
    component: Tablet,
    category: "device",
    musrStories: ["MUSR-18"],
  },
  {
    name: "Laptop",
    component: Laptop,
    category: "device",
    musrStories: ["MUSR-18"],
  },
  {
    name: "Cloud",
    component: Cloud,
    category: "device",
    musrStories: ["MUSR-11", "MUSR-18"],
  },
  {
    name: "CloudDownload",
    component: CloudDownload,
    category: "device",
    musrStories: ["MUSR-11"],
  },
  {
    name: "HardDrive",
    component: HardDrive,
    category: "device",
    musrStories: ["MUSR-09"],
  },
  {
    name: "Server",
    component: Server,
    category: "device",
    musrStories: ["MUSR-09"],
  },
  { name: "Cpu", component: Cpu, category: "device", musrStories: ["MUSR-09"] },
  {
    name: "Database",
    component: Database,
    category: "device",
    musrStories: ["MUSR-08", "MUSR-09"],
  },
  {
    name: "Fingerprint",
    component: Fingerprint,
    category: "device",
    musrStories: ["MUSR-02"],
  },
  {
    name: "BatteryMedium",
    component: BatteryMedium,
    category: "device",
    musrStories: ["MUSR-11"],
  },
  {
    name: "Power",
    component: Power,
    category: "device",
    musrStories: ["MUSR-18"],
  },
  {
    name: "Vibrate",
    component: Vibrate,
    category: "device",
    musrStories: ["MUSR-11"],
  },
  {
    name: "Volume2",
    component: Volume2,
    category: "device",
    musrStories: ["MUSR-11"],
  },
  {
    name: "Bluetooth",
    component: Bluetooth,
    category: "device",
    musrStories: ["MUSR-18"],
  },
  {
    name: "Cast",
    component: Cast,
    category: "device",
    musrStories: ["MUSR-18"],
  },
  {
    name: "ToggleLeft",
    component: ToggleLeft,
    category: "device",
    musrStories: ["MUSR-20"],
  },
  // ── Finance ─────────────────────────────────────────────────────────────
  {
    name: "CreditCard",
    component: CreditCard,
    category: "finance",
    musrStories: ["MUSR-04", "MUSR-06"],
  },
  {
    name: "Banknote",
    component: Banknote,
    category: "finance",
    musrStories: ["MUSR-04", "MUSR-06"],
  },
  {
    name: "Landmark",
    component: Landmark,
    category: "finance",
    musrStories: ["MUSR-14"],
  },
  {
    name: "PiggyBank",
    component: PiggyBank,
    category: "finance",
    musrStories: ["MUSR-06"],
  },
  {
    name: "Receipt",
    component: Receipt,
    category: "finance",
    musrStories: ["MUSR-04", "MUSR-06"],
  },
  {
    name: "TrendingUpDown",
    component: TrendingUpDown,
    category: "finance",
    musrStories: ["MUSR-05", "MUSR-16"],
  },
  {
    name: "CircleDollarSign",
    component: CircleDollarSign,
    category: "finance",
    musrStories: ["MUSR-04"],
  },
  {
    name: "Sigma",
    component: Sigma,
    category: "finance",
    musrStories: ["MUSR-16", "MUSR-17"],
  },
  {
    name: "Calculator",
    component: Calculator,
    category: "finance",
    musrStories: ["MUSR-06"],
  },
  {
    name: "ListOrdered",
    component: ListOrdered,
    category: "finance",
    musrStories: ["MUSR-13"],
  },
  {
    name: "Presentation",
    component: Presentation,
    category: "finance",
    musrStories: ["MUSR-14"],
  },
  {
    name: "TableProperties",
    component: TableProperties,
    category: "finance",
    musrStories: ["MUSR-16"],
  },
  {
    name: "CirclePercent",
    component: CirclePercent,
    category: "finance",
    musrStories: ["MUSR-17"],
  },
  {
    name: "ArrowUpDown",
    component: ArrowUpDown,
    category: "finance",
    musrStories: ["MUSR-16"],
  },
  {
    name: "GitCompare",
    component: GitCompare,
    category: "finance",
    musrStories: ["MUSR-20"],
  },
  {
    name: "FileSpreadsheet",
    component: FileSpreadsheet,
    category: "finance",
    musrStories: ["MUSR-14"],
  },
  {
    name: "Split",
    component: Split,
    category: "finance",
    musrStories: ["MUSR-06"],
  },
  {
    name: "FolderOpen",
    component: FolderOpen,
    category: "finance",
    musrStories: ["MUSR-14"],
  },
  // ── Academy ─────────────────────────────────────────────────────────────
  {
    name: "GraduationCap",
    component: GraduationCap,
    category: "academy",
    musrStories: ["MUSR-15", "MUSR-22"],
  },
  {
    name: "BookOpen",
    component: BookOpen,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "BookMarked",
    component: BookMarked,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "Brain",
    component: Brain,
    category: "academy",
    musrStories: ["MUSR-15", "MUSR-22"],
  },
  {
    name: "Lightbulb",
    component: Lightbulb,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "PencilLine",
    component: PencilLine,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "FlaskConical",
    component: FlaskConical,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "GalleryVerticalEnd",
    component: GalleryVerticalEnd,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "ScrollText",
    component: ScrollText,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "CirclePlay",
    component: CirclePlay,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
  {
    name: "Medal",
    component: Medal,
    category: "academy",
    musrStories: ["MUSR-11", "MUSR-15"],
  },
  {
    name: "Microscope",
    component: Microscope,
    category: "academy",
    musrStories: ["MUSR-15"],
  },
];

const CATEGORY_COLORS: Record<
  IconCategory,
  { dot: string; label: string; bg: string; text: string }
> = {
  navigation: {
    dot: "#10C9A0",
    label: "Navigation",
    bg: "rgba(0,179,138,0.1)",
    text: "#3DDCBA",
  },
  market: {
    dot: "#22C55E",
    label: "Market & Trading",
    bg: "rgba(34,197,94,0.1)",
    text: "#22C55E",
  },
  action: {
    dot: "#60A5FA",
    label: "Actions",
    bg: "rgba(96,165,250,0.1)",
    text: "#60A5FA",
  },
  status: {
    dot: "#FBBF24",
    label: "Status & Feedback",
    bg: "rgba(251,191,36,0.1)",
    text: "#FBBF24",
  },
  social: {
    dot: "#A78BFA",
    label: "Social & Community",
    bg: "rgba(167,139,250,0.1)",
    text: "#A78BFA",
  },
  device: {
    dot: "#F87171",
    label: "Device & Platform",
    bg: "rgba(248,113,113,0.1)",
    text: "#F87171",
  },
  finance: {
    dot: "#FBBF24",
    label: "Finance & Analytics",
    bg: "rgba(251,191,36,0.1)",
    text: "#FBBF24",
  },
  academy: {
    dot: "#60A5FA",
    label: "Academy",
    bg: "rgba(96,165,250,0.1)",
    text: "#60A5FA",
  },
};

const CATEGORIES = Object.keys(CATEGORY_COLORS) as IconCategory[];

// ─── Icon Grid Component ─────────────────────────────────────────────────────

function IconGrid({ icons, size = 22 }: { icons: IconDef[]; size?: number }) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (icon: IconDef) => {
    const importStr = `import { ${icon.name} } from 'lucide-react';`;
    navigator.clipboard?.writeText(importStr).then(() => {
      setCopied(icon.name);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
        gap: 8,
      }}
    >
      {icons.map((icon) => {
        const Icon = icon.component;
        const isCopied = copied === icon.name;
        const catColor = CATEGORY_COLORS[icon.category];
        return (
          <button
            key={`${icon.category}-${icon.name}`}
            onClick={() => handleCopy(icon)}
            title={`Click to copy: import { ${icon.name} } from 'lucide-react'`}
            style={{
              background: isCopied
                ? "rgba(34,197,94,0.08)"
                : "var(--bg-surface, #0D1614)",
              border: `1px solid ${isCopied ? "rgba(34,197,94,0.4)" : "rgba(232,239,237,0.08)"}`,
              borderRadius: 10,
              padding: "14px 8px 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              transition: "all 0.15s",
              position: "relative",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (!isCopied) {
                (e.currentTarget as HTMLElement).style.borderColor =
                  catColor.dot;
                (e.currentTarget as HTMLElement).style.background = catColor.bg;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isCopied) {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(232,239,237,0.08)";
                (e.currentTarget as HTMLElement).style.background =
                  "var(--bg-surface, #0D1614)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }
            }}
          >
            {isCopied && (
              <span
                style={{
                  position: "absolute",
                  top: 3,
                  right: 4,
                  fontSize: 8,
                  fontWeight: 700,
                  background: "#22C55E",
                  color: "#fff",
                  padding: "1px 5px",
                  borderRadius: 3,
                }}
              >
                ✓
              </span>
            )}
            <Icon
              size={size}
              color={isCopied ? "#22C55E" : "var(--text-primary, #E8EFED)"}
              strokeWidth={1.8}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: isCopied ? "#22C55E" : "var(--text-tertiary, #5A706A)",
                textAlign: "center",
                lineHeight: 1.3,
                wordBreak: "break-word",
              }}
            >
              {icon.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Searchable Icon Browser ─────────────────────────────────────────────────

function IconBrowser({
  filterCategory,
  iconSize = 22,
}: {
  filterCategory?: IconCategory;
  iconSize?: number;
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<IconCategory | "all">(
    filterCategory ?? "all",
  );

  const filtered = useMemo(() => {
    return ICONS.filter((icon) => {
      const matchCat =
        activeCategory === "all" || icon.category === activeCategory;
      const matchQuery =
        !query || icon.name.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, activeCategory]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, IconDef[]> = {};
    filtered.forEach((icon) => {
      if (!groups[icon.category]) groups[icon.category] = [];
      groups[icon.category].push(icon);
    });
    return groups;
  }, [filtered]);

  return (
    <div>
      {/* Stats */}
      <div
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}
      >
        {[
          { label: `${ICONS.length} icons`, color: "#10C9A0" },
          { label: "8 categories", color: "#60A5FA" },
          { label: "23 MUSR stories", color: "#A78BFA" },
          { label: "1.8px stroke weight", color: "#FBBF24" },
          { label: "Click to copy import", color: "#9BACA6" },
        ].map(({ label, color }) => (
          <span
            key={label}
            style={{
              fontSize: 11,
              color,
              background: "rgba(232,239,237,0.06)",
              border: "1px solid rgba(232,239,237,0.08)",
              borderRadius: 99,
              padding: "3px 10px",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Search */}
      <div style={{ position: "relative", maxWidth: 360, marginBottom: 16 }}>
        <Search
          size={14}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--text-tertiary, #5A706A)",
            pointerEvents: "none",
          }}
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search icons… (TrendingUp, Bell, Crown…)"
          style={{
            width: "100%",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "var(--text-primary, #E8EFED)",
            background: "var(--bg-surface, #0D1614)",
            border: "1px solid rgba(232,239,237,0.1)",
            borderRadius: 10,
            padding: "8px 14px 8px 36px",
            outline: "none",
          }}
        />
      </div>

      {/* Category filter tabs */}
      {!filterCategory && (
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              fontSize: 11,
              fontWeight: 500,
              padding: "5px 12px",
              borderRadius: 99,
              border: "1px solid",
              borderColor:
                activeCategory === "all" ? "#10C9A0" : "rgba(232,239,237,0.1)",
              background: activeCategory === "all" ? "#10C9A0" : "none",
              color:
                activeCategory === "all"
                  ? "#001A13"
                  : "var(--text-tertiary, #5A706A)",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            All ({ICONS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = ICONS.filter((i) => i.category === cat).length;
            const catInfo = CATEGORY_COLORS[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  padding: "5px 12px",
                  borderRadius: 99,
                  border: "1px solid",
                  borderColor:
                    activeCategory === cat
                      ? catInfo.dot
                      : "rgba(232,239,237,0.1)",
                  background: activeCategory === cat ? catInfo.dot : "none",
                  color: activeCategory === cat ? "#001A13" : catInfo.text,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  textTransform: "capitalize",
                }}
              >
                {catInfo.label} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Results count */}
      <p
        style={{
          fontSize: 11,
          color: "var(--text-tertiary, #5A706A)",
          marginBottom: 20,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        Showing {filtered.length} of {ICONS.length} icons
        {query && ` matching "${query}"`}
      </p>

      {/* Icon grids — grouped by category */}
      {activeCategory === "all" ? (
        CATEGORIES.filter((cat) => groupedByCategory[cat]?.length).map(
          (cat) => {
            const catInfo = CATEGORY_COLORS[cat];
            return (
              <div key={cat} style={{ marginBottom: 40 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 14,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(232,239,237,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: catInfo.dot,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-primary, #E8EFED)",
                    }}
                  >
                    {catInfo.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "var(--text-tertiary, #5A706A)",
                      marginLeft: "auto",
                    }}
                  >
                    {groupedByCategory[cat].length} icons
                  </span>
                </div>
                <IconGrid icons={groupedByCategory[cat]} size={iconSize} />
              </div>
            );
          },
        )
      ) : filtered.length > 0 ? (
        <IconGrid icons={filtered} size={iconSize} />
      ) : (
        <p style={{ color: "var(--text-tertiary, #5A706A)", fontSize: 13 }}>
          No icons found for &quot;{query}&quot;
        </p>
      )}
    </div>
  );
}

// ─── Storybook meta ──────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Icons/Icon System",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "All 184 Mintx icons sourced from **Lucide React**. Organised across 8 categories covering all 23 MUSR stories. Default stroke weight: **1.8px**. Default size: **22px**. Scales from 12px (badge) to 48px (empty state). Click any icon to copy its `import { IconName } from 'lucide-react'` statement.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllIcons: Story = {
  name: "All Icons (searchable)",
  render: () => (
    <div
      style={{
        padding: 32,
        background: "var(--bg-base, #080E0D)",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#10C9A0",
            marginBottom: 6,
            display: "block",
          }}
        >
          Icon System · v1.0
        </span>
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 32,
            fontWeight: 800,
            color: "var(--text-primary, #E8EFED)",
            letterSpacing: "-1px",
            marginBottom: 8,
          }}
        >
          Mintx Icons
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary, #9BACA6)",
            maxWidth: 520,
          }}
        >
          All icons needed across 23 MUSR stories. Sourced from Lucide React —
          tree-shakable, 1,500+ icons, 1.8px stroke weight. Click any to copy
          its import statement.
        </p>
      </div>
      <IconBrowser />
    </div>
  ),
};

export const NavigationIcons: Story = {
  name: "Navigation (28 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="navigation" />
    </div>
  ),
};

export const MarketIcons: Story = {
  name: "Market & Trading (31 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="market" />
    </div>
  ),
};

export const ActionIcons: Story = {
  name: "Actions (30 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="action" />
    </div>
  ),
};

export const StatusIcons: Story = {
  name: "Status & Feedback (24 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="status" />
    </div>
  ),
};

export const SocialIcons: Story = {
  name: "Social & Community (22 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="social" />
    </div>
  ),
};

export const FinanceIcons: Story = {
  name: "Finance & Analytics (20 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="finance" />
    </div>
  ),
};

export const AcademyIcons: Story = {
  name: "Academy (12 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="academy" />
    </div>
  ),
};

export const DeviceIcons: Story = {
  name: "Device & Platform (18 icons)",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <IconBrowser filterCategory="device" />
    </div>
  ),
};

export const SizingSystem: Story = {
  name: "Sizing System",
  render: () => {
    const sizes = [
      { px: 12, label: "xs · badge" },
      { px: 14, label: "sm · inline" },
      { px: 16, label: "md · button" },
      { px: 20, label: "lg · nav" },
      { px: 24, label: "xl · feature" },
      { px: 32, label: "2xl · hero" },
      { px: 48, label: "3xl · empty state" },
    ];
    return (
      <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary, #E8EFED)",
            marginBottom: 24,
          }}
        >
          Icon Sizes
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 32,
            padding: 28,
            background: "var(--bg-surface, #0D1614)",
            border: "1px solid rgba(232,239,237,0.08)",
            borderRadius: 14,
            flexWrap: "wrap",
          }}
        >
          {sizes.map(({ px, label }) => (
            <div
              key={px}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <TrendingUp
                size={px}
                color={px >= 24 ? "#10C9A0" : "var(--text-primary, #E8EFED)"}
                strokeWidth={px >= 32 ? 1.6 : px <= 12 ? 2 : 1.8}
              />
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--text-primary, #E8EFED)",
                    fontWeight: 600,
                  }}
                >
                  {px}px
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    color: "var(--text-tertiary, #5A706A)",
                    marginTop: 2,
                  }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary, #E8EFED)",
            margin: "32px 0 16px",
          }}
        >
          Colour Contexts
        </h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[
            { label: "brand", color: "#10C9A0", bg: "rgba(0,179,138,0.1)" },
            {
              label: "primary",
              color: "var(--text-primary, #E8EFED)",
              bg: "rgba(232,239,237,0.06)",
            },
            {
              label: "muted",
              color: "var(--text-tertiary, #5A706A)",
              bg: "rgba(232,239,237,0.06)",
            },
            { label: "success", color: "#22C55E", bg: "rgba(34,197,94,0.08)" },
            { label: "danger", color: "#F87171", bg: "rgba(248,113,113,0.08)" },
            { label: "warning", color: "#FBBF24", bg: "rgba(251,191,36,0.08)" },
            { label: "info", color: "#60A5FA", bg: "rgba(96,165,250,0.08)" },
            { label: "inverse", color: "#3DDCBA", bg: "#141F1D" },
          ].map(({ label, color, bg }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUp size={22} color={color} strokeWidth={1.8} />
              </div>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "var(--text-tertiary, #5A706A)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AnimatedStates: Story = {
  name: "Animated Icon States",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <style>{`
        @keyframes mintx-spin { to { transform: rotate(360deg); } }
        @keyframes mintx-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes mintx-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes mintx-pulse-live { 0%,100% { box-shadow:0 0 0 0 rgba(34,197,94,0.5); } 50% { box-shadow:0 0 0 6px rgba(34,197,94,0); } }
        .mintx-spin { animation: mintx-spin 1.2s linear infinite; }
        .mintx-bounce { animation: mintx-bounce 1.5s ease-in-out infinite; }
        .mintx-blink { animation: mintx-blink 1.8s ease-in-out infinite; }
        .mintx-live-dot { animation: mintx-pulse-live 1.8s ease infinite; }
      `}</style>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: "var(--text-primary, #E8EFED)",
          marginBottom: 24,
        }}
      >
        Animated Icon States
      </h2>
      <div
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          padding: 24,
          background: "var(--bg-surface, #0D1614)",
          border: "1px solid rgba(232,239,237,0.08)",
          borderRadius: 14,
          marginBottom: 32,
        }}
      >
        {[
          {
            label: "Loader2 · spin",
            node: (
              <span className="mintx-spin" style={{ display: "inline-flex" }}>
                <Loader2 size={22} color="#10C9A0" strokeWidth={1.8} />
              </span>
            ),
            bg: "rgba(0,179,138,0.08)",
          },
          {
            label: "Live dot · pulse",
            node: (
              <span
                className="mintx-live-dot"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block",
                }}
              />
            ),
            bg: "rgba(34,197,94,0.08)",
          },
          {
            label: "TrendingUp · bounce",
            node: (
              <span className="mintx-bounce" style={{ display: "inline-flex" }}>
                <TrendingUp size={22} color="#60A5FA" strokeWidth={1.8} />
              </span>
            ),
            bg: "rgba(96,165,250,0.08)",
          },
          {
            label: "Bell · blink",
            node: (
              <span className="mintx-blink" style={{ display: "inline-flex" }}>
                <Bell size={22} color="#FBBF24" strokeWidth={1.8} />
              </span>
            ),
            bg: "rgba(251,191,36,0.08)",
          },
          {
            label: "RefreshCw · slow spin",
            node: (
              <span
                style={{
                  display: "inline-flex",
                  animation: "mintx-spin 2s linear infinite reverse",
                }}
              >
                <RefreshCw size={22} color="#A78BFA" strokeWidth={1.8} />
              </span>
            ),
            bg: "rgba(167,139,250,0.08)",
          },
        ].map(({ label, node, bg }) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {node}
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: "var(--text-tertiary, #5A706A)",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: "var(--text-primary, #E8EFED)",
          marginBottom: 16,
        }}
      >
        Toast + Icon Patterns
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 480,
        }}
      >
        {[
          {
            icon: <CheckCircle2 size={16} color="#22C55E" strokeWidth={2} />,
            text: "Position logged to your tracker",
          },
          {
            icon: <XCircle size={16} color="#F87171" strokeWidth={2} />,
            text: "Data connection lost — retrying",
          },
          {
            icon: (
              <span className="mintx-spin" style={{ display: "inline-flex" }}>
                <Loader2 size={16} color="#10C9A0" strokeWidth={2} />
              </span>
            ),
            text: "Fetching live market data…",
          },
          {
            icon: <AlertTriangle size={16} color="#FBBF24" strokeWidth={2} />,
            text: "Market closes in 15 minutes",
          },
        ].map(({ icon, text }, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg-surface, #0D1614)",
              border: "1px solid rgba(232,239,237,0.08)",
              borderRadius: 10,
              padding: "12px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              fontSize: 13,
              color: "var(--text-primary, #E8EFED)",
            }}
          >
            {icon}
            {text}
          </div>
        ))}
      </div>
    </div>
  ),
};

export const MUSRMapping: Story = {
  name: "MUSR Story Mapping",
  render: () => {
    const musrMap: Record<string, string[]> = {
      "MUSR-01 Navigation": [
        "Home",
        "LayoutDashboard",
        "Menu",
        "X",
        "Search",
        "Bell",
        "User",
        "Settings",
        "ChevronDown",
        "PanelLeft",
      ],
      "MUSR-02 Auth": [
        "Lock",
        "Unlock",
        "ShieldCheck",
        "Fingerprint",
        "Eye",
        "EyeOff",
        "Mail",
      ],
      "MUSR-03 Support+Nudges": [
        "MessageSquare",
        "Phone",
        "AlertTriangle",
        "Info",
        "CheckCircle2",
        "Zap",
        "Megaphone",
      ],
      "MUSR-04 Pricing": [
        "Crown",
        "CreditCard",
        "IndianRupee",
        "CheckCheck",
        "Sparkles",
        "ArrowRight",
      ],
      "MUSR-05 Recommendations": [
        "TrendingUp",
        "TrendingDown",
        "Star",
        "Target",
        "Newspaper",
        "Rss",
      ],
      "MUSR-08 SEO": [
        "Globe",
        "Search",
        "Clock",
        "RefreshCw",
        "Database",
        "Link2",
      ],
      "MUSR-09 Observability": [
        "HeartPulse",
        "Server",
        "Activity",
        "AlertCircle",
        "Gauge",
        "HardDrive",
        "Cpu",
      ],
      "MUSR-11 PWA+Engagement": [
        "Smartphone",
        "Cloud",
        "Vibrate",
        "BatteryMedium",
        "Trophy",
        "Flame",
        "Medal",
      ],
      "MUSR-12 Testing": [
        "CheckCircle2",
        "XCircle",
        "AlertTriangle",
        "ShieldCheck",
        "Ban",
      ],
      "MUSR-13 Broker": [
        "Building2",
        "ArrowUpRight",
        "Scale",
        "CreditCard",
        "Banknote",
        "Zap",
      ],
      "MUSR-14 Wealth Mgmt": [
        "Briefcase",
        "Users",
        "FileText",
        "Landmark",
        "PiggyBank",
        "Presentation",
      ],
      "MUSR-15 Academy": [
        "GraduationCap",
        "BookOpen",
        "Brain",
        "Lightbulb",
        "Play",
        "Medal",
        "Award",
      ],
      "MUSR-16 Analytics": [
        "CandlestickChart",
        "BarChart4",
        "AreaChart",
        "Filter",
        "ZoomIn",
        "Download",
      ],
      "MUSR-17 Institutional": [
        "Globe",
        "BarChart2",
        "Building2",
        "TrendingUpDown",
        "CirclePercent",
        "Layers",
      ],
      "MUSR-19 Community": [
        "MessagesSquare",
        "Heart",
        "ThumbsUp",
        "UserPlus",
        "AtSign",
        "Megaphone",
        "Group",
      ],
      "MUSR-20 Release Mgmt": [
        "Wand2",
        "ToggleLeft",
        "Rocket",
        "SlidersHorizontal",
        "GitCompare",
        "Zap",
      ],
      "MUSR-21 Referral": [
        "QrCode",
        "Gift",
        "Tag",
        "Share2",
        "Link2",
        "UserCheck",
        "Handshake",
      ],
      "MUSR-22 Onboarding": [
        "Sparkles",
        "Milestone",
        "GraduationCap",
        "CheckCheck",
        "ArrowRight",
        "Smile",
      ],
    };
    return (
      <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary, #E8EFED)",
            marginBottom: 8,
          }}
        >
          Icons by MUSR Story
        </h2>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-secondary, #9BACA6)",
            marginBottom: 28,
          }}
        >
          Every icon mapped to the MUSR story that requires it — use as dev
          handoff reference.
        </p>
        <div
          style={{
            background: "var(--bg-surface, #0D1614)",
            border: "1px solid rgba(232,239,237,0.08)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr 60px",
              gap: 16,
              padding: "8px 20px",
              background: "rgba(232,239,237,0.04)",
              borderBottom: "1px solid rgba(232,239,237,0.08)",
            }}
          >
            {["MUSR Story", "Key Icons Needed", "Count"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-tertiary, #5A706A)",
                }}
              >
                {h}
              </span>
            ))}
          </div>
          {Object.entries(musrMap).map(([story, icons], idx) => (
            <div
              key={story}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr 60px",
                gap: 16,
                padding: "12px 20px",
                borderBottom:
                  idx < Object.keys(musrMap).length - 1
                    ? "1px solid rgba(232,239,237,0.06)"
                    : "none",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: "#10C9A0",
                  fontWeight: 500,
                }}
              >
                {story}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "var(--text-secondary, #9BACA6)",
                  lineHeight: 1.5,
                }}
              >
                {icons.join(", ")}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: "var(--text-tertiary, #5A706A)",
                }}
              >
                {icons.length} icons
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const InstallCode: Story = {
  name: "Installation & Usage",
  render: () => (
    <div style={{ padding: 32, background: "var(--bg-base, #080E0D)" }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: "var(--text-primary, #E8EFED)",
          marginBottom: 24,
        }}
      >
        Installation & Usage
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          {
            label: "1. Install Lucide React",
            code: "npm install lucide-react",
          },
          {
            label: "2. Import only what you use (tree-shakable)",
            code: `import { TrendingUp, Bell, Search, CandlestickChart, GraduationCap } from 'lucide-react'`,
          },
          {
            label: "3. Use with Mintx design tokens",
            code: `<TrendingUp size={16} color="var(--text-brand)" strokeWidth={1.8} />
<Bell size={20} className="text-mint-400" />          {/* Tailwind */}
<Search size={14} className="text-text-tertiary" />   {/* muted */}`,
          },
          {
            label: "4. Standard stroke widths by size",
            code: `size={12}  strokeWidth={2.0}    // xs — badge
size={16}  strokeWidth={1.8}    // md — button (default)
size={24}  strokeWidth={1.8}    // xl — feature
size={32}  strokeWidth={1.6}    // 2xl — hero
size={48}  strokeWidth={1.4}    // 3xl — empty state`,
          },
        ].map(({ label, code }) => (
          <div key={label}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-tertiary, #5A706A)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 8,
              }}
            >
              {label}
            </p>
            <pre
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                lineHeight: 1.7,
                color: "var(--text-secondary, #9BACA6)",
                background: "var(--bg-elevated, #141F1D)",
                border: "1px solid rgba(232,239,237,0.08)",
                borderRadius: 10,
                padding: "14px 18px",
                overflow: "auto",
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  ),
};

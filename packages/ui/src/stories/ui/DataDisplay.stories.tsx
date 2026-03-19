import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../components/ui/Chip";
import { Tag } from "../../components/ui/Tag";
import { TagGroup } from "../../components/ui/TagGroup";
import { Rating } from "../../components/ui/Rating";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/Avatar";
import { IconButton } from "../../components/ui/IconButton";
import React from "react";
import { Bell, Settings, Search, Plus, X, Moon } from "lucide-react";

const meta: Meta = {
  title: "UI/Data Display",
  tags: ["autodocs"],
};
export default meta;

export const ChipVariants: StoryObj = {
  name: "Chip",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Chip label="Default" />
      <Chip label="Removable" onDelete={() => {}} />
      <Chip label="Outlined" variant="outline" />
      <Chip label="Primary" variant="filled" color="primary" />
      <Chip label="Success" variant="filled" color="success" />
      <Chip label="Warning" variant="filled" color="warning" />
      <Chip label="Error" variant="filled" color="error" />
      <Chip label="Secondary" variant="ghost" color="secondary" />
    </div>
  ),
};

export const TagVariants: StoryObj = {
  name: "Tag & TagGroup",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Tag label="NIFTY 50" />
        <Tag label="Large Cap" onRemove={() => {}} />
        <Tag label="Growth" variant="primary" />
        <Tag label="Dividend" onRemove={() => {}} variant="secondary" />
        <Tag label="ETF" variant="outline" />
      </div>
      <TagGroup
        label="Active Filters"
        tags={["Equity", "Large Cap", "Bullish", "NSE", "F&O"]}
        onRemoveTag={() => {}}
        variant="primary"
      />
    </div>
  ),
};

export const RatingVariants: StoryObj = {
  name: "Rating",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Rating value={5} />
      <Rating value={4} />
      <Rating value={3.5} />
      <Rating value={2} />
      <Rating value={5} size="lg" />
      <Rating value={3} size="sm" />
    </div>
  ),
};

export const AvatarVariants: StoryObj = {
  name: "Avatar",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      {[
        { src: "https://i.pravatar.cc/80?img=1", fallback: "TS", size: 64 },
        { src: "https://i.pravatar.cc/80?img=5", fallback: "RP", size: 48 },
        { src: "https://i.pravatar.cc/80?img=8", fallback: "U", size: 44 },
        { src: undefined, fallback: "KS", size: 44 },
        { src: undefined, fallback: "DS", size: 32 },
      ].map((av, i) => (
        <Avatar key={i} style={{ width: av.size, height: av.size }}>
          {av.src && <AvatarImage src={av.src} />}
          <AvatarFallback>{av.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
};

export const IconButtonVariants: StoryObj = {
  name: "IconButton",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
      <IconButton icon={<Bell size={18} />} aria-label="Notifications" variant="ghost" />
      <IconButton icon={<Settings size={18} />} aria-label="Settings" variant="ghost" />
      <IconButton icon={<Search size={18} />} aria-label="Search" variant="primary" />
      <IconButton icon={<Plus size={18} />} aria-label="Add" variant="primary" size="lg" />
      <IconButton icon={<X size={18} />} aria-label="Close" variant="danger" />
      <IconButton icon={<Moon size={18} />} aria-label="Theme" variant="secondary" />
      <IconButton icon={<Bell size={18} />} aria-label="Disabled" disabled />
    </div>
  ),
};

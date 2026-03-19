import React from "react";
import { Tag, type TagProps } from "./Tag";

export interface TagGroupProps {
  tags: string[];
  onRemoveTag?: (tag: string) => void;
  variant?: TagProps["variant"];
  size?: TagProps["size"];
  label?: string;
  style?: React.CSSProperties;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  tags,
  onRemoveTag,
  variant,
  size,
  label,
  style,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}>
      {label && (
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary, #748A83)", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {label}
        </span>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            variant={variant}
            size={size}
            onRemove={onRemoveTag ? () => onRemoveTag(tag) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

TagGroup.displayName = "TagGroup";

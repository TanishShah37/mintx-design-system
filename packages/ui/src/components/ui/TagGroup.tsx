import React from "react";
import { cn } from "../../tokens/cn";
import { Tag, type TagProps } from "./Tag";

export interface TagGroupProps {
  tags: string[];
  onRemoveTag?: (tag: string) => void;
  variant?: TagProps["variant"];
  size?: TagProps["size"];
  className?: string;
  label?: string;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  tags,
  onRemoveTag,
  variant,
  size,
  className,
  label,
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <label className="text-sm font-semibold text-foreground/80">{label}</label>}
      <div className="flex flex-wrap gap-2">
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

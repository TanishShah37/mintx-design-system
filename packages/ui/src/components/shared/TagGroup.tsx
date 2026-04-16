import React from "react";
import { Tag, type TagProps } from "./Tag";
import { cn } from "../../tokens/cn";

export interface TagGroupProps {
  tags: string[];
  onRemoveTag?: (tag: string) => void;
  variant?: TagProps["variant"];
  size?: TagProps["size"];
  label?: string;
  className?: string;
}

export function TagGroup({
  tags,
  onRemoveTag,
  variant,
  size,
  label,
  className,
}: TagGroupProps): React.JSX.Element {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-body">
          {label}
        </span>
      )}
      <div className="flex flex-wrap gap-1.5">
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
}

TagGroup.displayName = "TagGroup";

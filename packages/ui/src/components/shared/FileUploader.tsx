"use client";

import React, { useRef, useState } from "react";
import { cn } from "../../tokens/cn";
import { Upload, X, File, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

export interface FileUploaderProps {
  onFilesSelected?: (files: File[]) => void;
  maxFiles?: number;
  accept?: string;
  className?: string;
  label?: string;
}

export function FileUploader({
  onFilesSelected,
  maxFiles = 5,
  accept,
  className,
  label,
}: FileUploaderProps): React.JSX.Element {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (files: File[]) => {
    const newFiles = [...selectedFiles, ...files].slice(0, maxFiles);
    setSelectedFiles(newFiles);
    onFilesSelected?.(newFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected?.(newFiles);
  };

  return (
    <div className={cn("flex flex-col gap-3 w-full", className)}>
      {label && <label className="text-sm font-semibold text-foreground/80">{label}</label>}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "relative border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer hover:border-primary/50 hover:bg-primary/5Bg-primary/5",
          isDragging && "border-primary bg-primary/10",
          selectedFiles.length >= maxFiles && "pointer-events-none opacity-50"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={maxFiles > 1}
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
        />
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Upload size={24} />
        </div>
        <div className="text-center">
          <p className="text-sm font-bold">Click or drag to upload</p>
          <p className="text-xs text-muted-foreground mt-1">
            Up to {maxFiles} files {accept ? `(${accept})` : ""}
          </p>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="grid grid-cols-1 gap-2 mt-2">
          {selectedFiles.map((file, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border animate-in slide-in-from-top-2"
            >
              <div className="flex items-center gap-3">
                <File size={18} className="text-primary" />
                <div className="overflow-hidden">
                  <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                  <p className="text-xs text-muted-foreground italic">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <IconButton
                variant="ghost"
                size="sm"
                icon={<X size={16} />}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  removeFile(i);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

FileUploader.displayName = "FileUploader";

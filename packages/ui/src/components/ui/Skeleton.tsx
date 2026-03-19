import React from "react";

function Skeleton({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <style>{`
        @keyframes skeletonPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
      <div
        className={className}
        style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: 10,
          animation: "skeletonPulse 1.8s ease-in-out infinite",
          ...style,
        }}
        {...props}
      />
    </>
  );
}

export { Skeleton };

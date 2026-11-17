import React from "react";
import { clsx } from "clsx";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rect" | "circle";
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rect",
  width,
  height,
  style,
  ...props
}) => {
  const variantStyles = {
    text: "h-4 w-full rounded",
    rect: "rounded-element",
    circle: "rounded-full",
  };

  return (
    <div
      className={clsx("animate-pulse bg-slate-200/80", variantStyles[variant], className)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
      }}
      {...props}
    />
  );
};

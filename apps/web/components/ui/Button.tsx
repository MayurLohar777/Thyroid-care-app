import React from "react";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-element transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 h-8",
    md: "px-4 py-2 text-sm gap-2 h-10",
    lg: "px-6 py-3 text-base gap-2.5 h-12",
  };

  const variantStyles = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-dark focus:ring-brand-primary shadow-sm active:scale-[0.98]",
    secondary:
      "bg-brand-secondary text-white hover:bg-brand-primary focus:ring-brand-secondary shadow-sm active:scale-[0.98]",
    outline:
      "border border-stroke-border bg-white text-typography-primary hover:bg-canvas-hover hover:border-brand-primary/40 focus:ring-brand-primary",
    danger:
      "bg-status-danger text-white hover:bg-red-600 focus:ring-status-danger shadow-sm active:scale-[0.98]",
    ghost:
      "text-typography-primary hover:bg-brand-subtle/50 text-typography-secondary hover:text-brand-dark focus:ring-brand-primary",
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};

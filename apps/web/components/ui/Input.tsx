import React, { forwardRef } from "react";
import { clsx } from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold text-brand-dark uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative rounded-element shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-typography-secondary">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={clsx(
              "block w-full rounded-element border border-stroke-border bg-white text-typography-primary placeholder-typography-muted text-sm transition-colors",
              "h-11 px-3.5 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary",
              leftIcon && "pl-10",
              error && "border-status-danger focus:ring-status-danger focus:border-status-danger",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-status-danger font-medium mt-1">{error}</p>}
        {!error && helperText && <p className="text-xs text-typography-secondary mt-1">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  startContent?: ReactNode;
  endContent?: ReactNode;

  containerClassName?: string;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      label,
      helperText,
      error,
      required,

      leftIcon,
      rightIcon,

      startContent,
      endContent,

      className,
      containerClassName,

      disabled,

      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("w-full space-y-2", containerClassName)}>
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-foreground">
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}

        {/* Input Wrapper */}
        <div
          className={cn(
            "flex h-12 items-center overflow-hidden rounded-2xl border-white bg-background/20 transition-all duration-300",

            error
              ? "border-white/50 focus-within:border-white/50"
              : "border-border focus-within:border-primary",

            "focus-within:ring-none focus-within:ring-none",

            disabled && "cursor-not-allowed opacity-60",
          )}
        >
          {/* Left Icon */}
          {leftIcon && (
            <div className="flex items-center pl-4 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          {/* Start Content */}
          {startContent && (
            <div className="flex items-center pl-4 text-[14px] text-white/50">
              {startContent}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              "h-full w-full flex-1 bg-transparent px-4 text-[14px] text-white outline-none shadow-none",
              "placeholder:text-white/60",
              className,
            )}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="flex items-center pr-4 text-white">{rightIcon}</div>
          )}

          {/* End Content */}
          {endContent && (
            <div className="flex items-center pr-4 text-[14px] text-white">
              {endContent}
            </div>
          )}
        </div>

        {/* Helper / Error */}
        {error ? (
          <p className="text-xs text-destructive">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    );
  },
);

BaseInput.displayName = "BaseInput";

export default BaseInput;

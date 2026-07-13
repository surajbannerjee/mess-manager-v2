"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const PrimaryButton = ({
  children,
  loading = false,
  fullWidth = true,
  variant = "primary",
  className,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  const variants = {
    primary:
      "bg-[linear-gradient(87.84deg,_#FFF7EE_0%,_#F16001_18%,_#C10801_55%,_#000000_100%)] text-primary-foreground hover:opacity-90 active:scale-[0.98]",

    secondary:
      "bg-secondary text-secondary-foreground hover:opacity-90 active:scale-[0.98]",

    outline:
      "border border-primary bg-transparent text-foreground hover:bg-muted",

    ghost: "bg-transparent text-foreground hover:bg-muted",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex py-3.5 items-center tracking-wide justify-center rounded-2xl px-6 text-5  font-bold uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        fullWidth && "w-full",
        variants[variant],
        className,
      )}
      {...props}
    >
      <div />
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        children
      )}
    </button>
  );
};

export default PrimaryButton;

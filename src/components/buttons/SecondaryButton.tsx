"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const SecondaryButton = ({
  children,
  loading = false,
  fullWidth = true,
  className,
  disabled,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex h-14 items-center justify-center rounded-2xl border border-border bg-transparent px-6 text-base font-semibold text-foreground transition-all duration-300",
        "hover:bg-muted active:scale-[0.98]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        children
      )}
    </button>
  );
};

export default SecondaryButton;

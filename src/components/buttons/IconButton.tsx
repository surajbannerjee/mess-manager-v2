"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "ghost";
}

const IconButton = ({
  icon,
  size = "md",
  variant = "ghost",
  className,
  disabled,
  ...props
}: IconButtonProps) => {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  const variants = {
    filled:
      "bg-primary text-primary-foreground hover:opacity-90 active:scale-95",

    outline:
      "border border-border bg-background text-foreground hover:bg-muted active:scale-95",

    ghost: "bg-transparent text-foreground hover:bg-muted active:scale-95",
  };

  return (
    <button
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;

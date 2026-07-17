"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: React.ReactNode;
}

const Radio = ({ label, checked, className, ...props }: RadioProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="radio"
        checked={checked}
        className="peer hidden"
        {...props}
      />

      <div
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300",
          "border-white/30 bg-white/10",
          "peer-checked:border-primary",
          className,
        )}
      >
        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-primary
            scale-0
            transition-transform
            duration-200
            peer-checked:scale-100
          "
        />
      </div>

      {label && <span className="text-sm text-white/80">{label}</span>}
    </label>
  );
};

export default Radio;

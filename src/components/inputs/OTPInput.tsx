"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
  onComplete?: (otp: string) => void;
}

export default function OTPInput({
  length = 6,
  value,
  onChange,
  autoFocus = true,
  disabled = false,
  className,
  onComplete,
}: OTPInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const animate = (el: HTMLInputElement | null) => {
    if (!el) return;

    gsap.fromTo(
      el,
      {
        scale: 0.8,
      },
      {
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      },
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const digit = e.target.value.replace(/\D/g, "").slice(-1);

    const otp = value.split("");
    otp[index] = digit;

    const newValue = otp.join("");

    onChange(newValue);

    animate(inputsRef.current[index]);

    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newValue.length === length && !newValue.includes("")) {
      onComplete?.(newValue);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    onChange(pasted);

    pasted.split("").forEach((_, i) => {
      animate(inputsRef.current[i]);
    });

    if (pasted.length === length) {
      onComplete?.(pasted);
      inputsRef.current[length - 1]?.focus();
    } else {
      inputsRef.current[pasted.length]?.focus();
    }
  };

  return (
    <div className={cn("flex justify-between gap-3", className)}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          value={value[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          autoFocus={autoFocus && index === 0}
          disabled={disabled}
          inputMode="numeric"
          maxLength={1}
          className="
            h-14
            w-14
            rounded-2xl
            border
            border-white/20
            bg-white/10
            text-center
            text-xl
            font-bold
            text-white
            outline-none
            backdrop-blur-md
            transition-all
            duration-300
            focus:border-primary
            focus:bg-white/20
            focus:shadow-[0_0_20px_rgba(193,8,1,.35)]
          "
        />
      ))}
    </div>
  );
}

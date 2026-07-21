"use client";

import { InputHTMLAttributes, ReactNode, useEffect, useRef } from "react";
import { CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  children?: ReactNode;
  error?: string;
}

const Checkbox = ({
  children,
  checked = false,
  className,
  error,
  ...props
}: CheckboxProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!boxRef.current || !iconRef.current) return;

    if (checked) {
      gsap.to(boxRef.current, {
        backgroundColor: "#222",
        borderColor: "#fff",
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.fromTo(
        iconRef.current,
        {
          scale: 0,
          rotate: -20,
          opacity: 0,
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.35,
          ease: "back.out(2)",
        },
      );
    } else {
      gsap.to(boxRef.current, {
        backgroundColor: "transparent",
        borderColor: "rgb(255 255 255 / 56%)",
        duration: 0.2,
      });

      gsap.to(iconRef.current, {
        scale: 0,
        rotate: -20,
        opacity: 0,
        duration: 0.15,
      });
    }
  }, [checked]);

  return (
    <div className="space-y-1">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          className="hidden"
          {...props}
        />

        <div
          ref={boxRef}
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-white bg-white/10",
            className,
          )}
        >
          <CheckCheck
            ref={iconRef}
            size={15}
            className="text-white opacity-0"
          />
        </div>

        <div className="text-sm leading-6 font-semibold text-white/80">{children}</div>
      </label>

      {error && <p className="pl-9 text-xs font-semibold text-red-500">{error}</p>}
    </div>
  );
};

export default Checkbox;

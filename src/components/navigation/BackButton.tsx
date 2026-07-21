"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className = "" }: BackButtonProps) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const button = buttonRef.current;
    const icon = iconRef.current;

    if (!button || !icon) return;


    // Entrance animation
    gsap.fromTo(
      button,
      {
        opacity: 0,
        scale: 0.5,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );


    // Icon animation
    gsap.fromTo(
      icon,
      {
        x: -8,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
      }
    );


  }, []);


  const handleClick = () => {

    // Click animation

    gsap.to(buttonRef.current, {
      scale: 0.85,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });


    setTimeout(() => {
      router.back();
    }, 200);

  };


  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`
        group
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white/10
        text-white
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:bg-white/20
        ${className}
      `}
    >

      {/* Glow */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-primary/30
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />


      <div ref={iconRef} className="relative z-10">
        <ArrowLeft 
          size={22}
          strokeWidth={2}
        />
      </div>

    </button>
  );
};


export default BackButton;
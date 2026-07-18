"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IMAGES } from "@/app/constants/images";

export default function Loading() {
  const container = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLImageElement>(null);
  const text = useRef<HTMLHeadingElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.fromTo(
        logo.current,
        {
          scale: 0.7,
          opacity: 0,
          rotate: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          ease: "back.out(2)",
        },
      )
        .to(
          logo.current,
          {
            scale: 1.08,
            duration: 0.8,
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut",
          },
          "-=0.2",
        )
        .fromTo(
          ".loading-letter",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.4,
          },
          "-=0.5",
        );

      gsap.to(progress.current, {
        xPercent: 100,
        duration: 1.4,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />

        <Image
          ref={logo}
          src={IMAGES.LOGO}
          alt="Logo"
          width={90}
          height={90}
          className="relative z-10"
        />
      </div>

      <h2
        ref={text}
        className="mt-8 flex overflow-hidden text-xl font-semibold text-white"
      >
        {"Loading".split("").map((char, index) => (
          <span key={index} className="loading-letter">
            {char}
          </span>
        ))}
      </h2>

      <div className="mt-8 h-1 w-52 overflow-hidden rounded-full bg-white/10">
        <div
          ref={progress}
          className="h-full w-1/2 rounded-full bg-linear-to-r from-orange-400 via-red-600 to-black"
        />
      </div>
    </main>
  );
}

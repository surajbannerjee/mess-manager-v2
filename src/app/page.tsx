"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { IMAGES } from "./constants/images";

export default function HomePage() {
  const router = useRouter();
  const containerRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          const overlay = transitionRef.current;

          if (!overlay) {
            router.replace("/welcome");
            return;
          }

          gsap.to(overlay, {
            autoAlpha: 1,
            duration: reduceMotion ? 0.15 : 0.6,
            ease: "power2.inOut",
            onComplete: () => router.replace("/welcome"),
          });
        },
      });

      if (reduceMotion) {
        timeline.set([backgroundRef.current, logoRef.current, titleRef.current], { autoAlpha: 1 });
        gsap.set(transitionRef.current, { autoAlpha: 1 });
        router.replace("/welcome");
        return;
      }

      timeline
        .fromTo(backgroundRef.current, { scale: 1.18 }, { scale: 1, duration: 2.4, ease: "power2.out" })
        .fromTo(
          logoRef.current,
          { autoAlpha: 0, y: -260, scale: 0.7 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.15, ease: "bounce.out" },
          0.35,
        )
        .to(
          logoRef.current,
          {
            borderColor: "#e85002",
            duration: 0.28,
            repeat: 3,
            yoyo: true,
          },
          1.45,
        )
        .fromTo(
          titleRef.current,
          { autoAlpha: 0, x: -70 },
          { autoAlpha: 1, x: 0, duration: 0.7, ease: "power3.out" },
          1.85,
        )
        .to([logoRef.current, titleRef.current], { autoAlpha: 0, y: -20, duration: 0.35, ease: "power2.in" }, 2.9)
        .to({}, { duration: 0.35 });
    }, containerRef);

    return () => context.revert();
  }, [router]);

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center"
    >
      <Image
        ref={backgroundRef}
        src={IMAGES.BACKGROUND}
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />
      <div
        ref={transitionRef}
        className="pointer-events-none absolute inset-0 z-1 bg-black/95 opacity-0"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          ref={logoRef}
          src={IMAGES.LOGO}
          alt="Mess Manager logo"
          height={200}
          width={200}
          priority
          quality={100}
          className="h-25 w-25 rounded-full border-2 border-primary bg-violet-500/10 p-2 opacity-0"
        />
        <h1 ref={titleRef} className="text-2xl font-bold text-white opacity-0">
          Mess Manager
        </h1>
      </div>
    </main>
  );
}

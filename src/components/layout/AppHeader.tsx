"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bell } from "lucide-react";
import gsap from "gsap";

import { IMAGES } from "@/app/constants/images";
import Drawer from "@/components/navigation/Drawer";

const AppHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLButtonElement>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial header animation
      gsap.fromTo(
        headerRef.current,
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Bell animation
      const bellTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      });

      bellTimeline
        .to(bellRef.current, {
          rotate: 15,
          duration: 0.1,
          ease: "power1.inOut",
        })
        .to(bellRef.current, {
          rotate: -15,
          duration: 0.1,
        })
        .to(bellRef.current, {
          rotate: 10,
          duration: 0.1,
        })
        .to(bellRef.current, {
          rotate: -10,
          duration: 0.1,
        })
        .to(bellRef.current, {
          rotate: 0,
          duration: 0.2,
        });

      // Header hide/show on scroll
      let lastScroll = window.scrollY;

      const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 80) {
          // Scrolling down
          gsap.to(headerRef.current, {
            yPercent: -120,
            opacity: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        } else {
          // Scrolling up
          gsap.to(headerRef.current, {
            yPercent: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          });
        }

        lastScroll = currentScroll;
      };

      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          bg-white/10
          px-5
          pt-5
          pb-5
          backdrop-blur-xl
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              max-w-[65%]
              items-center
              gap-3
            "
          >
            <button
              onClick={() => setDrawerOpen(true)}
              className="shrink-0 h-12 w-12 cursor-pointer rounded-full bg-linear-to-r from-primary to-primary-dark p-0.5"
            >
              <Image
                src={IMAGES.AVATAR}
                alt="User Avatar"
                width={200}
                height={200}
                className="
                  h-full
                  w-full
                  cursor-pointer
                  rounded-full
                  object-cover
                "
              />
            </button>

            <div
              className="
                flex
                w-full
                flex-col
                gap-1
              "
            >
              <p
                className="
                  font-medium
                  leading-5
                  text-white/70
                "
              >
                Welcome back
              </p>

              <h2
                className="
                  flex
                  items-center
                  gap-1
                  text-[16px]
                  font-bold
                  leading-5
                  text-white
                "
              >
                <span
                  className="
                    min-w-0
                    truncate
                  "
                >
                  Suraj Banerjee
                </span>

                👋
              </h2>
            </div>
          </div>

          <button
            ref={bellRef}
            className="
              relative
              flex
              h-10
              w-10
              origin-top
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
            "
          >
            <Bell size={18} />

            <span
              className="
                absolute
                top-2
                right-2
                h-2
                w-2
                rounded-full
                bg-primary
              "
            />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <Drawer onClose={() => setDrawerOpen(false)} />
      )}
    </>
  );
};

export default AppHeader;
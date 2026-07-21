"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Bell,
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  Settings,
  Users,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Members",
    icon: Users,
  },
  {
    name: "Payments",
    icon: CreditCard,
  },
  {
    name: "Settlement",
    icon: ReceiptText,
  },
  {
    name: "Reports",
    icon: FileText,
  },
  {
    name: "Notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

interface DrawerProps {
  onClose: () => void;
}

const Drawer = ({ onClose }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Overlay animation
      tl.fromTo(
        overlayRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      // Drawer animation
      tl.fromTo(
        drawerRef.current,
        {
          xPercent: -100,
          scale: 0.96,
        },
        {
          xPercent: 0,
          scale: 1,
          duration: 0.7,
          ease: "expo.out",
        },
        "-=0.2"
      );

      // Menu animation
      tl.fromTo(
        itemsRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.35"
      );
    });

    return () => ctx.revert();
  }, []);

  const closeDrawer = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(drawerRef.current, {
      xPercent: -100,
      duration: 0.45,
      ease: "power3.in",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      "-=0.2"
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-100
      "
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={closeDrawer}
        className="
          absolute
          inset-0
          bg-black/50
          backdrop-blur-md
        "
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className="
          relative
          h-full
          w-[85%]
          max-w-sm
          rounded-r-[35px]
          border-r
          border-white/10
          bg-neutral-950/90
          p-6
          text-white
          backdrop-blur-2xl
        "
      >
        {/* Header */}
        <div
          className="
            mb-10
            flex
            items-center
            justify-between
          "
        >
          <div>
            <h1
              className="
                bg-gradient-to-r
                from-orange-400
                to-red-600
                bg-clip-text
                text-2xl
                font-bold
                text-transparent
              "
            >
              Mess Manager
            </h1>

            <p
              className="
                text-sm
                text-white/50
              "
            >
              Manage your mess easily
            </p>
          </div>

          <button
            onClick={closeDrawer}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav
          className="
            flex
            flex-col
            gap-2
          "
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                ref={(el) => {
                  if (el) {
                    itemsRef.current[index] = el;
                  }
                }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-0
                  py-3
                  text-white/70
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-primary/30
                  "
                >
                  <Icon size={20} />
                </span>

                <span
                  className="
                    font-medium
                  "
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          className="
            w-full
            flex
            items-center
            gap-4
            rounded-2xl
            bg-red-500/10
            px-4
            py-3
            text-red-400
            transition-all
            hover:bg-red-500/20
          "
        >
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-red-500/20
            "
          >
            <LogOut size={20} />
          </span>

          <span className="font-medium">Logout</span>
        </button>
      </aside>
    </div>
  );
};

export default Drawer;
"use client";
import { Home, MessageCircle, ReceiptIndianRupee, User, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const menus = [
  { name: "Home", icon: Home, path: "/dashboard" },
  { name: "Meals", icon: UtensilsCrossed, path: "/meals" },
  { name: "Expenses", icon: ReceiptIndianRupee, path: "/expenses" },
  { name: "Chat", icon: MessageCircle, path: "/chat" },
  { name: "Profile", icon: User, path: "/profile" },
];
const BottomNavbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out" },
    );
  }, []);
  return (
    <nav
      ref={ref}
      className=" fixed bottom-5 left-5 right-5 z-50 rounded-full border border-white/50 bg-white/10 py-3 px-3 backdrop-blur-xl "
    >
     
      <div className=" flex justify-around">
       
        {menus.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className=" relative flex flex-col items-center gap-1 "
            >
                <Icon className={`${active ? "text-primary" : "text-white/60"}`} size={20} />
              <span className={`text-xs font-bold ${active ? "text-primary" : "text-white/60"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default BottomNavbar;

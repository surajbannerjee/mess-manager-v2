"use client";
import { IMAGES } from "@/app/constants/images";
import { Bell } from "lucide-react";
export default function Dashboard() {
  return (
    <main
      className=" relative min-h-screen overflow-hidden bg-background px-5"
    >
    <div className="relative mt-30 flex items-center w-full h-auto gap-5 py-5 px-5 bg-white/20 backdrop-blur-xl rounded-3xl">
    <span className="text-[12px] font-bold text-center text-white px-3 py-1 rounded-full absolute -top-5 right-10 bg-brand-gradient">Admin</span>
      <div className="flex items-center justify-center w-6 h-6 rounded-full ">
 <Bell size={18} />
        </div>
      </div>
    </main>
  );
}

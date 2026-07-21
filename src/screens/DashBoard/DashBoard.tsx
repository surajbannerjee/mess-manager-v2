"use client";
import { IMAGES } from "@/app/constants/images";
export default function Dashboard() {
  return (
    <main
      className=" relative min-h-screen overflow-hidden bg-cover bg-center px-5"
      style={{ backgroundImage: `url(${IMAGES.BACKGROUND6})`}}
    >
      <div className="w-full h-hull absolute inset-0 bg-transparent backdrop-blur-xl"/>
    
    </main>
  );
}

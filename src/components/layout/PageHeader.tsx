"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <header
      ref={ref}
      className="
fixed
top-0
left-0
z-50
w-full
px-5
pt-6
"
    >
      <div
        className="
flex
items-center
gap-4
rounded-3xl
border
border-white/20
bg-white/10
px-4
py-3
backdrop-blur-xl
"
      >
        <button
          onClick={() => router.back()}
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
          <ArrowLeft size={20} />
        </button>

        <h1
          className="
text-lg
font-semibold
text-white
"
        >
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;

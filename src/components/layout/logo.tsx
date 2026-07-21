"use client";

import Image from "next/image";
import { IMAGES } from "@/app/constants/images";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const Logo = ({
  width = 500,
  height = 500,
  className = "",
  priority = false,
}: LogoProps) => {
  return (
    <Image
      src={IMAGES.LOGO}
      alt="Logo"
      width={width}
      height={height}
      priority={priority}
      className={`
        rounded-full
        object-cover
        w-20 h-20
        ${width && `w-[${width}px]`}
        ${height && `h-[${height}px]`}
        ${priority && "priority"}
        ${className}
      `}
    />
  );
};

export default Logo;
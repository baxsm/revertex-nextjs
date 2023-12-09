"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface LogoProps {
  className?: string;
  vClassName?: string;
}

const Logo: FC<LogoProps> = ({ className, vClassName }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className={cn(
        "flex items-center text-4xl font-medium h-fit overflow-hidden -mt-2 cursor-pointer select-none",
        className
      )}
    >
      Re
      <span
        className={cn("transform rotate-180 mt-3 text-indigo-500", vClassName)}
      >
        v
      </span>
      ertex
      <span className="text-indigo-500">.</span>
    </div>
  );
};

export default Logo;

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const Background: FC = () => {
  return (
    <div className="absolute inset-x-0 top-0 min-h-screen h-full w-screen flex mx-auto max-w-6xl px-8 z-0">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-1 flex-1 h-full bg-opacity-50 border-gray-100/[0.02]",
            index < 5 ? "border-l-[1px] " : "border-[1px]"
          )}
        />
      ))}
    </div>
  );
};

export default Background;

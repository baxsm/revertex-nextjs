import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-6xl mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

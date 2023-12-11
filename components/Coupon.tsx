"use client";

import { FC, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Coupon: FC = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <section
      className={cn(
        "relative z-10 border-b-[1px] border-gray-200/20 py-4 h-auto transition-all duration-300",
        {
          " hidden": !isActive,
        }
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-center relative">
        <div className="flex items-center justify-center gap-4">
          <div className="bg-gray-200/5 py-2 px-4 rounded-full">
            <h5 className="text-xs">Only 9 coupon left</h5>
          </div>
          <h5 className="text-xs">Get 10% off your first order</h5>
          <Button variant="outline" className="rounded-[5px] text-xs" size="sm">
            Get it now!!
          </Button>
        </div>
        <div className="absolute right-8">
          <XCircle
            onClick={() => setIsActive(false)}
            className="text-foreground hover:text-foreground/80 cursor-pointer duration-300"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Coupon;

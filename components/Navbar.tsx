"use client";

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Navbar: FC = ({}) => {
  return (
    <nav className="sticky top-0 inset-x-0 w-full z-20 bg-background h-24 flex items-center border-b-[1px] border-border">
      <MaxWidthWrapper>
        <div className="w-full flex justify-between items-center">
          <div className="">Logo</div>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-muted-foreground hover:text-indigo-400 duration-300"
            >
              Why Us
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-indigo-400  duration-300"
            >
              Case Studies
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-indigo-400  duration-300"
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-indigo-400 duration-300"
            >
              FAQ
            </Link>
          </div>
          <Button className="rounded-[5px]">
            Let&apos;s Talk{" "}
            <MoveRight className="ml-2 transform -rotate-45 w-4 h-4" />
          </Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

"use client";

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const clientList = [
  {
    imageUrl: "/clients/client1.jpg",
  },
  {
    imageUrl: "/clients/client2.jpg",
  },
  {
    imageUrl: "/clients/client3.jpg",
  },
];

const Banner: FC = () => {
  return (
    <section className="pt-24 relative z-10">
      <MaxWidthWrapper className="flex flex-col gap-8">
        <div className="">
          <h5 className="text-5xl font-semibold lg:leading-tight lg:text-7xl">
            We develop <br />
            <span className="bg-gradient-to-br from-indigo-300 to-indigo-700 bg-clip-text text-transparent">
              amazing
            </span>{" "}
            websites
            <br /> for your business<span className="text-indigo-600">.</span>
          </h5>
        </div>
        <div className="max-w-prose">
          <p className="text-muted-foreground leading-relaxed">
            Discover our seamless workflow as we transform Figma designs into
            stunning Webflow websites. Explore the synergy between design and
            development for a pixel-perfect online experience.
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Button variant="outline" className="rounded-[5px]">
            View Work{" "}
            <MoveRight className="ml-2 transform -rotate-45 w-4 h-4" />
          </Button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0">
              {clientList.map((item, index) => {
                return (
                  <div
                    className={cn("relative w-[35px] h-[35px] rounded-full", {
                      "-ml-3": index !== 0,
                    })}
                    key={index}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={`client ${index + 1} image`}
                      fill
                      className="object-cover object-center rounded-full"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-0">
              <h5 className="text-sm">1000+</h5>
              <p className="text-xs text-muted-foreground">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Banner;

"use client";

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { MoveRight, Sparkle } from "lucide-react";
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
          <h5 className="text-5xl leading-tight font-semibold lg:leading-tight lg:text-7xl">
            We develop{" "}
            <Sparkle className="w-8 h-8 fill-indigo-500 text-indigo-500 transform rotate-[30deg] inline-flex" />
            <br />
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
        <div className="flex gap-8 items-center flex-col md:flex-row">
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-8 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-12 opacity-30"
      >
        <div
          style={{
            clipPath:
              "polygon(54.2% 37.8%, 100% 52.3%, 89.5% 29.7%, 78.5% 0.1%, 73.7% 1.8%, 67.5% 28.3%, 54.2% 61.2%, 47.4% 67.9%, 42.5% 59.3%, 40.2% 35.5%, 27.5% 74.7%, 0.1% 62.9%, 17.9% 100%, 27.6% 74.8%, 76.1% 95.7%, 54.2% 37.8%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[96.12rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-8 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-12 opacity-10"
      >
        <div
          style={{
            clipPath:
              "polygon(54.2% 25.8%, 100% 52.3%, 89.5% 29.7%, 78.5% 0.1%, 73.7% 1.8%, 67.5% 28.3%, 54.2% 61.2%, 47.4% 67.9%, 42.5% 59.3%, 40.2% 35.5%, 27.5% 74.7%, 0.1% 62.9%, 17.9% 100%, 27.6% 84.8%, 76.1% 95.7%, 54.2% 37.8%)",
          }}
          className="relative -right-[16rem] top-2 w-[45rem] aspect-[1684/678] -translate-x-1/2 rotate-[10deg] bg-gradient-to-tr from-indigo-200 to-indigo-800 opacity-30"
        />
      </div>
    </section>
  );
};

export default Banner;

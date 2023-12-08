import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";

const logosList = [
  {
    imageUrl: "/logos/logo1.png",
  },
  {
    imageUrl: "/logos/logo2.png",
  },
  {
    imageUrl: "/logos/logo3.png",
  },
  {
    imageUrl: "/logos/logo4.png",
  },
  {
    imageUrl: "/logos/logo5.png",
  },
  {
    imageUrl: "/logos/logo6.png",
  },
];

const TrustedBusiness: FC = () => {
  return (
    <div className="relative z-10 py-28">
      <MaxWidthWrapper className="flex flex-col gap-0 items-center justify-center">
        <h5 className="text-base">Trusted by 30+ businesses</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 justify-between p-8">
          {logosList.map((logo, index) => {
            return (
              <article
                key={index}
                className="border border-gray-200/20 group hover:border-white duration-300 transition-all relative w-[200px] lg:w-[160px] h-[80px] hover:bg-white rounded-[5px]"
              >
                <Image
                  src={logo.imageUrl}
                  alt={`logo image ${index + 1}`}
                  fill
                  className={cn(
                    "object-contain group-hover:fill-indigo-500 scale-[0.6] object-center fill-white transform"
                  )}
                />
              </article>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TrustedBusiness;

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { MoveRight, Sparkle } from "lucide-react";

const portfolioList = [
  {
    imageUrl: "/portfolio/portfolio1.jpg",
  },
  {
    imageUrl: "/portfolio/portfolio2.jpg",
  },
  {
    imageUrl: "/portfolio/portfolio3.jpg",
  },
  {
    imageUrl: "/portfolio/portfolio4.jpg",
  },
  {
    imageUrl: "/portfolio/portfolio5.jpg",
  },
  {
    imageUrl: "/portfolio/portfolio6.jpg",
  },
];

const Portfolio: FC = () => {
  return (
    <section className="mt-28 relative z-10">
      <MaxWidthWrapper className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h5 className="text-sm text-indigo-400 uppercase tracking-[0.5em]">
            Portfolio
          </h5>
          <h1 className="text-3xl font-medium">
            Our Latest Work{" "}
            <Sparkle className="w-8 h-8 fill-indigo-500 text-indigo-500 transform rotate-[30deg] inline-flex ml-8" />
          </h1>
          <p className="text-sm text-muted-foreground max-w-prose">
            Discover our freshest creations that showcase the power of design
            innovation and digital excellence. Explore our latest work and
            witness the impact we bring to every project
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioList.map((item, index) => {
            return (
              <article
                key={index}
                className="rounded-xl relative w-full flex items-center justify-center group"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    fill
                    src={item.imageUrl}
                    alt={`portfolio image ${index + 1}`}
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute duration-300 bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 w-full bg-zinc-800/60 rounded-bl-xl rounded-br-xl group-hover:cursor-pointer">
                    <div className="pl-12 flex items-center p-4">
                      <h5 className="text-sm">See Project</h5>
                      <MoveRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </MaxWidthWrapper>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-12 opacity-50"
      >
        <div
          style={{
            clipPath:
              "polygon(33.8% 14.2%, 100% 25.8%, 86.2% 11.4%, 74.2% 0.1%, 69.4% 1.8%, 62.5% 14.3%, 53.2% 31.2%, 47.4% 34.6%, 42.5% 29.8%, 40.2% 16.3%, 27.5% 37.5%, 0.1% 31.5%, 17.9% 50%, 27.6% 37.6%, 76.1% 49.9%, 33.8% 14.2%)",
          }}
          className="relative right-0 aspect-[1155/678] w-[20.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-800 opacity-30 sm:right-12 sm:w-screen"
        />
      </div>
    </section>
  );
};

export default Portfolio;

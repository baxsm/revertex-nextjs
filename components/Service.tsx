import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  ArrowRight,
  ArrowUpRightFromCircle,
  Clock4,
  Leaf,
  MapPin,
  MessageCircle,
  Sparkle,
  Trophy,
} from "lucide-react";
import { Button } from "./ui/button";

const serviceList = [
  {
    icon: Trophy,
    title: "Expertise in Figma-to-Webflow",
    description:
      "Utilizing our extensive experience, we excel in transforming Figma designs into fully functional Webflow websites with precision and expertise.",
  },
  {
    icon: MapPin,
    title: "On-Page SEO Excellence",
    description:
      "Demonstrating a proven track record, we specialize in implementing on-page SEO strategies to enhance the visibility and performance of your website.",
  },
  {
    icon: Leaf,
    title: "Interactive Magic",
    description:
      "Harnessing our creative prowess, we deliver interactive magic through innovative design and development, bringing your ideas to life on the digital canvas.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated Project Manager",
    description:
      "Ensuring seamless communication and coordination, our dedicated project manager oversees every aspect of your project to guarantee a smooth and successful collaboration.",
  },
  {
    icon: ArrowUpRightFromCircle,
    title: "Comprehensive Testing",
    description:
      "Prioritizing quality assurance, we conduct comprehensive testing procedures to identify and rectify any issues, ensuring your website functions flawlessly across all platforms.",
  },
  {
    icon: Clock4,
    title: "Timely Delivery",
    description:
      "Adhering to strict timelines, we prioritize timely delivery of your project, ensuring that you receive the final product within the agreed-upon timeframe.",
  },
];

const Service: FC = () => {
  return (
    <section className="relative z-10">
      <MaxWidthWrapper className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h5 className="text-sm text-indigo-400 uppercase tracking-[0.5em]">
            Service
          </h5>
          <h1 className="text-3xl font-medium">
            Exceeding Expectations
            <Sparkle className="w-8 h-8 fill-indigo-500 text-indigo-500 transform rotate-[30deg] inline-flex ml-8" />
          </h1>
          <p className="text-sm text-muted-foreground max-w-prose">
            We&apos;re not just another agency; we&apos;re your path to
            exceptional web projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={index}
                className="border-[1px] border-gray-200/20 bg-zinc-800 bg-opacity-[0.4] rounded-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-full h-full flex flex-col gap-4 p-4 py-8">
                  <div className="p-5 bg-gray-200/10 w-fit rounded-[5px]">
                    <Icon className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base">{service.title}</h5>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-5">
                      {service.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-fit p-6 py-8 bg-transparent border-gray-200/20 hover:bg-white hover:text-zinc-800 rounded-[5px]"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </Button>
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
              "polygon(54.2% 37.8%, 100% 52.3%, 89.5% 29.7%, 78.5% 0.1%, 73.7% 1.8%, 67.5% 28.3%, 54.2% 61.2%, 47.4% 67.9%, 42.5% 59.3%, 40.2% 35.5%, 27.5% 74.7%, 0.1% 62.9%, 17.9% 100%, 27.6% 74.8%, 76.1% 95.7%, 54.2% 37.8%)",
          }}
          className="relative right-0 aspect-[1155/678] w-[20.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-800 opacity-30 sm:right-12 sm:w-[85.0rem]"
        />
      </div>
    </section>
  );
};

export default Service;

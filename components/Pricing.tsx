import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CheckCircle, MoveRight, Sparkle } from "lucide-react";
import { Button } from "./ui/button";

const pricingList = [
  {
    title: "Basic",
    price: 445,
    description:
      "Fully responsive 1 page website developed in Webflow. Unlimited Sections.",
    features: [
      "Professional design layout",
      "Mobile-friendly and responsive",
      "Custom domain integration",
      "SEO optimization",
      "Contact form integration",
      "Fast loading speed",
    ],
  },
  {
    title: "Standard",
    price: 645,
    description:
      "Fully responsive 3 page website developed in Webflow. Unlimited Sections.",
    features: [
      "Professional design layouts for 3 pages",
      "Mobile-friendly and responsive",
      "Custom domain integration",
      "SEO optimization",
      "Contact form integration",
      "Image gallery or portfolio section",
    ],
  },
  {
    title: "Premium",
    price: 945,
    description:
      "Fully responsive 10 page website developed in Webflow. Unlimited Sections.",
    features: [
      "Professional design layouts for 10 pages",
      "Mobile-friendly and responsive",
      "Custom domain integration",
      "SEO optimization",
      "Contact form integration",
      "E-commerce functionality",
    ],
  },
];

const Pricing: FC = () => {
  return (
    <section className="mt-28 relative z-10">
      <MaxWidthWrapper className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h5 className="text-sm text-indigo-400 uppercase tracking-[0.5em]">
            Pricing
          </h5>
          <h1 className="text-3xl font-medium">
            One fixed price to get
            <Sparkle className="w-8 h-8 fill-indigo-500 text-indigo-500 transform rotate-[30deg] inline-flex ml-8" />
            <br />
            your project done
          </h1>
          <p className="text-sm text-muted-foreground max-w-prose">
            Your custom on-demand team for only a single payment
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingList.map((item, index) => {
            return (
              <article
                key={index}
                className="border-[1px] border-gray-200/20 bg-zinc-800 bg-opacity-[0.4] rounded-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-full h-full p-4 flex flex-col gap-4">
                  <h5 className="text-muted-foreground text-xl">
                    {item.title}
                  </h5>
                  <h1 className="text-4xl font-semibold">${item.price}</h1>
                  <p className="text-xs text-muted-foreground leading-5">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-4 mt-4">
                    {item.features.map((feature, i) => {
                      return (
                        <div className="flex items-center gap-2" key={i}>
                          <CheckCircle className="w-4 h-4 text-indigo-500" />
                          <p className="text-xs text-muted-foreground">
                            {feature}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent rounded-[5px]"
                  >
                    Get Started
                    <MoveRight className="ml-2 transform -rotate-45 w-4 h-4" />
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

export default Pricing;

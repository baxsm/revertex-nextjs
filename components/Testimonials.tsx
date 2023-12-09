"use client";

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const testimonialsList = [
  {
    name: "Bob Smith",
    jobTitle: "Marketing Manager",
    content:
      "Working with this team has been an absolute pleasure. They exceeded our expectations in delivering a stunning website that perfectly represents our brand. The attention to detail and creative expertise are unmatched.",
    imageUrl: "/clients/client1.jpg",
  },
  {
    name: "Alice Johnson",
    jobTitle: "CEO",
    content:
      "I highly recommend their services. The team demonstrated exceptional professionalism and skill in developing our website. Their ability to understand our vision and turn it into reality was impressive.",
    imageUrl: "/clients/client2.jpg",
  },
  {
    name: "Ana Miller",
    jobTitle: "Founder",
    content:
      "Exceptional service! The team went above and beyond to deliver a website that perfectly aligns with our brand identity. Their dedication to meeting deadlines and exceeding expectations is commendable.",
    imageUrl: "/clients/client3.jpg",
  },
  {
    name: "Catherine Lee",
    jobTitle: "Creative Director",
    content:
      "An outstanding experience from start to finish. Their commitment to quality and innovation is evident in every aspect of their work. Our website not only looks fantastic but also performs exceptionally well.",
    imageUrl: "/clients/client4.jpg",
  },
  {
    name: "Frank Taylor",
    jobTitle: "CTO",
    content:
      "I am thoroughly impressed with the level of professionalism and expertise displayed by this team. The collaborative approach and attention to detail resulted in a website that exceeded our expectations.",
    imageUrl: "/clients/client5.jpg",
  },
  {
    name: "Eva Rodriguez",
    jobTitle: "Product Manager",
    content:
      "Working with this team was a game-changer for our online presence. They brought fresh and innovative ideas to the table, resulting in a website that stands out in the crowded digital landscape.",
    imageUrl: "/clients/client6.jpg",
  },
  {
    name: "John Doe",
    jobTitle: "UX Designer",
    content:
      "It was a pleasure collaborating with this team on our website redesign. Their commitment to user experience and design aesthetics resulted in a visually appealing and user-friendly website.",
    imageUrl: "/clients/client7.jpg",
  },
  {
    name: "Henry Adams",
    jobTitle: "Sales Manager",
    content:
      "The team's dedication to delivering quality work within tight deadlines is remarkable. Our new website has significantly improved our online presence and user engagement. Highly recommended!",
    imageUrl: "/clients/client8.jpg",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="pt-28 relative z-10">
      <MaxWidthWrapper className="mb-12">
        <div className="flex flex-col gap-2">
          <h5 className="text-sm text-indigo-400 uppercase tracking-[0.5em]">
            Testimonials
          </h5>
          <h1 className="text-3xl font-medium">
            Our clients says
            <Sparkle className="w-8 h-8 fill-indigo-500 text-indigo-500 transform rotate-[30deg] inline-flex ml-8" />
          </h1>
          <p className="text-sm text-muted-foreground max-w-prose">
            Don&apos;t take our word for it. Hear it from our happy clients
          </p>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="overflow-hidden pb-28">
        <Swiper
          spaceBetween={80}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="overflow-visible"
          grabCursor
        >
          {testimonialsList.map((item, index) => {
            return (
              <SwiperSlide key={index} className="px-0 lg:px-24">
                <div className="w-full h-full border-[1px] border-gray-200/20 bg-zinc-800 bg-opacity-[0.4] rounded-xl">
                  <div className="p-8 md:p-12 flex flex-col gap-8 items-center justify-center">
                    <h5 className="text-base max-w-prose text-center">
                      &quot;{item.content}&quot;
                    </h5>
                    <div className="flex flex-col gap-4 items-center justify-center">
                      <div className="w-[60px] h-[60px] relative rounded-full">
                        <Image
                          src={item.imageUrl}
                          fill
                          className="object-cover object-center rounded-full"
                          alt="profile image"
                          sizes=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-center">
                        <h5 className="text-sm">{item.name}</h5>
                        <p className="text-xs text-muted-foreground">
                          {item.jobTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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
              "polygon(33.8% 14.2%, 100% 25.8%, 86.2% 11.4%, 74.2% 0.1%, 69.4% 1.8%, 62.5% 14.3%, 53.2% 31.2%, 47.4% 34.6%, 42.5% 29.8%, 40.2% 16.3%, 27.5% 37.5%, 0.1% 31.5%, 17.9% 50%, 27.6% 37.6%, 76.1% 49.9%, 33.8% 14.2%)",
          }}
          className="relative -right-[16rem] top-2 w-[45rem] aspect-[1684/678] -translate-x-1/2 rotate-[10deg] bg-gradient-to-tr from-indigo-200 to-indigo-800 opacity-30"
        />
      </div>
    </section>
  );
};

export default Testimonials;

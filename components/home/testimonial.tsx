import React from "react";
import Container from "../shared/container";
import TestimonialCard from "../ui/testimonial-card";
import { testimonials } from "@/data/testimonials";
import Tag from "../ui/tag";
import Image from "next/image";

const Testimonial = () => {
  const testimonialsLogo = [
    "/svg/logo0.svg",
    "/svg/logo1.svg",
    "/svg/logo2.svg",
    "/svg/logo3.svg",
  ];

  return (
    <Container className="py-0!  ">
      <div className="flex flex-col justify-center items-center min-h-48 lg:h-104.25 mx-auto text-center gap-5 lg:gap-6.75">
        {/*  border */}
        <span className="lg:hidden flex">
          <Tag>Propulez votre entreprise</Tag>
        </span>
        <h3 className="font-heading text-[32px] md:text-[50px] lg:text-[75px] lg:leading-[83px]   lg:tracking-[-6px]">
          Ce que nos clients disent
        </h3>
        <p className="text-[18px] text-body lg:text-[30px] leading-[124%] lg:leading-[43px] ">
          Enjoy customizable lists, team work tools, and smart
          <br className="hidden sm:flex" /> tracking all in one place. Set
          tasks, get reminders, and
          <br className="hidden sm:flex" /> see your progress simply and
          quickly.
        </p>
      </div>

      <div className="flex flex-col lg:gap-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] py-9.5 lg:gap-[71px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-7.5  lg:gap-10.5">
          <span className="hidden md:flex">
            <Tag>Ceux qui nous ont fait confiance</Tag>
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5.5 gap-x-13.25 md:gap-x-25 p-2.5 my-3">
            {testimonialsLogo.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                height={40}
                width={163}
                style={{ height: "auto" }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center justify-center py-8">
        <div className="relative w-full xs:w-95 h-92.5 rounded-[30px] overflow-hidden group">
          <Image
            src="/png/about.png"
            alt={"title"}
            fill
            sizes="(max-width: 480px) 100vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;

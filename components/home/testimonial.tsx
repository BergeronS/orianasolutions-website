import React from "react";
import Container from "../shared/container";
import TestimonialCard from "../ui/testimonial-card";
import { testimonials, testimonialsLogo } from "@/data/testimonials";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

const Testimonial = () => {
  return (
    <Container className="py-0!  ">
      <div className="flex flex-col justify-center items-center min-h-48 lg:h-104.25 mx-auto text-center gap-5 lg:gap-6.75">
        {/*  border */}
        <span className="lg:hidden flex">
          <Tag>Propulez votre entreprise</Tag>
        </span>
        <Typography variant="h2" as="h3">
          Ce que nos clients disent
        </Typography>
        <Typography variant="p-large">
          Enjoy customizable lists, team work tools, and smart
          <br className="hidden sm:flex" /> tracking all in one place. Set
          tasks, get reminders, and
          <br className="hidden sm:flex" /> see your progress simply and
          quickly.
        </Typography>
      </div>

      <div className="flex flex-col items-center w-full  lg:gap-30">
        <div className="w-full sm:max-w-full max-w-[80%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 lg:gap-16">
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

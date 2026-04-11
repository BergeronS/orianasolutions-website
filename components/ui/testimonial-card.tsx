import React from "react";
import type { Testimonial } from "@/data/testimonials";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-7.5 border border-[#1b1b1b14] rounded-5 shadow-xl ">
      {/* Quote */}
      <p className="max-w-[245px] text-base font-body text-black leading-[23px] tracking-[-1%]">
        {testimonial.quote}{" "}
      </p>

      {/* Author Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Image
          src={testimonial.avatar}
          width={48}
          height={48}
          alt="author"
          className="rounded-full"
        />

        {/* Author Info */}
        <div className="flex flex-col gap-1">
          <h4 className="font-heading text-sm md:text-base font-medium text-black">
            {testimonial.author}
          </h4>
          <p className="text-xs md:text-sm  ">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
